function input(){
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
            if(Zoom<2.5){
            Zoom=Zoom+0.1;  
            Scale=25*Zoom
            }

        }

    Zoom_OUT=createButton('Zoom OUT');
    Zoom_OUT.mousePressed(Zoomout); 
        function Zoomout(){
            if(Zoom>0.5){
            Zoom=Zoom-0.1;
            Scale=25*Zoom
            }

        }
    
  //-------------------QUADRATIC EQUATIONS------------------------------
    Input=createDiv('');
    //QUADARATIC EQUATIONS
    QUAD=createDiv('QUADRATIC EQUATION');
    // Make Quadratic equation (Y=aX2+bX+C)
    //y
    y_Span=createSpan('Y=');
    // Make input a,b,c
     //aX2
     A=createElement('INPUT');
     A.attribute('type','number');
     A.value(-1);
    X_A=createSpan('X +');
    x_square=createSpan('2');
    //bX
   B=createElement('INPUT');
   B.attribute('type','number');
   B.value(2);
    X_B=createSpan('X +');
    //c
    C=createElement('INPUT');
    C.attribute('type','number');
    C.value(3);

    Hide_INbtn=createButton('-');
    Hide_INbtn.mousePressed(Hide_IN);
        function Hide_IN(){              //this function run when press Hide button
            Hide_INbtn.html('+');
            Hide_INbtn.style('background-color','transparent');
            Input.hide();
            QUAD.hide();
            y_Span.hide();
            A.hide();
            B.hide();
            C.hide();
            X_A.hide();
            x_square.hide();
            B.hide();
            X_B.hide();
            C.hide();
            Hide_INbtn.mousePressed(Show_IN);
        }
        function Show_IN(){           //this function run when show press after pressing Hide button
            Hide_INbtn.html('-');
            Hide_INbtn.style('background-color','lightcoral');
            Input.show();
            QUAD.show();
            y_Span.show();
            A.show();
            B.show();
            C.show();
            X_A.show();
            x_square.show();
            B.show();
            X_B.show();
            C.show();
            Hide_INbtn.mousePressed(Hide_IN);
        }


  // -------------------SOLUTIONS----------------------------------
    //output
    Solution_Box=createDiv('');
    Show_soln_checkbox = createCheckbox('', false);
    Show_soln_checkbox.changed(Instantoutput);
            function Instantoutput(){
            Show_Sol1=this.checked();
            }
   // SOLUTION
   SOLUTION=createDiv('SOLUTIONS');
    // Equation Roots  
    Output_ROOT=createDiv("Roots :");
     // Equation vertex 
     Output_Vertex=createDiv("Vertex : "+'('+0+","+0+')');
    // Equation Y-intersect 
    Output_Yintersect=createDiv("Y-intersect : ");
    // Axis of symmetric 
    Output_Axis_OS=createDiv("Axis of symmetry : ");

  //-------------------VALUE AT Point------------------------------
    Value_XBox=createDiv('');
    At_pointX_checkbox = createCheckbox('', false);
    At_pointX_checkbox.changed(showatpointx);
        function showatpointx(){
            Show_Sol2=this.checked();
        }
    // At Point X
    At_point=createDiv('At Point X');
    //X INPUTS
    X=createSpan('X :');
    //X VALUE
    X_cord=createElement('INPUT');
    X_cord.attribute('type','number');
    X_cord.value(4);
    //Y output 
    Y_at_X=createSpan('Coordinates :');
    //Tangent equation
    Tangent=createSpan('Tangent :');

  //-------------------DOMAIN AND RANGE------------------------------
    DOMAIN_Box=createDiv('');
    Domain_checkbox = createCheckbox('', false);
    Domain_checkbox.changed(showdomain);
        function showdomain(){
            Show_Sol3=this.checked();
        }

    // Domain & Range
    Domain_Div=createDiv('Domain & Range');
    //DOMAIN INPUTS
    DOMAIN=createSpan('Domain :  ');
    //RADIO INPUTS FOR CHOOSE DOMAIN TYPE
    Domain_type=createRadio();
    Domain_type.option('[-∞,∞]');
    Domain_type.selected('[-∞,∞]');
    Domain_type.option('[........,........]');  
    //domain first X value
    Domain_X1_Value=createElement('INPUT');
    Domain_X1_Value.attribute('type','number');
    Domain_X1_Value.value(-1);
    //domain second X value
    Domain_X2_Value=createElement('INPUT');
    Domain_X2_Value.attribute('type','number');
    Domain_X2_Value.value(1);
    //Range 
    Domain_Range=createSpan('Range :');
  //------------------------OUTPUT HIDE AND SHOW BUTTON-----------------------------------
  Hide_Out_sln=createButton('-');
  Hide_Out_sln.mousePressed(hide_Out_sln);
      function hide_Out_sln(){                    //run when press output hide button
          Hide_Out_sln.html('+');
          Hide_Out_sln.style('background-color','transparent');
          Solution_Box.hide();
          SOLUTION.hide();
          Output_ROOT.hide();
          Output_Vertex.hide();
          Output_Yintersect.hide();
          Output_Axis_OS.hide();
          Show_soln_checkbox.hide();
          Hide_Out_sln.mousePressed(show_Out_sln);
      }
      function show_Out_sln(){                     //run when press output show button
          Hide_Out_sln.html('-');
          Hide_Out_sln.style('background-color','lightcoral');
          Solution_Box.show();
          SOLUTION.show();
          Output_ROOT.show();
          Output_Vertex.show();
          Output_Yintersect.show();
          Output_Axis_OS.show();
          Show_soln_checkbox.show();
          Hide_Out_sln.mousePressed(hide_Out_sln);
      }

      Hide_Out_X=createButton('-');
      Hide_Out_X.mousePressed(hide_Out_X);
          function hide_Out_X(){                    //run when press output hide button
              Hide_Out_X.html('+');
              Hide_Out_X.style('background-color','transparent');
              Value_XBox.hide();
              At_pointX_checkbox.hide();
              At_point.hide();
              X.hide();
              X_cord.hide();
              Y_at_X.hide();
              Tangent.hide();
              Hide_Out_X.mousePressed(show_Out_X);
          }
          function show_Out_X(){                     //run when press output show button
              Hide_Out_X.html('-');
              Hide_Out_X.style('background-color','lightcoral');
              Value_XBox.show();
              At_pointX_checkbox.show();
              At_point.show();
              X.show();
              X_cord.show();
              Y_at_X.show();
              Tangent.show();
              Hide_Out_X.mousePressed(hide_Out_X);
          }
        Hide_Out_Domain=createButton('-');
        Hide_Out_Domain.mousePressed(hide_Out_domain);
          function hide_Out_domain(){                    //run when press output hide button
              Hide_Out_Domain.html('+');
              Hide_Out_Domain.style('background-color','transparent');
              DOMAIN_Box.hide();
              Domain_checkbox.hide();
              Domain_Div.hide();
              DOMAIN.hide();
              Domain_type.hide();
              Domain_X1_Value.hide();
              Domain_X2_Value.hide();
              Domain_Range.hide();
              Hide_Out_Domain.mousePressed(show_Out_domain);
          }
          function show_Out_domain(){                     //run when press output show button
              Hide_Out_Domain.html('-');
              Hide_Out_Domain.style('background-color','lightcoral');
              DOMAIN_Box.show();
              Domain_checkbox.show();
              Domain_Div.show();
              DOMAIN.show();
              Domain_type.show();
              Domain_X1_Value.show();
              Domain_X2_Value.show();
              Domain_Range.show();
              Hide_Out_Domain.mousePressed(hide_Out_domain);
          }

//---------------------THINKVIL QUESTIONS--------------------------------------------------
      let Question_Box=createDiv('');
      let Question = createDiv('Instructions:<br>&nbsp;&nbsp;&nbsp; Press the "Hide (-)" button in the upper left corner to hide the questions.<br>&nbsp;&nbsp;&nbsp; Press the "Previous" and "Next" buttons to access Thinkvil questions.<br>&nbsp;&nbsp;&nbsp; Press the "Show Answer" button to view the correct answer.<br>&nbsp;&nbsp;&nbsp; Solve the questions in your notebook and use our simulation for better visualization and to find the correct answer.');
      let Show_Answer_btn=createButton('Show Answer');
      Show_Answer_btn.hide();
      Show_Answer_btn.mousePressed(showanswer_fn);
          function showanswer_fn(){
            Show_Answer_btn.html(Answer)
          }
      //-----------Next button-------------------------------------------------------------------
      let Next_btn=createButton('Next');
      let Q_No=0;
      Next_btn.mousePressed(next_fn);
          function next_fn(){
            Next_btn.style('background-color','RGBA(200,200,200,0.1)');
            Show_Answer_btn.show();
            Q_No+=1;
            if (Q_No == 1) {
              Question.html('Q-1: Given the quadratic equation \( y = x^2 + 2x - 3 \), determine the real roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Real roots: 1 and -3; Vertex: (-1, -4); Y-intercept: (0, -3); Axis of symmetry: x = -1';
          } else if (Q_No == 2) {
              Question.html('Q-2: For the quadratic equation \( y = x^2 + 4x + 4 \), find the real roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Real roots (repeated): -2 & -2 ; Vertex: (-2, 0); Y-intercept: (0, 4); Axis of symmetry: x = -2';
          } else if (Q_No == 3) {
              Question.html('Q-3: Given the quadratic equation \( y = x^2 + 4x + 5 \), identify the nature of the roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'No real roots; Vertex: (-2, 1); Y-intercept: (0, 5); Axis of symmetry: x = -2';
          } else if (Q_No == 4) {
              Question.html('Q-4: For the quadratic equation \( y = x^2 + 4x - 2 \), determine the point on the curve and the equation of the tangent line at \( x = 1 \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Point on the curve: (1, 3); Tangent line equation: y = 6x - 3';
          } else if (Q_No == 5) {
              Question.html('Q-5: Based on the previous quadratic equation, determine the range of the function for all real values of \( x \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-6, ∞)';
          } else if (Q_No == 6) {
              Question.html('Q-6: For the same equation, determine the range of the function if the domain is restricted to \( x \in [-1, 1] \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-6, 3]';
          } else if (Q_No == 7) {
              Question.html('Q-7: Given the quadratic equation \( y = -x^2 + 4x - 2 \), determine the range of the function for all real values of \( x \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: (-∞, 2]';
          } else if (Q_No == 8) {
              Question.html('Q-8: For the same equation, find the range of the function if the domain is restricted to \( x \in [-1, 1] \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-7, 2]';
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
      let Previous_btn=createButton('Previous');
      Previous_btn.mousePressed(previous_fn);
          function previous_fn(){
            Previous_btn.style('background-color','RGBA(100,200,200,0.1)')
            Q_No-=1;
            if (Q_No == 1) {
              Question.html('Q-1: Given the quadratic equation \( y = x^2 + 2x - 3 \), determine the real roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Real roots: 1 and -3; Vertex: (-1, -4); Y-intercept: (0, -3); Axis of symmetry: x = -1';
          } else if (Q_No == 2) {
              Question.html('Q-2: For the quadratic equation \( y = x^2 + 4x + 4 \), find the real roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Real roots (repeated): -2 & -2 ; Vertex: (-2, 0); Y-intercept: (0, 4); Axis of symmetry: x = -2';
          } else if (Q_No == 3) {
              Question.html('Q-3: Given the quadratic equation \( y = x^2 + 4x + 5 \), identify the nature of the roots, vertex, y-intercept, and the equation of the axis of symmetry.');
              Show_Answer_btn.html('Show Answer');
              Answer = 'No real roots; Vertex: (-2, 1); Y-intercept: (0, 5); Axis of symmetry: x = -2';
          } else if (Q_No == 4) {
              Question.html('Q-4: For the quadratic equation \( y = x^2 + 4x - 2 \), determine the point on the curve and the equation of the tangent line at \( x = 1 \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Point on the curve: (1, 3); Tangent line equation: y = 6x - 3';
          } else if (Q_No == 5) {
              Question.html('Q-5: Based on the previous quadratic equation, determine the range of the function for all real values of \( x \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-6, ∞)';
          } else if (Q_No == 6) {
              Question.html('Q-6: For the same equation, determine the range of the function if the domain is restricted to \( x \in [-1, 1] \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-6, 3]';
          } else if (Q_No == 7) {
              Question.html('Q-7: Given the quadratic equation \( y = -x^2 + 4x - 2 \), determine the range of the function for all real values of \( x \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: (-∞, 2]';
          } else if (Q_No == 8) {
              Question.html('Q-8: For the same equation, find the range of the function if the domain is restricted to \( x \in [-1, 1] \).');
              Show_Answer_btn.html('Show Answer');
              Answer = 'Range: [-7, 2]';
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
      let Hide_Qns=createButton('-');
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
      let X_I=width-360;
      let Y_I=10;
      /// Make Equation element input at same place
      let Quad_X=X_I+80;
      let Quad_Y=Y_I+70;
      // -------------------SOLUTIONS----------------------------------
      let X_O=width-360;
      let Y_O=180; 
      ///-------------------VALUE AT Point------------------------------
      let V_X=width-360;
      let V_Y=370;
      ///-------------------DOMAIN AND RANGE------------------------------
      let D_X=width-360;
      let D_Y=540;


      // ------------FULL SCREEN BUTTON-----------------------
      fullbtn.position(width/2+290,9*height/10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+100,9*height/10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(width/2+170,9*height/10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
      
      //-------------------QUADRATIC EQUATIONS------------------------------
      Input.position(X_I,Y_I).style('background-color','RGB(225,225,225)').style('padding','5px 220px 140px 120px').style('border','1px solid black').style('border-radius','10px');

      //QUADARATIC EQUATIONS
      QUAD.position(X_I+70,Y_I+15).style('font-size','20px').style('background-color','RGB(160,160,160)').style('padding','2px');
      y_Span.position(Quad_X-50, Quad_Y).style('font-size','25px');
      A.position(Quad_X,Quad_Y).size(35,25).style('font-size','15px');
      X_A.position(Quad_X+50,Quad_Y).style('font-size','25px');
      x_square.position(Quad_X+70,Quad_Y-10).style('font-size','15px');
      B.position(Quad_X+100,Quad_Y).size(35,25).style('font-size','15px');
      X_B.position(Quad_X+150,Quad_Y).style('font-size','25px');
      C.position(Quad_X+200,Quad_Y).size(35,25).style('font-size','15px');

    // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
      Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');

    // -------------------SOLUTIONS----------------------------------   
      Solution_Box.position(X_O,Y_O).style('padding','5px 240px 180px 100px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225)');
      Show_soln_checkbox.position(X_O+280,Y_O+15).style('transform','scale(1.8)');
      SOLUTION.position(X_O+100,Y_O+15).style('font-size','20px').style('padding','2px').style('background-color','RGB(160,160,160)');
      Output_ROOT.position(X_O+70,Y_O+60).style('font-size','20px');
      Output_Vertex.position(X_O+65,Y_O+90).style('font-size','20px');
      Output_Yintersect.position(X_O+60,Y_O+120).style('font-size','20px');
      Output_Axis_OS.position(X_O+60,Y_O+150).style('font-size','20px');

    //-------------------VALUE AT Point------------------------------
      Value_XBox.position(V_X,V_Y).style('border','1px solid black').style('padding','5px 220px 160px 120px').style('border-radius','10px').style('background-color','RGB(225,225,225)');
      At_pointX_checkbox.position(V_X+280,V_Y+10).style('transform','scale(1.8)');
      At_point.position(V_X+120,V_Y+10).style('font-size','20px').style('padding','2px').style('background-color','RGB(160,160,160)');
      X.position(V_X+120,V_Y+60).style('font-size','20px');
      X_cord.position(V_X+160,V_Y+60).size(30,20).style('font-size','15px');
      Y_at_X.position(V_X+50,V_Y+90).style('font-size','20px');
      Tangent.position(V_X+60,V_Y+120).style('font-size','20px');

    //-------------------DOMAIN AND RANGE------------------------------
      DOMAIN_Box.position(D_X,D_Y).style('border-radius','10px').style('border','1px solid black').style('padding','5px 220px 140px 120px').style('background-color','RGB(225,225,225)');
      Domain_checkbox.position(D_X+280,D_Y+10).style('transform','scale(1.8)');
      Domain_Div.position(D_X+100,D_Y+10).style('padding','2px').style('background-color','RGB(160,160,160)')
      DOMAIN.position(D_X+40,D_Y+60);
      Domain_type.position(D_X+120,D_Y+60);
      Domain_X1_Value.position(D_X+223,D_Y+60).size(30,20);
      Domain_X2_Value.position(D_X+269,D_Y+60).size(30,20);
      Domain_Range.position(D_X+55,D_Y+100);
      
      // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
      Hide_Out_sln.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      Hide_Out_X.position(V_X+10,V_Y+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');;
      Hide_Out_Domain.position(D_X+10,D_Y+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');;

      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
      Question_Box.position(0,0).size(width-370,260).style('background-color','RGBA(225,225,225)').style('border','2px solid black').style('border-radius','10px');
      Question.position(50,20).style('font-size','20px').size(width-440,100);
      Show_Answer_btn.position(100,150).style('font-size','20px').style('border','1px solid black').style('border-radius','5px');
      Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px');
      Next_btn.position(width-460,200).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
      Previous_btn.position(width-530,200).size(60,30).style('background-color','RGBA(200,200,200,0.8)').style('font-size','12px').style('border-radius','40px').style('border','3px solid rgb(0)');
    
  }
  ResponsiveMediumsize=function ResponsiveMediumsize(){
      let X_I=width-270;
      let Y_I=10;
      /// Make Equation element input at same place
      let Quad_X=X_I+60;
      let Quad_Y=Y_I+60;
      // -------------------SOLUTIONS----------------------------------
      let X_O=40;
      let Y_O=20; 
      ///-------------------VALUE AT Point------------------------------
      let V_X=40;
      let V_Y=190;
      ///-------------------DOMAIN AND RANGE------------------------------
      let D_X=40;
      let D_Y=340;

      // ------------FULL SCREEN BUTTON-----------------------
      fullbtn.position(width/2+290,9*height/10).style('font-size','13px').style('background-color','RGB(225,225,225)').style('padding','5px').style('border-radius','5px');

      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+100,9*height/10).style('font-size','13px').style('background-color','lightblue').style('padding','5px').style('border-radius','5px');
      Zoom_OUT.position(width/2+170,9*height/10).style('font-size','13px').style('background-color','lightgreen').style('padding','5px').style('border-radius','5px');
      
      //-------------------QUADRATIC EQUATIONS------------------------------
      Input.position(X_I,Y_I).style('background-color','RGB(225,225,225)').style('padding','5px 130px 110px 130px').style('border','1px solid black').style('border-radius','10px');
      QUAD.position(X_I+50,Y_I+15).style('font-size','17px').style('background-color','RGB(160,160,160)').style('padding','2px');
      y_Span.position(Quad_X-40, Quad_Y).style('font-size','20px');
      A.position(Quad_X,Quad_Y).size(25,20);
      X_A.position(Quad_X+35,Quad_Y).style('font-size','20px');
      x_square.position(Quad_X+55,Quad_Y-10).style('font-size','15px');
      B.position(Quad_X+75,Quad_Y).size(25,20);
      X_B.position(Quad_X+115,Quad_Y).style('font-size','20px');
      C.position(Quad_X+150,Quad_Y).size(25,20);

      // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
      Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');

      // ----------------------------- SOLUTIONS ------------------------------------------------  
      Solution_Box.position(X_O,Y_O).style('padding','5px 130px 160px 130px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225)');

      Show_soln_checkbox.position(X_O+210,Y_O+15).style('transform','scale(1.5)');
      SOLUTION.position(X_O+80,Y_O+15).style('font-size','18px').style('padding','2px').style('background-color','RGB(160,160,160)');
      Output_ROOT.position(X_O+70,Y_O+50).style('font-size','17px');
      Output_Vertex.position(X_O+65,Y_O+75).style('font-size','17px');
      Output_Yintersect.position(X_O+60,Y_O+100).style('font-size','17px');
      Output_Axis_OS.position(X_O+40,Y_O+125).style('font-size','17px');

    //-------------------VALUE AT Point------------------------------
      Value_XBox.position(V_X,V_Y).style('border','1px solid black').style('padding','5px 130px 140px 130px').style('border-radius','10px').style('background-color','RGB(225,225,225)');
      At_pointX_checkbox.position(V_X+210,V_Y+10).style('transform','scale(1.5)');
      At_point.position(V_X+90,V_Y+10).style('font-size','18px').style('padding','2px').style('background-color','RGB(160,160,160)');
      X.position(V_X+100,V_Y+45).style('font-size','18px');
      X_cord.position(V_X+140,V_Y+40).size(25,20);
      Y_at_X.position(V_X+50,V_Y+70).style('font-size','17px');
      Tangent.position(V_X+50,V_Y+100).style('font-size','17px');

      //-------------------DOMAIN AND RANGE------------------------------
      
      DOMAIN_Box.position(D_X,D_Y).style('border-radius','10px').style('border','1px solid black').style('padding','5px 130px 120px 130px').style('background-color','RGB(225,225,225)');
      Domain_checkbox.position(D_X+220,D_Y+10).style('transform','scale(1.5)');
      Domain_Div.position(D_X+60,D_Y+10).style('font-size','18px').style('padding','2px').style('background-color','RGB(160,160,160)');
      DOMAIN.position(D_X+10,D_Y+50).style('font-size','17px');
      Domain_type.position(D_X+80,D_Y+50).style('font-size','17px');
      Domain_X1_Value.position(D_X+173,D_Y+50).size(25,20);
      Domain_X2_Value.position(D_X+212,D_Y+50).size(25,20);
      Domain_Range.position(D_X+45,D_Y+80).style('font-size','17px');
      
      // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
      Hide_Out_sln.position(X_O+10,Y_O+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');
      Hide_Out_X.position(V_X+10,V_Y+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');
      Hide_Out_Domain.position(D_X+10,D_Y+5).style('font-size','14px').style('background-color','lightcoral').style('border-radius','5px');

      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
      Question_Box.position(0,0).size(width,260).style('background-color','RGBA(225,225,225)').style('border','2px solid black').style('border-radius','10px');
      Question.position(50,20).style('font-size','18px').size(width-100,100);
      Show_Answer_btn.position(100,150).style('font-size','18px').style('border','1px solid black').style('border-radius','5px');
      Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px').style('border','2px solid black');
      Next_btn.position(width-100,200).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
      Previous_btn.position(width-180,200).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

  }
  ResponsiveSmallsize=function ResponsiveSmallsize(){
      let X_I=width-250;
      let Y_I=1*height/20;
      /// Make Equation element input at same place
      let Quad_X=X_I+60;
      let Quad_Y=Y_I+50;
      // -------------------SOLUTIONS----------------------------------
      let X_O=10;
      let Y_O=1*height/20; 
      ///-------------------VALUE AT Point------------------------------
      let V_X=10;
      let V_Y=7*height/20;
      ///-------------------DOMAIN AND RANGE------------------------------
      let D_X=10;
      let D_Y=12*height/20;

      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.hide();

      //--------------Zoom IN and OUT--------------------------------
      Zoom_IN.position(width/2+20,9*height/10).style('font-size','10px').style('background-color','lightblue').style('padding','2px').style('border-radius','5px');
      Zoom_OUT.position(width/2+80,9*height/10).style('font-size','10px').style('background-color','lightgreen').style('padding','2px').style('border-radius','5px');

      //-------------------QUADRATIC EQUATIONS------------------------------
      Input.position(X_I,Y_I).style('background-color','RGB(225,225,225)').style('padding','5px 120px 90px 120px').style('border','1px solid black').style('border-radius','10px');
      QUAD.position(X_I+50,Y_I+10).style('font-size','15px').style('background-color','RGB(160,160,160)').style('padding','2px');
      y_Span.position(Quad_X-40, Quad_Y).style('font-size','15px');
      A.position(Quad_X,Quad_Y).size(20,15).style('font-size','13px');
      X_A.position(Quad_X+30,Quad_Y).style('font-size','15px');
      x_square.position(Quad_X+50,Quad_Y-10).style('font-size','15px');
      B.position(Quad_X+65,Quad_Y).size(20,15).style('font-size','13px');
      X_B.position(Quad_X+105,Quad_Y).style('font-size','15px');
      C.position(Quad_X+135,Quad_Y).size(20,15).style('font-size','13px');

      // ----------INPUT HIDE AND SHOW BUTTON--------------------------------------------------------------------------
      Hide_INbtn.position(X_I+10,Y_I+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');

      // ----------------------------- SOLUTIONS ------------------------------------------------  
      Solution_Box.position(X_O,Y_O).style('padding','5px 110px 125px 110px').style('border-radius','10px').style('border','1px solid black').style('background-color','RGB(225,225,225)');
      Show_soln_checkbox.position(X_O+170,Y_O+10).style('transform','scale(1)');
      SOLUTION.position(X_O+70,Y_O+10).style('font-size','13px').style('padding','2px').style('background-color','RGB(160,160,160)');
      Output_ROOT.position(X_O+70,Y_O+35).style('font-size','13px');
      Output_Vertex.position(X_O+65,Y_O+55).style('font-size','13px');
      Output_Yintersect.position(X_O+60,Y_O+75).style('font-size','13px');
      Output_Axis_OS.position(X_O+40,Y_O+95).style('font-size','13px');

      //-------------------VALUE AT Point------------------------------
      Value_XBox.position(V_X,V_Y).style('border','1px solid black').style('padding','5px 110px 110px 110px').style('border-radius','10px').style('background-color','RGB(225,225,225)');
      At_pointX_checkbox.position(V_X+170,V_Y+10).style('transform','scale(1)');
      At_point.position(V_X+80,V_Y+10).style('font-size','13px').style('padding','2px').style('background-color','RGB(160,160,160)');
      X.position(V_X+80,V_Y+35).style('font-size','13px');
      X_cord.position(V_X+110,V_Y+35).size(15,10).style('font-size','10px');
      Y_at_X.position(V_X+50,V_Y+55).style('font-size','13px');
      Tangent.position(V_X+35,V_Y+80).style('font-size','13px');

      //-------------------DOMAIN AND RANGE------------------------------
      DOMAIN_Box.position(D_X,D_Y).style('border-radius','10px').style('border','1px solid black').style('padding','5px 110px 100px 110px').style('background-color','RGB(225,225,225)');
      Domain_checkbox.position(D_X+170,D_Y+10).style('transform','scale(1)');
      Domain_Div.position(D_X+50,D_Y+10).style('font-size','13px').style('padding','2px').style('background-color','RGB(160,160,160)');
      DOMAIN.position(D_X+15,D_Y+40).style('font-size','13px');
      Domain_type.position(D_X+70,D_Y+40).style('font-size','12px');
      Domain_X1_Value.position(D_X+150,D_Y+45).size(15,10).style('font-size','10px');
      Domain_X2_Value.position(D_X+178,D_Y+45).size(15,10).style('font-size','10px');
      Domain_Range.position(D_X+45,D_Y+70).style('font-size','13px');
      
      // ------------------ OUTPUT HIDE AND SHOW BUTTON -----------------------------------------------------------------------
      Hide_Out_sln.position(X_O+10,Y_O+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      Hide_Out_X.position(V_X+10,V_Y+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      Hide_Out_Domain.position(D_X+10,D_Y+5).style('font-size','11px').style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');

      //----------------------THINKVIL QUESTIONS-------------------------------------------------------------------------------
      Question_Box.position(0,0).size(width,180).style('background-color','RGBA(225,225,225)').style('border','1px solid black').style('border-radius','10px');
      Question.position(50,20).style('font-size','15px').size(width-100,100);
      Show_Answer_btn.position(100,115).style('font-size','15px').style('border','1px solid black').style('border-radius','5px');
      Hide_Qns.position(10,5).style('background-color','lightcoral').style('border-radius','5px').style('border','1px solid black');
      Next_btn.position(width-100,140).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');
      Previous_btn.position(width-180,140).size(60,30).style('background-color','RGBA(200,200,200,1)').style('font-size','10px').style('border-radius','40px').style('border','2px solid rgb(0)');

  }

}