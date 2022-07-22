// Two random number generators, one runs to twenty and the other five.
randomNum = Math.floor(Math.random() * 20);
smallerRandNum = Math.floor(Math.random() * 5);

// Opening line of the prediction
function openLine() {
  switch (smallerRandNum) {
    case 1:
      console.log('Look into the crystal ball and let your future be known! it appears that');
      break;
    case 2:
      console.log('The vision is clear to me, your future is known! it seems that');
      break;
    case 3:
      console.log('The vision in the crystal ball predicts to me! it appears that');
      break;
    case 4:
      console.log('The future is as clear as day and it appears that');
      break;
    case 5:
      console.log('The crystal ball divines that');
      break;
    default:
      console.log('The vision is foggy and unclear');
      break;
  }
};

// The predictions, running of the possible random twenty numbers
function crystalBall() {
  switch (randomNum) {
    case 1:
        console.log('You will be unsuccessful in your new endeavours');
        break;
    case 2:
        console.log('You will be very successful in any new endeavours');
        break;
    case 3:
        console.log('You will find new friendship on the horizon');
        break;
    case 4:
        console.log('An old friend will soon turn to rival');
        break;
    case 5:
        console.log('wealth is in your future as riches come your way');
        break;
    case 6:
        console.log('You will soon lose something once precious to you');
        break;
    case 7:
        console.log('Something you once lost will soon be found');
        break;
    case 8:
        console.log('A great choice will be set before you');
        break;
    case 9:
        console.log('Someone plots against you, danger is ahead');
        break;
    case 10:
        console.log('A new love is on the horizon');
        break;
    case 11:
        console.log('Change will present itself as new oppurtunities arise');
        break;
    case 12:
        console.log('Someone you had forgotten will soon return to your life');
        break;
    case 13:
        console.log('You will soon find yourself exploring a new path in life');
        break;
    case 14:
        console.log('Something old will break to make way for something new');
        break;
    case 15:
        console.log('Things will continue as they are, until you push for a change');
        break;
    case 16:
        console.log('You will find a new passion in your life');
        break;
    case 17:
        console.log('Something you once loved will fade over time');
        break;
    case 18:
        console.log('A chance or bet will soon work out in your favour');
        break;
    case 19:
        console.log('A chance or bet you made will not play out in your favour');
        break;
    default:
        console.log('Your future is a mystery to me');
        break;          
}
};

// The chances of the prediction, logged in a sentence
function chances() {
    switch (smallerRandNum) {
      case 1:
        return 'Impossible';
        break;
      case 2:
        return 'Unlikely';
        break;
      case 3:
        return 'Quite possible';
        break;
      case 4:
        return 'Likely';
        break;
      case 5:
        return 'Definite';
        break;
      default:
        return 'Unknown';
        break;
    }
};


openLine();

crystalBall();

console.log(`The chances of this are ${chances()}`);