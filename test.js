document.addEventListener("DOMContentLoaded",() => {
    console.log(size);
    const btnList = document.querySelectorAll(".panel > button");
    let sizeTextWidth = document.querySelector(".gallery1 > p");
    let sizeTextheight = document.querySelector(".gallery2 > p");

    let floorText = document.querySelectorAll(".currentFloor > span");

    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    
    // sizeTextWidth.innerHTML = size.width;
    // sizeTextheight.innerHTML = size.height; // 현재 화면의 사이즈 크기

    btnList.forEach((btn, i) => {
        btn.addEventListener("click",()=> {
            btn.classList.add("active");
            let btnActive = document.querySelector(".panel > button.active");

            floorText.forEach((text, i) => {
                const currentFloorText = Array.from(btnActive.innerHTML);
                text.innerHTML = currentFloorText[i];
            })

            if(btnActive !== null)
            {
                btnActive.classList.remove("active");
            }document.addEventListener("DOMContentLoaded", () => {
                console.log(size);
                const btnList = document.querySelectorAll(".panel > button");
                let sizeTextWidth = document.querySelector(".gallery1 > p");
                let sizeTextheight = document.querySelector(".gallery2 > p");
            
                let floorText = document.querySelectorAll(".currentFloor > span");
            
                var size = {
                    width: window.innerWidth || document.body.clientWidth,
                    height: window.innerHeight || document.body.clientHeight,
                };
            
                sizeTextWidth.innerHTML = size.width;
                sizeTextheight.innerHTML = size.height;
            
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

// var idx = 0;
            
// function seq_init() {
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




 
