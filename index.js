const { exec } = require('child_process');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  exec('./ngrok tcp 4444', (err, stdout, stderr) => {
    if (err) {
      res.send('HATA: ' + stderr);
    } else {
      res.send(`<pre>${stdout}</pre>`);
    }
  });
});

app.listen(port, () => {
  console.log(`Dinleyici başlatıldı: http://localhost:${port}`);
});
