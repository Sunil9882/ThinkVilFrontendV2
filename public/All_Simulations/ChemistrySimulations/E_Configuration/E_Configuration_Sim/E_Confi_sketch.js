
// CONTROLLER VARIABLES
let fullbtn,Zoom_IN,Zoom_OUT;
var Zoom=1;
//INPUT SECTION
let Input_Box,Elements_Select_Div,Elements_Select;
let Hide_INbtn;
let Afbau_checkbox,Afbau_show=false;
let Klechkowski_checkbox,Klechkowski_show=false;

var Atomic_No;
var e_K=1,e_K_s=1;
var e_L=0,e_L_s=0,e_L_p_1=0,e_L_p_2=0,e_L_p_3=0;
var e_M=0,e_M_s=0,e_M_p=0,e_M_p_1=0,e_M_p_2=0,e_M_p_3=0,e_M_d=0,e_M_d_1=0,e_M_d_2=0,e_M_d_3=0,e_M_d_4=0,e_M_d_5=0;
var e_N=0,e_N_s=0,e_N_p=0,e_N_p_1=0,e_N_p_2=0,e_N_p_3=0,e_N_d=0,e_N_d_1=0,e_N_d_2=0,e_N_d_3=0,e_N_d_4=0,e_N_d_5=0,e_N_f=0,e_N_f_1=0,e_N_f_2=0,e_N_f_3=0,e_N_f_4=0,e_N_f_5=0,e_N_f_6=0,e_N_f_7=0;
var e_O=0,e_O_s=0,e_O_p=0,e_O_p_1=0,e_O_p_2=0,e_O_p_3=0,e_O_d=0,e_O_d_1=0,e_O_d_2=0,e_O_d_3=0,e_O_d_4=0,e_O_d_5=0,e_O_f=0,e_O_f_1=0,e_O_f_2=0,e_O_f_3=0,e_O_f_4=0,e_O_f_5=0,e_O_f_6=0,e_O_f_7=0;
var e_P=0,e_P_s=0,e_P_p=0,e_P_p_1=0,e_P_p_2=0,e_P_p_3=0,e_P_d=0,e_P_d_1=0,e_P_d_2=0,e_P_d_3=0,e_P_d_4=0,e_P_d_5=0,e_P_f=0,e_P_f_1=0,e_P_f_2=0,e_P_f_3=0,e_P_f_4=0,e_P_f_5=0,e_P_f_6=0,e_P_f_7=0;
var e_Q=0,e_Q_s=0,e_Q_p=0,e_Q_p_1=0,e_Q_p_2=0,e_Q_p_3=0;
// number of electron ,proton and neutron in element 
var N_e=1;
var N_p=1;
var N_n=0;


//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Zoom_In_img,Zoom_Out_img, Full_img,Exit_full_img;;
// function preload(){
//   Zoom_In_img=loadImage('images/Zoom_In.png');
//   Zoom_Out_img=loadImage('images/Zoom_Out.png');
//   Full_img=loadImage('images/expand.png');
//   Exit_full_img=loadImage('images/cross.png');
// }

let Canvas, Dom_elements,full_landscape;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth,document.documentElement.clientHeight);
  angleMode(DEGREES);
  input();

  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){
    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
     Dom_elements = [Canvas,fullbtn,Zoom_IN,Zoom_OUT,Input_Box,Elements_Select_Div,Elements_Select,Hide_INbtn,Afbau_checkbox,Klechkowski_checkbox];
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
  full_landscape.html('Exit');
  full_landscape.size(25,16).position(1*document.documentElement.clientHeight/2+70,9*document.documentElement.clientWidth/10+5).style('font-size','8px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px').style('border','1px solid black');
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

let  thitha=0;              //electron movement
function draw(){
  clear();
  background(250,250,250);

    if(height<500 && width>height){                                    //for smartphone layout
        electron_move(width/2,height/2,Zoom);
        electron_count(width/2,height/10,height/800); 
        if(Afbau_show){
          afbau_dia(10,height/15,height/800);
        }    
        if(Klechkowski_show){
          Klechkowski_diagram(width,8.5*height/10,height/800);
        }                  
    }
    else if (500<width && width<1100){                            //tablet or middle size layout
        electron_move(width/2,height/2,Zoom);
        electron_count(width/2,height/10,width/1200); 
        if(Afbau_show){
          afbau_dia(10,height/15,width/1200);
        }  
        if(Klechkowski_show){
          Klechkowski_diagram(width,8.5*height/10,width/1200);
        }
    }
    else{                                                        //bigger screen like lpatop screens
      electron_move(width/2,height/2,Zoom);
      electron_count(width/2,height/10,height/800); 
      if(Afbau_show){
        afbau_dia(10,height/15,height/800);
      }    
      if(Klechkowski_show){
        Klechkowski_diagram(width,8.5*height/10,height/700);
      }                              
    }
  
}
//-----------------AFBAU CHART---------------------------------------------------
function afbau_dia(X,Y,SCALE){
  push();
    translate(X,Y);
    scale(SCALE);
    // //CHART BOX
    // // scale(0.9)
    fill("RGBA(250,250,250,0)");
    // strokeWeight(1);
    // rect(0,0,400,height-20,5);
    push();
      strokeWeight(1);
      // rect(80,5,250,40,5);
      textAlign(CENTER);
      fill(0);
      textSize(18);
      text('AUFBAU ENERGY LEVEL DIAGRAM ',190,40);
    pop();

    //ENERGY LAVELS ARROW: 
      push();
        translate(30,0);
        strokeWeight(1);
        fill("RGBA(220,220,220,0.5)");
        beginShape();
          vertex(0, 680); // Bottom left
          vertex(20, 680); // Bottom right
          vertex(20, 130); // Top right
          vertex(30, 130); // Arrowhead right
          vertex(10, 100); // Arrowhead tip
          vertex(-10, 130); // Arrowhead left
          vertex(0, 130); // Top left
        endShape(CLOSE);
        //add Energy level label
          push();
            fill(0);
            strokeWeight(1);
            textSize(12);
            translate(15, 430);
            rotate(-90);
            text('Energy Level', 0, 0);
          pop();
          // Add highest and lowest energy labels
          push();
            fill(0);
            textSize(12);
            text('Highest Energy Orbital', -10, 85); // Top horizontal
            text('Lowest Energy Orbital', -10, 705); // Bottom horizontal
          pop();
      pop();

      //ORBITAL SHAPES
      push();
        translate(110,680);
        fill(255);
        //1s
        rect(0,0,25,-25);
        //2s
        rect(0,-30,25,-25);
        //2p
        rect(30,-60,25,-25);
        rect(55,-60,25,-25);
        rect(80,-60,25,-25);
        //3s
        rect(0,-90,25,-25);
        //3p
        rect(30,-120,25,-25);
        rect(55,-120,25,-25);
        rect(80,-120,25,-25);
        //4s
        rect(0,-150,25,-25);
        //3d
        rect(60,-180,25,-25);
        rect(85,-180,25,-25);
        rect(110,-180,25,-25);
        rect(135,-180,25,-25);
        rect(160,-180,25,-25);
        //4p
        rect(30,-210,25,-25);
        rect(55,-210,25,-25);
        rect(80,-210,25,-25);
        //5s
        rect(0,-240,25,-25);
        //4d
        rect(60,-270,25,-25);
        rect(85,-270,25,-25);
        rect(110,-270,25,-25);
        rect(135,-270,25,-25);
        rect(160,-270,25,-25);
        //5p
        rect(30,-300,25,-25);
        rect(55,-300,25,-25);
        rect(80,-300,25,-25);
        //6s
        rect(0,-330,25,-25);
        //4f
        rect(90,-360,25,-25);
        rect(115,-360,25,-25);
        rect(140,-360,25,-25);
        rect(165,-360,25,-25);
        rect(190,-360,25,-25);
        rect(215,-360,25,-25);
        rect(240,-360,25,-25);
        //5d
        rect(60,-390,25,-25);
        rect(85,-390,25,-25);
        rect(110,-390,25,-25);
        rect(135,-390,25,-25);
        rect(160,-390,25,-25);
        //6p
        rect(30,-420,25,-25);
        rect(55,-420,25,-25);
        rect(80,-420,25,-25);
        //7s
        rect(0,-450,25,-25);
        //5f
        rect(90,-480,25,-25);
        rect(115,-480,25,-25);
        rect(140,-480,25,-25);
        rect(165,-480,25,-25);
        rect(190,-480,25,-25);
        rect(215,-480,25,-25);
        rect(240,-480,25,-25);
        //6d
        rect(60,-510,25,-25);
        rect(85,-510,25,-25);
        rect(110,-510,25,-25);
        rect(135,-510,25,-25);
        rect(160,-510,25,-25);
        //7p
        rect(30,-540,25,-25);
        rect(55,-540,25,-25);
        rect(80,-540,25,-25);

        //ORBITAL NAMES
          push();
            fill(0);
            textSize(15);
            text('1s',-20,-5);
            text('2s',-20,-35);
            text('2p',10,-65);
            text('3s',-20,-95);
            text('3p',10,-125);
            text('4s',-20,-155);
            text('3d',40,-185);
            text('4p',10,-215);
            text('5s',-20,-245);
            text('4d',40,-275);
            text('5p',10,-305);
            text('6s',-20,-335);
            text('4f',70,-365);
            text('5d',40,-395);
            text('6p',10,-425);
            text('7s',-20,-455);
            text('5f',70,-485);
            text('6d',40,-515);
            text('7p',10,-545);
          pop();

          //ORBITAL ELECTRONS FILLING
          let Orbit_electron=function(x,y,n_e){
            push();
              translate(x+11,y-20)
              strokeWeight(2);
              if(n_e>0){
                line(0,0,0,15);
                line(0,0,-5,5);
              }
              if(n_e>1){
                line(4,0,4,15);
                line(4,15,9,10);
              }
            pop();
          }
          //1s
          if(e_K_s>0){
            Orbit_electron(0,0,e_K_s);
          }
          //2s
          print(e_L_s)
          if(e_L_s>0){
            Orbit_electron(0,-30,e_L_s);
          }
          //2p
          if(e_L_p_1>0){
            Orbit_electron(30,-60,e_L_p_1);
          }
          if(e_L_p_2>0){
            Orbit_electron(55,-60,e_L_p_2);
          }
          if(e_L_p_3>0){
            Orbit_electron(80,-60,e_L_p_3);
          }
          //3s
          if(e_M_s>0){
            Orbit_electron(0,-90,e_M_s);
          }
          //3p
          if(e_M_p_1>0){
            Orbit_electron(30,-120,e_M_p_1);
          }
          if(e_M_p_2>0){
            Orbit_electron(55,-120,e_M_p_2);
          }
          if(e_M_p_3>0){
            Orbit_electron(80,-120,e_M_p_3);
          }
          //4s
          if(e_N_s>0){
            Orbit_electron(0,-150,e_N_s);
          }
          //3d
          if(e_M_d_1>0){
            Orbit_electron(60,-180,e_M_d_1);
          }
          if(e_M_d_2>0){
            Orbit_electron(85,-180,e_M_d_2);
          }
          if(e_M_d_3>0){
            Orbit_electron(110,-180,e_M_d_3);
          }
          if(e_M_d_4>0){
            Orbit_electron(135,-180,e_M_d_4);
          }
          if(e_M_d_5>0){
            Orbit_electron(160,-180,e_M_d_5);
          }
          //4p
          if(e_N_p_1>0){
            Orbit_electron(30,-210,e_N_p_1);
          }
          if(e_N_p_2>0){
            Orbit_electron(55,-210,e_N_p_2);
          }
          if(e_N_p_3>0){
            Orbit_electron(80,-210,e_N_p_3);
          }
          //5s
          if(e_O_s>0){
            Orbit_electron(0,-240,e_O_s);
          }
          //4d
          if(e_N_d_1>0){
            Orbit_electron(60,-270,e_N_d_1);
          }
          if(e_N_d_2>0){
            Orbit_electron(85,-270,e_N_d_2);
          }
          if(e_N_d_3>0){
            Orbit_electron(110,-270,e_N_d_3);
          }
          if(e_N_d_4>0){
            Orbit_electron(135,-270,e_N_d_4);
          }
          if(e_N_d_5>0){
            Orbit_electron(160,-270,e_N_d_5);
          }
          //5p
          if(e_O_p_1>0){
            Orbit_electron(30,-300,e_O_p_1);
          }
          if(e_O_p_2>0){
            Orbit_electron(55,-300,e_O_p_2);
          }
          if(e_O_p_3>0){
            Orbit_electron(80,-300,e_O_p_3);
          }
          //6s
          if(e_P_s>0){
            Orbit_electron(0,-330,e_P_s);
          }
          //4f
          if(e_N_f_1>0){
            Orbit_electron(90,-360,e_N_f_1);
          }
          if(e_N_f_2>0){
            Orbit_electron(115,-360,e_N_f_2);
          }
          if(e_N_f_3>0){
            Orbit_electron(140,-360,e_N_f_3);
          }
          if(e_N_f_4>0){
            Orbit_electron(165,-360,e_N_f_4);
          }
          if(e_N_f_5>0){
            Orbit_electron(190,-360,e_N_f_5);
          }
          if(e_N_f_6>0){
            Orbit_electron(215,-360,e_N_f_6);
          }
          if(e_N_f_7>0){
            Orbit_electron(240,-360,e_N_f_7);
          }
          //5d
          if(e_O_d_1>0){
            Orbit_electron(60,-390,e_O_d_1);
          }
          if(e_O_d_2>0){
            Orbit_electron(85,-390,e_O_d_2);
          }
          if(e_O_d_3>0){
            Orbit_electron(110,-390,e_O_d_3);
          }
          if(e_O_d_4>0){
            Orbit_electron(135,-390,e_O_d_4);
          }
          if(e_O_d_5>0){
            Orbit_electron(160,-390,e_O_d_5);
          }
          //6p
          if(e_P_p_1>0){
            Orbit_electron(30,-420,e_P_p_1);
          }
          if(e_P_p_2>0){
            Orbit_electron(55,-420,e_P_p_2);
          }
          if(e_P_p_3>0){
            Orbit_electron(80,-420,e_P_p_3);
          }
          //7s
          if(e_Q_s>0){
            Orbit_electron(0,-450,e_Q_s);
          }
          //5f
          if(e_O_f_1>0){
            Orbit_electron(90,-480,e_O_f_1);
          }
          if(e_O_f_2>0){
            Orbit_electron(115,-480,e_O_f_2);
          }
          if(e_O_f_3>0){
            Orbit_electron(140,-480,e_O_f_3);
          }
          if(e_O_f_4>0){
            Orbit_electron(165,-480,e_O_f_4);
          }
          if(e_O_f_5>0){
            Orbit_electron(190,-480,e_O_f_5);
          }
          if(e_O_f_6>0){
            Orbit_electron(215,-480,e_O_f_6);
          }
          if(e_O_f_7>0){
            Orbit_electron(240,-480,e_O_f_7);
          }
          //6d
          if(e_P_d_1>0){
            Orbit_electron(60,-510,e_P_d_1);
          }
          if(e_P_d_2>0){
            Orbit_electron(85,-510,e_P_d_2);
          }
          if(e_P_d_3>0){
            Orbit_electron(110,-510,e_P_d_3);
          }
          if(e_P_d_4>0){
            Orbit_electron(135,-510,e_P_d_4);
          }
          if(e_P_d_5>0){
            Orbit_electron(160,-510,e_P_d_5);
          }
          //7p
          if(e_Q_p_1>0){
            Orbit_electron(30,-540,e_Q_p_1);
          }
          if(e_Q_p_2>0){
            Orbit_electron(55,-540,e_Q_p_2);
          }
          if(e_Q_p_3>0){
            Orbit_electron(80,-540,e_Q_p_3);
          }
          pop();
           
      pop();
  pop();
}
//-----------------KLECHKOWSKI DIAGRAM---------------------------------------------------
function Klechkowski_diagram(X,Y,SCALE){
  push();
    translate(X,Y);
    scale(SCALE);
         // ELECTRONIC CONFIGURATION DIAGRAM
        push();
          textSize(16);
          fill(0);
          textAlign(CENTER);
          let config = `1s${e_K_s > 0 ? `^${e_K_s}` : ''} `;
          if (e_L_s > 0) config += `2s^${e_L_s} `;
          if (e_L_p_1 + e_L_p_2 + e_L_p_3 > 0) config += `2p^${e_L_p_1 + e_L_p_2 + e_L_p_3} `;
          if (e_M_s > 0) config += `3s^${e_M_s} `;
          if (e_M_p_1 + e_M_p_2 + e_M_p_3 > 0) config += `3p^${e_M_p_1 + e_M_p_2 + e_M_p_3} `;
          if (e_N_s > 0) config += `4s^${e_N_s} `;
          if (e_M_d_1 + e_M_d_2 + e_M_d_3 + e_M_d_4 + e_M_d_5 > 0) config += `3d^${e_M_d_1 + e_M_d_2 + e_M_d_3 + e_M_d_4 + e_M_d_5} `;
          if (e_N_p_1 + e_N_p_2 + e_N_p_3 > 0) config += `4p^${e_N_p_1 + e_N_p_2 + e_N_p_3} `;
          if (e_O_s > 0) config += `5s^${e_O_s} `;
          if (e_N_d_1 + e_N_d_2 + e_N_d_3 + e_N_d_4 + e_N_d_5 > 0) config += `4d^${e_N_d_1 + e_N_d_2 + e_N_d_3 + e_N_d_4 + e_N_d_5} `;
          if (e_O_p_1 + e_O_p_2 + e_O_p_3 > 0) config += `5p^${e_O_p_1 + e_O_p_2 + e_O_p_3} `;
          if (e_P_s > 0) config += `6s^${e_P_s} `;
          if (e_N_f_1 + e_N_f_2 + e_N_f_3 + e_N_f_4 + e_N_f_5 + e_N_f_6 + e_N_f_7 > 0) config += `4f^${e_N_f_1 + e_N_f_2 + e_N_f_3 + e_N_f_4 + e_N_f_5 + e_N_f_6 + e_N_f_7} `;
          if (e_O_d_1 + e_O_d_2 + e_O_d_3 + e_O_d_4 + e_O_d_5 > 0) config += `5d^${e_O_d_1 + e_O_d_2 + e_O_d_3 + e_O_d_4 + e_O_d_5} `;
          if (e_P_p_1 + e_P_p_2 + e_P_p_3 > 0) config += `6p^${e_P_p_1 + e_P_p_2 + e_P_p_3} `;
          if (e_Q_s > 0) config += `7s^${e_Q_s} `;
          if (e_O_f_1 + e_O_f_2 + e_O_f_3 + e_O_f_4 + e_O_f_5 + e_O_f_6 + e_O_f_7 > 0) config += `5f^${e_O_f_1 + e_O_f_2 + e_O_f_3 + e_O_f_4 + e_O_f_5 + e_O_f_6 + e_O_f_7} `;
          if (e_P_d_1 + e_P_d_2 + e_P_d_3 + e_P_d_4 + e_P_d_5 > 0) config += `6d^${e_P_d_1 + e_P_d_2 + e_P_d_3 + e_P_d_4 + e_P_d_5} `;
          if (e_Q_p_1 + e_Q_p_2 + e_Q_p_3 > 0) config += `7p^${e_Q_p_1 + e_Q_p_2 + e_Q_p_3} `;

          // Render the configuration with superscript for powers
          let x = -textWidth(config)/1.8-200, y = 40; // align text according the size
          
          for (let i = 0; i < config.length; i++) {
            let char = config[i];
            if (char === '^') {
              push();
                textSize(12); // Smaller text for superscript
                if(i + 1 < config.length) {
                  text(config[i + 1]+config[i+2], x, y - 15); // Render superscript slightly above
                  i+=2; // Skip the superscript character for two digit
                }else{
                  text(config[i + 1], x, y - 15); // Render superscript slightly above
                  i++; // Skip the superscript character for signle digit
                }
              pop();
            } else {
              textSize(20); // Normal text size
              text(char, x, y);
            }
            x += textWidth(char); // Adjust x position for next character
          }
          
      pop();

    //ORBITALS ARRANGEMENT 
    push();
      let sub_shell=function(x,y,shell,n_e,t_e,color){
        push();
          translate(x,y);
          push();
            strokeWeight(3);
            stroke(`rgba(${red(color)}, ${green(color)}, ${blue(color)}, ${map(n_e, 0, t_e, 0.1, 0.5)})`);
            noFill();
            circle(20,20,40);
          pop();
          push();
            textSize(16);
            // strokeWeight(6);
            fill(0);
            text(shell,10,20);
            textSize(10);
            text(n_e,16,33);

          pop();
      pop();
      }
      //k shell: 1s
      sub_shell(-300,-315,'1s',e_K_s,2,'blue');
      sub_shell(-70,-315,'K',e_K,2,'black');
      //L shell: 2s,2p
      sub_shell(-300,-270,'2s',e_L_s,2,'red');
      sub_shell(-300+45,-270,'2p',e_L_p_1+e_L_p_2+e_L_p_3,6,'blue');
      sub_shell(-70,-270,'L',e_L,8,'black');
      //M shell: 3s,3p,3d
      sub_shell(-300,-225,'3s',e_M_s,2,'blue');
      sub_shell(-300+45,-225,'3p',e_M_p_1+e_M_p_2+e_M_p_3,6,'red');
      sub_shell(-300+90,-225,'3d',e_M_d_1+e_M_d_2+e_M_d_3+e_M_d_4+e_M_d_5,10,'blue');
      sub_shell(-70,-225,'M',e_M,18,'black');
      //N shell: 4s,4p,4d,4f
      sub_shell(-300,-180,'4s',e_N_s,2,'red');
      sub_shell(-300+45,-180,'4p',e_N_p_1+e_N_p_2+e_N_p_3,6,'blue');
      sub_shell(-300+90,-180,'4d',e_N_d_1+e_N_d_2+e_N_d_3+e_N_d_4+e_N_d_5,10,'red');
      sub_shell(-300+135,-180,'4f',e_N_f_1+e_N_f_2+e_N_f_3+e_N_f_4+e_N_f_5+e_N_f_6+e_N_f_7,14,'blue');
      sub_shell(-70,-180,'N',e_N,32,'black');
      //O shell: 5s,5p,5d,5f
      sub_shell(-300,-135,'5s',e_O_s,2,'blue');
      sub_shell(-300+45,-135,'5p',e_O_p_1+e_O_p_2+e_O_p_3,6,'red');
      sub_shell(-300+90,-135,'5d',e_O_d_1+e_O_d_2+e_O_d_3+e_O_d_4+e_O_d_5,10,'blue');
      sub_shell(-300+135,-135,'5f',e_O_f_1+e_O_f_2+e_O_f_3+e_O_f_4+e_O_f_5+e_O_f_6+e_O_f_7,14,'red');
      sub_shell(-70,-135,'O',e_O,32,'black');
      //P shell: 6s,6p,6d,6f
      sub_shell(-300,-90,'6s',e_P_s,2,'red');
      sub_shell(-300+45,-90,'6p',e_P_p_1+e_P_p_2+e_P_p_3,6,'blue');
      sub_shell(-300+90,-90,'6d',e_P_d_1+e_P_d_2+e_P_d_3+e_P_d_4+e_P_d_5,10,'red');
      sub_shell(-300+135,-90,'6f',e_P_f_1+e_P_f_2+e_P_f_3+e_P_f_4+e_P_f_5+e_P_f_6+e_P_f_7,14,'blue');
      sub_shell(-70,-90,'P',e_P,32,'black');
      //Q shell: 7s,7p,7d,7f
      sub_shell(-300,-45,'7s',e_Q_s,2,'blue');
      sub_shell(-300+45,-45,'7p',e_Q_p_1+e_Q_p_2+e_Q_p_3,6,'red');
      sub_shell(-300+90,-45,'7d',0,10,'blue');
      sub_shell(-300+135,-45,'7f',0,14,'red');
      sub_shell(-70,-45,'Q',e_Q,32,'black');
    pop();
  pop();
}
//-----------------ELECTRON MOVEMENT FUNCTION---------------------------------------------------
function electron_move(X,Y,SCALE){
  push();
    translate(X,Y);
    scale(SCALE)
    textAlign(CENTER);
    textSize(14);
    fill("RGBA(0,0,0,0.8)");
  
    if(e_K>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,100);
        push();
          fill(0);
          noStroke();
          text('K',0,40);
        pop();
      pop();
      for(var i=0;i<e_K;i++){
        circle(50*cos(360*i/e_K+thitha*1.5),50*sin(360*i/e_K+thitha*1.5),20);
        push();
          fill(255);
          text('e',50*cos(360*i/e_K+thitha*1.5),50*sin(360*i/e_K+thitha*1.5));
        pop();
      }
    }
    
    if(e_L>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,180);
        push();
          fill(0);
          noStroke();
          text('L',0,80);
        pop();
      pop();  
      for(var i=0;i<e_L;i++){
        circle(90*cos(360*i/e_L+thitha),90*sin(360*i/e_L+thitha),20);
        push();
          fill(255);
          text('e',90*cos(360*i/e_L+thitha),90*sin(360*i/e_L+thitha));
        pop();
      }
    }
    
    if(e_M>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,260);
        push();
          fill(0);
          noStroke();
          text('M',0,120);
        pop();
      pop();  
      for(var i=0;i<e_M;i++){
        circle(130*cos(360*i/e_M+thitha*0.5),130*sin(360*i/e_M+thitha*0.5),20);
        push();
        fill(255);
        text('e',130*cos(360*i/e_M+thitha*0.5),130*sin(360*i/e_M+thitha*0.5));
        pop();
      }
    }
    
    if(e_N>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,340);
        push();
          fill(0);
          noStroke();
          text('N',0,160);
        pop();
      pop();  
      for(var i=0;i<e_N;i++){
        circle(170*cos(360*i/e_N+thitha*0.3),170*sin(360*i/e_N+thitha*0.3),20);
        push();
          fill(255);
          text('e',170*cos(360*i/e_N+thitha*0.3),170*sin(360*i/e_N+thitha*0.3));
        pop();
      }
    }
    
    if(e_O>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,420);
        push();
          fill(0);
          noStroke();
          text('O',0,200);
        pop();
      pop();  
      for(var i=0;i<e_O;i++){
        circle(210*cos(360*i/e_O+thitha*0.2),210*sin(360*i/e_O+thitha*0.2),20);
        push();
        fill(255);
        text('e',210*cos(360*i/e_O+thitha*0.2),210*sin(360*i/e_O+thitha*0.2));
        pop();
      }
    }
    
    if(e_P>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)");
        strokeWeight(4);
        circle(0,0,500);
        push();
          fill(0);
          noStroke();
          text('P',0,240);
        pop();
      pop();  
      for(var i=0;i<e_P;i++){
        circle(250*cos(360*i/e_P+thitha*0.1),250*sin(360*i/e_P+thitha*0.1),20);
        push();
        fill(255);
        text('e',250*cos(360*i/e_P+thitha*0.1),250*sin(360*i/e_P+thitha*0.1));
        pop();
      }
    }

    if(e_Q>0){
      push();
        noFill();
        stroke("RGBA(0,0,0,0.5)")
        strokeWeight(4);
        circle(0,0,580);
        push();
          fill(0);
          noStroke();
          text('Q',0,280);
        pop();
      pop();  
      for(var i=0;i<e_Q;i++){
        circle(290*cos(360*i/e_Q+thitha*0.05),290*sin(360*i/e_Q+thitha*0.05),20);
        push();
        fill(255);
        text('e',290*cos(360*i/e_Q+thitha*0.05),290*sin(360*i/e_Q+thitha*0.05));
        pop();
      }
    }
    //MAKE NUCLUSE (NEUTRON AND PROTON)
    push();
      textSize(20);
      if(N_p==1){
        push();
          fill('RGBA(255,0,0,0.5)');
          stroke("RGBA(0,0,0,0.5)");
          strokeWeight(2);
          circle(0,0,28);
        pop();
        push();
          fill(255)
          text('p',0,3);
        pop();

      }else if(N_p==2){
        push();
          push();
            strokeWeight(2);
            fill('RGBA(255,0,0,0.5)');
            stroke("RGBA(0,0,0,0.5)");
            circle(-14,0,28);
            circle(14,0,28);
          pop();
          fill(255);
          strokeWeight(1);
          text('p',15,3);
          text('p',-13,3);
        pop();
        push();
          push();
            strokeWeight(2);
            fill('RGBA(0,0,255,0.5)');
            stroke("RGBA(0,0,0,0.5)");
            circle(0,-14,28);
            circle(0,14,28);
          pop();
          fill(255);
          text('n',0,17);
          text('n',0,-11);
        pop();
      }else{
        push();
          push();
            strokeWeight(2);
            fill('RGBA(255,0,0,0.5)');
            stroke("RGBA(0,0,0,0.5)");
            circle(-14*cos(45),-14*sin(45),28);
            circle(-14*cos(135),14*sin(135),28);
            circle(-14,0,28);
            circle(14,0,28);
          pop();
          fill(255);
          strokeWeight(1);
          text('p',15,3);
          text('p',-13,3);
        pop();
        push();
          push();
            strokeWeight(2);
            fill('RGBA(0,0,255,0.5)');
            stroke("RGBA(0,0,0,0.5)");
            circle(14*cos(45),-14*sin(45),28);
            circle(14*cos(135),14*sin(135),28);
            circle(0,-14,28);
            circle(0,14,28);
          pop();
          fill(255);
          text('n',0,17);
          text('n',0,-11);
        pop();
      }
      //NUCLEUS LABEL
      push();
        fill(0);
        noStroke();
        textSize(10);
        textAlign(CENTER);
        text('Nucleus',0,-33);
      pop();
    pop();
  pop();
  
  // increase the value of thitha for moving electron 
  thitha+=0.8;
}
  // ---------------COUNTING: ELECTRON ,PROTON AND NEUTRONS-------------------------------------
function electron_count(X,Y,SCALE){
  push();
    translate(X,Y);
    scale(SCALE);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    push();
      translate(-80,0);
      push();
        strokeWeight(1);
        stroke("RGBA(0,0,0,0.5)");
        fill("RGBA(0,0,0,0.5)");
        circle(0,0,60);
      pop();
      fill(255);
      text('electron',0,0);
      text(N_e,0,20);
    pop();
    push();
      translate(0,0);
      push();
        strokeWeight(1);
        stroke("RGBA(0,0,0,0.5)");
        fill("RGBA(255,0,0,0.5)");
        circle(0,0,60);
      pop();
      fill(255);
      text('proton',0,0);
      text(N_p,0,20);
    pop();
    push();
      translate(80,0);
      push();
        strokeWeight(1);
        stroke("RGBA(0,0,0,0.5)");
        fill("RGBA(0,0,255,0.5)");
        circle(0,0,60);
      pop();
      fill(255);
      text('neutron',0,0);
      text(N_n,0,20);
    pop();
  pop();
}

