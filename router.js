const router = require('koa-router')()

module.exports = (app) => {

	router.get('/', app.controller.home.index)
	router.get('/index', app.controller.home.index)

	//保存产品
	router.post('/saveProduct', app.controller.home.saveProduct)

	//保存用户信息
	router.post('/saveUserInfo', app.controller.home.saveUserInfo)

	//查找用户
	router.post('/findUserName', app.controller.home.findUserName)

	//添加产品
	router.post('/addProductId', app.controller.home.addProductId)

	

	

	app.use(router.routes())
		.use(router.allowedMethods())
}