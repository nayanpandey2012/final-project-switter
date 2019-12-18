const Websocket = require('ws');

// make websocket server:  
const wss = new Websocket.Server({ port: 4005 });

const broadcastMessage = message => {
    wss.clients.forEach((client) => {
        if (client.readyState === Websocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
};

const updateUserCount = () => {
    broadcastMessage({
        type: 'UPDATE_USER_COUNT',
        count: wss.clients.size,
    });
};

wss.on('connection', (ws) => {
    console.log('Someone has connected');
    updateUserCount();

    ws.on('close', () => {
        updateUserCount();
        console.log('someone has disconnected!');
    });

    ws.on('error', e => {
        console.log(e);
    });
});