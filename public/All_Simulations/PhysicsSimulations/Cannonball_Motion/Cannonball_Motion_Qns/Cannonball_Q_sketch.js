//// Latest changes No. 1
//chage: rename "Projectile motion " to "Cannonball Motion"
//add : reume button will convert into pause when stop button is pressed
// change: "Click here for Fullscreen and Landscape mode" to "Tap here for Fullscreen and Landscape mode"



//-------------------THINKVIL QUESTIONS-----------------------------------------------------
let Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns;

// -------------------INPUT variable------------------------------
let Input,CANNON,Input_Cannon_checkbox,Higt_Cannon_Slider,Input_Higt_Cannon,Vel_Cannon_Slider,Input_Vel_Cannon,Ang_Cannon_Slider,Input_Ang_Cannon,Hide_INbtn;
let Show_Cannon_Input=false;

// -----------OUTPUT variables----------------------------------------------
let Output,INSTANT,Output_Instant_checkbox,Output_Instant_Vel,Output_Instant_Higt,END,Output_End_checkbox,Output_Range,Output_MaxH,Hide_Outbtn;
let Show_End_Output=false;
let Show_Instant_Output=false;

//-------SIMULATION COTROLlERS------------------------------------
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

let Dom_elements,full_landscape,Canvas;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){
    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    Dom_elements = [Canvas,Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns,buttonstart, buttonpause, Show_path, Show_Comp, Zoom_IN, Zoom_OUT, fullbtn, Input, CANNON, Input_Cannon_checkbox, Higt_Cannon_Slider, Input_Higt_Cannon, Vel_Cannon_Slider, Input_Vel_Cannon, Ang_Cannon_Slider, Input_Ang_Cannon, Hide_INbtn, Output, INSTANT, Output_Instant_checkbox, Output_Instant_Vel, Output_Instant_Higt, END, Output_End_checkbox, Output_Range, Output_MaxH, Hide_Outbtn];
    Dom_elements.forEach(el => el.hide());
    full_landscape=createButton('Tap here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(document.documentElement.clientWidth,document.documentElement.clientHeight).style('font-size','11px').style('border-radius','5px');
    full_landscape.mousePressed(fulllandscape);

    ResponsiveSmallsize();
    document.addEventListener("visibilitychange", handleVisibilityChange);                          //when smartphone screen off this will run
  }
  else if(Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth<=Medium_size){
    ResponsiveMediumsize();
  }
  else if( document.documentElement.clientWidth>Medium_size){
    ResponsiveBigsize();
  }

}


function windowResized() {
    resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);

    if (document.documentElement.clientHeight<=Small_size && document.documentElement.clientWidth > document.documentElement.clientHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize();
    } 
    else if (Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth <= Medium_size) {
      ResponsiveMediumsize();
    } 
    else if (document.documentElement.clientWidth>Medium_size) {
      ResponsiveBigsize();
    }
}

// --------------FULL SCREEN AND SCREEN OFF SMARTPHONE FUNCTION------------------
function fulllandscape(){
  fullscreen(true);
  screen.orientation.lock("landscape").catch(console.error);
  full_landscape.html('Exit Full Screen');
  full_landscape.size(100,22).position(3*document.documentElement.clientHeight/4+20,5*document.documentElement.clientWidth/6+20).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
  Dom_elements.forEach(el => el.show());
  Show_Answer_btn.hide();
  full_landscape.mousePressed(exitlandscape);

}
function exitlandscape(){
  fullscreen(false);
  full_landscape.html('Tap here for Fullscreen and Landscape mode');
  full_landscape.position(0,0).size(document.documentElement.clientHeight,document.documentElement.clientWidth).style('font-size','12px');
  Dom_elements.forEach(el => el.hide());
  full_landscape.mousePressed(fulllandscape);

}

function handleVisibilityChange() {
  full_landscape.html('Tap here for Fullscreen and Landscape mode');
  full_landscape.position(0,0).size(document.documentElement.clientHeight,document.documentElement.clientWidth).style('font-size','12px');
  Dom_elements.forEach(el => el.hide());
  full_landscape.mousePressed(fulllandscape);
}

//------------------------WINDOW RESIZE------------------------------------------------------
function windowResized(){
  resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);

    if (document.documentElement.clientHeight<=Small_size && document.documentElement.clientWidth > document.documentElement.clientHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize();
    } 
    else if (Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth <= Medium_size) {
      ResponsiveMediumsize();
    } 
    else if (document.documentElement.clientWidth>Medium_size) {
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
