import Router from 'express'
const router = Router()

router.route('/').get(function help(req, res, next) {
  return res.status(200).send("app /");
})

router.route('/:parameter').get(function hash(req, res, next) {
  let parameter = req.parameter
  return res.status(200).send("app parameter=" + parameter);
})

router.param('parameter', function (request, response, next, parameter) {
  request.parameter = parameter
  return next()
})

export default router