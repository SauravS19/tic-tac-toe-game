const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector("#player");
const newgamebtn=document.querySelector("#newgame");

let currentplayer;
let gamegrid;
const winningposition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function initgame(){
    currentplayer="X";
    gamegrid=["","","","","","","","",""];
   boxes.forEach((box,index)=>{
    box.innerText="";
    boxes[index].style.pointerEvents="all";
   
   })
   boxes.forEach((box)=>{
    box.classList.remove("win");
   })
    newgamebtn.classList.remove("active");
    gameinfo.innerText=`Current player - ${currentplayer}`;
}
initgame();

newgamebtn.addEventListener("click" ,initgame);
  

function checkGameOver(){
let ans="";
winningposition.forEach((position)=>{
    if((gamegrid[position[0]]!==""||gamegrid[position[1]]!==""||gamegrid[position[2]]!=="")
    &&(gamegrid[position[0]]=== gamegrid[position[1]])&&(gamegrid[position[1]]=== gamegrid[position[2]])){

        if(gamegrid[position[0]]==="X")
            ans="X";
        else
            ans="O";
        
        //found winner
        //color change
        boxes[position[0]].classList.add("win");
    
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        //disable pointer
        boxes.forEach((box)=>{
        box.style.pointerEvents="none";}
        )

    }
}
)

if(ans!== ""){
    gameinfo.innerText=`Winner Player - ${ans}`;
    newgamebtn.classList.add("active");
    return;
}
let fillbox=0;
gamegrid.forEach((box)=>{
    if(box !==""){
        fillbox++;
    }
})
if(fillbox===9){
    gameinfo.innerText="Game Tied";
    newgamebtn.classList.add("active");
}
}



function swapturn(){
    if(currentplayer==="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X";
    }
    gameinfo.innerText=`Current player - ${currentplayer}`;
}


function handleClick(index){
    
   if(gamegrid[index]===""){
    boxes[index].innerText= currentplayer;
    gamegrid[index]=currentplayer;
    boxes[index].style.pointerEvents="none";
    swapturn();
    checkGameOver();
   }
}


boxes.forEach((box, index)=>{
 box.addEventListener("click",()=>
 {
    handleClick(index);
 })
});