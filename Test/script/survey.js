window.onload = function(){
    let button = document.getElementById("btn").onclick = cleck;
    document.getElementById("etc").onmouseover = change;
    document.getElementById("etc").onmouseout = change;
    document.getElementById("youname").onmouseover = change1;
    document.getElementById("youname").onmouseout = change1;
    document.getElementById("num2").onmouseover = change2;
    document.getElementById("num2").onmouseout = change2;
    document.getElementById("email").onmouseover = change3;
    document.getElementById("email").onmouseout = change3;
}

function change(event){
    let color = this.style.backgroundColor;
    if(event.type == 'mouseout'){
        this.style.backgroundColor = "#ffffff";
    }
    if(event.type == 'mouseover'){
        this.style.backgroundColor  ="#FFFF00";
    }
}

function change1(event){
    let color = this.style.backgroundColor;
    if(event.type == 'mouseout'){
        this.style.backgroundColor = "#ffffff";
    }
    if(event.type == 'mouseover'){
        this.style.backgroundColor  ="#FF0000";
    }
}

function change2(event){
    let color = this.style.backgroundColor;
    if(event.type == 'mouseout'){
        this.style.backgroundColor = "#ffffff";
    }
    if(event.type == 'mouseover'){
        this.style.backgroundColor  ="#550000";
    }
}

function change3(event){
    let color = this.style.backgroundColor;
    if(event.type == 'mouseout'){
        this.style.backgroundColor = "#ffffff";
    }
    if(event.type == 'mouseover'){
        this.style.backgroundColor  ="#008500";
    }
}

function cleck(){
    var result = "<h2>설문 결과</h2><ul>";
    let nai ='';
    let rere = document.getElementById("result");
    let youname = document.getElementById("youname");
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let email = document.getElementById("email");
    let job = document.getElementById("job");
    let service = document.getElementsByClassName("service");
    let che = document.getElementsByName("che");
    let etc = document.getElementById("etc");



    //이름검증
    if(youname.value.length == 0){
        alert("이름을 입력하세요.");
    };

    //전화번호
    let tel = '';

    if(num2.value.length == 0){
        alert("전화번호를 입력해 주세요.");
        num2.select(); num2.focus();
        return;
    }
    if(num2.value.length < 8){
        alert("-를 제외한 정확한 길이의 숫자만 입력해주세요");
        num2.select(); num2.focus();
        return;
    }else if(num2.value.length == 8){
        tel = num1.value +""+ num2.value;
    };

    //email
    if(email.value.length == 0){
        alert("이메일을 입력해주세요.");
        email.select(); email.focus();
        return;
    }

    let servic;
    for(let i=0; i<service.length; i++){
        if(service[i].checked) servic = service[i].value;
    }
    //종목
    let chee = [];
    for(let i=0; i<che.length; i++) {
        if(che[i].checked) chee.push(che[i].value);
    }
    if(chee.length == 0){
        chee.push("없음");
    }


    nai += result;
    nai += `<li>이름 : ${youname.value}</li>`;
    nai += `<li>전화번호 : ${tel}</li>`;
    nai += `<li>직업 : ${job.value}</li>`;
    nai += `<li>가장 많이 사용하는 구글 서비스 : ${servic}</li>`;
    nai += `<li>기능강화가 필요한 도구 : ${chee.toString()}</li>`;
    nai += `<li>남기실 말씀 : ${etc.value}</li>`;
    nai += `</ul>`;

    rere.innerHTML = nai;
}

