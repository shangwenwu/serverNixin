module.exports = {
  
    insertSalesInfo: async (ctx, next) => {
        let res = await ctx.app.service.sales.insertSalesInfo(ctx.request.body);
        ctx.response.body = res;
    },
    deleteSalesInfo: async (ctx, next) => {
        let res = await ctx.app.service.sales.deleteSalesInfo(ctx.request.body);
        ctx.response.body = res;
    },
    querySalesInfo: async (ctx, next) => {
        let res = await ctx.app.service.sales.querySalesInfo(ctx.request.body);
        ctx.response.body = res;
    }
  

}
