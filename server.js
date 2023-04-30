

const express = require('express');
const app = express();
const path = require('path');
// Add MIME type configuration for JavaScript files
app.use(express.static('../dist/my-Shop', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));

// Serve index.html file
/* app.get('*', (req, res) => {
    res.sendFile('dist/my-Shop/index.html', { root: '.' });
}); */
app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'/dist/my-Shop/index.html'));
 });

// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
/* const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/myShop'));

app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'/dist/my-Shop/index.html'));
 });
app.listen(port, () => console.log(`Server started on port ${port}`)); */
