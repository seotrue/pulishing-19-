$('.btn').on('click', function(event){
      var $this = $(this);
      //버튼 클릭 예제
      eventClick(event);
})
/*
var resizeTimer;
function resizeFunction(){
		console.log('리사이즈에 대한 함수는 여기다가 작성')
		//main.resizing() 
      //반응형에 작동하는 인터렉션은 이 안에 두는 것이 좋습니다.
}
$(window).bind('resize', function( ) {
    window.clearTimeout( resizeTimer );
    resizeTimer = window.setTimeout( resizeFunction, 500 );
});

 /*************************** ********************************************/
 /*
$(document).ready(function() {
      console.log('dom 다 그리고 난 후')
      resizeFunction();
	 


	  var $w = $(document).width();
	  console.log($w,'돔 너비');


});
*/
//ready


 /*************************** ********************************************/
function eventClick(event){
       if(event.preventDefault){
             event.preventDefault(); //FF
       } else {
             event.returnValue = false; //IE
       }
 }
