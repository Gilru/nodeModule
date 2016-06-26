var fs = require("fs");

exports.index = function (req, res) {
    var stream = fs.createReadStream(__dirname + "/public/index.html");
    stream.pipe(res);
    
}

exports.search = function (req, res) {
  res.render("search",{search: req.query.s});
    // console.log(req.query.s);
    

}