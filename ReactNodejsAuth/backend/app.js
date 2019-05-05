const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const fileUpload = require('express-fileupload');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file')

const users = require('./routes/user');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.post('/upload', (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
  })
  let imageFile = req.files.file

  imageFile.mv(`${__dirname}/public/${req.files.file.name}.txt`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    //callName(`${__dirname}/public/${req.body.filename}.txt`)
    res.json({ file: 'Success' });
  });

})
function callName(path) {
  var spawn = require("child_process").spawn;
  var process = spawn('python', ["./hello.py", path]);
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  })
}
app.get('/', function (req, res) {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});