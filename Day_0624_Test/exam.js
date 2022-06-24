
window.onload = function() {
    // 1) Code Here : 변수 score 선언
    let score = document.getElementsByClassName("subjectScore");
    

    for(let i = 0; i<score.length; ++i) {
        score[i].onchange = scoreInput;
        //onchange 값바뀌면 바로 적용
    }
    confirm = document.getElementById("confirm");
    confirm.onclick = finalResult;
    //finalResult
    // 4-1) Code Here : id가 “confirm”인 버튼을 클릭하면 finalResult 함수를 호출하도록 이벤트 설정
}

function scoreInput() {
    let subjectScore = this.value;

    // 3) Code Here : if문을 이용하여 맞은 개수의 범위가 0~20사이가 아니면 경고창 발생
    if(subjectScore <= 20 || subjectScore.length == 0){
        let name ;

    switch(this.id) {
        case "one" :
            name = "resultOne";
            break;
        case "two" :
            name = "resultTwo";
            break;
        case "three" :
            name = "resultThree";
            break;
        case "four" :
            name = "resultFour";
            break;
        case "five" :
            name = "resultFive";
            break;
    }
    subjectResult = document.getElementById(name).innerHTML = `[예상점수] ${this.value * 5}점`;
    }else{
        alert("각 과목당 맞춘 문제수(0~20를 입력하세요");
        this.select();
    }
}
function finalResult() {
    let failureCount = 0;  // 과락 과목 수
    let totalScore = 0;    // 전체 점수
    let subjectScore = document.getElementsByClassName("subjectScore");

    for(let i=0; i<subjectScore.length; ++i) {
        
        if(subjectScore[i].value * 5 < 40){
            // 4-2) Code Here : 과락 과목 수를 failureCount 변수에 카운트 
            failureCount += 1;
            totalScore += subjectScore[i].value*5;
        }
        // 4-3) Code Here : 5과목의 합계를 totalScore 변수에 누적
       totalScore += subjectScore[i].value*5;
    }
    // 5-1) 과락 과목수를 html의 failureCount 위치에 출력
    document.getElementById("failureCount").innerHTML = failureCount;
    // 5-2) 전체 평균을 구한 값을 html의 avg 위치에 출력
    document.getElementById("avg").innerHTML = totalScore / 5;
    // 5-3) if문을 이용하여 합격 또는 불합격 여부를 html의 finalResult 위치에 출력
    
    if(totalScore / 5 < 60  || failureCount >= 1){
        document.getElementById("finalResult").innerHTML = "불합격";
    }else {
        document.getElementById("finalResult").innerHTML = "합격";
    }
}