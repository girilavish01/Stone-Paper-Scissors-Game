let userScore=0;
let compScore=0;
 const bos= document.querySelectorAll(".bo");
 const msg=document.querySelector("#msg");
 const userScorepara=document.querySelector("#user-score");
  const compScorepara=document.querySelector("#comp-score");
 const genCompChoice=()=>{
   const options=["Stone","Paper","Scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
 }
 const showWinner =(userWin,userchoice,compChoice)=>{
   if(userWin){
     userScore++;
       userScorepara.innerText=  userScore;
     console.log("you are win");
     msg.innerText= `you Win ${userchoice} beats ${compChoice}`;
     msg.style.backgroundColor="green";
   }
   else{
     compScore++;
           compScorepara.innerText=  compScore;
       console.log("you are lose");
       msg.innerText= `you lose! Your${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="Red";
   }
 }
 const draw=()=>{
   console.log("game was draw");
      msg.innerText= "game draw ";
                msg.style.backgroundColor="blue";
 };
 const playgame=(userchoice)=>{
   console.log("user choice= ",userchoice);
   //genetat computer choice
   const compChoice= genCompChoice();
   console.log("comp choice =", compChoice);
   //console.log(userchoice === compChoice);
   if (userchoice === compChoice){
     draw();
   }
   else{
     let userWin = true;
     if(userchoice ==="Stone"){
       userWin=compChoice==="Paper" ? false:true;
     } else if(userchoice=== "Paper"){
       userWin=compChoice==="Scissors" ? false:true;
     }else{
     userWin= compChoice==="Stone"? false:true;
   }
   showWinner(userWin,userchoice,compChoice);
  }
 };
 bos.forEach((bo)=>{
  // console.log(bo);
   bo.addEventListener("click",()=>{
     const userchoice=bo.getAttribute("id");
     //console.log("choice was clicked", userchoice);
     playgame(userchoice);
   });
 });