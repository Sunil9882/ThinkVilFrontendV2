class motion{
   constructor(mass_A,mass_B,mass_C){
      this.M_L=mass_A;              
      this.M_C=mass_B;              
      this.M_R=mass_C;  
       this.t=0;           //time update
   
      //Note: here we have takeng postive direction on upside for left and right bolck acceleration and for center block downward direction is postive 
      this.A_L=(3*mass_B*mass_C-mass_A*mass_B-4*mass_A*mass_C)*g/(mass_A*mass_B+mass_B*mass_C+4*mass_A*mass_C);
      this.A_C=(mass_A*mass_B+mass_B*mass_C-4*mass_A*mass_C)*g/(mass_A*mass_B+mass_B*mass_C+4*mass_A*mass_C);
      this.A_R=(3*mass_A*mass_B-mass_B*mass_C-4*mass_A*mass_C)*g/(mass_A*mass_B+mass_B*mass_C+4*mass_A*mass_C);
      this.An=(this.A_R-this.A_L);
      // Tension in rope 
      this.T_1=this.M_L*(g+this.A_L);
      this.T_2=2*this.T_1;
   
      //DISPLACEMENT FOR PERTIFULAR ROPE & BLOCK
      this.X_L;
      this.X_C;
      this.X_R;
   
      this.thita_L;
      this.thita_C;
      this.thita_R;
    
     this.Vector=function(X,Y,angle,mag,color){
      push();
      translate(X,Y);
      rotate(angle);
      fill(color);
          beginShape();
              vertex(0,0);
              vertex(5,0);
              vertex(5,mag*5);
              vertex(10,mag*5);
              if(mag>=0){
               vertex(0,mag*5+15);
              }else{
               vertex(0,mag*5-15);
              }
              vertex(-10,mag*5);
              vertex(-5,mag*5);
              vertex(-5,0);
          endShape(CLOSE);
      pop();
      }
      //Make Tesnion vector
      this.Tens_vector=function(X,Y,angle,mag,color){
            push();
               translate(X,Y);
               rotate(angle);
               fill(color);
               beginShape();
                  vertex(0,0);
                  vertex(-15,-8);
                  vertex(-15,-4);
                  vertex(-15-10,-4);
                  vertex(-15-10,0);
                  vertex(-15-10,4);
                  vertex(-15,4);
                  vertex(-15,8);
               endShape(CLOSE);
               translate(mag/10,0);
               scale(-1,1);
               beginShape();
                  vertex(0,0);
                  vertex(-15,-8);
                  vertex(-15,-4);
                  vertex(-15-10,-4);
                  vertex(-15-10,0);
                  vertex(-15-10,4);
                  vertex(-15,4);
                  vertex(-15,8);
               endShape(CLOSE);
            pop();  
      }
   }
   //------SIMULATION TIME AND EQUTIONS------------------------------------------------------------------------------------------
   Realtime_update(){
      this.X_L=1/2*this.A_L*this.t**2;
      this.X_C=1/2*this.A_C*this.t**2; 
      this.X_R=1/2*this.A_R*this.t**2; 

      this.thita_L=1/2*this.A_L*this.t**2;
      this.thita_R=1/2*this.A_R*this.t**2;
      this.thita_C=1/2*this.An*this.t**2;

      // controll simulation time 
      if(this.X_L>=200-38 || this.X_R>=200-38 || this.X_C<=-200+38 ){     //stop motion when bloc touch the pully 
            //No time update
      }else if(this.X_L<-290 || this.X_R<-290){         // this condition happen when one mass travel distance more than 290 like when we choose mass like (10,10,5) 
            // No time update 
      }else{
         this.t+=1/30;
      }
   }
   //------------Pully motion----------------------------------------------------------------------------------------------------
  Pully_motion(){
      // LEFT SIDE BLOCK,PULLY AND ROPE SYSTEM  
      push();
         translate(0,100);
         // make rope 
         push();
            strokeWeight(4); 
            //according width of rope 
            if(this.A_L>0 && this.A_C>=0){
               line(-34,0,-34,200-this.X_L);
               line(34,0,34,this.X_L);
               stroke(255,0,0);
               line(34,this.X_L,34,200+this.X_C);
            }else if(this.A_L<0 && this.A_C>=0){
               line(-34,-this.X_L,-34,200-this.X_L);
               stroke(255,0,0);
               line(-34,0,-34,-this.X_L);
               line(34,0,34,200+this.X_C);
            }else if(this.A_L>0 && this.A_C<0){
               line(-34,0,-34,200-this.X_L);
               line(34,0,34,this.X_L);
               stroke(255,0,0)
               line(34,this.X_L,34,200+this.X_C);
            }else{
               line(-34,-this.X_L,-34,200-this.X_L);
               stroke(255,0,0)
               line(-34,0,-34,-this.X_L);
               line(34,0,34,200+this.X_C);
            }
         pop();
         // make left block Mass A 
         push();
            fill(244,164,96,255*this.M_L/10);
            strokeWeight(2);
            translate(-75,200-this.X_L);
            rect(0,0,80,50,5);
         pop();
         // make Left pully 
         push();
            strokeWeight(2);
            fill(140);
            circle(0,0,70);
            fill(180);
            circle(0,0,55);
               // rotation of pully
               push();
               rotate(this.thita_L);
               line(0,0,0,-26);
               line(0,0,-25,10); 
               line(0,0,25,10); 
               pop();
         pop();
      pop();

      //RIGHT SIDE PULLY,BLOCK AND ROPE SYSTEM
      push();
         translate(160,100); 
         strokeWeight(4);
         push();
            if(this.A_R>0 && this.A_C>=0){
               line(34,0,34,200-this.X_R);
               line(-34,0,-34,this.X_R);
               stroke(255,0,0)
               line(-34,this.X_R,-34,200+this.X_C);
            }else if(this.A_R<0 && this.A_C>=0){
               line(34,-this.X_R,34,200-this.X_R);
               stroke(255,0,0)
               line(34,0,34,-this.X_R);
               line(-34,0,-34,200+this.X_C);
            }else if(this.A_R>0 && this.A_C<0){
               line(34,0,34,200-this.X_R);
               line(-34,0,-34,this.X_R);
               stroke(255,0,0)
               line(-34,this.X_R,-34,200+this.X_C);
            }else{
               line(34,-this.X_R,34,200-this.X_R);
               stroke(255,0,0)
               line(34,0,34,-this.X_R);
               line(-34,0,-34,200+this.X_C);
            }
         pop();
         // make right mass block 
         push();
            fill(244,164,96,255*this.M_R/10);
            strokeWeight(2);
            translate(-5,200-this.X_R);
            rect(0,0,80,50,5);
         pop();
         // make pully 
         push();
            strokeWeight(2);
            fill(140);
            circle(0,0,70);
            fill(180);
            circle(0,0,55);
            // rotation of pully 
            push();
            rotate(-this.thita_R);
            line(0,0,0,-26);
            line(0,0,-25,10); 
            line(0,0,25,10);
            pop();
         pop();
      pop();

      //CENTERED PULLY,BLOCK AND ROPE SYSTEM
      push();
         translate(80,300+this.X_C); 
         push();
            strokeWeight(2);
            fill(140);
            circle(0,0,94);
            fill(180);
            circle(0,0,74);
            // rotation of pully 
            push();
            rotate(this.thita_C);
            line(0,0,0,-35);
            line(0,0,-25,25); 
            line(0,0,34,10); 
            strokeWeight(12);
            point(0,0);            
            pop();
         pop();
         //Center rope
         push();
            strokeWeight(4);
            line(0,0,0,100);
         pop();
         //Maket center mass block
         push();
            strokeWeight(2);
            fill(244,164,96,255*this.M_C/10);
            rect(-40,100,80,50,5); 
         pop();
      pop();
      
      // FIXED HANG PART
      push();
         strokeWeight(2);
         // make fixed part of pully 
         fill(180); 
         rect(-10,50,20,60,0,0,10,10);
         rect(-200,0,550,50,0,0,10,10)
         circle(0,100,10);
         // make fixed part of pully 
         translate(150,0);
         rect(0,50,20,60,0,0,10,10);
         circle(10,100,10);
      pop();

  }
  //--------------INPUT VALUES ON CANVAS-----------------------------------------------------------------------------------------
  Input_Values(){
      push();
         //LEFT MASS
         push();
            translate(-75,300-this.X_L);
            fill(0);
            text(this.M_L+'Kg',20,30);
         pop();
      //CENTER MASS
         push();
         fill(0);
            translate(80,300+this.X_C); 
            text(this.M_C+'Kg',-10,130);
         pop();
         //RIGHT MASS
         push();
            translate(160,300-this.X_R);
            fill(0);
            text(this.M_R+'Kg',20,30);
         pop();
   pop();

   }
   //-----------------UPDATE INPUT AND OUTPUT VALUES-----------------------------------------------------------------------------
  Input_Output_update(){
   //INPUT
   Mass_A_Div.html("Mass (A) :"+this.M_L+' kg');
   Mass_B_Div.html("Mass (B) :"+this.M_C+' kg');
   Mass_C_Div.html("Mass (C) :"+this.M_R+' kg');
   //OUTPUT
   Acc_A_Div.html("Acceleration A :"+round(abs(this.A_L),1)+' m/s²');       //abs for positive value of acceleration
   Acc_B_Div.html("Acceleration B :"+round(abs(this.A_C),1)+' m/s²');
   Acc_C_Div.html("Acceleration C :"+round(abs(this.A_R),1)+' m/s²');
   Ten_1_Div.html("Tension 1 :"+round(this.T_1,1)+' N');
   Ten_2_Div.html("Tension 2 :"+round(this.T_2,1)+' N');

  }
  //---------------------SHOW OUTPUT VECTORS ON CANVAS----------------------------------------------------------------------------
  Output_Vectors(){
      push();
         //ACCELERATION VECTORS
         this.Vector(-100,-this.X_L+330,0,-this.A_L,'blue');
         this.Vector(20,this.X_C+430,0,this.A_C,'green');
         this.Vector(260,-this.X_R+330,0,-this.A_R,'red');
         //TENSION 1
         this.Tens_vector(-34,260-this.X_L,-90,this.T_1,'purple');
         this.Tens_vector(35,260+this.X_C,-90,this.T_1,'purple');
         this.Tens_vector(127,260+this.X_C,-90,this.T_1,'purple');
         this.Tens_vector(195,260-this.X_R,-90,this.T_1,'purple');
         //TENSION 2
         this.Tens_vector(80,375+this.X_C,-90,this.T_2,'yellow');
      pop();
  }
  // ---------------------OUTPUT VECTOR BOX----------------------------------------------------------------------------------------
  Output_Vectors_Box(){
      //VECTORS BOX  
      push();
      fill(0);
      textSize(18);
      strokeWeight(1);         
         push();
            fill(205,100);
            rect(0,0,250,220,15);
            rect(70,10,120,30,5);
         pop();
      text('VECTORS',90,30);
      text('Acceleration A : ',30,70);
      this.Vector(180,65,-90,4,'blue');
      text('Acceleration B : ',30,100);
      this.Vector(180,95,-90,4,'green');
      text('Acceleration C : ',30,130);
      this.Vector(180,125,-90,4,'red');
      text('Tension 1 : ',60,160);
      this.Tens_vector(190,155,0,0,'purple');
      text('Tension 2 : ',60,190);
      this.Tens_vector(190,185,0,0,'yellow');
      pop();
  }
}