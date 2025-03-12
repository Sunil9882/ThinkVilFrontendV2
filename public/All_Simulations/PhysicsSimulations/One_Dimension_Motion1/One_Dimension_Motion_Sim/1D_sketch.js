// this Simulation design for One dimentional motion 
//the parameter is (distance travel =5*natural px of screen)  , means 1m=5px
// additional features may add is 
//1)pause when overtake the vechile 
//ONE DIMENTIONAL MOTION @ThinkViL LEARNING

//------------SIMULATION CONTROL-----------------------------
let buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn;
let Zoom=1;
var lets_start=true;    

// -----------INPUT----------------------------------------
let Input,Observer,Vechile,Hide_INbtn,Output,Observer_Out,Vechile_Out,Hide_Outbtn;
// OBSERVER 
let Vel_O_Slider,Acc_O_Slider,Input_Vel_O,Input_Acc_O;
// --------------VECHILE----------------------------------------- 
let Vel_Ve_Slider, Acc_Ve_Slider, Dist_Ve_Slider, Input_Vel_Ve, Input_Acc_Ve, Input_Dist_Ve;
let Ve_Checkbox;
let Vech_show=false;                     //show vechile on screen                           
   
//------------------OUTPUT---------------------------------- 
let Output_Vel_O, Output_Acc_O, Output_Dist_O, Output_Vel_Ve, Output_Acc_Ve, Output_Dist_Ve;
let Vect_Checkbox;
let Vectors_show=false;                                //show vectors on screen                     

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

//------FIRST LOADING IMAGES AND FONTS----------------------- 
let observer,car,wheel,stone,clockfont;
function preload(){                                     
  observer=loadImage('images/observer.png');
  car=loadImage('images/car1.png');
  wheel=loadImage('images/wheel.png');
  stone=loadImage('images/stone.png');
  clockfont=loadFont('font/digital-7.ttf');
}

function setup() {
  let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){

    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn,Input,Observer,Vechile,Hide_INbtn,Output,Observer_Out,Vechile_Out,Hide_Outbtn,Vel_O_Slider,Acc_O_Slider,Input_Vel_O,Input_Acc_O,Vel_Ve_Slider, Acc_Ve_Slider, Dist_Ve_Slider, Input_Vel_Ve, Input_Acc_Ve, Input_Dist_Ve,Ve_Checkbox,Output_Vel_O, Output_Acc_O, Output_Dist_O, Output_Vel_Ve, Output_Acc_Ve, Output_Dist_Ve,Vect_Checkbox];
    Dom_elements.forEach(el => el.hide());

    let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);
          function fulllandscape(){
            fullscreen(true);
            screen.orientation.lock("landscape");
            full_landscape.html('Exit Full Screen');
            full_landscape.size(100,25).position(height/2+200,5*width/6+20).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
            full_landscape.mousePressed(exitlandscape);
            //--------------Show all DOM elements------------------------------------- 
            Dom_elements.forEach(el => el.show());
          }
          function exitlandscape(){
            fullscreen(false);
            full_landscape.html('Click here for Fullscreen and Landscape mode');
            full_landscape.position(0,0).size(window.outerHeight,window.outerWidth).style('font-size','12px');
            full_landscape.mousePressed(fulllandscape);
            //----Hide all DOM elements--------------------------------------------------------------
            Dom_elements.forEach(el => el.hide());
          }

    ResponsiveSmallsize();
  }
  else if(Small_size<window.outerWidth && window.outerWidth<=Medium_size){
    ResponsiveMediumsize();
  }
  else if( window.outerWidth>Medium_size){
    ResponsiveBigsize();
  }
}

//RESIZE CANVAS
function windowResized() {
  resizeCanvas(window.outerWidth, window.outerHeight);

    if (window.outerHeight<=Small_size && window.outerWidth > window.outerHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize();
    } 
    else if (Small_size<window.outerWidth && window.outerWidth <= Medium_size) {
      ResponsiveMediumsize();
    } 
    else if (window.outerWidth>Medium_size) {
      ResponsiveBigsize();
    }
}
  
let screen=0;                         // define variable for showing relative motion w.r.t to observer velocity
function draw() {
  frameRate(60);
  background(140,195,255);
  push();
    translate(0,2*height/3);
    if(lets_start){                                                         //tochala udate with simulation start bttn for starting the simulation
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
        translate(20,height/10);
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
