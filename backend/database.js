const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsfullstack', {
  useNewUrlParser: true,
}).then(db => console.log(db)).catch(err => console.error(err));
