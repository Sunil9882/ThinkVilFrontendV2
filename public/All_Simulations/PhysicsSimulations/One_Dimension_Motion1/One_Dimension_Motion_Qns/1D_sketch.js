// this Simulation design for One dimentional motion 
//the parameter is (distance travel =5*natural px of screen)  , means 1m=5px
// additional features may add is 
//1)pause when overtake the vechile 
//ONE DIMENTIONAL MOTION @ThinkViL LEARNING

// FIRST LOADING IMAGES AND FONTS 
let observer,car,wheel,stone,clockfont;

// ------INPUT----------------------------------------
// OBSERVER 
let Vel_O_Slider,Acc_O_Slider,Input_Vel_O,Input_Acc_O;
// VECHILE 
let Vel_Ve_Slider, Acc_Ve_Slider, Dist_Ve_Slider, Input_Vel_Ve, Input_Acc_Ve, Input_Dist_Ve;
let Ve_Checkbox;
let Vech_show=false;                     //show vechile on screen

// SIMULATION CONTROL
let buttonstart,buttonpause;
let Zoom=1;
var tochala=true;                               
   
//OUTPUT 
let Output_Vel_O, Output_Acc_O, Output_Dist_O, Output_Vel_Ve, Output_Acc_Ve, Output_Dist_Ve;
let Vect_Checkbox;
let Vectors_show=false;                                //show vectors on screen                     

//SCREEN RESPONSIVE SIZE
const responsivesize=1025;
let ResponsiveSmallsize,ResponsiveBigsize;

function preload(){                                     
  observer=loadImage('images/observer.png');
  car=loadImage('images/car1.png');
  wheel=loadImage('images/wheel.png');
  stone=loadImage('images/stone.png');
  clockfont=loadFont('font/digital-7.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode( DEGREES);
  imageMode(CENTER);
  input();
  if(windowWidth<=responsivesize){           //SMALL SCREEN SIZE LIKE SMARTPHONES            
    if (window.orientation === 0) {
      alert("Open the simulation in Landscape mode and press Full-Screen button for the better experience.");
    }
  ResponsiveSmallsize();
  }else{
    ResponsiveBigsize();
  }
}

//RESIZE CANVAS
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if(windowWidth<=responsivesize){  
    ResponsiveSmallsize();
  }else{
    ResponsiveBigsize();
  }
}
  
let screen=0;                         // define variable for showing relative motion w.r.t to observer velocity
function draw() {
  background(140,195,255);
  push();
    translate(0,2*height/3);
    if(tochala){                                                         //tochala udate with simulation start bttn for starting the simulation
      boxmotion1=new boxmotion(Vel_O_Slider.value(),Acc_O_Slider.value(),Vel_Ve_Slider.value(),Acc_Ve_Slider.value(),Dist_Ve_Slider.value());                       //define class for different functions which update simulation
    } 

    //----------------OBSERVER,MILDSTONE AND VECTOR COMPONENT----------------------------------------------------------------------------------------
    boxmotion1.Ground();                                                 //Design Ground for simulation
    push();   
      scale(Zoom);                    //scale all bojects accordingly
      translate(-screen,0);             //Movement of observer accoring speed                              // the screen change w.r.t to observer position or speed beacuse we want to see observer always on screen
      boxmotion1.Milestone();                                         //Milestone update on screen
      boxmotion1.Observer();                                          //observer update on screen
      if(Vech_show){                                                 //show vechile on screen
        boxmotion1.Vechile();
      }
      if(Vectors_show){                                              // show velocity and accelertion vectors on screen
        boxmotion1.Vector_comp();
      }
    pop();
  pop();
    //------------------------- VECTOR BOX-----------------------------------------------------------------------------------------------------------------
    if(Vectors_show){                              //vectors box show on screen
      push(); 
        translate(width/2,height/10);
        scale(width/1400);
        boxmotion1.Vector_show();
      pop();
    }
  //--------------------------------STOPWATCH--------------------------------------------------------------------------------------
  push();
    translate(width/5,4*height/5);
    scale(width/1400);
    boxmotion1.Stopwatch();                         // show stopwatch 
  pop();
    boxmotion1.In_Out_update();                     // Update INPUT and OUTPUT values on screen with html tag

}
