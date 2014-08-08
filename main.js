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
// ------------------ Erik's Code ----------------------------------------	
	// Function to create random image element
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

	// Destroy functionality added destroy-append.html page
	var destroyButton = document.querySelector('.destroy-button')
	var isActive = true;

	eventie.bind(destroyButton, 'click', function() {
		if (isActive) {
			$(destroyButton).text('Turn Masonry On');
			msnry.destroy();
		}
		else {
			$(destroyButton).text('Turn Masonry Off');			
			msnry = new Masonry (container, {
  			// options
 		 	columnWidth: 150,
 		 	itemSelector: '.item'
  			});
		}
		isActive = !isActive;
	});

	// Append method added to destroy-append.html page
	$(document).on('click', '.append-button', function() {
		var newDiv = randomElemCreate();
		$('#container').append(newDiv);
		
		imagesLoaded( container, function() {
			msnry.appended(newDiv);
		});
	});
	// Prepend method added to destroy-append.html page
	$(document).on('click', '.prepend-button', function() {
 		$('#container').prepend(newDiv);
		
		imagesLoaded( container, function() {
			msnry.prepended(newDiv);
		});
	});
// ----------------------- End Erik's section -----------------------
});

