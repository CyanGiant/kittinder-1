$(function() {
  $('#imgRight').click(function() {
    console.log('click');
  });
});

var Image = function(ext, votes) {
  this.ext      = ext;
  this.votes    = 0;
  this.img      = document.createElement('img');
  this.img.src  = this.ext;
  this.imgLeft  = $('#imgLeft');
  this.imgRight = $('#imgRight');
};

var tracker = Image.prototype.tracker = function() {
  $('#imgLeft').click(function() {
  var filename = $('#imgLeft').attr('src');
  for (var i = 0; i < images.length; i++) {
    if (filename === images[i].ext) {
      images[i].votes+=1;
    } else {
    }
    }
  });
  $('#imgRight').click(function() {
  var filename = $('#imgRight').attr('src');
  for (var i = 0; i < images.length; i++) {
    if (filename === images[i].ext) {
      images[i].votes+=1;
    } else {
    }
    }
  });
}
tracker();

var images = [];
images.push(new Image('img/cat01.jpg', 0));
images.push(new Image('img/cat02.jpg', 0));
images.push(new Image('img/cat03.jpg', 0));
images.push(new Image('img/cat04.jpg', 0));
images.push(new Image('img/cat05.jpg', 0));
images.push(new Image('img/cat06.jpg', 0));
images.push(new Image('img/cat07.jpg', 0));
images.push(new Image('img/cat08.jpg', 0));
images.push(new Image('img/cat09.jpg', 0));
images.push(new Image('img/cat10.jpg', 0));
images.push(new Image('img/cat11.jpg', 0));
images.push(new Image('img/cat12.jpg', 0));
images.push(new Image('img/cat13.jpg', 0));

function randomIndex(left, right) {
  this.imgLeft.src = images[Math.floor((Math.random() * images.length))].ext;
  this.imgRight.src = images[Math.floor((Math.random() * images.length))].ext;
  if (this.imgLeft.src === this.imgRight.src) {
    this.imgRight.src = images[Math.floor((Math.random() * images.length))].ext;
  } else {
  }
}
randomIndex();

            var barData = {
                labels : ["Kitten 1","Kitten 2","Kitten 3","Kitten 4","Kitten 5","Kitten 6", "Kitten 7", "Kitten 8", "Kitten 9", "Kitten 10", "Kitten 11", "Kitten 12", "Kitten 13", "Kitten14"],
                datasets :[
                    {
                    fillColor : "#48A497",
                    strokeColor : "#48A4D1",
                    data :[]
                 },

                ]
               }
            // get bar chart canvas
            var kittyChart = document.getElementById("kittyChart").getContext("2d");
            // draw bar chart
            new Chart(kittyChart).Bar(barData);















// var renderChart = function() {
//   var barData = {
//       labels : ["1","2","3","4","5","6", "7", "8", "9", "10", "11", "12", "13", "14"],
//       datasets : [
//           {
//               fillColor : "#48A497",
//               strokeColor : "#48A4D1",
//               data : play.kitty
//           },
//       ]
//   }
//   // get bar chart canvas
//   var cats = $("#cats")[0].getContext("2d");
//   // draw bar chart
//   new Chart(kittyChart).Bar(barData);
// };
