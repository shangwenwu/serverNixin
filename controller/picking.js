module.exports = {
  
    insertPickingInfo: async (ctx, next) => {
        let res = await ctx.app.service.picking.insertPickingInfo(ctx.request.body);
        ctx.response.body = res;
    },
    deletePickingInfo: async (ctx, next) => {
        let res = await ctx.app.service.picking.deletePickingInfo(ctx.request.body);
        ctx.response.body = res;
    },
    queryPickingInfo: async (ctx, next) => {
        let res = await ctx.app.service.picking.queryPickingInfo(ctx.request.body);
        ctx.response.body = res;
    }
  

}
