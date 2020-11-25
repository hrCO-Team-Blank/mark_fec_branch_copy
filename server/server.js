// server.jsx
const express = require('express');
const app = express();
const PORT = 3004;
const path = require('path'); // CC Added

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get('/*', (req, res) => {
		// Handle the request
		// -- Could make DB queries here
		// Send back O-K
		/* CC commented out - res.status(200).send('The server is taking requests to the products/:id endpoint');*/
		// CC added
		res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
			if (err) {
				res.status(500).send(err);
			}
		});
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});
