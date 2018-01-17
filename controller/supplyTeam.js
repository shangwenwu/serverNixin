module.exports = {
  
    insertSupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyteam.insertSupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    deleteSupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyteam.deleteSupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    querySupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyteam.querySupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    }
  

}
