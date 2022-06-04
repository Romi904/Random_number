window.onload=captcha();
function captcha(){
    var f= document.getElementById('captcha');
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
 	    	'0','1','2','3','4','5','6','7','8','9');
    var q= alpha[Math.floor(Math.random()*alpha.length)];
    var w= alpha[Math.floor(Math.random()*alpha.length)];
    var r= alpha[Math.floor(Math.random()*alpha.length)];
    var e= alpha[Math.floor(Math.random()*alpha.length)];
    var r= alpha[Math.floor(Math.random()*alpha.length)];
    var code=q+w+r+e+r;

    f.value=code;
}

var t=document.getElementById('cbutton').addEventListener('click',()=>{
    var c= document.getElementById('captcha_box');
    var f= document.getElementById('captcha');

    if(c.value==f.value)
    {
        alert('Login Successful.')
    }
});