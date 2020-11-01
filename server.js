const express = require('express');

const app = express();

app.use(express.static('./dist/dream-map'));

app.get('/*',(req,res) => res.sendFile('index.html', { root: 'dist/dream-map/'}));

app.listen(process.env.PORT || 8080);