const nexo = require('@tiendanube/nexo').default;

const nexoClient =  nexo.create({
  clientId: '0000',
  log: true,
});

module.exports = nexoClient;
