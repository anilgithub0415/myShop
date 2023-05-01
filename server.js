
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist', 'my-eshop')));

// Serve index.html for all other routes
app.get('*', (req, res) => {
 // res.sendFile(path.join(__dirname, 'dist', 'my-eshop', 'index.html'));
// res.sendFile(path.join('./dist', 'my-Shop', 'index.html'));
 //res.sendFile('index.html', { root: __dirname + '/dist/my-eshop' });
  res.sendFile(path.join(__dirname, 'my-eshop', 'index.html'));
});

// Start the server on port 8081
const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log('finding index.html at:'+path.join('dist', 'my-eshop', 'index.html'))
  console.log(`Server started on port ${port} and __dirname:${__dirname}`);
});
/* const express = require('express');
const app = express();
const path = require('path');
// Add MIME type configuration for JavaScript files
app.use(express.static('dist/my-Shop', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));

// Serve index.html file
// app.get('*', (req, res) => {
//    res.sendFile('my-Shop/index.html', { root: '.' });
//}); 
app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'dist/my-Shop/index.html'));
 });

// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); */
/* const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/myShop'));

app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'/dist/my-Shop/index.html'));
 });
app.listen(port, () => console.log(`Server started on port ${port}`)); */
