const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', async () => {
    mainWindow = new BrowserWindow();
    await mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});

