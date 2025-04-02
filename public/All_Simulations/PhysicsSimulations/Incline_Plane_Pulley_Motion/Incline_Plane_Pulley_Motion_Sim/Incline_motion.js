class motion {
    constructor(mass_A,mass_B,angle_A,angle_B,mode){
        this.M_A=mass_A;             //Block mass
        this.M_B=mass_B;             //Block mass
        this.Mode=mode;              //Block mass system mode
        //Choose mode of mass system
        if(this.Mode==='One Side'){
            this.A_a=0;                        //Value assign for Angle A if we choose Mode "One side"
            
        }else{
            this.A_a=angle_A;
        }
        this.A_b=angle_B;                      //Assign value of angle B
        //From the equations using total system acclearation and tension in rope
        this.acc=(mass_B*g*sin(this.A_b)-mass_A*g*sin(this.A_a))/(mass_A+mass_B) ;
        this.tens=mass_B*g*sin(this.A_b)-mass_B*this.acc ;
        this.X;                 //distance travel by blocks 

        //Time update
        this.t=0;  
        
        //Make vector
        this.Vector=function(X,Y,mag,angle,color){
            push();
            translate(X,Y);
            rotate(angle);
            // translate(150*1/sin(max(this.A_b,this.A_a))+this.X,-80);
            
            fill(color);
                beginShape();
                    vertex(0,-5);
                    vertex(mag*5,-5);
                    vertex(mag*5,-10);
                    if(mag>=0){
                        vertex(mag*5+20,0);
                    }else{
                        vertex(mag*5-20,0);
                    }
                    vertex(mag*5,10);
                    vertex(mag*5,5);
                    vertex(0,5);
                endShape(CLOSE);
            pop();
        }
        //Make Tesnion vector
        this.Tens_vector=function(X,Y,mag,angle,color){
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
//first make static ground 
Ground(){
    push();
        translate(0,3*height/4);
        fill(0);
        rect(0,0,width,10);
        fill('rgb(0,200,80)');
        rect(0,10,width,height/4);
    pop();
    
}
//Manage block mass system motion here
Block_motion(){

    push();
        // MOVE THE ORIGIN TO AT PULLY CENTER
        let Pully_H=300;                              //height of pully from ground
        translate(0,-Pully_H);             //
        //DISPLACEMENT AND PULLY MOTION EQUATIONS
        this.X=1/2*(8*this.acc)*(this.t)**2;              //distance move by block           
        var thita=1/2*(20*this.acc)*(this.t)**2;            //Angular displacement of pully w.r.t to rope

        //MAKE INCLINED TRAINGLUAR PLANE  (HIGHT=Pully_H)
            push();
                fill(200);
                strokeWeight(3);
                    beginShape();
                        vertex(0,0);
                        if(this.Mode==='One Side'){
                            vertex(-350,0);
                            vertex(-350,Pully_H);
                        }else{
                            vertex(-Pully_H/tan(this.A_a),Pully_H);
                        }
                        vertex(Pully_H/tan(this.A_b),Pully_H);
                    endShape(CLOSE);
            pop();

        //SHOW INPUT : ANGLE
            // Show angle on screen whe  mass block checkbox is true 
            if(Input_show){
                push();
                    strokeWeight(2);
                    noFill()
                    arc(300/tan(this.A_b),300,100,100,180,180+this.A_b);
                    arc(-300/tan(this.A_a),300,100,100,-this.A_a,0);
                        push();
                            textSize(20);
                            fill(0);
                            push();
                                translate(300/tan(this.A_b),300);
                                rotate(this.A_b/3);
                                text(this.A_b+'°',-90,0);
                            pop();

                            if(this.Mode=='Two Side'){
                                push();
                                    translate(-300/tan(this.A_a),300);
                                    rotate(-this.A_a/3);
                                    text(this.A_a+'°',60,0);
                                pop();
                            }

                        pop();
                pop();
            }
        
        // MAKE BLOCK A ,B AND PULLY SYSTEM
            let Rope_L=150*1/sin(max(this.A_b,this.A_a));              //Rope one side length which depeneds on shortest path of block
            let Pully_rad=34;                                  //pully raidus
            let Block_width=30;         
            // // LEFT BLOCK
            // we initialize block in middle of side  
            push();
                rotate(-this.A_a);
                    push();
                        strokeWeight(3);                                                      //according width of rope
                        line(0,-Pully_rad,-Rope_L+Block_width+this.X,-Pully_rad);            //make left rope
                    pop();
                push();
                    translate(-Rope_L,0);                             //displace block at rope end
                    translate(-Block_width,-Pully_rad-Block_width);   //align position with rope and pully
                    translate(this.X,0);                             //changes postion with time
                    fill(244,164,96,255*this.M_A/10);
                    rect(0,3,60,60,5);
                    //show output vectors
                    if(Show_Out_Vect){
                        this.Vector(30,-20,this.acc,0,'yellow');
                        this.Tens_vector(90,30,this.tens,0,'blue');
                    }
                    //Input text
                    if(Input_show){
                        push();
                            fill(0);
                            text(this.M_A+'Kg',10,40);
                        pop();
                    }
                pop();   
            pop();

            // for right block 
            // we initialize block in middle of side 
            // Rope_L is dis of block from top  
            push();
                rotate(this.A_b);
                    push();
                        strokeWeight(3);                                                      //according width of rope
                        line(0,-Pully_rad,Rope_L-Block_width+this.X,-Pully_rad);            //make left rope
                    pop();
                push();
                    translate(Rope_L,0);                             //displace block at rope end
                    translate(-Block_width,-Pully_rad-Block_width);   //align position with rope and pully
                    translate(this.X,0);                             //changes postion with time
                    fill(244,164,96,255*this.M_B/10);
                    rect(0,3,60,60,5);
                    //Show output vector
                    if(Show_Out_Vect){
                        this.Vector(30,-20,this.acc,0,'yellow');
                        push();
                            scale(-1,1)
                            this.Tens_vector(30,30,this.tens,0,'blue');
                        pop();
                    }
                    //Input text
                    if(Input_show){
                        push();
                            fill(0);
                            text(this.M_B+'Kg',10,40);
                        pop();
                    }
                pop();   
            pop();

        // make pully 
        // give perfect rotation when start simulation 
        // Rope_L is dis of block from top  
        push();
            strokeWeight(2);
            fill(140);
            circle(0,0,70);
            fill(180);
            circle(0,0,55);
            // rotation of pully 
            rotate(thita);
            line(0,0,0,-26);
            line(0,0,-25,10); 
            line(0,0,25,10); 

            fill(255);            
            circle(0,0,5); 
        pop();
    pop();


    // CONTROLLING SIMULATION TIME 
    if(this.X>= Rope_L-65 ){
        this.X==Rope_L-65;
    }else if(-this.X>= Rope_L-65){
        this.X==Rope_L-65;
    }else{
        this.t+=1/60;
    }
}
//update input changes on screen
Input_Ouput_update(){
    //INPUT
    Mass_A_Div.html("Mass (A) :"+this.M_A+'kg');
    Angle_A_Div.html("Angle (A) :"+this.A_a+'°');
    Mass_B_Div.html("Mass (B) :"+this.M_B+'kg');
    Angle_B_Div.html("Angle (B) :"+this.A_b+'°');
    //OUTPUT
    Acc_AB_Div.html("Accelaration : "+round(abs(this.acc),1)+' m/s²');                 //accleration should be positive becuase - sign show the direction
    Ten_AB_Div.html("Tension : "+round(this.tens,1)+' N');
}   
  
Output_vector_Box(){
    push();
        fill(0);
        textSize(18);
        strokeWeight(1);         
            push();
                fill(205,100);
                rect(0,0,270,130,15);
                rect(70,10,120,30,5);
            pop();
        text('VECTORS ',90,30);
        text('Acceleration : ',30,70);
        this.Vector(160,65,5,0,'yellow');
        text('Tension  : ',60,100);
        this.Tens_vector(180,95,10,0,'blue');
}  
}