const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        frame: false,   // electron の タイトルバーを消す（必ず -webkit-app-region: drag; とペアで使うこと）

        // 初期表示
        width: 300,
        height: 200,

        // ウィンドウサイズの最小
        minWidth: 300,
        minHeight: 200,

        // ウィンドウサイズの最大
        maxWidth: 300,
        maxHeight: 200,

        useContentSize: true,

        webPreferences: {
            experimentalFeatures: true, // backdrop-filter: すりガラス機能を有効にする
            nodeIntegration: true, // electron v5.0.0 から、明示的に true を指定しないと、require( 'electron' ) に失敗する
        }
    });

    // レンダラープロセスでのウィンドウが閉じられたときの処理
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // index.htmlを読み込む
    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// アプリがアクティブになったときの処理
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// メインプロセスからのメッセージを処理
ipcMain.on('closeApp', () => {
    // ウィンドウを閉じてアプリを終了する
    mainWindow.close();
    app.quit();
});
