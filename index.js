// Generate random bubbles
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 70; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.width = `${Math.random() * 15 + 5}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      bubblesContainer.appendChild(bubble);
    }
  }
  window.onload = createBubbles;





function playSound(soundType){
  let sound;
  switch(soundType) {
    case 'ping1':
      sound = document.getElementById('ping1');
      break;
    case 'ping2':
      sound = document.getElementById('ping2');
      break;
      case 'ping3':
      sound = document.getElementById('ping3');
      break;
      case 'ping4':
      sound = document.getElementById('ping4');
      break; 
      case 'ping5':
      sound = document.getElementById('ping5');
        break;
      default:
      console.log('sound not found');
      return;    
  }

  sound.currentTime = 0;
  sound.play();
}