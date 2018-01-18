const router = require('koa-router')()

module.exports = (app) => {

	router.get('/', app.controller.home.index)
	router.get('/index', app.controller.home.index)

	/*
	 *  操作 supply 数据表
	 */
	//保存用户信息
	router.post('/saveUserInfo', app.controller.home.saveUserInfo)
	//更新用户信息
	router.post('/updateUserInfo', app.controller.home.updateUserInfo)
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
	router.post('/queryUserOneProductList', app.controller.traceInfo.queryUserOneProductList)


	/*
	 *  操作 sales 数据表
	 */
	//保存 预计销售产品
	router.post('/insertSalesInfo', app.controller.sales.insertSalesInfo)
	//删除 预计销售产品
	router.post('/deleteSalesInfo', app.controller.sales.deleteSalesInfo)
	//查询 预计销售产品
	router.post('/querySalesInfo', app.controller.sales.querySalesInfo)


	/*
	 *  操作 picking 数据表
	 */
	//保存 采摘信息
	router.post('/insertPickingInfo', app.controller.picking.insertPickingInfo)
	//删除 采摘信息
	router.post('/deletePickingInfo', app.controller.picking.deletePickingInfo)
	//查询 采摘信息
	router.post('/queryPickingInfo', app.controller.picking.queryPickingInfo)


	/*
	 *  操作 team 数据表
	 */
	//保存 采摘信息
	router.post('/insertTeamInfo', app.controller.team.insertTeamInfo)
	//删除 采摘信息
	router.post('/deleteTeamInfo', app.controller.team.deleteTeamInfo)
	//查询 采摘信息
	router.post('/queryTeamInfo', app.controller.team.queryTeamInfo)



	/*
	 *  操作 supply_team 商户与团队关联表 数据表   
	 */
	//保存 采摘信息
	router.post('/insertSupplyTeamInfo', app.controller.supplyTeam.insertSupplyTeamInfo)
	//删除 采摘信息
	router.post('/deleteSupplyTeamInfo', app.controller.supplyTeam.deleteSupplyTeamInfo)
	//查询 采摘信息
	router.post('/querySupplyTeamInfo', app.controller.supplyTeam.querySupplyTeamInfo)
	

	

	app.use(router.routes())
		.use(router.allowedMethods())
}