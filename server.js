const express = require('express');
		const path = require('path');
		const app = express();
		app.use(express.static(__dirname + '/dist/card'));
		app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname+
		'/dist/card/index.html'));});
		const server = app.listen(process.env.PORT || 5000, () => {
			const port = server.address().port;
			console.log(`Express is working on port ${port}`);
		});