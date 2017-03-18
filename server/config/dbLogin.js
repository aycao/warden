const login = 'acao';
const password = 'acao1013';
const address = `mongodb://${login}:${password}@ds121190.mlab.com:21190/warden`;
const dbLogin = {
  login,
  password,
  address,
};

module.exports = dbLogin;