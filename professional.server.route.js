module.exports = (server) => {

  const professional = require('./professional.server.controller');

  server.route({
    method: 'POST',
    path: '/v1/professionals',
    handler: (request, reply) => {
      professional.create(request, reply);
    }
  });

  server.route({
    method: 'GET',
    path: '/v1/professionals',
    handler: (request, reply) => {
      professional.all(request, reply);
    }
  });

};
