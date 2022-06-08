document.addEventListener("DOMContentLoaded",() => {
    const btnList = document.querySelectorAll(".panel > button");
    // let sizeTextWidth = document.querySelector(".gallery1 > p");
    // let sizeTextheight = document.querySelector(".gallery2 > p");
    let mapImage = document.getElementById("map");// 맵 애니메이션
    let floorText = document.querySelectorAll(".currentFloor > span"); //현재 층
    var 전층 = 0;

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
            btn.classList.add("active");
            let btnActive = document.querySelector(".panel > button.active");

            floorText.forEach((text, i) => {
                const currentFloorText = Array.from(btnActive.innerHTML);
                text.innerHTML = currentFloorText[i];
            })
            /*if(btnActive.innerHTML == "B1")
            {
                $('#map').html('<video id="videoElem" src="./resource/gif/B1맵in_1.webm" autoplay="autoplay" muted="muted" />');
            }
            else if(btnActive.innerHTML == "1F")
            {
                $('#map').html('<img src="resource/gif/KakaoTalk_20220608_105403025.png" alt="" id="gif"/>');
            }*/
            console.log(`${전층}→${i}`);
            전환(i, 'out', 전층);
            전층 = i;


            if(btnActive !== null)
            {
                btnActive.classList.remove("active");
            }
            document.addEventListener("DOMContentLoaded", () => {
                console.log(size);
                const btnList = document.querySelectorAll(".panel > button");
            
                let floorText = document.querySelectorAll(".currentFloor > span");
            
                var size = {
                    width: window.innerWidth || document.body.clientWidth,
                    height: window.innerHeight || document.body.clientHeight,
                };            
                btnList.forEach((btn, i) => {
                    btn.addEventListener("click", () => {
                        btn.classList.add("active");
                        let btnActive = document.querySelector(".panel > button.active");
            
                        floorText.forEach((text, i) => {
                            const currentFloorText = Array.from(btnActive.innerHTML);
                            text.innerHTML = currentFloorText[i];
                        });
            
                        if (btnActive !== null) {
                            btnActive.classList.remove("active");
                        }
                    });
                });
            });
        })
    })
    //↓↓새로써넣은부분↓↓
    /*document.getElementById("videoElem").addEventListener("ended", function(){
        console.log('영상끝');
        //$('#map').html('테스트');
        $('#map').html('<img src="resource/gif/B1맵.png" alt="" id="gif"/>');
    });*/
    //↑↑새로써넣은부분↑↑
})

function 전환(새층, 뭘로, 전층){
    if(뭘로 == 'out')
        $('#map').html(`<video id="videoElem" src="./resource/gif/${전층}_out.webm" autoplay="autoplay" muted="muted" onended="전환(${새층}, 'in');"/>`);
    if(뭘로 == 'in')
        $('#map').html(`<video id="videoElem" src="./resource/gif/${새층}_in.webm" autoplay="autoplay" muted="muted" onended="전환(${새층}, '그림');"/>`);
    else if(뭘로 == '그림')
        $('#map').html(`<img src="resource/gif/${새층}.png" alt="" id="gif"/>`);
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




 
