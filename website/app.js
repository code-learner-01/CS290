var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


var destinations = [
            {name: "Skyrim", image: "https://s-media-cache-ak0.pinimg.com/originals/1e/eb/75/1eeb75307bc92e46adec402c39229393.jpg", path: ""},
            {name: "Toussaint", image: "https://i.imgur.com/rjmxrQ3.jpg", path: "" },
            {name: "Skellige", image: "https://i.ytimg.com/vi/NknjE2SBPxw/maxresdefault.jpg", path: "" },
            {name: "Solitude", image: "http://i.imgur.com/4y8b2.jpg", path: "" },
            {name: "Hauteville", image: "https://vignette.wikia.nocookie.net/witcher/images/6/62/Tw3_Hauteville.png/revision/latest?cb=20160625174431", path: "" },
            {name: "Ni No Kuni", image: "https://images6.alphacoders.com/338/338384.png", path: ""},
            {name: "Hyrule", image: "https://i.pinimg.com/originals/4b/6d/75/4b6d750c2d2d35471fc1bbebb3ab448b.jpg", path: ""},
            {name: "Irithyll of the Boreal Valley", image: "https://vignette.wikia.nocookie.net/darksouls/images/c/c1/Irithyll_of_the_Boreal_Valley_-_11.jpg/revision/latest/scale-to-width-down/2000?cb=20161026145931", path: ""},
            // {name: "", image: "", path: "" },
        ];
        
var testimonials = [
    {name: "Skyrim Town Guard", entry: "I used to be an adventurer like you..."},
    {name: "Old Man", entry: "It's dangerous to go alone. Take this!"},
    {name: "General Tullius", entry: "Skyrim's harshness has a way of carving a man down to his true self."},
    {name: "Navi", entry: "Hey! Listen!"},
];

app.get('/', function(req, res){
    res.render("home");
})

app.get('/destinations', function(req,res){
        res.render("destinations", {destinations:destinations});
});

app.get('/destinations/download', function(req, res){
  res.redirect('https://i.imgur.com/IHrMPmz.jpg')
});

app.get('/destinations/ninokuni', function(req,res){
   res.render("ninokuni"); 
});

app.get('/destinations/skyrim', function(req,res){
   res.render("skyrim"); 
});

app.get('/destinations/zelda', function(req,res){
   res.render("zelda"); 
});

app.get('/testimonials', function(req,res){
    res.render("testimonials", {testimonials:testimonials});
})

app.get('/testimonials/new', function(req,res){
   res.render("new.ejs"); 
});

app.post("/testimonials", function(req,res){
    // get data from form and add to testimonials array
    var name = req.body.name;
    var entry = req.body.entry;
    var newEntry = {name: name, entry: entry}
    testimonials.push(newEntry);
    // redirect back to testimonials page
    res.redirect('/testimonials');
})

app.get('/about', function(req,res){
    res.render("about");
})

// Error routes
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The website is being served.");
})