// alert("test") 연결 확인 완

$(()=>{
    $('.navbar_toggleBtn').click(()=>{
        // 클래스 선택자 생성
        $('.navbar_menu').toggle("active");
    });

    $(window).resize(()=>{
        // nav의 너비값이 문자이므로 숫자로 형변환함
        if(parseInt($('nav').css('width')) > 768){
            // 보이기 display: flex, 숨기기 - display:none;
            $('.navbar_menu').css('display', 'flex');
        }
    });
});