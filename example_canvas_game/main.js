const images_url = ['https://raw.githubusercontent.com/endless-sky/endless-sky/master/images/ship/leviathan.png','https://raw.githubusercontent.com/endless-sky/endless-sky/master/images/ship/gunboat.png', 'https://raw.githubusercontent.com/endless-sky/endless-sky/master/images/ship/astral%20cetacean/astral-00.png','https://raw.githubusercontent.com/endless-sky/endless-sky/master/images/ship/ember%20waste%20node/ember%20waste%20node-23.png']
const images  = []
let collidable_objects = []

for (let index = 0; index < images_url.length; index++) {
    let url = images_url[index];
    image = new Image();
    image.src = url;
    images.push(image);
}

let game = {
    canvas: document.getElementById("field"),
    start () {
        console.log(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.clear();
        this.interval = setInterval(redraw, 20);
        this.intervalNewEnemy = setInterval(newEnemy, 600);
        this.intervalcollision = setInterval(control_collision,20);
        this.starttime = Date.now();
        this.timer = new Timer(this.starttime);
        this.player = new Player_image(35,35,10,120);
        collidable_objects.push(this.player);
        this.enemies = [];
        this.keyCode = -1; //when there is no key pressed
        window.addEventListener('keydown', (e) =>
        {
            this.keyCode = e.keyCode;
        });

        window.addEventListener('keyup', (e) =>
        {
            this.keyPressed = -1;
        });
    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function start() {
    console.log("Game started");
    game.start();
}

class Timer{
    constructor(starttime){
        this.starttime = starttime;
        this.redraw();
    }
    redraw()
    {
        let seconds=Math.floor((Date.now()-this.starttime)/1000);
        let minutes=Math.floor(seconds/60);
        seconds%=60;
        let ctx = game.context;
        ctx.strokeText(minutes.toString().padStart(2,"0")+":"+seconds.toString().padStart(2,"0"),0,10);
    }
}


function sprite(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = game.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);

  this.redraw = function()
  {
    ctx = game.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Player_image{
    constructor(width,height,x,y){
        this.name = "player";
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        let e = new Image()
        e.src = "https://image.pngaaa.com/379/4408379-middle.png"
        this.image = e
        this.redraw();
    }

    redraw() {
        let ctx = game.context;
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
    }
}

class Enemy_image{
    constructor(width,height,x,y) {
        this.name = "enemy";
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = images[Math.floor(Math.random()*images.length)];
        this.redraw();
    }

    redraw() {
        let ctx = game.context;
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
    }
}

function redraw() {
  game.clear();
  game.player.x += 1;
  switch (game.keyCode) {
    case 37: //left
        game.player.x -= 2;
        break;
    case 38: //up
        game.player.y -= 1;
        break;
    case 39: //right
        game.player.x += 1;
        break;
    case 40: //down
        game.player.y += 1;
        break;
    }

  game.player.redraw();


   game.enemies.forEach((e) => {
       let yDelta = Math.floor(Math.random() * 11) - 5;
       e.x -= 1;
       e.y += yDelta;
       e.redraw();
    })
    game.timer.redraw();
}

function newEnemy()
{
    let y = Math.floor(Math.random()*1024);
    e = new Enemy_image(30, 30, 1000, y);
    game.enemies.push(e);
    collidable_objects.push(e);

}

function collisiontest(obj) {


    function sub(a,b,) {
        return Math.abs(a-b);
    }

    function collsion(obj1,obj2) {
        if (obj == obj2) {
            return false
        }
        if (sub(obj1.x,obj2.x) <= 30 && sub(obj1.y,obj2.y) <=30) {
            return true
        }
        return false
    }

    let collided_objects = collidable_objects.filter((x) => collsion(obj,x));
    collided_objects.forEach(e => {
        let a = collidable_objects.splice(collidable_objects.indexOf(e),1);
        a.forEach(x => {
            delete x;
        });
       console.log("destroyed")
    });

}

function control_collision()
{
    collidable_objects.map((x) => collisiontest(x));
}

