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

function setup() {
  let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  angleMode(DEGREES);
  textSize(18);
  input();
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){

    // -----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,Question_Box,Question,Show_Answer_btn,Next_btn,Previous_btn,Hide_Qns,buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn, Input,MASS_Box,Mass_system,Gravity,Input_checkbox,Hide_INbtn,Mass_A_Slider,Angle_A_Slider,Mass_B_Slider,Angle_B_Slider,System_Type_select,Mass_A_Div,Angle_A_Div,Mass_B_Div,Angle_B_Div,Output,ACC_Div,Output_checkbox,Hide_Outbtn,Acc_AB_Div,Ten_AB_Div];
    Dom_elements.forEach(el => el.hide());

    let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);
          function fulllandscape(){
            fullscreen(true);
            if (screen.orientation && screen.orientation.lock) {
              screen.orientation.lock("landscape").catch(function(error) {
                console.error("Orientation lock failed: ", error);
                alert("Orientation lock failed: " + error.message);
              });
            } else {
               console.warn("Screen orientation API not supported.");
                alert("Screen orientation API not supported. Please rotate the screen in Landscape mode");
             }
            full_landscape.html('Exit Full Screen');
            full_landscape.size(100,25).position(3*height/4+50,5*width/6+10).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
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
