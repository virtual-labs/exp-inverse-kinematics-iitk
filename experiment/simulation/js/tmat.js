/**
 * 
 *  Document     : PUMA_tmat.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Khatagpur
 *  
 */
function myFunction() {
    a2 = 0.432;
    a3 = 0.0203;
    d3 = 0.1495;
    d4 = 0.432;
    // var a2 = 432;
    var d1 = 660.4 / 1000;
    var d2 = 149.5 / 1000;
    var ax = document.getElementById("a1").value;
    var ay = document.getElementById("a2").value;
    var az = document.getElementById("a3").value;

    var nx = document.getElementById("n1").value;
    var ny = document.getElementById("n2").value;
    var nz = document.getElementById("n3").value;

    var sx = document.getElementById("s1").value;
    var sy = document.getElementById("s2").value;
    var sz = document.getElementById("s3").value;

    var px = document.getElementById("p1").value;
    var py = document.getElementById("p2").value;
    var pz = document.getElementById("p3").value;

    // var r = Math.sqrt(Math.pow(px, 2) + Math.pow(py, 2) - Math.pow(d2, 2));
    // var R = (Math.pow(px, 2) + Math.pow(py, 2) + Math.pow(pz, 2) - Math.pow(d4, 2) - Math.pow(a2, 2) - Math.pow(d2, 2));
    var R1 = Math.sqrt(Math.pow(px, 2) + Math.pow(py, 2) - Math.pow(d3, 2));
    // var th1 = Math.atan((py * r - d2 * px) / (px * r + d2 * py));
    var th1 = Math.atan2(py, px) - Math.atan2(d3, R1);
    var th1_1 = Math.atan2(py, px) - Math.atan2(d3, -R1);
    var th1Val = th1 * (180 / Math.PI);
    var th1_1Val = th1_1 * (180 / Math.PI);
    // alert(th1Val);

    var K = ((Math.pow(px, 2) + Math.pow(py, 2) + Math.pow(pz, 2) - Math.pow(a2, 2) - Math.pow(a3, 2) - Math.pow(d3, 2) - Math.pow(d4, 2)) / (2 * a2));
    var R2 = Math.sqrt(Math.pow(a3, 2) + Math.pow(d4, 2) - Math.pow(K, 2));
    //alert(R2);
    var th3 = Math.atan2(a3, d4) - Math.atan2(K, R2);
    var th3_1 = Math.atan2(a3, d4) - Math.atan2(K, -R2);
    // var th3 = Math.atan(R / (Math.sqrt(4 * Math.pow(d4, 2) * Math.pow(a2, 2) - Math.pow(R, 2))));
    var th3Val = th3 * (180 / Math.PI);
    var th3_1Val = th3_1 * (180 / Math.PI);
    // alert(th3Val);


    var A1 = (((-a3 - a2 * Math.cos(th3)) * pz) - ((Math.cos(th1) * px + Math.sin(th1) * py) * (d4 - a2 * Math.sin(th3))));
    var B1 = (((a2 * Math.sin(th3) - d4) * pz) - ((a3 + a2 * Math.cos(th3)) * (Math.cos(th1) * px + Math.sin(th1) * py)));
    //2nd soln.
    var A2 = ((-a3 - a2 * Math.cos(th3)) * pz) - ((Math.cos(th1_1) * px + Math.sin(th1_1) * py) * (d4 - a2 * Math.sin(th3)));
    var B2 = ((a2 * Math.sin(th3) - d4) * pz) - ((a3 + a2 * Math.cos(th3)) * (Math.cos(th1_1) * px + Math.sin(th1_1) * py));
    //3rd soln.
    var A3 = ((-a3 - a2 * Math.cos(th3_1)) * pz) - ((Math.cos(th1) * px + Math.sin(th1) * py) * (d4 - a2 * Math.sin(th3_1)));
    var B3 = ((a2 * Math.sin(th3_1) - d4) * pz) - ((a3 + a2 * Math.cos(th3_1)) * (Math.cos(th1) * px + Math.sin(th1) * py));
//4th soln.
    var A4 = ((-a3 - a2 * Math.cos(th3_1)) * pz) - ((Math.cos(th1_1) * px + Math.sin(th1_1) * py) * (d4 - a2 * Math.sin(th3_1)));
    var B4 = ((a2 * Math.sin(th3_1) - d4) * pz) - ((a3 + a2 * Math.cos(th3_1)) * (Math.cos(th1_1) * px + Math.sin(th1_1) * py));

    var th23 = Math.atan2(A1, B1);
    var th23_1 = Math.atan2(A2, B2);
    var th23_2 = Math.atan2(A3, B3);
    var th23_3 = Math.atan2(A4, B4);
    var th23Val = (th23 * (180 / Math.PI));
    //alert(th23Val);
    var th2 = th23 - th3;
    var th2_1 = th23_1 - th3;
    var th2_2 = th23_2 - th3_1;
    var th2_3 = th23_3 - th3_1;
    // var th2 = Math.atan(-(pz * a2 + pz * d4 * Math.sin(th3) + d4 * Math.cos(th3) * r) / (pz * d4 * Math.cos(th3) - ((a2 + d4 * Math.sin(th3)) * r)));
    var th2Val = (th2 * (180 / Math.PI));
    var th2_1Val = (th2_1 * (180 / Math.PI));
    var th2_2Val = (th2_2 * (180 / Math.PI));
    var th2_3Val = (th2_3 * (180 / Math.PI));
    // alert(th2Val);

    var th4 = Math.atan2((Math.cos(th1) * ay - Math.sin(th1) * ax), (-Math.cos(th1) * Math.cos(th23) * ax - Math.sin(th1) * Math.cos(th23) * ay + Math.sin(th23) * az));
    var th4_1 = Math.atan2((Math.cos(th1_1) * ay - Math.sin(th1_1) * ax), (-Math.cos(th1_1) * Math.cos(th23_1) * ax - Math.sin(th1_1) * Math.cos(th23_1) * ay + Math.sin(th23_1) * az));
    var th4_2 = Math.atan2((Math.cos(th1) * ay - Math.sin(th1) * ax), (-Math.cos(th1) * Math.cos(th23_2) * ax - Math.sin(th1) * Math.cos(th23_2) * ay + Math.sin(th23_2) * az));
    var th4_3 = Math.atan2((Math.cos(th1_1) * ay - Math.sin(th1_1) * ax), (-Math.cos(th1_1) * Math.cos(th23_3) * ax - Math.sin(th1_1) * Math.cos(th23_3) * ay + Math.sin(th23_3) * az));
    var th4Val = th4 * (180 / Math.PI);
    var th4_1Val = th4_1 * (180 / Math.PI);
    var th4_2Val = th4_2 * (180 / Math.PI);
    var th4_3Val = th4_3 * (180 / Math.PI);
    //alert(th4Val);
    S5 = -((Math.cos(th1) * Math.cos(th23) * Math.cos(th4) + Math.sin(th1) * Math.sin(th4)) * ax + (Math.sin(th1) * Math.cos(th23) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * ay - Math.cos(th4) * Math.sin(th23) * az);
    C5 = (-Math.cos(th1) * Math.sin(th23) * ax - Math.sin(th1) * Math.sin(th23) * ay - Math.cos(th23) * az);

    S5_1 = -((Math.cos(th1_1) * Math.cos(th23_1) * Math.cos(th4) + Math.sin(th1_1) * Math.sin(th4)) * ax + (Math.sin(th1_1) * Math.cos(th23_1) * Math.cos(th4) - Math.cos(th1_1) * Math.sin(th4)) * ay - Math.cos(th4) * Math.sin(th23_1) * az);
    C5_1 = (-Math.cos(th1_1) * Math.sin(th23_1) * ax - Math.sin(th1_1) * Math.sin(th23_1) * ay - Math.cos(th23_1) * az);

    S5_2 = -((Math.cos(th1) * Math.cos(th23_2) * Math.cos(th4) + Math.sin(th1) * Math.sin(th4)) * ax + (Math.sin(th1) * Math.cos(th23_2) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * ay - Math.cos(th4) * Math.sin(th23_2) * az);
    C5_2 = (-Math.cos(th1) * Math.sin(th23_2) * ax - Math.sin(th1) * Math.sin(th23_2) * ay - Math.cos(th23_2) * az);

    S5_3 = -((Math.cos(th1) * Math.cos(th23_3) * Math.cos(th4) + Math.sin(th1) * Math.sin(th4)) * ax + (Math.sin(th1) * Math.cos(th23_3) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * ay - Math.cos(th4) * Math.sin(th23_3) * az);
    C5_3 = (-Math.cos(th1) * Math.sin(th23_3) * ax - Math.sin(th1) * Math.sin(th23_3) * ay - Math.cos(th23_3) * az);
    var th5 = Math.atan2(S5, C5);
    var th5Val = th5 * (180 / Math.PI);
    //alert(th5 * 180 / Math.PI);
    var th5_1 = -Math.atan2(S5_1, C5_1);
    var th5_1Val = th5_1 * (180 / Math.PI);
    //alert(th5_1 * 180 / Math.PI);

    var th5_2 = Math.atan2(S5_2, C5_2);
    var th5_2Val = th5_2 * (180 / Math.PI);
    // alert(th5_2 * 180 / Math.PI);

    var th5_3 = Math.atan2(S5_3, C5_3);
    var th5_3Val = th5_3 * (180 / Math.PI);
    // alert(th5_3 * 180 / Math.PI);

    S6 = ((Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th23) * Math.sin(th4)) * nx - (Math.cos(th1) * Math.cos(th4) + Math.sin(th1) * Math.cos(th23) * Math.sin(th4)) * ny + (Math.sin(th4) * Math.sin(th23)) * nz);
    C6 = (((Math.sin(th1) * Math.sin(th4) - Math.cos(th1) * Math.cos(th23) * Math.cos(th4)) * Math.cos(th5) - Math.cos(th1) * Math.sin(th23) * Math.sin(th5)) * sx + ((Math.sin(th1) * Math.cos(th23) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * Math.cos(th5) - Math.sin(th1) * Math.sin(th23) * Math.sin(th5)) * sy - (Math.cos(th4) * Math.cos(th5) * Math.sin(th23) + Math.cos(th23) * Math.sin(th5)) * sz);

    S6_1 = ((Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th23_1) * Math.sin(th4)) * nx - (Math.cos(th1) * Math.cos(th4) + Math.sin(th1) * Math.cos(th23_1) * Math.sin(th4)) * ny + (Math.sin(th4) * Math.sin(th23_1)) * nz);
    C6_1 = (((Math.sin(th1) * Math.sin(th4) - Math.cos(th1) * Math.cos(th23_1) * Math.cos(th4)) * Math.cos(th5) - Math.cos(th1) * Math.sin(th23_1) * Math.sin(th5)) * sx + ((Math.sin(th1) * Math.cos(th23_1) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * Math.cos(th5) - Math.sin(th1) * Math.sin(th23_1) * Math.sin(th5)) * sy - (Math.cos(th4) * Math.cos(th5) * Math.sin(th23_1) + Math.cos(th23_1) * Math.sin(th5)) * sz);

    S6_2 = ((Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th23_2) * Math.sin(th4)) * nx - (Math.cos(th1) * Math.cos(th4) + Math.sin(th1) * Math.cos(th23_2) * Math.sin(th4)) * ny + (Math.sin(th4) * Math.sin(th23_2)) * nz);
    C6_2 = (((Math.sin(th1) * Math.sin(th4) - Math.cos(th1) * Math.cos(th23_2) * Math.cos(th4)) * Math.cos(th5) - Math.cos(th1) * Math.sin(th23_2) * Math.sin(th5)) * sx + ((Math.sin(th1) * Math.cos(th23_2) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * Math.cos(th5) - Math.sin(th1) * Math.sin(th23_2) * Math.sin(th5)) * sy - (Math.cos(th4) * Math.cos(th5) * Math.sin(th23_2) + Math.cos(th23_2) * Math.sin(th5)) * sz);

    S6_3 = ((Math.sin(th1) * Math.cos(th4) - Math.cos(th1) * Math.cos(th23_3) * Math.sin(th4)) * nx - (Math.cos(th1) * Math.cos(th4) + Math.sin(th1) * Math.cos(th23_3) * Math.sin(th4)) * ny + (Math.sin(th4) * Math.sin(th23_3)) * nz);
    C6_3 = (((Math.sin(th1) * Math.sin(th4) - Math.cos(th1) * Math.cos(th23_3) * Math.cos(th4)) * Math.cos(th5) - Math.cos(th1) * Math.sin(th23_3) * Math.sin(th5)) * sx + ((Math.sin(th1) * Math.cos(th23_3) * Math.cos(th4) - Math.cos(th1) * Math.sin(th4)) * Math.cos(th5) - Math.sin(th1) * Math.sin(th23_3) * Math.sin(th5)) * sy - (Math.cos(th4) * Math.cos(th5) * Math.sin(th23_3) + Math.cos(th23_3) * Math.sin(th5)) * sz);
    var th6 = Math.atan2(S6, C6);
    var th6Val = th6 * (180 / Math.PI);
    //alert(th6 * 180 / Math.PI);

    var th6_1 = Math.atan2(S6_1, C6_1);
    var th6_1Val = th6_1 * (180 / Math.PI);
    //alert(th6_1 * 180 / Math.PI);

    var th6_2 = Math.atan2(S6_2, C6_2);
    var th6_2Val = th6_2 * (180 / Math.PI);
    //alert(th6_2 * 180 / Math.PI);

    var th6_3 = Math.atan2(S6_3, C6_3);
    var th6_3Val = th6_3 * (180 / Math.PI);
   // alert(th6_3 * 180 / Math.PI);
    // 
    // 
    // 
// change due to theta 
//Sol 1
    document.getElementById("th1").value = th1Val.toPrecision(2);
    //PUMA560.link2Mesh.rotation.y = +th1;

    document.getElementById("th2").value = th2Val.toPrecision(2);
    //PUMA560.Link3Mesh.rotation.x = +th2;

    document.getElementById("th3").value = th3Val.toPrecision(2);
    //PUMA560.Link4Mesh.rotation.x = +th3;
//
    document.getElementById("th4").value = th4Val.toPrecision(3);
    // PUMA560.BoxL5.rotation.y = +th4;
//
    document.getElementById("th5").value = th5Val.toPrecision(2);
    // PUMA560.Cylinder3L5.rotation.x = +th5;
//
    document.getElementById("th6").value = th6Val.toPrecision(2);
    // alert(th6Val);
    // PUMA560.CylinderL6.rotation.x = +th6;


//Sol 2
    document.getElementById("th1_1").value = th1_1Val.toPrecision(3);
    //PUMA560.link2Mesh.rotation.y = +th1_1;
    document.getElementById("th2_1").value = th2_1Val.toPrecision(3);
    //PUMA560.Link3Mesh.rotation.x = +th2_1;
    document.getElementById("th3_1").value = th3Val.toPrecision(3);
    //PUMA560.link2Mesh.rotation.y = +th3_1;
    document.getElementById("th4_1").value = th4_1Val.toPrecision(3);

    document.getElementById("th5_1").value = th5_1Val.toPrecision(3);

    document.getElementById("th6_1").value = th6_1Val.toPrecision(3);

//Sol 3
    document.getElementById("th1_2").value = th1Val.toPrecision(2);
    //PUMA560.link2Mesh.rotation.y = +th1_1;
    document.getElementById("th2_2").value = th2_2Val.toPrecision(3);
    //PUMA560.Link3Mesh.rotation.x = +th2_1;
    document.getElementById("th3_2").value = th3_1Val.toPrecision(3);
    //PUMA560.link2Mesh.rotation.y = +th3_1;
    document.getElementById("th4_2").value = th4_2Val.toPrecision(3);
    document.getElementById("th5_2").value = th5_2Val.toPrecision(3);
    document.getElementById("th6_2").value = th6_2Val.toPrecision(3);
//Sol 4
    document.getElementById("th1_3").value = th1_1Val.toPrecision(2);
    //PUMA560.link2Mesh.rotation.y = +th1_1;
    document.getElementById("th2_3").value = th2_3Val.toPrecision(3);
    //PUMA560.Link3Mesh.rotation.x = +th2_1;
    document.getElementById("th3_3").value = th3_1Val.toPrecision(3);
    document.getElementById("th4_3").value = th4_3Val.toPrecision(3);
    document.getElementById("th5_3").value = th5_3Val.toPrecision(3);
    document.getElementById("th6_3").value = th6_3Val.toPrecision(3);

}
function solution1() {
    // myFunction();
    th1 = (Math.PI / 180) * document.getElementById("th1").value;
    //alert(th1);
    PUMA560.link2Mesh.rotation.y = +th1;

    th2 = (Math.PI / 180) * document.getElementById("th2").value;
    // alert(th2);
    PUMA560.Link3Mesh.rotation.x = +th2;

    th3 = (Math.PI / 180) * document.getElementById("th3").value;
    // alert(th3);
    PUMA560.Link4Mesh.rotation.x = +th3;
//
    th4 = (Math.PI / 180) * document.getElementById("th4").value;
    // alert(th4);
    PUMA560.BoxL5.rotation.y = +th4;
//
    th5 = (Math.PI / 180) * document.getElementById("th5").value;
    // alert(th5);
    PUMA560.Cylinder3L5.rotation.x = +th5;
//
    th6 = (Math.PI / 180) * document.getElementById("th6").value;
    //alert(th6);
    PUMA560.CylinderL6.rotation.x = +(th6);
}
function solution2() {
    //myFunction();
    th1_1 = (Math.PI / 180) * document.getElementById("th1_1").value;
    // alert("ss");
    //alert(th1_1);
    PUMA560.link2Mesh.rotation.y = +th1_1;

    th2_1 = (Math.PI / 180) * document.getElementById("th2_1").value;
    PUMA560.Link3Mesh.rotation.x = +th2_1;

    th3_1 = (Math.PI / 180) * document.getElementById("th3_1").value;
    PUMA560.Link4Mesh.rotation.x = +th3_1;
//
    th4_1 = (Math.PI / 180) * document.getElementById("th4_1").value;
    PUMA560.BoxL5.rotation.y = +th4_1;
//
    th5_1 = (Math.PI / 180) * document.getElementById("th5_1").value;
    PUMA560.Cylinder3L5.rotation.x = +th5_1;
//
    th6_1 = (Math.PI / 180) * document.getElementById("th6_1").value;
    PUMA560.CylinderL6.rotation.x = +th6_1;
}
function solution3() {
    //yFunction );
    //  alert("ss");
    th1_2 = (Math.PI / 180) * document.getElementById("th1_2").value;

    PUMA560.link2Mesh.rotation.y = +th1_2;

    th2_2 = (Math.PI / 180) * document.getElementById("th2_2").value;
    PUMA560.Link3Mesh.rotation.x = +th2_2;

    th3_2 = (Math.PI / 180) * document.getElementById("th3_2").value;
    //alert("ss");
    PUMA560.Link4Mesh.rotation.x = +th3_2;
//
    th4_2 = (Math.PI / 180) * document.getElementById("th4_2").value;
    PUMA560.BoxL5.rotation.y = +th4_2;
//
    th5_2 = (Math.PI / 180) * document.getElementById("th5_2").value;
    PUMA560.Cylinder3L5.rotation.x = +th5_2;
//
    th6_2 = (Math.PI / 180) * document.getElementById("th6_2").value;
    PUMA560.CylinderL6.rotation.x = +th6_2;
}
function solution4() {
    //yFunction );
    th1_3 = (Math.PI / 180) * document.getElementById("th1_3").value;
    //alert("ss");
    PUMA560.link2Mesh.rotation.y = +th1_3;

    th2_3 = (Math.PI / 180) * document.getElementById("th2_3").value;
    PUMA560.Link3Mesh.rotation.x = +th2_3;

    th3_3 = (Math.PI / 180) * document.getElementById("th3_3").value;
    PUMA560.Link4Mesh.rotation.x = +th3_3;
//
    th4_3 = (Math.PI / 180) * document.getElementById("th4_3").value;
    PUMA560.BoxL5.rotation.y = +th4_3;
//
    th5_3 = (Math.PI / 180) * document.getElementById("th5_3").value;
    PUMA560.Cylinder3L5.rotation.x = +th5_3;
//
    th6_3 = (Math.PI / 180) * document.getElementById("th6_3").value;
    PUMA560.CylinderL6.rotation.x = +th6_3;
}