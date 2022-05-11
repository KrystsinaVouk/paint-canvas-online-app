const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

const PORT = process.env.PORT || 5000;

app.ws('/', (ws, res) => {
    console.log('The connection is on');
    ws.send(`You have been connected!`);
    ws.on(`message`, (msg) => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg)
                break;
        }
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

function broadcastConnection(ws, msg) {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`The user ${msg.username} has got connected!`)
        }
    })
}

function connectionHandler (ws, msg) {
    ws.id = msg.id
    broadcastConnection(ws, msg);
}
