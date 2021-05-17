const express = require("express");
const app = express();
app.get("/index", (req, res) => {
  let { params, callback } = req.query;
  console.log(params); // coolFish
  console.log(callback); // callback
  res.send(`${callback}('我是郭老师')`);
}),
  app.listen(3000, () => {
    console.log("服务开启成功了"); //yellow
  });
