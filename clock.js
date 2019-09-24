//second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand') // the .hand here works because in the class they all being with 'hand', remember? 

function setDate() {
    //console.log('hi'); just for debugging
    const now = new Date();
    const seconds = now.getSeconds();

    //then how do you turn the seconds into a degree? 
    //SECONDS ----
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //MINUTES----
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //HOUR----
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;


    console.log(seconds); //just for debugging
    console.log(secondsDegrees);
}

//to fix the voop you could:
//tally the degrees and just keep on counting

//OR

//temporarly with js take off the transition, so when it ticks to the next one it doesn't go back words 
//you just needs some if statemesnt within the set date

/*HOW I APPROACHED GLITCH:
1) all hand divs, in their class begin with hand ...what does that mean? It means if you create a variable to change the html, you can used the 'querySelectorAll function! 
2) after creating an allHands variable we go into the setDate function to add its if statements ... start at the seconds cause thats the hand that evidently moved and you could see it
3) after determining the secondDegrees equation ask it to check for 90 degs ... 

so IF seconddegrees is equal to 90 than remove the transition

ELSE just keep it empty so that after you can set it with the equation you previously solved for!! 

GLITCH IS FIXEEEDD



*/


setInterval(setDate, 1000); //function required to make everything move
