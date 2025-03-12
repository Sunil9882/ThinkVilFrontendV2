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
            Question.html('Q-1:A three masses pully system have masses, Mass A=6 Kg, Mass B=8Kg and Mass C=5 kg, then what will be the acceleration of each block ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acc. A = 2.3 m/s²,Acc. B = 1.5 m/s², Acc. C = 0.8 m/s²';
          }else if(Q_No==2){
            Question.html('Q-2:A In the previous question, what will be the acceleration direction of each block ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acc. A = Downward ,Acc. B = Upward, Acc. C = Downward';
          }else if(Q_No==3){
            Question.html('Q-3:In the previous question, what will be the tension in both ropes ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Tension 1= 45.2 N, Tension 2=90.4 N';
          }else if(Q_No==4){
            Question.html('Q-4: In a three masses pully system ,what will be the relation between Tension 1 and Tension 2 ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Tension 2= 2*Tension 1'
          }else if(Q_No==5){
            Question.html('Q-5: In a three masses pully system ,what will be the relation between Acceleration A, Acceleration B and AccelerationC  ?');
            Show_Answer_btn.html('Show Answer');
            Answer='2*Acceleration B = Acceleration A + Acceleration C <br> (Note: Put all values with direction )' ;
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
            Question.html('Q-1:A three masses pully system have masses, Mass A=6 Kg, Mass B=8Kg and Mass C=5 kg, then what will be the acceleration of each block ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acc. A = 2.3 m/s²,Acc. B = 1.5 m/s², Acc. C = 0.8 m/s²';
          }else if(Q_No==2){
            Question.html('Q-2:A In the previous question, what will be the acceleration direction of each block ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acc. A = Downward ,Acc. B = Upward, Acc. C = Downward';
          }else if(Q_No==3){
            Question.html('Q-3:In the previous question, what will be the tension in both ropes ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Tension 1= 45.2 N, Tension 2=90.4 N';
          }else if(Q_No==4){
            Question.html('Q-4: In a three masses pully system ,what will be the relation between Tension 1 and Tension 2 ?');
            Show_Answer_btn.html('Show Answer');
            Answer='Tension 2= 2*Tension 1'
          }else if(Q_No==5){
            Question.html('Q-5: In a three masses pully system ,what will be the relation between Acceleration A, Acceleration B and AccelerationC  ?');
            Show_Answer_btn.html('Show Answer');
            Answer='2*Acceleration B = Acceleration A + Acceleration C';
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

      let X_I=width-330;
      let Y_I=10;
      let X_O=width-330;
      let Y_O=260;
      
      // ------------------------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(width/2-200,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','20px').style('border-radius','30px');
      buttonpause.position(width/2-100,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','20px').style('border-radius','40px');
      
      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.position(width/2+300,5*height/6+20).style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
      
      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+100,5*height/6+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(width/2+170,5*height/6+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
      
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
      Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
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
        Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
      Question_Box.position(0,0).size(width-360,200).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
      Question.position(50,20).style('font-size','20px').size(width-420,100);
      Show_Answer_btn.position(100,130).style('font-size','20px').style('border','1px solid black');
      Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px');
      Next_btn.position(width-430,150).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
      Previous_btn.position(width-500,150).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
    
    }

    ResponsiveMediumsize=function ResponsiveMediumsize(){
      Zoom=0.8;
      let X_I=width-280;
      let Y_I=10;
      let X_O=40;
      let Y_O=10;
      
      // ------------------------------START AND STOP BUTTON---------------------------------------------
        buttonstart.position(1*width/4-40,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','16px').style('border-radius','30px');
        buttonpause.position(1*width/4+40,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','16px').style('border-radius','40px');
      
      //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(2*width/4-40,5*height/6+10).style('font-size','15px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
        Zoom_OUT.position(2*width/4+40,5*height/6+10).style('font-size','15px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
      
      // ---------FULL SCREEN BUTTON-----------------------
        fullbtn.position(3*width/4,5*height/6+10).style('font-size','15px').style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','2px');
      
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
        Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
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
        Hide_Outbtn.position(X_O+10,Y_O+5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      
      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
        Question_Box.position(0,0).size(width,220).style('background-color','RGBA(225,225,225)').style('border','2px solid black').style('border-radius','10px');
        Question.position(50,20).style('font-size','18px').size(width-100,100);
        Show_Answer_btn.position(100,130).style('font-size','18px').style('border','1px solid black');
        Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
        Next_btn.position(width-100,160).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
        Previous_btn.position(width-180,160).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

    }

    ResponsiveSmallsize=function ResponsiveSmallsize(){
      Zoom=0.6;
      let X_I=width-280;
      let Y_I=10;
      let X_O=40;
      let Y_O=10;
      
      // ------------------------------START AND STOP BUTTON---------------------------------------------
        buttonstart.position(1*width/4-40,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','12px').style('border-radius','30px');
        buttonpause.position(1*width/4+40,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','12px').style('border-radius','40px');
        
      // ---------FULL SCREEN BUTTON-----------------------
        fullbtn.hide();
      
      //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(2*width/4-35,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
        Zoom_OUT.position(2*width/4+35,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
        
      //-------------------INPUTS------------------------
        Input.position(X_I,Y_I).style('font-size','15px').style('border-radius','10px').style('border','1px solid black').style('padding','5px 100px 150px 110px').style('background-color','RGB(225,225,225,0.8)');
        Input_checkbox.position(X_I+190,Y_I+25).style('transform','scale(1.3)');
        MASS_Box.position(X_I+70,Y_I+25).style('font-size','15px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Gravity.position(X_I+30,Y_I+50).style('font-size','15px');
        Mass_A_Slider.position(X_I+140,Y_I+78).size(100,7);
        Mass_A_Div.position(X_I+30,Y_I+75).style('font-size','15px');
        Mass_B_Slider.position(X_I+140,Y_I+103).size(100,7);
        Mass_B_Div.position(X_I+30,Y_I+100).style('font-size','15px');
        Mass_C_Slider.position(X_I+140,Y_I+128).size(100,7);
        Mass_C_Div.position(X_I+30,Y_I+125).style('font-size','15px');
        
      //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
        Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      
      // -------------------OUTPUT----------------------------------
        Output.position(X_O,Y_O).style('font-size','15px').style('border-radius','10px').style('border','1px solid black').style('padding','5px 90px 190px 90px').style('background-color','RGB(225,225,225,0.8)');
        Output_checkbox.position(X_O+200,Y_O+25).style('transform','scale(1.3)');
        ACC_Box.position(X_O+65,Y_O+25).style('font-size','15px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Acc_A_Div.position(X_O+50,Y_O+50).style('font-size','15px');
        Acc_B_Div.position(X_O+50,Y_O+75).style('font-size','15px');
        Acc_C_Div.position(X_O+50,Y_O+100).style('font-size','15px');
        TENSION_Box.position(X_O+85,Y_O+125).style('font-size','15px').style('padding','2px').style('background-color','RGB(160,160,160)');
        Ten_1_Div.position(X_O+65,Y_O+150).style('font-size','15px');
        Ten_2_Div.position(X_O+65,Y_O+175).style('font-size','15px');
        
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
  
  
  
  
  
  