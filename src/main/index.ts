import { app, BrowserWindow } from 'electron';
import { format as formatUrl } from 'url';
import * as path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow: BrowserWindow | null = null;

const createMainWindow = () => {
  const window = new BrowserWindow({ webPreferences: { nodeIntegration: true } });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      })
    );
  }

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(window.focus);
  });

  window.on('close', () => {
    app.quit();
  });

  return window;
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
