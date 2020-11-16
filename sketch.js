var dog,happyDog;
var database;
var foodS, foodStock;



function preload()
{
  dogs = loadImage("images/dogImg.png");
  happyDogs = loadImage("images/dogImg1.png");
}


function readStock(data) {
  foodS = data.val();
}

function writeStock(foodS) {

  if(foodS <= 0) {
    foodS = 0;
  }

  else {
    foodS = foodS-1;
  }

  database.ref('/').update({
    Food: x})
}




function setup() {
  createCanvas(500, 500);

  dog = createSprite(1000,1200,10,10);
  dog.addImage(dogs);
  
  foodS = 20

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
  
}


function draw() {  
  background(46,139,87)  //maybe add rgb() if this doesn't work
  dog = scale(0.25)
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogs);
  }

  drawSprites();
  //add styles here
  textSize(100);
  fill("red")
  stroke(2);
  text("Food Remaining: ",350,600);

}





