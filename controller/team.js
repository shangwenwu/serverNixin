module.exports = {
  
    insertTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.team.insertTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    deleteTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.team.deleteTeamInfo(ctx.request.body);
        ctx.response.body = res;
    },
    queryTeamInfo: async (ctx, next) => {
        let res = await ctx.app.service.team.queryTeamInfo(ctx.request.body);
        ctx.response.body = res;
    }
  

}
