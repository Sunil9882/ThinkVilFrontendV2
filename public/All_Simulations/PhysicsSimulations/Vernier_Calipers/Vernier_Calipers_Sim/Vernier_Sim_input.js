function input(){

    // ------------INPUT DOM ------------------------------------
      Input=createDiv('INPUT');
      Least_count=createSpan('Least count : 0.01 cm');
      Shape_Span=createSpan('Shape : ');
      Shape = createSelect();
      Shape.option('circular');
      Shape.option('rectangular');
      Shape.option('triangular');
  
    // --------------SHOW DIM VALUE---------------------
      Dim_Value=createSpan('DIM');
    // ---------------------RANDOM DIM ----------------------
      Random_Dim=createButton('Random Dimension');
      Random_Dim.mousePressed(randomdim);
          function randomdim(){
              R_Dim=round(random(0,4),2);
              R_SDim=R_Dim*100;
              X=R_SDim;
              Dim_Value.html("DIM");
          }    
    // ----------------------------SHOW DIM BUTTON -------------------------
      Show_Dim=createButton('Show Dimension');
      Show_Dim.mousePressed(showdimen);
          // this function work when press start button
          function showdimen(){
              Dim_Value.html(R_Dim+' cm');
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
    // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
      Hide_btn=createButton('-');
      Hide_btn.mousePressed(Hide_Out);
          function Hide_Out(){                    //run when press output hide button
          Hide_btn.html('+');
          Hide_btn.style('background-color','transparent');
          Input.hide();
          Least_count.hide();
          Shape.hide();
          Shape_Span.hide();
          Hide_btn.mousePressed(Show_Out);
          }
          function Show_Out(){                     //run when press output show button
          Hide_btn.html('-');
          Hide_btn.style('background-color','lightcoral');
          Input.show();
          Least_count.show();
          Shape.show();
          Shape_Span.show();
          Hide_btn.mousePressed(Hide_Out);
          }
  
    //---------------------RESPONSIVE SCREEN FOR BIG SIZE (LAPTOP ,DESKTOP OR SMARTBOARD)-----------------------
      ResponsiveBigsize=function ResponsiveBigsize(){
          X_I=width-400;
          Y_I=10;
  
          // OUTPUT
        Dim_Value.position(1*width/5-50,5*height/6).style('background-color','black').style('font-size','25px').style('color','white').style('padding','20px').style('border-radius','10px');
        Random_Dim.position(2*width/5-50,5*height/6).style('background-color','green').size(80,80).style('border-radius','50%').style('font-size','12px').style('color','white');
        Show_Dim.position(2*width/5+50,5*height/6).style('background-color','blue').size(80,80).style('border-radius','50%').style('font-size','12px').style('color','white');
    
        //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(3*width/5-20,5*height/6+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
        Zoom_OUT.position(3*width/5+60,5*height/6+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
        
        // ---------FULL SCREEN BUTTON-----------------------
        fullbtn.show();
        fullbtn.position(4*width/5+20,5*height/6+20).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
        
          //-------------------INPUTS------------------------
          Input.position(X_I,Y_I).style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 125px 110px 125px').style('border','1px solid black').style('border-radius','10px').style('font-size','25px');
          Least_count.position(X_I+30, Y_I+40).style('font-size','25px');
          Shape_Span.position(X_I+40, Y_I+80).style('font-size','25px');
          Hide_btn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
          Shape.position(X_I+150, Y_I+85).style('transform','scale(1.5)').style('font-size','14px');
          
          
      }
  
    ResponsiveMediumsize=function ResponsiveMediumsize(){
        Zoom=0.7;
        X_I=width-250;
        Y_I=10;  
  
        // OUTPUT
        Dim_Value.position(1*width/5-50,5*height/6).style('background-color','black').style('font-size','25px').style('color','white').style('padding','20px').style('border-radius','10px');
        Random_Dim.position(2*width/5-50,5*height/6).style('background-color','green').size(80,80).style('border-radius','50%').style('font-size','12px').style('color','white');
        Show_Dim.position(2*width/5+50,5*height/6).style('background-color','blue').size(80,80).style('border-radius','50%').style('font-size','12px').style('color','white');
    
        //--------------Zoom IN and OUT--------------------------------
        Zoom_IN.position(3*width/5-20,5*height/6+20).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
        Zoom_OUT.position(3*width/5+60,5*height/6+20).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
        
        // ---------FULL SCREEN BUTTON-----------------------
        fullbtn.show();
        fullbtn.position(4*width/5+20,5*height/6+20).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');
        
        //-------------------INPUTS------------------------
        Input.position(X_I,Y_I).style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 90px 80px 90px').style('border','1px solid black').style('border-radius','10px').style('font-size','18px');
        Least_count.position(X_I+50, Y_I+30).style('font-size','17px');
        Shape_Span.position(X_I+50, Y_I+60).style('font-size','17px');
        Hide_btn.position(X_I+10,Y_I+5).style('background-color','lightcoral').style('border-radius','5px');
        Shape.position(X_I+140, Y_I+65).size(60).style('font-size','12px').style('transform','scale(1.3)');
        
        
    }
    //---------------------RESPONSIVE SCREEN FOR SMALL SIZE (SMARTPHONES)-----------------------
      ResponsiveSmallsize=function ResponsiveSmallsize(){
          Zoom=0.5;
          X_I=width-250;
          Y_I=10;  
          
          // OUTPUT
          Dim_Value.position(1*width/5,5*height/6).style('background-color','black').style('font-size','20px').style('color','white').style('padding','15px').style('border-radius','10px');
          Random_Dim.position(2*width/5-40,5*height/6).style('background-color','green').style('border-radius','50%').size(50,50).style('font-size','8px').style('color','white');
          Show_Dim.position(2*width/5+40,5*height/6).style('background-color','blue').size(50,50).style('border-radius','50%').style('font-size','8px').style('color','white');
      
          //--------------Zoom IN and OUT--------------------------------
          Zoom_IN.position(3*width/5-35,5*height/6+10).style('font-size','11px').style('background-color','lightblue').style('padding','2px').style('border-radius','5px');
          Zoom_OUT.position(3*width/5+35,5*height/6+10).style('font-size','11px').style('background-color','lightgreen').style('padding','2px').style('border-radius','5px');
          
          // ---------FULL SCREEN BUTTON-----------------------
          fullbtn.hide();
          //-------------------INPUTS------------------------
          Input.position(X_I,Y_I).style('font-size','12px').style('background-color','RGBA(225,225,225,0.8)').style('padding','5px 80px 70px 80px').style('border','1px solid black').style('border-radius','10px');
          Least_count.position(X_I+40, Y_I+30).style('font-size','12px');
          Shape_Span.position(X_I+40, Y_I+55).style('font-size','12px');
          Shape.position(X_I+100, Y_I+55).size(60).style('font-size','9px').style('transform','scale(1.2)');
          Hide_btn.position(X_I+10,Y_I+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
          
      }
  }