const express = require("express");
const router = express.Router();

router.get("/", async (_req, res, _next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: `The app is working properly! Test ENV: ${process.env.TEST}`,
  });
});

module.exports = router;
