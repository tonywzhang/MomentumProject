function checkTime() {
  let date = new Date();
  let dateStr = date.toLocaleTimeString();
  let index = 0;
  for(let i = 0; i < dateStr.length; i++){
      if(dateStr[i] == ":"){
        index = i;
        break;
      }
  }

  document.getElementById('time').innerHTML = dateStr.slice(0,index+3);
  setTimeout(function(){
    checkTime();
  }, 500);
}

checkTime();
