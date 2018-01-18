var mysql = require('mysql');

// 数据库配置
var pool = mysql.createPool({
  host: '111.230.224.238',
  user: 'root',
  password: '10QUAN10m@i',
  database: 'nixin8'
});

let query = function (sql, values1, values2) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve(err)
      } else {
        if (values2){
          connection.query(sql, values1, values2, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release();
          })
        }else{
          connection.query(sql, values1, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release();
          })
        }
        
      }
    })
  });
}

module.exports = query