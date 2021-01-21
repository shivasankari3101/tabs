var tabs=document.getElementsByClassName("tab");
var main_div=document.getElementsByClassName("main_div")[0];
function showactive(n){
    for(var i=0;i<tabs.length;i++){
        tabs[i].style.backgroundColor="#fff";
    }
    tabs[n].style.backgroundColor="#d0f224";
}
function showsummary(){
    main_div.style.transform="translateX(0)";
    showactive(0);
}
function showquestions(){
    main_div.style.transform="translateX(-100%)";
    showactive(1);
}
function showplayers(){
    main_div.style.transform="translateX(-200%)";
    showactive(2);
}

showsummary();