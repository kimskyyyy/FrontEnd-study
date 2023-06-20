// jQuery $ 모든을 나타냄
var button = $('.tab-button');
var content = $('.tab-content');
var buttonUnit = $('.tab-button').length;

for(let i = 0; i < buttonUnit; i++) {
    // 버튼 누르면
    button.eq(i).on('click', function() {
    // 모든 버튼에 붙은 orange 클래스명 제거
    button.removeClass('orange');

    // 해당 버튼에만 orange 클래스명 추가 
    button.eq(i).addClass('orange');

    // 모든 div에 붙은 show 클래스명 제거
    content.removeClass('show');

    // div에 show 클래스명 추가
    content.eq(i).addClass('show');
    });

}
