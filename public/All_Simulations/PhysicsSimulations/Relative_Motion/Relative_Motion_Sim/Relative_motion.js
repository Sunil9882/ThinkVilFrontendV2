class boxmotion{
    constructor(pos,V_red,V_Blue){
        this.pos=pos;
        this.V_R=V_red;
        this.V_B=V_Blue;
        this.X_R=0;
        this.Y_R=0;
        this.X_B=0;
        this.Y_B=0;
        this.T=0;                    //TIME UPDATE

        //OBSERVER VELOCITY
        this.V_Ob;
        if(this.pos=='On Ground'){
           this.V_Ob=createVector(0,0);
        }else if(this.pos=='In Red car'){
            this.V_Ob=V_red;
        }else if(this.pos=='In Blue car'){
            this.V_Ob=V_Blue;
        }

         // this function is for vector which show the velcity and accelartion on screen 
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
//----------------------GROUND -------------------------------------------------
    Ground(){
        push();  
          strokeWeight(1.2);
          textSize(20);
          stroke(100,140); 
          text('You are '+this.pos,100,0);
          for (let i = -3; i < 4; i += 1) {
            line(100*i, -300, 100*i, 300);
            }
            for(let j = -3; j < 4; j += 1){
                line(-300, 100*j, 300, 100*j);
          }
        pop();
    }
//-------------------OBSERVER MOVEMENT----------------------------------------------
    Observer(){
        //Displacement equations
            this.X_R=this.V_R.x*this.T;
            this.Y_R=(-this.V_R.y)*this.T;                        //y direction is opposite to the screen
            this.X_B=this.V_B.x*this.T;
            this.Y_B=(-this.V_B.y)*this.T;                        //y direction is opposite to the screen

        // reset the screen movement values
            if(this.pos=='On Ground'){
                scrnX=0;
                scrnY=0;
            }else if(this.pos=='In Blue car'){
                scrnX=this.X_B;
                scrnY=this.Y_B;
            }else if(this.pos=='In Red car'){
                scrnX=this.X_R;
                scrnY=this.Y_R;
            }

        //OBSERVER POSTIONS AND MOTION
        if(this.pos=='On Ground'){   
            //RED CAR
                push();
                    translate(this.X_R,this.Y_R-100);
                    if(this.V_R.x>=0){
                        rotate(atan(-this.V_R.y/this.V_R.x));            //rotate car about his center when input change
                    }else{                                                //y direction is opposite to the screen so -ve sign is used
                        rotate(-180+atan(-this.V_R.y/this.V_R.x));            
                    }
                    image(CarR_NO,0,0,100,65); 
                pop();
            //BLUE CAR
                push();
                    translate(this.X_B,this.Y_B+100);
                    if(this.V_B.x>=0){
                        rotate(atan(-this.V_B.y/this.V_B.x));             //rotate car about his center 
                    }else{                                                 //y direction is opposite to the screen so -ve sign is used
                        rotate(-180+atan(-this.V_B.y/this.V_B.x));            
                    }
                    image(CarB_NO,0,0,100,65);
                pop();
            //GROUND
                image(Ground_O,0,0,50,65);
        }
        
        else if(this.pos=='In Blue car'){
            //RED CAR
            push();
                translate(this.X_R,this.Y_R-100);
                if(this.V_R.x>=0){
                    rotate(atan(-this.V_R.y/this.V_R.x));            //rotate car about his center when input change
                }else{                                                  //y direction is opposite to the screen so -ve sign is used
                    rotate(-180+atan(-this.V_R.y/this.V_R.x));            
                }
                image(CarR_NO,0,0,100,65); 
            pop();
            //BLUE CAR
            push();
                translate(this.X_B,this.Y_B+100);
                if(this.V_B.x>=0){
                    rotate(atan(-this.V_B.y/this.V_B.x));             //rotate car about his center 
                }else{                                              //y direction is opposite to the screen so -ve sign is used
                    rotate(-180+atan(-this.V_B.y/this.V_B.x));            
                }
                image(CarB_O,0,0,100,65);
            pop(); 
        }
        else{
            //RED CAR
            push();
                translate(this.X_R,this.Y_R-100);
                if(this.V_R.x>=0){
                    rotate(atan(-this.V_R.y/this.V_R.x));            //rotate car about his center when input change
                }else{                                                  //y direction is opposite to the screen so -ve sign is used
                    rotate(-180+atan(-this.V_R.y/this.V_R.x));            
                }
                image(CarR_O,0,0,100,65); 
            pop();
            //BLUE CAR
            push();
                translate(this.X_B,this.Y_B+100);
                if(this.V_B.x>=0){
                    rotate(atan(-this.V_B.y/this.V_B.x));             //rotate car about his center 
                }else{                                                   //y direction is opposite to the screen so -ve sign is used
                    rotate(-180+atan(-this.V_B.y/this.V_B.x));            
                }
                image(CarB_NO,0,0,100,65);
            pop();
        
        }
        //TIME UPDATE
        this.T+=1/5;
    }
//--------------------ABSOLUTE VELOCITY VECTOR---------------------------------------
    Absolute_Ve_Vector(){
        push();             //GROUND ABSOLUTE VELOCITY VECTOR
            translate(scrnX,scrnY);
            this.Vect(0,0,0,0,'red');
            this.Vect(0,0,90,0,'red');                //y direction is opposite to the screen so -ve sign is used
        pop();
        push();             //RED CAR ABSOLUTE VELOCITY VECTOR
            translate(this.X_R,this.Y_R);
            this.Vect(0,-100,0,round(this.V_R.x,0),'red');
            this.Vect(0,-100,90,-(this.V_R.y),'red');      //y direction is opposite to the screen so -ve sign is used
        pop();
        push();             //BLUE CAR ABSOLUTE VELOCITY VECTOR
            translate(this.X_B,this.Y_B);
            this.Vect(0,100,0,round(this.V_B.x,0),'red');
            this.Vect(0,100,90,-(this.V_B.y),'red');      //y direction is opposite to the screen so -ve sign is used
        pop();
       }
//-----------------------VECTOR BOX--------------------------------------------------
    Vector_Box(color,relative){
        push();                               // Vectors  box show on screen 
            fill(0);
            textSize(18);
            strokeWeight(1);
                push();
                    fill(205,100);
                    rect(0,0,230,150,10);
                    rect(30,10,170,30,5);
                pop();
            text(relative,60,30);
            text('X-velocity  :',40,70);
            this.Vect(140,65,0,20,color);
            text('Y-velocity :',40,100);
            this.Vect(160,120,90,-20,color);
        pop();
    }
// ----------------------RELATIVE VELOCITY VECTOR----------------------------------
    Relative_Ve_Vector(){
        push();          //GROUND RELATIVE VELOCITY VECTOR
            translate(scrnX,scrnY);
            this.Vect(0,0,0,(0-this.V_Ob.x),'yellow');
            this.Vect(0,0,90,-(0-this.V_Ob.y),'yellow');                //y direction is opposite to the screen so -ve sign is used
        pop();
        push();            //RED CAR RELATIVE VELOCITY VECTOR
            translate(this.X_R,this.Y_R);
            this.Vect(0,-100,0,(this.V_R.x-this.V_Ob.x),'yellow');
            this.Vect(0,-100,90,-(this.V_R.y-this.V_Ob.y),'yellow');      //y direction is opposite to the screen so -ve sign is used
        pop();
        push();            //BLUE CAR RELATIVE VELOCITY VECTOR
            translate(this.X_B,this.Y_B);
            this.Vect(0,100,0,(this.V_B.x-this.V_Ob.x),'yellow');
            this.Vect(0,100,90,-(this.V_B.y-this.V_Ob.y),'yellow');      //y direction is opposite to the screen so -ve sign is used
        pop();
    }
//-----------------------OUTPUT UPDATE-----------------------------------------------
    Output_update(){
        if(this.pos=='On Ground'){
            Ground_wrt_O_Ve.html("Velocity : "+'('+0+') î +'+'('+0+') ĵ'+' m/s');
            Redcar_wrt_O_Ve.html("Velocity : "+'('+this.V_R.x+') î +'+'('+this.V_R.y+') ĵ'+' m/s');
            Bluecar_wrt_O_Ve.html("Velocity : "+'('+this.V_B.x+') î +'+'('+this.V_B.y+') ĵ'+' m/s');
        }else if(this.pos=='In Red car'){
            Ground_wrt_O_Ve.html("Velocity : "+'('+(0-this.V_R.x)+') î +'+'('+(0-this.V_R.y)+') ĵ'+' m/s');
            Redcar_wrt_O_Ve.html("Velocity : "+'('+(this.V_R.x-this.V_Ob.x)+') î +'+'('+(this.V_R.y-this.V_R.y)+') ĵ'+' m/s');            Bluecar_wrt_O_Ve.html("Velocity : "+'('+this.V_B.x+') î +'+'('+this.V_R.y+') ĵ'+' m/s');
            Bluecar_wrt_O_Ve.html("Velocity : "+'('+(this.V_B.x-this.V_Ob.x)+') î +'+'('+(this.V_B.y-this.V_R.y)+') ĵ'+' m/s');
        }else{
            Ground_wrt_O_Ve.html("Velocity : "+'('+(0-this.V_B.x)+') î +'+'('+(0-this.V_B.y)+') ĵ'+' m/s');
            Redcar_wrt_O_Ve.html("Velocity : "+'('+(this.V_R.x-this.V_Ob.x)+') î +'+'('+(this.V_R.y-this.V_B.y)+') ĵ'+' m/s');            Bluecar_wrt_O_Ve.html("Velocity : "+'('+this.V_B.x+') î +'+'('+this.V_R.y+') ĵ'+' m/s');
            Bluecar_wrt_O_Ve.html("Velocity : "+'('+(this.V_B.x-this.V_Ob.x)+') î +'+'('+(this.V_B.y-this.V_B.y)+') ĵ'+' m/s');
        }
    }
}

    