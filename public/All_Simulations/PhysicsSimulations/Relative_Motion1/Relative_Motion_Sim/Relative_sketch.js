//------------CONTROLLER VARIABLES------------------------
let buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn;
let Zoom=1;
var lets_start=true;                               

// ------INPUT----------------------------------------
let Input,Observer,Red_car,RedC_I_cap,RedC_J_cap,Blue_car,BlueC_I_cap,BlueC_J_cap,Input_checkbox,Hide_INbtn;
let Obser_Pos, Obser_Pos_select,Input_Red_C_Ve,Red_C_VeX,Red_C_VeY,Input_Blue_C_Ve,Blue_C_VeX,Blue_C_VeY;                     
let Input_show=false;

// ------OUTPUT--------------------------------------------
let Output,Ground_wrt_O,Redcar_wrt_O,Bluecar_wrt_O,Output_checkbox,Hide_Outbtn;
let Ground_wrt_O_Ve,Redcar_wrt_O_Ve,Bluecar_wrt_O_Ve;
let Output_show=false;

//---------Responsive size-----------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;


//---------FIRST LOADING IMAGES AND FONTS ------------------
let Ground_O,CarR_NO,CarB_NO,CarR_O,CarB_O;

function preload(){   
  Ground_O=loadImage('images/Ground_O.png');
  CarR_NO=loadImage('images/CarR_NO.png');
  CarB_NO=loadImage('images/CarB_NO.png');
  CarR_O=loadImage('images/CarR_O.png');
  CarB_O=loadImage('images/CarB_O.png');                                  
}

function setup() {
  let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  frameRate(60);
  angleMode(DEGREES);
  imageMode(CENTER);
  input(); 
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){

    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,buttonstart,buttonpause,Zoom_IN,Zoom_OUT,fullbtn,Input,Observer,Red_car,RedC_I_cap,RedC_J_cap,Blue_car,BlueC_I_cap,BlueC_J_cap,Input_checkbox,Hide_INbtn, Obser_Pos, Obser_Pos_select,Input_Red_C_Ve,Red_C_VeX,Red_C_VeY,Input_Blue_C_Ve,Blue_C_VeX,Blue_C_VeY,Output,Ground_wrt_O,Redcar_wrt_O,Bluecar_wrt_O,Output_checkbox,Hide_Outbtn,Ground_wrt_O_Ve,Redcar_wrt_O_Ve,Bluecar_wrt_O_Ve];
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


let scrnX=0;                         // define variable for showing relative motion w.r.t to observer velocity
let scrnY=0;
function draw() {
  frameRate(60);
  background('white');

  push();
    translate(width/2,height/2);       //origin sift to center

    if(lets_start){                                                         //tochala udate with simulation start bttn for starting the simulation
      let V_Red=createVector(Red_C_VeX.value(),Red_C_VeY.value());
      let V_Blue=createVector(Blue_C_VeX.value(),Blue_C_VeY.value());

      boxmotion1=new boxmotion(Obser_Pos_select.value(),V_Red,V_Blue);                       //define class for different functions which update simulation
    }
// --------------MOVABLE SIMULAION PART---------------------------------------------- 
    push();
      scale(Zoom);             //scale the screen w.r.t origion
      translate(-scrnX,-scrnY);               //Move the screen with observer velocity
      boxmotion1.Ground();
      boxmotion1.Observer();  
      if(Input_show){
        boxmotion1.Absolute_Ve_Vector();
      }
      if(Output_show){
        boxmotion1.Relative_Ve_Vector();
      }
  pop();
//------------------------VELOCITY VECTOR BOX--------------------------------------
  push();
    translate(-width/2+20,-height/4);
    scale(width/1500);
      if(Input_show){
      boxmotion1.Vector_Box('red','W.r.t Ground');
      }
    translate(0,160);
      if(Output_show){
        boxmotion1.Vector_Box('yellow','W.r.t Observer');
      }
  pop();
//---------------------INPUT AND OUTPUT UPDATE----------------------------------------
  boxmotion1.Output_update();

}
