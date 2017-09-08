module.exports = (server) => {
    server.get('/customers', (req, res) => {
        res.send({ "kundenr": 1234,"navn": "Jonas" });
    });
};