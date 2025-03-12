let V_inp;                  //For stroing From value
let Conv_1;                //Convert the From input value into MKS unit
let Conv_2;                 //convert MKS unit into output unit

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

function setup() {
    input();
    if (window.outerHeight<=Small_size && window.outerWidth > window.outerHeight) { // height and width interchange because change of orientation
        ResponsiveSmallsize();
      } 
      else if (Small_size<window.outerWidth && window.outerWidth <= Medium_size) {
        ResponsiveMediumsize();
      } 
      else if (window.outerWidth>Medium_size) {
        ResponsiveBigsize();

      }
}

//RESIZE CANVAS
function windowResized() {
  
      if (window.outerHeight<=Small_size && window.outerWidth > window.outerHeight) { // height and width interchange because change of orientation
        ResponsiveSmallsize();
      } 
      else if (Small_size<window.outerWidth && window.outerWidth <= Medium_size) {
        ResponsiveMediumsize();
      } 
      else if (window.outerWidth>Medium_size) {
        ResponsiveBigsize();
      }
  }






