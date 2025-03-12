//----------THINKVIL QUESTIONS----------------------------
let Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns;

//-------------------------CONTROLLER INPUTS---------------------------------------
let buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT;
let lets_start=true;
let Zoom=1;

//FORCE INPUTS
let Force_Slider,Angle_force_Slider,Force_type,Force_Div,Angle_force_Div;
let Force_Box,Force_checkbox;
let Force_show=false;
let Output_Vector_show=false;
let Input_show=false;

//INPUT
let Mass_Slider, Mass_Div, Static_const_Slider, Static_const_Div, Kinetic_const_Slider, Kinetic_const_Div;
let Input,Mass_block_Div,Gravity_Div,Friction_Div,Input_checkbox,Hide_INbtn;
const g=9.8;

//OUTPUT
let Output_Acc_Div, Output_Normal_Div, Output_Friction_Div, Output_MaxF_Div;
let Output,Output_Mass_block_Div,Hide_Outbtn;

//---------Responsive size-----------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Push_hand,Pull_hand;
function preload(){
  Pull_hand=loadImage('images/Pull.png');
  Push_hand=loadImage('images/Push.png');
}

function setup() {
  let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){

    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns,buttonstart,buttonpause,fullbtn,Zoom_IN,Zoom_OUT,Force_Slider,Angle_force_Slider,Force_type,Force_Div,Angle_force_Div,Force_Box,Force_checkbox,Mass_Slider, Mass_Div, Static_const_Slider, Static_const_Div, Kinetic_const_Slider, Kinetic_const_Div,Input,Mass_block_Div,Gravity_Div,Friction_Div,Input_checkbox,Hide_INbtn,Output_Acc_Div, Output_Normal_Div, Output_Friction_Div, Output_MaxF_Div,Output,Output_Mass_block_Div,Hide_Outbtn];
    Dom_elements.forEach(el => el.hide());
    let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);
          function fulllandscape(){
            fullscreen(true);
            screen.orientation.lock("landscape").catch(console.error);
            full_landscape.html('Exit Full Screen');
            full_landscape.size(100,25).position(5*height/6+30,5*width/6+20).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
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
    boxmotion1=new boxmotion(Force_type.value(),Force_Slider.value(),Mass_Slider.value(),Angle_force_Slider.value(),Static_const_Slider.value(),Kinetic_const_Slider.value());
  }
  boxmotion1.RealTime_update();
  boxmotion1.Friction_Surface();
  boxmotion1.Input_Output_update();

  push()
    translate(width/2,3*height/4-160*Zoom);
    scale(Zoom);
    boxmotion1.Block_Motion();
    if(Input_show){
      boxmotion1.Input_value();
    }
    if(Output_Vector_show){
      boxmotion1.Output_vector();
    }
    if(Force_show){
      boxmotion1.Force_Vector();
    }
  pop();

  push();
    translate(20,3*height/4-450)
    scale(width/1400);
    if(Output_Vector_show){
      boxmotion1.Output_Vector_Box();
    }
    translate(20,240);
    if(Force_show){
      boxmotion1.Force_Vector_Box();
    }
  pop();

}
