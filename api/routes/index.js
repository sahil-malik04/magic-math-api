const { getMagicMathValue } = require("../controller/magicMathController");
const { router } = require("../utils/express");

router.get("/", (req, res) => {
  res.send("Welcome to the Magic Math API");
});

router.get("/:number", getMagicMathValue);

module.exports = router;
