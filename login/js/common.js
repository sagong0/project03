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
});