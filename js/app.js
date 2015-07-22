var images = [
  { name : 'img/cat01.jpg',
  votes : 0 },
  { name : 'img/cat02.jpg',
  votes : 0 },
  { name : 'img/cat03.jpg',
  votes : 0 },
  { name : 'img/cat04.jpg',
  votes : 0 },
  { name : 'img/cat05.jpg',
  votes : 0 },
  { name : 'img/cat06.jpg',
  votes : 0 },
  { name : 'img/cat07.jpg',
  votes : 0 },
  { name : 'img/cat08.jpg',
  votes : 0 },
  { name : 'img/cat09.jpg',
  votes : 0 },
  { name : 'img/cat10.jpg',
  votes : 0 },
  { name : 'img/cat11.jpg',
  votes : 0 },
  { name : 'img/cat12.jpg',
  votes : 0 },
  { name : 'img/cat13.jpg',
  votes : 0 },
  { name : 'img/cat14.jpg',
  votes : 0 }
];

function tracker(left, right) {
 var randCat = images[Math.floor((Math.random() * images.length))].name;
 var randCat2 = images[Math.floor((Math.random() * images.length))].name;

 var firstCat = document.getElementById(left).src = randCat;
 var secondCat = document.getElementById(right).src = randCat2;

 if (firstCat === secondCat) {
 document.getElementById(right).src = images[Math.floor((Math.random() * images.length))].name;
 } else {
 }
}

var imgLeft = document.getElementById('imgLeft');
var imgRight = document.getElementById('imgRight');

tracker('imgLeft', 'imgRight');

imgLeft.addEventListener('click', function() {
  var left = document.getElementById('imgLeft').src;
  var filename = left.split('r/').pop();
  for (var i = 0; i < images.length; i++) {

    if (filename === images[i].name) {
      images[i].votes+=1;
      console.log('(left) vote added for ' + filename + '. ' + images[i].votes + ' vote(s).');
    } else {
    }
  }
});

// imgRight.addEventListener('click', function() {
//   var right = document.getElementById('imgRight').src;
//   var filename = right.split('r/').pop();
//   for (var i = 0; i < images.length; i++) {
//     if (filename === images[i].name) {
//       images[i].votes+=1;
//       console.log('(right) vote added for ' + filename + '. ' + images[i].votes + ' votes(s).');
//     } else {
//     }
//   }
// });
