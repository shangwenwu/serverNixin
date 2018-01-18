module.exports = {
  
    insertSupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyTeam.insertSupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    deleteSupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyTeam.deleteSupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    querySupplyTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.supplyTeam.querySupplyTeamInfo(ctx.request.body);
        ctx.response.body = res;
    }
  

}
