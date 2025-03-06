const { status } = require("../utils/status");
const { calculateMagicMath } = require("../utils/calculateMagicMath");
const { alertMessages } = require("../utils/constants");

const magicMath = (req, res) => {
  try {
    const number = Number(req.params.number);
    if (!Number.isInteger(number) || number < 0) {
      return res.status(status.CONFLICT).json({
        message: alertMessages.NON_NEGATIVE,
      });
    }

    const result = calculateMagicMath(number);
    if (result) {
      res.status(status.OK).json({
        number,
        result,
      });
    }
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message || alertMessages.INTERNAL_SERVER,
    });
  }
};

module.exports = {
  magicMath,
};
