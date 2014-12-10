var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');

var credentials = require('./credentials/creds.js');

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

app.use('/', router);

app.listen(port);

console.log('Server listening at port ' + port);
