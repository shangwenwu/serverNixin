const router = require('koa-router')()

module.exports = (app) => {

	router.get('/', app.controller.home.index)
	router.get('/index', app.controller.home.index)

	/*
	 *  操作 supply 数据表
	 */
	//保存用户信息
	router.post('/saveUserInfo', app.controller.home.saveUserInfo)
	//查找用户
	router.post('/findUserName', app.controller.home.findUserName)
	//新增产品到用户信息
	router.post('/addProductId', app.controller.home.addProductId)


	/*
	 *  操作 trace_info 数据表
	 */
	//保存产品追溯信息
	router.post('/insertTraceInfo', app.controller.traceInfo.insertTraceInfo)
	//查询用户的单个产品列表
	router.post('queryUserOneProductList', app.controller.traceInfo.queryUserOneProductList)
	

	

	app.use(router.routes())
		.use(router.allowedMethods())
}