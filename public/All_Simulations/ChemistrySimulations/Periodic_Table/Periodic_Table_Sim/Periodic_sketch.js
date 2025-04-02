// Latest changes No. 1
// change: "Click here for Fullscreen and Landscape mode" to "Tap here for Fullscreen and Landscape mode"

//---Full screen -----------------
let fullbtn;
//---------HEADING & ELEMENT INFORMATION BOX----------
let head,comp_sym,com_Name,com_No,com_mass,electro_neg,Melt_point,Boil_point,Oxi_State;
//Block buttons
let S_block,P_block,D_block,F_block;
// Group Buttons
let A_metals,A_Emetals,Tran_metals,PTran_metals,Nobal_gas,Lanthe,Acti,Meta,O_Nmetals;
//State
let Solid,Liquid,Gas;
// make a radio 
let radio;

//------ALL elements--------------------------------------------------
let H,Li,Na,K,Rb,Cs,Fr;
let Be,Mg,Ca,Sr,Ba,Ra;
let Sc,Y;
let Ti,Zr,Hf,Rf;
let V,Nb,Ta,Db;
let Cr,Mo,W,Sg;
let Mn,Tc,Re,Bh;
let Fe,Ru,Os,Hs;
let Co,Rh,Ir,Mt;
let Ni,Pd,Pt,Ds;
let Cu, Ag, Au, Rg;
let Zn,Cd,Hg,Cn;
let B,Al,Ga,In,Tl,Nh;
let C, Si, Ge, Sn, Pb, Fl;
let N, P, As, Sb, Bi, Mc;
let O, S, Se, Te, Po, Lv;
let F,Cl,Br,I,At,Ts;
let Ne, Ar, Kr, Xe, Rn, Og;
let He;
let Lanthenite;
let La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu;
let Actinide;
let Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr;


var e_K,e_L,e_M,e_N,e_O,e_P,e_Q;
// number of electron ,proton and neutron in element 
var N_e,N_p,N_n;

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Dom_elements,full_landscape; 
function setup() {
   input();
   if(document.documentElement.clientWidth<=Small_size && document.documentElement.clientHeight>document.documentElement.clientWidth){
    // -----------------FULL SCREEN AND LANDSCAPE BUTTON FOR SMART PHONE SCREEN SIZE----------------------------------------
    Dom_elements = [fullbtn,head,comp_sym,com_Name,com_No,com_mass,electro_neg,Melt_point,Boil_point,Oxi_State,S_block,P_block,D_block,F_block,A_metals,A_Emetals,Tran_metals,PTran_metals,Nobal_gas,Lanthe,Acti,Meta,O_Nmetals,Solid,Liquid,Gas,radio,H,Li,Na,K,Rb,Cs,Fr,Be,Mg,Ca,Sr,Ba,Ra,Sc,Y,Ti,Zr,Hf,Rf,V,Nb,Ta,Db,Cr,Mo,W,Sg,Mn,Tc,Re,Bh,Fe,Ru,Os,Hs,Co,Rh,Ir,Mt,Ni,Pd,Pt,Ds,Cu, Ag, Au, Rg,Zn,Cd,Hg,Cn,B,Al,Ga,In,Tl,Nh,C, Si, Ge, Sn, Pb, Fl,N, P, As, Sb, Bi, Mc,O, S, Se, Te, Po, Lv,F,Cl,Br,I,At,Ts,Ne, Ar, Kr, Xe, Rn, Og,He,Lanthenite,La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu,Actinide,Ac,Th,Pa,U,Np,Pu,Am,Cm,Bk,Cf,Es,Fm,Md,No,Lr];
    Dom_elements.forEach(el => el.hide());
    full_landscape=createButton('Tap here for Fullscreen and Landscape mode');
    full_landscape.position(0,0).size(document.documentElement.clientWidth,document.documentElement.clientHeight).style('font-size','12px');
    full_landscape.mousePressed(fulllandscape);

    ResponsiveSmallsize();
    document.addEventListener("visibilitychange", handleVisibilityChange);                          //when smartphone screen off this will run
  }
  else if(Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth<=Medium_size){
    ResponsiveMediumsize();

  }
  else if( document.documentElement.clientWidth>Medium_size){
    ResponsiveBigsize();

  }
}


// --------------FULL SCREEN AND SCREEN OFF SMARTPHONE FUNCTION------------------
function fulllandscape(){
  fullscreen(true);
  screen.orientation.lock("landscape").catch(console.error);
  full_landscape.html('Exit Full Screen');
  full_landscape.size(100,22).position(20,20).style('font-size','11px').style('background-color','RGB(225,225,225)').style('padding','2px').style('border-radius','5px');
  Dom_elements.forEach(el => el.show());
   let Initial_hide=[A_metals,A_Emetals,Tran_metals,PTran_metals,Nobal_gas,Lanthe,Acti,Meta,O_Nmetals,Solid,Liquid,Gas];            
    Initial_hide.forEach(el => el.hide());
  full_landscape.mousePressed(exitlandscape);

}
function exitlandscape(){
  fullscreen(false);
  full_landscape.html('Tap here for Fullscreen and Landscape mode');
  full_landscape.position(0,0).size(document.documentElement.clientHeight,document.documentElement.clientWidth).style('font-size','12px');
  Dom_elements.forEach(el => el.hide());
  full_landscape.mousePressed(fulllandscape);
}

function handleVisibilityChange() {
  full_landscape.html('Tap here for Fullscreen and Landscape mode');
  full_landscape.position(0,0).size(document.documentElement.clientHeight,document.documentElement.clientWidth).style('font-size','12px');
  Dom_elements.forEach(el => el.hide());
  full_landscape.mousePressed(fulllandscape);
}

//------------------------WINDOW RESIZE------------------------------------------------------
function windowResized(){
   resizeCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);

    if (document.documentElement.clientHeight<=Small_size && document.documentElement.clientWidth > document.documentElement.clientHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize();
    } 
    else if (Small_size<document.documentElement.clientWidth && document.documentElement.clientWidth <= Medium_size) {
      ResponsiveMediumsize();

    } 
    else if (document.documentElement.clientWidth>Medium_size) {
      ResponsiveBigsize();
    }
}





