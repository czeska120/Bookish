const axios = require("axios");

const bookishController = {
    // for redirecting login and signup
    getLanding: async function(req, res) {
        const apiKey = process.env.BOOKS_AUTH_KEY;
        console.log(apiKey);
        const list = "mass-market-paperback"
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/'+list+'.json?api-key='+apiKey;
        var bookListData = "";
        var bookData = "";

        const list2 = "hardcover-fiction"
        const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/'+list2+'.json?api-key='+apiKey;
        var bookListData2 = "";
        var bookData2 = "";


        try {
            const response = await axios.get(url);
            bookListData = response.data;
            bookData = response.data.results.books;

            const response2 = await axios.get(url2);
            bookListData2 = response2.data;
            bookData2 = response2.data.results.books;

        } catch (err) {
            console.log(err);
        }
        res.render('index', {bookListData, bookData, bookListData2, bookData2});
    }
    
}
module.exports = bookishController;