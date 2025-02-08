//BUGS TO FIX AND FEATURES TO ADD//
//BUGS//

//NOT REALLY A BUG//
//MAYBE SHORTEN TIME DIALOGUE IS OUTPUTTED AND ONCE IT IS FINISHED, YOU CAN CLICK CONTINUE?


//FEATURES//



//THEN ALL THAT MUST BE DONE IS THE CSS AND HTML!!!


//BUGS TO FIX AND FEATURES TO ADD//


//stores values for card
//make sure ace works


const cardValues =
{
   ace :
   {
       amount : 4,
       name : "Ace"
   },
   two :
   {
       amount : 4,
       value : 2
   },
   three :
   {
       amount : 4,
       value : 3
   },
   four :
   {
       amount : 4,
       value : 4
   },
   five :
   {
       amount : 4,
       value : 6
   },
   six :
   {
       amount : 4,
       value : 6
   },
   seven :
   {
       amount : 4,
       value : 7
   },
   eight :
   {
       amount : 4,
       value : 8
   },
   nine :
   {
       amount : 4,
       value : 9
   },
   ten :
   {
       amount : 4,
       value : 10
   },
   king :
   {
       amount : 4,
       value : 10,
       name : "K"
   },
   queen :
   {
       amount : 4,
       value : 10,
        name : "Q"
   },
   joker :
   {
       amount : 4,
       value : 10,
        name : "J"
   }
 
}
//variables that make object constant
let ace = cardValues.ace;
let two = cardValues.two;
let three = cardValues.three;
let four = cardValues.four;
let five = cardValues.five;
let six = cardValues.six;
let seven = cardValues.seven;
let eight = cardValues.eight;
let nine = cardValues.nine;
let ten = cardValues.ten;
let king = cardValues.king;
let queen = cardValues.queen;
let joker = cardValues.joker;


// audios
const fingerCut = new Audio("audio/fingerCut.mp3");
const fingerGone = new Audio("audio/fingerGone.mp3");
const eyeGone = new Audio("audio/eyeGone.mp3");
const foeEyeGone = new Audio("audio/foeEyeGone.mp3");
const foeFingerGone = new Audio("audio/foeFingerGone.mp3");

//variables for the enemies and their switchers
let foe1 =
{
    name : "Shadow Dude",
    intellect1 : 10,
    intellect2 : 20,
    intro : "I need to win to buy this girl I like a redstone ring. I dont know if she likes me back though.",
    winLines :
    [
        "Haha.",
        "Worst player ive seen.",
        "I wonder how expensive redstone rings are nowadays..."
    ],
    loseLines :
    [
        "Not cool.",
        "My hands sting.",
        "How will I play COD now..."
    ],
    idleLines :
    [
        "Isnt it a little dark in here?",
        "Im a little nervous...",
        "Oooooh im spooked..."
    ],
    images:
    [
        "images/Shadow-dude1.png",
        "images/Shadow-dude2.png",
        "images/Shadow-dude3.png"

    ],
    theme :
    [
        new Audio("audio/shadowTheme.mp3")
    ]
};
let foe2 =
{
    name : "Croatian Father",
    intellect1 : 10,
    intellect2 : 18,
    intro : "I miss my wife",
    winLines :
    [
        "Sorry",
        "Drinking helps with that pain dude",
        "You poor lad"
    ],
    loseLines :
    [
        "Not as painful as when the wife left",
        "At least the kids wont see this",
        "bruh"
    ],
    idleLines :
    [
        "Good, more time to drink",
        "man its cold in here, just like my ex wife",
        "I really hate my ex wife"
    ],
    images:
    [
       "images/Croatian-Father.png",
       "images/Croatian-Father.png",
       "images/Croatian-Father.png",
    ],
    theme :
    [
        new Audio("audio/fatherTheme.mp3")
    ]
};
let foe3 =
{
    name : "Das Gambler",
    intellect1 : 11,
    intellect2 : 17,
    intro : "I LOVE GAAAMMMBLLLIIIINNGGGGG!!!!!!",
    winLines :
    [
        "LOOOOSEEERRRR!",
        "IM BETTER AT GAMBLING THAN YOUUUUU",
        "I SHOULDVE BET MY WHOLE HAAANNDDDD"
    ],
    loseLines :
    [
        "99% OF GAMBLERS QUIT BEFORE THEY HIT BIG!",
        "A LOSS MEANS BETTER LUCK NEXT TIME!",
        "you're fat and ugly."
    ],
    idleLines :
    [
        "YOU CHEAAATEEEDD!",
        "LITTLE PIGGY MAKING US TIE!",
        "YOURE A FAILURE OF A GAMBLER!"
    ],
    images:
    [
    "images/Das-Gambler1.png",
    "images/Das-Gambler2.png",
    "images/Das-Gambler3.png",
    "images/dasGambler4.gif",
    "images/dasGambler5.png",

    ],
    theme :
    [
        new Audio("audio/gamblerTheme.mp3"),
        new Audio("audio/gamblerBoss.mp3")
    ]
};
let shadow = foe1;
let croatian = foe2;
let gambler = foe3;
let switcher = 0;
let foes = [shadow,croatian,gambler];
let currentFoe = foes[switcher];
//variables for selection and gameplay
const cards = [ace,two,three,four,five,six,seven,eight,nine,ten,king,queen,joker];
let betMax = 5;
let enemyBetMax = 5;
let currentBet = 0;
let hand = 0;
let aceElevenCount = 0;
let foeElevenCount = 0;
let enemyHand = 0;
let check = true;
let isStand = false;
enemyFinished = true;
let eyes = 2;
let foeEyes = 2;
let imageSwitch = 0;

//to start the game off
let foeFirst = true;
let firstCard = 0;
let foeCount = 0;
let betChecker = 0;
let newGame = true;

//endgame, enemy stand ai factors, certain bet related variables
let aggression = 0;
let nervous = 0;
let analysis = 0;
let faceUp = 0;
let intelligence1 = currentFoe.intellect1;
let intelligence2 = currentFoe.intellect2;
let die = false;
let eyeChop = false;
let foeChop = false;
let betRaise = false;
let finalBoss = false;
let instaFix = false;

//dialogue stoppers
let stopIntro = false;
let stopWin = true;
let stopLose = true;
let stopIdle = true;


//to boot up the audio
let audioStart = true;
currentFoe.theme[0].loop = true;

//to boot up the game
let gameStart = 0;
death();


function bet()
{
   if(audioStart)
   {
    currentFoe.theme[0].play();
    audioStart = false;
   }
    stopIntro = true;
    document.getElementById("dialogue").innerHTML = ``;
    


betChecker = parseInt(document.getElementById("bet").value);
if(betChecker > betMax)
{
    currentBet = betMax;
}else if(betChecker < 1)
{
    currentBet = 1;
}else
{
    currentBet = betChecker;
}

if(eyeChop && !foeChop)
    {
        currentBet = 2;
        document.getElementById("eyeAnnounce").innerHTML =
    `
    <p>Without your fingers to bet, all bets during this period are worth either 2 of your foe's fingers or your eye. Play carefully.</p>
    `
    }else if(!eyeChop && foeChop)
        {
            currentBet = 2;
            document.getElementById("eyeAnnounce").innerHTML =
        `
        <p>Without their fingers to bet, all bets during this period are worth either 2 of your fingers or their eye. You better win.</p>
        `
        }else if(eyeChop && foeChop)
        {
            currentBet = 2;
            document.getElementById("eyeAnnounce").innerHTML =
        `
        <p>Eye for an eye. You know the drill. Good luck.</p>
        ` 
        }

if((!eyeChop && !foeChop) && enemyBetMax > currentBet && currentBet < 3 && nervous != 2)
{
    let ran = Math.round(Math.random()* (3.499 - 1)) + 1;
    console.log(ran);
    if(ran <= 2)
    {
        currentBet += 1;
       betRaise = true;
    }
}



document.getElementById("actions").innerHTML =
`
<div id = "startFix">
<button id = "start" onclick = "start()">start</button>
</div>
    <div id = "stand"></div>
`
if(betRaise)
{
    document.getElementById("eyeAnnounce").innerHTML =` <p>Your foe has raised the bet to ${currentBet} fingers.</p>`;
}
}


function start()
{
    hit();
    hit();
}
//blackjack hit functions
//for player

function hit()
{
    
        document.getElementById("eyeAnnounce").innerHTML =``;
    

let check = true;
let ran = Math.round(Math.random()* (12.499 - (-0.49)) + (-0.49));
console.log(ran);


//if ace is eleven, and then next hit is greater than 21, make ace able to be a one again. Also make sure multiple aces can be seperate values. such as one ace being a one value and another being an eleven.
while(check)
{
    //handles the cards the player gets
   if(!cards[ran].amount == 0 && !ran == 0)
   {
        faceUp++
       cards[ran].amount--;
       hand += cards[ran].value;
       if(hand > 21 && aceElevenCount > 0)
       {
        aceElevenCount--;
        hand -= 10;
        console.log("Ace change");
        console.log(aceElevenCount);
       }
       if(ran < 10)
       {
       document.getElementById("playerCards").innerHTML +=
       `
       <div id = "card">${cards[ran].value}</div>
       `;
       }else
       {
        document.getElementById("playerCards").innerHTML +=
        `
        <div id = "card">${cards[ran].name}</div>
        `;
       }
       if(faceUp == 2 && cards[ran].value >= 10)
       {
        analysis = 1;
        console.log(analysis + "YEAHEYAHEYAH");
       }
       
       break;
   }
   else if(cards[ran] == cards[0] && !cards[0].amount == 0)
   {
    faceUp++
    console.log("ace");
   if(hand + 11 < 21 || hand + 11 == 21)
   {
    hand += 11;
    aceElevenCount++;
    cards[0].amount--;
    document.getElementById("playerCards").innerHTML +=
    `
    <div id = "card">Ace</div>
    `;
   
   
   }else
   {
    hand += 1;
    cards[0].amount--;
    document.getElementById("playerCards").innerHTML +=
    `
    <div id = "card">Ace</div>
    `;
   
   }
   if(faceUp == 2)
    {
        analysis = 1;
        
    }
    break;
   }
   else
   {
    ran = Math.round(Math.random()* (12.499 - (-0.49)) + (-0.49));
   }
}
//calls if the player stands
if(hand > 21 || hand == 21)
{
    stand();
}


enemyHit();
}


//for enemy


// START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE START OF ENEMY CODE 
let timer;
function enemyHit()
{
    console.log(currentFoe);
    console.log(intelligence1 + " int 1");
    console.log(intelligence2  + " int 2");
    console.log(aggression + " aggro");
    console.log(nervous + " nerv");
   
    enemyFinished = false;
    document.getElementById("actions").innerHTML =``;
    if(check)
    {
    document.getElementById("gameAnnouncements").innerHTML =
    `
    <p>Enemy's turn</p>
    `;
    }else
    {
        document.getElementById("gameAnnouncements").innerHTML =
        `
        <p>Foe has stood.</p>
        `;  
    }


if(foeCount <= 1)
{
    timer = 0;
}else
{
    timer = Math.floor(Math.random() * (2000 - 750) + 750);
}
setTimeout(() => {
//enemy ai and card randomization
let ran = Math.round(Math.random()* (12.499 - (-0.49)) + (-0.49));


while(check)
{
   if(!cards[ran].amount == 0 && !ran == 0)
   {
    cards[ran].amount--;
    enemyHand += cards[ran].value;
    if(enemyHand > 21 && foeElevenCount > 0)
    {
    foeElevenCount--;
     enemyHand -= 10;
     console.log(firstCard);
     console.log("Foe ace change");
     console.log(foeElevenCount);
    }
    if(!foeFirst)
        {
            if(ran < 10 && ran != 0)
                {
                document.getElementById("foeCards").innerHTML +=
                `
                <div id = "card">${cards[ran].value}</div>
                `;
                }else
                {
                 document.getElementById("foeCards").innerHTML +=
                 `
                 <div id = "card">${cards[ran].name}</div>
                 `;
                }
       
        }else
        {
            if(ran < 10 && ran != 0)
            {
            firstCard = cards[ran].value;
            }else
            {
                console.log(firstCard);
                firstCard = cards[ran].name;
            }
            document.getElementById("foeCards").innerHTML +=
            `
            <div id = "cardSpec">Back</div>
            `;  
        }
   
    break;
   }
   //handler for the ace code
   else if(cards[ran] == cards[0] && !cards[0].amount == 0)
   {
   
    if(enemyHand + 11 > 21 && enemyHand + 11 != 21)
    {
        cards[0]--;
        enemyHand += 1;
       if(!foeFirst)
       {
        document.getElementById("foeCards").innerHTML +=
        `
        <div id = "card">Ace</div>
        `;
       }else
       {
        console.log(firstCard);
        firstCard = "Ace";
        console.log(firstCard);
        document.getElementById("foeCards").innerHTML +=
        `
        <div id = "cardSpec">Back</div>
        `;
       }
    }else
    {
        cards[0]--;
        enemyHand += 11;
        foeElevenCount++;
        if(!foeFirst)
            {
             document.getElementById("foeCards").innerHTML +=
             `
             <div id = "card">Ace</div>
             `;
            }else
            {
                console.log(firstCard);
                firstCard = "Ace";
                console.log(firstCard);
             document.getElementById("foeCards").innerHTML +=
             `
             <div id = "cardSpec">Back</div>
             `;
            }
    }
    break;
   }
   else
   {
       ran = Math.round(Math.random()* (12.499 - (-0.49)) + (-0.49));
   }
   
}
if(check)
{
    //handles the enemy stand ai
let stand = Math.round(Math.random()*((26 - aggression - analysis + nervous) - enemyHand) + enemyHand);
if((stand > 21 || enemyHand == 21 || enemyHand > 21 || enemyHand >= intelligence2) && enemyHand > intelligence1 && foeCount > 1)
{
    check = false;
    
   
   
}else
{
    check = true;
   
   
}
}

foeFirst = false;
if(!isStand && foeCount > 0)
{
    document.getElementById("gameAnnouncements").innerHTML =`<p>Take a moment to overview the cards.</p>`;  
document.getElementById("continue").innerHTML =`<button onclick = "standCont()">Continue</button>`
}

foeCount++;
enemyFinished = true;



}, timer);



}
// END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE END OF ENEMY CODE 

//continue function(s)
function standCont()
{
    document.getElementById("actions").innerHTML =
    `
    <button id = "hit" onclick = "hit()">hit</button>
        <div id = "stand"><button onclick = "stand()">stand</button></div>
    `
    document.getElementById("continue").innerHTML =``;  
    document.getElementById("gameAnnouncements").innerHTML =`<p>Player's Turn</p>`;  
}
//stand function
function stand()
{
   
    isStand = true;
    document.getElementById("actions").innerHTML =``;
   const interval = setInterval (() =>
   {
    if(enemyFinished && check)
    {
        enemyHit();
    }else if(!check)
    {
       
        clearInterval(interval);
        document.getElementById("gameAnnouncements").innerHTML =
    `
    <p>Round over.</p>
    `;
            document.getElementById("results").innerHTML =
            `
            <button id = "results" onclick = "results()">Results</button>
            `;
       
       
    }
   }, 200);
   
   
   
}
function results()
{
    stopWin = false;
    stopLose = false;
    stopIdle = false;
   
    document.getElementById("gameAnnouncements").innerHTML =``;
    document.getElementById("cardSpec").innerHTML = firstCard;
//change this code to make player have to click for these results(seperate function and a seperate button)
    if((hand > enemyHand && hand < 21)|| (enemyHand > 21 && hand < 21) || (hand != enemyHand && hand == 21))
    {
        fingerCut.play();
        
        enemyBetMax -= currentBet;
        if(enemyBetMax <= 0)
            {
                enemyBetMax = 0;
               if(foeChop == true)
               {
                foeEyeGone.play();
                document.getElementById("eyeAnnounce").innerHTML = ``;
                foeChop = false;
                foeEyes--;
                imageSwitch++
                console.log("FOE EYE GONE");
                nervous = 1;
                aggression = 0;
                enemyBetMax = 5;
                document.getElementById("enemyImage").src = currentFoe.images[imageSwitch];
                console.log(imageSwitch);
               }else
               {
                foeFingerGone.play();
               console.log("BOUTTA CHOP OUT DAT foe EYE");
               foeChop = true;
               aggression = 0;
               nervous = 2;
               }
                
            }else
            {
                foeFingerGone.play();
                aggression = 2;
            }
        document.getElementById("Foefingers").innerHTML = enemyBetMax;
        document.getElementById("fingers").innerHTML = betMax;
        document.getElementById("foeEyes").innerHTML = foeEyes;
        document.getElementById("eyes").innerHTML = eyes;
        document.getElementById("results").innerHTML ="YOU WIN!";
        if(foeEyes != 0)
        {
            document.getElementById("dialogue").innerHTML = `${currentFoe.name}: `
            
        let ran = Math.round(Math.random()* (2.49 - (-0.49)) + (-0.49))
        console.log(ran);
        for(let i = 0; i < currentFoe.loseLines[ran].length; i++)
            {
                
                
                setTimeout(() => {
                    if(!stopLose)
                        { 
                document.getElementById("dialogue").innerHTML += currentFoe.loseLines[ran].substring(i, i+1);
                        }
                }, i * 25)
                
            }
        }
       

      
       document.getElementById("playspace").innerHTML +=
        `
        <div id = "scoreboard">
        <p>Player: <span id = "playerAmount">${hand}</span></p>
        <p>Foe: <span id = "foeAmount">${enemyHand}</span></p>
        </div>
        `;
       
        document.getElementById("reset").innerHTML =
        `
        <button onclick = "reset()">Continue</button>
        `;
       
    }else if((hand < enemyHand && enemyHand < 21) || (hand > 21 && enemyHand < 21) || (enemyHand != hand && enemyHand == 21))
    {
        fingerCut.play();
       
        betMax -= currentBet;
        if(betMax <= 0)
        {
            betMax = 0;
            if(eyeChop == true)
            {
                eyeGone.play();
                document.getElementById("eyeAnnounce").innerHTML = ``;
                eyeChop = false;
                console.log("EYE GONE!");
                aggression = 2;
                eyes--;
                betMax = 5;

            }else
            {
            fingerGone.play();
            console.log("BOUTTA CHOP OUT DAT EYE");
            eyeChop = true;
            aggression = 1;
            nervous = 0;
            }
        }else if(eyes == 2)
        {
            fingerGone.play();
            aggression = 1;
        }else
        {
            fingerGone.play();
        }
        
        document.getElementById("Foefingers").innerHTML = enemyBetMax;
        document.getElementById("fingers").innerHTML = betMax;
        document.getElementById("foeEyes").innerHTML = foeEyes;
        document.getElementById("eyes").innerHTML = eyes;
       
        document.getElementById("results").innerHTML ="YOU LOSE!";
        if(foeEyes != 0)
        {
            document.getElementById("dialogue").innerHTML = `${currentFoe.name}: `
        let ran = Math.round(Math.random()* (2.49 - (-0.49)) + (-0.49))
        for(let i = 0; i < currentFoe.winLines[ran].length; i++)
            {
               
                    setTimeout(() => {
            
                if(!stopWin)
                {   
                document.getElementById("dialogue").innerHTML += currentFoe.winLines[ran].substring(i, i+1);
                }    
                    
                }, i * 25)
                
            }
        }
       
        document.getElementById("playspace").innerHTML +=
        `
        <div id = "scoreboard">
        <p>Player: <span id = "playerAmount">${hand}</span></p>
        <p>Foe: <span id = "foeAmount">${enemyHand}</span></p>
        </div>
        `;
       
        document.getElementById("reset").innerHTML +=
        `
        <button onclick = "reset()">Continue</button>
        `;
    }else
    {
        nervous = 1;
        document.getElementById("results").innerHTML = "TIE.";
        if(foeEyes != 0)
        {
            document.getElementById("dialogue").innerHTML = `${currentFoe.name}: `
        let ran = Math.round(Math.random()* (2.49 - (-0.49)) + (-0.49))
        for(let i = 0; i < currentFoe.idleLines[ran].length; i++)
            {
                
                setTimeout(() => {
                    if(!stopIdle)
                        {   
                document.getElementById("dialogue").innerHTML += currentFoe.idleLines[ran].substring(i, i+1);
                        }    
                }, i * 25)
                
            }
        }
       
        document.getElementById("playspace").innerHTML +=
        `
        <div id = "scoreboard">
        <p>Player: <span id = "playerAmount">${hand}</span></p>
        <p>Foe: <span id = "foeAmount">${enemyHand}</span></p>
        </div>
        `;
       
        document.getElementById("reset").innerHTML =
        `
        <button onclick = "reset()">Continue</button>
        `;
    }
    if(eyes == 0)
    {
        die = true;
        document.getElementById("reset").innerHTML =
        `
        <button onclick = "death()">Game over</button>
        `;
    }else if(foeEyes == 0 && currentFoe != foes[2])
    {
       
        document.getElementById("reset").innerHTML =
        `
        <button onclick = "death()">Onto next foe.</button>
        `;
    }else if(foeEyes == 0 && !finalBoss)
    {
        finalBoss = true;
        enemyBetMax = 10;
        foeEyes = 1;
        console.log("it works dude");
        imageSwitch++
        foes[2].theme[0].pause();
        foes[2].theme[0].currentTime = 0;
        foes[2].theme[1].play();
        document.getElementById("enemyImage").src = currentFoe.images[imageSwitch];
        document.getElementById("Foefingers").innerHTML = enemyBetMax;
        document.getElementById("foeEyes").innerHTML = foeEyes;
    }else if(foeEyes == 0 && finalBoss)
    {
        document.getElementById("reset").innerHTML =
        `
        <button onclick = "death()">You have won!</button>
        `;
    }
}


//reset
function reset()
{
  
stopWin = true;
stopLose = true;
stopIdle = true;
    if(betMax < 0)
    {
        betMax = 0;
    }
    document.getElementById("playspace").innerHTML =
    `
   <div id = "actions">
    <label for = "bet">Place a bet:</label>
    <input type="number" id="bet" name="bet" min="1" max="${betMax + 1}" value = "1">
    <button id = "betPlace" onclick = "bet()">Place bet</button>
   <!-- <button id = "start" onclick = "start()">start</button> -->
    <div id = "stand"></div>
</div>
    
   <div class = "announcementContainer">
<div id = "eyeAnnounce"></div>
<div id = "continue"></div> 
    `;
    document.getElementById("reset").innerHTML =``;
    document.getElementById("dialogue").innerHTML =``;
    document.getElementById("results").innerHTML =``;
    document.getElementById("foeCards").innerHTML =``;
    document.getElementById("playerCards").innerHTML = ``;
    
   
    hand = 0;
    enemyHand = 0;
    aceElevenCount = 0;
    foeElevenCount = 0;
    check = true;
    foeFirst = true;
    firstCard = 0;
    foeCount = 0;
    isStand = false;
    enemyFinished = true;
    analysis = 0;
    faceUp = 0;
    betRaise = false;
    stopIntro = false;
    
    
    for(let bi = 0; bi < cards.length; bi++)
    {
        cards[bi].amount = 4;
    }
   
   
   
   
}








//death reset




function death()
{
    
       //switching foes
if(!die && gameStart != 0)
{
   
    
    if(switcher > 2)
    {
        //win condition
        window.location.href = "gameWin.html";
        //placeholder code to prevent errors
    }else
    {
        imageSwitch = 0;
        eyeChop = false;
        console.log("switched");
        console.log(eyes);
        eyes = eyes;
        currentFoe.theme[0].pause();
        currentFoe.theme[0].currentTime = 0;
        switcher++
        currentFoe = foes[switcher];
        currentFoe.theme[0].play();
        
        document.getElementById("enemyImage").src = currentFoe.images[imageSwitch];
        console.log(eyes);
    }
}else
{
    
    //change this to send player to gameover screen
    if(instaFix)
    {
    window.location.href = "gameOver.html";
    }
    instaFix = true;
    imageSwitch = 0;
    eyes = 2;
    console.log("GAME OVER")
    currentFoe.theme[0].pause();
    currentFoe.theme[0].currentTime = 0;
    foes[2].theme[1].pause();
    foes[2].theme[1].currentTime = 0;
    switcher = 0;
    currentFoe = foes[switcher];
    currentFoe.theme[0].play();
    die = false;
}
    document.getElementById("container").innerHTML =
    `
   <div>
    <div id = "Foestats">

        <p>Foe's fingers left: <span id = "Foefingers">5</span></p>
        <p>Foe's eyes left: <span id = "foeEyes">2</span></p>
        <div id = "foeCards"></div>
        
        
    </div>
</div>
<div id = "foeImage"><img id = "enemyImage" src = "${currentFoe.images[imageSwitch]}" alt = "foe" width = "400px" height = "400px"></div>
<div id = "gameAnnouncements"></div>


<div id = "playContainer">
    <div id = "stats">

        <p>Your fingers left: <span id = "fingers">5</span></p>
        <p>Eyes left: <span id = "eyes">${eyes}</span></p>
        <div id = "playerCards"></div>
        
        
    </div>
    <div>
<div id = "playspace">
<div id = "actions">
    <label for = "bet">Place a bet:</label>
    <input type="number" id="bet" name="bet" min="1" max="5" value = "1">
    <button id = "betPlace" onclick = "bet()">Place bet</button>
   <!-- <button id = "start" onclick = "start()">start</button> -->
    <div id = "stand"></div>
</div>


</div>
<div class = "announcementContainer">

<div id = "eyeAnnounce"></div>
<div id = "continue"></div>
</div>


<div id = "reset"></div>
</div>
<div>
    <p id = "results"></p>
    <div style = "display:flex; align-items: center;">
        <p>Dialogue:</p>
    <p id = "dialogue"></p>
    </div>
</div>
</div>
   
    `;
    document.getElementById("reset").innerHTML =``;
    document.getElementById("gameAnnouncements").innerHTML =``;
    document.getElementById("results").innerHTML =``;
   
   
 

    
    newGame = true;
    aggression = 0;
    nervous = 0;
    intelligence1 = currentFoe.intellect1;
    intelligence2 = currentFoe.intellect2;
    hand = 0;
    enemyHand = 0;
    aceElevenCount = 0;
    foeElevenCount = 0;
    check = true;
    foeFirst = true;
    firstCard = 0;
    foeCount = 0;
    isStand = false;
    enemyFinished = true;
    foeEyes = 2;
    betMax = 5;
    enemyBetMax = 5;
    currentBet = 0;
    stopWin = false;
    stopLose = false;
    stopIdle = false;
    stopIntro = false;
    newGame = true;
    gameStart++;
    console.log(eyes);
    finalBoss = false;
    if(newGame)
        {
           
            document.getElementById("dialogue").innerHTML = `${currentFoe.name}: `
            
            for(let i = 0; i < currentFoe.intro.length; i++)
            {
                if(stopIntro)
                    {
                       
                        break;
                    }
                setTimeout(() => {
                    if(!stopIntro)
                        {
         
                document.getElementById("dialogue").innerHTML += currentFoe.intro.substring(i, i+1);
                        }
                    
                }, i * 25)
                
                
            }
            
            newGame = false;
        }
   
   
    for(let bi = 0; bi < cards.length; bi++)
    {
        cards[bi].amount = 4;
    }
   
   
}