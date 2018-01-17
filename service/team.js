var query = require('./db.js')

module.exports = {

    insertTeamInfo:async function(params){
        let res = await query('INSERT INTO team SET ?', params).then(result => {
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
    deleteTeamInfo: async function (params) {
        let _sql = `DELETE FROM team where id=?`;
        let res = await query(_sql, [params.id]).then(result => {
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
    queryTeamInfo: async function (params) {
        let _sql = `SELECT * FROM team where supply_id=?`;
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