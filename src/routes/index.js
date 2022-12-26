const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const userRouter = require("./user");
const paymentRouter = require("./payment");
const dgRouter = require("./dg")
function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
  app.use("/users", userRouter);
  app.use("/payment", paymentRouter);
  app.use('/dg',dgRouter);
 
}

module.exports = route;
