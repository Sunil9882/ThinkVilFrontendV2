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

  //---------------------THINKVIL QUESTIONS--------------------------------------------------
    Question_Box=createDiv('');
    Question=createDiv('Instructions: <br>&nbsp;&nbsp;&nbsp;Press "Previous" and "Next" button for access thinkvil questions <br> &nbsp;&nbsp;&nbsp;Press "show Answer" button for finding correct answer.<br>&nbsp;&nbsp; Solve the questions in your Notebook and take the help of our simuation for better visualization and finding the correct answer');
    Show_Answer_btn=createButton('Show Answer');
    Show_Answer_btn.mousePressed(showanswer_fn);
        function showanswer_fn(){
          Show_Answer_btn.html(Answer)
        }
  //-----------Next button-------------------------------------------------------------------
    Next_btn=createButton('Next');
    let Q_No=0;
    Next_btn.mousePressed(next_fn);
        function next_fn(){
          Next_btn.style('background-color','RGBA(200,200,200,0.1)')
          Q_No+=1;
          if(Q_No==1){
            Question.html('Q-1:A One-sided inclined plane system have masses of, Mass A=5Kg, Mass B=6Kg and incline angle=45° ,then, what will be the Acceleration and Tenison in the rope ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 3.8 m/s², Tension=18.9 N';
          }else if(Q_No==2){
            Question.html('Q-2:A Two-sided inclined plane system have masses of, Mass A=6 Kg , Mass B=5Kg and their incline angle=30° and 60° respectively ,then, what will be the Acceleration with direction and Tesnion in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 1.2 m/s² (right direction), Tension=36.8 N';
          }else if(Q_No==3){
            Question.html('Q-3:A Two-sided inclined plane system have masses of, Mass A=8 Kg , Mass B=5Kg and their incline angle=45° and 30° respectively ,then, what will be the Acceleration with direction and Tesnion in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 2.4 m/s² (left direction), Tension=36.4 N';
          }else if(Q_No==4){
            Question.html('Q-4:A Two-sided inclined plane system have masses of, Mass A=8 Kg and their incline angle=30°,then ,what will be mass of Mass B which inclined at angle=90° for no movement in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Mass B=4 Kg';
          }else if(Q_No==5){
            Question.html('Q-5: If both masses have, Mass A=4Kg and Mass B=6Kg hang at both side of the pully (take both inclined angle=90°),then what will be the Acceleration and Tension in the rope ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 2 m/s², Tension= 47 N';
          }else{
          Q_No-=1;
          }
        }
        Next_btn.mouseReleased(nextmousereleased);
        function nextmousereleased(){
          Next_btn.style('background-color','RGBA(200,200,200,0.8)')
        }
  //-------previous button---------------------------------------------------------------------
    Previous_btn=createButton('Previous');
    Previous_btn.mousePressed(previous_fn);
        function previous_fn(){
          Previous_btn.style('background-color','RGBA(100,200,200,0.1)')
          Q_No-=1;
          if(Q_No==1){
            Question.html('Q-1:A One-sided inclined plane system have masses of, Mass A=5Kg, Mass B=6Kg and incline angle=45° ,then, what will be the Acceleration and Tenison in the rope ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 3.8 m/s², Tension=18.9 N';
          }else if(Q_No==2){
            Question.html('Q-2:A Two-sided inclined plane system have masses of, Mass A=6 Kg , Mass B=5Kg and their incline angle=30° and 60° respectively ,then, what will be the Acceleration with direction and Tesnion in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 1.2 m/s² (right direction), Tension=36.8 N';
          }else if(Q_No==3){
            Question.html('Q-3:A Two-sided inclined plane system have masses of, Mass A=8 Kg , Mass B=5Kg and their incline angle=45° and 30° respectively ,then, what will be the Acceleration with direction and Tesnion in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 2.4 m/s² (left direction), Tension=36.4 N';
          }else if(Q_No==4){
            Question.html('Q-4:A Two-sided inclined plane system have masses of, Mass A=8 Kg and their incline angle=30°,then ,what will be mass of Mass B which inclined at angle=90° for no movement in the rope?');
            Show_Answer_btn.html('Show Answer');
            Answer='Mass B=4 Kg';
          }else if(Q_No==5){
            Question.html('Q-5: If both masses have, Mass A=4Kg and Mass B=6Kg hang at both side of the pully (take both inclined angle=90°),then what will be the Acceleration and Tension in the rope ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 2 m/s², Tension= 47 N';
          }else{
            Q_No+=1;
          }
        }
    Previous_btn.mouseReleased(previousemousereleased);
        function previousemousereleased(){
          Previous_btn.style('background-color','RGBA(200,200,200,0.8)')
        }
        //------Hide button--------------------------------
        Hide_Qns=createButton('-');
        Hide_Qns.mousePressed(Hideqns_fn);
          function Hideqns_fn(){              //this function run when press Hide button
            Hide_Qns.html('+');
            Hide_Qns.style('background-color','transparent');
            Question_Box.hide();
            Question.hide();
            Show_Answer_btn.hide();
            Next_btn.hide();
            Previous_btn.hide();
            Hide_Qns.mousePressed(showqns_fn);
          }
          function showqns_fn(){           //this function run when show press after pressing Hide button
            Hide_Qns.html('-');
            Hide_Qns.style('background-color','lightcoral');
            Question_Box.show();
            Question.show();
            Show_Answer_btn.show();
            Next_btn.show();
            Previous_btn.show();
            Hide_Qns.mousePressed(Hideqns_fn);
          }
    

  ResponsiveBigsize=function ResponsiveBigsize(){
      let X_I=width-320;
      let Y_I=50;
      let X_O=width-320;
      let Y_O=360;
    
      // ------------------------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(width/2-100,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','20px').style('border-radius','30px');
      buttonpause.position(width/2,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','20px').style('border-radius','40px');
      
      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.position(width/2+400,5*height/6+20).style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
      
      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+200,5*height/6+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(width/2+270,5*height/6+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
      
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
      
      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
      Question_Box.position(0,0).size(width-360,200).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
      Question.position(50,20).style('font-size','20px').size(width-420,100);
      Show_Answer_btn.position(100,130).style('font-size','20px').style('border','1px solid black');
      Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px');
      Next_btn.position(width-430,150).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
      Previous_btn.position(width-500,150).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
    
  }

  ResponsiveMediumsize=function ResponsiveMediumsize(){
    Zoom=0.7;   
    //position
    let X_I=width-270;
    let Y_I=10;
    let X_O=40;
    let Y_O=10;
  
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/4-45,5*height/6).style('font-size','17px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','18px').style('border-radius','30px');
    buttonpause.position(1*width/4+45,5*height/6).style('font-size','17px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','18px').style('border-radius','40px');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(2*width/4-45,5*height/6+10).style('font-size','17px').style('background-color','lightblue').style('padding','4px').style('border-radius','3px');
    Zoom_OUT.position(2*width/4+45,5*height/6+10).style('font-size','17px').style('background-color','lightgreen').style('padding','4px').style('border-radius','3px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.position(3*width/4,5*height/6+10).style('font-size','17px').style('background-color','RGB(225,225,225)').style('padding','4px').style('border-radius','3px');
    
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
 
    //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
     Question_Box.position(0,0).size(width,220).style('background-color','RGBA(225,225,225)').style('border','2px solid black').style('border-radius','10px');
     Question.position(50,20).style('font-size','18px').size(width-100,100);
     Show_Answer_btn.position(100,130).style('font-size','18px').style('border','1px solid black');
     Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
     Next_btn.position(width-100,160).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
     Previous_btn.position(width-180,160).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

  }
  
  ResponsiveSmallsize=function ResponsiveSmallsize(){
    Zoom=0.5;   
    //position
    let X_I=width-270;
    let Y_I=10;
    let X_O=10;
    let Y_O=10;
  
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/4-40,5*height/6).style('font-size','13px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','13px').style('border-radius','30px');
    buttonpause.position(1*width/4+40,5*height/6).style('font-size','13px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','13px').style('border-radius','40px');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(2*width/4-35,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','3px').style('border-radius','3px');
    Zoom_OUT.position(2*width/4+35,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','3px').style('border-radius','3px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.hide();

    //-------------------INPUTS------------------------
    Input.position(X_I,Y_I).style('font-size','15px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225,0.8)').style('padding','5px 100px 200px 110px');
    Input_checkbox.position(X_I+195,Y_I+25).style('transform','scale(1.5)');
    MASS_Box.position(X_I+70,Y_I+25).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Mass_system.position(X_I+30,Y_I+55).style('font-size','15px');
    System_Type_select.position(X_I+140,Y_I+55).style('font-size','13px');
    Gravity.position(X_I+30,Y_I+80).style('font-size','15px');
    Mass_A_Slider.position(X_I+140,Y_I+110).size(100,7);
    Mass_A_Div.position(X_I+30,Y_I+105).style('font-size','15px');
    Angle_A_Slider.position(X_I+140,Y_I+135).size(100,7);
    Angle_A_Div.position(X_I+30,Y_I+130).style('font-size','15px');
    Mass_B_Slider.position(X_I+140,Y_I+160).size(100,7);
    Mass_B_Div.position(X_I+30,Y_I+155).style('font-size','15px');
    Angle_B_Slider.position(X_I+140,Y_I+185).size(100,7);
    Angle_B_Div.position(X_I+30,Y_I+180).style('font-size','15px');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
    
    // -------------------OUTPUT----------------------------------
    Output.position(X_O,Y_O).style('font-size','15px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225,0.8)').style('padding','5px 80px 110px 80px');
    Output_checkbox.position(X_O+180,Y_O+30).style('transform','scale(1.5)');
    ACC_Div.position(X_O+55,Y_O+30).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Acc_AB_Div.position(X_O+40,Y_O+65).style('font-size','15px');
    Ten_AB_Div.position(X_O+50,Y_O+90).style('font-size','15px');
    
    //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
    
    //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
     Question_Box.position(0,0).size(width,180).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
     Question.position(50,20).style('font-size','15px').size(width-100,100);
     Show_Answer_btn.position(100,115).style('font-size','15px').style('border','1px solid black');
     Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
     Next_btn.position(width-100,140).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
     Previous_btn.position(width-180,140).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

  }

}






