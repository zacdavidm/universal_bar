jQuery(function() {
  jQuery("#toggle-sites-list, #toggle-notifications").on('click',function(){
		jQuery(this).toggleClass('active-display-panel');
	});

  function update_notifications(){
    jQuery.getJSON( "https://forgoodinc.pairsite.com/notifications/embed.json", function(response, status, jqXHR){
      nodes=jqXHR.responseJSON.nodes;
      notifs=0;
      for(i=0;i<nodes.length;i++){
        if(nodes[i].node.flagged=="unread"){
          notifs++;
        }
        jQuery('#notifications').append(
          '<div class="notif-ication">'+
          nodes[i].node.nothing+
          '</div>'
        );
      }
      if(notifs>0){
          jQuery('#toggle-notifications > a').append(
          '<span class="notif-count">'+
          notifs+
          '</span>'
          );
      }
    });
  }

  jQuery('#toggle-notifications').on('click',function(){
    update_notifications();
  });update_notifications();

  jQuery('.notif-ication-wrapper .flag-read-wrapper').on('click', 'a.flag-link-toggle', function(){jQuery(this).closest('.flag-read-wrapper').toggleClass('read').toggleClass('unread').prev().children('a').toggleClass('read').toggleClass('unread');
  update_notifications();
  });
});
