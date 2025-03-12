function input(){

  // Length 
  let Length=createButton('Length');
  Length.mousePressed(lenghtshow);
    function lenghtshow(){
      Length.style('background-color','red');
      Temperature.style('background-color','green');
      Time.style('background-color','green');
      Force.style('background-color','green');
      Area.style('background-color','green');
      Volume.style('background-color','green');
      L_From.show();
      L_To.show();
      Tem_From.hide();
      Tem_To.hide();
      T_From.hide();
      T_To.hide();
      F_From.hide();
      F_To.hide();
      A_From.hide();
      A_To.hide();
      V_From.hide();
      V_To.hide();
    }

  let Temperature=createButton('Temperature');
  Temperature.mousePressed(Temperatureshow);
    function Temperatureshow(){
      Length.style('background-color','green');
      Temperature.style('background-color','red');
      Time.style('background-color','green');
      Force.style('background-color','green');
      Area.style('background-color','green');
      Volume.style('background-color','green');
      L_From.hide();
      L_To.hide();
      Tem_From.show();
      Tem_To.show();
      T_From.hide();
      T_To.hide();
      F_From.hide();
      F_To.hide();
      A_From.hide();
      A_To.hide();
      V_From.hide();
      V_To.hide();
    }

  let Time=createButton('Time');
  Time.mousePressed(Timeshow);
    function Timeshow(){
      Length.style('background-color','green');
      Temperature.style('background-color','green');
      Time.style('background-color','red');
      Force.style('background-color','green');
      Area.style('background-color','green');
      Volume.style('background-color','green');
      L_From.hide();
      L_To.hide();
      Tem_From.hide();
      Tem_To.hide();
      T_From.show();
      T_To.show();
      F_From.hide();
      F_To.hide();
      A_From.hide();
      A_To.hide();
      V_From.hide();
      V_To.hide();
    }

  let Force=createButton('Force');
  Force.mousePressed(Forceshow);
    function Forceshow(){
      Length.style('background-color','green');
      Temperature.style('background-color','green');
      Time.style('background-color','green');
      Force.style('background-color','red');
      Area.style('background-color','green');
      Volume.style('background-color','green');
      L_From.hide();
      L_To.hide();
      Tem_From.hide();
      Tem_To.hide();
      T_From.hide();
      T_To.hide();
      F_From.show();
      F_To.show();
      A_From.hide();
      A_To.hide();
      V_From.hide();
      V_To.hide();
    }

  let Area=createButton('Area');
  Area.mousePressed(Areashow);
    function Areashow(){
      Length.style('background-color','green');
      Temperature.style('background-color','green');
      Time.style('background-color','green');
      Force.style('background-color','green');
      Area.style('background-color','red');
      Volume.style('background-color','green');
      L_From.hide();
      L_To.hide();
      Tem_From.hide();
      Tem_To.hide();
      T_From.hide();
      T_To.hide();
      F_From.hide();
      F_To.hide();
      A_From.show();
      A_To.show();
      V_From.hide();
      V_To.hide();
    }

   let Volume=createButton('Volume');
  Volume.mousePressed(Volumeshow);
      function Volumeshow(){
        Length.style('background-color','green');
        Temperature.style('background-color','green');
        Time.style('background-color','green');
        Force.style('background-color','green');
        Area.style('background-color','green');
        Volume.style('background-color','red');
        L_From.hide();
        L_To.hide();
        Tem_From.hide();
        Tem_To.hide();
        T_From.hide();
        T_To.hide();
        F_From.hide();
        F_To.hide();
        A_From.hide();
        A_To.hide();
        V_From.show();
        V_To.show();
      }

  //TO AND FROM
  let From_Span=createSpan('From :');
  let From_value=createInput(0);
  From_value.input(From_value_fn);
      function From_value_fn(){
        V_inp=From_value.value();
        To_Value.html(V_inp);
      }
      
  let To_Span=createSpan('To :');
  let To_Value=createSpan('Converted value');

  //----------LENGTH CONVERSION------------------------
    let L_From=createSelect();
    L_From.option("Meter (m)", 'Meter');
    L_From.option("Kilometer (km)", 'Kilometer');
    L_From.option("Centimeter (cm)", 'Centimeter');
    L_From.option("Millimeter (mm)", 'Millimeter');
    L_From.option("Micrometer (μm)", 'Micrometer');
    L_From.option("Nanometer (nm)", 'Nanometer');
    L_From.option("Mile (mi)", 'Mile');
    L_From.option("Yard (yd)", 'Yard');
    L_From.option("Foot (ft)", 'Foot');
    L_From.option("Inch (in)", 'Inch');
    L_From.input(Length_from_to_fn);
      
  
  let L_To=createSelect();
  L_To.option("Meter (m)", 'Meter');
  L_To.option("Kilometer (km)", 'Kilometer');
  L_To.option("Centimeter (cm)", 'Centimeter');
  L_To.option("Millimeter (mm)", 'Millimeter');
  L_To.option("Micrometer (μm)", 'Micrometer');
  L_To.option("Nanometer (nm)", 'Nanometer');
  L_To.option("Mile (mi)", 'Mile');
  L_To.option("Yard (yd)", 'Yard');
  L_To.option("Foot (ft)", 'Foot');
  L_To.option("Inch (in)", 'Inch');
  L_To.attribute('size','11').size(200);
  L_To.input(Length_from_to_fn);

    function Length_from_to_fn(){
      if(L_From.value()==='Meter'){  
        Conv_1=V_inp;
      }else if(L_From.value()==='Kilometer'){
        Conv_1=1000*V_inp;

      }else if(L_From.value()==='Centimeter'){
        Conv_1=V_inp/100;

      }else if(L_From.value()==='Millimeter'){
        Conv_1=V_inp/1000;

      }else if(L_From.value()==='Micrometer'){
        Conv_1=V_inp/1000000;

      }else if(L_From.value()==='Nanometer'){
        Conv_1=V_inp/1000000000;

      }else if(L_From.value()==='Mile'){  
        Conv_1=V_inp/0.0006213712;

      }else if(L_From.value()==='Yard'){ 
        Conv_1=V_inp/1.0936132983;

      }else if(L_From.value()==='Foot'){ 
        Conv_1=V_inp/3.280839895;

      }else if(L_From.value()==='Inch'){   
        Conv_1=V_inp/39.3700787402;
      } 
      //-----------conv1 to conv2----------------------
      if(L_To.value()==='Meter'){  
        Conv_2=Conv_1;
      }else if(L_To.value()==='Kilometer'){
        Conv_2=Conv_1*0.001;

      }else if(L_To.value()==='Centimeter'){
        Conv_2=Conv_1*100;

      }else if(L_To.value()==='Millimeter'){
        Conv_2=Conv_1*1000;

      }else if(L_To.value()==='Micrometer'){
        Conv_2=Conv_1*1000000;

      }else if(L_To.value()==='Nanometer'){
        Conv_2=Conv_1*1000000000;

      }else if(L_To.value()==='Mile'){  
        Conv_2=Conv_1*0.0006213712;

      }else if(L_To.value()==='Yard'){ 
        Conv_2=Conv_1*1.0936132983;

      }else if(L_To.value()==='Foot'){ 
        Conv_2=Conv_1*3.280839895;

      }else if(L_To.value()==='Inch'){   
        Conv_2=Conv_1*39.3700787402;
      }

      //---------CONVERTED OUTPUT VALUES------------------------
      To_Value.html(Conv_2);
    }

  //----------TEMPERATURE CONVERSION------------------------
  let Tem_From=createSelect();
  Tem_From.option('Celsius (°C)','Celsius');
  Tem_From.option('Kelvin (K)','Kelvin');
  Tem_From.option('Fahrenheit (°F)','Fahrenheit');
  Tem_From.hide();
  Tem_From.input(Temp_from_to_fn);
  
  let Tem_To=createSelect();
  Tem_To.option('Celsius (°C)','Celsius');
  Tem_To.option('Kelvin (K)','Kelvin');
  Tem_To.option('Fahrenheit (°F)','Fahrenheit');
  Tem_To.hide();
  Tem_To.input(Temp_from_to_fn);
    function Temp_from_to_fn(){
      if(Tem_From.value()==='Celsius'){  
        Conv_1=V_inp;
      }else if(Tem_From.value()==='Kelvin'){
        Conv_1=V_inp-273.15;
      }else if(Tem_From.value()==='Fahrenheit'){
        Conv_1=(V_inp-32)*5/9;
      }
      //------conv_1 to conv_2
      if(Tem_To.value()==='Celsius'){  
        Conv_2=Conv_1;
      }else if(Tem_To.value()==='Kelvin'){
        Conv_2=Conv_1+273.15;

      }else if(Tem_To.value()==='Fahrenheit'){
        Conv_2=Conv_1*9/5+32;
      }
      //---------CONVERTED OUTPUT VALUES------------------------
      To_Value.html(Conv_2);
    }

  //----------TIME CONVERSION------------------------
  let T_From=createSelect();
  T_From.option("Second (s)", 'Second');
  T_From.option("Millisecond (ms)", 'Millisecond');
  T_From.option("Microsecond (μs)", 'Microsecond');
  T_From.option("Nanosecoond (ns)", 'Nanosecoond');
  T_From.option("Picosecond (ps)", 'Picosecond');
  T_From.option("Minute (min)", 'Minute');
  T_From.option("Hour (hr)", 'Hour');
  T_From.option("Day (d)", 'Day');
  T_From.option("Week (w)", 'Week');
  T_From.option("Month (m)", 'Month');
  T_From.option("Year (yr)", 'Year');
  T_From.hide();
  T_From.input(Time_from_to_fn);
     
  let T_To=createSelect();
  T_To.option("Second (s)", 'Second');
  T_To.option("Millisecond (ms)", 'Millisecond');
  T_To.option("Microsecond (μs)", 'Microsecond');
  T_To.option("Nanosecoond (ns)", 'Nanosecoond');
  T_To.option("Picosecond (ps)", 'Picosecond');
  T_To.option("Minute (min)", 'Minute');
  T_To.option("Hour (hr)", 'Hour');
  T_To.option("Day (d)", 'Day');
  T_To.option("Week (w)", 'Week');
  T_To.option("Month (m)", 'Month');
  T_To.option("Year (yr)", 'Year');
  T_To.hide();
  T_To.input(Time_from_to_fn);

    function Time_from_to_fn(){
      if(T_From.value()==='Second'){  
        Conv_1=V_inp;
      }else if(T_From.value()==='Millisecond'){
        Conv_1=V_inp*0.001;

      }else if(T_From.value()==='Microsecond'){
        Conv_1=V_inp*0.000001;

      }else if(T_From.value()==='Nanosecoond'){
        Conv_1=V_inp*0.000000001;

      }else if(T_From.value()==='Picosecond'){
        Conv_1=V_inp*0.000000000001;

      }else if(T_From.value()==='Minute'){  
        Conv_1=V_inp*60;

      }else if(T_From.value()==='Hour'){ 
        Conv_1=V_inp*3600;

      }else if(T_From.value()==='Day'){ 
        Conv_1=V_inp*86400;

      }else if(T_From.value()==='Week'){   
        Conv_1=V_inp*604800;

      }else if(T_From.value()==='Month'){   
        Conv_1=V_inp*2628000;

      }else if(T_From.value()==='Year'){   
        Conv_1=V_inp*31557600;
      }

      //--------conv1 to conv2--------------------------------
      if(T_To.value()==='Second'){  
        Conv_2=Conv_1;
      }else if(T_To.value()==='Millisecond'){
        Conv_2=Conv_1*1000;

      }else if(T_To.value()==='Microsecond'){
        Conv_2=Conv_1*1000000;

      }else if(T_To.value()==='Nanosecoond'){
        Conv_2=Conv_1*1000000000;

      }else if(T_To.value()==='Picosecond'){
        Conv_2=Conv_1*1000000000000;

      }else if(T_To.value()==='Minute'){  
        Conv_2=Conv_1/60;

      }else if(T_To.value()==='Hour'){ 
        Conv_2=Conv_1/3600;

      }else if(T_To.value()==='Day'){ 
        Conv_2=Conv_1/86400;

      }else if(T_To.value()==='Week'){   
        Conv_2=Conv_1/604800;

      }else if(T_To.value()==='Month'){   
        Conv_2=Conv_1/2628000;

      }else if(T_To.value()==='Year'){   
        Conv_2=Conv_1/31557600;
      }  
      //---------CONVERTED OUTPUT VALUES------------------------
      To_Value.html(Conv_2);

    }
    
  //---------FORCE CONVERSION------------------------
  let F_From=createSelect();
  F_From.option("Newton (N)", 'Newton');
  F_From.option("Kilo-newton (kN)", 'Kilonewton');
  F_From.option("Gram-force (gf)", 'Gramforce');
  F_From.option("Kilogram-force (kgf)", 'Kilogramforce');
  F_From.option("Ton-force (tf)", 'tonforce');
  F_From.option("Dyne (dyn)", 'Dyne');
  F_From.option("Pound-force (lbf)", 'Poundforce');
  F_From.option("Ounce-force (ozf)", 'Ounceforce');
  F_From.option("Pound (p)", 'Pound');
  F_From.option("poundal (pdl)", 'poundal');
  F_From.option("Kip-force (kipf)", 'Kipforce');
  F_From.hide();
  F_From.input(Force_From_to_fn);

  let F_To=createSelect();
  F_To.option("Newton (N)", 'Newton');
  F_To.option("Kilo-newton (kN)", 'Kilonewton');
  F_To.option("Gram-force (gf)", 'Gramforce');
  F_To.option("Kilogram-force (kgf)", 'Kilogramforce');
  F_To.option("Ton-force (tf)", 'tonforce');
  F_To.option("Dyne (dyn)", 'Dyne');
  F_To.option("Pound-force (lbf)", 'Poundforce');
  F_To.option("Ounce-force (ozf)", 'Ounceforce');
  F_To.option("Pound (p)", 'Pound');
  F_To.option("poundal (pdl)", 'poundal');
  F_To.option("Kip-force (kipf)", 'Kipforce');
  F_To.hide();
  F_To.input(Force_From_to_fn);
      function Force_From_to_fn(){
        if(F_From.value()==='Newton'){  
          Conv_1=V_inp;
        }else if(F_From.value()==='Kilonewton'){
          Conv_1=V_inp*1000;

        }else if(F_From.value()==='Gramforce'){
          Conv_1=V_inp*0.00980665;

        }else if(F_From.value()==='Kilogramforce'){
          Conv_1=V_inp*9.80665;

        }else if(F_From.value()==='tonforce'){
          Conv_1=V_inp*9806.65;

        }else if(F_From.value()==='Dyne'){  
          Conv_1=V_inp*0.00001;

        }else if(F_From.value()==='Poundforce'){ 
          Conv_1=V_inp*4.4482216153;

        }else if(F_From.value()==='Ounceforce'){ 
          Conv_1=V_inp*0.278013851;

        }else if(F_From.value()==='Pound'){   
          Conv_1=V_inp*0.00980665;

        }else if(F_From.value()==='poundal'){   
          Conv_1=V_inp*0.1382549544;

        }else if(F_From.value()==='Kipforce'){   
          Conv_1=V_inp*4448.2216153;
        }
        //----------conv1 to conv2-----------------------
        if(F_To.value()==='Newton'){  
          Conv_2=Conv_1;
        }else if(F_To.value()==='Kilonewton'){
          Conv_2=Conv_1/1000;

        }else if(F_To.value()==='Gramforce'){
          Conv_2=Conv_1/0.00980665;

        }else if(F_To.value()==='Kilogramforce'){
          Conv_2=Conv_1/9.80665;

        }else if(F_To.value()==='tonforce'){
          Conv_2=Conv_1/9806.65;

        }else if(F_To.value()==='Dyne'){  
          Conv_2=Conv_1/0.00001;

        }else if(F_To.value()==='Poundforce'){ 
          Conv_2=Conv_1/4.4482216153;

        }else if(F_To.value()==='Ounceforce'){ 
          Conv_2=Conv_1/0.278013851;

        }else if(F_To.value()==='Pound'){   
          Conv_2=Conv_1/0.00980665;

        }else if(F_To.value()==='poundal'){   
          Conv_2=Conv_1/0.1382549544;

        }else if(F_To.value()==='Kipforce'){   
          Conv_2=Conv_1/4448.2216153;
        }

        //---------CONVERTED OUTPUT VALUES------------------------
        To_Value.html(Conv_2);
      }

  //---------AREA CONVERSION------------------------
  let A_From=createSelect();
  A_From.option("Square Meter (m²)", 'SquareMeter');
  A_From.option("Square Kilometer (km²)", 'SquareKilometer');
  A_From.option("Square Centimeter (cm²)", 'SquareCentimeter');
  A_From.option("Square Millimeter (mm²)", 'SquareMillimeter');
  A_From.option("Square Micrometer (μm²)", 'SquareMicrometer');
  A_From.option("Hectare (ha)", 'Hectare');
  A_From.option("Square Mile (mi²)", 'SquareMile');
  A_From.option("Square Yard (yd²)", 'SquareYard');
  A_From.option("Square Foot (ft²)", 'SquareFoot');
  A_From.option("Square Inch (in²)", 'SquareInch');
  A_From.option("Acre (ac²)", 'Acre');
  A_From.hide();
  A_From.input(Area_From_to_fn);

  let A_To=createSelect();
  A_To.option("Square Meter (m²)", 'SquareMeter');
  A_To.option("Square Kilometer (km²)", 'SquareKilometer');
  A_To.option("Square Centimeter (cm²)", 'SquareCentimeter');
  A_To.option("Square Millimeter (mm²)", 'SquareMillimeter');
  A_To.option("Square Micrometer (μm²)", 'SquareMicrometer');
  A_To.option("Hectare (ha)", 'Hectare');
  A_To.option("Square Mile (mi²)", 'SquareMile');
  A_To.option("Square Yard (yd²)", 'SquareYard');
  A_To.option("Square Foot (ft²)", 'SquareFoot');
  A_To.option("Square Inch (in²)", 'SquareInch');
  A_To.option("Acre (ac²)", 'Acre');
  A_To.hide();
  A_To.input(Area_From_to_fn);

      function Area_From_to_fn(){
        if(A_From.value()==='SquareMeter'){  
          Conv_1=V_inp;
        }else if(A_From.value()==='SquareKilometer'){
          Conv_1=V_inp*1000000;

        }else if(A_From.value()==='SquareCentimeter'){
          Conv_1=V_inp*0.0001;

        }else if(A_From.value()==='SquareMillimeter'){
          Conv_1=V_inp*0.000001;

        }else if(A_From.value()==='SquareMicrometer'){
          Conv_1=V_inp*0.000000000001;

        }else if(A_From.value()==='Hectare'){  
          Conv_1=V_inp*10000;

        }else if(A_From.value()==='SquareMile'){ 
          Conv_1=V_inp*2589989.1103;

        }else if(A_From.value()==='SquareYard'){ 
          Conv_1=V_inp*0.83612736;

        }else if(A_From.value()==='SquareFoot'){   
          Conv_1=V_inp*0.09290304;

        }else if(A_From.value()==='SquareInch'){   
          Conv_1=V_inp*0.00064516;

        }else if(A_From.value()==='Acre'){   
          Conv_1=V_inp*4046.8564224;
        }
        //----------------conv1 to conv2-----------------------------------
        if(A_To.value()==='SquareMeter'){  
          Conv_2=Conv_1;
        }else if(A_To.value()==='SquareKilometer'){
          Conv_2=Conv_1/1000000;

        }else if(A_To.value()==='SquareCentimeter'){
          Conv_2=Conv_1/0.0001;

        }else if(A_To.value()==='SquareMillimeter'){
          Conv_2=Conv_1/0.000001;

        }else if(A_To.value()==='SquareMicrometer'){
          Conv_2=Conv_1/0.000000000001;

        }else if(A_To.value()==='Hectare'){  
          Conv_2=Conv_1/10000;

        }else if(A_To.value()==='SquareMile'){ 
          Conv_2=Conv_1/2589989.1103;

        }else if(A_To.value()==='SquareYard'){ 
          Conv_2=Conv_1/0.83612736;

        }else if(A_To.value()==='SquareFoot'){   
          Conv_2=Conv_1/0.09290304;

        }else if(A_To.value()==='SquareInch'){   
          Conv_2=Conv_1/0.00064516;

        }else if(A_To.value()==='Acre'){   
          Conv_2=Conv_1/4046.8564224;
        }

        //---------CONVERTED OUTPUT VALUES------------------------
        To_Value.html(Conv_2);
      }

  //---------VOLUME CONVERSION------------------------
  let V_From=createSelect();
  V_From.option("Cubic Meter (m^3)", 'CubicMeter');
  V_From.option("Cubic Kilometer (km^3)", 'CubicKilometer');
  V_From.option("Cubic Centimeter (cm^3)", 'CubicCentimeter');
  V_From.option("Cubic Millimeter (mm^3)", 'CubicMillimeter');
  V_From.option("Liter (L)", 'Liter');
  V_From.option("Cubic Mile", 'CubicMile');
  V_From.option("Cubic Yard", 'CCubicYard');
  V_From.option("Cubic Foot", 'CubicFoot');
  V_From.option("Cubic Inch", 'CubicInch');
  V_From.option("US Gallon (gal(US))", 'USGallon');
  V_From.option("US Quart (qt(US))", 'USQuart');
  V_From.option("US Pint (pt(US))", 'USPint');
  V_From.option("US Cup", 'USCup');
  V_From.option("US Fluid Ounce (fl oz(US))", 'USFluidOunce');
  V_From.option("US Table Spoon (metric)", 'USTableSpoon');
  V_From.option("US Tea Spoon (metric)", 'USTeaSpoon');
  V_From.option("Imperial Gallon", 'ImperialGallon');
  V_From.option("Imperial Quart", 'ImperialQuart');
  V_From.option("Imperial Pint", 'ImperialPint');
  V_From.option("Imperial Fluid Ounce", 'ImperialFluidOunce');
  V_From.option("Imperial Table Spoon", 'ImperialTableSpoon');
  V_From.option("Imperial Tea Spoon", 'ImperialTeaSpoon');
  V_From.hide();
  V_From.input(Volume_From_to_fn);
      
  let V_To=createSelect();
  V_To.option("Cubic Meter (m^3)", 'CubicMeter');
  V_To.option("Cubic Kilometer (km^3)", 'CubicKilometer');
  V_To.option("Cubic Centimeter (cm^3)", 'CubicCentimeter');
  V_To.option("Cubic Millimeter (mm^3)", 'CubicMillimeter');
  V_To.option("Liter (L)", 'Liter');
  V_To.option("Cubic Mile", 'CubicMile');
  V_To.option("Cubic Yard", 'CCubicYard');
  V_To.option("Cubic Foot", 'CubicFoot');
  V_To.option("Cubic Inch", 'CubicInch');
  V_To.option("US Gallon (gal(US))", 'USGallon');
  V_To.option("US Quart (qt(US))", 'USQuart');
  V_To.option("US Pint (pt(US))", 'USPint');
  V_To.option("US Cup", 'USCup');
  V_To.option("US Fluid Ounce (fl oz(US))", 'USFluidOunce');
  V_To.option("US Table Spoon (metric)", 'USTableSpoon');
  V_To.option("US Tea Spoon (metric)", 'USTeaSpoon');
  V_To.option("Imperial Gallon", 'ImperialGallon');
  V_To.option("Imperial Quart", 'ImperialQuart');
  V_To.option("Imperial Pint", 'ImperialPint');
  V_To.option("Imperial Fluid Ounce", 'ImperialFluidOunce');
  V_To.option("Imperial Table Spoon", 'ImperialTableSpoon');
  V_To.option("Imperial Tea Spoon", 'ImperialTeaSpoon');
  V_To.hide();
  V_To.input(Volume_From_to_fn);
      function Volume_From_to_fn(){
        if(V_From.value()==='CubicMeter'){  
          Conv_1=V_inp;
        }else if(V_From.value()==='CubicKilometer'){
          Conv_1=V_inp*1000000000;

        }else if(V_From.value()==='CubicCentimeter'){
          Conv_1=V_inp*0.000001;

        }else if(V_From.value()==='CubicMillimeter'){
          Conv_1=V_inp*0.000000001;

        }else if(V_From.value()==='Liter'){
          Conv_1=V_inp*0.001;

        }else if(V_From.value()==='CubicMile'){  
          Conv_1=V_inp*4168180000;

        }else if(V_From.value()==='CCubicYard'){ 
          Conv_1=V_inp*0.764554858;

        }else if(V_From.value()==='CubicFoot'){ 
          Conv_1=V_inp*0.0283168466;

        }else if(V_From.value()==='CubicInch'){   
          Conv_1=V_inp*0.0000163871;

        }else if(V_From.value()==='USGallon'){   
          Conv_1=V_inp*0.00378541;

        }else if(V_From.value()==='USQuart'){   
          Conv_1=V_inp*0.0009463525;

        }else if(V_From.value()==='USPint'){   
          Conv_1=V_inp*0.0004731763;

        }else if(V_From.value()==='USCup'){   
          Conv_1=V_inp*0.0002365881;

        }else if(V_From.value()==='USFluidOunce'){   
          Conv_1=V_inp*0.0000295735;

        }else if(V_From.value()==='USTableSpoon'){   
          Conv_1=V_inp*0.0000147868;

        }else if(V_From.value()==='USTeaSpoon'){   
          Conv_1=V_inp*0.0000049289;

        }else if(V_From.value()==='ImperialGallon'){   
          Conv_1=V_inp*0.00454609;

        }else if(V_From.value()==='ImperialQuart'){   
          Conv_1=V_inp*0.0011365225;

        }else if(V_From.value()==='ImperialPint'){   
          Conv_1=V_inp*0.0005682613;

        }else if(V_From.value()==='ImperialFluidOunce'){   
          Conv_1=V_inp*0.0000284131;

        }else if(V_From.value()==='ImperialTableSpoon'){   
          Conv_1=V_inp*0.0000177582;

        }else if(V_From.value()==='ImperialTeaSpoon'){   
          Conv_1=V_inp*0.0000059194;
        }

      //-----------------conv1 to conv2----------------------------
        if(V_To.value()==='CubicMeter'){  
          Conv_2=Conv_1;
        }else if(V_To.value()==='CubicKilometer'){
          Conv_2=Conv_1*1000000000;

        }else if(V_To.value()==='CubicCentimeter'){
          Conv_2=Conv_1*0.000001;

        }else if(V_To.value()==='CubicMillimeter'){
          Conv_2=Conv_1*0.000000001;

        }else if(V_To.value()==='Liter'){
          Conv_2=Conv_1*0.001;

        }else if(V_To.value()==='CubicMile'){  
          Conv_2=Conv_1*4168180000;

        }else if(V_To.value()==='CCubicYard'){ 
          Conv_2=Conv_1*0.764554858;

        }else if(V_To.value()==='CubicFoot'){ 
          Conv_2=Conv_1*0.0283168466;

        }else if(V_To.value()==='CubicInch'){   
          Conv_2=Conv_1*0.0000163871;

        }else if(V_To.value()==='USGallon'){   
          Conv_2=Conv_1*0.00378541;

        }else if(V_To.value()==='USQuart'){   
          Conv_2=Conv_1*0.0009463525;

        }else if(V_To.value()==='USPint'){   
          Conv_2=Conv_1*0.0004731763;

        }else if(V_To.value()==='USCup'){   
          Conv_2=Conv_1*0.0002365881;

        }else if(V_To.value()==='USFluidOunce'){   
          Conv_2=Conv_1*0.0000295735;

        }else if(V_To.value()==='USTableSpoon'){   
          Conv_2=Conv_1*0.0000147868;

        }else if(V_To.value()==='USTeaSpoon'){   
          Conv_2=Conv_1*0.0000049289;

        }else if(V_To.value()==='ImperialGallon'){   
          Conv_2=Conv_1*0.00454609;

        }else if(V_To.value()==='ImperialQuart'){   
          Conv_2=Conv_1*0.0011365225;

        }else if(V_To.value()==='ImperialPint'){   
          Conv_2=Conv_1*0.0005682613;

        }else if(V_To.value()==='ImperialFluidOunce'){   
          Conv_2=Conv_1*0.0000284131;

        }else if(V_To.value()==='ImperialTableSpoon'){   
          Conv_2=Conv_1*0.0000177582;

        }else if(V_To.value()==='ImperialTeaSpoon'){   
          Conv_2=Conv_1*0.0000059194;
        }

        //---------CONVERTED OUTPUT VALUES------------------------
        To_Value.html(Conv_2);
      }

 //-------------FULL SCREEN BUTTON FOR SMARTPHONES-------------------------------
 if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){
     let Dom_elements = [Length,Temperature,Time,Force,Area,Volume,From_Span,From_value,To_Span,To_Value,L_From,L_To,Tem_From,Tem_To,T_From,T_To,F_From,F_To,A_From,A_To,V_From,V_To];
     Dom_elements.forEach(el => el.hide());

     let full_landscape=createButton('Click here for Fullscreen and Landscape mode');
     full_landscape.position(0,0).size(window.outerWidth,window.outerHeight).style('font-size','12px');
     full_landscape.mousePressed(fulllandscape);
             function fulllandscape(){
             fullscreen(true);
             screen.orientation.lock("landscape");
             full_landscape.html('Exit Full Screen');
             full_landscape.size(100,25).position(height/2+200,5*width/6+20).style('font-size','12px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','2px');
             full_landscape.mousePressed(exitlandscape);
             //--------------Show all DOM elements------------------------------------- 
             Dom_elements.forEach(el => el.show());
             }
             function exitlandscape(){
             fullscreen(false);
             full_landscape.html('Click here for Fullscreen and Landscape mode');
             full_landscape.position(0,0).size(window.outerHeight,window.outerWidth).style('font-size','12px');
             full_landscape.mousePressed(fulllandscape);
             //----Hide all DOM elements--------------------------------------------------------------
             Dom_elements.forEach(el => el.hide());
             }
 }


 ResponsiveBigsize=function ResponsiveBigsize(){
     //-------------------------------------DIMENSIONS------------------------------------------
     Length.position(500,20).style('font-size','20px').style('border-radius','10px').style('background-color','red').style('color','white').style('padding','10px');
     Temperature.position(600,20).style('font-size','20px').style('padding','10px').style('border-radius','10px').style('color','white').style('background-color','green');
     Time.position(750,20).style('border-radius','10px').style('font-size','20px').style('background-color','green').style('color','white').style('padding','10px');
     Force.position(830,20).style('padding','10px').style('font-size','20px').style('color','white').style('border-radius','10px').style('background-color','green');
     Area.position(920,20).style('color','white').style('padding','10px').style('background-color','green').style('border-radius','10px').style('font-size','20px');
     Volume.position(1000,20).style('border-radius','10px').style('font-size','20px').style('padding','10px').style('color','white').style('background-color','green');
 
     //------------------------TO AND FROM INPUTS--------------------------------
     From_Span.position(500,100).style('font-size','28px');
     From_value.position(600,100).size(150,40).style('font-size','20px').style('border-radius','10px').attribute('type', 'number').attribute('min', '0');
     To_Span.position(930,100).style('font-size','28px');
     To_Value.position(1000,100).style('border','2px solid black').style('border-radius','10px').style('font-size','20px').style('padding','10px').style('background-color','rgb(205,205,205)');
     //--------------LENGTH TO AND FROM INPUTS-------------------------------------
     L_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     L_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
    //  --------------TEMPERATURE TO AND FROM INPUTS---------------------------------
     Tem_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     Tem_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     //--------------TIME TO AND FROM INPUTS---------------------------------
     T_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     T_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     //--------------FORCE TO AND FROM INPUTS---------------------------------
     F_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     F_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     //--------------AREA TO AND FROM INPUTS---------------------------------
     A_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     A_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     //--------------VOLUME TO AND FROM INPUTS---------------------------------
     V_From.position(500,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     V_To.position(900,200).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15');
     
 }  


 ResponsiveSmallsize=function ResponsiveSmallsize(){
     let X_I=window.outerWidth/2;
     //-------------------------------------DIMENSIONS------------------------------------------
   Length.position(X_I-200, 20).style('font-size', '20px').style('border-radius', '10px').style('background-color', 'red').style('color', 'white').style('padding', '10px').class('TRANSFORM');
   Temperature.position(X_I-140, 20).style('font-size', '20px').style('padding', '10px').style('border-radius', '10px').style('color', 'white').style('background-color', 'green').class('TRANSFORM');
   Time.position(X_I-30, 20).style('border-radius', '10px').style('font-size', '20px').style('background-color', 'green').style('color', 'white').style('padding', '10px').class('TRANSFORM');
   Force.position(X_I+30, 20).style('padding', '10px').style('font-size', '20px').style('color', 'white').style('border-radius', '10px').style('background-color', 'green').class('TRANSFORM');
   Area.position(X_I+90, 20).style('color', 'white').style('padding', '10px').style('background-color', 'green').style('border-radius', '10px').style('font-size', '20px').class('TRANSFORM');
   Volume.position(X_I+130, 20).style('border-radius', '10px').style('font-size', '20px').style('padding', '10px').style('color', 'white').style('background-color', 'green').class('TRANSFORM');

    //------------------------TO AND FROM INPUTS--------------------------------
    From_Span.position(X_I-200,60).style('font-size','28px').class('TRANSFORM');
    From_value.position(X_I-170,55).size(150,40).style('font-size','20px').style('border-radius','10px').attribute('type', 'number').attribute('min', '0').class('TRANSFORM');
    To_Span.position(X_I+50,60).style('font-size','28px').class('TRANSFORM');
    To_Value.position(X_I+70,55).style('border','2px solid black').style('border-radius','10px').style('font-size','20px').style('padding','10px').style('background-color','rgb(205,205,205)').class('TRANSFORM');
    //--------------LENGTH TO AND FROM INPUTS-------------------------------------
    L_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    L_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    //--------------TEMPERATURE TO AND FROM INPUTS---------------------------------
    Tem_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    Tem_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    //--------------TIME TO AND FROM INPUTS---------------------------------
    T_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    T_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    //--------------FORCE TO AND FROM INPUTS---------------------------------
    F_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    F_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    //--------------AREA TO AND FROM INPUTS---------------------------------
    A_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    A_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    //--------------VOLUME TO AND FROM INPUTS---------------------------------
    V_From.position(X_I-240,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
    V_To.position(X_I-30,40).size(300,300).style('font-size','20px').style('padding','10px').style('border','2px solid black').attribute('size','15').class('TRANSFORM');
     
     let Transform_selectall=selectAll(".TRANSFORM");
    Transform_selectall.forEach(el => el.style('transform', 'scale(0.9)'));
 }
 
}