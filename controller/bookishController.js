const axios = require("axios");

const bookishController = {
    // for redirecting login and signup
    getLanding: async function(req, res) {
        const apiKey = process.env.BOOKS_AUTH_KEY;
        console.log(apiKey);
        const list = "hardcover-fiction"
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/'+list+'.json?api-key='+apiKey;
        var bookListData = "";
        var bookData = ""

        try {
            const response = await axios.get(url);
            bookListData = response.data;
            bookData = response.data.results.books;
        } catch (err) {
            console.log(err);
        }
        console.log(bookListData);
        console.log("============== ONE BOOK AUTHOR ==========")
        console.log(bookData[0].author);
        res.render('index', {bookListData, bookData});
    }
    
}
module.exports = bookishController;