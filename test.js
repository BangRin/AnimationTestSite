document.addEventListener("DOMContentLoaded",() => {
    const btnList = document.querySelectorAll(".panel > button");
    let convenience = document.getElementById("convenience");
    let major = document.getElementById("major");
    // let sizeTextWidth = document.querySelector(".gallery1 > p");
    // let sizeTextheight = document.querySelector(".gallery2 > p");
    let floorText = document.querySelectorAll(".currentFloor > span"); //현재 층
    var 전층 = 1;
    // let lang = document.querySelector(" .lang");
    // lang.innerHTML = getLanguage(); // 현재 언어

    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    

    // sizeTextWidth.innerHTML = size.width;
    // sizeTextheight.innerHTML = size.height; // 현재 화면의 사이즈 크기

    // for(var i = 0; i < 120 ; i++)
    // {
    //     mapImage.innerHTML += '<img src="resource/Sequences/B1맵_('+i+').png" alt=""  style="height: 0;" />'
    // } 처음 화면 열시 html 추가

    btnList.forEach((btn, i) => {
        btn.addEventListener("click",()=> {
            // if(currentChangeState)
            //     return;
            // else
            // {
                btnList.forEach((item, j) => {
                    item.classList.remove("active");
                })
                btn.classList.add("active");
                
                let btnActive = document.querySelector(".panel > button.active");
                var currentFloorText;
                floorText.forEach((text, i) => {
                    currentFloorText = Array.from(btnActive.innerHTML);
                    text.innerHTML = currentFloorText[i];
                })
                CurrentFloorInformation(i, convenience, major);
                console.log(`${전층}→${i}`);
                if(전층 != i)
                {
                    전환(i, 'out', 전층);
                    전층 = i;
                }
                
            //}
        })
    })
})

function CurrentFloorInformation(currentFloor, convenience, major)
{
    switch(currentFloor)
    {
        case 0:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div><div class="contWrap"><img src = "resource/에스컬레이터.png" alt="es"/>에스컬레이터</div>';
            major.innerHTML = 
            '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>경기주택도시공사</div>';
        break;
        case 1:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div><div class="contWrap"><img src = "resource/에스컬레이터.png" alt="es"/>에스컬레이터</div><div class="contWrap"><img src = "resource/인포.png" alt="info"/>안내데스크</div>';
            major.innerHTML = 
            '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>4차산업전시체험관</div><div class="contWrap"><div class="circle2" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#4045a6;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>한국반도체연구조합</div>';
        break;
        case 2:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = 
            '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>한국자동차연구원</div><div class="contWrap"><div class="circle2" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#4045a6;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>차세대융합연구원</div>';
        break;
        case 3:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = null;
        break;
        case 4:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>전자부품연구원</div>';
        break;
        case 5:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>정보통신기획평가원</div>';
        break;
        case 6:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = null;
        break;
        case 7:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = null;
        break;
        case 8:
            convenience.innerHTML = 
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = null;
        break;
        case 9:
            convenience.innerHTML =     
            '<div class = "contWrap"><img src = "resource/엘리베이터.png" alt="Elevete">엘리베이터</div><div class="contWrap"><img src = "resource/화장실.png" alt="toilet"/>화장실</div>';
            major.innerHTML = '<div class="contWrap"><div class="circle1" style="width:45px; height: 45px; border:3px solid rgb(255, 255, 255); border-radius:50%;background-color:#9349b4;"><span id="numText1" style="position:relative; left: 11px;bottom: 2px;">1</span></div>차세대융합기술원</div>';
        break;
    }
}


var currentChangeState = false;

function 전환(새층, 뭘로, 전층){
    if(뭘로 == 'out')
    {
        currentChangeState = true;
        $('#map').html(`<video id="videoElem" src="./resource/gif/${전층}_out.webm" poster="./resource/gif/${전층}.png" autoplay="autoplay" muted="muted" onended="전환(${새층}, 'in');"/>`);
    }
    if(뭘로 == 'in')
    {
        $('#map').html(`<video id="videoElem" src="./resource/gif/${새층}_in.webm" poster="./resource/gif/${전층}.png"autoplay="autoplay" muted="muted" onended="전환(${새층}, '그림');"/>`);
    }  
    else if(뭘로 == '그림')
    {
        $('#map').html(`<img src="resource/gif/${새층}.png" alt="" id="gif"/>`);
        currentChangeState = false;
    }
}

function getLanguage() {
    return navigator.language || navigator.userLanguage;
}


// var idx = 0;
// function seq_init() //로컬 파일 이미지를 매프레임마다 로딩
//    {
//     var seq_play = true;
//     var _img_load = 0;
//     var _img_count = 120;
//     for (idx = 0; idx <= _img_count; idx++) {
//         var _img_tmp = new Image();
//         _img_tmp.src = "resource/Sequences/B1맵_(" + idx + ").png";
//         _img_tmp.onload = function () {
//             ++_img_load;
//             if (_img_load == _img_count) {
//                 rolling();
//             }
//         };
//         _img_tmp.onerror = function () {
//             ++_img_load;
//             if (_img_load == _img_count) {
//                 rolling();
//             }
//         };
//     }
//     idx = 0;
//     function rolling() {
//         setTimeout(function () {
//             if (seq_play) idx++;
//             $("a.ico_1 img").attr("src", "resource/Sequences/B1맵_(" + idx + ").png");
//             if (idx == 120) {
//                 seq_play = false;
//                 idx = 0;
//             }
//             if (!seq_play) {
//                 if (idx == 0) seq_play = true;
//             }
//             rolling();
//         }, 60);
//     }
// }
// seq_init();




 
