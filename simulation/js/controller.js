/**
 * 
 *  Document     : controller.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Kharagpur
 *  
 */
function initializeSimulation() {
    PUMA560.init();
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    PUMA560.link2Mesh.rotation.y = +sliderVal * (Math.PI / 180);
   
     var sliderVal2 = document.getElementById("slider2").value;
    document.getElementById("rangeValue2").value = sliderVal2;
    PUMA560.Link3Mesh.rotation.x= +sliderVal2 * (Math.PI / 180);
    
    var sliderVal3 = document.getElementById("slider3").value;
    document.getElementById("rangeValue3").value = sliderVal3;
    PUMA560.Link4Mesh.rotation.x= +sliderVal3 * (Math.PI / 180);
    
    var sliderVal4 = document.getElementById("slider4").value;
    document.getElementById("rangeValue4").value = sliderVal4;
    PUMA560.BoxL5.rotation.y= +sliderVal4 * (Math.PI / 180);
    
    var sliderVal5 = document.getElementById("slider5").value;
    document.getElementById("rangeValue5").value = sliderVal5;
    PUMA560.Cylinder3L5.rotation.x= +sliderVal5 * (Math.PI / 180);
    
      var sliderVal6 = document.getElementById("slider6").value;
    document.getElementById("rangeValue6").value = sliderVal6;
    PUMA560.CylinderL6.rotation.x= +sliderVal6 * (Math.PI / 180);
    
    render();
    
}


