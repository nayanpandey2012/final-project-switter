const Websocket = require('ws');

// make websocket server:  
const wss = new Websocket.Server({ port: 4005 });

// action types:
const UPDATE_USER_COUNT = 'UPDATE_USER_COUNT';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

// initial state of notes as empty array:
const notes = [];

// helper function to send 
// incoming messages to all connected clients
const broadcastMessage = message => {
    wss.clients.forEach((client) => {
        if (client.readyState === Websocket.OPEN) {
            // serialize data:
            client.send(JSON.stringify(message));
        }
    });
};

// helper function to count active users:
const updateUserCount = () => {
    broadcastMessage({
        type: UPDATE_USER_COUNT,
        count: wss.clients.size,
    });
};

// helper function to update incoming messages from client:
const broadcastAllMessages = (newNote) => {
    notes.unshift(newNote);
   broadcastMessage({
    type: UPDATE_MESSAGES,
    notes,
   });
};

// on connection event with client: 
wss.on('connection', (ws) => {
    console.log('Someone has connected');

    // count active users:
    updateUserCount();
    // send serialize messages from server to client
    // ws.send(JSON.stringify({
    //     type: UPDATE_MESSAGES,
    //     notes,
    // }));

    // on message event with client:
    // ws.on('message', message => {
    //     const messageObj = JSON.parse(message);
    //     switch (messageObj.type) {
    //         case SEND_MESSAGE:
    //             broadcastAllMessages(messageObj.newNote);
    //             break;
    //     }
    //     console.log('ws message: ', message);
    // });

    ws.on('close', () => {
        updateUserCount();
        console.log('someone has disconnected!');
    });

    ws.on('error', e => {
        console.log(e);
    });
});