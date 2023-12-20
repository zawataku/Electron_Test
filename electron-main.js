'use strict'

const { app, BrowserWindow } = require('electron')        // Electron 本体

let main_gui = null

app.on('ready', () => {
    let win_option = {
        frame: true,   // electron の タイトルバーを消す（必ず -webkit-app-region: drag; とペアで使うこと）
        width: 300,
        height: 300,
        backgroundColor: '#eee',
        webPreferences: {
            experimentalFeatures: true, // backdrop-filter: すりガラス機能を有効にする
            nodeIntegration: true, // electron v5.0.0 から、明示的に true を指定しないと、require( 'electron' ) に失敗する
        }
    }

    main_gui = new BrowserWindow(win_option)
    main_gui.loadURL('file://' + __dirname + '/index.html')
})

