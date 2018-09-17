const phoneRepository = require('./repositories/phoneRepository');
const phoneRouter = require('./routers/phoneRouter')(phoneRepository);

module.exports = app => {
  app.use('/phones', phoneRouter);
};
