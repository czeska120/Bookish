require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route = require("./routes/route.js")
app.use('/', route);

// app.get("/", async function(req,res){
    
    

//     var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 console.log("Found!");
//                 var bookList = JSON.parse(xhr.responseText);
//                 console.log(bookList);
//             }
//             else {
//                 alert("Error while requesting.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
//             }
//         }
//     };
//     xhr.open('GET', url, true);
//     xhr.send(); 
    // https.get(url,function(response){
    //     response.on("data", function(data){
    //         try {
    //             const booksData = JSON.parse(data);
    //             console.log(booksData);
    //         } catch (e) {
    //             console.log("Cannot parse data.");
    //         }
            
    //     });
    // });

// });

app.listen(3000, function () {
    console.log("Server started on port 3000");
});