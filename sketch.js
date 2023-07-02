var bg
var mazeImg
var skeletonImg, skeletonDownImg, skeletonLeftImg, skeletonRightImg
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10

function preload(){
  bg = loadImage("Images/grassBG.jpg")
  mazeImg = loadImage("Images/maze2.png")
  skeletonImg = loadImage("Images/skeleton.png")
  skeletonDownImg = loadImage("Images/skeletondown.png")
  skeletonRightImg = loadImage("Images/skeletonright.png")
  skeletonLeftImg = loadImage("Images/skeletonleft.png")
}

function setup() {
  createCanvas(600, 600);
  //top wall
  wall1 = createSprite(300,50,550,10)
  //right wall
  wall2 = createSprite(550,300,10,550)
  //bottom wall
  wall3 = createSprite(300,550,550,10)
  //left wall
  wall4 = createSprite(50,375,10,470)
  //left small wall
  wall5 = createSprite(50,75,10,50)
  //left small wall 2
  wall6 = createSprite(125,100,150,10)
  maze = createSprite(300,300,600,600)
  maze.addImage(mazeImg)
  maze.scale = 1.5

}

function draw() {
  background(bg);

  drawSprites();
}