let onAnimate = false;
let animateState = 0;
const c = document.getElementById("c1");
c.addEventListener('click', function(){
  if (!onAnimate){
    onAnimate = true;

    switch (animateState)
    {
      case 0: c.style.animation = "go-right  1s ease 1 forwards";break;
      case 1: c.style.animation = "go-down  1s ease 1 forwards";break;
      case 2: c.style.animation = "go-left  1s ease 1 forwards";break;
      case 3: c.style.animation = "go-up  1s ease 1 forwards";break;
    }

    animateState = (animateState + 1)%4;
    setTimeout(()=>{ 
      switch (animateState)
      {
        case 1: c.style.left = "120px";break;
        case 2: c.style.top = "120px";break;
        case 3: c.style.left = "0px";break;
        case 0: c.style.top = "0px";break;
      }
      c.style.animation = "none"; onAnimate = false;
    }, 1000);
  }				
});
