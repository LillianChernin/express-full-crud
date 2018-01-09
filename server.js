const express = require('express');
const app = express();
const path = require('path');



app.set('views', './views');
app.set('view engine', 'ejs');


app.use('/static', express.static(path.join(__dirname, 'public')));

const instrumentRoute = require('./routes/instruments');

app.use('/instruments', instrumentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
