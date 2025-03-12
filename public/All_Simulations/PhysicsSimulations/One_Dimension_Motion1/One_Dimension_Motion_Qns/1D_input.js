function input(){

  // --------------------START AND STOP BUTTON-----------------------------------------
    buttonstart=createButton('Start');
    buttonstart.mousePressed(start);
          function start(){                         //run when start button press
            tochala=false;
            buttonstart.html('Stop');
            buttonstart.style('background-color','red');
            buttonstart.mousePressed(stop);
          }
          function stop(){                          //run when stop button press
            tochala=true;
            buttonstart.html('Start');
            buttonstart.style('background-color','green');                                           // show vechile Ocheckbox before start simulation 
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
  let Zoom_IN=createButton('Zoom IN');
  Zoom_IN.mousePressed(Zoomin); 
      function Zoomin(){
          if(Zoom<1.5){
          Zoom=Zoom+0.1;  
          }
      }

  let Zoom_OUT=createButton('Zoom OUT');
  Zoom_OUT.mousePressed(Zoomout); 
      function Zoomout(){
          if(Zoom>0.3){
          Zoom=Zoom-0.1;
          }
      }

  //--------------------------FULL SCREEN BUTTON----------------------------------------------
    let fullbtn=createButton('Full Screen');
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
  //---------------------INPUT SECTION----------------------------------------------------
        let Input=createDiv('INPUT');
        let Observer=createDiv('OBSERVER(YOU)');
        Vel_O_Slider=createSlider(0,30,10);
        Input_Vel_O=createDiv("Velocity :"+Vel_O_Slider.value()+'m/s');
        Acc_O_Slider=createSlider(0,10,0);
        Input_Acc_O=createDiv("Acceleration : "+Acc_O_Slider.value()+'m/s');
        let Vechile=createDiv('VECHILE');
        Vel_Ve_Slider=createSlider(0,30,10);
        Input_Vel_Ve=createDiv("Velocity :"+Vel_Ve_Slider.value()+'m/s');
        Acc_Ve_Slider=createSlider(0,10,0);
        Input_Acc_Ve=createDiv("Acceleration :"+Acc_Ve_Slider.value()+'m/s');
        Dist_Ve_Slider=createSlider(0,200,0);
        Input_Dist_Ve=createDiv("Displacement :"+Dist_Ve_Slider.value()+'m');
        //input hide button
        let Hide_INbtn=createButton('-');
        Hide_INbtn.mousePressed(Hide_IN);
          function Hide_IN(){              //this function run when press Hide button
            Hide_INbtn.html('+');
            Hide_INbtn.style('background-color','transparent');
            Input.hide();
            Observer.hide();
            Vel_O_Slider.hide();
            Acc_O_Slider.hide();
            Vechile.hide();
            Ve_Checkbox.hide();
            Input_Vel_O.hide();
            Input_Acc_O.hide();
            Vel_Ve_Slider.hide();
            Acc_Ve_Slider.hide();
            Dist_Ve_Slider.hide();
            Input_Vel_Ve.hide();
            Input_Acc_Ve.hide();
            Input_Dist_Ve.hide();
            Hide_INbtn.mousePressed(Show_IN);
          }
          function Show_IN(){           //this function run when show press after pressing Hide button
            Input.show();
            Hide_INbtn.html('-');
            Hide_INbtn.style('background-color','lightcoral');
            Input.style('background-color','RGBA(225,225,225,0.8)');
            Observer.show();
            Vel_O_Slider.show();
            Acc_O_Slider.show();
            Vechile.show();
            Ve_Checkbox.show()
            Input_Vel_O.show();
            Input_Acc_O.show();
            Vel_Ve_Slider.show();
            Acc_Ve_Slider.show();
            Dist_Ve_Slider.show();
            Input_Vel_Ve.show();
            Input_Acc_Ve.show();
            Input_Dist_Ve.show();
            Hide_INbtn.mousePressed(Hide_IN);
          }
  //--------------------------OUTPUT SECTION-----------------------------------------------------
      let Output=createDiv('OUTPUT');
      let Observer_Out=createDiv('OBSERVER(YOU)');
      Output_Vel_O=createDiv("Velocity :"+Vel_O_Slider.value()+'m/s');
      Output_Acc_O=createDiv("Acceleration :"+Acc_O_Slider.value()+'m/s²');
      Output_Dist_O=createDiv("Displacement : "+Acc_Ve_Slider.value()+'m');
      let Vechile_Out=createDiv('VECHILE');
      Output_Vel_Ve=createDiv("Velocity :"+Vel_Ve_Slider.value()+'m/s');
      Output_Acc_Ve=createDiv("Acceleration :"+Acc_Ve_Slider.value()+'m/s²');
      Output_Dist_Ve=createDiv("Displacement : "+Acc_Ve_Slider.value()+'m');
      //Vechile checkbox
      Ve_Checkbox = createCheckbox('', false);
      Ve_Checkbox.changed(show_vech);
        function show_vech(){
          Vech_show=this.checked(); 
          if(Vech_show){
            Vechile_Out.show();
            Output_Vel_Ve.show();
            Output_Acc_Ve.show();
            Output_Dist_Ve.show();
            Show_Out();                                   //Unhide output when vechile checkbox is checked
            Output.style('padding-bottom','270px');
          }else{
            Vechile_Out.hide();
            Output_Vel_Ve.hide();
            Output_Acc_Ve.hide();
            Output_Dist_Ve.hide();
            Show_Out();
            Output.style('padding-bottom','150px');

          }
        }
      //output hide button
      let Hide_Outbtn=createButton('-');
      Hide_Outbtn.mousePressed(Hide_Out);
        function Hide_Out(){                    //run when press output hide button
          Hide_Outbtn.html('+');
          Hide_Outbtn.style('background-color','transparent');
          Output.hide();
          Observer_Out.hide();
          Output_Vel_O.hide();
          Output_Acc_O.hide();
          Output_Dist_O.hide();
            Vect_Checkbox.hide();
            Vechile_Out.hide();
            Output_Vel_Ve.hide();
            Output_Acc_Ve.hide();
            Output_Dist_Ve.hide();
          Hide_Outbtn.mousePressed(Show_Out);
        }
        function Show_Out(){                     //run when press output show button
          Hide_Outbtn.html('-');
          Hide_Outbtn.style('background-color','lightcoral');
          Output.show();
          Vect_Checkbox.show();
          Observer_Out.show();
          Output_Vel_O.show();
          Output_Acc_O.show();
          Output_Dist_O.show();
          if(Vech_show){
            Vechile_Out.show();
            Output_Vel_Ve.show();
            Output_Acc_Ve.show();
            Output_Dist_Ve.show();
          }else{
            Vechile_Out.hide();
            Output_Vel_Ve.hide();
            Output_Acc_Ve.hide();
            Output_Dist_Ve.hide();
          }
          Hide_Outbtn.mousePressed(Hide_Out);
        }
  //---------------------VECTORS CHECKBOX----------------------------------------------------
        Vect_Checkbox = createCheckbox('', false);
        Vect_Checkbox.changed(show_vect);
        function show_vect(){
          Vectors_show=this.checked();
        }

  //---------------------THINKVIL QUESTIONS--------------------------------------------------
  //ThinkVil Questions
  let Question_Box=createDiv('');
  let Question=createDiv('Instructions: <br>&nbsp;&nbsp;&nbsp;Press "Previous" and "Next" button for access thinkvil questions <br> &nbsp;&nbsp;&nbsp;Press "show Answer" button for finding correct answer.<br>&nbsp;&nbsp; Solve the questions in your Notebook and take the help of our simuation for better visualization and finding the correct answer');
  let Show_Answer_btn=createButton('Show Answer');
  let Answer;
  Show_Answer_btn.mousePressed(showanswer_fn);
      function showanswer_fn(){
        Show_Answer_btn.html(Answer)
      }
  //-----------Next and previous button---------------------
  let Next_btn=createButton('Next');
  let Q_No=0;
  Next_btn.mousePressed(next_fn);
      function next_fn(){
        Q_No+=1;
        if(Q_No==1){
          Question.html('Q-1: If Observer have, Initial Velocity=20 m/s , Acceleration=0 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the Displacement after 8 sec  ?');
          Show_Answer_btn.html('Show Answer');
          Answer='160 m';
        }else if(Q_No==2){
          Question.html('Q-2: If Observer have, Initial Velocity=10 m/s , Acceleration=5 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the displacement after 10 sec  ?');
          Show_Answer_btn.html('Show Answer');
          Answer='351 m';
        }else if(Q_No==3){
          Question.html('Q-3: If Observer have, Initial Velocity=15 m/s , Acceleration=4 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the Observer velocity after 5 sec');
          Show_Answer_btn.html('Show Answer');
          Answer='34.9 m/s';
        }else if(Q_No==4){
          Question.html('Q-4: If Observer have, Initial Velocity=5 m/s , Acceleration=4 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, After how much time Observer velocity will be 30 m/s ');
          Show_Answer_btn.html('Show Answer');
          Answer='6.3 sec';
        }else if(Q_No==5){
          Question.html('Q-5: If Observer have, Initial Velocity=10 m/s , Acceleration=5 m/s² ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp  Vechile have, Initial Velocity=20 m/s , Acceleration=3 m/s² and initial displacement=100 m ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, Calculate the time period when Observer overtake Vechile ?');
          Show_Answer_btn.html('Show Answer');
          Answer='16.3 sec';
        }else if(Q_No==6){
          Question.html('Q-6: If Observer have, Initial Velocity=10 m/s , Acceleration=4 m/s² ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp  Vechile have, Initial Velocity=30 m/s , Acceleration=3 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, Calculate the time period when Observer and Vechile have same velocity ?');
          Show_Answer_btn.html('Show Answer');
          Answer='20.1 sec';
        }else{
        Q_No-=1;
        }
      }
  let Previous_btn=createButton('Previous');
  Previous_btn.mousePressed(previous_fn);
      function previous_fn(){
        Q_No-=1;
        if(Q_No==1){
          Question.html('Q-1: If Observer have, Initial Velocity=20 m/s , Acceleration=0 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the Displacement after 8 sec  ?');
          Show_Answer_btn.html('Show Answer');
          Answer='160 m';
        }else if(Q_No==2){
          Question.html('Q-2: If Observer have, Initial Velocity=10 m/s , Acceleration=5 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the displacement after 10 sec  ?');
          Show_Answer_btn.html('Show Answer');
          Answer='351 m';
        }else if(Q_No==3){
          Question.html('Q-3: If Observer have, Initial Velocity=15 m/s , Acceleration=4 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then what will be the Observer velocity after 5 sec');
          Show_Answer_btn.html('Show Answer');
          Answer='34.9 m/s';
        }else if(Q_No==4){
          Question.html('Q-4: If Observer have, Initial Velocity=5 m/s , Acceleration=4 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, After how much time Observer velocity will be 30 m/s ');
          Show_Answer_btn.html('Show Answer');
          Answer='6.3 sec';
        }else if(Q_No==5){
          Question.html('Q-5: If Observer have, Initial Velocity=10 m/s , Acceleration=5 m/s² ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp  Vechile have, Initial Velocity=20 m/s , Acceleration=3 m/s² and initial displacement=100 m ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, Calculate the time period when Observer overtake Vechile ?');
          Show_Answer_btn.html('Show Answer');
          Answer='16.3 sec';
        }else if(Q_No==6){
          Question.html('Q-6: If Observer have, Initial Velocity=10 m/s , Acceleration=4 m/s² ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp  Vechile have, Initial Velocity=30 m/s , Acceleration=3 m/s² ,<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then, Calculate the time period when Observer and Vechile have same velocity ?');
          Show_Answer_btn.html('Show Answer');
          Answer='20.1 sec';
        }else{
          Q_No+=1;
        }
      }
  //------Hide button--------------------------------
  let Hide_Qns=createButton('-');
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
      Input.show();
      Hide_Qns.html('-');
      Hide_Qns.style('background-color','lightcoral');
      Question_Box.show();
      Question.show();
      Show_Answer_btn.show();
      Next_btn.show();
      Previous_btn.show();
      Hide_Qns.mousePressed(Hideqns_fn);
    }

// -----------------------RESPONSIVE DESIGN  BIG SCREEN (LAPTOP,DESKTOP,SMARTBOARD)------------------------------------------- 
  ResponsiveBigsize=function ResponsiveBigsize(){
    X_I=width-340;
    Y_I=10;
    X_O=width-340;
    Y_O=340;

    // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(width/2-50,4*height/5).style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
    buttonpause.position(width/2+50,4*height/5).style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');
   
    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(width/2+200,4*height/5+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(width/2+270,4*height/5+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
    
    // ----------------FULL SCREEN Button---------------------
    fullbtn.position(width/2+400,4*height/5+20).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

    // ----------------------INPUTS------------------------------------------
    Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 130px 270px 130px').style('border','1px solid black').style('border-radius','10px');
    Observer.position(X_I+80,Y_I+30).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    //---------------------OBSERVER------------------------------ 
    Vel_O_Slider.position(X_I+180,Y_I+60);
    Input_Vel_O.position(X_I+40,Y_I+60).style('font-size','19px');
    Acc_O_Slider.position(X_I+180,Y_I+90);
    Input_Acc_O.position(X_I+10,Y_I+90).style('font-size','19px');
    // ----------------------VECHILE--------------------------------------------------------------------------------------------------
    Vechile.position(X_I+110,Y_I+137).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_Ve_Slider.position(X_I+180,Y_I+175);
    Ve_Checkbox.position(X_I+220,Y_I+140).style('transform','scale(2)');
    Input_Vel_Ve.position(X_I+40,Y_I+175).style('font-size','19px');
    Acc_Ve_Slider.position(X_I+180,Y_I+205);
    Input_Acc_Ve.position(X_I+10,Y_I+200).style('font-size','19px');
    Dist_Ve_Slider.position(X_I+180,Y_I+235);
    Input_Dist_Ve.position(X_I+10,Y_I+230).style('font-size','19px');
    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
    
  // ----------------OUTPUT------------------------------------------------------------------------------
    Output.position(X_O,Y_O).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 160px 120px').style('border','1px solid black').style('border-radius','10px').style('font-size','20px');
    //-------------------OBSERVER--------------------------------- 
    Observer_Out.position(X_O+90,Y_O+40).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Output_Vel_O.position(X_O+100,Y_O+70).style('font-size','18px');
    Output_Acc_O.position(X_O+70,Y_O+100).style('font-size','18px');
    Output_Dist_O.position(X_O+65,Y_O+130).style('font-size','18px');
    //-------------------VECHILE-----------------------------------
    Vechile_Out.position(X_O+110,Y_O+170).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vechile_Out.hide();    
    Output_Vel_Ve.position(X_O+90,Y_O+200).style('font-size','18px');
    Output_Vel_Ve.hide();
    Output_Acc_Ve.position(X_O+60,Y_O+230).style('font-size','18px');
    Output_Acc_Ve.hide();
    Output_Dist_Ve.position(X_O+55,Y_O+260).style('font-size','18px');
    Output_Dist_Ve.hide();
    Vect_Checkbox.position(X_O+270,Y_O+10).style('transform','scale(2)');

  // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
    Hide_Outbtn.position(X_I+10,Y_I+340).style('background-color','lightcoral').style('border-radius','5px');

  //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
    Question_Box.position(0,0).size(width-360,200).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
    Question.position(50,20).style('font-size','20px').size(width-420,100);
    Show_Answer_btn.position(100,150).style('font-size','20px').style('border','1px solid black');
    Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px');
    Next_btn.position(width-430,150).size(60,30).style('background-color','white').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
    Previous_btn.position(width-500,150).size(60,30).style('background-color','white').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');


  }

// -----------------------RESPONSIVE DESIGN  SMALL SCREEN (SMARTPHONE)------------------------------------------- 
  ResponsiveSmallsize=function ResponsiveSmallsize(){
        X_I=width-280;
        Y_I=10;
        X_O=30;
        Y_O=10;

      // ----------------START AND STOP BUTTON---------------------------------------------
      buttonstart.position(width/2-50,4*height/5).style('background-color','green').style('padding','15px').style('border-radius','30px').style('border','3px solid rgb(0)');
      buttonpause.position(width/2+20,4*height/5).style('background-color','orange').style('padding','15px').style('border-radius','40px').style('border','3px solid rgb(0)');
    
     //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+130,5*height/6-20).style('font-size','12px').style('background-color','lightblue').style('padding','3px').style('border-radius','2px');
      Zoom_OUT.position(width/2+200,5*height/6-20).style('font-size','12px').style('background-color','lightgreen').style('padding','3px').style('border-radius','2px');
    
      // ----------------FULL SCREEN Button---------------------
      fullbtn.position(width/2+130,4*height/5+30).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','2px');

      // ----------------------INPUTS------------------------------------------
      Input.position(X_I,Y_I).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 110px 230px 110px').style('border','1px solid black').style('border-radius','10px');
      Observer.position(X_I+80,Y_I+30).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
      //---------------------OBSERVER------------------------------ 
      Vel_O_Slider.position(X_I+170,Y_I+60).size(100,20);
      Input_Vel_O.position(X_I+40,Y_I+60).style('font-size','17px');
      Acc_O_Slider.position(X_I+170,Y_I+90).size(100,20);
      Input_Acc_O.position(X_I+10,Y_I+90).style('font-size','17px');
      // ----------------------VECHILE--------------------------------------------------------------------------------------------------
      Vechile.position(X_I+110,Y_I+120).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
      Vel_Ve_Slider.position(X_I+170,Y_I+150).size(100,20);
      Input_Vel_Ve.position(X_I+40,Y_I+150).style('font-size','17px');
      Acc_Ve_Slider.position(X_I+170,Y_I+180).size(100,20);
      Input_Acc_Ve.position(X_I+10,Y_I+180).style('font-size','17px');
      Dist_Ve_Slider.position(X_I+170,Y_I+210).size(100,20);
      Input_Dist_Ve.position(X_I+10,Y_I+210).style('font-size','17px');
      // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
      Hide_INbtn.position(X_I+10,Y_I+10).style('background-color','lightcoral').style('border-radius','5px');
      
    // ----------------OUTPUT------------------------------------------------------------------------------
      Output.position(X_O,Y_O).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 80px 150px 80px').style('border','1px solid black').style('border-radius','10px').style('font-size','20px');
      //-------------------OBSERVER--------------------------------- 
      Observer_Out.position(X_O+60,Y_O+40).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
      Output_Vel_O.position(X_O+80,Y_O+70).style('font-size','17px');
      Output_Acc_O.position(X_O+55,Y_O+100).style('font-size','17px');
      Output_Dist_O.position(X_O+50,Y_O+130).style('font-size','17px');
      //-------------------VECHILE-----------------------------------
      Vechile_Out.position(X_O+85,Y_O+170).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
      Vechile_Out.hide();    
      Output_Vel_Ve.position(X_O+80,Y_O+200).style('font-size','17px');
      Output_Vel_Ve.hide();
      Output_Acc_Ve.position(X_O+55,Y_O+230).style('font-size','17px');
      Output_Acc_Ve.hide();
      Output_Dist_Ve.position(X_O+50,Y_O+260).style('font-size','17px');
      Output_Dist_Ve.hide();

    // ------------------ VECHILE CHECKBOX  --------------------------------------------------------------------------
      Ve_Checkbox.position(X_I+210,Y_I+120).style('transform','scale(1.5)');
    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
      Hide_Outbtn.position(X_O+10,Y_O+10).style('background-color','lightcoral').style('border-radius','5px');
      Vect_Checkbox.position(X_O+200,Y_O+10).style('transform','scale(1.5)');

    //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
    Question_Box.position(0,0).size(width-10,180).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
    Question.position(50,20).style('font-size','17px').size(width-50,100);
    Show_Answer_btn.position(100,140).style('font-size','18').style('border','1px solid black');
    Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px');
    Next_btn.position(width-100,140).size(60,30).style('background-color','white').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
    Previous_btn.position(width-180,140).size(60,30).style('background-color','white').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

        
        }
}

    
    