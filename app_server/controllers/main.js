/* Get Home Page */
module.exports.index = function(req, res) {
    res.render('index', { title: 'Hello Sexy!'});
  };