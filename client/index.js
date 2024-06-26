import { app, BrowserWindow } from 'electron';

function createWindow() {
    const win = new BrowserWindow({ 
        width: 1000,
        height: 1000, 
        autoHideMenuBar: true,
        webPreferences: {
            zoomFactor: 4
        }
    });
    win.loadURL("http://localhost:5173");
}

app.on("ready", createWindow);