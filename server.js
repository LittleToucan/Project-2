/*
    1.Install dependencies. npm init -y 
        this will create a package.json and initialize a new node.js project in current directory.
    2. Install express and openssl. 
        Openssl will create ssl certificates and Express will create the http server
        Download openSSL at https://chocolatey.org/install
        then use this cmd in powershell as admin to install openssl. choco install openssl.light
        after that run this command. openssl genpkey -algorithm RSA -out private-key.pem -aes256.
        This command generates a private key with AES256 encryption. It will ask for a password to be set.
    3. generate a certificate request. openssl req -new -key private-key.pem -out csr.pem
    4. generate a self-signed cert. openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem
    3. Create a js file called server.js to create the HTTPS server and serve the html page.
    4. To run an https server need ssl certificates. 
        run the following code in powershell or some equivalent
        openssl req -nodes -new -x509 -keyout server.key -out server.cert
        this will create 'server.key' and 'server.cert' files in the project directory
    5. Run server. node server.js
    6. Access is browser using https://localhost
*/

const express = require('express');
const path = require('path');

//create express app
const app = express();

// Serve static files from the 'public' directory 
// not sure why but using the approach of serving files from a static folder called public works?
// Also for some reason have to put other folders in to access other webpages 
app.use(express.static('public'));

//define route to serve html file
app.get('/', (req, res) => {
    //send file 
    res.sendFile(path.join(__dirname, 'public', 'editingLandingpage.html'));
});

/*
//PROBLEM had a bad decrypt error that persisted abandoned https route
//solution 1(failed): try to reencrypt key 
//solution 2(failed): try to check and set read permissions on key
//configure https options
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

//create https server
try {
    https.createServer(options, app).listen(443, () => {
        console.log('HTTPS server running on port 443');
    });
} catch (err) {
    console.error('Error starting Https server:', err);
}
*/

//start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
