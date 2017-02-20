module.exports = (server) => {

  const professional = require('./professional.server.controller');

  server.route({
    method: 'POST',
    path: '/professionals',
    handler: (request, reply) => {
      professional.create(request, reply);
    }
  });

  server.route({
    method: 'GET',
    path: '/professionals',
    handler: (request, reply) => {
      professional.all(request, reply);
    }
  });

};
