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
      Mass_system=createDiv('System Type :');
      System_Type_select = createSelect();
      System_Type_select.option('Two Side');
      System_Type_select.option('One Side');
      Gravity=createDiv("Gravity (g) : "+g+' m/s²');
      Mass_A_Slider=createSlider(1,10,5);
      Mass_A_Div=createDiv("Mass (A) :"+Mass_A_Slider.value()+'kg');
      Angle_A_Slider=createSlider(30,90,45);
      Angle_A_Div=createDiv("Angle (A) :"+Mass_A_Slider.value()+'°');
      Mass_B_Slider=createSlider(1,10,5);
      Mass_B_Div=createDiv("Mass (B) :"+Mass_A_Slider.value()+'kg');
      Angle_B_Slider=createSlider(30,90,45);
      Angle_B_Div=createDiv("Angle (B) :"+Mass_A_Slider.value()+'°');
      Input_checkbox = createCheckbox('', false);
      Input_checkbox.changed(inputcheckbox);
          function inputcheckbox(){
            Input_show=this.checked();
          }
  //----------------------INPUT HIDE AND SHOW BUTTON--------------------------------------------------
    Hide_INbtn=createButton('-');
    Hide_INbtn.mousePressed(Hide_IN);
        function Hide_IN(){              
          Hide_INbtn.html('+');
          Hide_INbtn.style('background-color','transparent');
          Input.hide();
          MASS_Box.hide();
          Mass_system.hide();
          System_Type_select.hide();
          Gravity.hide();
          Mass_A_Slider.hide();
          Mass_A_Div.hide();
          Angle_A_Slider.hide();
          Angle_A_Div.hide();
          Mass_B_Slider.hide();
          Mass_B_Div.hide();
          Angle_B_Slider.hide();
          Angle_B_Div.hide();
          Input_checkbox.hide();
          Hide_INbtn.mousePressed(Show_IN);
        }
        function Show_IN(){          
          Hide_INbtn.html('-');
          Hide_INbtn.style('background-color','lightcoral');
          Input.show();
          MASS_Box.show();
          Mass_system.show();
          System_Type_select.show();
          Gravity.show();
          Mass_A_Slider.show();
          Mass_A_Div.show();
          Angle_A_Slider.show();
          Angle_A_Div.show();
          Mass_B_Slider.show();
          Mass_B_Div.show();
          Angle_B_Slider.show();
          Angle_B_Div.show();
          Input_checkbox.show();
          Hide_INbtn.mousePressed(Hide_IN);
        }
  // -------------------OUTPUT----------------------------------
    Output=createDiv('OUTPUT');
    ACC_Div=createDiv('MASS SYSTEM');
    Acc_AB_Div=createDiv("Accelaration :"+' m/s²');
    Ten_AB_Div=createDiv("Tension :"+'N');
    Output_checkbox = createCheckbox('', false);
    Output_checkbox.changed(outputcheckbox);
      function outputcheckbox(){
        Show_Out_Vect=this.checked();
      }
  //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn=createButton('-');
    Hide_Outbtn.mousePressed(Hide_Out);
        function Hide_Out(){                   
            Hide_Outbtn.html('+');
            Hide_Outbtn.style('background-color','transparent');
            Output.hide();
            ACC_Div.hide();
            Acc_AB_Div.hide();
            Ten_AB_Div.hide();
            Output_checkbox.hide();
            Hide_Outbtn.mousePressed(Show_Out);
        }
        function Show_Out(){                     
            Hide_Outbtn.html('-');
            Hide_Outbtn.style('background-color','lightcoral');
            Output.show();
            ACC_Div.show();
            Acc_AB_Div.show();
            Ten_AB_Div.show();
            Output_checkbox.show();
            Hide_Outbtn.mousePressed(Hide_Out);
        }

  ResponsiveBigsize=function ResponsiveBigsize(){
      let X_I=width-320;
      let Y_I=50;
      let X_O=width-320;
      let Y_O=360;
    
      
      // ------------------------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(1*width/4-45,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','20px').style('border-radius','30px');
      buttonpause.position(1*width/4+45,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','20px').style('border-radius','40px');
      
      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(2*width/4-45,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','4px').style('border-radius','5px');
      Zoom_OUT.position(2*width/4+45,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','4px').style('border-radius','5px');
      
      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.show(); 
      fullbtn.position(3*width/4,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','4px').style('border-radius','5px');
      
      //-------------------INPUTS------------------------
      Input.position(X_I,Y_I).style('font-size','20px').style('border-radius','10px').style('border','2px solid black').style('background-color','RGB(225,225,225)').style('padding','5px 120px 250px 120px');
      Input_checkbox.position(X_I+260,Y_I+10).style('transform','scale(1.8)');
      MASS_Box.position(X_I+90,Y_I+35).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
      Mass_system.position(X_I+30,Y_I+70).style('font-size','19px');
      System_Type_select.position(X_I+160,Y_I+70).style('font-size','16px');
      Gravity.position(X_I+30,Y_I+100).style('font-size','19px');
      Mass_A_Slider.position(X_I+160,Y_I+130).size(120,20);
      Mass_A_Div.position(X_I+30,Y_I+130).style('font-size','19px');
      Angle_A_Slider.position(X_I+160,Y_I+160).size(120,20);
      Angle_A_Div.position(X_I+30,Y_I+160).style('font-size','19px');
      Mass_B_Slider.position(X_I+160,Y_I+190).size(120,20);
      Mass_B_Div.position(X_I+30,Y_I+190).style('font-size','19px');
      Angle_B_Slider.position(X_I+160,Y_I+220).size(120,20);
      Angle_B_Div.position(X_I+30,Y_I+220).style('font-size','19px');
      
      //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
      Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
      
      // -------------------OUTPUT----------------------------------
      Output.position(X_O,Y_O).style('font-size','20px').style('border-radius','10px').style('border','2px solid black').style('background-color','RGB(225,225,225)').style('padding','5px 120px 140px 100px');
      Output_checkbox.position(X_O+260,Y_O+10).style('transform','scale(1.8)');
      ACC_Div.position(X_O+80,Y_O+40).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
      Acc_AB_Div.position(X_O+70,Y_O+80).style('font-size','19px');
      Ten_AB_Div.position(X_O+70,Y_O+110).style('font-size','19px');
      
      //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
      Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px');
      
  }

  ResponsiveMediumsize=function ResponsiveMediumsize(){
    Zoom=0.7;   
    //position
    let X_I=width-270;
    let Y_I=10;
    let X_O=10;
    let Y_O=10;
  
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/4-45,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','20px').style('border-radius','30px');
    buttonpause.position(1*width/4+45,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','20px').style('border-radius','40px');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(2*width/4-45,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','4px').style('border-radius','5px');
    Zoom_OUT.position(2*width/4+45,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','4px').style('border-radius','5px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.show(); 
    fullbtn.position(3*width/4,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','4px').style('border-radius','5px');
    
    //-------------------INPUTS------------------------
    Input.position(X_I,Y_I).style('font-size','18px').style('border-radius','10px').style('border','2px solid black').style('background-color','RGB(225,225,225,0.8)').style('padding','5px 100px 200px 100px');
    Input_checkbox.position(X_I+210,Y_I+30).style('transform','scale(1.5)');
    MASS_Box.position(X_I+70,Y_I+30).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Mass_system.position(X_I+30,Y_I+60).style('font-size','17px');
    System_Type_select.position(X_I+150,Y_I+60).style('font-size','14px');
    Gravity.position(X_I+30,Y_I+85).style('font-size','17px');
    Mass_A_Slider.position(X_I+150,Y_I+110).size(100,20);
    Mass_A_Div.position(X_I+30,Y_I+110).style('font-size','17px');
    Angle_A_Slider.position(X_I+150,Y_I+135).size(100,20);
    Angle_A_Div.position(X_I+30,Y_I+135).style('font-size','17px');
    Mass_B_Slider.position(X_I+150,Y_I+160).size(100,20);
    Mass_B_Div.position(X_I+30,Y_I+160).style('font-size','17px');
    Angle_B_Slider.position(X_I+150,Y_I+185).size(100,20);
    Angle_B_Div.position(X_I+30,Y_I+185).style('font-size','17px');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
    
    // -------------------OUTPUT----------------------------------
    Output.position(X_O,Y_O).style('font-size','18px').style('border-radius','10px').style('border','2px solid black').style('background-color','RGB(225,225,225,0.8)').style('padding','5px 80px 110px 80px');
    Output_checkbox.position(X_O+190,Y_O+30).style('transform','scale(1.5)');
    ACC_Div.position(X_O+50,Y_O+30).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Acc_AB_Div.position(X_O+40,Y_O+60).style('font-size','17px');
    Ten_AB_Div.position(X_O+50,Y_O+90).style('font-size','17px');
    
    //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px');
  }
  
  ResponsiveSmallsize=function ResponsiveSmallsize(){
    Zoom=0.5;   
    //position
    let X_I=width-240;
    let Y_I=20;
    let X_O=20;
    let Y_O=20;
  
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/4-40,5*height/6).style('font-size','11px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','10px').style('border-radius','30px');
    buttonpause.position(1*width/4+40,5*height/6).style('font-size','11px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','10px').style('border-radius','40px');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(2*width/4-35,5*height/6+10).style('font-size','11px').style('background-color','lightblue').style('padding','3px').style('border-radius','5px');
    Zoom_OUT.position(2*width/4+35,5*height/6+10).style('font-size','11px').style('background-color','lightgreen').style('padding','3px').style('border-radius','5px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.hide();

    //-------------------INPUTS------------------------
    Input.position(X_I,Y_I).style('font-size','11px').style('padding','5px 90px 160px 90px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225,0.8)');
    Input_checkbox.position(X_I+160,Y_I).style('transform','scale(0.9)');
    MASS_Box.position(X_I+70,Y_I+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Mass_system.position(X_I+25,Y_I+40).style('font-size','11px');
    System_Type_select.position(X_I+100,Y_I+40).style('font-size','11px');
    Gravity.position(X_I+25,Y_I+60).style('font-size','11px');
    Mass_A_Slider.position(X_I+105,Y_I+80).size(100,5);
    Mass_A_Div.position(X_I+25,Y_I+80).style('font-size','11px');
    Angle_A_Slider.position(X_I+105,Y_I+100).size(100,5);
    Angle_A_Div.position(X_I+25,Y_I+100).style('font-size','11px');
    Mass_B_Slider.position(X_I+105,Y_I+120).size(100,5);
    Mass_B_Div.position(X_I+25,Y_I+120).style('font-size','11px');
    Angle_B_Slider.position(X_I+105,Y_I+140).size(100,5);
    Angle_B_Div.position(X_I+25,Y_I+140).style('font-size','11px');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
    
    // -------------------OUTPUT----------------------------------
    Output.position(X_O,Y_O).style('font-size','11px').style('padding','5px 70px 80px 70px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225,0.8)');
    Output_checkbox.position(X_O+140,Y_O).style('transform','scale(0.9)');
    ACC_Div.position(X_O+55,Y_O+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Acc_AB_Div.position(X_O+40,Y_O+40).style('font-size','11px');
    Ten_AB_Div.position(X_O+50,Y_O+60).style('font-size','11px');
    
    //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
    
  }

}






