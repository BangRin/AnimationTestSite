document.addEventListener("DOMContentLoaded",() => {
    console.log(size);
    const btnList = document.querySelectorAll(".panel > button");
    let sizeTextWidth = document.querySelector(".gallery1 > p");
    let sizeTextheight = document.querySelector(".gallery2 > p");

    let floorText = document.querySelectorAll(".currentFloor > span");

    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    
    sizeTextWidth.innerHTML = size.width;
    sizeTextheight.innerHTML = size.height;

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
            }
        })
    })
 })


 
