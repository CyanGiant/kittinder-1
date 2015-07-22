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
