const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

const cafesDetail = require('./cafes_detail.json');
const restaurantsDetail = require('./restaurants_detail.json');

let cafes = [
  { id: 1, name: 'Montage', pictureUrl: 'https://www.lasinfoniadelreyhotel.com/img/gallery/coffee-house.gif' },
  { id: 2, name: 'Arch&Beans', pictureUrl: 'https://www.lasinfoniadelreyhotel.com/img/gallery/coffee-house.gif' },
  { id: 3, name: 'Madal', pictureUrl: 'https://www.lasinfoniadelreyhotel.com/img/gallery/coffee-house.gif' },
  { id: 4, name: 'Dorado', pictureUrl: 'https://www.lasinfoniadelreyhotel.com/img/gallery/coffee-house.gif' },
  { id: 5, name: 'Magveto', pictureUrl: 'https://www.lasinfoniadelreyhotel.com/img/gallery/coffee-house.gif' },
];

let restaurants = [
  { id: 1, name: 'Menza', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
  { id: 2, name: 'Szek', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
  { id: 3, name: 'Szeraj', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
  { id: 4, name: 'Melissa Bistro', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
  { id: 5, name: 'Il Mulino', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
  { id: 6, name: 'Çig Kofte', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU' },
];

app.get("/cafes", (_, res) => {
  return res.json(cafes);
});

app.get("/restaurants", (_, res) => {
  return res.json(restaurants);
});

app.post("/cafes", (req, res) => {
  const body = req.body;
  const id = cafes.length;
  cafes.push({ ...body, id });
});

app.post("/restaurants", (req, res) => {
  const body = req.body;
  const id = restaurants.length;
  restaurants.push({ ...body, id });
});

app.get('/cafes/:id', (req, res) => {
  const cafe = cafes.find(c => c.id === parseInt(req.params.id));
  const detail = cafesDetail[cafe.id];
  const response = { ...cafe, ...detail };
  return res.json(response);
});

app.delete('/cafes/:id', (req, res) => {
  const id = req.params.id;
  cafes = cafes.filter(c => c.id !== id);
  return res.end();
});

app.delete('/restaurants/:id', (req, res) => {
  const id = req.params.id;
  restaurants = restaurants.filter(r => r.id !== id);
  return res.end();
});

const port = 8080;
app.listen(port, () => console.log("running on port", port));