const menuPlay = new Audio("audio/menu.mp3");


function play()
{
    menuPlay.loop = true;
    menuPlay.play();
    let story ="South Croatia has been hit with a devastating famine. Your family is starving. You dont care about your family. But you do care for your dog. A rich noble is holding a dangerous game of blackjack in exchange for a lifetime supply of food. You must win to keep your dog from starving.";

    document.body.style.backgroundImage = "url('images/lazyBack.jpg')";
    document.getElementById("buttonCont").innerHTML = ``;
    document.getElementById("container").innerHTML = 
    `
    <div id = "storyContainer">
    <p id = "storySpace" style = "color:white; display:flex; flex-direction:column; align-items: center; text-align: center;"></p>
    </div>
    `;
    for(let i = 0; i < story.length; i++)
        {
           
           setTimeout(() => {
        
            
            document.getElementById("storySpace").innerHTML += story.substring(i, i+1);
                
                
            }, i * 50)
            
        }

        setTimeout(() => {
        
            
            document.getElementById("storySpace").innerHTML += 
            `
            <a href = "blackjack.html"><button id = "blackJackButton" >Continue.</button></a>
            `;
                
                
            }, (story.length-1) * 50)
       
    }

