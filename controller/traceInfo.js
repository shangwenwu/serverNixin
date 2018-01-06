module.exports = {
  
  insertTraceInfo : async(ctx,next)=>{
    let res = await ctx.app.service.traceInfo.insertTraceInfo(ctx.request.body);
    ctx.response.body = res;
  }

}
