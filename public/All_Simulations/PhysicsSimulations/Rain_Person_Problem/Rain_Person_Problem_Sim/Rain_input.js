function input(){
  let X_I,Y_I,X_O,Y_O;

  // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart=createButton('Start');
    buttonstart.mousePressed(start);
        function start(){
          lets_start=false;
          buttonstart.html('Stop');
          buttonstart.style('background-color','red');
          buttonstart.mousePressed(stop);
        }
        function stop(){
          lets_start=true;
          resume(); //resume the simulation if it is paused
          buttonstart.html('Start');
          buttonstart.style('background-color','green');
          buttonstart.mousePressed(start);
        }

    buttonpause=createButton('Pause');
    buttonpause.mousePressed(pause);
        function pause(){
          buttonpause.style('background-color','yellow');
          buttonpause.html('Resume');
          noLoop();
          buttonpause.mousePressed(resume);
          }
        function resume(){
          buttonpause.style('background-color','orange');
          buttonpause.html('Pause');
          loop();
          buttonpause.mousePressed(pause);
        }

 //---------------Zoom IN and Zoom Out-------------------------
 Zoom_IN=createButton('Zoom IN');
 Zoom_IN.mousePressed(Zoomin); 
     function Zoomin(){
         if(Zoom<1.5){
         Zoom=Zoom+0.1;  
         }
     }

 Zoom_OUT=createButton('Zoom OUT');
 Zoom_OUT.mousePressed(Zoomout); 
     function Zoomout(){
         if(Zoom>0.3){
         Zoom=Zoom-0.1;
         }
     }

// ---------FULL SCREEN BUTTON-----------------------
    fullbtn=createButton('Full Screen');
    fullbtn.mousePressed(fullscreenON); 
        function fullscreenON(){
            fullscreen(true);
            fullbtn.html('Exit Full Screen');
            fullbtn.mousePressed(fullscreenOFF);
        }
        function  fullscreenOFF(){
            fullscreen(false);
            fullbtn.html('Full Screen');
            fullbtn.mousePressed(fullscreenON);
        }

// -------------------SAFE AREA------------------------
    Safe_A_Ceckbox = createCheckbox('Safe Angle', false);
    Safe_A_Ceckbox.changed(safeangle);
          function safeangle(){
            Show_SafeArea=this.checked();
          }

//-------------------INPUTS------------------------
  Input=createDiv('INPUT');
  Input_O_checkbox = createCheckbox('', false);
  Input_O_checkbox.changed(showinput);
    function showinput(){
      Show_inputs=this.checked();
    }
  OBSERVER=createDiv('OBSERVER(YOU)');
  Vel_O_Slider=createSlider(0,10,5);
  Input_Vel_O=createDiv("Velocity :"+Vel_O_Slider.value()+'m/s');
  Ang_O_Slider=createSlider(-30,30,0);
  Input_Ang_O=createDiv("Angle :"+Vel_O_Slider.value()+'°');
  RAINFALL=createDiv('RAINFALL');
  Vel_R_Slider=createSlider(0,10,5);
  Input_Vel_R=createDiv("Velocity :"+Vel_R_Slider.value()+'m/s');
  Ang_R_Slider=createSlider(-30,30,0);
  Input_Ang_R=createDiv("Angle :"+Ang_R_Slider.value()+'°');
//----------------------INPUT HIDE AND SHOW BUTTON--------------------------------------------------
  Hide_INbtn=createButton('-');
  Hide_INbtn.mousePressed(Hide_IN);
      function Hide_IN(){              //this function run when press Hide button
        Hide_INbtn.html('+');
        Hide_INbtn.style('background-color','transparent');
        Input.hide();
        Input_O_checkbox.hide();
        OBSERVER.hide();
        Vel_O_Slider.hide();
        Input_Vel_O.hide();
        Ang_O_Slider.hide();
        Input_Ang_O.hide();
        RAINFALL.hide();
        Vel_R_Slider.hide();
        Input_Vel_R.hide();
        Ang_R_Slider.hide();
        Input_Ang_R.hide();
        Hide_INbtn.mousePressed(Show_IN);
      }
      function Show_IN(){           //this function run when show press after pressing Hide button
        Hide_INbtn.html('-');
        Hide_INbtn.style('background-color','lightcoral');
        Input.show();
        Input_O_checkbox.show();
        OBSERVER.show();
        Vel_O_Slider.show();
        Input_Vel_O.show();
        Ang_O_Slider.show();
        Input_Ang_O.show();
        RAINFALL.show();
        Vel_R_Slider.show();
        Input_Vel_R.show();
        Ang_R_Slider.show();
        Input_Ang_R.show();
        Hide_INbtn.mousePressed(Hide_IN);
      }

// -------------------OUTPUT----------------------------------
  Output=createDiv('OUTPUT');
  // Velocities w.r.t ground
  Vel_W_G=createDiv('Velocity w.r.t ground');
  Out_Rain_Vel_G=createDiv('Rainfall : î + ĵ');
  Out_Obs_Vel_G=createDiv('Observer :  î + ĵ');
  // Velocities w.r.t Observer
  Out_Vel_W_O=createDiv('Velocity w.r.t Observer');
  Out_Rain_Vel_O=createDiv('Rainfall :  î + ĵ');
  Out_Grd_Vel_O=createDiv('Ground :  î + ĵ');
  //checkbox
  Output_Vector_checkbox = createCheckbox('', false);
  Output_Vector_checkbox.changed(showoutput);
    function showoutput(){
      Show_output=this.checked();
    }

//------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
  Hide_Outbtn=createButton('-');
  Hide_Outbtn.mousePressed(Hide_Out);
      function Hide_Out(){                    //run when press output hide button
          Hide_Outbtn.html('+');
          Hide_Outbtn.style('background-color','transparent');
          Output.hide();
          Vel_W_G.hide();
          Out_Rain_Vel_G.hide();
          Out_Obs_Vel_G.hide();
          Out_Vel_W_O.hide();
          Out_Rain_Vel_O.hide();
          Out_Grd_Vel_O.hide();
          Output_Vector_checkbox.hide();
          Hide_Outbtn.mousePressed(Show_Out);
      }
      function Show_Out(){                     //run when press output show button
          Hide_Outbtn.html('-');
          Hide_Outbtn.style('background-color','lightcoral');
          Output.show();
          Vel_W_G.show();
          Out_Rain_Vel_G.show();
          Out_Obs_Vel_G.show();
          Out_Vel_W_O.show();
          Out_Rain_Vel_O.show();
          Out_Grd_Vel_O.show();
          Output_Vector_checkbox.show();
          Hide_Outbtn.mousePressed(Hide_Out);
      }



ResponsiveBigsize=function ResponsiveBigsize(){
  X_I=width-320;
  Y_I=10;
  X_O=width-320;
  Y_O=280;

  // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/5-90,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','17px').style('padding','18px').style('border-radius','30px');
    buttonpause.position(1*width/5,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','17px').style('padding','18px').style('border-radius','40px');

    // -------------------SAFE AREA------------------------
    Safe_A_Ceckbox.position(2*width/5-20,5*height/6+10).style('font-size','15px').style('transform','scale(1.6)'); 

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(3*width/5-45,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(3*width/5+45,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
  
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.show();
    fullbtn.position(4*width/5,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

  //---------------------------------------INPUTS--------------------------------
    Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 220px 120px').style('border-radius','10px').style('border','2px solid black'); 
    Input_O_checkbox.position(X_I+260,Y_I+10).style('transform','scale(2)');
    OBSERVER.position(X_I+80,Y_I+30).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_O_Slider.position(X_I+170,Y_I+60).size(120,20);
    Input_Vel_O.position(X_I+40,Y_I+60).style('font-size','20px');
    Ang_O_Slider.position(X_I+170,Y_I+90).size(120,20);
    Input_Ang_O.position(X_I+60,Y_I+90).style('font-size','20px');
    RAINFALL.position(X_I+110,Y_I+137).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_R_Slider.position(X_I+170,Y_I+175).size(120,20);
    Input_Vel_R.position(X_I+30,Y_I+175).style('font-size','20px');
    Ang_R_Slider.position(X_I+170,Y_I+205).size(120,20);
    Input_Ang_R.position(X_I+50,Y_I+200).style('font-size','20px');

  // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
  Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');

  // ---------------------------------------OUTPUT----------------------------------
  Output.position(X_O,Y_O).style('font-size','20px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 110px 220px 110px').style('background-color','RGBA(225,225,225,0.8)');
  Output_Vector_checkbox.position(X_O+260,Y_O+10).style('transform','scale(2)');
  // Velocities w.r.t ground
  Vel_W_G.position(X_O+65,Y_O+35).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Out_Rain_Vel_G.position(X_O+60,Y_O+70).style('font-size','20px');
  Out_Obs_Vel_G.position(X_O+50,Y_O+100).style('font-size','20px');
  // Velocities w.r.t Observer
  Out_Vel_W_O.position(X_O+60,Y_O+140).style('padding','2px').style('background-color','RGB(160,160,160)');;
  Out_Rain_Vel_O.position(X_O+60,Y_O+170).style('font-size','20px');
  Out_Grd_Vel_O.position(X_O+65,Y_O+200).style('font-size','20px');

  // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
  Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');
}

ResponsiveMediumsize=function ResponsiveMediumsize(){
    Zoom=0.7;
    X_I=width-270;
    Y_I=10;
    X_O=20;
    Y_O=10;

    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/5-90,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','17px').style('padding','18px').style('border-radius','30px');
    buttonpause.position(1*width/5,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','17px').style('padding','18px').style('border-radius','40px');

    // -------------------SAFE AREA------------------------
    Safe_A_Ceckbox.position(2*width/5-20,5*height/6+10).style('font-size','13px').style('transform','scale(1.5)'); 

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(3*width/5-45,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(3*width/5+45,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
  
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.show();
    fullbtn.position(4*width/5,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

    //---------------------------------------INPUTS--------------------------------
    Input.position(X_I,Y_I).style('font-size','17px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 100px 200px 110px').style('border-radius','10px').style('border','2px solid black'); 
    Input_O_checkbox.position(X_I+200,Y_I+5).style('transform','scale(1.3)');
    OBSERVER.position(X_I+60,Y_I+30).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_O_Slider.position(X_I+150,Y_I+62).size(100,10);
    Input_Vel_O.position(X_I+20,Y_I+60).style('font-size','17px');
    Ang_O_Slider.position(X_I+150,Y_I+92).size(100,10);
    Input_Ang_O.position(X_I+50,Y_I+90).style('font-size','17px');
    RAINFALL.position(X_I+90,Y_I+120).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_R_Slider.position(X_I+150,Y_I+152).size(100,10);
    Input_Vel_R.position(X_I+20,Y_I+150).style('font-size','17px');
    Ang_R_Slider.position(X_I+150,Y_I+182).size(100,10);
    Input_Ang_R.position(X_I+50,Y_I+180).style('font-size','17px');

    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');

    // ---------------------------------------OUTPUT----------------------------------
    Output.position(X_O,Y_O).style('font-size','17px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 90px 200px 90px').style('background-color','RGBA(225,225,225,0.8)');
    Output_Vector_checkbox.position(X_O+200,Y_O+5).style('transform','scale(1.3)');
    Vel_W_G.position(X_O+40,Y_O+30).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Out_Rain_Vel_G.position(X_O+40,Y_O+60).style('font-size','17px');
    Out_Obs_Vel_G.position(X_O+55,Y_O+90).style('font-size','17px');
    Out_Vel_W_O.position(X_O+40,Y_O+120).style('font-size','17px').style('padding','2px').style('background-color','RGB(160,160,160)');;
    Out_Rain_Vel_O.position(X_O+40,Y_O+150).style('font-size','17px');
    Out_Grd_Vel_O.position(X_O+50,Y_O+180).style('font-size','17px');

    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');
}

ResponsiveSmallsize=function ResponsiveSmallsize(){
    Zoom=0.7;
    X_I=width-230;
    Y_I=10;
    X_O=20;
    Y_O=10;

    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/5-35,5*height/6).style('font-size','11px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','10px').style('border-radius','30px');
    buttonpause.position(1*width/5+35,5*height/6).style('font-size','11px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','10px').style('border-radius','40px');
    
    // -------------------SAFE AREA------------------------
    Safe_A_Ceckbox.position(2*width/5,5*height/6+10).style('font-size','13px').style('transform','scale(1.1)'); 

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(3*width/5-30,5*height/6+10).style('font-size','11px').style('background-color','lightblue').style('padding','2px').style('border-radius','5px');
    Zoom_OUT.position(3*width/5+30,5*height/6+10).style('font-size','11px').style('background-color','lightgreen').style('padding','2px').style('border-radius','5px');
  
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.hide();

    //---------------------------------------INPUTS--------------------------------
    Input.position(X_I,Y_I).style('font-size','11px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 85px 140px 90px').style('border','1px solid black').style('border-radius','10px'); 
    Input_O_checkbox.position(X_I+160,Y_I+3).style('transform','scale(0.8)');
    OBSERVER.position(X_I+60,Y_I+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_O_Slider.position(X_I+100,Y_I+42).size(100,5);
    Input_Vel_O.position(X_I+20,Y_I+40).style('font-size','11px');
    Ang_O_Slider.position(X_I+100,Y_I+62).size(100,5);
    Input_Ang_O.position(X_I+35,Y_I+60).style('font-size','11px');
    RAINFALL.position(X_I+80,Y_I+80).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_R_Slider.position(X_I+100,Y_I+102).size(100,5);
    Input_Vel_R.position(X_I+20,Y_I+100).style('font-size','11px');
    Ang_R_Slider.position(X_I+100,Y_I+122).size(100,5);
    Input_Ang_R.position(X_I+35,Y_I+120).style('font-size','11px');

    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','11px').style('font-size','10px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');

    // ---------------------------------------OUTPUT----------------------------------
    Output.position(X_O,Y_O).style('font-size','11px').style('border-radius','10px').style('border','1px solid black').style('padding','5px 60px 130px 60px').style('background-color','RGBA(225,225,225,0.8)');
    Output_Vector_checkbox.position(X_O+130,Y_O).style('transform','scale(0.8)');
    Vel_W_G.position(X_O+30,Y_O+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Out_Rain_Vel_G.position(X_O+35,Y_O+40).style('font-size','11px');
    Out_Obs_Vel_G.position(X_O+47,Y_O+60).style('font-size','11px');
    Out_Vel_W_O.position(X_O+25,Y_O+80).style('font-size','11px').style('padding','2px').style('background-color','RGB(160,160,160)');;
    Out_Rain_Vel_O.position(X_O+30,Y_O+100).style('font-size','11px');
    Out_Grd_Vel_O.position(X_O+40,Y_O+120).style('font-size','11px');

    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','11px').style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
}

}