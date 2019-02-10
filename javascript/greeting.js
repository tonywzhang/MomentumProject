function Greeting(){
  let greeting = "Good ";
  let today = new Date();
  let hours = today.getHours();
  if(hours < 6 || hours > 18){
    greeting += " evening";
  } else if(hours >= 6 && hours < 12){
    greeting += " morning";
  }else{
    greeting += " afternoon";
  };

  greeting += ", pal.";

  document.getElementById("greeting").innerHTML = greeting;
}

Greeting();
