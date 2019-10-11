var eventos=[
        {
          "nombre":"Minsk",
          "anio":"2019",
          "dias":"76",
          "imagen":"https://kirmash.by/images/content/news/cosmo/april_2019/2_igri_july.jpg"
	    },
	    {
		  "nombre":"Baku",
		  "anio":"2019",
		  "dias":"114",
		  "imagen":"https://eyofbaku2019.com/images/baku-2019-european-youth-olympic-festival.jpg"
	    },
	    {
		  "nombre":"Tokio",
		  "anio":"2019",
		  "dias":"482",
		  "imagen":"http://www.telam.com.ar/advf/imagenes/2018/10/5bbe1890a2bf8_1004x565.jpg"
	    }
	    ,
			    {
				  "nombre":"Pyeongchang",
				  "anio":"2018",
				  "dias":"500",
				  "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PyeongChang_2018_Winter_Olympics.svg/1200px-PyeongChang_2018_Winter_Olympics.svg.png"
	    }

	  ];



$(document).ready(function(e) {
	var viewport =$("#cuerpoevento").width();
	$('#cuerpoevento').css('background-image', 'url('+eventos[0].imagen+')');
	$('#cuerpoevento .timeline').width((eventos.length*150)+10);

	$.each(
         eventos, function(i, item) {

			$("#elementosevento").append("<div class='date date-"+item.dias+"'></div>");
			 $.each(
         		eventos, function(j, item2) {
					if (item2.dias==item.dias){
						$(".date-"+item.dias).append("<div class='goal_wrap' id='evento_"+item.dias+"' style='display: block;' data-imagen="+item2.imagen+">"+item2.nombre+"<br>"+item2.anio+"</div>");
					}else{
						$(".date-"+item.dias).append("<div class='goal_wrap' style='display: none;'>"+item2.nombre+"<br>"+item2.anio+"</div>");
					}


			});
			$(".date-"+item.dias).append("<p class='focus'>"+item.dias+"d&iacute;as</p>");

		 });




 $('a').click(function(e){
    e.preventDefault()
  })

  $('.goal_wrap').click(function(){
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');
    $(this).addClass('active bounce');
    var imagen = $(this).data( "imagen" );
	TweenLite.to($('.date').parent(), 1, {x:((viewport*0.5) - diff), onComplete:function(){
		console.log('url('+imagen+')');
        $('#cuerpoevento').fadeTo('ease', 0.3, function(){

		    $(this).css('background-image', 'url('+imagen+')');
		}).fadeTo('slow', 1);



      }});
  });

	try{
		$('#cuerpoevento').css('background-image', 'url('+eventos[0].imagen+')');
		$('#evento_'+eventos[0].dias).trigger( 'click' );
	}catch(e){}

});
