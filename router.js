const router = require('koa-router')()

module.exports = (app) => {

	router.get('/', app.controller.home.index)
	router.get('/index', app.controller.home.index)

	//保存产品
	router.post('/saveProduct', app.controller.home.saveProduct)

	app.use(router.routes())
		.use(router.allowedMethods())
}