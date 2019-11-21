const { getAll, save } = require("./controllers");

module.exports = router => {
  router.route("/users").get(getAll);
  router.route("/users").post(save);
};
