alert("welcome to game Play :")
let user = 0;
let comp = 0;


const choices = document.querySelectorAll(".choice")
const mess = document.querySelector("#message");
const userscore = document.querySelector("#user")
const compscore = document.querySelector("#computer")

const gencompchoice = () =>{
   //rock //paper //scissor
   const options = ["rock","paper","scissor"];
   const randIdx=Math.floor(Math.random() * 3);
   return options[randIdx];
}

const drawgame = () =>
{
  console.log("game was draw.");
  mess.innerText = "game was draw play again."
  mess.style.backgroundColor = "grey"
}

const showwinner = (userwin,userchoice,compchoice) => {
   if(userwin){
    user++;
    userscore.innerText = user;
    mess.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    mess.style.backgroundColor = "green"
   }

   else{
    comp++;
    compscore.innerText = comp;
    mess.innerText = `You Lose. ${userchoice} beats Your ${compchoice}`;
    mess.style.backgroundColor = "red";
   }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice =", compchoice);

    //fight codition
    if(userchoice === compchoice)
    {
        drawgame();
    }
    else{
         let userwin = true;
         if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
         }
         else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
         }

         else{
            userwin = compchoice === "rock" ? false : true;
         }

         showwinner(userwin,userchoice,compchoice);
    }
} 

choices.forEach((choice) => {
    const userchoice = choice.getAttribute("id");
   choice.addEventListener("click",() =>{
       //console.log("choice was clicked", userchoice);
       playgame(userchoice);
   });
});