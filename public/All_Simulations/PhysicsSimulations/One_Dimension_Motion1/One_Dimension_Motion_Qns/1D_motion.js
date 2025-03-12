class boxmotion{
    constructor(Vel_O,Acc_O,Vel_V,Acc_V,Dist_V){
        //Here using Displacement (5*Displacment) of observer/vechile for better visibility on screen

        // inputs for Observer 
        this.V_O=Vel_O;                   //observer initial velocity
        this.A_O=Acc_O;                    //observer acceleartiion
        this.X_O=0;                         // observer intial displacement (rn we do not have intial displacemnt for observer)
        this.U_O;                           //observer final velocity 
        // inputs for Vechile 
        this.V_V=Vel_V;                    //Vechile initial veclocity
        this.A_V=Acc_V;                     //Vechile acceleration
        this.D_V=Dist_V;                    //vechile intial displacement
        this.X_V;                           //vechile final dispalcement
        this.U_V;                           //vechile final velocity

        
        // time 
        this.T=0;                                  // time updation for smartwatch 

        // this function is for vector which show the velcity and accelartion on screen 
        this.Vect=function(X,Y,Value,colors){
                push();
                    translate(X,Y);
                    fill(colors);
                        beginShape();
                            vertex(0,-5);
                            vertex(Value,-5);
                            vertex(Value,-10);
                            vertex(Value+20,0);
                            vertex(Value,10);
                            vertex(Value,5);
                            vertex(0,5);
                        endShape(CLOSE);
                pop();
            }
        

    }
    // GROUND 
    Ground(){
        push();                                               // Make ground for simuation with green and black color
            fill(0);
            rect(0,0,width,10);
            fill('rgb(0,200,80)');
            rect(0,10,width,1*height/3);
        pop();
    }

    // OBSERVER MOVEMENT
    Observer(){
        //Observer displacement and velocity equations
        this.X_O=this.V_O*this.T+this.A_O*this.T**2/2;
        this.U_O=this.V_O+this.A_O*this.T;
        screen=5*this.X_O;                                          // Now update screen(screen=global variable) for view w.r.t observer velocity                       
        push();                                                   // OBSERVER Movement
            translate(5*this.X_O+200,-105);
            image(observer,0,0,150,220);
        pop(); 
    }

    //VECHILE MOVEMENT
    Vechile(){
        // Vecloicty and Displacement equations 
        this.X_V=this.D_V+this.V_V*this.T+this.A_V*this.T**2/2;
        this.U_V=this.V_V+this.A_V*this.T;        
        push();                                                  // VECHILE Movement 
            translate(200+5*this.X_V,-100);
            image(car,0,0,270,150);
            // car wheel  
            push();           // left wheel 
                translate(-82,70);
                rotate(1.3*5*this.X_V);
                image(wheel,0,0,65,65);
            pop();
            push();           // Right wheel
                translate(78,70);
                rotate(1.3*5*this.X_V);
                image(wheel,0,0,65,65);
            pop();
        pop();
    }

    // MILESTONE  
    Milestone(){
        push();
            textSize(22);
            fill(225);
            for(let i=floor(screen/1000);i<10+floor(screen/1000);i++){               //milestone shift according observer speed (screen) and new milestone autoupdate after 1000px distance
                image(stone,200+200*5*i,-64,90,120);
                text(200*i+'m',165+200*5*i,-80);
            }
        pop();
    }

    // VECTOR COMPONENTS ON SCREEN
    Vector_comp(){
        push();                                         // Acceleration and velocity vector showing on screen 
            translate(200,-100);                       // coordinate shifted at observer (0,0)
            push();
                translate(5*this.X_O,0);
                this.Vect(0,0,this.U_O,'red')
                this.Vect(0,30,this.A_O,'blue')         //multiply Acc by 2 times because of good vector change visibility
            pop();
            if(Vech_show){
                push()
                    translate(5*this.X_V,0);
                    this.Vect(0,0,this.U_V,'red')
                    this.Vect(0,30,this.A_V,'blue') 
                pop();
            }
        pop();
    }

    // VECTOR COMPONENTS BOX
    Vector_show(){
        push();                               // Vectors  box show on screen 
            fill(0);
            textSize(18);
            strokeWeight(1);
                push();
                    fill(205,100);
                    rect(0,0,230,150,10);
                    rect(30,10,170,30,5);
                pop();
            text('VECTORS ',80,30);
            text('Velocity  :',40,70);
            this.Vect(130,65,20,'red');
            text('Acceleration :',13,100);
            this.Vect(130,95,20,'blue');
        pop();
    }

    // Inputs of observer and vechile 
    In_Out_update(){
        // Update Input values on screen 
        Input_Vel_O.html("Velocity : "+this.V_O+'m/s');
        Input_Acc_O.html("Acceleration : "+this.A_O+'m/s²');
        Input_Vel_Ve.html("Velocity : "+this.V_V+'m/s');
        Input_Acc_Ve.html("Acceleration : "+this.A_V+'m/s²');
        Input_Dist_Ve.html("Displacement : "+this.D_V+'m');
        // Update Output values on screen 
        Output_Vel_O.html("Velocity : "+round(this.U_O,1)+'m/s');
        Output_Acc_O.html("Acceleration : "+round(this.A_O)+'m/s²');
        Output_Dist_O.html("Displacement : "+ round(this.X_O)+'m');
        Output_Vel_Ve.html("Velocity : "+round(this.U_V,1)+'m/s');
        Output_Acc_Ve.html("Acceleration : "+round(this.A_V)+'m/s²');
        Output_Dist_Ve.html("Displacement : "+round(this.X_V)+'m');
        
    }
    // STOPWATCH 
    Stopwatch(){
        // make a stopwatch 
        push();
            fill(20);
            rect(0,0,140,80,10);
            push();
                fill(255);
                textSize(50);
                textFont(clockfont);
                text(round(this.T,1),25,58);
                textSize(14);
                text('SECOND',90,70);
                text('TIME',10,15);
            pop();
    pop();
    this.T+=1/60;                          //  time update 
    }

}

    