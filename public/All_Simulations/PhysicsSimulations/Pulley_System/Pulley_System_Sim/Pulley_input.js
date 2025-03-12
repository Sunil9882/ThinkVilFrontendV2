function input(){
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

  //-------------------INPUTS------------------------
    Input=createDiv('INPUT');
    MASS_Box=createDiv('MASS SYSTEM');
    Gravity=createDiv("Gravity (g) : "+g+' m/s²');
    Mass_A_Slider=createSlider(1,10,5);
    Mass_A_Div=createDiv("Mass (A) :"+Mass_A_Slider.value()+'kg');
    Mass_B_Slider=createSlider(1,10,5);
    Mass_B_Div=createDiv("Mass (B) :"+Mass_B_Slider.value()+'kg');
    Mass_C_Slider=createSlider(1,10,5);
    Mass_C_Div=createDiv("Mass (C) :"+Mass_C_Slider.value()+'kg');
    Input_checkbox = createCheckbox('', false);
    Input_checkbox.changed(inputcheckbox);
          function inputcheckbox(){
            Show_Input=this.checked();
          }

  //----------------------INPUT HIDE AND SHOW BUTTON--------------------------------------------------
    Hide_INbtn=createButton('-');
    Hide_INbtn.mousePressed(Hide_IN);
        function Hide_IN(){              
          Hide_INbtn.html('+');
          Hide_INbtn.style('background-color','transparent');
          Input.hide();
          MASS_Box.hide();
          Gravity.hide();
          Mass_A_Slider.hide();
          Mass_A_Div.hide();
          Mass_B_Slider.hide();
          Mass_B_Div.hide();
          Mass_C_Slider.hide();
          Mass_C_Div.hide();
          Input_checkbox.hide();
          Hide_INbtn.mousePressed(Show_IN);
        }
        function Show_IN(){          
          Hide_INbtn.html('-');
          Hide_INbtn.style('background-color','lightcoral');
          Input.show();
          Input.show();
          MASS_Box.show();
          Gravity.show();
          Mass_A_Slider.show();
          Mass_A_Div.show();
          Mass_B_Slider.show();
          Mass_B_Div.show();
          Mass_C_Slider.show();
          Mass_C_Div.show();
          Input_checkbox.show();
          Hide_INbtn.mousePressed(Hide_IN);
        }
  // -------------------OUTPUT----------------------------------
    Output=createDiv('OUTPUT');
    Output_checkbox = createCheckbox('', false);
    Output_checkbox.changed(outputcheckbox);
          function outputcheckbox(){
            Show_Out_Vect=this.checked();
          }
    ACC_Box=createDiv('ACCELERATION');
    Acc_A_Div=createDiv("Accelaration A :"+'m/s²');
    Acc_B_Div=createDiv("Accelaration B :"+'m/s²');
    Acc_C_Div=createDiv("Accelaration C :"+'m/s²');
    TENSION_Box=createDiv('TENSION');
    Ten_1_Div=createDiv("Tension 1 :"+'N');
    Ten_2_Div=createDiv("Tension 2 :"+'N');

  //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn=createButton('-');
    Hide_Outbtn.mousePressed(Hide_Out);
        function Hide_Out(){                   
            Hide_Outbtn.html('+');
            Hide_Outbtn.style('background-color','transparent');
            Output.hide();
            ACC_Box.hide();
            Acc_A_Div.hide();
            Acc_B_Div.hide();
            Acc_C_Div.hide();
            TENSION_Box.hide();
            Ten_1_Div.hide();
            Ten_2_Div.hide();
            Output_checkbox.hide();
            Hide_Outbtn.mousePressed(Show_Out);
        }
        function Show_Out(){                     
            Hide_Outbtn.html('-');
            Hide_Outbtn.style('background-color','lightcoral');
            Output.show();
            ACC_Box.show();
            Acc_A_Div.show();
            Acc_B_Div.show();
            Acc_C_Div.show();
            TENSION_Box.show();
            Ten_1_Div.show();
            Ten_2_Div.show();
            Output_checkbox.show();
            Hide_Outbtn.mousePressed(Hide_Out);
        }


    
    ResponsiveBigsize=function ResponsiveBigsize(){
      
      let X_I=width-330;
      let Y_I=10;
      let X_O=width-330;
      let Y_O=260;
      
      // ----------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(2*width/5-70,4*height/5).style('font-size','15px').style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
      buttonpause.position(2*width/5+10,4*height/5).style('font-size','15px').style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');

      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(3*width/5-40,4*height/5+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(3*width/5+40,4*height/5+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

      // ----------------FULL SCREEN Button---------------------
      fullbtn.show();                    //because when scale in laptop 
      fullbtn.position(4*width/5+20,4*height/5+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
      
      //-------------------INPUTS------------------------
      Input.position(X_I,Y_I).style('font-size','20px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 120px 190px 120px').style('background-color','RGB(225,225,225)');
      Input_checkbox.position(X_O+260,Y_I+35).style('transform','scale(1.8)');
      MASS_Box.position(X_I+90,Y_I+35).style('padding','2px').style('background-color','RGB(160,160,160)');
      Gravity.position(X_I+30,Y_I+70).style('font-size','19px');
      Mass_A_Slider.position(X_I+160,Y_I+100).size(120,20);
      Mass_A_Div.position(X_I+30,Y_I+100).style('font-size','19px');
      Mass_B_Slider.position(X_I+160,Y_I+130).size(120,20);
      Mass_B_Div.position(X_I+30,Y_I+130).style('font-size','19px');
      Mass_C_Slider.position(X_I+160,Y_I+160).size(120,20);
      Mass_C_Div.position(X_I+30,Y_I+160).style('font-size','19px');
      
      //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
      Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
      // -------------------OUTPUT----------------------------------
        Output.position(X_O,Y_O).style('font-size','20px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 110px 260px 110px').style('background-color','RGB(225,225,225)');
        Output_checkbox.position(X_O+250,Y_O+35).style('transform','scale(1.8)');
        ACC_Box.position(X_O+80,Y_O+35).style('padding','2px').style('background-color','RGB(160,160,160)');
        Acc_A_Div.position(X_O+60,Y_O+70).style('font-size','19px');
        Acc_B_Div.position(X_O+60,Y_O+100).style('font-size','19px');
        Acc_C_Div.position(X_O+60,Y_O+130).style('font-size','19px');
        TENSION_Box.position(X_O+100,Y_O+170).style('font-size','19px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Ten_1_Div.position(X_O+80,Y_O+210).style('font-size','19px');
        Ten_2_Div.position(X_O+80,Y_O+240).style('font-size','19px');
        
      //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
    }

    ResponsiveMediumsize=function ResponsiveMediumsize(){
      Zoom=0.8;
      let X_I=width-280;
      let Y_I=20;
      let X_O=40;
      let Y_O=20;
      
      // ----------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(2*width/5-70,4*height/5).style('font-size','15px').style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
      buttonpause.position(2*width/5+10,4*height/5).style('font-size','15px').style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');

      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(3*width/5-40,4*height/5+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(3*width/5+40,4*height/5+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

      // ----------------FULL SCREEN Button---------------------
      fullbtn.show();                    //because when scale in laptop 
      fullbtn.position(4*width/5+20,4*height/5+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
      
      //-------------------INPUTS------------------------
        Input.position(X_I,Y_I).style('font-size','18px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 110px 160px 100px').style('background-color','RGB(225,225,225,0.8)');
        Input_checkbox.position(X_I+210,Y_I+30).style('transform','scale(1.4)');
        MASS_Box.position(X_I+70,Y_I+30).style('font-size','17px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Gravity.position(X_I+30,Y_I+60).style('font-size','17px');
        Mass_A_Slider.position(X_I+150,Y_I+85).size(100,20);
        Mass_A_Div.position(X_I+30,Y_I+85).style('font-size','17px');
        Mass_B_Slider.position(X_I+150,Y_I+110).size(100,20);
        Mass_B_Div.position(X_I+30,Y_I+110).style('font-size','17px');
        Mass_C_Slider.position(X_I+150,Y_I+135).size(100,20);
        Mass_C_Div.position(X_I+30,Y_I+135).style('font-size','17px');
      
      //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
      // -------------------OUTPUT----------------------------------
        Output.position(X_O,Y_O).style('font-size','18px').style('border-radius','10px').style('border','2px solid black').style('padding','5px 90px 210px 90px').style('background-color','RGB(225,225,225,0.8)');
        Output_checkbox.position(X_O+210,Y_O+30).style('transform','scale(1.4)');
        ACC_Box.position(X_O+60,Y_O+30).style('font-size','17px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Acc_A_Div.position(X_O+40,Y_O+60).style('font-size','17px');
        Acc_B_Div.position(X_O+40,Y_O+85).style('font-size','17px');
        Acc_C_Div.position(X_O+40,Y_O+110).style('font-size','17px');
        TENSION_Box.position(X_O+90,Y_O+140).style('font-size','17px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Ten_1_Div.position(X_O+60,Y_O+170).style('font-size','17px');
        Ten_2_Div.position(X_O+60,Y_O+195).style('font-size','17px');
        
      //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
    }

    ResponsiveSmallsize=function ResponsiveSmallsize(){
      Zoom=0.6;
      let X_I=width-220;
      let Y_I=20;
      let X_O=40;
      let Y_O=20;
      
      // ------------------------------START AND STOP BUTTON---------------------------------------------
        buttonstart.position(1*width/4-35,5*height/6).style('font-size','11px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','10px').style('border-radius','30px');
        buttonpause.position(1*width/4+35,5*height/6).style('font-size','11px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','10px').style('border-radius','40px');
        
      // ---------FULL SCREEN BUTTON-----------------------
        fullbtn.hide();
      
      //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(2*width/4-35,5*height/6+10).style('font-size','11px').style('background-color','lightblue').style('padding','3px').style('border-radius','5px');
        Zoom_OUT.position(2*width/4+35,5*height/6+10).style('font-size','11px').style('background-color','lightgreen').style('padding','3px').style('border-radius','5px');
        
      //-------------------INPUTS------------------------
        Input.position(X_I,Y_I).style('font-size','11px').style('border-radius','10px').style('border','1px solid black').style('padding','5px 90px 120px 90px').style('background-color','RGB(225,225,225,0.8)');
        Input_checkbox.position(X_I+160,Y_I).style('transform','scale(0.9)');
        MASS_Box.position(X_I+65,Y_I+20).style('font-size','11px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Gravity.position(X_I+20,Y_I+40).style('font-size','11px');
        Mass_A_Slider.position(X_I+100,Y_I+60).size(100,5);
        Mass_A_Div.position(X_I+20,Y_I+60).style('font-size','11px');
        Mass_B_Slider.position(X_I+100,Y_I+80).size(100,5);
        Mass_B_Div.position(X_I+20,Y_I+80).style('font-size','11px');
        Mass_C_Slider.position(X_I+100,Y_I+100).size(100,5);
        Mass_C_Div.position(X_I+20,Y_I+100).style('font-size','11px');
        
      //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      
      // -------------------OUTPUT----------------------------------
        Output.position(X_O,Y_O).style('font-size','11px').style('border-radius','10px').style('border','1px solid black').style('padding','5px 70px 150px 70px').style('background-color','RGB(225,225,225,0.8)');
        Output_checkbox.position(X_O+140,Y_O+2).style('transform','scale(0.9)');
        ACC_Box.position(X_O+50,Y_O+20).style('font-size','11px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Acc_A_Div.position(X_O+40,Y_O+40).style('font-size','11px');
        Acc_B_Div.position(X_O+40,Y_O+60).style('font-size','11px');
        Acc_C_Div.position(X_O+40,Y_O+80).style('font-size','11px');
        TENSION_Box.position(X_O+65,Y_O+100).style('font-size','11px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Ten_1_Div.position(X_O+55,Y_O+120).style('font-size','11px');
        Ten_2_Div.position(X_O+55,Y_O+140).style('font-size','11px');
        
      //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','11px').style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      
    }

  }
  
  
  
  
  
  