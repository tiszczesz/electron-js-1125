document.getElementById('sendMessage').addEventListener('click', () => {
    window.electronAPI.sendMessage('Hello from Renderer Process!');
});

window.electronAPI.getAppInfo().then(info => {
    console.log('App Info:', info);

    document.getElementById('app-info').innerHTML = `
        <p>Name: ${info.name}</p>
        <p>Version: ${info.version}</p>
        <p>Chrome Version: ${info.chromeVersion}</p>
        <p>Node Version: ${info.nodeVersion}</p>
        <p>Electron Version: ${info.electronVersion}</p>
    `;
});