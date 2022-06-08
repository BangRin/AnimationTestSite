document.addEventListener("DOMContentLoaded",() => {
    const btnList = document.querySelectorAll(".panel > button");
    // let sizeTextWidth = document.querySelector(".gallery1 > p");
    // let sizeTextheight = document.querySelector(".gallery2 > p");
    let mapImage = document.getElementById("map");// 맵 애니메이션
    let floorText = document.querySelectorAll(".currentFloor > span"); //현재 층

    // let lang = document.querySelector(" .lang");
    // lang.innerHTML = getLanguage(); // 현재 언어


    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    
    // sizeTextWidth.innerHTML = size.width;
    // sizeTextheight.innerHTML = size.height; // 현재 화면의 사이즈 크기

    // for(var i = 0; i < 120 ; i++)
    // {
    //     mapImage.innerHTML += '<img src="resorce/Sequences/B1맵_('+i+').png" alt=""  style="height: 0;" />'
    // } 처음 화면 열시 html 추가

    btnList.forEach((btn, i) => {
        btn.addEventListener("click",()=> {
            btn.classList.add("active");
            let btnActive = document.querySelector(".panel > button.active");

            floorText.forEach((text, i) => {
                const currentFloorText = Array.from(btnActive.innerHTML);
                text.innerHTML = currentFloorText[i];
            })
            if(btnActive.innerHTML == "B1")
            {
                document.getElementById("gif").src ="resorce/gif/KakaoTalk_20220608_105140181.gif";
            }
            else if(btnActive.innerHTML == "1F")
            {
                document.getElementById("gif").src ="resorce/gif/KakaoTalk_20220608_105403025.png";
            }
            if(btnActive !== null)
            {
                btnActive.classList.remove("active");
            }document.addEventListener("DOMContentLoaded", () => {
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
 })


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
//         _img_tmp.src = "resorce/Sequences/B1맵_(" + idx + ").png";
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
//             $("a.ico_1 img").attr("src", "resorce/Sequences/B1맵_(" + idx + ").png");
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




 
