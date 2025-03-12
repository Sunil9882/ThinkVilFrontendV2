//----------THINKVIL QUESTIONS----------------------------
let Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns;
  
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


function setup() {
 let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){

    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns,buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT,Input,MASS_Box,Gravity,Input_checkbox,Hide_INbtn,Mass_A_Slider,Mass_A_Div,Mass_B_Slider,Mass_B_Div,Mass_C_Slider,Mass_C_Div,Output,Output_checkbox,ACC_Box,TENSION_Box,Hide_Outbtn,Acc_A_Div,Acc_B_Div,Acc_C_Div,Ten_1_Div,Ten_2_Div];
    Dom_elements.forEach(el => el.hide());
    let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);
          function fulllandscape(){
            fullscreen(true);
            screen.orientation.lock("landscape").catch(console.error);
            full_landscape.html('Exit Full Screen');
            full_landscape.size(100,25).position(3*height/4+20,5*width/6+10).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
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

function windowResized(){
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
