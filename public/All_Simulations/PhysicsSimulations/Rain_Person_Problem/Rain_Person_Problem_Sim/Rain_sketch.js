
//-------------------CONTROLLER VARIABLES---------------------------
let buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn,Safe_A_Ceckbox;
let Zoom=1;
let lets_start=true;    
let Show_SafeArea=false;                 

//------------------INPUT VARIABLES ------------------------------------
let Input,Input_O_checkbox,OBSERVER,RAINFALL,Hide_INbtn;
let Vel_O_Slider, Ang_O_Slider, Vel_R_Slider, Ang_R_Slider, Input_Vel_O, Input_Ang_O, Input_Vel_R, Input_Ang_R;
let Show_inputs=false;                 //checkbox for observer and rainfall        

// -----------------------OUTPUT VARIABLES ----------------------------------
let Output,Vel_W_G,Output_Vector_checkbox,Hide_Outbtn;
let Out_Rain_Vel_G, Out_Obs_Vel_G, Out_Vel_W_O, Out_Rain_Vel_O, Out_Grd_Vel_O;
let Show_output=false;

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

// FIRST LOADING IMAGES AND FONTS
let observer,wheel,drop;
function preload(){
  observer=loadImage('images/girl.png');
  wheel=loadImage('images/wheel.png');
  drop=loadImage('images/drop.png');
}

let Dom_elements,full_landscape,Canvas;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
   frameRate(60);
  angleMode( DEGREES);
  imageMode(CENTER);
  input();
  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){

    // -----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    Dom_elements = [Canvas,buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn,Safe_A_Ceckbox,Input,Input_O_checkbox,OBSERVER,RAINFALL,Hide_INbtn,Vel_O_Slider, Ang_O_Slider, Vel_R_Slider, Ang_R_Slider, Input_Vel_O, Input_Ang_O, Input_Vel_R, Input_Ang_R,Output,Vel_W_G,Output_Vector_checkbox,Hide_Outbtn,Out_Rain_Vel_G, Out_Obs_Vel_G, Out_Vel_W_O, Out_Rain_Vel_O, Out_Grd_Vel_O];
    Dom_elements.forEach(el => el.hide());
    full_landscape=createButton('Click here for Fullscreen and Landscape mode');
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

// --------------FULL SCREEN AND SCREEN OFF SMARTPHONE FUNCTION------------------
function fulllandscape(){
  fullscreen(true);
  screen.orientation.lock("landscape").catch(console.error);
  full_landscape.html('Exit Full Screen');
  full_landscape.size(100,22).position(4*document.documentElement.clientHeight/5+20,5*document.documentElement.clientWidth/6+10).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
  Dom_elements.forEach(el => el.show());
  full_landscape.mousePressed(exitlandscape);

}
function exitlandscape(){
  fullscreen(false);
  full_landscape.html('Click here for Fullscreen and Landscape mode');
  full_landscape.position(0,0).size(document.documentElement.clientHeight,document.documentElement.clientWidth).style('font-size','12px');
  Dom_elements.forEach(el => el.hide());
  full_landscape.mousePressed(fulllandscape);

}

function handleVisibilityChange() {
  full_landscape.html('Click here for Fullscreen and Landscape mode');
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


let scrn_X=0;
function draw() {
  frameRate(60);
  background(140,195,255);

  if(lets_start){
    Motion1=new Motion(Vel_O_Slider.value(),Ang_O_Slider.value(),Vel_R_Slider.value(),Ang_R_Slider.value());
  }
  //-------TIME AND EQUATIONS-------------------------
  Motion1.Realtime_update();
  //------------OBSERVER AND CANVAS MOVEMENT-------------------------
  push();
    translate(-scrn_X,0);
    Motion1.Rainfall();
    push();
      translate(width/2,3*height/4);
      Motion1.Observer();
    pop();
    Motion1.MileStone();
  pop();
  //------GROUND-----------------------------------------------------------
  Motion1.Ground();              //here Ground will comes after milestone because of overlap the mildstone
  //--------SHOW THE INPUTS ON CANVAS--------------------------------------------------
  if(Show_inputs){
    Motion1.Input_Vector();
  }
//------------Output vector and vector box-----------------------------------
  if (Show_output){
    Motion1.Output_Vector();
    push();
      translate(20,height/4);
      scale(width/1400);
      Motion1.Output_Vector_Box();
    pop();
  }
  
//---------SAFE AREA----------------------------------------------
  if(Show_SafeArea){
    Motion1.safe_Angle();
    push();
      translate(width/4,height/4);
      scale(width/1400);
      Motion1.Safe_A_Box();
    pop();
  }
//------iNPUT OUTPUT DOM UPDATE-------------------------------------------
  Motion1.Input_Output_update();
  
}
