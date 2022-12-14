const { body, validationResult } = require("express-validator");

// Utils
const { AppError } = require("../utils/appError");

// User routes validations
exports.createUserValidations = [
  body("name").isString().notEmpty().withMessage("Enter a valid name"),
  body("email").isEmail().notEmpty().withMessage("Enter a valid email"),
  body("password")
    .isAlphanumeric()
    .withMessage(`Password must include letters and numbers`)
    .isLength({ min: 6, max: 20 })
    .withMessage("Password must be 8 characters long"),
];

exports.updateUserValidations = [
  body("name").notEmpty().withMessage(`Name can't be empty`),
  body("email").isEmail().notEmpty().withMessage("Enter a valid email"),
];

exports.loginUserValidations = [
  body("email").isEmail().notEmpty().withMessage("Credentials are not valid"),
  body("password").notEmpty().withMessage("Credentials are not valid"),
];

exports.validateResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors
      .array()
      .map(({ msg }) => msg)
      .join(". ");

    return next(new AppError(message, 400));
  }

  next();
};
