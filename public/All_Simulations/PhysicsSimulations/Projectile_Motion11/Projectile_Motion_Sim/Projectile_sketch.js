
// -------------------INPUT variable------------------------------
let Input,CANNON,Input_Cannon_checkbox,Higt_Cannon_Slider,Input_Higt_Cannon,Vel_Cannon_Slider,Input_Vel_Cannon,Ang_Cannon_Slider,Input_Ang_Cannon,Hide_INbtn;
let Show_Cannon_Input=false;

// -----------OUTPUT variables----------------------------------------------
let Output,INSTANT,Output_Instant_checkbox,Output_Instant_Vel,Output_Instant_Higt,END,Output_End_checkbox,Output_Range,Output_MaxH,Hide_Outbtn;
let Show_End_Output=false;
let Show_Instant_Output=false;

//-------SIMULATION COTROLERS------------------------------------
let buttonstart,buttonpause,Show_path,Show_Comp,Zoom_IN,Zoom_OUT,fullbtn;

let show_component=false;                //for shwowing Component checkbox value
let show_path=false;                     //for showing path trace checkbox value
let Zoom=1;
const g=9.8;
let tochala=true;                // For START button 

//---------Responsive size-----------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

// --------PRELOAD IMAGES, FONTS------------
let cannon, cannon_wheel, clockfont, target;

function preload(){
  cannon=loadImage('images/cannon.png');
  cannon_wheel=loadImage('images/cannon wheel.png');
  target=loadImage('images/target.png');
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
    let Dom_elements=[Canvas, buttonstart, buttonpause, Show_path, Show_Comp, Zoom_IN, Zoom_OUT, fullbtn, Input, CANNON, Input_Cannon_checkbox, Higt_Cannon_Slider, Input_Higt_Cannon, Vel_Cannon_Slider, Input_Vel_Cannon, Ang_Cannon_Slider, Input_Ang_Cannon, Hide_INbtn, Output, INSTANT, Output_Instant_checkbox, Output_Instant_Vel, Output_Instant_Higt, END, Output_End_checkbox, Output_Range, Output_MaxH, Hide_Outbtn]
    Dom_elements.forEach(el => el.hide());
    let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);
          function fulllandscape(){
            fullscreen(true);
            screen.orientation.lock("landscape").catch(console.error);
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

function draw() {
  frameRate(60);
  background(140,195,255);
  //---------------Start simulation---------------------
  if(tochala){
    motion1=new motion(Higt_Cannon_Slider.value(),Vel_Cannon_Slider.value(),Ang_Cannon_Slider.value());
  }
  //------Ground-----------
  motion1.Ground();
  //----STOPWATCH----------
  push();
    translate(width/10,5*height/6);
    scale(width/1400);
    motion1.Stopwatch();
  pop();
  //------------CANNON AND THEIR MOTION--------------------
  push();
    translate(150,3*height/4);
    scale(Zoom);                         //for zoom In and Out 
    motion1.Tower();                   // Make tower for cannon
    motion1.ballmotion();              //cannon ball movement
    if(show_path){
      motion1.Path_trace();             //for trace path of cannon ball
    }
    if(show_component){
      motion1.Show_Vector();            // show cannonball velcoity and accelaration in vectors form
    }
    if(Show_Cannon_Input){
      motion1.Show_Input();             //Show cannon inputs on screen like velcity and angele change
    }
    if(Show_End_Output){
      motion1.Show_EndOutput();         //show end output like range and max height
    }
    if(Show_Instant_Output){
      motion1.Show_InstantO();            //show instant output like instant height and velcity
    }
  pop();
 //----------COMPONENT BOX---------
  if(show_component){
    push();
      translate(10,height/5);
      scale(width/1400);
      motion1.Show_Component_Box();
    pop();
  }
// ------------INPUT AND OUTPUT UPDATE---------------------
  motion1.Input_Output_update(); 
}
