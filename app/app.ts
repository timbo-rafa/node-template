import Router from 'express'
const app = Router()

app.route('/error').get(function (req, res, next) {
  return res.status(500).end();
})

app.route('/param/:parameter').get(function (req, res, next) {
  const {params} = req
  return res.status(200).send("app parameter=" + params);
})

app.route('/').get(function (req, res, next) {
  return res.status(200).send("/app/");
})

app.param('parameter', function (request, response, next, parameter) {
  request.params = parameter
  return next()
})

export default app