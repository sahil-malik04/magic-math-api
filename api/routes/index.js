const { magicMath } = require("../controller/magicMathController");
const { router } = require("../utils/express");

router.get("/", (req, res) => {
  res.send("Welcome to the Magic Math API");
});

router.get("/:number", magicMath)

module.exports = router;
