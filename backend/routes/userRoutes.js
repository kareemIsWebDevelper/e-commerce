const { createAdminUser } = require("../helpers/admin");
const router = require("express").Router();
const { userSignUp, userSignIn } = require("../controllers/authController");

// createAdminUser();

router.post("/register", userSignUp);

router.post("/login", userSignIn);

module.exports = router;
