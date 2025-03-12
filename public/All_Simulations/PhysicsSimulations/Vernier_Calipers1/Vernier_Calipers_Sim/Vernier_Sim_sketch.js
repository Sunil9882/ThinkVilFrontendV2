
//--------------INPUT VARIABLES--------------------------------
let Input,Least_count,Shape_Span;
let Shape,Hide_btn;

//------------CONTROL VARIABLES-----------------------------------------
let Zoom_IN,Zoom_OUT;
let Random_Dim,Show_Dim,fullbtn;
let Zoom=1;

let R_Dim=0;                //According Real Measerment 
let R_SDim=0;               //for scaleup the dimension for show shapes in big size

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let caliper_main,caliper_upper;
function preload(){
  caliper_main=loadImage('images/calipar main.png');
  caliper_upper=loadImage('images/calipar upper.png');

}

function setup() {
  let Canvas=createCanvas(window.outerWidth, window.outerHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  input();
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){
    // -----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    let Dom_elements = [Canvas,Input,Least_count,Shape_Span,Shape,Hide_btn,Zoom_IN,Zoom_OUT,Random_Dim,Show_Dim,fullbtn];
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
            full_landscape.size(100,25).position(4*height/5+30,5*width/6+10).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
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

let X=0;
function mouseDragged() {
  // if(mouseY<height/2){
    X+=(mouseX-pmouseX);
    X = constrain(X, R_SDim, 800);         // constrain X position within a specific range
  // }
}

function draw() {
  background(140,195,255);
  translate(width/2,height/2);
  scale(Zoom);                            //scale the varnier w.r.t origin
  push();
    Varnier_calipers();
    push();
      translate(-443,150);
      Random_Shapes();
    pop();
  pop();
  

}
// ----------VARNIER CALIPERS -------------------------------------------
function Varnier_calipers (){
    push();
    //Upper caliper 
      image(caliper_main,100,0);
      push();
        translate(-420,-40);
        for(let i=0;i<11;i++){
            line(100*i,0,100*i,20);
            text(i,100*i,0)
        }
        for(let i=0;i<22;i++){
          line(50*i,3,50*i,20);
        }
        for(let i=0;i<110;i++){
            line(10*i,5,10*i,20);
        }
        textSize(15);
        text('Main Scale',0,-30);
      pop();
    //Lower caliper
      image(caliper_upper,X-304,0);
        push();
            text("cm",680,-40);
            translate(-420+X,-30);
            for(let i=0;i<2;i++){
                line(90*i,0,90*i,15);
                text(i,90*i+2,20)
            }
            for(let i=0;i<2;i++){
              line(45*i,0,45*i,12);
          }
            for(let i=0;i<10;i++){
                line(9*i,0,9*i,10);
            }
          // write vernier scale name
          textSize(15);
          text('Vernier Scale',140,20);
      pop();  
    pop();
}
// -------------------------REANDOM SHAPES--------------------------------
function Random_Shapes(){
  push();
    fill(180);
      if(Shape.value()==='circular'){
        circle(R_SDim/2,0,R_SDim);

      }else if(Shape.value()==='rectangular'){
        rect(R_SDim/2,0,R_SDim,R_SDim);

      }else if(Shape.value()==='triangular'){
        triangle(0,40,0,-160,R_SDim,-60);
      }
  pop();

}







