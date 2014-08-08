$(document).on('ready', function() {
  	var container = document.querySelector('#container');
	var msnry;
// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
  		msnry = new Masonry( container, {
  		// options
 		 columnWidth: 150,
 		 itemSelector: '.item'
  		});
	});

// ________________Create Random Images___________________

var images = ['http://www.fillmurray.com/500/200', 
					'http://www.fillmurray.com/150/300', 
					'http://www.fillmurray.com/350/250', 
					'http://www.fillmurray.com/100/200',
					'http://www.fillmurray.com/300/500']
	var randomElemCreate = function() {
		var newDiv = $('<div class="item">')
		var randomNum = Math.round(Math.random() * 10);
		console.log(randomNum)
		var elemSource = 'src=';
		if (randomNum <= 2) {
			elemSource += images[0];
		}
		if (randomNum > 2 && randomNum <=4) {
			elemSource += images[1];
		}
		if (randomNum > 4 && randomNum <=6) {
			elemSource += images[2];
		}
		if (randomNum > 6 && randomNum <=8) {
			elemSource += images[3];
		}
		if (randomNum > 8 && randomNum <=10 ) {
			elemSource += images[4];
		}
		var newElem = $('<img ' + elemSource + '>');
		newDiv.append(newElem);
		return newDiv;		
	}



// _____________end of Images___________________
// // 
var demo = document.querySelector('#destroy-demo');
var container = demo.querySelector('.masonry');
var button = demo.querySelector('button');
var msnry = new Masonry( container, {
  columnWidth: 60
});
var isActive = true;

eventie.bind( button, 'click', function() {
	var newDiv = randomElemCreate();

  if ( isActive ) {
    msnry.destroy();
  } else {
    msnry = new Masonry( container );
  }
  isActive = !isActive;
});
// var container = document.querySelector('.masonry');
//   var button = document.querySelector('#toggle-button');
//   var msnry = new Masonry( container, {
//     columnWidth: 60
//   });

//   var isActive = true;

//   eventie.bind( button, 'click', function() {
//     if ( isActive ) {
//       msnry.destroy();
//     } else {
//       msnry = new Masonry( container );
//     }
//     isActive = !isActive;
//   });




});