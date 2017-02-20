'use strict';

const Hapi = require('hapi');
const mongoose = require('./mongoose');
const db = mongoose();

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 5000 });

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

  require('./professional.server.route')(server);

});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`server running at: ${server.info.uri}`);
});
