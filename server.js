const express = require("express");
const connectDB = require("./db/db");
const socketIo = require("socket.io");
const passport = require("passport");
const authRoute = require("./routes/authRoute");
const http = require("http");
require("dotenv").config();
require("./config/passport");

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello@");
});

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emi("chat message", msg);
  });
});

app.listen(process.env.PORT || 8080, () => {
  connectDB(process.env.DB_URI);

  console.log("Connected to port", process.env.PORT);
});
