$(document).ready(function(){
      $("#family").fadeIn(2000);
      $("#jumboText").fadeIn(2000);
    });

   // let element = document.getElementById("searchText");  
    //element.style.visibility = "hidden";  

     $(document).ready(function(){
      $("#searchButton").click(function(){
        $("#searchText").toggle();
        $("#searchText").display("flex");
      });
    });


