var express = require('express');
var router = express.Router();
var Tour = require("../models/tour");

/* GET Tour page. */
router.get('/', async function(req, res, next) {
  let tours = await Tour.find();
  // console.log(tours);
  res.render('tours/list', { tours });
});
//Route for Add
router.get('/add', async function(req, res, next) {
  res.render('tours/add');
});
router.post('/add', async function(req, res, next) {
  let tour = new Tour(req.body);
  await tour.save();
  res.redirect('/tours');
});
//Route For delete
router.get('/delete/:id', async function(req, res, next) {
  let tour = await Tour.findByIdAndDelete(req.params.id);
  res.redirect('/tours');
});
//Route for Edit
router.get('/edit/:id', async function(req, res, next) {
  let tour = await Tour.findById(req.params.id);
  res.render('tours/edit', { tour });
});
router.post('/edit/:id', async function(req, res, next) {
  let tour = await Tour.findById(req.params.id);
  tour.title = req.body.title;
  tour.noOfDays = req.body.noOfDays;
  tour.price = req.body.price;
  await tour.save();
  res.redirect("/tours");
});
module.exports = router;
