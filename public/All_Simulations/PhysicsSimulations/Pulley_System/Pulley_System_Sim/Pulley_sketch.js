  
//--------------CONTROLL VARIABLES---------------------------
let buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT;
let lets_start=true;
let Zoom=1;

//------------INPUT VARIABLES------------------------------
let Input,MASS_Box,Gravity,Input_checkbox,Hide_INbtn;
let Mass_A_Slider,Mass_A_Div,Mass_B_Slider,Mass_B_Div,Mass_C_Slider,Mass_C_Div; 
let Show_Input=false;
const g=9.8;            //gravity value

//--------------OUTPUT VARIABLES-----------------------------------
let Output,Output_checkbox,ACC_Box,TENSION_Box,Hide_Outbtn;
let Acc_A_Div,Acc_B_Div,Acc_C_Div,Ten_1_Div,Ten_2_Div;
let Show_Out_Vect=false;

//---------Responsive size-----------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Dom_elements,full_landscape,Canvas;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){

    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    Dom_elements = [Canvas,buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT,Input,MASS_Box,Gravity,Input_checkbox,Hide_INbtn,Mass_A_Slider,Mass_A_Div,Mass_B_Slider,Mass_B_Div,Mass_C_Slider,Mass_C_Div,Output,Output_checkbox,ACC_Box,TENSION_Box,Hide_Outbtn,Acc_A_Div,Acc_B_Div,Acc_C_Div,Ten_1_Div,Ten_2_Div];
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
  full_landscape.size(100,22).position(3*document.documentElement.clientHeight/4+20,5*document.documentElement.clientWidth/6+10).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
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

function draw() {
  background(140,195,255);

  if(lets_start){
    motion1=new motion(Mass_A_Slider.value(),Mass_B_Slider.value(),Mass_C_Slider.value());
  }
  //--------simulation time and equation update--------------------
  motion1.Realtime_update();
  push();
    translate(2*width/5,0);
    scale(Zoom);
    motion1.Pully_motion();
    motion1.Input_Output_update();
    if(Show_Input){
      motion1.Input_Values();
    }
    if(Show_Out_Vect){
      motion1.Output_Vectors();
    }
  pop();
  //---------Show output vector box-----------------------------------
  if(Show_Out_Vect){
    push();
      translate(width/15,50);
      scale(width/1400);
      motion1.Output_Vectors_Box();
    pop();
  }
  
}
