//link script in bottom of the html page

console.log("Active") //testing

//Exit button
document.getElementById('btnone').addEventListener("click",exit);
function exit(){
    // window.location='index.html';
    document.getElementById('modal').style.visibility="visible";
}
document.getElementById('Y').addEventListener("click",quite)
function quite(){
    // console.log('click');
    window.location='index.html';
}
document.getElementById('N').addEventListener('click',na)
function na(){
    document.getElementById('modal').style.visibility="hidden";
}

//Reset button
document.getElementById('btntwo').addEventListener("click",reset);
function reset(){
    window.location='new.html';
}
//color
let G = "green";
var col=document.getElementById('btnthree');
col.addEventListener("click",color);
function color(){
    G=prompt('Enter Color Name');
}

//canvas
var canvas=document.getElementById('draw');
canvas.addEventListener('click',draa);
function draa(){
    console.log('CANVAS is OK');
    let X = Math.floor((Math.random() * 10) + 1);
    var ctx = canvas.getContext("2d");
    ctx.font= "150px Comic Sans MS";
    ctx.fillStyle = G;
    ctx.fillText(X,100,130);
    // ctx.strokeText(X,100,130);
}

