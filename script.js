function clock(){
    var date=new Date();
    var hours=date.getHours() + '';
    var min=date.getMinutes() + '';
    var sec=date.getSeconds()+ '';
    var day=date.getDay();
    if(hours.length<2){
        hours='0' + hours;
    }
    if(min.length<2){
        min='0' + min;
    }
    if(sec.length<2){
        sec='0' + sec;
    }

    var Days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    var digitalClock=Days[day] + ' ' + hours + ':' + min +
    ':' + sec;

    document.getElementById('clock').innerHTML=digitalClock;
}
setInterval(clock,1000);