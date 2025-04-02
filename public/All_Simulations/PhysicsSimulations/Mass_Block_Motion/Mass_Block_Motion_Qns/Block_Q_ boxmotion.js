class boxmotion {
     constructor(Force_type,Force,Mass,Angle,static_const,kinetic_const){
         this.F_type=Force_type;
          this.F=Force;
         this.M=Mass;
         this.A_F=Angle;
         this.S_const=static_const;
         this.K_const=kinetic_const;
         this.Fr_F;                      //friction force
         this.Max_Fr_F;                  //max friction force
         this.t=0;                                //time 
         this.X=0;

          // Normal Reaction 
         if(this.F_type==='Push'){
               this.N=Mass*g+Force*sin(Angle);
         }else{
               this.N=Mass*g-Force*sin(Angle);
         }
         //Normal force cannot be negative
         if(this.N<0){
          this.N=0;
         }
          // Acceleration and Friction force  
         this.A=(Force*cos(this.A_F)-this.S_const*this.N)/Mass;
         if(this.A<0){
              this.Fr_F=this.F*cos(this.A_F);
              this.Max_Fr_F=this.S_const*this.N;
              this.A=0;
         }else{
              this.Fr_F=this.K_const*this.N;
              this.Max_Fr_F=this.Fr_F;
               this.A=(Force*cos(this.A_F)-this.K_const*this.N)/Mass;                   // update acceleration when block start moving then kinetic friction work and acceleration will change by previous
         }
       
          this.Vect=function(X,Y,Angle,Value,colors){
               push();
                   translate(X,Y);
                   rotate(Angle);
                   fill(colors);
                       beginShape();
                           vertex(0,-5);
                           vertex(Value,-5);
                           vertex(Value,-9);
                           if(Value>=0){
                               vertex(Value+16,0);
                           }else{
                               vertex(Value-16,0);
                           }
                           vertex(Value,9);
                           vertex(Value,5);
                           vertex(0,5);
                       endShape(CLOSE);
               pop();
           }
     }
     //---------SIMULATION UPDATE AND EQUATIONS-------------------------------------------------------------------------
     RealTime_update(){
          // motion equations
          this.X=this.A*this.t**2/2;
               // time update 
               this.t+=1/60; 
          }
     //------------- SHOW INPUT VALUES ON CANVAS------------------------------------------------------------------------
     Input_value(){
          push();
               translate(this.X,0);
               textSize(20);
               text(this.M+'Kg',60,90);
               if(this.A>0){                  //Kinetic co-eff work when block in motion otherwise static coeff
                    text("Kinetic co-eff: "+this.K_const,200,150);
               }else{
                    text("Static co-eff: "+this.S_const,200,150);
               }
          pop();
     }
     //----------------FRICTION SURFACE---------------------------------------------------------------------------------
     Friction_Surface(){
          push();
               translate(0,3*height/4);
               fill(0);
               if(this.A>0){
                    for(var i=0;i<width/10;i++){
                         ellipse(10*i,0,5,6*this.K_const); 
                    }     
               }else{
                    for(var i=0;i<width/10;i++){
                         ellipse(10*i,0,5,6*this.S_const);
                    } 
               }
               rect(0,0,width,10);
               fill('rgb(0,200,80)');
               rect(0,10,width,height/4);
          pop();
     }
     //----------------BLOCK MOVEMENT----------------------------------------------------------------------------------
     Block_Motion(){
     push();
          translate(this.X,0);
          if(this.F_type==='Push' && this.F!=0){
               fill(244,164,96,255*this.M/10);
               strokeWeight(2);
               rect(0,0,160,160,10);
                    push();
                         translate(-0,5);
                         rotate(this.A_F);
                         image(Push_hand,-50,0,200,90);
                    pop();
          }else if(this.F_type==='Pull' && this.F!=0){
                    push();
                         translate(160,20);
                         strokeWeight(15);
                         point(0,0);
                         strokeWeight(6);
                         rotate(-this.A_F);
                         line(0,0,50,0);
                         image(Pull_hand,110,0,200,90);
                    pop();  
               fill(244,164,96,255*this.M/10);
               strokeWeight(2);
               rect(0,0,160,160,10);
          }else{
               fill(244,164,96,255*this.M/10);
               strokeWeight(2);
               rect(0,0,160,160,10);
          }
     pop();
     }
     //------------------INPUT AND OUTPUT DOM UPDATE---------------------------------------------------------------------
     Input_Output_update(){
          //Force INPUT
          Force_Div.html('Force : '+this.F+' N');
          Angle_force_Div.html('Angle : '+this.A_F+'°');
          //Input
          Mass_Div.html('Mass : '+this.M+' Kg');
          Static_const_Div.html('Static co-eff. : '+this.S_const);
          Kinetic_const_Div.html('Kinetic co-eff. : '+this.K_const);
          //OUTPUT
          Output_Acc_Div.html(' Acceleration  : '+round(this.A,1)+' m/s²')
          Output_Normal_Div.html('Normal Force : '+round(this.N,1)+' N')
          Output_Friction_Div.html('Friction Force  : '+round(this.Fr_F,1)+' N')
          Output_MaxF_Div.html('Max Friction Force : '+round(this.Max_Fr_F,1)+' N')
     }
     //--------------------SHOW FORCE VECTORS ON CANVAS-------------------------------------------------------------------
     Force_Vector(){
          translate(this.X,0);
          // component for Force
               push();
               if(this.F_type==='Push'){
                    translate(0,0);
                    this.Vect(0,0,this.A_F,this.F,'red');
                    this.Vect(0,0,0,this.F*cos(this.A_F),'blue');
                    this.Vect(0,0,90,this.F*sin(this.A_F),'green');          
               }else{
                    translate(160,20);
                    this.Vect(0,0,-this.A_F,this.F,'red'); 
                    this.Vect(0,0,0,this.F*cos(this.A_F),'blue');
                    this.Vect(0,0,-90,this.F*sin(this.A_F),'green');
               }
               pop();
     } 
     //----------------------FORCE VECTOR BOX---------------------------------------------------------------------------
     Force_Vector_Box(){
          push();
               fill(0);
               textSize(18);
               strokeWeight(1);         
                    push();
                         fill(205,100);
                         rect(0,0,250,170,20);
                         rect(60,10,130,30,5);
                    pop();
               text('VECTORS ',80,30);
               text(' Force : ',80,70);
               this.Vect(190,65,0,20,'red');
               textSize(16);
               text('Force (x-direction) : ',30,100);
               this.Vect(190,95,0,20,'blue');
               text('Force (y-direction)  : ',25,130);
               this.Vect(190,125,0,20,'green');
          pop();
          } 
     //----------------------SHOW OUTPUT VECTORS ON SCREEN---------------------------------------------------------------     
     Output_vector(){
          push();
               translate(this.X,0);
               //ACCELERATION
               push();
                    translate(80,-40);
                    this.Vect(0,0,0,this.A,'yellow');
               pop();

               //NORMAL REACTION 
               push();
                    translate(80,160);
                    this.Vect(0,0,-90,this.N,'pink');     
               pop();
               //FRICTION
               push();
                    translate(60,160);
                    this.Vect(0,0,0,-this.Fr_F,'purple');     
               pop();
          pop();
     }
     //----------------------- OUTPUT VECTORS BOX------------------------------------------------------------------------
     Output_Vector_Box(){
          push();
               translate(20,40);
               fill(0);
               textSize(18);
               strokeWeight(1);         
                    push();
                         fill(205,100);
                         rect(0,0,250,170,20);
                         rect(60,10,130,30,5);
                    pop();
               text('VECTORS ',80,30);
               text(' Acceleration : ',35,70);
               this.Vect(170,65,0,20,'yellow');
               text('Normal Force : ',30,100);
               this.Vect(170,95,0,20,'pink');
               text('Friction Force  : ',25,130);
               this.Vect(170,125,0,20,'purple');
          pop();
          }
}