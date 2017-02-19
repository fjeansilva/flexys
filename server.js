'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        listing: true
      }
    },
    config: {
      auth: false
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/register-user',
    handler: (request, reply) => {
      reply.file('./public/register-user.html');
    }
  });
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`server running at: ${server.info.uri}`);
});
