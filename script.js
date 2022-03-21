var navLink1 = document.querySelector(".nav__link1");
navLink1.addEventListener("click",()=>{
    document.querySelector("#tutorials").style.display = "block";
});

var navLink2 = document.querySelector(".nav__link2");
navLink2.addEventListener("click",()=>{
    document.querySelector("#reference").style.display = "block";
});

document.querySelector(".cancel__button").addEventListener("click",()=>{
    document.querySelector("#tutorials").style.display = "none";
   
});

document.querySelector(".cancel__button__reference").addEventListener("click",()=>{
    document.querySelector("#reference").style.display = "none";
   
});
