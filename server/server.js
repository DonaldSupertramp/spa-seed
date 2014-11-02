var express     = require('express');
var url         = require('url');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var credentials = require('./credentials/creds.js');
var Chapter     = require('./models/chapter.js');
var user        = require('./users/users.js');
var formidable  = require('formidable');
var cors        = require('cors');


var app = express();

mongoose.connect(credentials.data.mongourl, {
    user: credentials.data.user,
    pass: credentials.data.pass,
    auth: {
        authSource: "admin"
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3055;

var router = express.Router();

router.route('/')
    .get(function(req,res){


    });

app.use('/api', router);

app.listen(port);
console.log('Server listening at port ' + port);
