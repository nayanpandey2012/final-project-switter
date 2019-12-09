const express = require('express');
const httpProxy = require('http-proxy');
const port = process.env.PORT || 3004;

const app = express();

const proxy = httpProxy.createProxyServer();

proxy.on('error', (err, req, res) => {
    console.log(err);
    // display proxy error: 
    res.status(500).send('Proxy Error');
});

app.all('/api*', (req, res) => {
    // server / mongodb
    proxy.web(req, res, {
        target: 'http://localhost:8000'
    })
});

app.all('*', (req, res) => {
    proxy.web(req, res, {
        // front-end server / react
        target: 'http://localhost:4000',
    });
});

app.listen(port, () => console.log(`Gateway on ${port}`));