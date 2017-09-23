
var url = "https://api.github.com/users";

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if(this.readyState==4 && this.status==200)
    {
      Datafunction(this);

    }
}

request.open("GET",url,true);
request.send();

function Datafunction(data){
  var info = JSON.parse(data.responseText);
  console.log(info);
  var li="";
  for(i=0;i<10;i++)
    {
      li +="<ul><li>"+
        "<img src="+info[i].avatar_url+">"+
        "<b>NAME:</b> "+
        info[i].login

        + "</li></ul>";
    }

  document.getElementById("container").innerHTML = li;
}
