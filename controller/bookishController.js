const bookishController = {
    // for redirecting login and signup
    getLanding: async function(req, res) {
       res.render('index');
    }
}
module.exports = bookishController;