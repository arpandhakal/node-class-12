const express = require("express");
const app = new express();
const userRouter = require("./src/routes/userRouter");
const port = 5656;

app.get("/", (req, res, next) => {
  res.json({ message: "Hello" });
});

app.use((req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization == "11") {
    next();
  } else {
    res.status(401).json({ message: "UNAUTHORIZED" });
  }
});

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
