const axios = require("axios");
const router = require("express").Router();
const bookRoutes = require('./books');
const BookList = require("../client/src/components/BookList");
router.use("/books", bookRoutes);
router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

app.get('/' , function(req,res){

  res.send(BookList)
})
app.render(BookList)
module.exports = router;