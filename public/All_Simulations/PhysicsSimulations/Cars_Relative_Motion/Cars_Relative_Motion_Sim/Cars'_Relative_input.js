function input(){
  // X & Y VALEUE FOR POSITION
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

//---------------Zoom IN and Zoom Out-----------------------------------------------
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

// ---------FULL SCREEN BUTTON------------------------------------------------------
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

// ----------------------INPUTS SECTION---------------------------------------------
  Input=createDiv('INPUT');
  Observer=createDiv('OBSERVER(YOU)');
  Obser_Pos=createDiv("Position :");
  Obser_Pos_select=createSelect();
  Obser_Pos_select.option('On Ground');
  Obser_Pos_select.option('In Red car');
  Obser_Pos_select.option('In Blue car');
  Obser_Pos_select.selected('On Ground');
  Red_car=createDiv('RED CAR');
  Input_Red_C_Ve=createDiv("Velocity :");
  Red_C_VeX=createElement('INPUT');
  Red_C_VeX.attribute('type','number');
  Red_C_VeX.value(10);
  RedC_I_cap=createSpan('î +');
  Red_C_VeY=createElement('INPUT');
  Red_C_VeY.attribute('type','number');
  Red_C_VeY.value(10);
  RedC_J_cap=createSpan('ĵ');
  Blue_car=createDiv('BLUE CAR');
  Input_Blue_C_Ve=createDiv("Velocity :");
  Blue_C_VeX=createElement('INPUT');
  Blue_C_VeX.attribute('type','number');
  Blue_C_VeX.value(10);
  BlueC_I_cap=createSpan('î +');
  Blue_C_VeY=createElement('INPUT');
  Blue_C_VeY.attribute('type','number');
  Blue_C_VeY.value(10);
  BlueC_J_cap=createSpan('ĵ');

  Input_checkbox = createCheckbox('', false);
  Input_checkbox.changed(show_Input);
  function show_Input(){
    Input_show=this.checked();
  }

//-----------------INPUT HIDE AND SHOW BUTTON---------------------------------------------
  Hide_INbtn=createButton('-');
  Hide_INbtn.mousePressed(Hide_IN);
    function Hide_IN(){              //this function run when press Hide button
      Hide_INbtn.html('+');
      Hide_INbtn.style('background-color','transparent');
      Input_checkbox.hide();
      Input.hide();
      Observer.hide();
      Obser_Pos.hide();
      Obser_Pos_select.hide();
      Red_car.hide();
      Input_Red_C_Ve.hide();
      RedC_I_cap.hide();
      RedC_J_cap.hide();
      Red_C_VeX.hide();
      Red_C_VeY.hide();
      Blue_car.hide();
      Input_Blue_C_Ve.hide();
      BlueC_I_cap.hide();
      BlueC_J_cap.hide();
      Blue_C_VeX.hide();
      Blue_C_VeY.hide();
      BlueC_J_cap.hide();
      Hide_INbtn.mousePressed(Show_IN);
    }
    function Show_IN(){           //this function run when show press after pressing Hide button
      Input.show();
      Hide_INbtn.html('-');
      Hide_INbtn.style('background-color','lightcoral');
      Input_checkbox.show();
      Input.show();
      Observer.show();
      Obser_Pos.show();
      Obser_Pos_select.show();
      Red_car.show();
      Input_Red_C_Ve.show();
      RedC_I_cap.show();
      RedC_J_cap.show();
      Red_C_VeX.show();
      Red_C_VeY.show();
      Blue_car.show();
      Input_Blue_C_Ve.show();
      BlueC_I_cap.show();
      BlueC_J_cap.show();
      Blue_C_VeX.show();
      Blue_C_VeY.show();
      BlueC_J_cap.show();
      Hide_INbtn.mousePressed(Hide_IN);
    }

// ----------------OUTPUT SECTION---------------------------------------------------------- 
  Output=createDiv('OUTPUT');
  Ground_wrt_O=createDiv('Ground w.r.t Observer');
  Ground_wrt_O_Ve=createDiv("Velocity :"+'m/s');
  Redcar_wrt_O=createDiv('Red car w.r.t Observer');
  Redcar_wrt_O_Ve=createDiv("Velocity :"+'m/s');
  Bluecar_wrt_O=createDiv('Blue car w.r.t Observer');
  Bluecar_wrt_O_Ve=createDiv("Velocity :"+'m/s');

  Output_checkbox = createCheckbox('', false);
  Output_checkbox.changed(show_output);
  function show_output(){
    Output_show=this.checked();
  }
//------------------OUTPUT HIDE AND SHOW BUTTON----------------------------------------------
  Hide_Outbtn=createButton('-');
  Hide_Outbtn.mousePressed(Hide_Out);
      function Hide_Out(){                    //run when press output hide button
          Hide_Outbtn.html('+');
          Hide_Outbtn.style('background-color','transparent');
          Output_checkbox.hide();
          Output.hide();
          Ground_wrt_O.hide();
          Ground_wrt_O_Ve.hide();
          Redcar_wrt_O.hide();
          Redcar_wrt_O_Ve.hide();
          Bluecar_wrt_O.hide();
          Bluecar_wrt_O_Ve.hide();
          Hide_Outbtn.mousePressed(Show_Out);
      }
      function Show_Out(){                     //run when press output show button
          Hide_Outbtn.html('-');
          Hide_Outbtn.style('background-color','lightcoral');
          Output_checkbox.show();
          Output.show();
          Ground_wrt_O.show();
          Ground_wrt_O_Ve.show();
          Redcar_wrt_O.show();
          Redcar_wrt_O_Ve.show();
          Bluecar_wrt_O.show();
          Bluecar_wrt_O_Ve.show();
          Hide_Outbtn.mousePressed(Hide_Out);
      }

ResponsiveBigsize=function ResponsiveBigsize(){
      X_I=width-330;
      Y_I=20;
      X_O=width-330;
      Y_O=340;

   // ------------------------------START AND STOP BUTTON---------------------------------------------
  buttonstart.position(1*width/4-40,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','18px').style('border-radius','30px');
  buttonpause.position(1*width/4+40,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','18px').style('border-radius','40px');

//--------------Zoom IN and OUT--------------------------------
  Zoom_IN.position(2*width/4-40,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
  Zoom_OUT.position(2*width/4+40,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

// ---------FULL SCREEN BUTTON-----------------------
  fullbtn.show();
  fullbtn.position(3*width/4,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

  // ----------------------INPUTS-------------------------------------------------------------------------
  Input.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 260px 120px').style('border','2px solid black').style('border-radius','10px');
  Observer.position(X_I+80,Y_I+30).style('font-size','18px').style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Obser_Pos.position(X_I+40,Y_I+60).style('font-size','18px');
  Obser_Pos_select.position(X_I+120,Y_I+60).style('font-size','17px');
  // ----------------------RED CAR INPUTS------------------------------------------------------------------
  Red_car.position(X_I+110,Y_I+100).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Input_Red_C_Ve.position(X_I+40,Y_I+140).style('font-size','18px');
  Red_C_VeX.position(X_I+120,Y_I+135).size(30,30).style('font-size','15px');
  RedC_I_cap.position(X_I+160,Y_I+135).style('font-size','25px');
  Red_C_VeY.position(X_I+190,Y_I+135).size(30,30).style('font-size','15px');
  RedC_J_cap.position(X_I+235,Y_I+135).style('font-size','25px');
  // ----------------------BLUE CAR INPUTS-------------------------------------------------------------------
  Blue_car.position(X_I+110,Y_I+190).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Input_Blue_C_Ve.position(X_I+40,Y_I+230).style('font-size','18px');
  Blue_C_VeX.position(X_I+120,Y_I+225).size(30,30).style('font-size','15px');
  BlueC_I_cap.position(X_I+160,Y_I+225).style('font-size','25px');
  Blue_C_VeY.position(X_I+190,Y_I+225).size(30,30).style('font-size','15px');
  BlueC_J_cap.position(X_I+235,Y_I+225).style('font-size','25px');
  //-----------------------INPUT CHECKBOX-----------------------
  Input_checkbox.position(X_I+240,Y_I+10).style('transform','scale(2)');
  // ----------INPUT HIDE AND SHOW BUTTON----------------------------------------------------------------------
  Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

  // --------------------OUTPUT-------------------------------
  Output.position(X_O,Y_O).style('font-size','20px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 120px 240px 100px').style('border','2px solid black').style('border-radius','10px');
  Ground_wrt_O.position(X_O+60,Y_O+40).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Ground_wrt_O_Ve.position(X_O+60,Y_O+80).style('font-size','18px');
  Redcar_wrt_O.position(X_O+60,Y_O+110).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Redcar_wrt_O_Ve.position(X_O+60,Y_O+150).style('font-size','18px');
  Bluecar_wrt_O.position(X_O+60,Y_O+180).style('font-size','18px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Bluecar_wrt_O_Ve.position(X_O+60,Y_O+220).style('font-size','18px');
  //-----------------------OUTPUT CHECKBOX-----------------------
  Output_checkbox.position(X_O+240,Y_O+10).style('transform','scale(2)');
  // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------
  Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
}

ResponsiveMediumsize=function ResponsiveMediumsize(){
  X_I=width-250;
  Y_I=20;
  X_O=20;
  Y_O=20;
 // ------------------------------START AND STOP BUTTON---------------------------------------------
  buttonstart.position(1*width/4-40,5*height/6).style('font-size','15px').style('background-color','green').style('border','3px solid rgb(0)').style('padding','18px').style('border-radius','30px');
  buttonpause.position(1*width/4+40,5*height/6).style('font-size','15px').style('border','3px solid rgb(0)').style('background-color','orange').style('padding','18px').style('border-radius','40px');

//--------------Zoom IN and OUT--------------------------------
  Zoom_IN.position(2*width/4-40,5*height/6+10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
  Zoom_OUT.position(2*width/4+40,5*height/6+10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');

// ---------FULL SCREEN BUTTON-----------------------
  fullbtn.show();
  fullbtn.position(3*width/4,5*height/6+10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

  // ----------------------OBSERVER INPUTS----------------------------------------------------------------------
  Input.position(X_I,Y_I).style('font-size','17px').style('padding','2px 90px 220px 90px').style('background-color','RGBA(225,225,225,0.8)').style('border','2px solid black').style('border-radius','10px').style('font-size','18px');
  Observer.position(X_I+50,Y_I+35).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Obser_Pos.position(X_I+20,Y_I+65).style('font-size','17px');
  Obser_Pos_select.position(X_I+110,Y_I+65).style('font-size','16px');
  // ----------------------RED CAR INPUTS------------------------------------------------------------------------
  Red_car.position(X_I+80,Y_I+95).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Input_Red_C_Ve.position(X_I+20,Y_I+130).style('font-size','17px');
  Red_C_VeX.position(X_I+100,Y_I+130).size(20,20);
  RedC_I_cap.position(X_I+135,Y_I+130).style('font-size','20px');
  Red_C_VeY.position(X_I+165,Y_I+130).size(20,20);
  RedC_J_cap.position(X_I+200,Y_I+130).style('font-size','20px');
  // ----------------------BLUE CAR INPUTS------------------------------------------------------------------------
  Blue_car.position(X_I+80,Y_I+165).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Input_Blue_C_Ve.position(X_I+20,Y_I+200).style('font-size','17px');
  Blue_C_VeX.position(X_I+100,Y_I+200).size(20,20);
  BlueC_I_cap.position(X_I+135,Y_I+200).style('font-size','20px');
  Blue_C_VeY.position(X_I+165,Y_I+200).size(20,20);
  BlueC_J_cap.position(X_I+200,Y_I+200).style('font-size','20px');
  //-----------------------INPUT CHECKBOX-----------------------
  Input_checkbox.position(X_I+200,Y_I+10).style('transform','scale(1.5)');
  // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
  Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
  
  // ----------------OUTPUT-------------------------------
  Output.position(X_O,Y_O).style('background-color','RGBA(225,225,225,0.8)').style('padding','2px 80px 210px 100px').style('border','2px solid black').style('border-radius','10px').style('font-size','18px');
  Ground_wrt_O.position(X_O+35,Y_O+35).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Ground_wrt_O_Ve.position(X_O+35,Y_O+70).style('font-size','17px');
  Redcar_wrt_O.position(X_O+35,Y_O+95).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Redcar_wrt_O_Ve.position(X_O+35,Y_O+130).style('font-size','17px');
  Bluecar_wrt_O.position(X_O+35,Y_O+160).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Bluecar_wrt_O_Ve.position(X_O+35,Y_O+195).style('font-size','17px');
  //-----------------------OUTPUT CHECKBOX-----------------------
  Output_checkbox.position(X_O+210,Y_O+10).style('transform','scale(1.5)');
  // ------------------ OUTPUT HIDE AND SHOW BUTTON ----------------------------------------------------------------
  Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
}

ResponsiveSmallsize=function ResponsiveSmallsize(){
  Zoom=0.5
  X_I=width-200;
  Y_I=20;
  X_O=20;
  Y_O=20;

  // ------------------------------START AND STOP BUTTON---------------------------------------------
    buttonstart.position(1*width/4-35,5*height/6).style('background-color','green').style('border','3px solid rgb(0)').style('padding','11px').style('border-radius','30px');
    buttonpause.position(1*width/4+35,5*height/6).style('border','3px solid rgb(0)').style('background-color','orange').style('padding','11px').style('border-radius','40px');
    
  //--------------Zoom IN and OUT------------------------------------------------------------------------------
    Zoom_IN.position(2*width/4-35,5*height/6+10).style('font-size','10px').style('background-color','lightblue').style('padding','3px').style('border-radius','5px');
    Zoom_OUT.position(2*width/4+35,5*height/6+10).style('font-size','10px').style('background-color','lightgreen').style('padding','3px').style('border-radius','5px');

  // ------------------FULL SCREEN BUTTON----------------------------------------------------------------------
  fullbtn.hide();

  // ----------------------OBSERVER INPUTS----------------------------------------------------------------------
  Input.position(X_I,Y_I).style('font-size','11px').style('padding','2px 70px 180px 70px').style('background-color','RGBA(225,225,225,0.8)').style('border','1px solid black').style('border-radius','10px');
  Observer.position(X_I+45,Y_I+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Obser_Pos.position(X_I+20,Y_I+40).style('font-size','11px');
  Obser_Pos_select.position(X_I+70,Y_I+40).style('font-size','10px');
  // ----------------------RED CAR INPUTS------------------------------------------------------------------------
  Red_car.position(X_I+65,Y_I+60).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Input_Red_C_Ve.position(X_I+20,Y_I+95).style('font-size','11px');
  Red_C_VeX.position(X_I+70,Y_I+90).size(15,15).style('font-size','9px');
  RedC_I_cap.position(X_I+95,Y_I+90).style('font-size','15px');
  Red_C_VeY.position(X_I+115,Y_I+90).size(15,15).style('font-size','9px');
  RedC_J_cap.position(X_I+145,Y_I+90).style('font-size','15px');
  // ----------------------BLUE CAR INPUTS------------------------------------------------------------------------
  Blue_car.position(X_I+65,Y_I+120).style('font-size','11px').style('padding','2px').style('background-color','RGB(160,160,160)');
  Input_Blue_C_Ve.position(X_I+20,Y_I+155).style('font-size','11px');
  Blue_C_VeX.position(X_I+70,Y_I+150).size(15,15).style('font-size','9px');
  BlueC_I_cap.position(X_I+95,Y_I+150).style('font-size','14px');
  Blue_C_VeY.position(X_I+115,Y_I+150).size(15,15).style('font-size','9px');
  BlueC_J_cap.position(X_I+145,Y_I+150).style('font-size','14px');
  //-----------------------INPUT CHECKBOX-----------------------
  Input_checkbox.position(X_I+140,Y_I).style('transform','scale(0.9)');
  // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
  Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
  
  // ----------------OUTPUT-----------------------------------------
  Output.position(X_O,Y_O).style('font-size','11px').style('background-color','RGBA(225,225,225,0.8)').style('padding','2px 65px 140px 75px').style('border','1px solid black').style('border-radius','10px');
  Ground_wrt_O.position(X_O+35,Y_O+20).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Ground_wrt_O_Ve.position(X_O+35,Y_O+40).style('font-size','11px');
  Redcar_wrt_O.position(X_O+35,Y_O+60).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Redcar_wrt_O_Ve.position(X_O+35,Y_O+80).style('font-size','11px');
  Bluecar_wrt_O.position(X_O+35,Y_O+100).style('font-size','11px').style('background-color','RGB(160,160,160)').style('padding','2px');
  Bluecar_wrt_O_Ve.position(X_O+35,Y_O+120).style('font-size','11px');
  //-----------------------OUTPUT CHECKBOX-----------------------
  Output_checkbox.position(X_O+140,Y_O).style('transform','scale(0.9)');
  // ------------------ OUTPUT HIDE AND SHOW BUTTON ----------------------------------------------------------------
  Hide_Outbtn.position(X_O+10,Y_O+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
}

}