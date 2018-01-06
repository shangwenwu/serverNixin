module.exports = {
  index: async (ctx, next) => {
    await ctx.render("home/index", {
      title: "node koa mysql"
    })
  },
  saveProduct: async (ctx, next) => {
    let params = ctx.request.body;
    const {
      app
    } = ctx;
    let {
      name,
      user,
      age
    } = ctx.request.body;
    let res = await app.service.home.saveProduct(name, user, age);
    ctx.response.body = res;
  },
  saveUserInfo:async(ctx,next)=>{
    let res = await ctx.app.service.home.saveUserInfo(ctx.request.body);
    ctx.response.body = res;
  },
  findUserName: async (ctx, next) => {
    let res = await ctx.app.service.home.findUserName(ctx.request.body);
    ctx.response.body = res;
  },
  addProductId: async (ctx, next) => {
    let res = await ctx.app.service.home.addProductId(ctx.request.body);
    ctx.response.body = res;
  }
}
