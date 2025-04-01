function input(){

  // --------------------START AND STOP BUTTON-----------------------------------------
    buttonstart=createButton('Start');
    buttonstart.mousePressed(start);
          function start(){                         //run when start button press
            lets_start=false;
            buttonstart.html('Stop');
            buttonstart.style('background-color','red');
            buttonstart.mousePressed(stop);
          }
          function stop(){                          //run when stop button press
            lets_start=true;
            resume(); //resume the simulation if it is paused
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
  //---------------Zoom IN and Zoom Out-----------------------------------------------------
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

  //--------------------------FULL SCREEN BUTTON----------------------------------------------
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
  //---------------------INPUT SECTION----------------------------------------------------
        Input=createDiv('INPUT');
        Observer=createDiv('OBSERVER(YOU)');
        Vel_O_Slider=createSlider(0,30,10);
        Input_Vel_O=createDiv("Velocity :"+Vel_O_Slider.value()+'m/s');
        Acc_O_Slider=createSlider(0,10,0);
        Input_Acc_O=createDiv("Acceleration : "+Acc_O_Slider.value()+'m/s');
        Vechile=createDiv('VEHICLE');
        Vel_Ve_Slider=createSlider(0,30,10);
        Input_Vel_Ve=createDiv("Velocity :"+Vel_Ve_Slider.value()+'m/s');
        Acc_Ve_Slider=createSlider(0,10,0);
        Input_Acc_Ve=createDiv("Acceleration :"+Acc_Ve_Slider.value()+'m/s');
        Dist_Ve_Slider=createSlider(0,200,0);
        Input_Dist_Ve=createDiv("Displacement :"+Dist_Ve_Slider.value()+'m');
        //input hide button
        Hide_INbtn=createButton('-');
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
      Output=createDiv('OUTPUT');
      Observer_Out=createDiv('OBSERVER(YOU)');
      Output_Vel_O=createDiv("Velocity :"+Vel_O_Slider.value()+'m/s');
      Output_Acc_O=createDiv("Acceleration :"+Acc_O_Slider.value()+'m/s²');
      Output_Dist_O=createDiv("Displacement : "+Acc_Ve_Slider.value()+'m');
      Vechile_Out=createDiv('VEHICLE');
      Output_Vel_Ve=createDiv("Velocity :"+Vel_Ve_Slider.value()+'m/s');
      Output_Acc_Ve=createDiv("Acceleration :"+Acc_Ve_Slider.value()+'m/s²');
      Output_Dist_Ve=createDiv("Displacement : "+Acc_Ve_Slider.value()+'m');
      //Vechile checkbox
      Ve_Checkbox = createCheckbox('', false);
    
      //output hide button
      Hide_Outbtn=createButton('-');
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

  // -----------------------RESPONSIVE DESIGN  BIG SCREEN (LAPTOP,DESKTOP,SMARTBOARD)------------------------------------------- 
  ResponsiveBigsize=function ResponsiveBigsize(){
    X_I=width-340;
    Y_I=10;
    X_O=width-340;
    Y_O=340;

    // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(2*width/5-70,4*height/5).style('font-size','15px').style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
    buttonpause.position(2*width/5+10,4*height/5).style('font-size','15px').style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(3*width/5-40,4*height/5+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(3*width/5+40,4*height/5+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

    // ----------------FULL SCREEN Button---------------------
    fullbtn.show();                    //because when scale in laptop 
    fullbtn.position(4*width/5+20,4*height/5+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

    // ----------------------INPUTS------------------------------------------
    Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 130px 270px 130px').style('border','2px solid black').style('border-radius','10px');
    Observer.position(X_I+90,Y_I+30).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    //---------------------OBSERVER------------------------------ 
    Vel_O_Slider.position(X_I+180,Y_I+60);
    Input_Vel_O.position(X_I+40,Y_I+60).style('font-size','19px');
    Acc_O_Slider.position(X_I+180,Y_I+90);
    Input_Acc_O.position(X_I+10,Y_I+90).style('font-size','19px');
    // ----------------------VECHILE--------------------------------------------------------------------------------------------------
    Vechile.position(X_I+110,Y_I+137).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_Ve_Slider.position(X_I+180,Y_I+175);
    Input_Vel_Ve.position(X_I+40,Y_I+175).style('font-size','19px');
    Acc_Ve_Slider.position(X_I+180,Y_I+205);
    Input_Acc_Ve.position(X_I+10,Y_I+200).style('font-size','19px');
    Dist_Ve_Slider.position(X_I+180,Y_I+235);
    Input_Dist_Ve.position(X_I+10,Y_I+230).style('font-size','19px');
    Ve_Checkbox.position(X_I+220,Y_I+140).style('transform','scale(2)');
    Ve_Checkbox.changed(show_vech);
          function show_vech(){
            Vech_show=this.checked(); 
            if(Vech_show){
              Vechile_Out.show();
              Output_Vel_Ve.show();
              Output_Acc_Ve.show();
              Output_Dist_Ve.show();
              Show_Out();                                   //Unhide output when vechile checkbox is checked
              Output.style('padding-bottom','280px');
            }else{
              Vechile_Out.hide();
              Output_Vel_Ve.hide();
              Output_Acc_Ve.hide();
              Output_Dist_Ve.hide();
              Show_Out();
              Output.style('padding-bottom','150px');

            }
          }
    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
    Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','15px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
    
    // ----------------OUTPUT------------------------------------------------------------------------------
    Output.position(X_O,Y_O).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 160px 120px').style('border','2px solid black').style('border-radius','10px').style('font-size','20px');
    //-------------------OBSERVER--------------------------------- 
    Observer_Out.position(X_O+90,Y_O+40).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Output_Vel_O.position(X_O+100,Y_O+70).style('font-size','19px');
    Output_Acc_O.position(X_O+70,Y_O+100).style('font-size','19px');
    Output_Dist_O.position(X_O+65,Y_O+130).style('font-size','19px');
    //-------------------VECHILE-----------------------------------
    Vechile_Out.position(X_O+110,Y_O+170).style('font-size','19px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vechile_Out.hide();    
    Output_Vel_Ve.position(X_O+90,Y_O+200).style('font-size','19px');
    Output_Vel_Ve.hide();
    Output_Acc_Ve.position(X_O+60,Y_O+230).style('font-size','19px');
    Output_Acc_Ve.hide();
    Output_Dist_Ve.position(X_O+55,Y_O+260).style('font-size','19px');
    Output_Dist_Ve.hide();
    Vect_Checkbox.position(X_O+270,Y_O+10).style('transform','scale(2)');

    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
    Hide_Outbtn.position(X_I+10,Y_I+340).style('font-size','15px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

  }
  // -----------------------RESPONSIVE DESIGN  SMALL SCREEN (SMARTPHONE)------------------------------------------- 
  ResponsiveMediumsize=function ResponsiveMediumsize(){
      Zoom=0.7;
      X_I=width-300;
      Y_I=10;
      X_O=30;
      Y_O=10;

   // ----------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(2*width/5-70,4*height/5).style('font-size','15px').style('background-color','green').style('padding','20px').style('border-radius','30px').style('border','3px solid rgb(0)');
    buttonpause.position(2*width/5+10,4*height/5).style('font-size','15px').style('background-color','orange').style('padding','20px').style('border-radius','40px').style('border','3px solid rgb(0)');

    //--------------Zoom IN and OUT--------------------------------
    Zoom_IN.position(3*width/5-40,4*height/5+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
    Zoom_OUT.position(3*width/5+40,4*height/5+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

    // ----------------FULL SCREEN Button---------------------
    fullbtn.show();                    //because when scale in laptop 
    fullbtn.position(4*width/5+20,4*height/5+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
    
    // ----------------------INPUTS------------------------------------------
    Input.position(X_I,Y_I).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 230px 110px').style('border','2px solid black').style('border-radius','10px');
    Observer.position(X_I+80,Y_I+30).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_O_Slider.position(X_I+180,Y_I+60).size(100,20);
    Input_Vel_O.position(X_I+40,Y_I+60).style('font-size','17px');
    Acc_O_Slider.position(X_I+180,Y_I+90).size(100,20);
    Input_Acc_O.position(X_I+10,Y_I+90).style('font-size','17px');
    Vechile.position(X_I+110,Y_I+120).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vel_Ve_Slider.position(X_I+180,Y_I+150).size(100,20);
    Input_Vel_Ve.position(X_I+40,Y_I+150).style('font-size','17px');
    Acc_Ve_Slider.position(X_I+180,Y_I+180).size(100,20);
    Input_Acc_Ve.position(X_I+10,Y_I+180).style('font-size','17px');
    Dist_Ve_Slider.position(X_I+180,Y_I+210).size(100,20);
    Input_Dist_Ve.position(X_I+10,Y_I+210).style('font-size','17px');
    Ve_Checkbox.position(X_I+210,Y_I+120).style('transform','scale(1.5)');
    Ve_Checkbox.changed(show_vech);
          function show_vech(){
            Vech_show=this.checked(); 
            if(Vech_show){
              Vechile_Out.show();
              Output_Vel_Ve.show();
              Output_Acc_Ve.show();
              Output_Dist_Ve.show();
              Show_Out();                                   //Unhide output when vechile checkbox is checked
              Output.style('padding-bottom','280px');
            }else{
              Vechile_Out.hide();
              Output_Vel_Ve.hide();
              Output_Acc_Ve.hide();
              Output_Dist_Ve.hide();
              Show_Out();
              Output.style('padding-bottom','150px');

            }
          }

    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
    Hide_INbtn.position(X_I+10,Y_I+10).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

    // ----------------OUTPUT------------------------------------------------------------------------------
    Output.position(X_O,Y_O).style('font-size','18px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 80px 150px 80px').style('border','2px solid black').style('border-radius','10px').style('font-size','20px');
    Observer_Out.position(X_O+60,Y_O+40).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Output_Vel_O.position(X_O+80,Y_O+70).style('font-size','17px');
    Output_Acc_O.position(X_O+55,Y_O+100).style('font-size','17px');
    Output_Dist_O.position(X_O+50,Y_O+130).style('font-size','17px');
    Vechile_Out.position(X_O+85,Y_O+170).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
    Vechile_Out.hide();    
    Output_Vel_Ve.position(X_O+80,Y_O+200).style('font-size','17px');
    Output_Vel_Ve.hide();
    Output_Acc_Ve.position(X_O+55,Y_O+230).style('font-size','17px');
    Output_Acc_Ve.hide();
    Output_Dist_Ve.position(X_O+50,Y_O+260).style('font-size','17px');
    Output_Dist_Ve.hide();
    Vect_Checkbox.position(X_O+200,Y_O+10).style('transform','scale(1.5)');

    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
    Hide_Outbtn.position(X_O+10,Y_O+10).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

  }
  // -----------------------RESPONSIVE DESIGN  SMALL SCREEN (SMARTPHONE)------------------------------------------- 
  ResponsiveSmallsize=function ResponsiveSmallsize(){
          Zoom=0.5;
          X_I=width-250;
          Y_I=10;
          X_O=10;
          Y_O=10;

        // ----------------START AND STOP BUTTON---------------------------------------------
        buttonstart.position(2*width/5-35,4*height/5).style('font-size','11px').style('background-color','green').style('padding','10px').style('border-radius','30px').style('border','3px solid rgb(0)');
        buttonpause.position(2*width/5+35,4*height/5).style('font-size','11px').style('background-color','orange').style('padding','10px').style('border-radius','40px').style('border','3px solid rgb(0)');
      
      //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(3*width/5-30,5*height/6).style('font-size','11px').style('background-color','lightblue').style('padding','2px').style('border-radius','5px');
        Zoom_OUT.position(3*width/5+30,5*height/6).style('font-size','11px').style('background-color','lightgreen').style('padding','2px').style('border-radius','5px');
      
        // ----------------FULL SCREEN Button---------------------
        fullbtn.hide();

        // ----------------------INPUTS------------------------------------------
        Input.position(X_I,Y_I).style('font-size','11px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 100px 160px 100px').style('border','1px solid black').style('border-radius','10px');
        Observer.position(X_I+80,Y_I+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
        Vel_O_Slider.position(X_I+120,Y_I+42).size(100,5);
        Input_Vel_O.position(X_I+35,Y_I+40).style('font-size','11px');
        Acc_O_Slider.position(X_I+120,Y_I+62).size(100,5);
        Input_Acc_O.position(X_I+10,Y_I+60).style('font-size','11px');
        Vechile.position(X_I+90,Y_I+80).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
        Vel_Ve_Slider.position(X_I+120,Y_I+102).size(100,5);
        Input_Vel_Ve.position(X_I+35,Y_I+100).style('font-size','11px');
        Acc_Ve_Slider.position(X_I+120,Y_I+122).size(100,5);
        Input_Acc_Ve.position(X_I+10,Y_I+120).style('font-size','11px');
        Dist_Ve_Slider.position(X_I+120,Y_I+142).size(100,5);
        Input_Dist_Ve.position(X_I+10,Y_I+140).style('font-size','11px');
        Ve_Checkbox.position(X_I+160,Y_I+75).style('transform','scale(0.9)');
          Ve_Checkbox.changed(show_vech);
          function show_vech(){
            Vech_show=this.checked(); 
            if(Vech_show){
              Vechile_Out.show();
              Output_Vel_Ve.show();
              Output_Acc_Ve.show();
              Output_Dist_Ve.show();
              Show_Out();                                   //Unhide output when vechile checkbox is checked
              Output.style('padding-bottom','170px');
            }else{
              Vechile_Out.hide();
              Output_Vel_Ve.hide();
              Output_Acc_Ve.hide();
              Output_Dist_Ve.hide();
              Show_Out();
              Output.style('padding-bottom','90px');

            }
          }
        // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
        Hide_INbtn.position(X_I+10,Y_I+10).style('font-size','10px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
        
        // ----------------OUTPUT------------------------------------------------------------------------------
        Output.position(X_O,Y_O).style('font-size','11px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 70px 90px 70px').style('border','1px solid black').style('border-radius','10px');
        Vect_Checkbox.position(X_O+140,Y_O).style('transform','scale(0.9)');
        Observer_Out.position(X_O+50,Y_O+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
        Output_Vel_O.position(X_O+55,Y_O+40).style('font-size','11px');
        Output_Acc_O.position(X_O+45,Y_O+60).style('font-size','11px');
        Output_Dist_O.position(X_O+40,Y_O+80).style('font-size','11px');
        Vechile_Out.position(X_O+70,Y_O+100).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
        Vechile_Out.hide();    
        Output_Vel_Ve.position(X_O+50,Y_O+120).style('font-size','11px');
        Output_Vel_Ve.hide();
        Output_Acc_Ve.position(X_O+45,Y_O+140).style('font-size','11px');
        Output_Acc_Ve.hide();
        Output_Dist_Ve.position(X_O+40,Y_O+160).style('font-size','11px');
        Output_Dist_Ve.hide();

        // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
        Hide_Outbtn.position(X_O+10,Y_O+10).style('font-size','10px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      
  }

}

    
    