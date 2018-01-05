var query = require('./db.js')

module.exports = {

  register: async function(name, pwd) {
    let data
    if (name == 'ikcamp' && pwd == '123456') {
      data = {
        status: 0,
        data: {
          title: "个人中心",
          content: "欢迎进入个人中心"
        }
      }
    } else {
      data = {
        status: -1,
        data: {
          title: '登录失败',
          content: "请输入正确的账号信息"
        }
      }
    }
    return data
  },

  saveProduct: async function(name, user, age) {
    let res = await query('INSERT INTO test SET ?', {
      name: name,
      user: user
    }).then(result => {
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
  }

}