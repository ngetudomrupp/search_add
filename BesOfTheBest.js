var arr=new Array();
var n=0,i,j;
document.querySelector('.button_add').addEventListener('click',function (){
    arr[n]= document.querySelector('.input').value;
    n=n+1;
    document.querySelector('.input').value="";
});
document.querySelector('.button_view').addEventListener('click',function (){
    
    var str="<table border=1 cellpadding=15 cellspacing=0>";
    str=str+"<tr><th>លេខរៀង</th><th>បញ្ជី</th></tr>";
    for(i=0;i<n;i++){
        str=str+"<tr><td>"+(i+1)+"</td><td>"+arr[i]+"</td></tr>";
    }
    str = str+ "</table>";
    document.querySelector('.get_out').innerHTML = str;
});
document.querySelector('.button_search').addEventListener('click',function(){
    var b=0;
    var searchs = document.querySelector('.input').value;
    var str="<table border=1 cellpadding=15 cellspacing=0>";
        str=str+"<tr><th>លេខរៀង</th><th>បញ្ជី</th></tr>";
    for(i=0;i<n;i++){
        if(arr[i]==searchs){
            b=1;
                str=str+"<tr><td>"+(i+1)+"</td><td>"+arr[i]+"</td></tr>"
        }
    }
    str=str+"</table>";

    document.querySelector('.get_out').innerHTML = str;
    if(b==0)alert("Search not found !");
});
document.querySelector('.button_delete').addEventListener('click',function(){
    var i,b=0,j;
    var searchs = document.querySelector('.input').value;
    var str="<table border=1 cellpadding=15 cellspacing=0>";
        str=str+"<tr><th>លេខរៀង</th><th>បញ្ជី</th></tr>";
    for(i=0;i<n;i++){
        if(arr[i]==searchs){
            for(j=i;j<n;j++){
                arr[i]=arr[j+1];
            }
            b=1;
        }
    }
    n=n-1;
    str=str+"<tr><td>"+(i+1)+"</td><td>"+arr[i]+"</td></tr>";
    str=str+"</table>";
    alert("Delete Complete !");
});