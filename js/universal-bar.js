jQuery(function() {
  jQuery("#toggle-sites-list, #toggle-notifications").on('click',function(){
		jQuery(this).toggleClass('active-display-panel');
	});

  jQuery.getJSON( "https://forgoodinc.pairsite.com/notifications/embed.json", function(response, status, jqXHR){
    nodes=jqXHR.responseJSON.nodes;
    for(i=0;i<nodes.length;i++){
      jQuery('#notifications').append(
        '<div class="notif-ications>"',
        nodes[i].node.nothing,
        '</div>'
      );
    }
    jQuery('#toggle-notifications > a').append(
    '<span class="notification-count">',
    i,
    '</span>'
    );
  });
});
