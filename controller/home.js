module.exports = {
  index: async (ctx, next) => {
    await ctx.render("home/index", {
      title: "泥信 - 来自田地的一封信！"
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
  }
}