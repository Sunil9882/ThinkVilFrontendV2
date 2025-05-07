function input(){
  // ---------FULL SCREEN BUTTON-----------------------
  fullbtn=createButton('Full Screen');
  fullbtn.html('<img src=images/expand.png style="width:16px; height:15px; vertical-align:middle;"> ');
  fullbtn.attribute('title', 'Full screen'); // Add hover effect with title attribute
  fullbtn.mousePressed(fullscreenON); 
      function fullscreenON(){
          fullscreen(true);
          fullbtn.html('<img src=images/cross.png style="width:16px; height:15px; vertical-align:middle;"> ');
          fullbtn.attribute('title', 'Exit full screen'); // Change hover effect to "Exit full screen"
          fullbtn.mousePressed(fullscreenOFF);
      }
      function  fullscreenOFF(){
          fullscreen(false);
          fullbtn.html('<img src=images/expand.png style="width:16px; height:15px; vertical-align:middle;"> ');
          fullbtn.attribute('title', 'Full screen'); // Change hover effect back to "Full screen"
          fullbtn.mousePressed(fullscreenON);
      }

  //---------------ZOOM IN and ZOOM OUT-------------------------
  //ZOOM IN
  Zoom_IN = createButton('Zoom IN');
  Zoom_IN.html('<img src=images/Zoom_In.png style="width:20px; height:20px; vertical-align:middle;"> ');
  Zoom_IN.attribute('title', 'Zoom In'); // Add hover effect with title attribute
  Zoom_IN.mousePressed(Zoomin);
  function Zoomin() {
    Zoom_IN.style('background-color','RGBA(173,216,230,0.5)')
    if (Zoom < 1.5) {
      Zoom = Zoom + 0.1;
    }
  }
  Zoom_IN.mouseReleased(zoominmousereleased);
  function zoominmousereleased(){
    Zoom_IN.style('background-color','RGBA(173,216,230,1)')
  }
  //ZOOM OUT
  Zoom_OUT = createButton('Zoom OUT');
  Zoom_OUT.html('<img src=images/Zoom_Out.png style="width:20px; height:20px; vertical-align:middle;"> ');
  Zoom_OUT.attribute('title', 'Zoom Out'); // Add hover effect with title attribute
  Zoom_OUT.mousePressed(Zoomout);
  function Zoomout() {
    Zoom_OUT.style('background-color','RGBA(144,238,144,0.5)')
    if (Zoom > 0.2) {
      Zoom = Zoom - 0.1;
    }
  }

  Zoom_OUT.mouseReleased(zoomoutmousereleased);
  function zoomoutmousereleased(){
    Zoom_OUT.style('background-color','RGBA(144,238,144,1)')
  }

  // N1 AND N2 INPUT VALUES
  Input_Box=createDiv('INPUT');
  //N1
  N_1_Div=createSpan('Initial energy level (n<sub>i</sub>) :');
  N_1_Select = createSelect();
  N_1_Select.option('1');
  N_1_Select.option('2');
  N_1_Select.option('3');
  N_1_Select.option('4');
  N_1_Select.option('5');
  N_1_Select.option('6');
  N_1_Select.option('7');
  N_1_Select.option('∞','8');
  N_1_Select.selected(4);
  // N2
  N_2_Div=createSpan('Final energy level (n<sub>f</sub>) :');
  N_2_Select = createSelect();
  N_2_Select.option('1');
  N_2_Select.option('2');
  N_2_Select.option('3');
  N_2_Select.option('4');
  N_2_Select.option('5');
  N_2_Select.option('6');
  N_2_Select.option('7');
  N_2_Select.option('∞','8');
  N_2_Select.selected('2');

  // -------------------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
  Hide_INbtn=createButton('-');
  Hide_INbtn.mousePressed(Hide_IN);
      function Hide_IN(){              //this function run when press Hide button
          Hide_INbtn.html('+');
          Hide_INbtn.style('background-color','transparent');
          Input_Box.hide();
          N_1_Div.hide();
          N_1_Select.hide();
          N_2_Div.hide();
          N_2_Select.hide();
          Hide_INbtn.mousePressed(Show_IN);
      }
      function Show_IN(){           //this function run when show press after pressing Hide button
          Hide_INbtn.html('-');
          Hide_INbtn.style('background-color','lightcoral');
          Input_Box.show();
          N_1_Div.show();
          N_1_Select.show();
          N_2_Div.show();
          N_2_Select.show();
          Hide_INbtn.mousePressed(Hide_IN);
      }

  ResponsiveBigsize1=function ResponsiveBigsize(){
      Zoom=height/800;                        //scale will be adjust according screen size
      let X_I=width-400;
      let Y_I=10;
     
        // ------------FULL SCREEN BUTTON-----------------------
      fullbtn.position(width/2+100,29*height/30).style('background-color','RGB(225,225,225)').style('padding','3px 3px 3.5px 3.1px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8');
      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2-50,29*height/30).style('background-color','RGB(173,216,230)').style('padding','2px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8'); // lightblue
      Zoom_OUT.position(width/2,29*height/30).style('background-color','RGB(144,238,144)').style('padding','2px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8'); // lightgreen
      //------------------- INPUT VALUES------------------------------
      Input_Box.position(X_I,Y_I).style('font-size','20px').style('background-color','RGBA(225,225,225,0.9)').style('padding','5px 120px 120px 120px').style('border','2px solid black').style('border-radius','20px');
      N_1_Div.position(X_I+20,50).style('font-size','20px');
      N_1_Select.position(X_I+240, 50).style('font-size','20px').style('transform','scale(1)');
      N_2_Div.position(X_I+26,90).style('font-size','20px');
      N_2_Select.position(X_I+240, 90).style('font-size','20px').style('transform','scale(1)');
      // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
      Hide_INbtn.position(X_I+15,Y_I+7).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

    }

  ResponsiveMediumsize1=function ResponsiveMediumsize(){
    // if(width<1300){
      Zoom=width/1100;            
    // }else{
    //   Zoom=width/1550;            
    // }
    let X_I=width-300;
    let Y_I=20;

     // ------------FULL SCREEN BUTTON-----------------------
     fullbtn.position(width/2+100,29*height/30).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','3px 3px 3.5px 3.1px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8');
    //--------------Zoom IN and OUT--------------------------------
     Zoom_IN.position(width/2-50,29*height/30).style('background-color','RGB(173,216,230)').style('padding','2px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8'); // lightblue
     Zoom_OUT.position(width/2,29*height/30).style('background-color','RGB(144,238,144)').style('padding','2px').style('border-radius','5px').style('border','2px solid black').style('transform','scale(0.8'); // lightgreen
     //------------------- INPUT VALUES------------------------------
     Input_Box.position(X_I,Y_I).style('font-size','18px').style('background-color','RGBA(225,225,225,1)').style('padding','5px 100px 100px 110px').style('border','1px solid black').style('border-radius','20px');
     N_1_Div.position(X_I+20,Y_I+40).style('font-size','16px');
     N_1_Select.position(X_I+210, Y_I+37).style('font-size','18px').style('transform','scale(1)');
     N_2_Div.position(X_I+22,Y_I+75).style('font-size','16px');
     N_2_Select.position(X_I+210, Y_I+73).style('font-size','18px').style('transform','scale(1)');
     // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
     Hide_INbtn.position(X_I+14,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');

  }

  ResponsiveSmallsize1=function ResponsiveSmallsize(){
    Zoom=height/800;                        //scale will be adjust according screen size
    let X_I=width-230;
    let Y_I=10;
   
    // ------------FULL SCREEN BUTTON-----------------------------
     fullbtn.hide();
    //--------------Zoom IN and OUT--------------------------------
     Zoom_IN.position(width-200,8.5*height/10).style('background-color','RGB(173,216,230)').style('padding','2px').style('border-radius','5px').style('border','1px solid black').style('transform','scale(0.6'); // lightblue
     Zoom_OUT.position(width-170,8.5*height/10).style('background-color','RGB(144,238,144)').style('padding','2px').style('border-radius','5px').style('border','1px solid black').style('transform','scale(0.6'); // lightgreen
     //------------------- INPUT VALUES------------------------------
     Input_Box.position(X_I,Y_I).style('font-size','12px').style('background-color','RGBA(225,225,225,1)').style('padding','5px 80px 70px 75px').style('border','1px solid black').style('border-radius','20px');
     N_1_Div.position(X_I+20,Y_I+30).style('font-size','10px');
     N_1_Select.position(X_I+145, Y_I+28).style('font-size','10px').style('transform','scale(1)');
     N_2_Div.position(X_I+22,Y_I+55).style('font-size','10px');
     N_2_Select.position(X_I+145, Y_I+52).style('font-size','10px').style('transform','scale(1)');
     // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
     Hide_INbtn.position(X_I+12,Y_I+5).style('font-size','12px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black').style('transform','scale(0.8');

  }

}