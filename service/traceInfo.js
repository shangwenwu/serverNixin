var query = require('./db.js')

module.exports = {

    insertTraceInfo:async function(params){
        let res = await query('INSERT INTO trace_info SET ?', params).then(result => {
        return {
            status: 1,
            data: result.insertId
        };
        }).catch(err => {
        return {
            status: 0,
            data: err
        };
        });
        return res;
    },
    queryUserOneProductList: async function (params) {
        let _sql = `SELECT * FROM nixin8.trace_info where product_id=? and supply_id=? ORDER BY create_time asc`
        let res = await query(_sql, [params.product_id, params.supply_id]).then(result => {
            return {
                status: 1,
                data: result
            };
        }).catch(err => {
            return {
                status: 0,
                data: err
            };
        });
        return res;
    }
    
}