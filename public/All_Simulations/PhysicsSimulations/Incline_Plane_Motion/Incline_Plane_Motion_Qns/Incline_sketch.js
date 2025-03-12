//----------THINKVIL QUESTIONS----------------------------
let Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns;
  
//---------SIMULATION CONTROLLERS VARIABLES-----------------------------------
let buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT;
let Zoom=1;
let lets_start=true;

//----------INPUT VARIABLES--------------------------------------------------- 
let Input,MASS_Box,Mass_system,Gravity,Input_checkbox,Hide_INbtn;
let Mass_A_Slider,Angle_A_Slider,Mass_B_Slider,Angle_B_Slider,System_Type_select;
let Mass_A_Div,Angle_A_Div,Mass_B_Div,Angle_B_Div;
const g=9.8;
let Input_show=false; 

//---------OUTPUT VAIRABLES----------------------------------------------------
let Output,ACC_Div,Output_checkbox,Hide_Outbtn;
let Acc_AB_Div,Ten_AB_Div;
let Show_Out_Vect=false; 
  
//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Dom_elements,full_landscape,Canvas;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  angleMode(DEGREES);
  textSize(18);
  input();
  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){

    // -----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    Dom_elements = [Canvas,Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns,buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn, Input,MASS_Box,Mass_system,Gravity,Input_checkbox,Hide_INbtn,Mass_A_Slider,Angle_A_Slider,Mass_B_Slider,Angle_B_Slider,System_Type_select,Mass_A_Div,Angle_A_Div,Mass_B_Div,Angle_B_Div,Output,ACC_Div,Output_checkbox,Hide_Outbtn,Acc_AB_Div,Ten_AB_Div];
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
  full_landscape.size(100,22).position(3*document.documentElement.clientHeight/4,5*document.documentElement.clientWidth/6+10).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
  Dom_elements.forEach(el => el.show());
  Show_Answer_btn.hide();
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
    motion1=new motion(Mass_A_Slider.value(),Mass_B_Slider.value(),Angle_A_Slider.value(),Angle_B_Slider.value(),System_Type_select.value());
  }
  motion1.Ground();
  motion1.Input_Ouput_update();
  push();
    translate(width/2,3*height/4);
    scale(Zoom);
    motion1.Block_motion();
  pop();
  push();
    translate(20,2*height/4);
    scale(width/1400);
    if(Show_Out_Vect){
      motion1.Output_vector_Box();
    }
  pop();


}
