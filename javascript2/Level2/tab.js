// jQuery $ 모든을 나타냄
var button = $('.tab-button');
var content = $('.tab-content');
var buttonUnit = $('.tab-button').length;



// 방법4
$('.list').click(function(e) {
    tabOpen(e.target.dataset.id)
})

function tabOpen(i) {

        // 모든 버튼에 붙은 orange 클래스명 제거
        button.removeClass('orange');
    
        // 해당 버튼에만 orange 클래스명 추가 
        button.eq(i).addClass('orange');
    
        // 모든 div에 붙은 show 클래스명 제거
        content.removeClass('show');
    
        // div에 show 클래스명 추가
        content.eq(i).addClass('show');
}


// 방법3
// $('.list').click(function(e) {

//     if(e.target == document.querySelectorAll('.tab-button')[0]) {
//         tabOpen(0);
//     } else if(e.target == document.querySelectorAll('.tab-button')[1]) {
//         tabOpen(1);
//     } else if(e.target == document.querySelectorAll('.tab-button')[2]) {
//         tabOpen(2);
//     }
// })

// function tabOpen(i) {

//         // 모든 버튼에 붙은 orange 클래스명 제거
//         button.removeClass('orange');
    
//         // 해당 버튼에만 orange 클래스명 추가 
//         button.eq(i).addClass('orange');
    
//         // 모든 div에 붙은 show 클래스명 제거
//         content.removeClass('show');
    
//         // div에 show 클래스명 추가
//         content.eq(i).addClass('show');
// }


// 방법2
// for(let i = 0; i < buttonUnit; i++) {
//     $('.tab-button').eq(i).on('click', function() {
//         tabOpen(i);
//     })
// }

// function tabOpen(i) {

//         // 모든 버튼에 붙은 orange 클래스명 제거
//         button.removeClass('orange');
    
//         // 해당 버튼에만 orange 클래스명 추가 
//         button.eq(i).addClass('orange');
    
//         // 모든 div에 붙은 show 클래스명 제거
//         content.removeClass('show');
    
//         // div에 show 클래스명 추가
//         content.eq(i).addClass('show');
// }


// 방법1
// for(let i = 0; i < buttonUnit; i++) {
//     // 버튼 누르면
//     button.eq(i).on('click', function() {
//     // 모든 버튼에 붙은 orange 클래스명 제거
//     button.removeClass('orange');

//     // 해당 버튼에만 orange 클래스명 추가 
//     button.eq(i).addClass('orange');

//     // 모든 div에 붙은 show 클래스명 제거
//     content.removeClass('show');

//     // div에 show 클래스명 추가
//     content.eq(i).addClass('show');
//     });
// }
