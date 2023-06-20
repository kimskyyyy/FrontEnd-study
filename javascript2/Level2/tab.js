// jQuery $ 모든을 나타냄
var button = $('.tab-button');
var content = $('.tab-content');


// 버튼0 누르면
button.eq(0).on('click', function() {
    // 모든 버튼에 붙은 orange 클래스명 제거
    button.removeClass('orange');

    // 버튼 0에만 orange 클래스명 추가 
    button.eq(0).addClass('orange');

    // 모든 div에 붙은 show 클래스명 제거
    content.removeClass('show');

    // div에 show 클래스명 추가
    content.eq(0).addClass('show');
});

// 버튼1 누르면
$('.tab-button').eq(1).on('click', function() {
    // 모든 버튼에 붙은 orange 클래스명 제거
    button.removeClass('orange');

    // 버튼 0에만 orange 클래스명 추가 
    button.eq(1).addClass('orange');

    // 모든 div에 붙은 show 클래스명 제거
    content.removeClass('show');

    // div에 show 클래스명 추가
    content.eq(1).addClass('show');
});

// 버튼0 누르면
$('.tab-button').eq(2).on('click', function() {
    // 모든 버튼에 붙은 orange 클래스명 제거
    button.removeClass('orange');

    // 버튼 2에만 orange 클래스명 추가 
    button.eq(2).addClass('orange');

    // 모든 div에 붙은 show 클래스명 제거
    content.removeClass('show');

    // div에 show 클래스명 추가
    content.eq(2).addClass('show');
});

