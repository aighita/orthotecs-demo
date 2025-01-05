// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!     Spin up of an Express Server to test build folder validity   !!!!
// !!!!     before uploading it to the web                               !!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// This should be used instead of the npm serve module

// npm run build    # build the project
// node serve.js   # serve the build

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// For any route, serve index.html (React Router catch-all)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
