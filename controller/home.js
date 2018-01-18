module.exports = {
  index: async (ctx, next) => {
    await ctx.render("home/index", {
      title: "node koa mysql"
    })
  },
  saveUserInfo:async(ctx,next)=>{
    let res = await ctx.app.service.home.saveUserInfo(ctx.request.body);
    ctx.response.body = res;
  },
  updateUserInfo: async (ctx, next) => {
    let res = await ctx.app.service.home.updateUserInfo(ctx.request.body);
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
