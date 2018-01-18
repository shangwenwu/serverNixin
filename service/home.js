var query = require('./db.js')

module.exports = {

  saveUserInfo:async function(params){
    let res = await query('INSERT INTO supply SET ?', params).then(result => {
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
  updateUserInfo: async function (params) {
    // let arr = [];
    // let sql = 'UPDATE supply SET ';
    // for (let key in params.data){
    //   sql += (key+' = ? ');
    //   arr.push();
    // };
    let res = await query('UPDATE supply SET ? WHERE Id = ?', Object.assign({},params.data), params.id).then(result => {
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
  findUserName:async function(userNameObj){
    let _sql = `SELECT * from supply where ?`;
    let res = await query(_sql, userNameObj).then(result => {
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
  addProductId: async function (updataProduct) {
    let _sql = `UPDATE supply SET product_id = ? WHERE id = ?`;
    let res = await query(_sql, [updataProduct.product_id, updataProduct.id]).then(result => {
      return {
        status: 1,
        data: result.affectedRows
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