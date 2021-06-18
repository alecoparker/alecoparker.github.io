let posX = 3;
let posY = 3;
let onAnimate = false;
const container = document.getElementById('container');
const cs = container.querySelectorAll('.cell');
function initRandomState()
{
  for (var i=0; i < 10000; i++){
    let shuffleId = parseInt(Math.random() * 15);
    let pos = cs[shuffleId].dataset.pos;
    const currentX = (parseInt(pos)-1)%4;
    const currentY = parseInt(parseInt(pos-1)/4);
    // Проверка, чтобы соседний элемент был пустой
    if (posX == currentX + 1 && posY == currentY)
    {
      // вправо					
    }else if (posX == currentX - 1 && posY == currentY)
    {
      // влево					
    }else if (posX == currentX && posY == currentY + 1)
    {
      // вниз					
    }else if (posX == currentX && posY == currentY - 1)
    {
      // вверх					
    } else continue;
    cs[shuffleId].dataset.pos = posY * 4 + posX + 1;
    posX = currentX;
    posY = currentY;
  }

}
function checkState()
{

  for (var i=0; i<15; i++)
  {
    let pos = parseInt(cs[i].dataset.pos);
    let id = parseInt(cs[i].textContent);
    if (pos!=id) return false;
  }
  return true;
}

initRandomState();
// Выставить позиции элементов
for (var i = 0; i < 4; i++)
{
  for (var j = 0; j < 4; j++)
  {
    let index = i * 4 + j;
    if (index == 15) continue;
    let pos = cs[index].dataset.pos;
    const X = (parseInt(pos)-1)%4;
    const Y = parseInt((pos-1)/4);

    cs[index].style.top = Y * 130 + "px"; // Y координата
    cs[index].style.left = X * 130 + "px"; // X координата
  }
}
let lastdirection = -1;

for (var i=0; i<15; i++)
cs[i].addEventListener('click', function(){
  // Узнать куда кликнули
  const currentId = this.dataset.pos;
  const currentX = (parseInt(currentId)-1)%4;
  const currentY = parseInt((currentId-1)/4);
  let animate = "none";
  // Проверка, чтобы соседний элемент был пустой
  if (posX == currentX + 1 && posY == currentY)
  {
    // вправо
    animate = "right";
  }else if (posX == currentX - 1 && posY == currentY)
  {
    // влево
    animate = "left";
  }else if (posX == currentX && posY == currentY + 1)
  {
    // вниз
    animate = "down";
  }else if (posX == currentX && posY == currentY-1)
  {
    // вверх
    animate = "up";
  } else return;

  if (!onAnimate){

    onAnimate = true;

    this.style.animation = "go-" + animate + " 1s ease 1 forwards";
    this.dataset.pos = posY * 4 + posX + 1;
    let c = this;
    setTimeout(()=>{ 
      switch (animate)
      {
        case "right": c.style.left = (parseInt(c.style.left)+130)+"px";break;
        case "down": c.style.top = (parseInt(c.style.top)+130)+"px";;break;
        case "left": c.style.left = (parseInt(c.style.left)-130)+"px";break;
        case "up": c.style.top = (parseInt(c.style.top)-130)+"px";break;
      }
      c.style.animation = "none"; onAnimate = false;
      posX = currentX;
      posY = currentY;
      // проверить состояние
      if (checkState()) alert("Игра окончена!");
    }, 1000);
  }				
});
