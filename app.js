let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","blue","green"];

let started=false;//tells wheater games i started or not
let level=0;//game is not started yet

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;

    levelUp();
   }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //chsoing random button 
    let rand=Math.floor(Math.random()*3);
    let randColor=btns[rand];
    let randBtn=document.querySelector(`.${randColor}`);//make the object of the class of the random Color
    // console.log(randBtn); this is the object of the button
    // console.log(randColor); this is the color of the button

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    // here this will be the button pressed
    let btn=this;
    userFlash(btn);//flash the button when user press it

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){//when user manages to click all sequence colur then only increase level
            setTimeout(levelUp,1000);
        } 
    }
    else {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.Press any key to start.`;
        let mainbody=document.querySelector("body");
        mainbody.classList.add("redbg");
        setTimeout(function(){
            mainbody.classList.remove("redbg");
        },200);
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

