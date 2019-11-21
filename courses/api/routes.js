const { getAll, save } = require("./controllers");
// const { authorizationIsValid, handleToken } = require('../authorization/auth.middlewares');

module.exports = router => {
  // router.route('/users/:userId').get([authorizationIsValid, getUser]);

  router.route("/courses").get(getAll);
  router.route("/courses").post(save);
};
