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
            if(Zoom<2){
            Zoom=Zoom+0.1;  
            }
        }
    
    Zoom_OUT=createButton('Zoom OUT');
    Zoom_OUT.mousePressed(Zoomout); 
        function Zoomout(){
            if(Zoom>0.5){
            Zoom=Zoom-0.1;
            }
        }
   
    //----------------------------INPUTS-------------------------------------------
      Force_Box=createDiv('FORCE');
      Force_Slider=createSlider(0,100,0);
      Force_Div=createDiv('Force : '+Force_Slider.value()+' N');
      Angle_force_Slider=createSlider(0,90,0);
      Angle_force_Div=createDiv('Angle : '+Angle_force_Slider.value()+'°');
      Force_type = createRadio();
      Force_type.option('Push');
      Force_type.option('Pull');
      Force_type.selected('Push');
      Force_checkbox = createCheckbox('', false);
      Force_checkbox.changed(forcecheckbox);
            function forcecheckbox(){
              Force_show=this.checked();
            }
  
  //---------------------INPUT ---------------------------------------
    Input=createDiv('INPUT');
    Mass_block_Div=createDiv('MASS BLOCK');
    Gravity_Div=createDiv(' Gravity : '+'9.8 m/s²');
    Mass_Slider=createSlider(1,10,1);
    Mass_Div=createDiv('Mass : '+Mass_Slider.value()+' Kg');
    Friction_Div=createDiv('FRICTION');
    Static_const_Slider=createSlider(0,1,0,0.01);
    Static_const_Slider.changed(staticslider);
        function staticslider(){                  //Static coeff always greater then kinetic coeff
          if(Kinetic_const_Slider.value()>Static_const_Slider.value()){
            Kinetic_const_Slider.value(Static_const_Slider.value());
          }
        }    
    Static_const_Div=createDiv('Static co-eff. : '+Static_const_Slider.value());
    Kinetic_const_Slider=createSlider(0,0.99,0,0.01);
    Kinetic_const_Slider.changed(kineticslider);  
        function kineticslider(){             //Static coeff always greater then kinetic coeff      
          if(Kinetic_const_Slider.value()>Static_const_Slider.value()){
            Static_const_Slider.value(Kinetic_const_Slider.value());
        }
        }
    Kinetic_const_Div=createDiv('Kinetic co-eff. : '+Kinetic_const_Slider.value());
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
          Mass_block_Div.hide();
          Gravity_Div.hide();
          Mass_Slider.hide();
          Mass_Div.hide();
          Friction_Div.hide();
          Static_const_Slider.hide();
          Static_const_Div.hide();
          Kinetic_const_Slider.hide();
          Kinetic_const_Div.hide();
          Input_checkbox.hide();
          Hide_INbtn.mousePressed(Show_IN);
        }
        function Show_IN(){          
          Hide_INbtn.html('-');
          Hide_INbtn.style('background-color','lightcoral');
          Input.show();
          Mass_block_Div.show();
          Gravity_Div.show();
          Mass_Slider.show();
          Mass_Div.show();
          Friction_Div.show();
          Static_const_Slider.show();
          Static_const_Div.show();
          Kinetic_const_Slider.show();
          Kinetic_const_Div.show();
          Input_checkbox.show();
          Hide_INbtn.mousePressed(Hide_IN);
        }
  
  //---------------------------------OUTPUT---------------------------------------
    Output=createDiv('OUTPUT');
    Output_Mass_block_Div=createDiv('MASS BLOCK');
    Output_Acc_Div=createDiv('Acceleration : ');
    Output_Normal_Div=createDiv('Normal Force : ');
    Output_Friction_Div=createDiv('Friction Force : ');
    Output_MaxF_Div=createDiv('Max Friction Force : ');
    Output_checkbox = createCheckbox('', false);
    Output_checkbox.changed(output);
      function output(){
        Output_Vector_show=this.checked();
      }
    
  //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_Outbtn=createButton('-');
    Hide_Outbtn.mousePressed(Hide_Out);
        function Hide_Out(){                   
            Hide_Outbtn.html('+');
            Hide_Outbtn.style('background-color','transparent');
            Output.hide();
            Output_Mass_block_Div.hide()
            Output_Acc_Div.hide();
            Output_Normal_Div.hide();
            Output_Friction_Div.hide();
            Output_MaxF_Div.hide();
            Output_checkbox.hide();
            Hide_Outbtn.mousePressed(Show_Out);
        }
        function Show_Out(){                     
            Hide_Outbtn.html('-');
            Hide_Outbtn.style('background-color','lightcoral');
            Output.show();
            Output_Mass_block_Div.show();
            Output_Acc_Div.show();
            Output_Normal_Div.show();
            Output_Friction_Div.show();
            Output_MaxF_Div.show();
            Output_checkbox.show();
            Hide_Outbtn.mousePressed(Hide_Out);
        }
    
 //---------------------THINKVIL QUESTIONS--------------------------------------------------
    Question_Box=createDiv('');
    Question = createDiv('Instructions:<br>&nbsp;&nbsp;&nbsp; Press the "Hide (-)" button in the upper left corner to hide the questions.<br>&nbsp;&nbsp;&nbsp; Press the "Previous" and "Next" buttons to access Thinkvil questions.<br>&nbsp;&nbsp;&nbsp; Press the "Show Answer" button to view the correct answer.<br>&nbsp;&nbsp;&nbsp; Solve the questions in your notebook and use our simulation for better visualization and to find the correct answer.');
    Show_Answer_btn=createButton('Show Answer');
    Show_Answer_btn.hide();
    Show_Answer_btn.mousePressed(showanswer_fn);
        function showanswer_fn(){
          Show_Answer_btn.html(Answer)
        }
  //-----------Next button-------------------------------------------------------------------
    Next_btn=createButton('Next');
    let Q_No=0;
    Next_btn.mousePressed(next_fn);
        function next_fn(){
          Next_btn.style('background-color','RGBA(200,200,200,0.1)');
          Show_Answer_btn.show();
          Q_No+=1;
          if(Q_No==1){
            Question.html('Q-1: In a block-mass system, a block has a mass of 5 kg, and an applied force (pull or push) of 50 N is acting in the horizontal direction. What will be the acceleration and the normal force of the block?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 10 m/s², Normal Force= 49 N';
          }else if(Q_No==2){
              Question.html('Q-2: In a block-mass system, a block has a mass of 5 kg, and an applied push force of 50 N is acting at an angle of 30° from the horizontal direction. What will be the acceleration and the normal force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.7 m/s², Normal Force= 74 N';
          }else if(Q_No==3){
              Question.html('Q-3: If, in the previous question, we change the push force to a pull force, what will be the acceleration and the normal force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.7 m/s², Normal Force= 24 N';
          }else if(Q_No==4){
              Question.html('Q-4: In a block-mass system, a block has a mass of 8 kg, and an applied force (pull or push) of 40 N is acting in the horizontal direction. If the surface has static and kinetic friction coefficients of 0.7 and 0.5, respectively, what will be the acceleration, normal force, friction force, and maximum friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 0 m/s², Normal Force= 78.4 N, Friction Force= 40 N, Max. Friction Force= 54.9 N';
          }else if(Q_No==5){
              Question.html('Q-5: In the previous question, if we change the applied force to 60 N, what will be the acceleration, normal force, friction force, and maximum friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 2.6 m/s², Normal Force= 78.4 N, Friction Force= 39.2 N, Max. Friction Force= 39.2 N';
          }else if(Q_No==6){
              Question.html('Q-6: In a block-mass system, a block has a mass of 6 kg, and an applied push force of 70 N is acting at an angle of 30° from the horizontal direction. If the surface has static and kinetic friction coefficients of 0.6 and 0.5, respectively, what will be the acceleration, normal force, and friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 2.3 m/s², Normal Force= 93.8 N, Friction Force= 46.9 N';
          }else if(Q_No==7){
              Question.html('Q-7: In the previous question, if we change the push force to a pull force, what will be the acceleration, normal force, and friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.1 m/s², Normal Force= 23.8 N, Friction Force= 11.9 N';
          }
          else{
          Q_No-=1;
          }
        }
        Next_btn.mouseReleased(nextmousereleased);
        function nextmousereleased(){
          Next_btn.style('background-color','RGBA(200,200,200,0.8)')
        }
  //-------------previous button---------------------------------------------------------------------
    Previous_btn=createButton('Previous');
    Previous_btn.mousePressed(previous_fn);
        function previous_fn(){
          Previous_btn.style('background-color','RGBA(100,200,200,0.1)')
          Q_No-=1;
          if(Q_No==1){
            Question.html('Q-1: In a block-mass system, a block has a mass of 5 kg, and an applied force (pull or push) of 50 N is acting in the horizontal direction. What will be the acceleration and the normal force of the block?');
            Show_Answer_btn.html('Show Answer');
            Answer='Acceleration = 10 m/s², Normal Force= 49 N';
          }else if(Q_No==2){
              Question.html('Q-2: In a block-mass system, a block has a mass of 5 kg, and an applied push force of 50 N is acting at an angle of 30° from the horizontal direction. What will be the acceleration and the normal force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.7 m/s², Normal Force= 74 N';
          }else if(Q_No==3){
              Question.html('Q-3: If, in the previous question, we change the push force to a pull force, what will be the acceleration and the normal force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.7 m/s², Normal Force= 24 N';
          }else if(Q_No==4){
              Question.html('Q-4: In a block-mass system, a block has a mass of 8 kg, and an applied force (pull or push) of 40 N is acting in the horizontal direction. If the surface has static and kinetic friction coefficients of 0.7 and 0.5, respectively, what will be the acceleration, normal force, friction force, and maximum friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 0 m/s², Normal Force= 78.4 N, Friction Force= 40 N, Max. Friction Force= 54.9 N';
          }else if(Q_No==5){
              Question.html('Q-5: In the previous question, if we change the applied force to 60 N, what will be the acceleration, normal force, friction force, and maximum friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 2.6 m/s², Normal Force= 78.4 N, Friction Force= 39.2 N, Max. Friction Force= 39.2 N';
          }else if(Q_No==6){
              Question.html('Q-6: In a block-mass system, a block has a mass of 6 kg, and an applied push force of 70 N is acting at an angle of 30° from the horizontal direction. If the surface has static and kinetic friction coefficients of 0.6 and 0.5, respectively, what will be the acceleration, normal force, and friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 2.3 m/s², Normal Force= 93.8 N, Friction Force= 46.9 N';
          }else if(Q_No==7){
              Question.html('Q-7: In the previous question, if we change the push force to a pull force, what will be the acceleration, normal force, and friction force of the block?');
              Show_Answer_btn.html('Show Answer');
              Answer='Acceleration = 8.1 m/s², Normal Force= 23.8 N, Friction Force= 11.9 N';
          }
          else{
            Q_No+=1;
          }
        }
    Previous_btn.mouseReleased(previousemousereleased);
        function previousemousereleased(){
          Previous_btn.style('background-color','RGBA(200,200,200,0.8)')
        }
  //--------------Hide button--------------------------------
  Hide_Qns=createButton('-');
  Hide_Qns.mousePressed(Hideqns_fn);
    function Hideqns_fn(){              
      Hide_Qns.html('+');
      Hide_Qns.style('background-color','transparent');
      Question_Box.hide();
      Question.hide();
      Show_Answer_btn.hide();
      Next_btn.hide();
      Previous_btn.hide();
      Hide_Qns.mousePressed(showqns_fn);
    }
    function showqns_fn(){          
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
    let X_I=width-350;
    let Y_I=10;
    let X_O=width-350;
    let Y_O=300;
    //force Box
    let X_force=width/2-200;
    let Y_force=4*height/5;
    
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(width/2-500,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','20px').style('border-radius','30px');
    buttonpause.position(width/2-400,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','20px').style('border-radius','40px');
  
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.position(width/2+500,5*height/6+20).style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(width/2+300,5*height/6+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(width/2+370,5*height/6+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
    
    //----------------------------FORCE INPUTS-------------------------------------------
    Force_Box.position(X_force,Y_force).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 230px 90px 160px').style('border-radius','10px').style('border','1px solid black'); 
    Force_type.position(X_force+280,Y_force+5).style('transform', 'scale(1.3)');
    Force_Div.position(X_force+60,Y_force+40).style('font-size','20px');
    Force_Slider.position(X_force+180,Y_force+40).size(200,20);
    Angle_force_Div.position(X_force+120,Y_force+70).style('font-size','20px');
    Angle_force_Slider.position(X_force+220,Y_force+70).size(120,20);
    Force_checkbox.position(X_force+410,Y_force+10).style('transform','scale(1.8)');
    
    //---------------------------------------INPUTS-----------------------------------------
    Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 130px 230px 130px').style('border-radius','10px').style('border','2px solid black'); 
    Mass_block_Div.position(X_I+100,Y_I+30).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Gravity_Div.position(X_I+50,Y_I+70).style('font-size','20px');
    Mass_Slider.position(X_I+190,Y_I+100).size(110,20);
    Mass_Div.position(X_I+60,Y_I+100).style('font-size','20px');
    Friction_Div.position(X_I+110,Y_I+140).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Static_const_Slider.position(X_I+190,Y_I+180).size(110,20);
    Static_const_Div.position(X_I+35,Y_I+180).style('font-size','20px');
    Kinetic_const_Slider.position(X_I+190,Y_I+210).size(110,20);
    Kinetic_const_Div.position(X_I+20,Y_I+210).style('font-size','20px');
    Input_checkbox.position(X_I+260,Y_I+30).style('transform','scale(1.8)');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
          
    //---------------------------------------OUTPUT-----------------------------------------
    Output.position(X_O,Y_O).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 180px 120px').style('border-radius','10px').style('border','2px solid black'); 
    Output_checkbox.position(X_O+260,Y_O+30).style('transform','scale(1.8)');
    Output_Mass_block_Div.position(X_O+100,Y_O+30).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');;
    Output_Acc_Div.position(X_O+80,Y_O+60).style('font-size','20px');
    Output_Normal_Div.position(X_O+70,Y_O+90).style('font-size','20px');
    Output_Friction_Div.position(X_O+70,Y_O+120).style('font-size','20px');
    Output_MaxF_Div.position(X_O+50,Y_O+150).style('font-size','20px');
  
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
    Zoom=0.8;
    //Locations
    let X_I=width-280;
    let Y_I=10;
    let X_O=10;
    let Y_O=10;
    let X_force=3*width/6-190;
    let Y_force=5*height/6-30;
    
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/6-100,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','16px').style('border-radius','30px');
    buttonpause.position(1*width/6-20,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','16px').style('border-radius','40px');
  
    //----------------------------FORCE INPUTS-------------------------------------------
    Force_Box.position(X_force,Y_force).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 190px 80px 140px').style('border-radius','10px').style('border','1px solid black'); 
    Force_type.position(X_force+220,Y_force+5).style('transform', 'scale(1)');
    Force_checkbox.position(X_force+350,Y_force+5).style('transform','scale(1.3)');
    Force_Div.position(X_force+40,Y_force+30).style('font-size','17px');
    Force_Slider.position(X_force+150,Y_force+35).size(150,10);
    Angle_force_Div.position(X_force+40,Y_force+60).style('font-size','17px');
    Angle_force_Slider.position(X_force+150,Y_force+65).size(120,10);
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(5*width/6-40,5*height/6-10).style('font-size','15px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
    Zoom_OUT.position(5*width/6+30,5*height/6-10).style('font-size','15px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.position(5*width/6-20,5*height/6+30).style('font-size','15px').style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','2px');
    
    //---------------------------------------INPUTS-----------------------------------------
    Input.position(X_I,Y_I).style('font-size','17px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 100px 190px 110px').style('border-radius','10px').style('border','2px solid black'); 
    Input_checkbox.position(X_I+200,Y_I+30).style('transform','scale(1.3)');
    Mass_block_Div.position(X_I+70,Y_I+30).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Gravity_Div.position(X_I+50,Y_I+60).style('font-size','17px');
    Mass_Slider.position(X_I+160,Y_I+90).size(100,10);
    Mass_Div.position(X_I+50,Y_I+85).style('font-size','17px');
    Friction_Div.position(X_I+90,Y_I+120).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Static_const_Slider.position(X_I+160,Y_I+155).size(100,10);
    Static_const_Div.position(X_I+15,Y_I+150).style('font-size','16px');
    Kinetic_const_Slider.position(X_I+160,Y_I+180).size(100,10);
    Kinetic_const_Div.position(X_I+10,Y_I+175).style('font-size','16px');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
          
    //---------------------------------------OUTPUT-----------------------------------------
    Output.position(X_O,Y_O).style('font-size','17px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 90px 170px 90px').style('border-radius','10px').style('border','2px solid black'); 
    Output_checkbox.position(X_O+200,Y_O+30).style('transform','scale(1.3)');
    Output_Mass_block_Div.position(X_O+70,Y_O+30).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');;
    Output_Acc_Div.position(X_O+50,Y_O+60).style('font-size','17px');
    Output_Normal_Div.position(X_O+40,Y_O+90).style('font-size','17px');
    Output_Friction_Div.position(X_O+40,Y_O+120).style('font-size','17px');
    Output_MaxF_Div.position(X_O+30,Y_O+150).style('font-size','17px');
  
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
    Zoom=0.5;
    //Locations
    let X_I=width-300;
    let Y_I=10;
    let X_O=10;
    let Y_O=10;
    //force Box
    let X_force=(2*width/6-30);
    let Y_force=4*height/5-5;
    
    // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/6-80,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','11px').style('border-radius','30px');
    buttonpause.position(1*width/6-10,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','11px').style('border-radius','40px');
  
    //----------------------------FORCE INPUTS-------------------------------------------
    Force_Box.position(X_force,Y_force).style('font-size','15px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 180px 50px 100px').style('border-radius','10px').style('border','1px solid black'); 
    Force_type.position(X_force+180,Y_force+5).style('transform', 'scale(0.9)');
    Force_Div.position(X_force+40,Y_force+25).style('font-size','15px');
    Force_Slider.position(X_force+150,Y_force+30).size(120,7);
    Angle_force_Div.position(X_force+40,Y_force+45).style('font-size','15px');
    Angle_force_Slider.position(X_force+150,Y_force+50).size(100,7);
    Force_checkbox.position(X_force+300,Y_force+5).style('transform','scale(1.3)');
    
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(5*width/6-40,5*height/6-10).style('font-size','12px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
    Zoom_OUT.position(5*width/6+30,5*height/6-10).style('font-size','12px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
    
    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.hide();
    
    //---------------------------------------INPUTS-----------------------------------------
    Input.position(X_I,Y_I).style('font-size','15px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 110px 170px 110px').style('border-radius','10px').style('border','1px solid black'); 
    Mass_block_Div.position(X_I+80,Y_I+25).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Gravity_Div.position(X_I+50,Y_I+50).style('font-size','15px');
    Mass_Slider.position(X_I+155,Y_I+80).size(100,7);
    Mass_Div.position(X_I+50,Y_I+75).style('font-size','15px');
    Friction_Div.position(X_I+90,Y_I+100).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Static_const_Slider.position(X_I+155,Y_I+130).size(100,7);
    Static_const_Div.position(X_I+20,Y_I+125).style('font-size','15px');
    Kinetic_const_Slider.position(X_I+155,Y_I+155).size(100,7);
    Kinetic_const_Div.position(X_I+10,Y_I+150).style('font-size','15px');
    Input_checkbox.position(X_I+200,Y_I+25).style('transform','scale(1.3)');
    
    //------------------------INPUT HIDE AND SHOW BUTTON-----------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
          
    //---------------------------------------OUTPUT-----------------------------------------
    Output.position(X_O,Y_O).style('font-size','15px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 90px 150px 90px').style('border-radius','10px').style('border','1px solid black'); 
    Output_Mass_block_Div.position(X_O+70,Y_O+25).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');;
    Output_Acc_Div.position(X_O+50,Y_O+55).style('font-size','15px');
    Output_Normal_Div.position(X_O+50,Y_O+80).style('font-size','15px');
    Output_Friction_Div.position(X_O+50,Y_O+105).style('font-size','15px');
    Output_MaxF_Div.position(X_O+40,Y_O+130).style('font-size','15px');
    Output_checkbox.position(X_O+180,Y_O+25).style('transform','scale(1.3)');
  
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
  
  
  
  