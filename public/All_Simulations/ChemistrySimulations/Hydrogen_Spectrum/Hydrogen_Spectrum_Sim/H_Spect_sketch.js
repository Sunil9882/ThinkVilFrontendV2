//-------------------------CONTROLLER VARIABLES--------------------
let fullbtn,Zoom_IN,Zoom_OUT;
let Zoom=1;
//------------------------INPUT VARIABLES------------------------
let Input_Box,N_1_Div,N_1_Select,N_2_Div,N_2_Select;
let Hide_INbtn;

//---------RESPONSIVE SIZE----------------------------------
let Medium_size=1500;
let Small_size=500;
let ResponsiveBigsize1,ResponsiveMediumsize1,ResponsiveSmallsize1;

let Zoom_In_img,Zoom_Out_img, Full_img,Exit_full_img;;
// function preload(){
//   Zoom_In_img=loadImage('images/Zoom_In.png');
//   Zoom_Out_img=loadImage('images/Zoom_Out.png');
//   Full_img=loadImage('images/Fullscreen.png');
//   Exit_full_img=loadImage('images/Exit_Fullscreen.png');
// }

let Canvas, Dom_elements,full_landscape;
function setup() {
  Canvas=createCanvas(document.documentElement.clientWidth,document.documentElement.clientHeight);
  angleMode(DEGREES);
  input();
  
  if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){
    //-----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
     Dom_elements = [Canvas,fullbtn,Zoom_IN,Zoom_OUT,Hide_INbtn,Input_Box,N_1_Div,N_1_Select,N_2_Div,N_2_Select];
    Dom_elements.forEach(el => el.hide());
    full_landscape=createButton('Tap here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(document.documentElement.clientWidth,document.documentElement.clientHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);

    ResponsiveSmallsize1();
    document.addEventListener("visibilitychange", handleVisibilityChange);                          //when smartphone screen off this will run
  }
  else if(Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth<=Medium_size){
    ResponsiveMediumsize1();

  }
  else if( document.documentElement.clientWidth>Medium_size){
    ResponsiveBigsize1();

  }
}


// --------------FULL SCREEN AND SCREEN OFF SMARTPHONE FUNCTION------------------
function fulllandscape(){
  fullscreen(true);
  screen.orientation.lock("landscape").catch(console.error);
  full_landscape.html('Exit');
  full_landscape.size(25,16).position(1*document.documentElement.clientHeight-50,8.5*document.documentElement.clientWidth/10+5).style('font-size','8px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px').style('border','1px solid black');
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

    // Adjust INputs
    if (document.documentElement.clientHeight<=Small_size && document.documentElement.clientWidth > document.documentElement.clientHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize1();
    } 
    else if (Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth <= Medium_size) {
      ResponsiveMediumsize1();
    } 
    else if (document.documentElement.clientWidth>Medium_size) {
      ResponsiveBigsize1();
    }
}



function draw() {
  clear();
  background(250,250,250);
  fill(255);
  push();
     translate(width/20,0);                //keep to spectrum in the middle
     Spectrum_series(N_1_Select.value(),N_2_Select.value(),Zoom);
  pop();
}

function Spectrum_series(N_1,N_2,Zoom){
  //NAMENUCLATURE
  push();
    translate(0,0.86*height/1);       //adjust the height according different display size
    scale(Zoom);

    push();
      fill(200);
      textSize(25);
      text('HYDROGEN SPECTRUM ',400,-660);
    pop();
    push();
      for(let i=1;i<8;i++){
        push();
          stroke(100);
          strokeWeight(2);
          line(0,-80*i,1000,-80*i);
        pop();
        textSize(18);
        fill(150);
        text('n='+i,10,-80*i-5);
        textSize(12);
        text('E= '+round(-13.6/sq(i),2)+' eV',10,-80*i-25);
      }
      //n=∞ print text instead n=8
      push();
        stroke(100);
        strokeWeight(2);
        line(0,-80*8,1000,-80*8);
      pop();
      textSize(18);
      fill(150);
      text('n= ∞',10,-80*8-5);
      textSize(12);
      text('E= '+0+' eV',10,-80*8-25);
      // textSize(10);
      // text('Higher energy level',10,-80*8-25);
      // text('Lower energy level',10,-80*1+15);
    pop();

    //------WAVELENGTH SPECTRUM------------------------------------
    push();
       translate(50,0);
      //  noStroke();
       fill(10);
       // 90nm to 1000 nm (normalize) distance (0,550)
       rect(0,0,550,80);
       text('90 nm',map(90,90,1000,0,550),-10);
       text('Ultra-violet Spectrum',map(180,90,1000,0,550),-10);
       //visible range
       line(map(380,90,1000,0,550),0,map(380,90,1000,0,550),-5);
       text('380 nm',map(380,90,1000,0,550),-10);
       text('Visible Spectrum',map(500,90,1000,0,550),-10);
       line(map(750,90,1000,0,550),0,map(750,90,1000,0,550),-5);
       text('750 nm',map(720,90,1000,0,550),-10);
       // Infrared
       // wavelength (1000nm to 12500nm ): distance (550 to 950)
       rect(map(1000,1000,12500,550,950),0,400,80);
       text('INFRARED Spectrum',map(2000,1000,12500,550,950),-10);
       line(map(12500,1000,12500,550,950),0,map(12500,1000,12500,550,950),-5);
       text('125000nm',map(11000,1000,12500,550,950),-10);
    
       // MAKE VISIBLE LIGHT SPECTRUM (At absorption time)
       if(N_1<N_2 && N_1==2 ){          
        push();
          translate(map(380,90,1000,0,550),0);
            for(let i=0;i<(map(415,90,1000,0,550)-map(380,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('black'),color('violet'),i/(map(415,90,1000,0,550)-map(380,90,1000,0,550))));
              line(i,0,i,80);
            }

            translate((map(415,90,1000,0,550)-map(380,90,1000,0,550)),0)
            for(let i=0;i<(map(460,90,1000,0,550)-map(415,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('violet'),color('indigo'),i/(map(460,90,1000,0,550)-map(415,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(460,90,1000,0,550)-map(415,90,1000,0,550)),0)
            for(let i=0;i<(map(520,90,1000,0,550)-map(460,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('indigo'),color('blue'),i/(map(520,90,1000,0,550)-map(460,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(520,90,1000,0,550)-map(460,90,1000,0,550)),0)
            for(let i=0;i<(map(565,90,1000,0,550)-map(520,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('blue'),color('green'),i/(map(565,90,1000,0,550)-map(520,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(565,90,1000,0,550)-map(520,90,1000,0,550)),0)
            for(let i=0;i<(map(590,90,1000,0,550)-map(565,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('green'),color('yellow'),i/(map(590,90,1000,0,550)-map(565,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(590,90,1000,0,550)-map(565,90,1000,0,550)),0)
            for(let i=0;i<(map(625,90,1000,0,550)-map(590,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('yellow'),color('orange'),i/(map(625,90,1000,0,550)-map(590,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(625,90,1000,0,550)-map(590,90,1000,0,550)),0)
            for(let i=0;i<(map(740,90,1000,0,550)-map(625,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('orange'),color('red'),i/(map(740,90,1000,0,550)-map(625,90,1000,0,550))));
              line(i,0,i,80);
            }
            translate((map(740,90,1000,0,550)-map(625,90,1000,0,550)),0)
            for(let i=0;i<(map(800,90,1000,0,550)-map(740,90,1000,0,550));i+=0.7){
              stroke(lerpColor(color('red'),color('black'),i/(map(800,90,1000,0,550)-map(740,90,1000,0,550))));
              line(i,0,i,80);
            }
       pop();
       }
          
       //WAVE INSIDE SPECTRUM BOX
        push();
         noFill();
         strokeWeight(2);
         beginShape();
           stroke('RGBA(250,250,250,0.4)');
           let waveLength = 1; 
           for (let i = 0; i < 950; i+=1) {
             let y = 30 * sin((2*i/waveLength) * TWO_PI);
             vertex( i, y+40);
             waveLength+=0.005;
           }
         endShape();
        pop();

        // WRITE THE EMMISION, ABOSORBPTION, AND CONTINOUOUS SPECTRUM
        push();
          translate(620,10);
          textAlign(CENTER);
          fill(150);
          textSize(17);
          if(N_2>N_1){
            text('ABSORPTION SPECTRUM',0,20);
          }else if(N_2<N_1){
            text('EMISSION SPECTRUM',10,20);
          }
        pop();   
    pop();
    

    //-------SPECTRUM LINES SERIES WISE----------------------------
    function S_Vector(color,x,n_1,n_2,spectrum_line){                      //spectrum line is the active spectrum line for perticular n_1 and n_2 value
      push();
        translate(x+100,0);
        noStroke();
        // heighlight the emit spectrum line
        let Emission_wave=0.2;
        let Absorption_wave=0.2;
        let middle_part=0.2;                   //this is for the middle part of vector which shows lines
        if(spectrum_line){
          middle_part=1;
          if(N_1<N_2){
            Absorption_wave=1;
          }else if(N_1>N_2){
            Emission_wave=1;
          }else{
          middle_part=0;
          Absorption_wave=0;
          Emission_wave=0;
          }
        }
        //-------MAKE THE SPECTRUM LINE ARROWS----------------------------------------------------------------
        //down tip
        push();
          let Show_spectrum = color.replace('RGB', 'RGBA').replace(')', `,${Emission_wave})`); // Use the variable value for opacity
          fill(Show_spectrum);
          beginShape();
            vertex(0,-80*min(n_1,n_2));
            vertex(8,-20-80*min(n_1,n_2));
            vertex(2,-16-80*min(n_1,n_2));
            vertex(-2,-16-80*min(n_1,n_2));
            vertex(-8,-20-80*min(n_1,n_2));
          endShape(CLOSE);
        pop();
        //Emmision electron
        push();
          Show_spectrum = color.replace('RGB', 'RGBA').replace(')', `,${Emission_wave})`); // Use the variable value for opacity
          fill(Show_spectrum);
          circle(0,-80*min(n_1,n_2),20);
          fill(255);
          textAlign(CENTER);
          text('e',0,-80*min(n_1,n_2)+2);
        pop();

        //middle part
        push();
        Show_spectrum = color.replace('RGB', 'RGBA').replace(')', `,${middle_part})`); // Use the variable value for opacity
        fill(Show_spectrum);
          fill(Show_spectrum);
          beginShape();
            vertex(0,-16-80*min(n_1,n_2));
            vertex(2,-16-80*min(n_1,n_2));
            vertex(2,16-80*max(n_1,n_2));
            vertex(0,16-80*max(n_1,n_2));
            vertex(-2,16-80*max(n_1,n_2));
            vertex(-2,-16-80*min(n_1,n_2));
          endShape(CLOSE);
        pop();
        //up tip
        push();
          Show_spectrum = color.replace('RGB', 'RGBA').replace(')', `,${Absorption_wave})`); // Use the variable value for opacity
          fill(Show_spectrum);
          beginShape();
            vertex(0,-80*max(n_1,n_2));
            vertex(8,-80*max(n_1,n_2)+20);
            vertex(2,-80*max(n_1,n_2)+16);
            vertex(-2,-80*max(n_1,n_2)+16);
            vertex(-8,-80*max(n_1,n_2)+20);
          endShape(CLOSE);
        pop();
        // Absorbtion electron
        push();
          Show_spectrum = color.replace('RGB', 'RGBA').replace(')', `,${Absorption_wave})`); // Use the variable value for opacity
          fill(Show_spectrum);
          circle(0,-80*max(n_1,n_2),20);
          fill(255);
          textAlign(CENTER);
          text('e',0,-80*max(n_1,n_2)+2);
        pop();
      pop();

       // -------ENERGY AND WAVELENGTH VALUES----------------------------------
       let ENERGY=13.5982852526*(1/sq(n_1)-1/sq(n_2));
       let WAVELENGTH=1240/abs(ENERGY);
       if(spectrum_line){
          push();
            if(ENERGY>0){
              push();
                translate(x+120,-50-80*max(n_1,n_2));
                fill("RGBA(100,100,255,1)");
                noStroke();
                rect(0,0,230,80,20);
                fill(255);
                textSize(15);
                text('ABSORPTION',65,20);
                text('Energy (E) = '+ENERGY.toFixed(2)+' eV',35,42);
                text('Wavelength (λ) = '+WAVELENGTH.toFixed(2)+' nm',20,62);    
              pop();
            }else if(ENERGY<0){
              push();
                translate(x+120,-50-80*min(n_1,n_2));
                fill("RGBA(255,100,100,1)");
                noStroke();
                rect(0,0,230,80,20);
                fill(255);
                textSize(15);
                text('EMISSION',80,20);
                text('Energy (E) = '+ENERGY.toFixed(2)+' eV',35,42);
                text('Wavelength (λ) = '+WAVELENGTH.toFixed(2)+' nm',20,62);    
              pop();
            }

          pop();

          //------ WAVE ANIMATION (Happen only for emission spectrum)--------------------------------------
          if(ENERGY<0){
            push();
              let waveAmplitude = map(abs(ENERGY) * 2, 0, 12, 10, 15); // Amplitude of the wave which changes with energy of the wave
              let waveLength = WAVELENGTH / 1000; // Scale the wavelength for visualization
              let X = -frameCount % 100; // Value that continuously increases and resets after 200
            
              noFill();
              stroke(0, 0, 255);
              strokeWeight(2);
              if(N_1>N_2){
                translate(x+110,-80*min(n_1,n_2));
              }else{
                translate(x+110,-80*max(n_1,n_2));
              }
              rotate(45);
              beginShape();
                stroke(color);
                for (let i = X; i < X+100; i+=0.3) {
                let y = waveAmplitude * sin((i / waveLength) * TWO_PI);
                vertex( i-120, y);
                }
              endShape();
          pop();
          }
          
          //---WAVELENGTH VIEW ARROW ON SPECTRUM--------------------------
          if(spectrum_line){
            if(ENERGY>0){
              push();
                fill(0);
                if(WAVELENGTH<1000){
                  translate(50+map(WAVELENGTH,90,1000,0,550),0);
                }else{
                  translate(50+map(WAVELENGTH,1000,12500,550,950),0);
                }
                beginShape();
                  vertex(0,0);
                  vertex(10,-10);
                  vertex(-10,-10);
                endShape(CLOSE);
                fill(10);
                noStroke();
                rect(-2,0,4,80);
              pop();
            }else if(ENERGY<0){
              push();
                fill(10);
                textAlign(CENTER)
                noStroke();
                if(WAVELENGTH<1000){
                  translate(50+map(WAVELENGTH,90,1000,0,550),0);
                }else{
                  translate(50+map(WAVELENGTH,1000,12500,550,950),0);
                }
                // ARROW SHAPE FOR WAVELENGTH
                beginShape();
                  vertex(0,0);
                  vertex(10,-10);
                  vertex(-10,-10);
                endShape(CLOSE);
                if(n_1==3 && n_2==2){
                  fill('RGB(255, 60, 90)');
                  text('Red',0,100);
                }else if(n_1==4 && n_2==2){
                  fill('RGB(0, 180, 180)');
                  text('Blue-green',0,100);
                }else if(n_1==5 && n_2==2){
                  fill('RGB(100, 0, 200)');
                  text('Blue-violet',0,100);
                }else if(n_1==6 && n_2==2){
                  fill('RGB(131, 0, 181)');
                  text('Violet',0,100);
                }else if(n_1==7 && n_2==2){
                  fill('RGB(40, 0, 110)');
                  text('Dark-violet',0,100);
                }else if(n_1==8 && n_2==2){
                  fill('RGB(20, 0, 80)');
                  text('Dark-violet',0,100);
                }else{
                   text('Not visible',0,100);
                   fill(250);               //bright lines will appear for rest emmission region
                  }
                rect(-2,0,4,80);
              pop();
            }
          }
        }
    }
      // FIXED SPECTRUM LINES HALF OPACITY
      push();
        //Lyman series
        push();
          translate(115,-55);
          fill(0);
          textSize(12);
          text('Lyman series',20,20);
          textSize(10);
            text('Lyη',0,0);
            text('Lyζ',20,0);
            text('Lyε',40,0);
            text('Lyδ',60,0);
            text('Lyγ',80,0);
            text('Lyβ',100,0);
            text('Lyα',120,0);
        pop();
        S_Vector('RGB(100,100,100)',20,1,8,false);
        S_Vector('RGB(100,100,100)',40,1,7,false);
        S_Vector('RGB(100,100,100)',60,1,6,false);
        S_Vector('RGB(100,100,100)',80,1,5,false);
        S_Vector('RGB(100,100,100)',100,1,4,false);
        S_Vector('RGB(100,100,100)',120,1,3,false);
        S_Vector('RGB(100,100,100)',140,1,2,false);
        //Balmer series
        push();
          translate(295,-135);
          fill(0);
          textSize(12);
          text('Balmer series',20,20);
          textSize(10);
            text('Hζ',0,0);
            text('Hε',20,0);
            text('Hδ',40,0);
            text('Hγ',60,0);
            text('Hβ',80,0);
            text('Hα',100,0);
        pop();
        S_Vector('RGB(26, 0, 77)',200,2,8,false);
        S_Vector('RGB(45, 0, 120)',220,2,7,false);
        S_Vector('RGB(131, 0, 181)',240,2,6,false);
        S_Vector('RGB(100, 0, 200)',260,2,5,false);
        S_Vector('RGB(0, 200, 200)',280,2,4,false);
        S_Vector('RGB(255, 50, 100)',300,2,3,false);
        //Paschan series
        push();
          translate(475,-215);
          fill(0);
          textSize(12);
          text('Paschan series',25,20);
          textSize(10);
            text('Pε',20,0);
            text('Pδ',40,0);
            text('Pγ',60,0);
            text('Pβ',80,0);
            text('Pα',100,0);
        pop();
        S_Vector('RGB(100,100,100)',400,3,8,false);
        S_Vector('RGB(100,100,100)',420,3,7,false);
        S_Vector('RGB(100,100,100)',440,3,6,false);
        S_Vector('RGB(100,100,100)',460,3,5,false);
        S_Vector('RGB(100,100,100)',480,3,4,false);
        //Brackett series
        push();
          translate(614,-295);
          fill(0);
          textSize(12);
          text('Brackett series',40,20);
          textSize(10);
            text('Brδ',40,0);
            text('Brγ',60,0);
            text('Brβ',80,0);
            text('Brα',100,0);
        pop();
        S_Vector('RGB(100,100,100)',560,4,8,false);
        S_Vector('RGB(100,100,100)',580,4,7,false);
        S_Vector('RGB(100,100,100)',600,4,6,false);
        S_Vector('RGB(100,100,100)',620,4,5,false);
        // Pfund series
        push();
          translate(734,-375);
          fill(0);
          textSize(12);
          text('Pfund series',55,20);
          textSize(10);
            text('Pfγ',60,0);
            text('Pfβ',80,0);
            text('Pfα',100,0);
        pop();
        S_Vector('RGB(100,100,100)',700,5,8,false);
        S_Vector('RGB(100,100,100)',720,5,7,false);
        S_Vector('RGB(100,100,100)',740,5,6,false);
        // Humphreys series series
        push();
          translate(830,-455);
          fill(0);
          textSize(12);
          text('Humphreys series',55,20);
          textSize(10);
            text('Huβ',80,0);
            text('Huα',100,0);
        pop();
          S_Vector('RGB(100,100,100)',820,6,8,false);
          S_Vector('RGB(100,100,100)',840,6,7,false);
      pop();

      // ACTIVE SPECTRUM LINES FULL OPACITY
      push();
        // Lyman series
        if(min(N_1,N_2)==1){
          S_Vector('RGB(100,100,100)',20*(9-max(N_1,N_2)),N_1,N_2,true);
        }
        //Balmer series
        if(min(N_1,N_2)==2){
          if(N_1==3 || N_2==3){
            S_Vector('RGB(255, 50, 100)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }else if(N_1==4 || N_2==4){
            S_Vector('RGB(0, 200, 200)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }else if(N_1==5 || N_2==5){
            S_Vector('RGB(100, 0, 200)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }else if(N_1==6 || N_2==6){
            S_Vector('RGB(131, 0, 181)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }else if(N_1==7 || N_2==7){
            S_Vector('RGB(45, 0, 120)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }else {
            S_Vector('RGB(26, 0, 77)',20*(18-max(N_1,N_2)),N_1,N_2,true);
          }
        }
        //Paschan series
        if(min(N_1,N_2)==3){
          S_Vector('RGB(100,100,100)',20*(28-max(N_1,N_2)),N_1,N_2,true);
          }
        //Bracket series
        if(min(N_1,N_2)==4){
          S_Vector('RGB(100,100,100)',20*(36-max(N_1,N_2)),N_1,N_2,true);
        }
        // fond series
        if(min(N_1,N_2)==5){
          S_Vector('RGB(100,100,100)',20*(43-max(N_1,N_2)),N_1,N_2,true);
        }
         // Hymphreys series
         if(min(N_1,N_2)==6){
          S_Vector('RGB(100,100,100)',20*(49-max(N_1,N_2)),N_1,N_2,true);
        }
      pop();
      
  pop();
}



