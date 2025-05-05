// Latest changes No. 1
// change: "Click here for Fullscreen and Landscape mode" to "Tap here for Fullscreen and Landscape mode"

//---------------------CONTROLLER VARIABLES--------------------
let fullbtn,Zoom_IN,Zoom_OUT;

//---------------------QUADRATIC EQUATIONS----------------------
let Input,QUAD,y_Span,A,X_A,x_square,B,X_B,C,Hide_INbtn;

//------------------------SOLUTIONS------------------------------
let Solution_Box,Show_soln_checkbox,SOLUTION,Output_ROOT,Output_Vertex,Output_Yintersect,Output_Axis_OS;

//-------------------------VALUE AT POINT---------------------------
let Value_XBox,At_pointX_checkbox,At_point,X,X_cord,Y_at_X,Tangent;

//---------------------------DOMAIN AND RANGE-------------------------
let DOMAIN_Box,Domain_checkbox,Domain_Div,DOMAIN,Domain_type,Domain_X1_Value,Domain_X2_Value,Domain_Range;
let Hide_Out_sln,Hide_Out_X,Hide_Out_Domain;


let Show_Sol1=false;       
let Show_Sol2=false;
let Show_Sol3=false;
// let take scale 1m=25px
let Scale=25;
let Zoom=1;

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Canvas,Dom_elements,full_landscape; 
function setup() {
    Canvas=createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    angleMode(DEGREES);
    input();

     if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){
    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
     Dom_elements = [Canvas,fullbtn,Zoom_IN,Zoom_OUT,Input,QUAD,y_Span,A,X_A,x_square,B,X_B,C,Hide_INbtn, Solution_Box,Show_soln_checkbox,SOLUTION,Output_ROOT,Output_Vertex,Output_Yintersect,Output_Axis_OS,Value_XBox,At_pointX_checkbox,At_point,X,X_cord,Y_at_X,Tangent,DOMAIN_Box,Domain_checkbox,Domain_Div,DOMAIN,Domain_type,Domain_X1_Value,Domain_X2_Value,Domain_Range,Hide_Out_sln,Hide_Out_X,Hide_Out_Domain];
    Dom_elements.forEach(el => el.hide());
    full_landscape=createButton('Tap here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(document.documentElement.clientWidth,document.documentElement.clientHeight).style('font-size','12px');
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
  full_landscape.size(100,22).position(3*document.documentElement.clientHeight/4+30,9*document.documentElement.clientWidth/10).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
  Dom_elements.forEach(el => el.show());
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
let Scrol_X=0,Scrol_Y=0;        //for dragging the graph by mouse
function mouseDragged(){
  if (mouseX<=width){
    Scrol_X+=(mouseX-pmouseX);
    Scrol_Y+=(mouseY-pmouseY);
  }
  
}

function draw() {
  background(255,255,150);
  translate(width/2+Scrol_X,height/2+Scrol_Y);
  scale(1,-1);
  Quardatic_Eq1=new Quardatic_Eq(A.value(),B.value(),C.value(),X_cord.value(),Domain_type.value(),Domain_X1_Value.value(),Domain_X2_Value.value());
  Quardatic_Eq1.Grid();
  Quardatic_Eq1.Solution();
  Quardatic_Eq1.Equation();
  if(Show_Sol1){
    Quardatic_Eq1.Solution_show1();
  }
  if(Show_Sol2){
    Quardatic_Eq1.Solution_show2();
  }
  if(Show_Sol3){
  Quardatic_Eq1.Solution_show3();
  }
}
