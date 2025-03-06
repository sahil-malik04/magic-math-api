const { router } = require("../utils/express");

router.get("/", (req, res) => {
  res.send("Welcome to the Magic Math API");
});

module.exports = router;
