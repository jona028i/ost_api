const restify = require('restify');
const server = restify.createServer({
    'name': 'osteAPI',
    'version': '1.1.0'
})
require('./routes/index')(server);

server.listen(666);