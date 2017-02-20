
const Professional = require('./professional.server.model');

exports.create = (request, reply) => {
  const professional = new Professional(request.payload);

  professional.save(function(err){
    if (err) throw err;

    reply(professional);
  });
}

exports.all = (request, reply) => {
  Professional.find({}, function(err, professionals) {
    if (err) throw err;
    reply(professionals);
  });
}
