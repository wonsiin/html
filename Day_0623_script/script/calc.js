window.onload = function(){
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let result = document.getElementById("result");

    let btn = document.getElementsByClassName("operator");
    //getElementsByClassName : 동일한 클래스명의 버튼을 모두 가져올수 있다. 배열로 가져온다.
    for(let i=0; i< btn.length; ++i){
        btn[i].onclick = calc;
    }
    clean.onclick = cleanData;
    //외부로 꺼내어 대입해주면 사용을 할수 있다.

     //let multiply = document.getElementById("multiply"); //사용해도 된다. 사용안해도 되긴한다.. 왜그러지..
    //let clean = document.getElementById("clean");
    //let pl = document.getElementById("pl");
    //let ma = document.getElementById("ma");
    //let nanu = document.getElementById("nanu");
    //pl.onclick =calc;
    //ma.onclick =calc;
    //multiply.onclick = calc;
    //multiply2.onclick = calc;
    //nanu.onclick = calc;
}
function cleanData(){
    x.value ="";
    y.value ="";
    result.innerHTML=""; //속에 값을 비워놔도 넣고 수정하고 할수있다.
}

function calc(){
    //this 이벤트를 발생시킨 범위  getAttribute : 아이디 값만 추려서 가져온다.
    let oper = this.getAttribute("id");

    let a = check();//x하고 y의 데이터가 올바른가에 대한 검증, true/ false만 리턴
    //밑에 if문에 대해서 check함수로 뽑아내는거다.

    if(a === false){
        result.innerHTML = "";
        //if(x.value.length == 0 || y.value.length == 0 || x.value == 0 || y.value == 0){
        //    alert(`0이외에 숫자를 입력해 주세요`);
        //    return;
        //}
        //if(isNaN(x.value) || isNaN(y.value)){
        //    alert(`숫자를 입력해 주세요`);
        //    return;
        //}
        return;
    }



    switch(oper){
        case "pl" :
        result.innerHTML = parseFloat(x.value) + parseFloat(y.value);
        break;
        case "ma" :
        result.innerHTML = parseInt(x.value) - parseInt(y.value);
        break;
        case "nanu" :
        result.innerHTML = parseInt(x.value) / parseInt(y.value);
        break;
        case "multiply" :
        result.innerHTML = parseInt(x.value) * parseInt(y.value);
        break;
        case "multiply2" :
        result.innerHTML = parseInt(x.value) ** parseInt(y.value);
        break;
    }
function check(){
    if(isNaN(x.value) || x.value.length ==0){
        alert(`x에 값을 입력해 주세요`);
        result.innerHTML = "";
        return false;
    }
    if(isNaN(y.value) || y.value.length == 0){
        alert(`y에 값을 입력해 주세요`);
        result.innerHTML = "";
        return false;
    }
    return true;
}
}