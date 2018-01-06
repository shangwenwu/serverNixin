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
    }

}