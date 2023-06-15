$(function(){
  // 롤오버 헤더 탑(헤더 맨위)
 $(".h_top > ul a.h_top_rollover").each(function () {
     var element = $(this);
     element.hover(
       function () {
         element.css("color", "blue");
       },
       function () {
         element.css("color", "#505360");
       }
     );
   });


  //  튤팁 (balloon)
  //튤팁(balloon)

  var balloon = $('<div class="balloon"></div>').appendTo('body');
	
	function updateBalloonPosition(x, y){
		// 마우스 포인터 기준으로 보이도록 한거
		balloon.css({left: x+15, top: y});
	}
	
	$('.showBalloon').each(function(){
		var element = $(this);
		// 여기 문자열로 받아서 jquery객체 아님
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				// 마우스의 x좌표, y좌표 의미
				//마우스 올렸을 때 툴팁이 생기는 위치
				updateBalloonPosition(event.pageX, event.pageY);
				balloon.show();
			},
			function(){
				balloon.hide();
			}
		);
		
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});

	// 인쇄기능
	$('.fa-print').on('click',function(){
		window.print();
		return false;
	});


	// footer family button
	$('form[name=rel_f]').on("submit",function(){
		var url = $("select",this).val();
		window.open(url);
		return false;
	});
});