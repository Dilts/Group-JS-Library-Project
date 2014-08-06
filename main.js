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
	
	// Destroy functionality added destroy-append.html page
	var destroyButton = document.querySelector('.destroy-button')
	console.log(destroyButton)
	var isActive = true;

	eventie.bind(destroyButton, 'click', function() {
		if (isActive) {
			msnry.destroy();
		}
		else {
			msnry = new Masonry (container, {
  			// options
 		 	columnWidth: 150,
 		 	itemSelector: '.item'
  			});
		}
		isActive = !isActive;
	});

});

