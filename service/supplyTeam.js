var query = require('./db.js')

module.exports = {

    insertSupplyTeamInfo:async function(params){
        let res = await query('INSERT INTO supply_team SET ?', params).then(result => {
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
    deleteSupplyTeamInfo: async function (params) {
        let _sql = `DELETE FROM supply_team where id=?`;
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
    querySupplyTeamInfo: async function (params) {
        let _sql = '',id;
        if (params.team_id){
            _sql = `SELECT * FROM supply_team where team_id=?`;
            id = params.team_id;
        } else if (params.supply_id){
            _sql = `SELECT * FROM supply_team where supply_id=?`;
            id = params.supply_id;
        }
        let res = await query(_sql, [id]).then(result => {
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