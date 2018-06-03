function youTubeCookieConsent(element, url){
	$(element).parent().parent().replaceWith('<iframe width="560" height="315" src="'+url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>');
};

$( document ).ready(function() {
	$('#step1, #step2, #step3, #step4').click(function(){ $(this).find('a')[0].click(); });

  $('.ui.accordion').find('h2').append('<i class="dropdown icon"></i>');

  $('.ui.accordion').find('.title').click(function(){
  		$('.ui.accordion').accordion();
  });

  $('#audio-notification-img').popup({
    position : 'top left',
    inline: false,
    target: '#audio-notification',
    html: '<div style="font-size:0.8em; color: #a2a2a2; text-align:center;">„ The garage door has been left open “</div>',
    variation: 'wide',
    on: 'click',
    offset: 20
  });

  $('#audio-notification-img').visibility({
    onBottomVisible: function(calculations) {
      $('#audio-notification-img').popup('show');
    }
  });

  $('#automate-first').visibility({
    onOnScreen: function(calculations) {
      $('.ui.compact.secondary.segment').transition({
        animation: 'scale',
        duration  : 900,
        interval  : 300
      });
    }
  });

  $('#go-btn').visibility({
    onBottomVisible: function(calculations) {
      $('#go-btn').transition('pulse');
    }
  });

  $('#donate').popup({
    content: 'Paypal me donations for doughnuts!',
    position: 'top left',
    variation: 'tiny'
  });
});