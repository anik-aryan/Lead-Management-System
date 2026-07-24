const express = require("express");
const router = express.Router();

const protect = require(
  "../middleware/auth.middleware"
);

const {
  login,
  logout,
  getMe,
  updateProfile,
  changePassword,
} = require(
  "../controllers/auth.controller"
);

router.post("/login", login);

router.post(
  "/logout",
  protect,
  logout
);

router.get(
  "/me",
  protect,
  getMe
);

router.patch(
  "/profile",
  protect,
  updateProfile
);

router.patch(
  "/change-password",
  protect,
  changePassword
);

module.exports = router;