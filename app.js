let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choicess=document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score");
const compcorepara=document.querySelector("#comp-score");

const getcompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
};
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compcorepara.innerText=compscore;
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const drawgame = () => {
        msg.innerText="Draw Game! Play Again";
        msg.style.backgroundColor="brown";
};
const playgame=(userChoice)=>{
    const compChoice=getcompchoice();//ye computer ne choose kiya
    if(userChoice === compChoice){
        //draw game
        drawgame();
    }
    else {
        let userwin=true;
        if(userChoice==="rock"){
            //scissor,paper-->comp
            userwin=compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            //scissor,rock
           userwin=compChoice === "scissor"?false:true;
        }
        else{
            //rock,paper
           userwin=compChoice === "rock"?false:true;

        }
        showwinner(userwin,userChoice,compChoice);
    }
};
choicess.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Choiceid=choice.getAttribute("id");//ye hamne choose kiya
        console.log("clicked",Choiceid);
        playgame(Choiceid);

    });
});
