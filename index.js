var container = document.getElementById("myContainer");             
var el = document.getElementById("myAnimation");                        
var pauselr = 0;
var pauseud =0;         
var deg = 0  ;   
var movedirection = '';

function left() {     
    deg -= 90;     
    el.style.transform = "rotate(" + deg + "deg)";
   if(movedirection==='right'){
    movedirection='up';
   }
   else if(movedirection==='left'){
    movedirection='down';
   }
   else if(movedirection==='up'){
    movedirection='left';
   }
   else if (movedirection==='down') {
    movedirection='right';
   }
   else{
    movedirection='left';
   }
}   
function right() {     
    deg += 90;     
    el.style.transform = "rotate(" + deg + "deg)"; 
     if(movedirection==='right'){
    movedirection='down';
   }
   else if(movedirection==='left'){
    movedirection='up';
   }
   else if(movedirection==='up'){
    movedirection='right';
   }
   else if (movedirection==='down') {
    movedirection='left';
   }
   else{
    movedirection='right';
   }
}   
function forward() {
    if (pauselr === 350) {
        alert('Drone is reached at right');
        return;
    }      
    // deg += 90;  
    pauselr += 50;     
    // el.style.transform = "rotate(" + deg + "deg)";     
    el.style.left = pauselr + "px"; 
    movedirection = 'right';   
}   
function backward() {
    if (pauselr === 0) {
        alert('Drone is reached at left');
        return;
    }     
    // deg += 90;     
    pauselr -= 50;     
    // el.style.transform = "rotate(" + deg + "deg)";     
    el.style.left = pauselr + "px";  
    movedirection = 'left';  
}   
function goUp() { 
    if (pauseud === 0) {
        alert('Drone is reached at top');
        return;
    }    
    // deg += 90;  
    pauseud -= 50;   
    // el.style.transform = "rotate(" + deg + "deg)";     
    el.style.top = pauseud + "px"; 
    movedirection = 'up'; 

}   
function goDown() { 
    if (pauseud === 350) {
        alert('Drone is reached at bottom');
        return;
    }
    // deg += 90;     
    pauseud += 50;
    // el.style.transform = "rotate(" + deg + "deg)";     
    el.style.top = pauseud + "px";  
    movedirection = 'down'; 

}
function getPositionXY() {
    var myAnimation=document.getElementById('myAnimation')
  
             var  sq = myAnimation.getBoundingClientRect();
             console.log(sq.x+"---"+sq.y);
             
                document.getElementById('position').innerHTML="Current Position Of drone is X="+sq.x+", Y="+sq.y;
            }

function place() {
el.style.display="block";
    el.style.left = "0px";
    el.style.top = "350px";
    var buttons = document.querySelectorAll('button');
    
    for (let button of buttons) {
        button.disabled = false;
    }
    deg = 0;
    pauselr = 0;
    pauseud = 350;
    movedirection = 'right';
    el.style.transform="none";
}
function move() {

    switch(movedirection){
        case 'right':
        forward();
        break
        case 'left':
        backward();
        break
        case 'up':
        goUp();
        break
        case 'down':
        goDown();
        break
        default:alert("Sorry, please try again.")
              break 

    }
  
}
function attack() {

    var elem = document.getElementById("attack");
    console.log('movedirection---',movedirection);
      console.log('pauseud---',pauseud);
    switch (movedirection) {
        case 'right':
            var letfPos = pauselr + 100;
            var topPos = pauseud;
            console.log('leftPos', leftPos);

            if (letfPos <= 350) {
                elem.style.left = `${letfPos}px`;
                elem.style.top = `${topPos}px`;
                elem.classList.remove('attack');
                elem.classList.add('boom');
                setTimeout(function() {
                    elem.classList.remove('boom');
                    elem.classList.add('attack');
                }, 1000);
            } else {
                alert('No space for attack...!');
            }
            break;
        case 'left':
            var rightPos = pauselr - 100;
            var topPos = pauseud;
            console.log('rightPos', rightPos);
            if (rightPos > 100) {
                elem.style.left = `${rightPos}px`;
                elem.style.top = `${topPos}px`;
                elem.classList.remove('attack');
                elem.classList.add('boom');
                setTimeout(function() {
                    elem.classList.remove('boom');
                    elem.classList.add('attack');
                }, 1000);
            } else {
                alert('No space for attack...!');
            }
            break;
        case 'up':
            var upPos = pauseud - 100;
            var leftPos = pauselr;
            console.log('upPos', upPos);
            if (upPos > 100) {
                elem.style.top = `${upPos}px`;
                elem.style.left = `${leftPos}px`;
                elem.classList.remove('attack');
                elem.classList.add('boom');
                setTimeout(function() {
                    elem.classList.remove('boom');
                    elem.classList.add('attack');
                }, 1000);
            } else {
                alert('No space for attack...!');
            }
            break;
        case 'down':
            var downPos = pauseud + 100;
            console.log('downPos--',downPos)
            var leftPos = pauselr;
            console.log('downPos', downPos);
            if (downPos <= 350) {
                elem.style.top = `${downPos}px`;
                elem.style.left = `${leftPos}px`;
                elem.classList.remove('attack');
                elem.classList.add('boom');
                setTimeout(function() {
                    elem.classList.remove('boom');
                    elem.classList.add('attack');
                }, 1000);
            } else {
                alert('No space for attack...!');
            }
            break;
        default:
            alert('Something went wrong...!');
            place();
            break;
    }

}