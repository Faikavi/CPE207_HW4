const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile('./public/index.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/gallery.html'){
        fs.readFile('./public/gallery.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/contact.html'){
        fs.readFile('./public/contact.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/profile.html'){
        fs.readFile('./public/profile.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/index.html'){
        fs.readFile('./public/index.html',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }else if(req.url === '/images/FB_IMG_1538769974488.jpg'){
        fs.readFile('./public/images/FB_IMG_1538769974488.jpg',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/jpg'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3907.JPG'){
        fs.readFile('./public/images/IMG_3907.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }
    else if(req.url === '/images/IMG_3903.JPG'){
        fs.readFile('./public/images/IMG_3903.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3945.JPG'){
        fs.readFile('./public/images/IMG_3945.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/jpg'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3953.JPG'){
        fs.readFile('./public/images/IMG_3953.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3955.JPG'){
        fs.readFile('./public/images/IMG_3955.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3992.JPG'){
        fs.readFile('./public/images/IMG_3992.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3905.JPG'){
        fs.readFile('./public/images/IMG_3905.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3908.JPG'){
        fs.readFile('./public/images/IMG_3908.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3954.JPG'){
        fs.readFile('./public/images/IMG_3954.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3963.JPG'){
        fs.readFile('./public/images/IMG_3963.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3993.JPG'){
        fs.readFile('./public/images/IMG_3993.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3994.JPG'){
        fs.readFile('./public/images/IMG_3994.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/images/IMG_3995.JPG'){
        fs.readFile('./public/images/IMG_3995.JPG',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/png'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/jquery.min.js'){
        fs.readFile('./public/assets/js/jquery.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/browser.min.js'){
        fs.readFile('./public/assets/js/browser.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/breakpoints.min.js'){
        fs.readFile('./public/assets/js/breakpoints.min.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/util.js'){
        fs.readFile('./public/assets/js/util.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/js/main.js'){
        fs.readFile('./public/assets/js/main.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/css/main.css'){
        fs.readFile('./public/assets/css/main.css',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url === '/assets/css/font-awesome.min.css'){
        fs.readFile('./public/assets/css/font-awesome.min.css',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(content);
        });
    }else if(req.url === '/hw4.js'){
        fs.readFile('./public/hw4.js',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        });
    }else if(req.url === '/assets/fonts/fontawesome-webfont.woff2?v=4.7.0'){
        fs.readFile('./public/assets/fonts/fontawesome-webfont.woff2',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/font'});
            res.end(content);
        });
    }else if(req.url === '/assets/fonts/fontawesome-webfont.ttf?v=4.7.0'){
        fs.readFile('./public/assets/fonts/fontawesome-webfont.ttf',(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/font'});
            res.end(content);
        });
    }else{
        fs.readFile('./public/404.html',(err,content) => {
            if(err) throw err;
            res.writeHead(404,{'content-type': 'text/html'});
            res.end(content);
        });
    }       
})


const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log('Server is running on port: '+PORT);
});