const express = require("express");

// Controllers
const {
  createUser,
  updateUser,
  disableUserAccount,
  loginUser,
  getUserById,
} = require("../controllers/user.controller");

// Middlewares
const {
  protectSession,
  protectUser,
} = require("../middlewares/auth.middleware");

const {
  createUserValidations,
  updateUserValidations,
  loginUserValidations,
  validateResult,
} = require("../middlewares/validations.middleware");

const router = express.Router();

// Post - Create new user
router.post(
  "/auth/register",
  createUserValidations,
  validateResult,
  createUser
);

router.post("/auth/login", loginUserValidations, validateResult, loginUser);

router.use(protectSession);

router
  .route("/:id")
  .get(getUserById)
  .patch(protectUser, updateUserValidations, validateResult, updateUser)
  .delete(protectUser, disableUserAccount);

module.exports = { userRouter: router };
