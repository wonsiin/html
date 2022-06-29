window.onload = function(){
    document.getElementById("btn").onclick = check;
    document.getElementById("comment").onmouseover = change;
    document.getElementById("comment").onmouseout = change;
};//1번뿐 사용이 안된다.

function change(event){
    let color = this.style.backgroundColor;
    if(event.type == 'mouseout'){
        this.style.backgroundColor = "#ffffff";
    }
    if(event.type == 'mouseover'){
        this.style.backgroundColor  ="#000000";
    }
}


//검증 코드!
function check(){
    //변수선언
    let finalResult = '';
    let target = document.getElementById("target");
    let usrid = document.getElementById("usrid");
    let usrname = document.getElementById("usrname");
    let usrpwd = document.getElementById("usrpwd");
    let gender = document.getElementsByName("gender");  //배열
    let hobby = document.getElementsByName("hobby");    //배열
    let addr1 = document.getElementById("addr1");
    let addr2 = document.getElementById("addr2");
    let comment = document.getElementById("comment");


    //아이디 검증(5~10자 사이)
    if(!(usrid.value.length >=5 && usrid.value.length <= 10)){
        alert("아이디는 5~10자 사이로 입력해 주세요");
        usrid.select();usrid.focus();
        return;
    };

    //이름검증
    if(usrname.value.length == 0){
        alert("이름을 입력해 주세요.");
        usrname.select();usrname.focus();
    };
    //비번 검증 ( 5~10)
    if(!(usrpwd.value.length >=5 && usrpwd.value.length <= 10)){
        alert("비밀번호는 5~10자 사이로 입력해 주세요");
        usrpwd.select();usrpwd.focus();
        return;
    };
    //이메일 검증은 안함 --> html에서 검증

    //성별체크
    let gtemp;
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked) gtemp = gender[i].value;
    }

    //취미체크
    let htemp = [];
    for(let i=0; i<hobby.length; i++) {
        if(hobby[i].checked) htemp.push(hobby[i].value);
    }
    if(htemp.length == 0){
        htemp.push("취미없음");
    }

    //주소검증
    let address = '';
    if(addr2.value.length == 0){
        alert("상세주소를 입력해 주세요.");
        addr2.select(); addr2.focus();
        return;
    };
    address = addr1.value + " " + addr2.value;

    //커맨트
    let ctemp ='없음';
    if(comment.value.length !=0){
        ctemp = comment.value;
    }
// ${(htemp.length ==0) ? '없음' : htemp.toString()}


    //검증이 끝난 데이터가 출력;
    finalResult += `<ul>`;
    finalResult += `<li>아이디 : ${usrid.value}</li>`;
    finalResult += `<li>이름 : ${usrname.value}</li>`;
    finalResult += `<li>비번 : ${usrpwd.value}</li>`;
    finalResult += `<li>성별 : ${gtemp}</li>`;
    finalResult += `<li>취미 : ${htemp.toString()}</li>`;
    finalResult += `<li>주소 : ${address}</li>`;
    finalResult += `<li>남기실말 : ${comment.value}</li>`;
    finalResult += `</ul>`;

    target.innerHTML = finalResult;

};