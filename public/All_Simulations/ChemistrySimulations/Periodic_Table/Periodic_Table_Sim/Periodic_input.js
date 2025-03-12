
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

  //---------HEADING & ELEMENT INFORMATION BOX----------
     head=createElement('h1','Periodic Table');
     comp_sym=createSpan('Symbol');
     com_Name=createSpan('Compound name');
     com_No=createSpan('Atomic number');
     com_mass=createSpan('Atomic Mass');
     electro_neg=createSpan('e-negativity');
     Melt_point=createSpan('Melting-point');
     Boil_point=createSpan('Boiling-point');
     Oxi_State=createSpan('Oxidation States');

  
    //Block buttons
     S_block=createButton('S Block');
     P_block=createButton('P Block');
     D_block=createButton('D Block');
     F_block=createButton('F Block');
  // Group Buttons
     A_metals=createButton('Alkali Metals').hide();
     A_Emetals=createButton('Alkali Earth Metals').hide();
     Tran_metals=createButton('Transition Metals').hide();
     PTran_metals=createButton('Post-Transition Metals').hide();
     Nobal_gas=createButton('Nobal Gases').hide();
     Lanthe=createButton('Lanthanoids').hide();
     Acti=createButton('Actinoids').hide();
     Meta=createButton('Metalloids').hide();
     O_Nmetals=createButton('Other Nonmetals').hide();

    //State
     Solid=createButton('Solid').hide();
     Liquid=createButton('Liquid').hide();
     Gas=createButton('Gas').hide();

    // make a radio 
    radio; 
    radio = createRadio();
    radio.option('Block');
    radio.option('Group');
    radio.option('State ');
    radio.selected('Block');
    radio.changed(properties);
      function properties(){
        if(radio.value()=='Block'){
          S_block.show();
          P_block.show();
          D_block.show();
          F_block.show();
          A_metals.hide();
          A_Emetals.hide();
          Tran_metals.hide();
          PTran_metals.hide();
          Nobal_gas.hide();
          Lanthe.hide();
          Acti.hide();
          Meta.hide();
          O_Nmetals.hide();
          Solid.hide();
          Liquid.hide();  
          Gas.hide();
          let S_Block_color=[H,Li,Na,K,Rb,Cs,Fr,Be,Mg,Ca,Sr,Ba,Ra];
          for(var i=0;i<S_Block_color.length;i++){
            S_Block_color[i].style('background-color','rgb(95, 86, 4)');
          }
          let D_Block_color=[Sc,Y,Ti,Zr,Hf,Rf,V,Nb,Ta,Db,Cr,Mo,W,Sg,Mn,Tc,Re,Bh,Fe,Ru,Os,Hs,Co,Rh,Ir,Mt,Ni,Pd,Pt,Ds,Cu,Ag,Au,Rg,Zn,Cd,Hg,Cn];
          for(var i=0;i<D_Block_color.length;i++){
            D_Block_color[i].style('background-color','brown');
          }
          let P_Block_color=[He,B,Al,Ga,In,Tl,Nh,C,Si,Ge,Sn,Pb,Fl,N,P,As,Sb,Bi,Mc,O,S,Se,Te,Po,Lv,F,Cl,Br,I,At,Ts,Ne,Ar,Kr,Xe,Rn,Og];
          for(var i=0;i<P_Block_color.length;i++){
            P_Block_color[i].style('background-color','rgb(22,92,92)');
          }
          let F_Block_color=[Lanthenite,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu,Actinide,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
          for(var i=0;i<F_Block_color.length;i++){
            F_Block_color[i].style('background-color','rgb(20,170,100)');
          }

        }else if(radio.value()=='Group'){
          S_block.hide();
          P_block.hide();
          D_block.hide();
          F_block.hide();
          A_metals.show();
          A_Emetals.show();
          Tran_metals.show();
          PTran_metals.show();
          Nobal_gas.show();
          Lanthe.show();
          Acti.show();
          Meta.show();
          O_Nmetals.show();
          Solid.hide();
          Liquid.hide();  
          Gas.hide();
          let Alkali_color=[Li,Na,K,Rb,Cs,Fr];
          for(var i=0;i<Alkali_color.length;i++){
            Alkali_color[i].style('background-color','#531c62');
          }
          let Alkaline_color=[Be,Mg,Ca,Sr,Ba,Ra];
          for(var i=0;i<Alkaline_color.length;i++){
            Alkaline_color[i].style('background-color','#083059');
          }
          let Lanthanoids_color=[Lanthenite,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu];
          for(var i=0;i<Lanthanoids_color.length;i++){
            Lanthanoids_color[i].style('background-color','#186d73');
          }
          let Aktinoids_color=[Actinide,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
          for(var i=0;i<Aktinoids_color.length;i++){
            Aktinoids_color[i].style('background-color','#136743');
          }
          let Transition_color=[Sc,Y,Ti,Zr,Hf,Rf,V,Nb,Ta,Db,Cr,Mo,W,Sg,Mn,Tc,Re,Bh,Fe,Ru,Os,Hs,Co,Rh,Ir,Mt,Ni,Pd,Pt,Ds,Cu,Ag,Au,Rg,Zn,Cd,Hg,Cn];
          for(var i=0;i<Transition_color.length;i++){
            Transition_color[i].style('background-color','#2E4053');
          }
          let Post_Transition_color=[Al,Ga,In,Tl,Nh,Sn,Pb,Fl,Bi,Mc,Lv];
          for(var i=0;i<Post_Transition_color.length;i++){
            Post_Transition_color[i].style('background-color','#556B2F');
          }
          let Metalloids_color=[B,Si,Ge,As,Sb,Te,Po];
          for(var i=0;i<Metalloids_color.length;i++){
            Metalloids_color[i].style('background-color','#710d42');
          }
          let O_Nonmetals_color=[H,C,N,O,F,P,S,Cl,Se,Br,I,At,Ts];
          for(var i=0;i<O_Nonmetals_color.length;i++){
            O_Nonmetals_color[i].style('background-color','#6E2C00');
          }
          let Nobal_color=[He,Ne,Ar,Kr,Xe,Rn,Og];
          for(var i=0;i<Nobal_color.length;i++){
            Nobal_color[i].style('background-color','#424949');
          }
        }else{
          S_block.hide();
          P_block.hide();
          D_block.hide();
          F_block.hide();
          A_metals.hide();
          A_Emetals.hide();
          Tran_metals.hide();
          PTran_metals.hide();
          Nobal_gas.hide();
          Lanthe.hide();
          Acti.hide();
          Meta.hide();
          O_Nmetals.hide();
          Solid.show();
          Liquid.show();  
          Gas.show();
          let Solid_color=[Li,Na,K,Rb,Cs,Fr,Be,Mg,Ca,Sr,Ba,Ra,Sc,Y,Ti,Zr,Hf,Rf,V,Nb,Ta,Db,Cr,Mo,W,Sg,Mn,Tc,Re,Bh,Fe,Ru,Os,Hs,Co,Rh,Ir,Mt,Ni,Pd,Pt,Ds,Cu,Ag,Au,Rg,Zn,Cd,Cn,B,Al,Ga,In,Tl,Nh,C,Si,Ge,Sn,Pb,Fl,P,As,Sb,Bi,Mc,S,Se,Te,Po,Lv,I,At,Ts,Lanthenite,La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu,Actinide,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
          for(var i=0;i<Solid_color.length;i++){
            Solid_color[i].style('background-color','#8d552d');
          }
          let Liquid_color=[Hg,Br];
          for(var i=0;i<Liquid_color.length;i++){
            Liquid_color[i].style('background-color',' #1F618D ');
          }
          let Gas_color=[N,H,He,Ne,O,F,Cl,Ne,Ar,Kr,Xe,Rn,Og];
          for(var i=0;i<Gas_color.length;i++){
            Gas_color[i].style('background-color','#2E4053');
          }
        }
      }

    
    
    //Create all Buttons
//-------------------------------------------S block------------------------------------------------------------
    // let H,Li,Na,K,Rb,Cs,Fr;
     H=createButton('H'); 
     Li=createButton('Li');
     Na=createButton('Na');
     K=createButton('K'); 
     Rb=createButton('Rb');
     Cs=createButton('Cs');
     Fr=createButton('Fr');
     H.mousePressed(()=>(N_e=1,N_p=1,N_n=0,e_K=1,e_L=0,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('H'),com_Name.html('Hydrogen') ,com_No.html('1'),com_mass.html('1.0080 u'),electro_neg.html('2.2'),Melt_point.html('373 K') ,Boil_point.html('403 K'),Oxi_State.html('+1, -1')));
     Li.mousePressed(()=>(N_e=3,N_p=3,N_n=4,e_K=2,e_L=1,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Li'),com_Name.html('Lithium') ,com_No.html('3'),com_mass.html('7.0 u'),electro_neg.html('0.98'),Melt_point.html('453.65 K') ,Boil_point.html('1615 K'),Oxi_State.html('+1')));
     Na.mousePressed(()=>(N_e=11,N_p=11,N_n=12,e_K=2,e_L=8,e_M=1,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Na'),com_Name.html('Sodium') ,com_No.html('11'),com_mass.html('22.989769 u'),electro_neg.html('0.93'),Melt_point.html('370.95 K') ,Boil_point.html('1156 K'),Oxi_State.html('+1')));
     K.mousePressed(()=>(N_e=19,N_p=19,N_n=20,e_K=2,e_L=8,e_M=8,e_N=1,e_O=0,e_P=0,e_Q=0,comp_sym.html('K'),com_Name.html('Potassium') ,com_No.html('19'),com_mass.html('39.098 u'),electro_neg.html('0.82'),Melt_point.html('336.53 K') ,Boil_point.html('1032 K'),Oxi_State.html('+1')));
     Rb.mousePressed(()=>(N_e=37,N_p=37,N_n=48,e_K=2,e_L=8,e_M=18,e_N=1,e_O=0,e_P=0,e_Q=0,comp_sym.html('Rb'),com_Name.html('Rubidium') ,com_No.html('37'),com_mass.html('85.468 u'),electro_neg.html('0.82'),Melt_point.html('312.46 K') ,Boil_point.html('961 K'),Oxi_State.html('+1')));
     Cs.mousePressed(()=>(N_e=55,N_p=55,N_n=78,e_K=2,e_L=8,e_M=18,e_N=18,e_O=8,e_P=0,e_Q=0,comp_sym.html('Cs'),com_Name.html('Cesium') ,com_No.html('55'),com_mass.html('132.905452 u'),electro_neg.html('0.79'),Melt_point.html('301.59 K') ,Boil_point.html('944 K'),Oxi_State.html('+1')));
     Fr.mousePressed(()=>(N_e=87,N_p=87,N_n=136,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=8,e_Q=1,comp_sym.html('Fr'),com_Name.html('Francium') ,com_No.html('87'),com_mass.html('223.01973 u'),electro_neg.html('0.70'),Melt_point.html('300 K') ,Boil_point.html('N/A'),Oxi_State.html('+1')));
             
    //  let Be,Mg,Ca,Sr,Ba,Ra;
    Be=createButton('Be'); 
    Mg=createButton('Mg');
    Ca=createButton('Ca');
    Sr=createButton('Sr'); 
    Ba=createButton('Ba');
    Ra=createButton('Ra'); 
    Be.mousePressed(()=>(N_e=4,N_p=4,N_n=5,e_K=2,e_L=2,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Be'),com_Name.html('Beryllium') ,com_No.html('4'),com_mass.html('9.012183 u'),electro_neg.html('1.57'),Melt_point.html('1560 K') ,Boil_point.html('2744 K'),Oxi_State.html('+2')));
    Mg.mousePressed(()=>(N_e=12,N_p=12,N_n=12,e_K=2,e_L=8,e_M=2,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Mg'),com_Name.html('Magnesium') ,com_No.html('12'),com_mass.html('24.305 u'),electro_neg.html('1.31'),Melt_point.html('923 K') ,Boil_point.html('1363 K'),Oxi_State.html('+2')));
    Ca.mousePressed(()=>(N_e=20,N_p=20,N_n=20,e_K=2,e_L=8,e_M=8,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Ca'),com_Name.html('Calcium') ,com_No.html('20'),com_mass.html('40.08 u'),electro_neg.html('1'),Melt_point.html('1115 K') ,Boil_point.html('1757 K'),Oxi_State.html('+2')));
    Sr.mousePressed(()=>(N_e=38,N_p=38,N_n=50,e_K=2,e_L=8,e_M=18,e_N=8,e_O=4,e_P=0,e_Q=0,comp_sym.html('Sr'),com_Name.html('Strontium') ,com_No.html('38'),com_mass.html('87.6 u'),electro_neg.html('0.95'),Melt_point.html('1050 K') ,Boil_point.html('1655 K'),Oxi_State.html('+2')));
    Ba.mousePressed(()=>(N_e=56,N_p=56,N_n=81,e_K=2,e_L=8,e_M=18,e_N=18,e_O=8,e_P=2,e_Q=0,comp_sym.html('Ba'),com_Name.html('Barium') ,com_No.html('56'),com_mass.html('137.33 u'),electro_neg.html('0.89'),Melt_point.html('1000 K') ,Boil_point.html('2170 K'),Oxi_State.html('+2')));
    Ra.mousePressed(()=>(N_e=88,N_p=88,N_n=138,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=8,e_Q=2,comp_sym.html('Ra'),com_Name.html('Radium') ,com_No.html('88'),com_mass.html('226.02541 u'),electro_neg.html('0.90'),Melt_point.html('973 K') ,Boil_point.html('1413'),Oxi_State.html('+2')));
    
    
  //-----------------------------------------------D BLOCK-------------------------------------------------------------
    //  let Sc,Y;
     Sc=createButton('Sc'); 
     Y=createButton('Y');
     Sc.mousePressed(()=>(N_e=21,N_p=21,N_n=24,e_K=2,e_L=8,e_M=9,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Sc'),com_Name.html('Scandium') ,com_No.html('21'),com_mass.html('44.95591 u'),electro_neg.html('1.36'),Melt_point.html('1814 K') ,Boil_point.html('3109 K'),Oxi_State.html('+3')));
     Y.mousePressed(()=>(N_e=39,N_p=39,N_n=50,e_K=2,e_L=8,e_M=18,e_N=9,e_O=2,e_P=0,e_Q=0,comp_sym.html('Y'),com_Name.html('Yttrium') ,com_No.html('39'),com_mass.html('88.9058 u'),electro_neg.html('1.22'),Melt_point.html('1795 K') ,Boil_point.html('3618 K'),Oxi_State.html('+3')));

    //  let Ti,Zr,Hf,Rf;
     Ti=createButton('Ti'); 
     Zr=createButton('Zr');
     Hf=createButton('Hf'); 
     Rf=createButton('Rf');
     Ti.mousePressed(()=>(N_e=22,N_p=22,N_n=26,e_K=2,e_L=8,e_M=10,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Ti'),com_Name.html('Titanium') ,com_No.html('22'),com_mass.html('47.87 u'),electro_neg.html('1.54'),Melt_point.html('1941 K') ,Boil_point.html('3560 K'),Oxi_State.html('+4 ,+3 ,+2')));
     Zr.mousePressed(()=>(N_e=40,N_p=40,N_n=51,e_K=2,e_L=8,e_M=18,e_N=10,e_O=2,e_P=0,e_Q=0,comp_sym.html('Zr'),com_Name.html('Zirconium') ,com_No.html('40'),com_mass.html('91.22 u'),electro_neg.html('1.33'),Melt_point.html('2128 K') ,Boil_point.html('4682 K'),Oxi_State.html('+4')));
     Hf.mousePressed(()=>(N_e=72,N_p=72,N_n=106,e_K=2,e_L=8,e_M=18,e_N=32,e_O=10,e_P=2,e_Q=0,comp_sym.html('Hf'),com_Name.html('Hafnium') ,com_No.html('72'),com_mass.html('178.49 u'),electro_neg.html('1.3'),Melt_point.html('2506 K') ,Boil_point.html('4876 K'),Oxi_State.html('+3')));
     Rf.mousePressed(()=>(N_e=104,N_p=104,N_n=163,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=10,e_Q=2,comp_sym.html('Rf'),com_Name.html('Rutherfordium') ,com_No.html('104'),com_mass.html('267.122 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+4')));

    //  let V,Nb,Ta,Db;
    V=createButton('V'); 
    Nb=createButton('Nb');
    Ta=createButton('Ta'); 
    Db=createButton('Db');
    V.mousePressed(()=>(N_e=23,N_p=23,N_n=28,e_K=2,e_L=8,e_M=11,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('V'),com_Name.html('Vanadium') ,com_No.html('23'),com_mass.html('50.941 u'),electro_neg.html('1.63'),Melt_point.html('2183 K') ,Boil_point.html('3680 K'),Oxi_State.html('+5,+4 ,+3 ,+2')));
    Nb.mousePressed(()=>(N_e=41,N_p=41,N_n=52,e_K=2,e_L=8,e_M=18,e_N=12,e_O=1,e_P=0,e_Q=0,comp_sym.html('Nb'),com_Name.html('Niobium') ,com_No.html('41'),com_mass.html('92.9064 u'),electro_neg.html('1.6'),Melt_point.html('2750 K') ,Boil_point.html('5017 K'),Oxi_State.html('+5, +3')));
    Ta.mousePressed(()=>(N_e=73,N_p=73,N_n=108,e_K=2,e_L=8,e_M=18,e_N=32,e_O=11,e_P=2,e_Q=0,comp_sym.html('Ta'),com_Name.html('Tantalum') ,com_No.html('73'),com_mass.html('180.9479 u'),electro_neg.html('1.5'),Melt_point.html('3290 K') ,Boil_point.html('5731 K'),Oxi_State.html('+5')));
    Db.mousePressed(()=>(N_e=105,N_p=105,N_n=165,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=11,e_Q=2,comp_sym.html('Db'),com_Name.html('Dubnium') ,com_No.html('105'),com_mass.html('268.126 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+5,+4,+3')));

    // let Cr,Mo,W,Sg;
    Cr=createButton('Cr'); 
    Mo=createButton('Mo');
    W=createButton('W'); 
    Sg=createButton('Sg');
    Cr.mousePressed(()=>(N_e=24,N_p=24,N_n=28,e_K=2,e_L=8,e_M=13,e_N=1,e_O=0,e_P=0,e_Q=0,comp_sym.html('Cr'),com_Name.html('Chromium') ,com_No.html('24'),com_mass.html('51.996 u'),electro_neg.html('1.66'),Melt_point.html('2180 K') ,Boil_point.html('2944 K'),Oxi_State.html('+6,+3 ,+2')));
    Mo.mousePressed(()=>(N_e=42,N_p=42,N_n=54,e_K=2,e_L=8,e_M=18,e_N=13,e_O=1,e_P=0,e_Q=0,comp_sym.html('Mo'),com_Name.html('Molybdenum') ,com_No.html('42'),com_mass.html('96.0 u'),electro_neg.html('2.16'),Melt_point.html('2896 K') ,Boil_point.html('4912 K'),Oxi_State.html('+6 ')));
    W.mousePressed(()=>(N_e=74,N_p=74,N_n=110,e_K=2,e_L=8,e_M=18,e_N=32,e_O=12,e_P=2,e_Q=0,comp_sym.html('W'),com_Name.html('Tungsten') ,com_No.html('74'),com_mass.html('183.8 u'),electro_neg.html('2.36'),Melt_point.html('3695 K') ,Boil_point.html('5828 K'),Oxi_State.html('+6')));
    Sg.mousePressed(()=>(N_e=106,N_p=106,N_n=163,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=12,e_Q=2,comp_sym.html('Sg'),com_Name.html('Seaborgium') ,com_No.html('106'),com_mass.html('269.128 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+6,+5,+4,+3,0')));
  
    // let Mn,Tc,Re,Bh;
    Mn=createButton('Mn'); 
    Tc=createButton('Tc');
    Re=createButton('Re'); 
    Bh=createButton('Bh');
    Mn.mousePressed(()=>(N_e=25,N_p=25,N_n=30,e_K=2,e_L=8,e_M=13,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Mn'),com_Name.html('Manganese') ,com_No.html('25'),com_mass.html('54.93804 u'),electro_neg.html('1.55'),Melt_point.html('1519 K') ,Boil_point.html('2334 K'),Oxi_State.html('+6,+3 ,+2')));
    Tc.mousePressed(()=>(N_e=43,N_p=43,N_n=55,e_K=2,e_L=8,e_M=18,e_N=13,e_O=2,e_P=0,e_Q=0,comp_sym.html('Tc'),com_Name.html('Technetium') ,com_No.html('43'),com_mass.html('96.90636 u'),electro_neg.html('1.9'),Melt_point.html('2430 K') ,Boil_point.html('4538 K'),Oxi_State.html('+7,+6,+4 ')));
    Re.mousePressed(()=>(N_e=75,N_p=75,N_n=111,e_K=2,e_L=8,e_M=18,e_N=32,e_O=13,e_P=2,e_Q=0,comp_sym.html('Re'),com_Name.html('Rhenium') ,com_No.html('75'),com_mass.html('186.21 u'),electro_neg.html('1.9'),Melt_point.html('3459 K') ,Boil_point.html('5869 K'),Oxi_State.html('+7,+6,+4')));
    Bh.mousePressed(()=>(N_e=107,N_p=107,N_n=163,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=13,e_Q=2,comp_sym.html('Bh'),com_Name.html('Bohrium') ,com_No.html('107'),com_mass.html('270.133 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+7,+5,+4,+3')));

    // let Fe,Ru,Os,Hs;
    Fe=createButton('Fe'); 
    Ru=createButton('Ru');
    Os=createButton('Os'); 
    Hs=createButton('Hs');
    Fe.mousePressed(()=>(N_e=26,N_p=26,N_n=130,e_K=2,e_L=8,e_M=14,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Fe'),com_Name.html('Iron') ,com_No.html('26'),com_mass.html('55.84 u'),electro_neg.html('1.83'),Melt_point.html('1811 K') ,Boil_point.html('3134 K'),Oxi_State.html('+3 ,+2')));
    Ru.mousePressed(()=>(N_e=44,N_p=44,N_n=57,e_K=2,e_L=8,e_M=18,e_N=15,e_O=1,e_P=0,e_Q=0,comp_sym.html('Ru'),com_Name.html('Ruthenium') ,com_No.html('44'),com_mass.html('101.1 u'),electro_neg.html('2.2'),Melt_point.html('2607 K') ,Boil_point.html('4423 K'),Oxi_State.html('+3')));
    Os.mousePressed(()=>(N_e=76,N_p=76,N_n=114,e_K=2,e_L=8,e_M=18,e_N=32,e_O=14,e_P=2,e_Q=0,comp_sym.html('Os'),com_Name.html('Osmium') ,com_No.html('76'),com_mass.html('190.2 u'),electro_neg.html('2.2'),Melt_point.html('3306 K') ,Boil_point.html('5285 K'),Oxi_State.html('+4,+3')));
    Hs.mousePressed(()=>(N_e=108,N_p=108,N_n=162,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=14,e_Q=2,comp_sym.html('Hs'),com_Name.html('Hassium') ,com_No.html('108'),com_mass.html('269.134 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+8,+6,+5,+3,2')));

    // let Co,Rh,Ir,Mt;
    Co=createButton('Co'); 
    Rh=createButton('Rh');
    Ir=createButton('Ir'); 
    Mt=createButton('Mt');
    Co.mousePressed(()=>(N_e=27,N_p=27,N_n=32,e_K=2,e_L=8,e_M=15,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Co'),com_Name.html('Cobalt') ,com_No.html('27'),com_mass.html('58.93319 u'),electro_neg.html('1.88'),Melt_point.html('1768 K') ,Boil_point.html('3200 K'),Oxi_State.html('+3 ,+2')));
    Rh.mousePressed(()=>(N_e=45,N_p=45,N_n=58,e_K=2,e_L=8,e_M=18,e_N=16,e_O=1,e_P=0,e_Q=0,comp_sym.html('Rh'),com_Name.html('Rhodium') ,com_No.html('45'),com_mass.html('102.9055 u'),electro_neg.html('2.28'),Melt_point.html('2237 K') ,Boil_point.html('3968 K'),Oxi_State.html('+3')));
    Ir.mousePressed(()=>(N_e=77,N_p=77,N_n=115,e_K=2,e_L=8,e_M=18,e_N=32,e_O=15,e_P=2,e_Q=0,comp_sym.html('Ir'),com_Name.html('Iridium') ,com_No.html('77'),com_mass.html('192.22 u'),electro_neg.html('2.2'),Melt_point.html('2719 K') ,Boil_point.html('4701 K'),Oxi_State.html('+4,+3')));
    Mt.mousePressed(()=>(N_e=109,N_p=109,N_n=169,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=15,e_Q=2,comp_sym.html('Mt'),com_Name.html('Meitnerium') ,com_No.html('109'),com_mass.html('277.154 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+9,+8,+6,+4,+3,+1')));
   
    // let Ni,Pd,Pt,Ds;
    Ni=createButton('Ni'); 
    Pd=createButton('Pd');
    Pt=createButton('Pt'); 
    Ds=createButton('Ds');
    Ni.mousePressed(()=>(N_e=28,N_p=28,N_n=31,e_K=2,e_L=8,e_M=16,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Ni'),com_Name.html('Nickel') ,com_No.html('28'),com_mass.html('58.693 u'),electro_neg.html('1.91'),Melt_point.html('1728 K') ,Boil_point.html('3186 K'),Oxi_State.html('+3 ,+2')));
    Pd.mousePressed(()=>(N_e=46,N_p=46,N_n=60,e_K=2,e_L=8,e_M=18,e_N=18,e_O=0,e_P=0,e_Q=0,comp_sym.html('Pd'),com_Name.html('Palladium') ,com_No.html('46'),com_mass.html('106.4 u'),electro_neg.html('2.2'),Melt_point.html('1828.05 K') ,Boil_point.html('3236 K'),Oxi_State.html('+3,+2')));
    Pt.mousePressed(()=>(N_e=78,N_p=78,N_n=117,e_K=2,e_L=8,e_M=18,e_N=32,e_O=17,e_P=1,e_Q=0,comp_sym.html('Pt'),com_Name.html('Platinum') ,com_No.html('78'),com_mass.html('195.08 u'),electro_neg.html('2.28'),Melt_point.html('2041.55 K') ,Boil_point.html('4098 K'),Oxi_State.html('+4,+2')));
    Ds.mousePressed(()=>(N_e=110,N_p=110,N_n=171,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=16,e_Q=2,comp_sym.html('Ds'),com_Name.html('Darmstadtium') ,com_No.html('110'),com_mass.html('282.166 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+8,+6,+4,+2,0')));

    // let Cu, Ag, Au, Rg;
    Cu = createButton('Cu');
    Ag = createButton('Ag');
    Au = createButton('Au');
    Rg = createButton('Rg');
    Cu.mousePressed(() => (N_e = 29, N_p = 29, N_n = 35, e_K = 2, e_L = 8, e_M = 18, e_N = 1, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Cu'), com_Name.html('Copper'), com_No.html('29'), com_mass.html('63.55 u'), electro_neg.html('1.9'), Melt_point.html('1357.77 K'), Boil_point.html('2835 K'), Oxi_State.html('+2,+1')));
    Ag.mousePressed(() => (N_e = 47, N_p = 47, N_n = 61, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 1, e_P = 0, e_Q = 0, comp_sym.html('Ag'), com_Name.html('Silver'), com_No.html('47'), com_mass.html('107.868 u'), electro_neg.html('1.93'), Melt_point.html('1234.93 K'), Boil_point.html('2435 K'), Oxi_State.html('+1')));
    Au.mousePressed(() => (N_e = 79, N_p = 79, N_n = 118, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 18, e_P = 1, e_Q = 0, comp_sym.html('Au'), com_Name.html('Gold'), com_No.html('79'), com_mass.html('196.96657 u'), electro_neg.html('2.54'), Melt_point.html('1337.33 K'), Boil_point.html('3129 K'), Oxi_State.html('+3,+1')));
    Rg.mousePressed(() => (N_e = 111, N_p = 111, N_n = 170, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 32, e_P = 17, e_Q = 2, comp_sym.html('Rg'), com_Name.html('Roentgenium'), com_No.html('111'), com_mass.html('282.169 u'), electro_neg.html('N/A'), Melt_point.html('N/A'), Boil_point.html('N/A'), Oxi_State.html('+5,+3,+1,-1')));

    // let Zn,Cd,Hg,Cn;
    Zn=createButton('Zn'); 
    Cd=createButton('Cd');
    Hg=createButton('Hg'); 
    Cn=createButton('Cn');
    Zn.mousePressed(()=>(N_e=30,N_p=30,N_n=35,e_K=2,e_L=8,e_M=18,e_N=2,e_O=0,e_P=0,e_Q=0,comp_sym.html('Zn'),com_Name.html('Zinc') ,com_No.html('30'),com_mass.html('65.4 u'),electro_neg.html('1.65'),Melt_point.html('692.68 K') ,Boil_point.html('1180 K'),Oxi_State.html('+2')));
    Cd.mousePressed(()=>(N_e=48,N_p=48,N_n=64,e_K=2,e_L=8,e_M=18,e_N=18,e_O=2,e_P=0,e_Q=0,comp_sym.html('Cd'),com_Name.html('Cadmium') ,com_No.html('48'),com_mass.html('112.41 u'),electro_neg.html('1.69'),Melt_point.html('594.22 K') ,Boil_point.html('1040 K'),Oxi_State.html('+2')));
    Hg.mousePressed(()=>(N_e=80,N_p=80,N_n=121,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=2,e_Q=0,comp_sym.html('Hg'),com_Name.html('Mercury') ,com_No.html('80'),com_mass.html('200.59 u'),electro_neg.html('2'),Melt_point.html('234.32 K') ,Boil_point.html('629.88 K'),Oxi_State.html('+2,+1')));
    Cn.mousePressed(()=>(N_e=112,N_p=112,N_n=173,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=18,e_Q=2,comp_sym.html('Cn'),com_Name.html('Copernicium') ,com_No.html('112'),com_mass.html('286.179 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+2,+1,0')));
  
//------------------------------------------------------P BLOCK---------------------------------------------------
  // let B,Al,Ga,In,Tl,Nh;
  B=createButton('B'); 
  Al=createButton('Al');
  Ga=createButton('Ga'); 
  In=createButton('In');
  Tl=createButton('Tl');
  Nh=createButton('Nh');
  B.mousePressed(()=>(N_e=5,N_p=5,N_n=6,e_K=2,e_L=3,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('B'),com_Name.html('Boron') ,com_No.html('5'),com_mass.html('10.81 u'),electro_neg.html('2.04'),Melt_point.html('2348 K') ,Boil_point.html('4273 K'),Oxi_State.html('+3')));
  Al.mousePressed(()=>(N_e=13,N_p=13,N_n=14,e_K=2,e_L=8,e_M=3,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Al'),com_Name.html('Aluminum') ,com_No.html('13'),com_mass.html('26.981538 u'),electro_neg.html('1.61'),Melt_point.html('933.437 K') ,Boil_point.html('2792 K'),Oxi_State.html('+3')));
  Ga.mousePressed(()=>(N_e=31,N_p=31,N_n=39,e_K=2,e_L=8,e_M=18,e_N=3,e_O=0,e_P=0,e_Q=0,comp_sym.html('Ga'),com_Name.html('Gallium') ,com_No.html('31'),com_mass.html('69.72 u'),electro_neg.html('1.81'),Melt_point.html('302.91 K') ,Boil_point.html('2477 K'),Oxi_State.html('+3')));
  In.mousePressed(()=>(N_e=49,N_p=49,N_n=66,e_K=2,e_L=8,e_M=18,e_N=18,e_O=3,e_P=0,e_Q=0,comp_sym.html('In'),com_Name.html('Indium') ,com_No.html('49'),com_mass.html('114.82 u'),electro_neg.html('1.78'),Melt_point.html('429.75 K') ,Boil_point.html('2345 K'),Oxi_State.html('+3')));
  Tl.mousePressed(()=>(N_e=81,N_p=81,N_n=123,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=3,e_Q=0,comp_sym.html('Tl'),com_Name.html('Thallium') ,com_No.html('81'),com_mass.html('204.383 u'),electro_neg.html('1.62'),Melt_point.html('577 K') ,Boil_point.html('1746 K'),Oxi_State.html('+3,+1')));
  Nh.mousePressed(()=>(N_e=113,N_p=113,N_n=173,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=18,e_Q=3,comp_sym.html('Nh'),com_Name.html('Nihonium') ,com_No.html('113'),com_mass.html('286.182 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('N/A')));
  
  // let C, Si, Ge, Sn, Pb, Fl;
  C=createButton('C');
  Si=createButton('Si');
  Ge=createButton('Ge');
  Sn=createButton('Sn');
  Pb=createButton('Pb');
  Fl=createButton('Fl');
  C.mousePressed(() => (N_e = 6, N_p = 6, N_n = 6, e_K = 2, e_L = 4, e_M = 0, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('C'), com_Name.html('Carbon'), com_No.html('6'), com_mass.html('12.011 u'), electro_neg.html('2.55'), Melt_point.html('3823 K'), Boil_point.html('4098 K'), Oxi_State.html('+4,+2,-4')));
  Si.mousePressed(() => (N_e = 14, N_p = 14, N_n = 14, e_K = 2, e_L = 8, e_M = 4, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Si'), com_Name.html('Silicon'), com_No.html('14'), com_mass.html('28.085 u'), electro_neg.html('1.9'), Melt_point.html('1687 K'), Boil_point.html('3538 K'), Oxi_State.html('+4,+2,-4')));
  Ge.mousePressed(() => (N_e = 32, N_p = 32, N_n = 41, e_K = 2, e_L = 8, e_M = 18, e_N = 4, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Ge'), com_Name.html('Germanium'), com_No.html('32'), com_mass.html('72.63 u'), electro_neg.html('2.01'), Melt_point.html('1211.4 K'), Boil_point.html('3106 K'), Oxi_State.html('+4,+2')));
  Sn.mousePressed(() => (N_e = 50, N_p = 50, N_n = 41, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 4, e_P = 0, e_Q = 0, comp_sym.html('Sn'), com_Name.html('Tin'), com_No.html('50'), com_mass.html('118.71 u'), electro_neg.html('1.96'), Melt_point.html('505.08 K'), Boil_point.html('2875 K'), Oxi_State.html('+4,+2')));
  Pb.mousePressed(() => (N_e = 82, N_p = 82, N_n = 125, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 18, e_P = 4, e_Q = 0, comp_sym.html('Pb'), com_Name.html('Lead'), com_No.html('82'), com_mass.html('2.1e+02 u'), electro_neg.html('2.33'), Melt_point.html('600.61 K'), Boil_point.html('2022 K'), Oxi_State.html('+4,+2')));
  Fl.mousePressed(() => (N_e = 114, N_p = 114, N_n = 175, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 32, e_P = 18, e_Q = 4, comp_sym.html('Fl'), com_Name.html('Flerovium'), com_No.html('114'), com_mass.html('290.192 u'), electro_neg.html('N/A'), Melt_point.html('N/A'), Boil_point.html('N/A'), Oxi_State.html('+6,+4,+2,+1,0')));
  
  // let N, P, As, Sb, Bi, Mc;
  N = createButton('N');
  P = createButton('P');
  As = createButton('As');
  Sb = createButton('Sb');
  Bi = createButton('Bi');
  Mc = createButton('Mc');
  N.mousePressed(() => (N_e = 7, N_p = 7, N_n = 7, e_K = 2, e_L = 5, e_M = 0, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('N'), com_Name.html('Nitrogen'), com_No.html('7'), com_mass.html('14.007 u'), electro_neg.html('3.04'), Melt_point.html('63.15 K'), Boil_point.html('77.36 K'), Oxi_State.html('+5,+4,+3,+2,+1,-1,-2,-3')));
  P.mousePressed(() => (N_e = 15, N_p = 15, N_n = 16, e_K = 2, e_L = 8, e_M = 5, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('P'), com_Name.html('Phosphorus'), com_No.html('15'), com_mass.html('30.973762 u'), electro_neg.html('2.19'), Melt_point.html('317.3 K'), Boil_point.html('553.65 K'), Oxi_State.html('+5,+3,-3')));
  As.mousePressed(() => (N_e = 33, N_p = 33, N_n = 42, e_K = 2, e_L = 8, e_M = 18, e_N = 5, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('As'), com_Name.html('Arsenic'), com_No.html('33'), com_mass.html('74.92159 u'), electro_neg.html('2.18'), Melt_point.html('1090 K'), Boil_point.html('887 K'), Oxi_State.html('+5,+3,-3')));
  Sb.mousePressed(() => (N_e = 51, N_p = 51, N_n = 71, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 5, e_P = 0, e_Q = 0, comp_sym.html('Sb'), com_Name.html('Antimony'), com_No.html('51'), com_mass.html('121.76 u'), electro_neg.html('2.05'), Melt_point.html('903.78 K'), Boil_point.html('1860 K'), Oxi_State.html('+4,+3,-3')));
  Bi.mousePressed(() => (N_e = 83, N_p = 83, N_n = 126, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 18, e_P = 5, e_Q = 0, comp_sym.html('Bi'), com_Name.html('Bismuth'), com_No.html('83'), com_mass.html('208.9804 u'), electro_neg.html('2.02'), Melt_point.html('544.55 K'), Boil_point.html('1837 K'), Oxi_State.html('+5,+3')));
  Mc.mousePressed(() => (N_e = 115, N_p = 115, N_n = 174, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 32, e_P = 18, e_Q = 5, comp_sym.html('Mc'), com_Name.html('Moscovium'), com_No.html('115'), com_mass.html('290.196 u'), electro_neg.html('N/A'), Melt_point.html('N/A'), Boil_point.html('N/A'), Oxi_State.html('3, 1')));
  
  // let O, S, Se, Te, Po, Lv;
  O = createButton('O');
  S = createButton('S');
  Se = createButton('Se');
  Te = createButton('Te');
  Po = createButton('Po');
  Lv = createButton('Lv');
  O.mousePressed(() => (N_e = 8, N_p = 8, N_n = 8, e_K = 2, e_L = 6, e_M = 0, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('O'), com_Name.html('Oxygen'), com_No.html('8'), com_mass.html('15.999 u'), electro_neg.html('3.44'), Melt_point.html('54.36 K'), Boil_point.html('90.2 K'), Oxi_State.html('-2')));
  S.mousePressed(() => (N_e = 16, N_p = 16, N_n = 16, e_K = 2, e_L = 8, e_M = 6, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('S'), com_Name.html('Sulfur'), com_No.html('16'), com_mass.html('32.07 u'), electro_neg.html('2.58'), Melt_point.html('388.36 K'), Boil_point.html('717.75 K'), Oxi_State.html('+6,+4,-2')));
  Se.mousePressed(() => (N_e = 34, N_p = 34, N_n = 45, e_K = 2, e_L = 8, e_M = 18, e_N = 6, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Se'), com_Name.html('Selenium'), com_No.html('34'), com_mass.html('78.97 u'), electro_neg.html('2.55'), Melt_point.html('1493.65 K'), Boil_point.html('958 K'), Oxi_State.html('+6,+4,-2')));
  Te.mousePressed(() => (N_e = 52, N_p = 52, N_n = 76, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 6, e_P = 0, e_Q = 0, comp_sym.html('Te'), com_Name.html('Tellurium'), com_No.html('52'), com_mass.html('127.6 u'), electro_neg.html('2.1'), Melt_point.html('722.66 K'), Boil_point.html('1261 K'), Oxi_State.html('+6,+4,-2')));
  Po.mousePressed(() => (N_e = 84, N_p = 84, N_n = 125, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 18, e_P = 6, e_Q = 0, comp_sym.html('Po'), com_Name.html('Polonium'), com_No.html('84'), com_mass.html('208.98243 u'), electro_neg.html('2'), Melt_point.html('527 K'), Boil_point.html('1235 K'), Oxi_State.html('+4,+2')));
  Lv.mousePressed(() => (N_e = 116, N_p = 116, N_n = 177, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 32, e_P = 18, e_Q = 6, comp_sym.html('Lv'), com_Name.html('Livermorium'), com_No.html('116'), com_mass.html('293.205 u'), electro_neg.html('N/A'), Melt_point.html('N/A'), Boil_point.html('N/A'), Oxi_State.html('+4,+2,-2')));

    // let F,Cl,Br,I,At,Ts;
    F=createButton('F'); 
    Cl=createButton('Cl');
    Br=createButton('Br');
    I=createButton('I'); 
    At=createButton('At');
    Ts=createButton('Ts');
    F.mousePressed(()=>(N_e=9,N_p=9,N_n=10,e_K=2,e_L=7,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('F'),com_Name.html('Fluorine') ,com_No.html('9'),com_mass.html('18.99840316 u'),electro_neg.html('3.98'),Melt_point.html('53.53 K') ,Boil_point.html('85.03 K'),Oxi_State.html('-1')));
    Cl.mousePressed(()=>(N_e=17,N_p=17,N_n=18,e_K=2,e_L=8,e_M=7,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('Cl'),com_Name.html('Chlorine') ,com_No.html('17'),com_mass.html('35.45 u'),electro_neg.html('3.16'),Melt_point.html('171.65 K') ,Boil_point.html('239.11 K'),Oxi_State.html('+7,+5,+1,-1')));
    Br.mousePressed(()=>(N_e=35,N_p=35,N_n=45,e_K=2,e_L=8,e_M=18,e_N=7,e_O=0,e_P=0,e_Q=0,comp_sym.html('Br'),com_Name.html('Bromine') ,com_No.html('35'),com_mass.html('79.90 u'),electro_neg.html('2.96'),Melt_point.html('265.95 K') ,Boil_point.html('331.95 K'),Oxi_State.html('+5,+1,-1')));
    I.mousePressed(()=>(N_e=53,N_p=53,N_n=74,e_K=2,e_L=8,e_M=18,e_N=18,e_O=7,e_P=0,e_Q=0,comp_sym.html('I'),com_Name.html('Iodine') ,com_No.html('53'),com_mass.html('126.9045 u'),electro_neg.html('2.66'),Melt_point.html('386.85 K') ,Boil_point.html('457.55 K'),Oxi_State.html('+7,+5,+1,-1')));
    At.mousePressed(()=>(N_e=85,N_p=85,N_n=125,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=7,e_Q=0,comp_sym.html('At'),com_Name.html('Astatine') ,com_No.html('85'),com_mass.html('209.98715 u'),electro_neg.html('2.2'),Melt_point.html('575 K') ,Boil_point.html('N/A'),Oxi_State.html('+7,+5,+3,+1,-1')));
    Ts.mousePressed(()=>(N_e=117,N_p=117,N_n=176,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=18,e_Q=7,comp_sym.html('Ts'),com_Name.html('Tennessine') ,com_No.html('117'),com_mass.html('294.211 u'),electro_neg.html('N/A'),Melt_point.html('N/A') ,Boil_point.html('N/A'),Oxi_State.html('+5,+3,+1,-1')));
    
    // let Ne, Ar, Kr, Xe, Rn, Og;
    Ne = createButton('Ne'); 
    Ar = createButton('Ar');
    Kr = createButton('Kr'); 
    Xe = createButton('Xe');
    Rn = createButton('Rn');
    Og = createButton('Og');
    Ne.mousePressed(() => (N_e = 10, N_p = 10, N_n = 10, e_K = 2, e_L = 8, e_M = 0, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Ne'), com_Name.html('Neon'), com_No.html('10'), com_mass.html('20.180 u'), electro_neg.html('N/A'), Melt_point.html('24.56 K'), Boil_point.html('27.07 K'), Oxi_State.html('0')));
    Ar.mousePressed(() => (N_e = 18, N_p = 18, N_n = 22, e_K = 2, e_L = 8, e_M = 8, e_N = 0, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Ar'), com_Name.html('Argon'), com_No.html('18'), com_mass.html('39.9 u'), electro_neg.html('N/A'), Melt_point.html('83.8 K'), Boil_point.html('87.3 K'), Oxi_State.html('0')));
    Kr.mousePressed(() => (N_e = 36, N_p = 36, N_n = 48, e_K = 2, e_L = 8, e_M = 18, e_N = 8, e_O = 0, e_P = 0, e_Q = 0, comp_sym.html('Kr'), com_Name.html('Krypton'), com_No.html('36'), com_mass.html('83.80 u'), electro_neg.html('3'), Melt_point.html('115.79 K'), Boil_point.html('119.93 K'), Oxi_State.html('0')));
    Xe.mousePressed(() => (N_e = 54, N_p = 54, N_n = 77, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 8, e_P = 0, e_Q = 0, comp_sym.html('Xe'), com_Name.html('Xenon'), com_No.html('54'), com_mass.html('131.29 u'), electro_neg.html('2.6'), Melt_point.html('161.36 K'), Boil_point.html('165.03 K'), Oxi_State.html('0')));
    Rn.mousePressed(() => (N_e = 86, N_p = 86, N_n = 136, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 18, e_P = 8, e_Q = 0, comp_sym.html('Rn'), com_Name.html('Radon'), com_No.html('86'), com_mass.html('222.01758 u'), electro_neg.html('N/A'), Melt_point.html('202 K'), Boil_point.html('211.45 K'), Oxi_State.html('0')));
    Og.mousePressed(() => (N_e = 118, N_p = 118, N_n = 176, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 32, e_P = 18, e_Q = 8, comp_sym.html('Og'), com_Name.html('Oganesson'), com_No.html('118'), com_mass.html('295.216 u'), electro_neg.html('N/A'), Melt_point.html('N/A'), Boil_point.html('N/A'), Oxi_State.html('N/A')));

    // let He;
    He=createButton('He');
    He.mousePressed(()=>(N_e=2,N_p=2,N_n=2,e_K=2,e_L=0,e_M=0,e_N=0,e_O=0,e_P=0,e_Q=0,comp_sym.html('He'),com_Name.html('Helium'),com_No.html('2'),com_mass.html('4.00260 u'), electro_neg.html('N/A'),Melt_point.html('0.95 K') ,Boil_point.html('4.22 K'),Oxi_State.html('0')));

//--------------------------------F BLOCK-------------------------------
  // Lanthanide Series 
    // let La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu;
    La = createButton('La');
    Ce = createButton('Ce');
    Pr = createButton('Pr');
    Nd = createButton('Nd');
    Pm = createButton('Pm');
    Sm = createButton('Sm');
    Eu = createButton('Eu');
    Gd = createButton('Gd');
    Tb = createButton('Tb');
    Dy = createButton('Dy');
    Ho = createButton('Ho');
    Er = createButton('Er');
    Tm = createButton('Tm');
    Yb = createButton('Yb');
    Lu = createButton('Lu');
    La.mousePressed(() => (N_e = 57, N_p = 57, N_n = 82, e_K = 2, e_L = 8, e_M = 18, e_N = 18, e_O = 9, e_P = 2, e_Q = 0, comp_sym.html('La'), com_Name.html('Lanthanum'), com_No.html('57'), com_mass.html('138.9055 u'), electro_neg.html('1.1'), Melt_point.html('1191 K'), Boil_point.html('3737 K'), Oxi_State.html('+3')));
    Ce.mousePressed(() => (N_e = 58, N_p = 58, N_n = 82, e_K = 2, e_L = 8, e_M = 18, e_N = 19, e_O = 9, e_P = 2, e_Q = 0, comp_sym.html('Ce'), com_Name.html('Cerium'), com_No.html('58'), com_mass.html('140.12 u'), electro_neg.html('1.12'), Melt_point.html('1071 K'), Boil_point.html('3697 K'), Oxi_State.html('+4,+3')));
    Pr.mousePressed(() => (N_e = 59, N_p = 59, N_n = 82, e_K = 2, e_L = 8, e_M = 18, e_N = 21, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Pr'), com_Name.html('Praseodymium'), com_No.html('59'), com_mass.html('140.9077 u'), electro_neg.html('1.13'), Melt_point.html('1204 K'), Boil_point.html('3793 K'), Oxi_State.html('+3')));
    Nd.mousePressed(() => (N_e = 60, N_p = 60, N_n = 84, e_K = 2, e_L = 8, e_M = 18, e_N = 22, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Nd'), com_Name.html('Neodymium'), com_No.html('60'), com_mass.html('144.24u'), electro_neg.html('1.14'), Melt_point.html('1294 K'), Boil_point.html('3347 K'), Oxi_State.html('+3')));
    Pm.mousePressed(() => (N_e = 61, N_p = 61, N_n = 84, e_K = 2, e_L = 8, e_M = 18, e_N = 23, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Pm'), com_Name.html('Promethium'), com_No.html('61'), com_mass.html('144.91276 u'), electro_neg.html('N/A'), Melt_point.html('1315 K'), Boil_point.html('3273 K'), Oxi_State.html('+3')));
    Sm.mousePressed(() => (N_e = 62, N_p = 62, N_n = 88, e_K = 2, e_L = 8, e_M = 18, e_N = 24, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Sm'), com_Name.html('Samarium'), com_No.html('62'), com_mass.html('150.4 u'), electro_neg.html('1.17'), Melt_point.html('1347 K'), Boil_point.html('2067 K'), Oxi_State.html('+3,+2')));
    Eu.mousePressed(() => (N_e = 63, N_p = 63, N_n = 89, e_K = 2, e_L = 8, e_M = 18, e_N = 25, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Eu'), com_Name.html('Europium'), com_No.html('63'), com_mass.html('151.96 u'), electro_neg.html('N/A'), Melt_point.html('1095 K'), Boil_point.html('1802 K'), Oxi_State.html('+3,+2')));
    Gd.mousePressed(() => (N_e = 64, N_p = 64, N_n = 93, e_K = 2, e_L = 8, e_M = 18, e_N = 25, e_O = 9, e_P = 2, e_Q = 0, comp_sym.html('Gd'), com_Name.html('Gadolinium'), com_No.html('64'), com_mass.html('157.2 u'), electro_neg.html('1.2'), Melt_point.html('1586 K'), Boil_point.html('3546 K'), Oxi_State.html('+3')));
    Tb.mousePressed(() => (N_e = 65, N_p = 65, N_n = 94, e_K = 2, e_L = 8, e_M = 18, e_N = 27, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Tb'), com_Name.html('Terbium'), com_No.html('65'), com_mass.html('158.92535 u'), electro_neg.html('N/A'), Melt_point.html('1629 K'), Boil_point.html('3503 K'), Oxi_State.html('+3')));
    Dy.mousePressed(() => (N_e = 66, N_p = 66, N_n = 97, e_K = 2, e_L = 8, e_M = 18, e_N = 28, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Dy'), com_Name.html('Dysprosium'), com_No.html('66'), com_mass.html('162.50 u'), electro_neg.html('1.22'), Melt_point.html('1685 K'), Boil_point.html('2840 K'), Oxi_State.html('+3')));
    Ho.mousePressed(() => (N_e = 67, N_p = 67, N_n = 98, e_K = 2, e_L = 8, e_M = 18, e_N = 29, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Ho'), com_Name.html('Holmium'), com_No.html('67'), com_mass.html('164.93033 u'), electro_neg.html('1.23'), Melt_point.html('1747 K'), Boil_point.html('2973 K'), Oxi_State.html('+3')));
    Er.mousePressed(() => (N_e = 68, N_p = 68, N_n = 99, e_K = 2, e_L = 8, e_M = 18, e_N = 30, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Er'), com_Name.html('Erbium'), com_No.html('68'), com_mass.html('167.26 u'), electro_neg.html('1.24'), Melt_point.html('1802 K'), Boil_point.html('3141 K'), Oxi_State.html('+3')));
    Tm.mousePressed(() => (N_e = 69, N_p = 69, N_n = 100, e_K = 2, e_L = 8, e_M = 18, e_N = 31, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Tm'), com_Name.html('Thulium'), com_No.html('69'), com_mass.html('168.93422 u'), electro_neg.html('1.25'), Melt_point.html('1818 K'), Boil_point.html('2223 K'), Oxi_State.html('+3')));
    Yb.mousePressed(() => (N_e = 70, N_p = 70, N_n = 103, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 8, e_P = 2, e_Q = 0, comp_sym.html('Yb'), com_Name.html('Ytterbium'), com_No.html('70'), com_mass.html('173.0 u'), electro_neg.html('N/A'), Melt_point.html('1092 K'), Boil_point.html('1469 K'), Oxi_State.html('+3,+2')));
    Lu.mousePressed(() => (N_e = 71, N_p = 71, N_n = 104, e_K = 2, e_L = 8, e_M = 18, e_N = 32, e_O = 9, e_P = 2, e_Q = 0, comp_sym.html('Lu'), com_Name.html('Lutetium'), com_No.html('71'), com_mass.html('174.967 u'), electro_neg.html('1.27'), Melt_point.html('1936 K'), Boil_point.html('3675 K'), Oxi_State.html('+3')));
  
    // let Lanthenite;
    Lanthenite=createButton('Lanthanide');
    Lanthenite.mousePressed(Lath);
    function Lath(){
      let Lanth_show=[La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu];
        for (var i=0;i<15;i++){
          Lanth_show[i].show();
              }
    }
  
 // Actenide Series 
  // let Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr;
  Ac=createButton('Ac'); 
  Th=createButton('Th');
  Pa=createButton('Pa'); 
  U=createButton('U');
  Np=createButton('Np');
  Pu=createButton('Pu');
  Am=createButton('Am');
  Cm=createButton('Cm');
  Bk=createButton('Bk');
  Cf=createButton('Cf');
  Es=createButton('Es');
  Fm=createButton('Fm');
  Md=createButton('Md');
  No=createButton('No');
  Lr=createButton('Lr');
  Ac.mousePressed(()=>(N_e=89,N_p=89,N_n=138,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=9,e_Q=2,comp_sym.html('Ac'),com_Name.html('Actinium') ,com_No.html('89'),com_mass.html('227.02775 u'),electro_neg.html('1.1'),Melt_point.html('1324 K') ,Boil_point.html('3471 K'),Oxi_State.html('+3')));
  Th.mousePressed(()=>(N_e=90,N_p=90,N_n=142,e_K=2,e_L=8,e_M=18,e_N=32,e_O=18,e_P=10,e_Q=2,comp_sym.html('Th'),com_Name.html('Thorium') ,com_No.html('90'),com_mass.html('232.038 u'),electro_neg.html('1.3'),Melt_point.html('2023 K') ,Boil_point.html('5061 K'),Oxi_State.html('+4')));
  Pa.mousePressed(()=>(N_e=91,N_p=91,N_n=140,e_K=2,e_L=8,e_M=18,e_N=32,e_O=20,e_P=9,e_Q=2,comp_sym.html('Pa'),com_Name.html('Protactinium') ,com_No.html('91'),com_mass.html('231.0359 u'),electro_neg.html('1.5'),Melt_point.html('1845 K') ,Boil_point.html('N/A'),Oxi_State.html('+5,+4')));
  U.mousePressed(()=>(N_e=92,N_p=92,N_n=146,e_K=2,e_L=8,e_M=18,e_N=32,e_O=21,e_P=9,e_Q=2,comp_sym.html('U'),com_Name.html('Uranium') ,com_No.html('92'),com_mass.html('238.0289 u'),electro_neg.html('1.38'),Melt_point.html('1408 K') ,Boil_point.html('4404 K'),Oxi_State.html('+6,+5,+4,+3')));
  Np.mousePressed(()=>(N_e=93,N_p=93,N_n=144,e_K=2,e_L=8,e_M=18,e_N=32,e_O=22,e_P=9,e_Q=2,comp_sym.html('Np'),com_Name.html('Neptunium') ,com_No.html('93'),com_mass.html('237.04817 u'),electro_neg.html('1.36'),Melt_point.html('917 K') ,Boil_point.html('4175 K'),Oxi_State.html('+6,+5,+4,+3')));
  Pu.mousePressed(()=>(N_e=94,N_p=94,N_n=150,e_K=2,e_L=8,e_M=18,e_N=32,e_O=24,e_P=8,e_Q=2,comp_sym.html('Pu'),com_Name.html('Plutonium') ,com_No.html('94'),com_mass.html('244.06420 u'),electro_neg.html('1.28'),Melt_point.html('913 K') ,Boil_point.html('3501 K'),Oxi_State.html('+6,+5,+4,+3')));
  Am.mousePressed(()=>(N_e=95,N_p=95,N_n=148,e_K=2,e_L=8,e_M=18,e_N=32,e_O=25,e_P=8,e_Q=2,comp_sym.html('Am'),com_Name.html('Americium') ,com_No.html('95'),com_mass.html('243.06138 u'),electro_neg.html('1.3'),Melt_point.html('1449 K') ,Boil_point.html('2284 K'),Oxi_State.html('+6,+5,+4,+3')));
  Cm.mousePressed(()=>(N_e=96,N_p=96,N_n=151,e_K=2,e_L=8,e_M=18,e_N=32,e_O=25,e_P=9,e_Q=2,comp_sym.html('Cm'),com_Name.html('Curium') ,com_No.html('96'),com_mass.html('247.07035 u'),electro_neg.html('1.3'),Melt_point.html('1618 K') ,Boil_point.html('3400 K'),Oxi_State.html('+3')));
  Bk.mousePressed(()=>(N_e=97,N_p=97,N_n=150,e_K=2,e_L=8,e_M=18,e_N=32,e_O=27,e_P=8,e_Q=2,comp_sym.html('Bk'),com_Name.html('Berkelium') ,com_No.html('97'),com_mass.html('247.07031 u'),electro_neg.html('1.3'),Melt_point.html('1323 K') ,Boil_point.html('N/A'),Oxi_State.html('+4,+3')));
  Cf.mousePressed(()=>(N_e=98,N_p=98,N_n=153,e_K=2,e_L=8,e_M=18,e_N=32,e_O=28,e_P=8,e_Q=2,comp_sym.html('Cf'),com_Name.html('Californium') ,com_No.html('98'),com_mass.html('251.07959 u'),electro_neg.html('1.3'),Melt_point.html('1173 K') ,Boil_point.html('N/A'),Oxi_State.html('+3')));
  Es.mousePressed(()=>(N_e=99,N_p=99,N_n=153,e_K=2,e_L=8,e_M=18,e_N=32,e_O=29,e_P=8,e_Q=2,comp_sym.html('Es'),com_Name.html('Einsteinium') ,com_No.html('99'),com_mass.html('252.0830 u'),electro_neg.html('1.3'),Melt_point.html('1133 K') ,Boil_point.html('N/A'),Oxi_State.html('+3')));
  Fm.mousePressed(()=>(N_e=100,N_p=100,N_n=157,e_K=2,e_L=8,e_M=18,e_N=32,e_O=30,e_P=8,e_Q=2,comp_sym.html('Fm'),com_Name.html('Fermium') ,com_No.html('100'),com_mass.html('257.09511 u'),electro_neg.html('1.3'),Melt_point.html('1800 K') ,Boil_point.html('N/A'),Oxi_State.html('+3')));
  Md.mousePressed(()=>(N_e=101,N_p=101,N_n=157,e_K=2,e_L=8,e_M=18,e_N=32,e_O=31,e_P=8,e_Q=2,comp_sym.html('Md'),com_Name.html('Mendelevium') ,com_No.html('101'),com_mass.html('258.09843 u'),electro_neg.html('1.3'),Melt_point.html('1100 K') ,Boil_point.html('N/A'),Oxi_State.html('+3,+2')));
  No.mousePressed(()=>(N_e=102,N_p=102,N_n=157,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=8,e_Q=2,comp_sym.html('No'),com_Name.html('Nobelium') ,com_No.html('102'),com_mass.html('259.101 u'),electro_neg.html('1.3'),Melt_point.html('1100 K') ,Boil_point.html('N/A'),Oxi_State.html('+3,+2')));
  Lr.mousePressed(()=>(N_e=103,N_p=103,N_n=159,e_K=2,e_L=8,e_M=18,e_N=32,e_O=32,e_P=8,e_Q=3,comp_sym.html('Lr'),com_Name.html('Lawrencium') ,com_No.html('103'),com_mass.html('266.12 u'),electro_neg.html('1.3'),Melt_point.html('1900 K') ,Boil_point.html('N/A'),Oxi_State.html('+3')));

  // let Actinide;
  Actinide=createButton('Actinide');
  Actinide.mousePressed(Acte);
  function Acte(){
    let Actinide_show=[Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
      for (var i=0;i<15;i++){
        Actinide_show[i].show();
            }
  }


  ResponsiveBigsize=function ResponsiveBigsize(){
      //RADIO
        let X_Radio=600;
        let Y_Radio=document.documentElement.clientHeight/5;
        // heading Name 
        let X_C=300;
        let Y_C=document.documentElement.clientHeight/20;

        let  x=document.documentElement.clientWidth/24;
        let  y=document.documentElement.clientHeight/13;

        let font='30px';


      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.position(20,20).style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','3px');
      
      //-------------------------------------------Element Information Box------------------------------------------------------------------
      head.position(document.documentElement.clientWidth/2-100,0).style('font-size','30px').style('padding','10px').style('margin','10px').style('border','3px solid black');
      comp_sym.position(X_C,Y_C+60).size(60,80).style('font-size','30px').style('padding','50px 120px').style('background-color','lightyellow').style('border','3px solid black').style('border-radius','5px');
      com_Name.position(X_C+120,Y_C+150).style('font-size','20px');
      com_No.position(X_C+160,Y_C+80).style('font-size','20px');
      com_mass.position(X_C+20,Y_C+70).style('font-size','15px');
      electro_neg.position(X_C+20,Y_C+110).style('font-size','15px');
      Melt_point.position(X_C+20,Y_C+160).style('font-size','15px');
      Boil_point.position(X_C+20,Y_C+200).style('font-size','15px');
      Oxi_State.position(X_C+180,Y_C+190).style('font-size','15px');

      //----------------RADIO INPUT(BLOCK,GROUP,STATE)-----------------------------------------------------------------------------------
      radio.position(X_Radio+50,100).style('transform','scale(1.3)');
    // BLOCK 
      S_block.position(X_Radio+30, Y_Radio).size(100,20).style('font-size','13px').style("background-color", 'rgb(95, 86, 4)').style("color", 'white');
      P_block.position(X_Radio+30, Y_Radio+25).size(100,20).style('font-size','13px').style("background-color", 'rgb(22,92,92)').style("color", 'white');
      D_block.position(X_Radio+30, Y_Radio+50).size(100,20).style('font-size','13px').style("background-color", 'brown').style("color", 'white');
      F_block.position(X_Radio+30, Y_Radio+75).size(100,20).style('font-size','13px').style("background-color", 'rgb(20,170,100)').style("color", 'white');
      //GROUP
      A_metals.position(X_Radio+30, Y_Radio).size(150,20).style('font-size','13px').style('background-color', '#531c62').style('color', 'white');
      A_Emetals.position(X_Radio+30, Y_Radio+25).size(150,20).style('font-size','13px').style('background-color', '#083059').style('color', 'white');
      Tran_metals.position(X_Radio+30, Y_Radio+50).size(150,20).style('font-size','13px').style('background-color', '#2E4053').style('color', 'white');
      PTran_metals.position(X_Radio+30, Y_Radio+75).size(150,20).style('font-size','13px').style('background-color', '#556B2F').style('color', 'white');
      Nobal_gas.position(X_Radio+30, Y_Radio+100).size(150,20).style('font-size','13px').style('background-color', '#424949').style('color', 'white');
      Lanthe.position(X_Radio+190, Y_Radio).size(150,20).style('font-size','13px').style('background-color', '#186d73').style('color', 'white');
      Acti.position(X_Radio+190, Y_Radio+25).size(150,20).style('font-size','13px').style('background-color', '#136743').style('color', 'white');
      Meta.position(X_Radio+190,Y_Radio+50).size(150,20).style('font-size','13px').style('background-color', '#710d42').style('color', 'white');
      O_Nmetals.position(X_Radio+190, Y_Radio+75).size(150,20).style('font-size','13px').style('background-color', '#6E2C00').style('color', 'white');
                
      //STATE
      Solid.position(X_Radio+30, Y_Radio).size(80,20).style('font-size','13px').style('background-color','#8d552d').style('color','white');
      Liquid.position(X_Radio+30, Y_Radio+25).size(80,20).style('font-size','13px').style('background-color','#1F618D').style('color','white');
      Gas.position(X_Radio+30, Y_Radio+50).size(80,20).style('font-size','13px').style('background-color','#2E4053').style('color','white');
      
      // Positioning
      function MapX(num){
        return map(num,0,20,0,document.documentElement.clientWidth);
      }
      
      function MapY(num){
        return map(num,0,12,0,document.documentElement.clientHeight);
      }
    
    // -----------------S BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      var El_1=[ H,Li,Na,K,Rb,Cs,Fr]; 
      for(var i=0;i<7;i++){
          El_1[i].position(MapX(1),MapY(i+2)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)');
      }

      var El_2=[Be,Mg,Ca,Sr,Ba,Ra];
      for(var i=0;i<6;i++){
          El_2[i].position(MapX(2),MapY(i+3)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)');
        }

      // --------D BLOCK-------------------------------------------------------------------Column 3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      var El_3=[Sc,Y];
      for(var i=0;i<2;i++){
          El_3[i].position(MapX(3),MapY(i+5)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('font-size',font).style('color','white').style('background-color','brown');  
        }

      var El_4=[Ti,Zr,Hf,Rf];
      for(var i=0;i<4;i++){
      El_4[i].position(MapX(4),MapY(i+5)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color','brown').style('color','white').style('font-size',font);
      }
    
      var El_5=[V,Nb,Ta,Db];
      for(var i=0;i<4;i++){
      El_5[i].position(MapX(5),MapY(i+5)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color','brown').style('color','white').style('font-size',font);
      }
      
      var El_6=[Cr,Mo,W,Sg];
      for(var i=0;i<4;i++){
        El_6[i].position(MapX(6),MapY(i+5)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color','brown').style('color','white').style('font-size',font);;
      }
  
      var El_7=[Mn,Tc,Re,Bh];
      for(var i=0;i<4;i++){
      El_7[i].position(MapX(7), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
    
      var El_8=[Fe,Ru,Os,Hs];
      for(var i=0;i<4;i++){
        El_8[i].position(MapX(8), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
      
      var El_9=[Co,Rh,Ir,Mt];
      for(var i=0;i<4;i++){
        El_9[i].position(MapX(9), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
  
      var El_10=[Ni,Pd,Pt,Ds];
      for(var i=0;i<4;i++){
        El_10[i].position(MapX(10), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
  
      var El_11=[Cu,Ag,Au,Rg];
      for(var i=0;i<4;i++){
        El_11[i].position(MapX(11), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
    
      var El_12=[Zn,Cd,Hg,Cn];
      for(var i=0;i<4;i++){
        El_12[i].position(MapX(12), MapY(i + 5)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'brown').style('color', 'white').style('font-size', font);
      }
    
      // ---------------------------------------------------------P BLOCK---------------------------------------------------------------
      var El_13=[B,Al,Ga,In,Tl,Nh];
      for(var i=0;i<6;i++){
        El_13[i].position(MapX(13), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
  
      var El_14=[C,Si,Ge,Sn,Pb,Fl];
      for(var i=0;i<6;i++){
        El_14[i].position(MapX(14), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
      
      var El_15=[N,P,As,Sb,Bi,Mc];
      for(var i=0;i<6;i++){
        El_15[i].position(MapX(15), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
      
      var El_16=[O,S,Se,Te,Po,Lv];
      for(var i=0;i<6;i++){
      El_16[i].position(MapX(16), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
  
      var El_17=[F,Cl,Br,I,At,Ts];
      for(var i=0;i<6;i++){
        El_17[i].position(MapX(17), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
      
      var El_18=[Ne,Ar,Kr,Xe,Rn,Og];
      for(var i=0;i<6;i++){
        El_18[i].position(MapX(18), MapY(i + 3)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font);
      }
  
    // make helium element Seperate 
    He.position(MapX(18), MapY(2)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'black').style('color', 'white').style('font-size', '30px');

    //--------------------------------F BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------
    // lanthanide series
    Lanthenite.position(MapX(3),MapY(7)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color','rgb(20,170,100)').style('color','white').style('font-size','10px');

    var La_1=[La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu];
    for (var i=0;i<15;i++){
      La_1[i].position(MapX(i+4), MapY(9.2)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(20,170,100)').style('color', 'white').style('font-size', font).hide();
    }

    // actinide series
    Actinide.position(MapX(3), MapY(8)).size(x, y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color', 'rgb(20,170,100)').style('color', 'white').style('font-size', '10px');

    var Ac_1=[Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
    for (var i=0;i<15;i++){
      Ac_1[i].position(MapX(i+4),MapY(10.2)).size(x,y).style('border-radius','5px').style('border-radius','3px solid black').style('background-color','rgb(20,170,100)').style('color','white').style('font-size',font);
      Ac_1[i].hide();
    }

  }
  
  ResponsiveMediumsize=function ResponsiveMediumsize(){
    // Positioning
      function MapX(num){
      return map(num,0,20,0,document.documentElement.clientWidth);
      }
      
      function MapY(num){
        if(document.documentElement.clientWidth<1000){
          return map(num,0,12,document.documentElement.clientHeight/3,document.documentElement.clientWidth/3+document.documentElement.clientHeight/2);             //TABLET LANDSCAPE MODE
        }else{
          return map(num,0,12,0,document.documentElement.clientWidth/2);
        }
      }


      let X_Radio,Y_Radio;
      let X_C,Y_C;
      if(document.documentElement.clientWidth<1000){
          //RADIO
          X_Radio=MapX(9);
          Y_Radio=MapY(-5);
            // heading Name 
          X_C=MapX(3);
          Y_C=MapY(-5);
      }else{
        //RADIO
          X_Radio=MapX(7.5);
          Y_Radio=MapY(2);
              // heading Name 
          X_C=MapX(3.5);
          Y_C=MapY(2);
      }
    

      let  x=document.documentElement.clientWidth/24;
      let font;
      if(document.documentElement.clientWidth<1000){                     //TABLET LANDSCAPE MODE
        font='13px';
      }else{
        font='23px';
      }

    // ---------FULL SCREEN BUTTON-----------------------
    fullbtn.position(20,20).style('background-color','RGB(225,225,225)').style('padding','3px').style('border-radius','3px');
    
    //-------------------------------------------Element Information Box------------------------------------------------------------------
    head.position(document.documentElement.clientWidth/2-100,0).style('font-size','25px').style('padding','8px').style('margin','10px').style('border','3px solid black');
    comp_sym.position(X_C,Y_C).size(80,50).style('font-size','25px').style('padding','50px 80px').style('background-color','lightyellow').style('border','2px solid black').style('border-radius','5px');
    com_Name.position(X_C+110,Y_C+90).style('font-size','13px');
    com_No.position(X_C+140,Y_C+20).style('font-size','13px');
    com_mass.position(X_C+10,Y_C+10).style('font-size','13px')
    electro_neg.position(X_C+10,Y_C+40).style('font-size','13px')
    Melt_point.position(X_C+10,Y_C+80).style('font-size','13px')
    Boil_point.position(X_C+10,Y_C+120).style('font-size','13px')
    Oxi_State.position(X_C+100,Y_C+125).style('font-size','13px')

   //----------------RADIO INPUT(BLOCK,GROUP,STATE)-----------------------------------------------------------------------------------
    radio.position(X_Radio+30,Y_Radio).style('transform','scale(1)');
   // BLOCK 
    S_block.position(X_Radio+40, Y_Radio+30).size(80,18).style('font-size','10px').style("background-color", 'rgb(95, 86, 4)').style("color", 'white');
    P_block.position(X_Radio+40, Y_Radio+50).size(80,18).style('font-size','10px').style("background-color", 'rgb(22,92,92)').style("color", 'white');
    D_block.position(X_Radio+40, Y_Radio+70).size(80,18).style('font-size','10px').style("background-color", 'brown').style("color", 'white');
    F_block.position(X_Radio+40, Y_Radio+90).size(80,18).style('font-size','10px').style("background-color", 'rgb(20,170,100)').style("color", 'white');
   //GROUP
    A_metals.position(X_Radio+50, Y_Radio+30).size(120,18).style('font-size','10px').style('background-color', '#2C3E50').style('color', 'white');
    A_Emetals.position(X_Radio+50, Y_Radio+50).size(120,18).style('font-size','10px').style('background-color', '#884EA0').style('color', 'white');
    Tran_metals.position(X_Radio+50, Y_Radio+70).size(120,18).style('font-size','10px').style('background-color', '#7F8C8D').style('color', 'white');
    PTran_metals.position(X_Radio+50, Y_Radio+90).size(120,18).style('font-size','10px').style('background-color', '#556B2F').style('color', 'white');
    Nobal_gas.position(X_Radio+50, Y_Radio+110).size(120,18).style('font-size','10px').style('background-color', '#424949').style('color', 'white');
    Lanthe.position(X_Radio+180, Y_Radio+30).size(120,18).style('font-size','10px').style('background-color', '#1F618D').style('color', 'white');
    Acti.position(X_Radio+180, Y_Radio+50).size(120,18).style('font-size','10px').style('background-color', '#136743').style('color', 'white');
    Meta.position(X_Radio+180,Y_Radio+70).size(120,18).style('font-size','10px').style('background-color', '#2E4053').style('color', 'white');
    O_Nmetals.position(X_Radio+180, Y_Radio+90).size(120,18).style('font-size','10px').style('background-color', '#6E2C00').style('color', 'white');
    //STATE
    Solid.position(X_Radio+170, Y_Radio+30).size(80,18).style('font-size','10px').style('background-color','#8d552d').style('color','white');
    Liquid.position(X_Radio+170, Y_Radio+50).size(80,18).style('font-size','10px').style('background-color','#1F618D').style('color','white');
    Gas.position(X_Radio+170, Y_Radio+70).size(80,18).style('font-size','10px').style('background-color','#2E4053').style('color','white');

   // -----------------S BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var El_1=[ H,Li,Na,K,Rb,Cs,Fr]; 
    for(var i=0;i<7;i++){
        El_1[i].position(MapX(1),MapY(i+2)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)');
      }

    var El_2=[Be,Mg,Ca,Sr,Ba,Ra];
    for(var i=0;i<6;i++){
        El_2[i].position(MapX(2),MapY(i+3)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)');
      }

   // --------D BLOCK-------------------------------------------------------------------Column 3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var El_3=[Sc,Y];
    for(var i=0;i<2;i++){
        El_3[i].position(MapX(3),MapY(i+5)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','brown');  
    }

   var El_4=[Ti,Zr,Hf,Rf];
   for(var i=0;i<4;i++){
   El_4[i].position(MapX(4),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px');
   }
   
   var El_5=[V,Nb,Ta,Db];
   for(var i=0;i<4;i++){
   El_5[i].position(MapX(5),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px');
   }
   
   var El_6=[Cr,Mo,W,Sg];
   for(var i=0;i<4;i++){
     El_6[i].position(MapX(6),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px');
   }

   var El_7=[Mn,Tc,Re,Bh];
   for(var i=0;i<4;i++){
   El_7[i].position(MapX(7), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }
 
   var El_8=[Fe,Ru,Os,Hs];
   for(var i=0;i<4;i++){
     El_8[i].position(MapX(8), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }
   
   var El_9=[Co,Rh,Ir,Mt];
   for(var i=0;i<4;i++){
     El_9[i].position(MapX(9), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }

   var El_10=[Ni,Pd,Pt,Ds];
   for(var i=0;i<4;i++){
     El_10[i].position(MapX(10), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }
 
   var El_11=[Cu,Ag,Au,Rg];
   for(var i=0;i<4;i++){
     El_11[i].position(MapX(11), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }
 
   var El_12=[Zn,Cd,Hg,Cn];
   for(var i=0;i<4;i++){
     El_12[i].position(MapX(12), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px');
   }
 
    // ---------------------------------------------------------P BLOCK---------------------------------------------------------------
    var El_13=[B,Al,Ga,In,Tl,Nh];
    for(var i=0;i<6;i++){
      El_13[i].position(MapX(13), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
 
    var El_14=[C,Si,Ge,Sn,Pb,Fl];
    for(var i=0;i<6;i++){
      El_14[i].position(MapX(14), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
    
    var El_15=[N,P,As,Sb,Bi,Mc];
    for(var i=0;i<6;i++){
      El_15[i].position(MapX(15), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
    
    var El_16=[O,S,Se,Te,Po,Lv];
    for(var i=0;i<6;i++){
    El_16[i].position(MapX(16), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
      
    var El_17=[F,Cl,Br,I,At,Ts];
    for(var i=0;i<6;i++){
      El_17[i].position(MapX(17), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
    
    var El_18=[Ne,Ar,Kr,Xe,Rn,Og];
    for(var i=0;i<6;i++){
      El_18[i].position(MapX(18), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px');
    }
 
    // make helium element Seperate 
      He.position(MapX(18), MapY(2)).size(x, x).style('background-color', 'black').style('color', 'white').style('font-size', font).style('border-radius', '3px');

    //--------------------------------F BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------
    // lanthanide series
    if(document.documentElement.clientWidth<1000){
      Lanthenite.position(MapX(3),MapY(7)).size(x,x).style('font-size','4px').style('background-color','rgb(20,170,100)').style('color','white').style('border-radius','3px');
    }else{
      Lanthenite.position(MapX(3),MapY(7)).size(x,x).style('font-size','8px').style('background-color','rgb(20,170,100)').style('color','white').style('border-radius','3px');
    }

    var La_1=[La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu];
    for (var i=0;i<15;i++){
      La_1[i].position(MapX(i+4), MapY(9.2)).size(x, x).style('background-color', 'rgb(20,170,100)').style('color', 'white').style('font-size', font).style('border-radius', '3px').hide();
    }

    // actinide series
    if(document.documentElement.clientWidth<1000){
      Actinide.position(MapX(3), MapY(8)).size(x, x).style('font-size','4px').style('background-color', 'rgb(20,170,100)').style('color', 'white').style('border-radius', '3px');
    }else{
      Actinide.position(MapX(3), MapY(8)).size(x, x).style('font-size','8px').style('background-color', 'rgb(20,170,100)').style('color', 'white').style('border-radius', '3px');
    }

    var Ac_1=[Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
    for (var i=0;i<15;i++){
      Ac_1[i].position(MapX(i+4),MapY(10.2)).size(x,x).style('background-color','rgb(20,170,100)').style('color','white').style('font-size',font).style('border-radius','3px');
      Ac_1[i].hide();
    }

  }

  ResponsiveSmallsize=function ResponsiveSmallsize(){
    // Positioning
      function MapX(num){
      return map(num,0,20,0,document.documentElement.clientWidth);
      }
      
      function MapY(num){
        return map(num,0,12,0,document.documentElement.clientWidth/2);
      }
    //RADIO
      let X_Radio=MapX(6.5);
      let Y_Radio=MapY(1.5);
    // heading Name 
      let X_C=MapX(3);
      let Y_C=MapY(0);

      let  x=document.documentElement.clientWidth/24;
      let font='13px';

      // ---------FULL SCREEN BUTTON-----------------------
      fullbtn.hide();
      
   //-------------------------------------------Element Information Box------------------------------------------------------------------
    head.position(document.documentElement.clientWidth/2-100,0).style('font-size','13px').style('padding','5px').style('margin','10px').style('border','2px solid black');
    comp_sym.position(X_C,Y_C+60).size(45,18).style('font-size','13px').style('padding','33px 50px').style('background-color','lightyellow').style('border','1px solid black').style('border-radius','5px');
    com_Name.position(X_C+70,Y_C+110).style('font-size','7px');
    com_No.position(X_C+90,Y_C+80).style('font-size','7px');
    com_mass.position(X_C+10,Y_C+70).style('font-size','7px')
    electro_neg.position(X_C+10,Y_C+90).style('font-size','7px')
    Melt_point.position(X_C+10,Y_C+110).style('font-size','7px')
    Boil_point.position(X_C+10,Y_C+125).style('font-size','7px')
    Oxi_State.position(X_C+80,Y_C+125).style('font-size','7px')

   //----------------RADIO INPUT(BLOCK,GROUP,STATE)-----------------------------------------------------------------------------------
    radio.position(X_Radio+30,Y_Radio).style('transform','scale(0.8)');
   // BLOCK 
    S_block.position(X_Radio+50, Y_Radio+25).size(60,13).style('font-size','8px').style("background-color", 'rgb(95, 86, 4)').style("color", 'white').style('border','1px solid black');
    P_block.position(X_Radio+50, Y_Radio+40).size(60,13).style('font-size','8px').style("background-color", 'rgb(22,92,92)').style("color", 'white').style('border','1px solid black');
    D_block.position(X_Radio+50, Y_Radio+55).size(60,13).style('font-size','8px').style("background-color", 'brown').style("color", 'white').style('border','1px solid black');
    F_block.position(X_Radio+50, Y_Radio+70).size(60,13).style('font-size','8px').style("background-color", 'rgb(20,170,100)').style("color", 'white').style('border','1px solid black');
   //GROUP
    A_metals.position(X_Radio+50, Y_Radio+25).size(80,12).style('font-size','6px').style('background-color', '#2C3E50').style('color', 'white').style('border','1px solid black');
    A_Emetals.position(X_Radio+50, Y_Radio+40).size(80,12).style('font-size','6px').style('background-color', '#884EA0').style('color', 'white').style('border','1px solid black');
    Tran_metals.position(X_Radio+50, Y_Radio+55).size(80,12).style('font-size','6px').style('background-color', '#7F8C8D').style('color', 'white').style('border','1px solid black');
    PTran_metals.position(X_Radio+50, Y_Radio+70).size(80,12).style('font-size','6px').style('background-color', '#556B2F').style('color', 'white').style('border','1px solid black');
    Nobal_gas.position(X_Radio+50, Y_Radio+85).size(80,12).style('font-size','6px').style('background-color', '#424949').style('color', 'white').style('border','1px solid black');
    Lanthe.position(X_Radio+140, Y_Radio+25).size(80,12).style('font-size','6px').style('background-color', '#1F618D').style('color', 'white').style('border','1px solid black');
    Acti.position(X_Radio+140, Y_Radio+40).size(80,12).style('font-size','6px').style('background-color', '#136743').style('color', 'white').style('border','1px solid black');
    Meta.position(X_Radio+140,Y_Radio+55).size(80,12).style('font-size','6px').style('background-color', '#2E4053').style('color', 'white').style('border','1px solid black');
    O_Nmetals.position(X_Radio+140, Y_Radio+70).size(80,12).style('font-size','6px').style('background-color', '#6E2C00').style('color', 'white').style('border','1px solid black');
    //STATE
    Solid.position(X_Radio+50, Y_Radio+25).size(60,15).style('font-size','8px').style('background-color','#8d552d').style('color','white').style('border','1px solid black');
    Liquid.position(X_Radio+50, Y_Radio+45).size(60,15).style('font-size','8px').style('background-color','#1F618D').style('color','white').style('border','1px solid black');
    Gas.position(X_Radio+50, Y_Radio+65).size(60,15).style('font-size','8px').style('background-color','#2E4053').style('color','white').style('border','1px solid black');
 
   // -----------------S BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var El_1=[ H,Li,Na,K,Rb,Cs,Fr]; 
    for(var i=0;i<7;i++){
        El_1[i].position(MapX(1),MapY(i+2)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)').style('border','1px solid black');
      }

    var El_2=[Be,Mg,Ca,Sr,Ba,Ra];
    for(var i=0;i<6;i++){
        El_2[i].position(MapX(2),MapY(i+3)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','rgb(95, 86, 4)').style('border','1px solid black');
      }

   // --------D BLOCK-------------------------------------------------------------------Column 3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var El_3=[Sc,Y];
    for(var i=0;i<2;i++){
        El_3[i].position(MapX(3),MapY(i+5)).size(x,x).style('border-radius','3px').style('font-size',font).style('color','white').style('background-color','brown').style('border','1px solid black');  
    }

   var El_4=[Ti,Zr,Hf,Rf];
   for(var i=0;i<4;i++){
   El_4[i].position(MapX(4),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px').style('border','1px solid black');
   }
   
   var El_5=[V,Nb,Ta,Db];
   for(var i=0;i<4;i++){
   El_5[i].position(MapX(5),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px').style('border','1px solid black');
   }
   
   var El_6=[Cr,Mo,W,Sg];
   for(var i=0;i<4;i++){
     El_6[i].position(MapX(6),MapY(i+5)).size(x,x).style('background-color','brown').style('color','white').style('font-size',font).style('border-radius','3px').style('border','1px solid black');
   }

   var El_7=[Mn,Tc,Re,Bh];
   for(var i=0;i<4;i++){
   El_7[i].position(MapX(7), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }
 
   var El_8=[Fe,Ru,Os,Hs];
   for(var i=0;i<4;i++){
     El_8[i].position(MapX(8), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }
   
   var El_9=[Co,Rh,Ir,Mt];
   for(var i=0;i<4;i++){
     El_9[i].position(MapX(9), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }

   var El_10=[Ni,Pd,Pt,Ds];
   for(var i=0;i<4;i++){
     El_10[i].position(MapX(10), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }
 
   var El_11=[Cu,Ag,Au,Rg];
   for(var i=0;i<4;i++){
     El_11[i].position(MapX(11), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }
 
   var El_12=[Zn,Cd,Hg,Cn];
   for(var i=0;i<4;i++){
     El_12[i].position(MapX(12), MapY(i + 5)).size(x, x).style('background-color', 'brown').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
   }
 
    // ---------------------------------------------------------P BLOCK---------------------------------------------------------------
    var El_13=[B,Al,Ga,In,Tl,Nh];
    for(var i=0;i<6;i++){
      El_13[i].position(MapX(13), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
 
    var El_14=[C,Si,Ge,Sn,Pb,Fl];
    for(var i=0;i<6;i++){
      El_14[i].position(MapX(14), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
    
    var El_15=[N,P,As,Sb,Bi,Mc];
    for(var i=0;i<6;i++){
      El_15[i].position(MapX(15), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
    
    var El_16=[O,S,Se,Te,Po,Lv];
    for(var i=0;i<6;i++){
    El_16[i].position(MapX(16), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
      
    var El_17=[F,Cl,Br,I,At,Ts];
    for(var i=0;i<6;i++){
      El_17[i].position(MapX(17), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
    
    var El_18=[Ne,Ar,Kr,Xe,Rn,Og];
    for(var i=0;i<6;i++){
      El_18[i].position(MapX(18), MapY(i + 3)).size(x, x).style('background-color', 'rgb(22,92,92)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');
    }
 
    // make helium element Seperate 
      He.position(MapX(18), MapY(2)).size(x, x).style('background-color', 'black').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black');

    //--------------------------------F BLOCK -----------------------------------------------------------------------------------------------------------------------------------------------
    // lanthanide series
      Lanthenite.position(MapX(3),MapY(7)).size(x,x).style('font-size','4px').style('background-color','rgb(20,170,100)').style('color','white').style('border-radius','3px').style('border','1px solid black');

    var La_1=[La,Ce,Pr,Nd,Pm,Sm,Eu,Gd,Tb,Dy,Ho,Er,Tm,Yb,Lu];
    for (var i=0;i<15;i++){
      La_1[i].position(MapX(i+4), MapY(9.2)).size(x, x).style('background-color', 'rgb(20,170,100)').style('color', 'white').style('font-size', font).style('border-radius', '3px').style('border','1px solid black').hide();
    }

    // actinide series
    Actinide.position(MapX(3), MapY(8)).size(x, x).style('font-size','4px').style('background-color', 'rgb(20,170,100)').style('color', 'white').style('border-radius', '3px').style('border','1px solid black');

    var Ac_1=[Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
    for (var i=0;i<15;i++){
      Ac_1[i].position(MapX(i+4),MapY(10.2)).size(x,x).style('background-color','rgb(20,170,100)').style('color','white').style('font-size',font).style('border-radius','3px').style('border','1px solid black');
      Ac_1[i].hide();
    }

  }

    

}