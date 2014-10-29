jQuery(function() {
  jQuery("#toggle-sites-list, #toggle-notifications").on('click',function(){
		jQuery(this).toggleClass('active-display-panel');
	});

  jQuery.getJSON( "https://forgoodinc.pairsite.com/notifications/embed.json", function(response, status, jqXHR){
    nodes=jqXHR.responseJSON.nodes;
    for(i=0;i<nodes.length;i++){
      jQuery('#notifications').append(
        '<div class="notif-ication">'+
        nodes[i].node.nothing+
        '</div>'
      );
    }
    jQuery('#toggle-notifications > a').append(
    '<span class="notif-count">'+
    i+
    '</span>'
    );
  });

  jQuery('.notif-ication-wrapper .flag-read-wrapper').on('click', 'a.flag-link-toggle', function(){jQuery(this).closest('.flag-read-wrapper').toggleClass('read').toggleClass('unread');
  });
});
