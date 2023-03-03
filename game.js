
    let  personnes=["Revox","spiderdum","ChefX","Xman"]


    function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  var randomElement = getRandomElement(personnes);

  
var  checkKiller=function() {
      if( $("#nd").val()===randomElement) {
        alert("GOT IT WAS LUCA BEHIND IT WE NEED TO KEEP TRACK ON HIM TILL NEXT YEAR")

 
}

      if ( $("#nd").val()!==randomElement) {
    alert("AAAAAAAAAAH WHERE YOU ARE LUUCA ???!")
    if ( $("#nd").val() !=="") {
      alert("WHOOOM ???!")
    
}
      }


    
    }
   function tryAgain(){
    location.reload()
   }

   $(document).ready(function(){
    $("#pl1").click(function(){
      $("#A").slideToggle();
    });
  });
  $(document).ready(function(){
    $("#pl2").click(function(){
      $("#B").slideToggle();
    });
  });
  $(document).ready(function(){
    $("#pl3").click(function(){
      $("#C").slideToggle();
    });
  });
  $(document).ready(function(){
    $("#pl4").click(function(){
      $("#D").slideToggle();
    });
  });



  


