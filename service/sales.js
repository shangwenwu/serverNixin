var query = require('./db.js')

module.exports = {

    insertSalesInfo:async function(params){
        let res = await query('INSERT INTO sales SET ?', params).then(result => {
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
    deleteSalesInfo: async function (params) {
        let _sql = `DELETE FROM sales where ?`;
        let res = await query(_sql, params).then(result => {
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
    querySalesInfo: async function (params) {
        let _sql = `SELECT * FROM sales where ?`;
        let res = await query(_sql, params).then(result => {
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