const chokidar = require('chokidar');
chokidar.watch('./dist/.reload').on('change', () => {
  chrome.runtime.reload(); // Chrome API kullanarak yenile
});