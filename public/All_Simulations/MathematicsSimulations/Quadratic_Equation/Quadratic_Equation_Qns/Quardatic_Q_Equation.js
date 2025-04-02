class Quardatic_Eq{
    constructor(A,B,C,X,Domain,X1,X2){
        this.A=A;                  //a coeff.
        this.B=B;                  //b coeff.
        this.C=C;                  //c coeff.
        this.X=X;                 //AT POINT X VALUE
        this.Domain=Domain;
        //Provide Domain values according domain type
        if(this.Domain==='[-∞,∞]'){
            this.X1=((-width-2*Scrol_X)/(2*Scale));
            this.X2=(width-2*Scrol_X)/(2*Scale);
        }else{
            this.X1=X1;
            this.X2=X2;
        }
        this.Y1=A*this.X1**2+B*this.X1+Number(C);                       //Y coordinate aT POINT x
        this.Y2=A*this.X2**2+B*this.X2+Number(C);                       //Y coordinate aT POINT x
        //Equations
        this.Y=A*X**2+B*X+Number(C);                                   //Y coordinate aT POINT x
        this.Discriminant=B**2-4*A*C;                                  //Discriminant for findintg roots
        this.Vertex_X=(-B)/(2*A);                                      //equation vertex
        this.Vertex_Y=A*this.Vertex_X**2+B*this.Vertex_X+Number(C);
        this.Tangent_m=2*A*X+Number(B);                               //tangent slope
        this.Tangent_C=-(A*X**2-Number(C));                           //tangent equation c value
        //Equation roots
        this.Root1=(-B+sqrt(this.Discriminant))/(2*A);                  //Root1 
        this.Root2=(-B-sqrt(this.Discriminant))/(2*A);                  //Root 2
        //Range
        this.Max=max(this.Y1,this.Y2,this.Vertex_Y);                     //Maximum value of range
        this.Min=min(this.Y1,this.Y2,this.Vertex_Y);                      //Minimum value of range
    }
    //Make grid lines
    Grid(){
        // make X and Y axis 
        strokeWeight(2);
        line(-width/2-Scrol_X,0,width/2-Scrol_X,0);
        line(0,height/2+Scrol_Y,0,-height/2+Scrol_Y);

        // make small lines 
        push();
            strokeWeight(0.2);
            stroke(60);
            //Right side coordinates
            push()
            for(var i=0;i<(width-2*Scrol_X)/(2*Scale);i++){
                line(Scale*i,height/2+Scrol_Y,Scale*i,-height/2+Scrol_Y);        //Vertical lilnes
                push();  
                strokeWeight(0.5);
                scale(1,-1);
                fill(0);
                circle(Scale*i,0,5);
                text(i,Scale*i,15)
                pop();
            }
            pop();
            //Left side coordinates
            for(var i=0;i<(width+2*Scrol_X)/(2*Scale);i++){
            line(-Scale*i,height/2+Scrol_Y,-Scale*i,-height/2+Scrol_Y);
            push();
                strokeWeight(0.5);
                scale(1,-1);
                fill(0);
                circle(-Scale*i,0,5);
                text(-i,-Scale*i,15)
            pop();
            }
            //Upper side coordinates
            for(var i=0;i<(height+2*Scrol_Y)/(2*Scale);i++){
            line(width/2-Scrol_X,Scale*i,-width/2-Scrol_X,Scale*i);
            }
            for(var i=0;i<(height+2*Scrol_Y)/(2*Scale);i++){
            push();
                strokeWeight(0.5);
                scale(1,-1);
                fill(0);
                circle(0,-Scale*i,5);                  
                text(i,5,-Scale*i)               //Due to coordinate scale by (1,-1) ,Lower y axis coordinates trasfer upper side
            pop();
            }
            // Lower side coordinates
            for(var i=0;i<(height-2*Scrol_Y)/(2*Scale);i++){
            line(-width/2-Scrol_X,-Scale*i,width/2-Scrol_X,-Scale*i);
            }   
            for(var i=0;i<(height-2*Scrol_Y)/(2*Scale);i++){
            push();
                strokeWeight(0.5);
                scale(1,-1);
                fill(0);
                circle(0,Scale*i,5);
                text(-i,5,Scale*i);                //Due to coordinate scale by  (1,-1) ,Upper y axis coordinates trasfer Lower side
            pop();
            }
        pop();


    }
    Equation(){
       //Eqaution draw
        push();
            noFill();
            strokeWeight(3);
            stroke(255,0,0);
            let x;
            let y;
            beginShape();
                for (var i=-((width+2*Scrol_X)/(2*Scale));i<((width-2*Scrol_X)/(2*Scale));i+=0.051){
                x=i;
                y=this.A*x**2+this.B*x+Number(this.C);
                vertex(x*Scale,y*Scale);
                }
            endShape();
        pop(); 

         //Equation text
         push();
            textSize(15);
            scale(1,-1);
            fill(205);
            translate(80,-height/2+20);
            push();
                noStroke();
                rect(0,0,180,30,20);
            pop();
            fill(0);
            stroke(0);
            strokeWeight(1);
            text('y = ('+this.A+') x\u00b2 + ('+this.B+') x+('+this.C+')',20,20);
         pop();
    }
    //Solutions update
    Solution(){
        //check if the discriminant is positive,zero or negative
        if(this.Discriminant>=0){
            Output_ROOT.html('Roots : '+round(this.Root1,1)+' & '+round(this.Root2,1));
        }else{
            Output_ROOT.html('Roots : '+'No Real Roots');
        }

        //Update solutions
        Output_Vertex.html("Vertex : "+'('+round(this.Vertex_X,1)+","+round(this.Vertex_Y,1)+')');
        Output_Yintersect.html("Y-intersect : "+'('+0+","+this.C+')');
        Output_Axis_OS.html("Axis of symmetry : "+'( X= '+round(this.Vertex_X,1)+' )');
        //Coordinates and Tangent
        Y_at_X.html('Coordinates : ('+round(this.X,1)+','+round(this.Y,1)+')');
        Tangent.html('Tangent : Y= ('+round(this.Tangent_m,1)+')X +('+round(this.Tangent_C,1)+')');
        //Domain & Range
        if(this.Domain==='[-∞,∞]'){
            if(this.A>0){
                Domain_Range.html('Range : '+'['+round(this.Vertex_Y,1)+",∞] ")
            }else if(this.A==0){
                Domain_Range.html('Range : '+'[-∞,∞]')
            }else{
                Domain_Range.html('Range : '+'[-∞,'+round(this.Vertex_Y,1)+"]")
        }
        }else{
            Domain_Range.html('Range : '+'['+this.Min+','+this.Max+"]");
        }
     }
     //Show Solutions on screen
    Solution_show1(){
        //Show Roots 
        if(this.Discriminant>=0){
            push();
                scale(1,-1);
                textSize(12)
                strokeWeight(10);
                fill(0)
                stroke('blue');
                point(this.Root1*Scale,0);
                point(this.Root2*Scale,0);
                noStroke();
                    //Roots box 
                    push();
                        fill(215);
                        translate(this.Root1*Scale-50,-25);
                        rect(0,0,100,20,5);
                        fill(0);
                        text('Root1='+'('+round(this.Root1,1)+','+0+')',10,13);
                    pop();
                    push();
                        fill(215);
                        translate(this.Root2*Scale-50,-25);
                        rect(0,0,100,20,5);
                        fill(0);
                        text('Root2='+'('+round(this.Root2,1)+','+0+')',10,13);
                    pop();
            pop();
        }
        // //Vertex
        push();
            scale(1,-1);
            stroke('blue');
            strokeWeight(10);
            point(this.Vertex_X*Scale,-this.Vertex_Y*Scale);
            noStroke();
            push();
                fill(215);
                translate(this.Vertex_X*Scale+10,-this.Vertex_Y*Scale-10);
                rect(0,0,100,20,5);
                fill(0);
                text('Vertex='+'('+round(this.Vertex_X,1)+','+round(this.Vertex_Y,1)+')',10,13);
            pop();
        pop();
        //Y-intersect
        push();
            scale(1,-1);
            stroke('blue');
            strokeWeight(10);
            point(0,-this.C*Scale);
            noStroke();
            push();
                fill(215);
                translate(10,-this.C*Scale-10);
                rect(0,0,100,20,5);
                fill(0);
                text('Y intersect='+'('+0+','+round(this.C,1)+')',10,13);
            pop();
        pop();
        //Axis of symmetry
        push();
            push();
                stroke('blue');
                strokeWeight(1.5);
                for (let i=(-height/2+Scrol_Y);i<(height/2+Scrol_Y);i+=10){
                    line(this.Vertex_X*Scale,i,this.Vertex_X*Scale,i+5);
                }     
            pop();
            push();
                scale(1,-1);
                noStroke();
                fill(215);
                translate(this.Vertex_X*Scale+30,-height/2+10);
                rotate(90);
                rect(0,0,170,20,5);
                fill(0);
                text("Axis of symmetry : "+'( X= '+round(this.Vertex_X,1)+' )',10,13);
            pop();
        pop();

       
    }
    Solution_show2(){
        //Cordinates
        push();
            stroke('blue');
            strokeWeight(10);
            point(this.X*Scale,this.Y*Scale);
            //X
            strokeWeight(1.5);
            for (let i=min(0,this.X*Scale);i<max(this.X*Scale,0);i+=10){
                line(i,this.Y*Scale,i+5,this.Y*Scale);
            }
                //Y
                strokeWeight(1.5);
                for (let i=min(0,this.Y*Scale);i<max(this.Y*Scale,0);i+=10){
                    line(this.X*Scale,i,this.X*Scale,i+5);
                }         
        pop();
        // //Coordinates
        push();
            noStroke();
            scale(1,-1);
            fill(215);
            translate(this.X*Scale+10,-this.Y*Scale-25);
            rect(0,0,100,20,5);
            fill(0);
            text('(X,Y)='+'('+round(this.X,1)+','+round(this.Y,1)+')',10,13);
        pop();
        //Tangent
        push();
            stroke('blue');
            translate(this.X*Scale,this.Y*Scale);
            rotate(atan(this.Tangent_m));
            line(-500,0,500,0);
        pop();
        push();
            scale(1,-1);
            noStroke();
            fill(215);
            translate(this.X*Scale,-this.Y*Scale);
            rotate(-atan(this.Tangent_m));
            rect(0,0,150,20,5);
            fill(0);
            text('Tangent : Y= ('+round(this.Tangent_m,1)+')X +('+round(this.Tangent_C,1)+')',10,13);
        pop(); 
    }
    Solution_show3(){
         //Domain
         push();
            noStroke();
            fill(212,121,121,100);
            beginShape();
                vertex(this.X1*Scale,this.Min*Scale);
                vertex(this.X2*Scale,this.Min*Scale);
                vertex(this.X2*Scale,this.Max*Scale);
                vertex(this.X1*Scale,this.Max*Scale);
            endShape();
        pop();
    }

}

