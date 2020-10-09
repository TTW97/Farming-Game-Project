//Human and barrel variables
var human;
var tbarrelimg, cbarrelimg, gbarrelimg, pbarrelimg, bbarrelimg;

//Barrel and seed variables
var tomato_barrel;
var tomatoseedimg;
var pea_barrel;
var peaseedimg;
var grape_barrel;
var grapeseedimg;
var banana_barrel;
var bananaseedimg;
var carrot_barrel;
var carrotseedimg;

//LAND variables
var farmland1;
var farmland2;
var farmland3;
var farmland4;
var farmland5;
var farmland6;
var farmland7;
var farmland8;

//LAND image variables
var farmlandimg;

//Hand variable
var hand = "Empty";

//Land image (Fully Grown, and Seed)
var tfarmlandimg, tsfarmlandimg;
var cfarmlandimg, csfarmlandimg;
var gfarmlandimg, gsfarmlandimg;
var bfarmlandimg, bsfarmlandimg;
var pfarmlandimg, psfarmlandimg;

//Watering Can variables
var canimg;
var can;

//Human Image
var humanimg;

//Trash can variables
var trashCan;
var trashCanimg;

//Score, Trashed Plants, and Harvested Plants variables
var score = 0;
var trashed_plants = 0;
var harvested = 0;

//Market variables
var market;
var marketimg;

//Crow variables
var crowimg;

//Hand box images
var handbox;
var handimg;

//BELOW IS ALL THE HAND BOX IMAGES
var tomatoSeedHandimg;
var carrotSeedHandimg;
var grapeSeedHandimg;
var peaSeedHandimg;
var bananaSeedHandimg;
var canHandimg;

var tomatoHandimg;
var carrotHandimg;
var grapeHandimg;
var peaHandimg;
var bananaHandimg;

//Counter variables for seed -> fully grown
var tfarm1Counter = 10;
var tfarm2Counter = 10;

var pfarm1Counter = 15;
var pfarm2Counter = 15;

var gfarm1Counter = 20;
var gfarm2Counter = 20;

var cfarm1Counter = 25;
var cfarm2Counter = 25;

var bfarm1Counter = 30;
var bfarm2Counter = 30;

//Dead plant images
var deadplantimg;
var deadplantlandimg;

//Harvest gamestate variable
var tfarm1HARVEST = "no";
var tfarm2HARVEST = "no";

var pfarm1HARVEST = "no";
var pfarm2HARVEST = "no";

var gfarm1HARVEST = "no";
var gfarm2HARVEST = "no";

var bfarm1HARVEST = "no";
var bfarm2HARVEST = "no";

var cfarm1HARVEST = "no";
var cfarm2HARVEST = "no";

//counter for fully grown -> Dead
var tfarm1deadcounter = 7;
var tfarm2deadcounter = 7;

var pfarm1deadcounter = 7;
var pfarm2deadcounter = 7;

var gfarm1deadcounter = 7;
var gfarm2deadcounter = 7;

var cfarm1deadcounter = 7;
var cfarm2deadcounter = 7;

var bfarm1deadcounter = 7;
var bfarm2deadcounter = 7;

//Water land images
var grapeWater;
var tomatoWater;
var peaWater;
var bananaWater;
var carrotWater;

//counter for seed -> water
var tfarm1watercounter = 4;
var tfarm2watercounter = 4;

var pfarm1watercounter = 6;
var pfarm2watercounter = 6;

var bfarm1watercounter = 15;
var bfarm2watercounter = 15;

var cfarm1watercounter = 12;
var cfarm2watercounter = 12;

var gfarm1watercounter = 9;
var gfarm2watercounter = 9;



function preload() {

  //Seed Images
  humanimg = loadImage("images/Human.png");
  tomatoseedimg = loadImage("images/TomatoSeed.png");
  peaseedimg = loadImage("images/GrapeSeed.png");
  carrotseedimg = loadImage("images/CarrotSeed.png");
  bananaseedimg = loadImage("images/BananaSeed.png");
  grapeseedimg = loadImage("images/PeaSeed.png");
 
  //Land images
  farmlandimg = loadImage("images/Land.png");

  //Barrel images
  tbarrelimg = loadImage("images/TomatoBarrel.png");
  cbarrelimg = loadImage("images/CarrotBarrel.png");
  pbarrelimg = loadImage("images/PeaBarrel.png");
  gbarrelimg = loadImage("images/GrapeBarrel.png");
  bbarrelimg = loadImage("images/BananaBarrel.png");

  //Fully grown land images
  tfarmlandimg = loadImage("images/TomatoLand.png");
  cfarmlandimg = loadImage("images/CarrotLand.png");
  bfarmlandimg = loadImage("images/BananaLand.png");
  gfarmlandimg = loadImage("images/GrapeLand.png");
  pfarmlandimg = loadImage("images/PeaLand.png");

  // Seed land images
  tsfarmlandimg = loadImage("images/TomatoSeedLand.png");
  bsfarmlandimg = loadImage("images/BananaSeedLand.png");
  csfarmlandimg = loadImage("images/CarrotSeedLand.png");
  psfarmlandimg = loadImage("images/PeaSeedLand.png");
  gsfarmlandimg = loadImage("images/GrapeSeedLand.png");

  //Watering can image
  canimg = loadImage("images/Can.png");

  //Trash can image
  trashCanimg = loadImage("images/TrashCan.png");
 
  //market image
  marketimg = loadImage("images/Market.png");

  //Hand box image
  handimg = loadImage("images/Hand.png");

  //BELOW IS ALL THE IMAGES FOR THE HAND BOX
  tomatoSeedHandimg = loadImage("images/TomatoSeedHand.png");
  carrotSeedHandimg = loadImage("images/CarrotSeedHand.png");
  grapeSeedHandimg = loadImage("images/GrapeSeedHand.png");
  peaSeedHandimg = loadImage("images/PeaSeedHand.png");
  bananaSeedHandimg = loadImage("images/BananaSeedHand.png");
  canHandimg = loadImage("images/CanHand.png");

  tomatoHandimg = loadImage("images/TomatoHand.png");
  peaHandimg = loadImage("images/PeaHand.png");
  grapeHandimg = loadImage("images/GrapeHand.png");
  bananaHandimg = loadImage("images/BananaHand.png");
  carrotHandimg = loadImage("images/CarrotHand.png");

  //Dead plant images
  deadplantimg = loadImage("images/DeadPlant.png");
  deadplantlandimg = loadImage("images/DeadPlantLand.png");

  //Seed watering land images
  grapeWater = loadImage("images/GrapWaterLand.png");
  bananaWater = loadImage("images/BananaWaterLand.png");
  carrotWater = loadImage("images/CarrotWaterLand.png");
  tomatoWater = loadImage("images/TomatoWaterLand.png");
  peaWater = loadImage("images/PeaWaterLand.png");

  //crowimg = loadImage("images");
}


function setup() {

  createCanvas(displayWidth - 150, displayHeight - 150);
  
  //Barrel Sprites 
  tomato_barrel = createSprite(200,200);
  tomato_barrel.addImage(tbarrelimg);
  tomato_barrel.scale = 0.3;

  pea_barrel = createSprite(400,200);
  pea_barrel.addImage(pbarrelimg);
  pea_barrel.scale = 0.3;

  grape_barrel = createSprite(600,200);
  grape_barrel.addImage(gbarrelimg);
  grape_barrel.scale = 0.3;

  carrot_barrel = createSprite(800,200);
  carrot_barrel.addImage(cbarrelimg);
  carrot_barrel.scale = 0.3;

  banana_barrel = createSprite(1000,200);
  banana_barrel.addImage(bbarrelimg);
  banana_barrel.scale = 0.3;

  //Farmland sprites
  tfarmland1 = createSprite(200,400);
  tfarmland1.addImage(farmlandimg);
  tfarmland1.scale = 0.3;

  pfarmland1 = createSprite(400,400);
  pfarmland1.addImage(farmlandimg);
  pfarmland1.scale = 0.3;

  gfarmland1 = createSprite(600,400);
  gfarmland1.addImage(farmlandimg);
  gfarmland1.scale = 0.3;

  cfarmland1 = createSprite(800,400);
  cfarmland1.addImage(farmlandimg);
  cfarmland1.scale = 0.3;

  tfarmland2 = createSprite(200,600);
  tfarmland2.addImage(farmlandimg);
  tfarmland2.scale = 0.3;

  pfarmland2 = createSprite(400,600);
  pfarmland2.addImage(farmlandimg);
  pfarmland2.scale = 0.3;

  gfarmland2 = createSprite(600,600);
  gfarmland2.addImage(farmlandimg);
  gfarmland2.scale = 0.3;

  cfarmland2 = createSprite(800,600);
  cfarmland2.addImage(farmlandimg);
  cfarmland2.scale = 0.3;

  bfarmland1 = createSprite(1000,600);
  bfarmland1.addImage(farmlandimg);
  bfarmland1.scale = 0.3;

  bfarmland2 = createSprite(1000,400);
  bfarmland2.addImage(farmlandimg);
  bfarmland2.scale = 0.3;

  //Watering Can sprite
  can = createSprite(50,400,40,40);
  can.addImage(canimg);
  can.scale = 0.3;

  //Trash can sprite
  trashCan = createSprite(1200,200);
  trashCan.addImage(trashCanimg);
  trashCan.scale = 0.3;

  //Market sprite
  market = createSprite(1300,500);
  market.addImage(marketimg);
  market.scale = 0.4;

  //Hand box sprite
  handbox = createSprite(60,60);
  handbox.addImage(handimg);
  handbox.scale = 0.6;

  //Human sprite
  human = createSprite(400,400);
  human.addImage(humanimg);
  human.scale = 0.3;
  
  
}



function draw() {


  background("green");

  //Displaying Score and Trashed Plants text
  textSize(20);
  fill("black");
  text("Score: " + score, 575,75);
  text("Trashed Plants: " + trashed_plants, 1125, 140);
  
  
  //All of the functions being called
  movement();

  pickingUpItem();

  droppingOffItem();

  spawn_crows();

  handing();

  //Drawing sprites
  drawSprites();
}

//THIS IS THE FUNCTION FOR MOVING THE CHARACTER
function movement() {

  if(keyDown(UP_ARROW)) {

    human.y = human.y - 10;

  }
  if(keyDown(DOWN_ARROW)) {

    human.y = human.y + 10;

  }
  if(keyDown(LEFT_ARROW)) {

    human.x = human.x - 10;

  }
  if(keyDown(RIGHT_ARROW)) {

    human.x = human.x + 10;

  }

}

//THIS IS THE FUNCTION FOR PICKING UP ITEMS
function pickingUpItem() {

  if (keyDown("w")) {

    //Picking up tomato seed
    if (human.isTouching(tomato_barrel)) {

      hand = "Tomato Seed";

    }

    //Picking up pea seed
    else if (human.isTouching(pea_barrel)) {

      hand = "Pea Seed";

    }

    //Picking up grape seed
    else if (human.isTouching(grape_barrel)) {

      hand = "Grape Seed";

    }

    //Picking up carrot seed
    else if (human.isTouching(carrot_barrel)) {

      hand = "Carrot Seed";

    }

    //Picking up banana seed
    else if (human.isTouching(banana_barrel)) {

      hand = "Banana Seed";

    }

    //Picking up Watering Can
    else if (human.isTouching(can)) {

      hand = "Watering Can";

    }

    //HARVESTING

    //Picking up tomato
    else if (human.isTouching(tfarmland1) && tfarm1HARVEST === "yes") {

      hand = "Tomato";
      tfarmland1.addImage(farmlandimg);
      tfarm1HARVEST = "no";
      tfarm1deadcounter = -1;

    }

    else if (human.isTouching(tfarmland2) && tfarm2HARVEST === "yes") {

      hand = "Tomato";
      tfarmland2.addImage(farmlandimg);
      tfarm2HARVEST === "no";
      tfarm2deadcounter = -1;

    }

    //Picking up Peas
    else if (human.isTouching(pfarmland1) && pfarm1HARVEST === "yes") {

      hand = "Pea";
      pfarmland1.addImage(farmlandimg);
      pfarm1HARVEST === "no";
      pfarm1deadcounter = -1;

    }

    else if (human.isTouching(pfarmland2) && pfarm2HARVEST === "yes") {

      hand = "Pea";
      pfarmland2.addImage(farmlandimg);
      pfarm2HARVEST === "no";
      pfarm2deadcounter = -1;

    }

    //Picking up Carrots
    else if (human.isTouching(cfarmland1) && cfarm1HARVEST === "yes") {

      hand = "Carrot";
      cfarmland1.addImage(farmlandimg);
      cfarm1HARVEST === "no";
      cfarm1deadcounter = -1;

    }

    else if (human.isTouching(cfarmland2) && cfarm2HARVEST === "yes") {

      hand = "Carrot";
      cfarmland2.addImage(farmlandimg);
      cfarm2HARVEST === "no";
      cfarm2deadcounter = -1;

    }

    //Picking up Bananas
    else if (human.isTouching(bfarmland1) && bfarm1HARVEST === "yes") {

      hand = "Banana";
      bfarmland1.addImage(farmlandimg);
      bfarm1HARVEST === "no";
      bfarm1deadcounter = -1;

    }

    else if (human.isTouching(bfarmland2) && bfarm2HARVEST === "yes") {

      hand = "Banana";
      bfarmland2.addImage(farmlandimg);
      bfarm2HARVEST === "no";
      bfarm2deadcounter = -1;

    }

    //Picking up Grapes
    else if (human.isTouching(gfarmland1) && gfarm1HARVEST === "yes") {

      hand = "Grape";
      gfarmland1.addImage(farmlandimg);
      gfarm1HARVEST === "no";
      gfarm1deadcounter = -1;

    }

    else if (human.isTouching(gfarmland2) && gfarm2HARVEST === "yes") {

      hand = "Grape";
      gfarmland2.addImage(farmlandimg);
      gfarm2HARVEST === "no";
      gfarm2deadcounter = -1;

    }

    //Picking up dead plants FOR ALL OF THE IF CONDITIONS BELOW
    else if (human.isTouching(tfarmland1) && tfarm1HARVEST === "dead") {

      hand = "Dead Plant";
      tfarmland1.addImage(farmlandimg);
      tfarm1HARVEST === "no";
      
    }

    else if (human.isTouching(tfarmland2) && tfarm2HARVEST === "dead") {

      hand = "Dead Plant";
      tfarmland2.addImage(farmlandimg);
      tfarm2HARVEST === "no";

    }

    else if (human.isTouching(pfarmland1) && pfarm1HARVEST === "dead") {

      hand = "Dead Plant";
      pfarmland1.addImage(farmlandimg);
      pfarm1HARVEST === "no";

    }

    else if (human.isTouching(pfarmland2) && pfarm2HARVEST === "dead") {

      hand = "Dead Plant";
      pfarmland2.addImage(farmlandimg);
      pfarm2HARVEST === "no";

    }

    else if (human.isTouching(gfarmland1) && gfarm1HARVEST === "dead") {

      hand = "Dead Plant";
      gfarmland1.addImage(farmlandimg);
      gfarm1HARVEST === "no";

    }

    else if (human.isTouching(gfarmland2) && gfarm2HARVEST === "dead") {

      hand = "Dead Plant";
      gfarmland2.addImage(farmlandimg);
      gfarm2HARVEST === "no";

    }

    else if (human.isTouching(cfarmland1) && cfarm1HARVEST === "dead") {

      hand = "Dead Plant";
      cfarmland1.addImage(farmlandimg);
      cfarm1HARVEST === "no";

    }

    else if (human.isTouching(cfarmland2) && cfarm2HARVEST === "dead") {

      hand = "Dead Plant";
      cfarmland2.addImage(farmlandimg);
      cfarm2HARVEST === "no";

    }

    else if (human.isTouching(bfarmland1) && bfarm1HARVEST === "dead") {

      hand = "Dead Plant";
      bfarmland1.addImage(farmlandimg);
      bfarm1HARVEST === "no";

    }

    else if (human.isTouching(bfarmland2) && bfarm2HARVEST === "dead") {

      hand = "Dead Plant";
      bfarmland2.addImage(farmlandimg);
      bfarm2HARVEST === "no";

    }
    //Picking up dead plants FOR ALL OF THE IF CONDITIONS ABOVE

  }

}

//FUNCTION FOR DROPPING UP ITEMS
function droppingOffItem() {

  if (keyDown("s")) {

    //Dropping off all of the seeds on the farmlands BELOW
    if (human.isTouching(tfarmland1) && hand !== "Empty" && hand === "Tomato Seed") {

      hand = "Empty";
      tfarmland1.addImage(tsfarmlandimg);
      tfarm1Counter = 10;
      tfarm1watercounter = 4;
      setInterval(tfarm1Timer,1000);
      setInterval(tfarm1WaterTimer,1000);
      
      
    }

    if (human.isTouching(tfarmland2) && hand !== "Empty" && hand === "Tomato Seed") {

      hand = "Empty";
      tfarmland2.addImage(tsfarmlandimg);
      tfarm2Counter = 10;
      tfarm2watercounter = 4;
      setInterval(tfarm2Timer,1000);
      setInterval(tfarm2WaterTimer,1000);

    }

    if (human.isTouching(pfarmland1) && hand !== "Empty" && hand === "Pea Seed") {

      hand = "Empty";
      pfarmland1.addImage(psfarmlandimg);
      pfarm1Counter = 15;
      pfarm1watercounter = 6;
      setInterval(pfarm1Timer,1000);
      setInterval(pfarm1WaterTimer,1000);
      
    }

    if (human.isTouching(pfarmland2) && hand !== "Empty" && hand === "Pea Seed") {

      hand = "Empty";
      pfarmland2.addImage(psfarmlandimg);
      pfarm2Counter = 15;
      pfarm2watercounter = 6;
      setInterval(pfarm2Timer,1000);
      setInterval(pfarm2WaterTimer,1000);
      
    }

    if (human.isTouching(gfarmland1) && hand !== "Empty" && hand === "Grape Seed") {

      hand = "Empty";
      gfarmland1.addImage(gsfarmlandimg);
      gfarm1Counter = 20;
      gfarm1watercounter = 9;
      setInterval(gfarm1Timer,1000);
      setInterval(gfarm1WaterTimer,1000);
      
    }

    if (human.isTouching(gfarmland2) && hand !== "Empty" && hand === "Grape Seed") {

      hand = "Empty";
      gfarmland2.addImage(gsfarmlandimg);
      gfarm2Counter = 20;
      gfarm2watercounter = 9;
      setInterval(gfarm2Timer,1000);
      setInterval(gfarm2WaterTimer,1000);
      
    }

    if (human.isTouching(cfarmland1) && hand !== "Empty" && hand === "Carrot Seed") {

      hand = "Empty";
      cfarmland1.addImage(csfarmlandimg);
      cfarm1Counter = 25;
      cfarm1watercounter = 12;
      setInterval(cfarm1Timer,1000);
      setInterval(cfarm1WaterTimer,1000);
      
    }

    if (human.isTouching(cfarmland2) && hand !== "Empty" && hand === "Carrot Seed") {

      hand = "Empty";
      cfarmland2.addImage(csfarmlandimg);
      cfarm2Counter = 25;
      cfarm2watercounter = 12;
      setInterval(cfarm2Timer,1000);
      setInterval(cfarm2WaterTimer,1000);
      
    }

    if (human.isTouching(bfarmland1) && hand !== "Empty" && hand === "Banana Seed") {

      hand = "Empty";
      bfarmland1.addImage(bsfarmlandimg);
      bfarm1Counter = 30;
      bfarm1watercounter = 15;
      setInterval(bfarm1Timer,1000);
      setInterval(bfarm1WaterTimer,1000);
      
    }

    if (human.isTouching(bfarmland2) && hand !== "Empty" && hand === "Banana Seed") {

      hand = "Empty";
      bfarmland2.addImage(bsfarmlandimg);
      bfarm2Counter = 30;
      bfarm2watercounter = 15;
      setInterval(bfarm2Timer,1000);
      setInterval(bfarm2WaterTimer,1000);
      
    }
    //Dropping off all of the seeds on the farmlands ABOVE


    //Dropping off plants in trash can
    if (human.isTouching(trashCan) && hand !== "Empty") {

      hand = "Empty";
      trashed_plants = trashed_plants + 1;
      score = score - 10;

    }

    //Selling fully grown plants BELOW
    if (human.isTouching(market) && hand === "Tomato") {

      hand = "Empty";
      score = score + 5;

    }

    if (human.isTouching(market) && hand === "Carrot") {

      hand = "Empty";
      score = score + 10;

    }

    if (human.isTouching(market) && hand === "Banana") {

      hand = "Empty";
      score = score + 15;

    }

    if (human.isTouching(market) && hand === "Grape") {

      hand = "Empty";
      score = score + 20;

    }

    if (human.isTouching(market) && hand === "Pea") {

      hand = "Empty";
      score = score + 25;

    }
    //Selling fully grown plants ABOVE

    //Watering the plants BELOW
    if (human.isTouching(tfarmland1) && hand === "Watering Can" && tfarm1HARVEST === "water") {

      tfarmland1.addImage(tsfarmlandimg);
      tfarm1watercounter = -1;

    }

    if (human.isTouching(tfarmland2) && hand === "Watering Can" && tfarm2HARVEST === "water") {

      tfarmland2.addImage(tsfarmlandimg);
      tfarm2watercounter = -1;

    }

    if (human.isTouching(pfarmland1) && hand === "Watering Can" && pfarm1HARVEST === "water") {

      pfarmland1.addImage(psfarmlandimg);
      pfarm1watercounter = -1;

    }

    if (human.isTouching(pfarmland2) && hand === "Watering Can" && pfarm2HARVEST === "water") {

      pfarmland2.addImage(psfarmlandimg);
      pfarm2watercounter = -1;

    }

    if (human.isTouching(gfarmland1) && hand === "Watering Can" && gfarm1HARVEST === "water") {

      gfarmland1.addImage(gsfarmlandimg);
      tfarm1watercounter = -1;

    }

    if (human.isTouching(gfarmland2) && hand === "Watering Can" && gfarm2HARVEST === "water") {

      gfarmland2.addImage(gsfarmlandimg);
      gfarm2watercounter = -1;

    }

    if (human.isTouching(cfarmland1) && hand === "Watering Can" && cfarm1HARVEST === "water") {

      cfarmland1.addImage(csfarmlandimg);
      cfarm1watercounter = -1;

    }

    if (human.isTouching(cfarmland2) && hand === "Watering Can" && cfarm2HARVEST === "water") {

      cfarmland2.addImage(tsfarmlandimg);
      cfarm2watercounter = -1;

    }

    if (human.isTouching(bfarmland1) && hand === "Watering Can" && bfarm1HARVEST === "water") {

      bfarmland1.addImage(bsfarmlandimg);
      bfarm1watercounter = -1;

    }

    if (human.isTouching(bfarmland2) && hand === "Watering Can" && bfarm2HARVEST === "water") {

      bfarmland2.addImage(bsfarmlandimg);
      bfarm2watercounter = -1;

    }
    //Watering the plants ABOVE

  }

}

function spawn_crows() {

  /*if (frameCount % 30 === 0) {

    var crow = createSprite(1700, random(300,700), 20, 20);
    crow.velocityX = random(-5,-15);
    crow.lifetime = (displayWidth - 150) / 5;
    
    

  }*/

}

//Function for changing the hand boc images
function handing() {

  if (hand === "Empty") {

    handbox.addImage(handimg);
    

  }

  if (hand === "Tomato Seed") {

    handbox.addImage(tomatoSeedHandimg);

  }

  if (hand === "Pea Seed") {

    handbox.addImage(peaSeedHandimg);

  }

  if (hand === "Banana Seed") {

    handbox.addImage(bananaSeedHandimg);

  }

  if (hand === "Grape Seed") {

    handbox.addImage(grapeSeedHandimg);

  }

  if (hand === "Carrot Seed") {

    handbox.addImage(carrotSeedHandimg);

  }

  if (hand === "Watering Can") {

    handbox.addImage(canHandimg);

  }

  if (hand === "Tomato") {

    handbox.addImage(tomatoHandimg);
    
  }

  if (hand === "Pea") {

    handbox.addImage(peaHandimg);
    
  }

  if (hand === "Carrot") {

    handbox.addImage(carrotHandimg);
    
  }

  if (hand === "Banana") {

    handbox.addImage(bananaHandimg);
    
  }

  if (hand === "Grape") {

    handbox.addImage(grapeHandimg);
    
  }

  if (hand === "Dead Plant") {

    handbox.addImage(deadplantimg);

  }


}

//THE REST OF THE FUNCTIONS BELOW ARE TIMERS

//Timer for SEED -> FULLY GROWN BELOW
function tfarm1Timer() {

  if (tfarm1Counter > -1) {

    tfarm1Counter--;

  }

  if (tfarm1Counter === 0) {

    tfarmland1.addImage(tfarmlandimg);
    tfarm1HARVEST = "yes";
    setInterval(tfarm1DeadTimer,1000);
    tfarm1deadcounter = 7;


  }


}

function tfarm2Timer() {

  if (tfarm2Counter > -1) {

    tfarm2Counter--;

  }

  if (tfarm2Counter === 0) {

    tfarmland2.addImage(tfarmlandimg);
    tfarm2HARVEST = "yes";
    setInterval(tfarm2DeadTimer,1000);
    tfarm2deadcounter = 7;

  }

}

function pfarm1Timer() {

  if (pfarm1Counter > -1) {

    pfarm1Counter--;

  }

  if (pfarm1Counter === 0) {

    pfarmland1.addImage(pfarmlandimg);
    pfarm1HARVEST = "yes";
    setInterval(pfarm1DeadTimer,1000);
    pfarm1deadcounter = 7;

  }


}

function pfarm2Timer() {

  if (pfarm2Counter > -1) {

    pfarm2Counter--;

  }

  if (pfarm2Counter === 0) {

    pfarmland2.addImage(pfarmlandimg);
    pfarm2HARVEST = "yes";
    setInterval(pfarm2DeadTimer,1000);
    pfarm2deadcounter = 7;

  }


}

function gfarm1Timer() {

  if (gfarm1Counter > -1) {

    gfarm1Counter--;

  }

  if (gfarm1Counter === 0) {

    gfarmland1.addImage(gfarmlandimg);
    gfarm1HARVEST = "yes";
    setInterval(gfarm1DeadTimer,1000);
    gfarm1deadcounter = 7;

  }


}

function gfarm2Timer() {

  if (gfarm2Counter > -1) {

    gfarm2Counter--;

  }

  if (gfarm2Counter === 0) {

    gfarmland2.addImage(gfarmlandimg);
    gfarm2HARVEST = "yes";
    setInterval(gfarm2DeadTimer,1000);
    gfarm2deadcounter = 7;

  }


}

function cfarm1Timer() {

  if (cfarm1Counter > -1) {

    cfarm1Counter--;

  }

  if (cfarm1Counter === 0) {

    cfarmland1.addImage(cfarmlandimg);
    cfarm1HARVEST = "yes";
    setInterval(cfarm1DeadTimer,1000);
    cfarm1deadcounter = 7;

  }


}

function cfarm2Timer() {

  if (cfarm2Counter > -1) {

    cfarm2Counter--;

  }

  if (cfarm2Counter === 0) {

    cfarmland2.addImage(cfarmlandimg);
    cfarm2HARVEST = "yes";
    setInterval(cfarm2DeadTimer,1000);
    cfarm2deadcounter = 7;

  }


}

function bfarm1Timer() {

  if (bfarm1Counter > -1) {

    bfarm1Counter--;

  }

  if (bfarm1Counter === 0) {

    bfarmland1.addImage(bfarmlandimg);
    bfarm1HARVEST = "yes";
    setInterval(bfarm1DeadTimer,1000);
    bfarm1deadcounter = 7;

  }


}

function bfarm2Timer() {

  if (bfarm2Counter > -1) {

    bfarm2Counter--;

  }

  if (bfarm2Counter === 0) {

    bfarmland2.addImage(bfarmlandimg);
    bfarm2HARVEST = "yes";
    setInterval(bfarm2DeadTimer,1000);
    bfarm2deadcounter = 7;

  }


}
//Timer for SEED -> FULLY GROWN ABOVE


//Timer for FULLY GROWN -> DEAD   BELOW
function tfarm1DeadTimer() {

  if (tfarm1deadcounter > -1) {

    tfarm1deadcounter--;

  }

  if (tfarm1deadcounter === 0) {

    tfarmland1.addImage(deadplantlandimg);
    tfarm1HARVEST = "dead";
    
  }

}

function tfarm2DeadTimer() {

  if (tfarm2deadcounter > -1) {

    tfarm2deadcounter--;

  }

  if (tfarm2deadcounter === 0) {

    tfarmland2.addImage(deadplantlandimg);
    tfarm2HARVEST = "dead";
    
  }

}

function pfarm1DeadTimer() {

  if (pfarm1deadcounter > -1) {

    pfarm1deadcounter--;

  }

  if (pfarm1deadcounter === 0) {

    pfarmland1.addImage(deadplantlandimg);
    pfarm1HARVEST = "dead";
    
  }

}

function pfarm2DeadTimer() {

  if (pfarm2deadcounter > -1) {

    pfarm2deadcounter--;

  }

  if (pfarm2deadcounter === 0) {

    pfarmland2.addImage(deadplantlandimg);
    pfarm2HARVEST = "dead";
    
  }

}

function gfarm1DeadTimer() {

  if (gfarm1deadcounter > -1) {

    gfarm1deadcounter--;

  }

  if (gfarm1deadcounter === 0) {

    gfarmland1.addImage(deadplantlandimg);
    gfarm1HARVEST = "dead";
    
  }

}

function gfarm2DeadTimer() {

  if (gfarm2deadcounter > -1) {

    gfarm2deadcounter--;

  }

  if (gfarm2deadcounter === 0) {

    gfarmland2.addImage(deadplantlandimg);
    gfarm2HARVEST = "dead";
    
  }

}

function cfarm1DeadTimer() {

  if (cfarm1deadcounter > -1) {

    cfarm1deadcounter--;

  }

  if (cfarm1deadcounter === 0) {

    cfarmland1.addImage(deadplantlandimg);
    cfarm1HARVEST = "dead";
    
  }

}

function cfarm2DeadTimer() {

  if (cfarm2deadcounter > -1) {

    cfarm2deadcounter--;

  }

  if (cfarm2deadcounter === 0) {

    cfarmland2.addImage(deadplantlandimg);
    cfarm2HARVEST = "dead";
    
  }

}

function bfarm1DeadTimer() {

  if (bfarm1deadcounter > -1) {

    bfarm1deadcounter--;

  }

  if (bfarm1deadcounter === 0) {

    bfarmland1.addImage(deadplantlandimg);
    bfarm1HARVEST = "dead";
    
  }

}

function bfarm2DeadTimer() {

  if (bfarm2deadcounter > -1) {

    bfarm2deadcounter--;

  }

  if (bfarm2deadcounter === 0) {

    bfarmland2.addImage(deadplantlandimg);
    bfarm2HARVEST = "dead";
    
  }

}
//Timer for FULLY GROWN -> DEAD   ABOVE


//TImer for Seed -> Watering the seed   BELOW
function tfarm1WaterTimer() {

  if (tfarm1watercounter > -1) {

    tfarm1watercounter--;

  }

  if (tfarm1watercounter === 0) {

    tfarmland1.addImage(tomatoWater);
    tfarm1HARVEST = "water";

    
  }

}

function tfarm2WaterTimer() {

  if (tfarm2watercounter > -1) {

    tfarm2watercounter--;

  }

  if (tfarm2watercounter === 0) {

    tfarmland2.addImage(tomatoWater);
    tfarm2HARVEST = "water";

    
  }

}

function pfarm1WaterTimer() {

  if (pfarm1watercounter > -1) {

    pfarm1watercounter--;

  }

  if (pfarm1watercounter === 0) {

    pfarmland1.addImage(peaWater);
    pfarm1HARVEST = "water";

    
  }

}

function pfarm2WaterTimer() {

  if (pfarm2watercounter > -1) {

    pfarm2watercounter--;

  }

  if (pfarm2watercounter === 0) {

    pfarmland2.addImage(peaWater);
    pfarm2HARVEST = "water";

    
  }

}

function bfarm1WaterTimer() {

  if (bfarm1watercounter > -1) {

    bfarm1watercounter--;

  }

  if (bfarm1watercounter === 0) {

    bfarmland1.addImage(bananaWater);
    bfarm1HARVEST = "water";

    
  }

}

function bfarm2WaterTimer() {

  if (bfarm2watercounter > -1) {

    bfarm2watercounter--;

  }

  if (bfarm2watercounter === 0) {

    bfarmland2.addImage(bananaWater);
    bfarm2HARVEST = "water";

    
  }

}

function cfarm1WaterTimer() {

  if (cfarm1watercounter > -1) {

    cfarm1watercounter--;

  }

  if (cfarm1watercounter === 0) {

    cfarmland1.addImage(carrotWater);
    cfarm1HARVEST = "water";

    
  }

}

function cfarm2WaterTimer() {

  if (cfarm2watercounter > -1) {

    cfarm2watercounter--;

  }

  if (cfarm2watercounter === 0) {

    cfarmland2.addImage(carrotWater);
    cfarm2HARVEST = "water";

    
  }

}

function gfarm1WaterTimer() {

  if (gfarm1watercounter > -1) {

    gfarm1watercounter--;

  }

  if (gfarm1watercounter === 0) {

    gfarmland1.addImage(grapeWater);
    gfarm1HARVEST = "water";

    
  }

}

function gfarm2WaterTimer() {

  if (gfarm2watercounter > -1) {

    gfarm2watercounter--;

  }

  if (gfarm2watercounter === 0) {

    gfarmland2.addImage(grapeWater);
    gfarm2HARVEST = "water";

    
  }

}
//TImer for Seed -> Watering the seed   ABOVE



