# Budaplaces

# Backend 
## Run server
```
$ npm start
```

### GET http://localhost:8080/cafes
Response:
```
[
  {
  id: 1,
  name: 'Madal',
  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU'
},
{
  id: 2,
  name: 'Arch&Beans',
  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU'
},
]
```

### GET http://localhost:8080/restaurants
Response:
```
[
  {
  id: 1,
  name: 'Menza',
  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU'
},
{
  id: 2,
  name: 'Melissa Bistro',
  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKwQpz2Fr7H-8-FN4akSRgYiSAV28a647wA&usqp=CAU'
},
]
```

### POST http://localhost:8080/cafes
Request:
```
{
  name: 'whatever',
  pictureUrl: 'whatever'
}
```
Response:
```
{
  id: '10',
  name: 'whatever',
  pictureUrl: 'whatever'
}
```

### POST http://localhost:8080/restaurants
Request:
```
{
  name: 'whatever',
  pictureUrl: 'whatever'
}
```
Response:
```
{
  id: '10',
  name: 'whatever',
  pictureUrl: 'whatever'
}
```