function input(){
  let X_I,Y_I,X_O,Y_O;

 // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart=createButton('Start');
     buttonstart.mousePressed(start);
         function start(){
           tochala=false;
           buttonstart.html('Stop');
           buttonstart.style('background-color','red');
           buttonstart.mousePressed(stop);
         }
         function stop(){
           tochala=true;
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
 // ----------------PATH TRACE FUNCTIONS ---------------------------
   Show_path = createCheckbox('Path trace', false);
   Show_path.changed(showvalue);
       function showvalue(){
         show_path=this.checked();
       }
 //----------------SHOW COMPONENT-------------------------------
 Show_Comp = createCheckbox('Component', false);
 Show_Comp.changed(myCheckedEvent);
     function myCheckedEvent(){
       show_component=this.checked();
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
 
 //-------------------INPUTS-----------------------------------------------
   Input=createDiv('INPUT');
   //------------CANNON--------------------------------------
   CANNON=createDiv('CANNON');
   Input_Cannon_checkbox = createCheckbox('', false);
   Input_Cannon_checkbox.changed(showcannoninput);
     function showcannoninput(){
       Show_Cannon_Input=this.checked();
     }
     Higt_Cannon_Slider=createSlider(0,30,0);
     Input_Higt_Cannon=createDiv("Height :"+Higt_Cannon_Slider.value()+'m');
     Vel_Cannon_Slider=createSlider(0,30,10);
     Input_Vel_Cannon=createDiv("Velocity :"+Vel_Cannon_Slider.value()+'m/s');
     Ang_Cannon_Slider=createSlider(0,90,45);
     Input_Ang_Cannon=createDiv("Angle :"+Ang_Cannon_Slider.value()+'°');
 //----------------------INPUT HIDE AND SHOW BUTTON--------------------------------------------------
     Hide_INbtn=createButton('-');
     Hide_INbtn.mousePressed(Hide_IN);
         function Hide_IN(){              //this function run when press Hide button
           Hide_INbtn.html('+');
           Hide_INbtn.style('background-color','transparent');
           Input.hide();
           CANNON.hide();
           Input_Cannon_checkbox.hide();
           Higt_Cannon_Slider.hide();
           Input_Higt_Cannon.hide();
           Vel_Cannon_Slider.hide();
           Input_Vel_Cannon.hide();
           Ang_Cannon_Slider.hide();
           Input_Ang_Cannon.hide();
           Hide_INbtn.mousePressed(Show_IN);
         }
         function Show_IN(){           //this function run when show press after pressing Hide button
           Input.show();
           Hide_INbtn.html('-');
           Hide_INbtn.style('background-color','lightcoral');
           Input.show();
           CANNON.show();
           Input_Cannon_checkbox.show();
           Higt_Cannon_Slider.show();
           Input_Higt_Cannon.show();
           Vel_Cannon_Slider.show();
           Input_Vel_Cannon.show();
           Ang_Cannon_Slider.show();
           Input_Ang_Cannon.show();
           Hide_INbtn.mousePressed(Hide_IN);
         }
 
 
 // -------------------OUTPUT----------------------------------
   Output=createDiv('OUTPUT');
   //-------------INSTANT--------------------------------------------------
   INSTANT=createDiv('INSTANT');
   Output_Instant_checkbox = createCheckbox('', false);
   Output_Instant_checkbox.changed(Instantoutput);
       function Instantoutput(){
         Show_Instant_Output=this.checked();
       }
   Output_Instant_Vel=createDiv("Velocity :"+Vel_Cannon_Slider.value()+'m/s');
   Output_Instant_Higt=createDiv("Height :"+Higt_Cannon_Slider.value()+'m');
   //----------------AT END----------------------------------------------------
   END=createDiv('AT END');
   Output_End_checkbox = createCheckbox('', false);
   Output_End_checkbox.changed(Endoutput);
       function Endoutput(){
         Show_End_Output=this.checked();
       }
   Output_Range=createDiv('Range :');
   Output_MaxH=createDiv('Max. Height :');
 
 //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
   Hide_Outbtn=createButton('-');
   Hide_Outbtn.mousePressed(Hide_Out);
       function Hide_Out(){                    //run when press output hide button
           Hide_Outbtn.html('+');
           Hide_Outbtn.style('background-color','transparent');
           Output.hide();
           INSTANT.hide();
           Output_Instant_checkbox.hide();
           Output_Instant_Vel.hide();
           Output_Instant_Higt.hide();
           END.hide();
           Output_End_checkbox.hide();
           Output_Range.hide();
           Output_MaxH.hide();
           Hide_Outbtn.mousePressed(Show_Out);
       }
       function Show_Out(){                     //run when press output show button
           Hide_Outbtn.html('-');
           Hide_Outbtn.style('background-color','lightcoral');
           Output.show();
           INSTANT.show();
           Output_Instant_checkbox.show();
           Output_Instant_Vel.show();
           Output_Instant_Higt.show();
           END.show();
           Output_End_checkbox.show();
           Output_Range.show();
           Output_MaxH.show();
           Hide_Outbtn.mousePressed(Hide_Out);
       }
 
 
   ResponsiveBigsize=function ResponsiveBigsize(){
     X_I=width-320;
     Y_I=10;
     X_O=width-320;
     Y_O=220;
 
      // ----------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(2*width/6-50,5*height/6).style('font-size','15px').style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
      buttonpause.position(2*width/6+50,5*height/6).style('font-size','15px').style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');
      
      // ---------------- PATH TRACE FUNCTIONS ---------------------------
      Show_Comp.position(3*width/6+20,5*height/6).style('font-size','15px').style('transform','scale(1.8)');
      Show_path.position(3*width/6+20,5*height/6+50).style('font-size','15px').style('transform','scale(1.8)');
  
      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(4*width/6+20,5*height/6+10).style('font-size','14px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(4*width/6+100,5*height/6+10).style('font-size','14px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
    
      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.position(5*width/6+30,5*height/6+10).style('font-size','15px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
  
     //-------------------INPUTS-----------------------------------------------
     Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 160px 120px').style('border','2px solid black').style('border-radius','10px');
     CANNON.position(X_I+110,Y_I+35).style('font-size','20px').style('padding','2px').style('background-color','RGB(160,160,160)');
     Input_Cannon_checkbox.position(X_I+250,Y_I+35).style('transform','scale(2)');
     Higt_Cannon_Slider.position(X_I+170,Y_I+70).style('font-size','20px').size(120,20);
     Input_Higt_Cannon.position(X_I+40,Y_I+70).style('font-size','20px');
     Vel_Cannon_Slider.position(X_I+170,Y_I+100).size(120,20);
     Input_Vel_Cannon.position(X_I+30,Y_I+100).style('font-size','20px');
     Ang_Cannon_Slider.position(X_I+170,Y_I+130).size(120,20);
     Input_Ang_Cannon.position(X_I+50,Y_I+130).style('font-size','20px');
 
     //----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
     Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
 
     // -------------------OUTPUT----------------------------------
     Output.position(X_O,Y_O).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 240px 100px').style('border','2px solid black').style('border-radius','10px');
     //-------------INSTANT--------------------------------------------------
     INSTANT.position(X_O+100,Y_O+40).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
     Output_Instant_checkbox.position(X_O+200,Y_O+40).style('font-size','20px').style('transform','scale(1.8)');
     Output_Instant_Vel.position(X_O+80,Y_O+70).style('font-size','20px');
     Output_Instant_Higt.position(X_O+80,Y_O+100).style('font-size','20px');
     //----------------AT END----------------------------------------------------
     END.position(X_O+110,Y_O+140).style('font-size','20px').style('padding','2px').style('background-color','RGB(160,160,160)');;
     Output_End_checkbox.position(X_O+200,Y_O+140).style('font-size','20px').style('transform','scale(1.8)');
     Output_Range.position(X_O+100,Y_O+170).style('font-size','20px');
     Output_MaxH.position(X_O+70,Y_O+200).style('font-size','20px');
 
    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
     Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px');
 
   }
 
   ResponsiveMediumsize=function ResponsiveMediumsize(){
     Zoom=0.7
     X_I=width-300;
     Y_I=10;
     X_O=20;
     Y_O=10;
 
     // ----------------START AND STOP BUTTON---------------------------------------------
     buttonstart.position(2*width/6-40,5*height/6).style('font-size','15px').style('background-color','green').style('padding','16px').style('border-radius','30px').style('border','3px solid rgb(0)');
     buttonpause.position(2*width/6+40,5*height/6).style('font-size','15px').style('background-color','orange').style('padding','16px').style('border-radius','40px').style('border','3px solid rgb(0)');
     
     // ---------------- PATH TRACE FUNCTIONS ---------------------------
     Show_Comp.position(3*width/6+20,5*height/6).style('font-size','13px').style('transform','scale(1.4)');
     Show_path.position(3*width/6+20,5*height/6+30).style('font-size','13px').style('transform','scale(1.4)');
 
     //--------------Zoom IN and OUT--------------------------------
     Zoom_IN.position(4*width/6+20,5*height/6-10).style('font-size','14px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
     Zoom_OUT.position(4*width/6+100,5*height/6-10).style('font-size','14px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
   
     // ---------FULL SCREEN BUTTON-----------------------
     fullbtn.position(4*width/6+30,5*height/6+30).style('font-size','15px').style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','2px');
 
     //-------------------INPUTS-----------------------------------------------
     Input.position(X_I,Y_I).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 110px 150px 110px').style('border','1px solid black').style('border-radius','10px');
     CANNON.position(X_I+100,Y_I+30).style('font-size','18px').style('padding','2px').style('background-color','RGB(160,160,160)');
     Input_Cannon_checkbox.position(X_I+210,Y_I+35).style('transform','scale(1.6)');
     Higt_Cannon_Slider.position(X_I+160,Y_I+70).size(100,7);
     Input_Higt_Cannon.position(X_I+30,Y_I+65).style('font-size','18px');
     Vel_Cannon_Slider.position(X_I+160,Y_I+100).size(100,7);
     Input_Vel_Cannon.position(X_I+20,Y_I+95).style('font-size','18px');
     Ang_Cannon_Slider.position(X_I+160,Y_I+130).size(100,7);
     Input_Ang_Cannon.position(X_I+40,Y_I+125).style('font-size','18px');
 
     // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
     Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
 
     // -------------------OUTPUT----------------------------------
     Output.position(X_O,Y_O).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 100px 220px 100px').style('border','1px solid black').style('border-radius','10px');
     //-------------INSTANT--------------------------------------------------
     INSTANT.position(X_O+90,Y_O+35).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
     Output_Instant_checkbox.position(X_O+200,Y_O+40).style('font-size','18px').style('transform','scale(1.6)');
     Output_Instant_Vel.position(X_O+80,Y_O+70).style('font-size','18px');
     Output_Instant_Higt.position(X_O+80,Y_O+100).style('font-size','18px');
     //----------------AT END----------------------------------------------------
     END.position(X_O+100,Y_O+140).style('font-size','18px').style('padding','2px').style('background-color','RGB(160,160,160)');;
     Output_End_checkbox.position(X_O+200,Y_O+140).style('font-size','18px').style('transform','scale(1.6)');
     Output_Range.position(X_O+80,Y_O+170).style('font-size','18px');
     Output_MaxH.position(X_O+60,Y_O+200).style('font-size','18px');
 
    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
     Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
 
   }
   
   ResponsiveSmallsize=function ResponsiveSmallsize(){
    Zoom=0.5;
     X_I=width-260;
     Y_I=10;
     X_O=20;
     Y_O=10;

    // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(2*width/6-40,5*height/6-10).style('font-size','12px').style('background-color','green').style('padding','10px').style('border-radius','20px').style('border','3px solid rgb(0)');
    buttonpause.position(2*width/6+40,5*height/6-10).style('font-size','12px').style('background-color','orange').style('padding','10px').style('border-radius','30px').style('border','3px solid rgb(0)');
    
    // ---------------- PATH TRACE FUNCTIONS ---------------------------
    Show_Comp.position(3*width/6+20,5*height/6-10).style('font-size','15px').style('transform','scale(1)');
    Show_path.position(3*width/6+20,5*height/6+20).style('font-size','15px').style('transform','scale(1)');

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(4*width/6+30,5*height/6-10).style('font-size','12px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
    Zoom_OUT.position(4*width/6+100,5*height/6-10).style('font-size','12px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.hide();
    
     //-------------------INPUTS-----------------------------------------------
     Input.position(X_I,Y_I).style('font-size','15px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 100px 125px 100px').style('border','1px solid black').style('border-radius','10px');
     CANNON.position(X_I+90,Y_I+25).style('font-size','15px').style('padding','2px').style('background-color','RGB(160,160,160)');
     Input_Cannon_checkbox.position(X_I+180,Y_I+25).style('transform','scale(1.5)');
     Higt_Cannon_Slider.position(X_I+135,Y_I+60).size(100,7);
     Input_Higt_Cannon.position(X_I+30,Y_I+55).style('font-size','15px');
     Vel_Cannon_Slider.position(X_I+135,Y_I+85).size(100,7);
     Input_Vel_Cannon.position(X_I+20,Y_I+80).style('font-size','15px');
     Ang_Cannon_Slider.position(X_I+135,Y_I+110).size(100,7);
     Input_Ang_Cannon.position(X_I+35,Y_I+105).style('font-size','15px');
 
     // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
     Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
 
     // -------------------OUTPUT----------------------------------
     Output.position(X_O,Y_O).style('font-size','15px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 80px 165px 80px').style('border','1px solid black').style('border-radius','10px');
     //-------------INSTANT--------------------------------------------------
     INSTANT.position(X_O+80,Y_O+25).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
     Output_Instant_checkbox.position(X_O+170,Y_O+25).style('font-size','15px').style('transform','scale(1.5)');
     Output_Instant_Vel.position(X_O+60,Y_O+55).style('font-size','15px');
     Output_Instant_Higt.position(X_O+70,Y_O+75).style('font-size','15px');
     //----------------AT END----------------------------------------------------
     END.position(X_O+80,Y_O+100).style('font-size','15px').style('padding','2px').style('background-color','RGB(160,160,160)');;
     Output_End_checkbox.position(X_O+170,Y_O+100).style('font-size','15px').style('transform','scale(1.5)');
     Output_Range.position(X_O+70,Y_O+130).style('font-size','15px');
     Output_MaxH.position(X_O+50,Y_O+150).style('font-size','15px');
 
    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
     Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
 
   }
   
 
 
 }