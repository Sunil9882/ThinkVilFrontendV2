
class motion{
    constructor(cannon_height,cannon_velocity,cannon_angle){
        //INPUT values
        this.H=cannon_height;                   //Cannon height
        this.V=cannon_velocity;                 //cannon velocity
        this.A=cannon_angle;                    //cannon angle

        // // for create trace path of cannon bullet
        this.P_trace=[];
        // All variable in projectile motion
        this.R;                    //Range 
        this.H_max;                // Maximum height of projectile motion
        this.H_int;                // instant height of cannon bullet at a time
        this.X;                    // X cordinate of cannon bullet
        this.Y;                    // Y cordinate of cannon bullet
        this.V_f;                  // instant velocity at a time 
        this.V_fx;                 // instant velocity x component at a time 
        this.V_fy;                 // instant velocity y component at a time 
        this.time_period;           //projectile time period
        this.S_scale=30;            // (1m=10px)For increasing the scale of distance w.r.t screen size
        this.Cannon_Hight=50;       //cannon height (wheel height)
        this.T=0;                    //Time 
      
        // this function is for vector which show the velcity and accelartion component on screen 
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
    
    //---------------------------------GROUND-------------------------------------------------------
    Ground(){
        push();
            translate(0,3*height/4);
            fill(0);
            rect(0,0,width,10);
            fill('rgb(0,200,80)');
            rect(0,10,width,height/4);
        pop(); 
    }
    // --------------------------------TOWER-------------------------------------------------------
     Tower(){
        push();
            fill(205);
            scale(1,-1);
            rect(-50,0,100,this.S_scale*this.H,5);
        pop();
    }
    //---------------------------------STOPWATCH---------------------------------------------------
    Stopwatch(){
        push();
            fill(20);
            rect(0,0,140,80,10);
            push();
                fill(255);
                textSize(50);
                textFont(clockfont);
                text(round(this.T,2),25,58);
                textSize(14);
                text('SECOND',90,70);
                text('TIME',10,15);
            pop();
        pop();

        //Projectile motion Equations
        this.X=this.V*cos(this.A)*this.T;
        this.Y=this.V*sin(this.A)*this.T-(g*this.T**2)/2;
        this.V_fx=this.V*cos(this.A);
        this.V_fy=this.V*sin(this.A)-g*this.T;
        this.V_f=createVector(this.V_fx,this.V_fy);               //Velcity vector
        this.time_period=((this.V*sin(this.A)+sqrt((this.V*sin(this.A))**2+2*g*this.H)))/g;
        this.R=this.V*cos(this.A)*this.time_period;
        this.H_max=this.H+(this.V*sin(this.A))**2/(2*g);
        this.H_int=this.H+this.Y;

    // make time running and stop at timeperiod 
        if (this.T<this.time_period){
            this.T+=1/100;
        }else{
            this.T=this.time_period;
            this.H_int=0;                       //Because of NaN problem
        }
    }
    // -------------------BALL,CANNON AND TARGET MOVEMENT------------------------------------------
    ballmotion(){
        push();
            translate(0,-this.S_scale*this.H-this.Cannon_Hight);
            //CANNON BALL MOTION 
            push();
                translate(this.S_scale*this.X,-this.S_scale*this.Y);
                fill(0);
                circle(0,0,35);
            pop();
            //CANNON MOTION
            push();
                push();
                    rotate(-this.A);
                    translate(25,-2)
                    image(cannon,0,0,220,200);
                pop();
                image(cannon_wheel,0,10,105,120);            //cannon wheel
            pop(); 
            //TARGET MOVEMENT 
            push();
                translate(0,this.S_scale*this.H);                
                image(target,this.S_scale*this.R,0,80,80);
            pop();
        pop();
    }
    //------------------------------PATH TRACE-----------------------------------------------------
    Path_trace(){
        // PATH TRANCE
        push();
            translate(0,-this.S_scale*this.H-this.Cannon_Hight);
            let V=createVector(this.X,this.Y)
            this.P_trace.push(V);
            for(let i=0;i<this.P_trace.length;i+=2){
                circle(this.S_scale*this.P_trace[i].x,-this.S_scale*this.P_trace[i].y,4);
            }
        pop();
    }
    //--------------------------Update Input values------------------------------------------------
    Input_Output_update(){
        //INPUT
        Input_Higt_Cannon.html("Height : "+this.H+'m');
        Input_Vel_Cannon.html("Velocity : "+this.V+'m/s');
        Input_Ang_Cannon.html("Angle : "+this.A+'°');
        //OUTPUT
        Output_Instant_Vel.html("Velocity :"+round(this.V_f.mag(),1)+'m/s');
        Output_Instant_Higt.html("Height :"+round(this.H_int,1)+'m');
        Output_Range.html('Range :'+round(this.R,1)+'m');
        Output_MaxH.html('Max. Height :'+round(this.H_max,1)+'m');
    }
    //------------------------Show output veloicty vectors on screen---------------------------------
    Show_Vector(){
        push();
            translate(this.S_scale*this.X,-this.S_scale*(this.Y+this.H)-this.Cannon_Hight);
            let Vect_Scale=4;                       //Vect scale for increase the scale of vector for better visualization
            this.Vect(0,0,90,Vect_Scale*g,'brown');
            this.Vect(0,0,0,Vect_Scale*this.V_fx,'yellow');
            this.Vect(0,0,90,-Vect_Scale*this.V_fy,'blue');
            this.Vect(0,0,-atan(this.V_fy/this.V_fx),Vect_Scale*this.V_f.mag(),'green');
        pop();


    }
    //----------------------Show output velocities on screen (x, y direction)------------------------
    Show_Component_Box(){
        push();
            fill(205,100);
            rect(0,0,250,160,20);
                push();
                    fill(0);
                    textSize(18);
                    text('Velocity : '+round(this.V_f.mag(),1)+' m/s',30,40);
                    text('Velocity(x) : '+round(this.V_fx,1)+' m/s',10,70);
                    text('Velocity(y) : '+round(abs(this.V_fy,1))+' m/s',10,100);            //use abs for all positive values
                    text('Gravity(-y) : '+g+' m/s²',10,130);
                    this.Vect(190,35,0,20,'green');
                    this.Vect(190,65,0,20,'yellow');
                    this.Vect(190,95,0,20,'blue');
                    this.Vect(190,125,0,20,'brown');
                pop();     

        pop();
    }
    //-----------------------------Show input change vectors on screen--------------------------------
    Show_Input(){
        //Make observer vectors for velcity and angle
        push();
            textSize(20);
            translate(0,-this.Cannon_Hight);
            strokeWeight(4);
            //Make cannon input vector 
            push();
                translate(0,-this.S_scale*this.H);
                line(0,0,150,0);
                line(0,0,0,-150);
                rotate(-this.A);
                    push();
                        noFill()
                        arc(0,0,90,90,0,this.A);
                    pop();
                line(this.V*4+45,0,this.V*4-10+45,10);        //mulitply with 4 for increase vector length
                line(this.V*4+45,0,this.V*4-10+45,-10);
                line(0,0,this.V*4+45,0);
                text(this.A+'°',70,30);             
            pop();
            //For Height measurement
            push()
                fill(0);
                translate(-60,this.Cannon_Hight);
                line(-10,-this.S_scale*this.H,10,-this.S_scale*this.H)
                line(0,0,0,-this.S_scale*this.H);
                text(this.H+'m',-50,-this.S_scale*this.H/2)                 
            pop();
        pop();
    }
    //-----------------------------Show output on screen like Range and Max height---------------------
    Show_EndOutput(){
        let H_max_X=(this.V**2)*sin(2*this.A)/(2*g);
        push();
            textSize(20);
            // Range
            translate(0,-this.Cannon_Hight);
            strokeWeight(3);
            line(this.S_scale*this.R,10,this.S_scale*this.R,-10);
            line(0,10,0,-10);
            line(0,0,this.S_scale*this.R,0);
            text(round(this.R,1)+' m',this.S_scale*this.R/2,20)
            //Maximum height
            line(this.S_scale*H_max_X,0,this.S_scale*H_max_X,-this.S_scale*this.H_max);
            line(this.S_scale*H_max_X-10,-this.S_scale*this.H_max,this.S_scale*H_max_X+10,-this.S_scale*this.H_max);
            text(round(this.H_max,1)+'m',this.S_scale*H_max_X+10,-this.S_scale*this.H_max/2);
        pop();

    }
    //------------------------------------------Show instant output on screen--------------------------
    Show_InstantO(){
        push()
            textSize(20);
            translate(0,-this.Cannon_Hight);
            stroke(255,0,0);
            fill(255,0,0);
            strokeWeight(3);
            //Instant Height
            push();
                line(this.S_scale*this.X-10,0,this.S_scale*this.X+10,0)
                line(this.S_scale*this.X,0,this.S_scale*this.X,-this.S_scale*this.H_int);
                noStroke();
                text(round(this.H_int,1)+'m',this.S_scale*this.X+5,-this.S_scale*this.H_int/2);    //write instant height
            pop();
            //Instant Velocity
            push();
                let Inst_Angle=atan(this.V_fy/this.V_fx);
                translate(this.S_scale*this.X,-this.S_scale*this.H_int);
                rotate(-Inst_Angle);
                line(this.V_f.mag()*4,0,this.V_f.mag()*3,10);        //mulitply with 4 for increase vector length
                line(this.V_f.mag()*4,0,this.V_f.mag()*3,-10);
                line(0,0,this.V_f.mag()*4,0);
                noStroke();
                text(round(this.V_f.mag(),1)+'m/s',this.V_f.mag()*3,-30);
            pop();
        pop();
    }
     
}