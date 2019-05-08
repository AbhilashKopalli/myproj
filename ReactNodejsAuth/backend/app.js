const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const jwt_decode =  require('jwt-decode');
const fileUpload = require('express-fileupload');
const UploadHistory = require('./models/UploadHistory');

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

  imageFile.mv(`${__dirname}/public/${req.files.file.name}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    writeToUploadHistory(req, req.files.file.name);
    callName(res);
  });

})
function writeToUploadHistory(req, fileName){
    var a = jwt_decode(req.headers.authorization.replace("Bearer ",""));
    var temp = new UploadHistory({
      id: a.id,
      name: fileName
    });
    temp.save(
      function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to Upload History collection.");
      }
    );
}
app.get('/uploadhistory', (req, res, next) => {
  try{
    jwt_decode(req.headers.authorization.replace("Bearer ","")).id;
  }
  catch(e){
    return res.status(500).send(e);
  }
  var a = jwt_decode(req.headers.authorization.replace("Bearer ","")).id;
  var temp = UploadHistory.find({
    "id": ""+a
  })
  temp.exec(function (err, docs) {
    if(err)
      res.status(500).json({"error": err})
    return res.json(docs)
  })
})
function callName(res) {
  var spawn = require("child_process").spawn;
  var process = spawn('python', ["./hello.py"]);
  process.stdout.on('data', function (data) {
    console.log(data);
    res.json(data.toString());
  })
}
app.get('/', function (req, res) {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});