var query = require('./db.js')

module.exports = {

    insertPickingInfo:async function(params){
        let res = await query('INSERT INTO picking SET ?', params).then(result => {
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
    },
    deletePickingInfo: async function (params) {
        let _sql = `DELETE FROM picking where product_id=? and supply_id=?`;
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
    },
    queryPickingInfo: async function (params) {
        let _sql = `SELECT * FROM picking where supply_id=?`;
        let res = await query(_sql, [params.supply_id]).then(result => {
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