var countDate=new Date('April 13, 2021 00:00:00').getTime();

function birthday(){
    var now=new Date().getTime();
    var gap=countDate-now;
    var second=1000;
    var minute=second*60;
    var hour=minute*60;
    var day=hour*24;
    var d=Math.floor(gap/(day));
    var h=Math.floor((gap%(day))/hour);
    var m=Math.floor((gap%(hour))/minute);
    var s=Math.floor((gap%(minute))/second);
    document.getElementById('day').innerText=d;
    document.getElementById('hour').innerText=h;
    document.getElementById('minute').innerText=m;
    document.getElementById('second').innerText=s;
}
setInterval(function(){
    birthday();
},1000)
birthday();