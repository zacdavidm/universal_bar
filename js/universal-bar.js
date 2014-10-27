jQuery(function() {
	console.log('universal-bar.js ready');
    jQuery("#toggle-sites-list, #toggle-notifications").on('click',function(){
		jQuery(this).toggleClass('active-display-panel');
	});
});
