const router = require("express").Router();
const bookRoutes = require("./books");
const { route } = require("./books");

router.use("./books", bookRoutes);

module.exports = router;