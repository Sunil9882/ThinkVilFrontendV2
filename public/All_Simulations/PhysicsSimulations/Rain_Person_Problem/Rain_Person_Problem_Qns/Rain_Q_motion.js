class Motion{
    constructor(Vel_O,Angle_U,Vel_R,Angle_R){
        // INPUPT VALUES  
        this.V_O=Vel_O;
        this.A_U=Angle_U;
        this.V_R=Vel_R;
        this.A_R=Angle_R;
        this.S_A;                      //safe angle
        this.X;                        //Observer travel distance
        this.T=0;                       //Time

        //Vecotors
        this.Vect=function(X,Y,Angle,Value,colors){
            push();
                translate(X,Y);
                rotate(Angle);
                fill(colors);
                    beginShape();
                        vertex(0,-4);
                        vertex(Value,-4);
                        vertex(Value,-9);
                        if(Value>0){
                            vertex(Value+15,0);
                        }else{
                            vertex(Value-15,0);
                        }
                        vertex(Value,9);
                        vertex(Value,4);
                        vertex(0,4);
                    endShape(CLOSE);
            pop();
        }
    }
    Realtime_update(){
        //Displacement equations for observer
        this.X=this.V_O*this.T;
        scrn_X=this.X;                                // For move scrn_X w.r.t to observer
        
         // Time Update 
         this.T+=1/5;             //simulation speed control
    }
    //------------Make Ground-------------------------------------------------------------------------------------
    Ground(){
        // Make Ground of height/4 thick 
        push();
            translate(0,3*height/4);
            fill(0);
            rect(0,0,width,10);
            fill('rgb(0,200,80)');
            rect(0,10,width,height/4);
        pop();
    }
    //----------Make milestone on road----------------------------------------------------------------------------
    MileStone(){
        push();
            fill(0);
            for(let i=floor(scrn_X/160);i<floor((width+scrn_X)/160)+2;i++){
                ellipse(160*i,3*height/4,5,4);
        }
        pop();
    }
    //-------------- Make Rainfall--------------------------------------------------------------------------------
    Rainfall(){
        // Rain movement displacement equations 
        let D=this.V_R*this.T;                          //D=displacement of rain 
        let X=D*sin(this.A_R);                         //rain movement in X-direction
        let Y=D*cos(this.A_R);                         //rain movement in Y-direction
        // Design Rain
        let H=3*height/4;           //H=cloud to ground distance 
        let R_D=20;                 // R_D=distance between rain drops
        for(let j=0;j<H/R_D;j++){
            for(let i=-floor((X-scrn_X)/R_D);i<1+width/R_D-floor((X-scrn_X)/R_D);i++){
                let X_d=R_D*i+X;
                let Y_d=(-R_D*j+Y)%H;                            //when rain touch the ground automatic disappear and start from first
                    // Drops
                    push();
                        translate(X_d,Y_d);
                        rotate(-this.A_R);
                        image(drop,0,0,15,15);
                    pop();
            }
        }

        // Make cloud 
        push();
            fill(230);
            for(let i=floor(scrn_X/90);i<floor((width+scrn_X)/90)+2;i++){
                ellipse(90*i,0,100,40);
            }
        pop();

    
    }
    //--------------Design Observer------------------------------------------------------------------------------- 
    Observer(){
        // Design Safe are due to Umberlla
        push();
            // Show the Safe area created by umbrella 
            if(Show_SafeArea){
                fill(0,195,255);
            }else{
                fill(140,195,255);
            }
            stroke(140,195,255);

            // Now Make area 
            const L=250;                        //side fixed length of umbrella 
            let a=this.V_O-this.V_R*sin(this.A_R);                     // horizontal component of velocity of rain w.r.t man
            let b=this.V_R*cos(this.A_R);                               // vertical component of velocity of rain w.r.t man

            let thi_ta=atan(b/a);                                        //Angle of safe area with horizontal
            this.S_A=atan(a/b);                                           //Safe angle of umbrella with vertical                                      

            // safe area side length 
            let L_1=(40+L*cos(16-this.A_U))/sin(thi_ta);                      //Here 16 degree is the angle of umbrella side length with vertical
            let L_2=(40+L*cos(16+this.A_U))/sin(thi_ta);                      //40 is the extran distance for safe area below the rotation point of umbrella
            // make all four point for quad shape 
            let V_1=createVector(-L*sin(16-this.A_U),-L*cos(16-this.A_U));
            let V_2=createVector(L*sin(16+this.A_U),-L*cos(16+this.A_U));
            let V_3=createVector(-L*sin(16-this.A_U)-L_1*cos(thi_ta),-L*cos(16-this.A_U)+L_1*sin(thi_ta));
            let V_4=createVector(L*sin(16+this.A_U)-L_2*cos(thi_ta),-L*cos(16+this.A_U)+L_2*sin(thi_ta));
        
            // make safe area with quad shape 
            translate(this.X,-20*Zoom);                                      //Scale
            scale(Zoom);
            quad(V_1.x,V_1.y,V_2.x,V_2.y,V_4.x,V_4.y,V_3.x,V_3.y);
            //Rotation point of umbrella and safe area
            stroke(0);
            strokeWeight(4);
            point(0,0);
            // line(0,0,V_2.x,V_2.y);
            // line(0,0,V_1.x,V_1.y);
        pop();

        // Movement of observer 
        push();
            translate(this.X,-20*Zoom);                                  //scale
                push();
                    rotate(2.5*this.X); 
                    scale(Zoom);                                   //scale
                    image(wheel,0,0,40,40);
                pop();
            rotate(this.A_U);
            strokeWeight(4);
            stroke(0);
            point(0,0);
            scale(Zoom);                                          //scale
            image(observer,1,-141,140,290);
        pop();
    }
    //-------------Update Input values---------------------------------------------------------------------------- 
    Input_Output_update(){
        //INPUT
       Input_Vel_O.html("Velocity : "+this.V_O+'m/s');
       Input_Ang_O.html("Angle : "+this.A_U+'°');
       Input_Vel_R.html("Velocity : "+this.V_R+'m/s');
       Input_Ang_R.html("Angle : "+this.A_R+'°');
        //OUTPUT
       Out_Rain_Vel_G.html('Rainfall : '+'('+round(this.V_R*sin(this.A_R),1)+')'+' î + '+'('+round(-this.V_R*cos(this.A_R),1)+') ĵ');
       Out_Obs_Vel_G.html('Observer : ('+round(this.V_O,1)+') î');
       Out_Rain_Vel_O.html('Rainfall : ('+round(this.V_R*sin(this.A_R)-this.V_O,1)+') î + ('+round(-this.V_R*cos(this.A_R),1)+') ĵ');
       Out_Grd_Vel_O.html('Ground : ('+round(-this.V_O,1)+') î');
    }
    //----------Show Observer input vectors on scrn_X-------------------------------------------------------------
    Input_Vector(){
        //---Make observer vectors for velcity and angle-------------------------------------------------
        push();
            translate(width/2,3*height/4-20*Zoom);                //Scale
            scale(Zoom);
            strokeWeight(4);
            stroke(0);
                //Make observer velocity vector
                line(0,0,this.V_O*4,0);
                line(this.V_O*4,0,this.V_O*4-10,10);        //mulitply with 4 for increase vector length
                line(this.V_O*4,0,this.V_O*4-10,-10);
            line(0,0,-150,0);
            line(0,0,0,-150);
            push();
                noFill();
                if(this.A_U>0){
                    arc(0,0,90,90,-90,-90+this.A_U);
                }else{
                    push();
                        scale(-1,1);
                        arc(0,0,90,90,-90,-this.A_U-90);
                    pop();
                }
                rotate(this.A_U-90);
                line(0,0,150,0);
            pop();
        pop();

        //--Design rainfall input vectors-----------------------------------------------
        push();
          translate(width/2,10);
          scale(Zoom)
          strokeWeight(4);
          line(0,0,150,0);
          line(0,0,-150,0);
          line(0,0,0,150);
          push();
              noFill();
              if(this.A_R<0){
                  arc(0,0,60,60,90,90-this.A_R);
              }else{
                  push();
                      scale(-1,1);
                      arc(0,0,60,60,90,90+this.A_R);
                  pop();
              }
              rotate(90-this.A_R);
              line(0,0,30+this.V_R*4,0);                     //Here velocity mulitply by 4 and add with 30 for better visibility 
              line(30+this.V_R*4,0,30+this.V_R*4-10,10);
              line(30+this.V_R*4,0,30+this.V_R*4-10,-10);
          pop();
        pop();
    }
    Output_Vector(){
        //VELOCITY WR.T GROUND
        //RAINFALL
        push();             
            translate(width/2,20);
            scale(Zoom);
            this.Vect(0,0,0,round(this.V_R*sin(this.A_R),1)*5,'red');
            this.Vect(0,0,-90,round(-this.V_R*cos(this.A_R),1)*5,'red');
        pop();
        //OBSERVER
        push();             
            translate(width/2,3*height/4);
            scale(Zoom);
            translate(0,-150);
            this.Vect(0,0,0,round(this.V_O,1)*5,'red');
        pop();

        //VELOCITY WR.T OBSERVER
        //RAINFALL
        push();             
            translate(width/2-100,20);
            scale(Zoom);
            this.Vect(0,0,0,round(this.V_R*sin(this.A_R)-this.V_O,1)*5,'yellow');                        //multiply by 5 times for scale vector size for better visibility
            this.Vect(0,0,-90,round(-this.V_R*cos(this.A_R),1)*5,'yellow');
        pop();
        //GROUND
        push();             
            translate(width/2-100,3*height/4+5);
            scale(Zoom);
            this.Vect(0,0,0,round(-this.V_O,1)*5,'yellow');
        pop();
    }
    Output_Vector_Box(){
        //W.r.t Ground
        push();    
            fill(0);
            textSize(18);
            strokeWeight(1);
                push();
                    fill(205,100);
                    rect(0,0,230,150,10);
                    rect(30,10,170,30,5);
                pop();
            text('W.r.t Ground',60,30);
            text('X-velocity  :',40,70);
            this.Vect(140,65,0,20,'red');
            text('Y-velocity :',40,100);
            this.Vect(160,120,90,-20,'red');
        pop();
        //W.r.t Observer
        push();   
            translate(0,170);                            // Vectors  box show on scrn_X 
            fill(0);
            textSize(18);
            strokeWeight(1);
                push();
                    fill(205,100);
                    rect(0,0,230,150,10);
                    rect(30,10,170,30,5);
                pop();
            text('W.r.t Observer',60,30);
            text('X-velocity  :',40,70);
            this.Vect(140,65,0,20,'yellow');
            text('Y-velocity :',40,100);
            this.Vect(160,120,90,-20,'yellow');
        pop();
    }
    //-------------Show safe angle and area-----------------------------------------------------------------------
    safe_Angle(){
        //Show safe angle on scrn_X
        push();
            translate(width/2,3*height/4-20*Zoom);                //Scale
            scale(Zoom);
            strokeWeight(4);
            stroke(200,0,0);
            line(0,0,150,0);
            line(0,0,-150,0);
            line(0,0,0,-150);
                push();
                    noFill();
                    if(this.S_A>0){
                        arc(0,0,90,90,-90,-90+this.S_A);
                    }else{
                        push();
                            scale(-1,1);
                            arc(0,0,90,90,-90,-this.S_A-90);
                        pop();
                    }
                    rotate(this.S_A-90);
                    line(0,0,150,0);
                    line(150,0,140,10);
                    line(150,0,140,-10);
                pop();
        pop();
    }
    Safe_A_Box(){
        // Show the safe angle of umbrella 
        push();
            fill(0);
            textSize(18);
            strokeWeight(1);
                push();
                    fill(205,100);
                    rect(0,0,220,130,10);
                    rect(40,10,140,30,5);
                pop();
            text('SAFE ANGLE ',50,30);
            text('Angle  : '+round(this.S_A,0)+'°',40,70);
            text('Safe area : ',40,100);
            //Angle and safe area icons
            push();
                translate(140,60);
                //safe Area icon 
                fill(0,195,255);
                rect(0,25,40,20);
                //Angle icon
                stroke(200,0,0);
                strokeWeight(5);
                line(0,0,30,0);
                line(30,0,20,-7);
                line(30,0,20,7);
            pop();     
        pop();
    }

}