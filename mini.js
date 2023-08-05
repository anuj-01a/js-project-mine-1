let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let start =false;
let level =0;
let h2=document.querySelector("h2");
let highScore = 0;
let h3=document.querySelector("h3")

//start game
document.addEventListener("keypress",function(){
    if (start==false){
        console.log("game is started");
        start=true;
        levelUp();

    }    
});

    //levelup

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    
//random color
    let randomIdx=Math.floor(Math.random() *4);
    let radColor =btns[randomIdx];
    let randBtn=document.querySelector(`.${radColor}`)
  gameSeq.push(radColor);
    gameFlash(randBtn);


}
//flash count
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
};
function checkAns(idx){

if (userSeq[idx]===gameSeq[idx]){
    if (userSeq.length==gameSeq.length){
       setTimeout( levelUp,1000);
    }

}else{
    h2.innerHTML=`Game over!<br>Your Score was <b>${level}</b><br> Press any key to start again.`;
    document.querySelector("body").style.backgroundImage="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundImage="white";
    }, 200);
    reset();


}
};

function levelUp() {
    userSeq = [];
    level++;
    if (level > highScore) {
        highScore = level;
        h3.innerText = `High Score:- ${highScore}`;
    }
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let radColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${radColor}`);
    gameSeq.push(radColor);
    gameFlash(randBtn);
}




function btnPress(){
   let btn=this;
   userFlash(btn);

   userColor= btn.getAttribute("id");
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

//reset
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
    h3.innerText = `High Score: ${highScore}`;

}