const express = require('express');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'pug');



//Home route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title: 'Article One',
            author: 'Yevheniia Dilekoglu',
            body: 'This is article one'
        },
        {
            id:2,
            title: 'Article two',
            author: 'Yevheniia Dilekoglu',
            body: 'This is article two'
        },
        {
            id:3,
            title: 'Article three',
            author: 'Yevheniia Dilekoglu',
            body: 'This is article three'
        },
    ]
   res.render('index',{
       title: 'Articles',
       articles: articles
   });
});


//Add route
app.get('/articles/add', function(req, res){
    res.render('add_article',{
        title: 'Add Article'
    });

})








//Start server
app.listen(3000, function(){

    console.log('Server started on port 3000...');
})