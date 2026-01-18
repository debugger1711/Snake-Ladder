var valueOfBox=1;
var flag=true;
// randomize starting player: true = Player 1 (blue), false = Player 2 (yellow)
var player = Math.random() < 0.5;
var player1=false;
var player2=false;
var firstPlayerPosition=0;
var secondPlayerPosition=0;
var oldResultClearPlayerOne=0;
var moved=0;
var oldResultClearPlayeTwo=0;
// simple WebAudio-based sound effects (no external files required)
const _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(freq, duration = 0.12, type = 'sine', when = 0, volume = 0.15) {
    try {
        const now = _audioCtx.currentTime + when;
        const o = _audioCtx.createOscillator();
        const g = _audioCtx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, now);
        g.gain.setValueAtTime(volume, now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        o.connect(g);
        g.connect(_audioCtx.destination);
        o.start(now);
        o.stop(now + duration + 0.02);
    } catch (e) {
        console.warn('Audio failed:', e);
    }
}

function playSequence(freqs, step = 0.08, type = 'sine', volume = 0.13) {
    freqs.forEach((f, i) => playTone(f, step * 0.9, type, i * step, volume));
}

function playSound(name) {
    if (_audioCtx.state === 'suspended') _audioCtx.resume().catch(() => {});
    switch (name) {
        case 'diceRoll':
            playSequence([240, 280, 320, 360, 300], 0.05, 'triangle', 0.15);
            break;
        case 'moveStep':
            playTone(520, 0.12, 'triangle', 0, 0.10);
            break;
        case 'ladder':
            playSequence([440, 560, 700], 0.12, 'sawtooth', 0.14);
            break;
        case 'snake':
            playSequence([520, 440, 320], 0.12, 'sine', 0.14);
            break;
        case 'win':
            playSequence([660, 880, 990, 1320], 0.08, 'sawtooth', 0.16);
            break;
        default:
            playTone(400, 0.08, 'sine', 0, 0.08);
    }
}

// Popup/toast helper for win/ladder/snake messages
function showPopup(type, message) {
    // remove existing popup if present
    const existing = document.getElementById('gamePopup');

// simple WebAudio-based sound effects (no external files required)
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.id = 'gamePopup';
    popup.innerText = message;
    // basic styling
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '8%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.padding = '14px 22px';
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '18px';
    popup.style.zIndex = 9999;
    popup.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
    popup.style.color = 'white';

    if (type === 'win') {
        popup.style.background = 'linear-gradient(90deg,#ff7e00,#ff1a75)';
    } else if (type === 'ladder') {
        popup.style.background = 'linear-gradient(90deg,#28a745,#7be495)';
    } else if (type === 'snake') {
        popup.style.background = 'linear-gradient(90deg,#dc3545,#ff8a8a)';
    } else {
        popup.style.background = 'rgba(0,0,0,0.7)';
    }

    document.body.appendChild(popup);

    // auto-remove after 2.5s (longer for win)
    const timeout = (type === 'win') ? 4500 : 2500;
    setTimeout(() => {
        popup.style.transition = 'opacity 300ms';
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    }, timeout);
}


// function disableFunction()
// {
//     document.getElementById('play').disabled=true;
// }
 for(let counter=1;counter<=10;counter++)
 {
     let parentPara = document.createElement('div');
     let parentId=document.createAttribute('id');
     let parentClass=document.createAttribute('class');
     let tempParentId='parent'+counter;
     parentId.value=tempParentId;
     let parentElement = document.getElementById('main');
     if(counter%2==0)
     {
         parentClass.value='parent reverse';
     }
     else
     {
        parentClass.value='parent';
     }
     parentElement.appendChild(parentPara);
     parentPara.setAttributeNode(parentId);
     parentPara.setAttributeNode(parentClass); 
     for(let subCounter = 1;subCounter<=10;subCounter++)
     {
        let childPara = document.createElement('div');
        if(valueOfBox==4)
        {
            childNode = document.createTextNode(valueOfBox+'-23');
        }
        else if(valueOfBox==8)
        {
            childNode = document.createTextNode(valueOfBox+'-31');
        }
        else if(valueOfBox==15)
        {
            childNode = document.createTextNode(valueOfBox+'-44');
        }
        else if(valueOfBox==20)
        {
            childNode = document.createTextNode(valueOfBox+'-57');
        }
        else if(valueOfBox==28)
        {
            childNode = document.createTextNode(valueOfBox+'-69'); 
        }
        else if(valueOfBox==42)
        {
            childNode = document.createTextNode(valueOfBox+'-96'); 
        }
        else if(valueOfBox==56)
        {
            childNode = document.createTextNode(valueOfBox+'-78'); 
        }
        else if(valueOfBox==99)
        {
            childNode = document.createTextNode(valueOfBox+'-9'); 
        }
        else if(valueOfBox==90)
        {
            childNode = document.createTextNode(valueOfBox+'-43'); 
        }
        else if(valueOfBox==72)
        {
            childNode = document.createTextNode(valueOfBox+'-34'); 
        }
        else if(valueOfBox==53)
        {
            childNode = document.createTextNode(valueOfBox+'-22'); 
        }
        else if(valueOfBox==27)
        {
            childNode = document.createTextNode(valueOfBox+'-5'); 
        }
        else if(valueOfBox==35)
        {
            childNode = document.createTextNode(valueOfBox+'-17'); 
        }
        else if(valueOfBox==47)
        {
            childNode = document.createTextNode(valueOfBox+'-29'); 
        }
        else
        {
            childNode = document.createTextNode(valueOfBox);
        }
        let childImgTag=document.createElement('img');
        let childTwoImgTag=document.createElement('img');
        childPara.appendChild(childNode);
        childPara.appendChild(childImgTag);
        childPara.appendChild(childTwoImgTag);
        let childAttribute = document.createAttribute('class');
        let childImgAttribute=document.createAttribute('class');
        let childTwoImgAttribute=document.createAttribute('class');
        let childId=document.createAttribute('id');
        let childTwoImgId=document.createAttribute('id');
        let childTwoImgSrc=document.createAttribute('src');
        let childImgId=document.createAttribute('id');
        let childImgSrc=document.createAttribute('src');
        childImgId.value='img'+valueOfBox;   
        childTwoImgId.value='twoImg'+valueOfBox;
           
        childId.value=valueOfBox;     
        let childElement = document.getElementById(tempParentId);
        if(subCounter%2==0)
        {
            childAttribute.value='box alternateColor';
        }  
        else
        {
            childAttribute.value='box';
        }
                if(valueOfBox==99||valueOfBox==9||valueOfBox==90||valueOfBox==72||valueOfBox==53||valueOfBox==34||valueOfBox==43||valueOfBox==22||valueOfBox==27||valueOfBox==5||valueOfBox==35||valueOfBox==17||valueOfBox==47||valueOfBox==29)
                {
                    childAttribute.value='box snake';
                }
                if(valueOfBox==96||valueOfBox==69||valueOfBox==78||valueOfBox==56||valueOfBox==42||valueOfBox==28||valueOfBox==23||valueOfBox==4||valueOfBox==8||valueOfBox==31||valueOfBox==15||valueOfBox==44||valueOfBox==20||valueOfBox==57)
                {
                    childAttribute.value='box ladder';   
                }
        childTwoImgSrc.value=' ';
        childImgSrc.value=' ';
        childTwoImgAttribute.value='position';
        childImgAttribute.value='position';
        childElement.appendChild(childPara);
        childPara.setAttributeNode(childAttribute);
        childPara.setAttributeNode(childId); 
        childImgTag.setAttributeNode(childImgSrc);
        childImgTag.setAttributeNode(childImgId);
        childImgTag.setAttributeNode(childImgAttribute);
        childTwoImgTag.setAttributeNode(childTwoImgSrc);
        childTwoImgTag.setAttributeNode(childTwoImgId);
        childTwoImgTag.setAttributeNode(childTwoImgAttribute);
        valueOfBox++;
     }   
 }
 var txt = player ? 'First Player' : 'Second Player';
 var boxcolor = player ? "background-color:blue" : "background-color:yellow";
 document.getElementById('PlayerTurn').innerHTML = txt;
 document.getElementById('PlayerTurn').style = boxcolor;
 

 document.getElementById('play').addEventListener("click",randomNumberGenerator);

 function randomNumberGenerator() {
     document.getElementById('play').disabled=true;
    clearInterval(moved);
    if(firstPlayerPosition==100||secondPlayerPosition==100)
    {
        document.getElementById('play').disabled=true;
        document.getElementById(diceImg).src='img/dice.png';
    }
    else
    {

        if(firstPlayerPosition==100||secondPlayerPosition==100)
        {
            document.getElementById('play').disabled=true;
            document.getElementById(diceImg).src='img/dice.png';
        }
        else
        {
            document.getElementById('diceImg').src='img/PB.gif';
        }
        value = setTimeout(() => { 
            document.getElementById('diceImg').src=diceImg;
            document.getElementById('num').innerHTML=diceValue;
            document.getElementById('PlayerTurn').innerHTML=txt;
            document.getElementById('PlayerTurn').style=boxcolor;
            // play dice roll sound
            // use 'diceRoll' (do not use the old 'dice' alias)
            try{ playSound('diceRoll'); }catch(e){console.error(e)}
            turn(player,diceValue);    
            document.getElementById('diceImg').src=diceImg;
        },2500)
         diceValue=Math.floor(Math.random()* 6 + 1 );
         timer=3000;
         setTimeout(() => {
             document.getElementById("play").disabled = false;
            },1800);
        // winner check is handled in checkWinner after moves; remove premature alerts here
         if(firstPlayerPosition==100||secondPlayerPosition==100)
         {
            diceImg='img/dice.png'
         }
         else if(diceValue==1)
         {
             diceImg='img/one.png';
         }
         else if(diceValue==2){
             diceImg='img/two.png';
         }
         else if(diceValue==3){
            diceImg='img/three.png';
        }
        else if(diceValue==4){
            diceImg='img/four.png';
        }
        else if(diceValue==5){
            diceImg='img/fivee.png';
        }
        else if(diceValue==6){
            diceImg='img/six.png';
        }
        if(player){
            txt='First Player';
            boxcolor="background-color:blue";
        } else {
            txt='Second Player';
            boxcolor="background-color:yellow";
        }
    }
 }
 const turn = (player,diceValue) => {
    console.log(player);
        if(player)
        {
            if(firstPlayerPosition==0)
            {
                if(diceValue==6||diceValue==1)
                {
                    document.getElementById('oneStart').style.display='none';
                    firstPlayerPosition=1;
                    setToFirst(player);
                    console.log("firstPlayerPosition"+firstPlayerPosition);
                }
            }
            else
            {
                firstPlayerPosition=moveCounter(player,diceValue,firstPlayerPosition);
                firstPlayerPosition=checkLadder(player,firstPlayerPosition);
                firstPlayerPosition=checkSnake(player,firstPlayerPosition);
                checkWinner(firstPlayerPosition,player);
                console.log("firstPlayerPosition"+firstPlayerPosition);
            }
            this.player=false;
            console.log(player);
        }
        else
        {
            if(secondPlayerPosition==0)
            {
                if(diceValue==6||diceValue==1)
                {
                    document.getElementById('twoStart').style.display='none';
                    secondPlayerPosition=1;
                    setToFirst(player);
                    console.log("secondPlayerPosition"+secondPlayerPosition);
                }
            }
            else
            {
                secondPlayerPosition=moveCounter(player,diceValue,secondPlayerPosition);
                secondPlayerPosition=checkLadder(player,secondPlayerPosition);
                secondPlayerPosition=checkSnake(player,secondPlayerPosition);
                checkWinner(secondPlayerPosition,player);
                console.log("secondPlayerPosition"+secondPlayerPosition);
            }
            this.player=true;

            
        }
 }
 
 const moveCounter = (player,diceValue,position) => {
     oldTarget=position;
     if(player)
     {
         imgsrc="img/player1.png";
         setId='img';
         oldId='img'+position;
         tempId=position+diceValue;
         newId='img'+tempId;
     }
     else
     {
         setId='twoImg';
        imgsrc="img/player2.png";
        oldId='twoImg'+position;
        tempId=position+diceValue;
        newId='twoImg'+tempId;
     }
     position=position+diceValue;
     if(position>100)
     {
         position=position-diceValue;
     }
     else
     {
        // document.getElementById(oldId).style.display='none';

        //Try Animation
        moved=setInterval(() => {
            oldId=setId+oldTarget;
            document.getElementById(oldId).style.display='none';
             console.log("In Move Target : "+oldTarget);
             
             this.oldTarget++;
             if(oldTarget>=position)
             {
                 clearInterval(moved);
                 // movement finished — update highlights to show final positions
                 try{ highlightPositions(); }catch(e){console.error(e)}
             }
             newId=setId+oldTarget;
             document.getElementById(newId).src=imgsrc;
             document.getElementById(newId).style.display='block';
             document.getElementById(newId).style.height='40%';
             document.getElementById(newId).style.width='40%';       
                  
        },100);
           // play move sound for this movement only if player was already on board
           try{
               if(oldTarget>0) playSound('moveStep');
           }catch(e){console.error(e)}
        // id='img'+position;
         console.log("hello "+player+" : "+oldId);
        // document.getElementById(newId).src=imgsrc;
        // document.getElementById(newId).style.display='block';
        // document.getElementById(newId).style.height='40%';
        // document.getElementById(newId).style.width='40%';       
     }
     return position;
 }
 const moveTarget = () => {

     if(oldTarget>=position)
     {
         clearTimeout(moved);
     }
     this.oldTarget++;
 }
 
 const setToFirst = (player) => {
    let imgsrc="";
    if(player)
    {
        imgsrc="img/player1.png";
        id='img1'
    }
    else
    {
       imgsrc="img/player2.png";
       id='twoImg1';
    }
    document.getElementById(id).src=imgsrc;
    document.getElementById(id).style.display='block'; 
    document.getElementById(id).style.height='40%';
    document.getElementById(id).style.width='40%';
    
    // update highlights when a player is placed on the board
    highlightPositions();

}
// Clear existing highlights and mark current positions
function clearHighlights(){
    document.querySelectorAll('.current-player1, .current-player2').forEach(el => {
        el.classList.remove('current-player1','current-player2');
    });
}

function highlightPositions(){
    // remove previous
    clearHighlights();
    try{
        if(typeof firstPlayerPosition !== 'undefined' && firstPlayerPosition>0){
            const el = document.getElementById(firstPlayerPosition);
            if(el) el.classList.add('current-player1');
        }
        if(typeof secondPlayerPosition !== 'undefined' && secondPlayerPosition>0){
            const el2 = document.getElementById(secondPlayerPosition);
            if(el2) el2.classList.add('current-player2');
        }
    }catch(e){
        console.error('Highlight error', e);
    }
}
 const checkLadder = (player,position) => {
    oldPosition=position;
    if(player)
    {
        firstoldIdLocation='img'+oldPosition;
    }
    else
    {
        firstoldIdLocation='twoImg'+oldPosition;
    }
    
    flag=false;
    console.log("old position :"+oldPosition);
    if(position==4)
    {
        flag=true;
        position=23;
    }
    else if(position==8)
    {
        flag=true;
        position=31;
    }
    else if(position==15)
    {
        flag=true;
        position=44;
    }
    else if(position==20)
    {
        flag=true;
        position=57;
    }
    else if(position==28)
    {
        flag=true;
        position=69;
    }
    else if(position==42)
    {
        flag=true;
        position=96;
    }
    else if(position==56)
    {
        flag=true;
        position=78;
    }
    console.log("new position :"+position);
    if(flag)
    {
        console.log('yaha se gayab krnge : player1 : '+firstoldIdLocation);
        // show happy ladder message
        showPopup('ladder', 'Great! Ladder up to '+position+' 🎉');
        try{ playSound('ladder'); }catch(e){console.error(e)}
        setTimeout(() => {
            // console.log("old old old position Ladder : "+oldPosition);
            document.getElementById(firstoldIdLocation).style.display='none';
             moveCounterfromLadder(player,oldPosition,position)
        }, 700);
    }
    return position;
    
 }
 
 const checkSnake = (player,position) => {
    // if(player)
    // {

    // }
    // else
    // {

    // }
    if(player)
    {
        oldIdLocation='img'+oldPosition;
    }
    else
    {
        oldIdLocation='twoImg'+oldPosition;
    }
    oldPosition=position;
    snakeFlag=false;
    if(position==99)
    {
        snakeFlag=true;
        position=9;
    }
    else if(position==90)
    {
        snakeFlag=true;
        position=43;
    }
    else if(position==72)
    {
        snakeFlag=true;
        position=34;
    }
    else if(position==53)
    {
        snakeFlag=true;
        position=22;
    }
    else if(position==27)
    {
        snakeFlag=true;
        position=5;
    }
    else if(position==35)
    {
        snakeFlag=true;
        position=17;
    }
    else if(position==47)
    {
        snakeFlag=true;
        position=29;
    }
    if(snakeFlag)
    {
        // show ouch snake message
        showPopup('snake', 'Ouch! Snake bite down to '+position+' 😣');
        try{ playSound('snake'); }catch(e){console.error(e)}
        setTimeout(() => {
            document.getElementById(oldIdLocation).style.display='none';
            console.log('yaha se gayab krnge : player1 : '+oldIdLocation);
            
            //console.log("old old old position : "+oldPosition);
            moveCounterfromLadder(player,oldPosition,position)
            
        }, 1600);
    }
    return position;
 }
 const moveCounterfromLadder = (player,oldPosition,position) => {

    let imgsrc="";
     if(player)
     {
         imgsrc="img/player1.png";
         oldId='img'+oldPosition;
         tempId=position;
         newId='img'+tempId;
     }
     else
     {
        imgsrc="img/player2.png";
        oldId='twoImg'+oldPosition;
        tempId=position;
        newId='twoImg'+tempId;
     }
    //  position=position+diceValue;
     
        document.getElementById(oldId).style.display='none';
        // id='img'+position;
        //  console.log("hello"+id);
        document.getElementById(newId).src=imgsrc;
        document.getElementById(newId).style.display='block';
        
        document.getElementById(newId).style.height='40%';
        document.getElementById(newId).style.width='40%';
              // update highlights after ladder/snake move
              try{ highlightPositions(); }catch(e){console.error(e)}
              try{ if(typeof oldPosition !== 'undefined' && oldPosition>0) playSound('moveStep'); }catch(e){console.error(e)}
 }
 const checkWinner= (position,player)=> {
     if(position==100)
     {
         document.getElementById('play').disabled = true;
         document.getElementById('diceImg').src='img/dice.png';
         if(player)
         {
                // celebration popup for player 1
                showPopup('win','Player 1 wins! 🎉🏆');
                try{ playSound('win'); }catch(e){console.error(e)}
            //  location.reload;
            //  document.getElementById('diceImg').src='img/dice.png';
         }
         else
         {
                // celebration popup for player 2
                showPopup('win','Player 2 wins! 🎉🏆');
                try{ playSound('win'); }catch(e){console.error(e)}
            // document.getElementById('diceImg').src='img/dice.png';
            // location.reload;
         }
        //  restart=confirm("Do you want to Restart The Game")
        // //  =prompt("");
        // if(restart)
        // {
        //     location.reload();
        // }
        //  console.log("restart game "+restart);
     }
}
