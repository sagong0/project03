$(function () {
 

  // 롤오버 공간카페
  // 1.  .space_cafe 하위의 a 마우스 호버 하면 백그라운드 색바꿔보자
  $(".space_cafe").each(function () {
    var space_cafe = $(this);

    var anchor = space_cafe.find("a");

    anchor.hover(
      function () {
        anchor.css("background", "grey");
      },
      function () {
        anchor.css("background", "white");
      }
    );
  });



  // tabcontent 
  // 보도자료, 이거 호버했을때!!!!!!
  // 모든 a태그에 act 제거 하고
  // 모든 a태그 아래 div.con 숨김
  // 호버한 a 태그에민 act 추가
  // 호버한 a 태그의 아래 div.con을 보여준다
  // !!!!!! 호버 떠났을 때
  // 호버햇을때의 a태그를 lasthover에 담아
  // currenthover


  $('.tabSet').each(function(){
    var topDiv = $(this);
    // a태그들 (보도자료 표준자료 유통자료 ...)
    var anchors = topDiv.find('ul > li > a.anchor');
    var panels = topDiv.find('div.con');
    var lastAnchor;
    var lastPanel;

    anchors.show();

    lastAnchor = anchors.filter('.act');
    lastPanel = $(lastAnchor.find('+div.con'));

    panels.hide();
    lastPanel.show();

    anchors.hover(function(){
      // 지금 호버한거 들어감
      var currentAnchor = $(this);
      var currentPanel = currentAnchor.parent().find('div.con');
    
      lastAnchor.removeClass('act');
      currentAnchor.addClass('act');

      lastPanel.hide();
      currentPanel.show();

      lastAnchor = currentAnchor;
      lastPanel = currentPanel;
    },function(){
      // 호버를 뗏을때 
    });
  });
});
