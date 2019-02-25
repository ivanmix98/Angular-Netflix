const express = require('express');
const path = require('path');
const expressVideo = require('express-video');
const app = express();
 
app.use('/videos', expressVideo.stream(path.join(__dirname,'/videos')));
 
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});