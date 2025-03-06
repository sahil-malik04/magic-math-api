const { status } = require("../utils/status");
const { calculateMagicMath } = require("../utils/calculateMagicMath");
const { alertMessages } = require("../utils/constants");

const getMagicMathValue = (req, res) => {
  try {
    const inputNumber = Number(req.params.number);

    if (!Number.isInteger(inputNumber) || inputNumber < 0) {
      return res.status(status.CONFLICT).json({
        message: alertMessages.NON_NEGATIVE,
      });
    }

    const magicMathResult = calculateMagicMath(inputNumber);

    if (magicMathResult !== undefined) {
      res.status(status.OK).json({
        number: inputNumber,
        result: magicMathResult,
      });
    }
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).json({
      message: err.message || alertMessages.INTERNAL_SERVER,
    });
  }
};

module.exports = {
  getMagicMathValue,
};
