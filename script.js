function myFunction() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var d = new Date();
    let month = months[d.getMonth()];
    document.getElementById("month").innerHTML = month;
    
    
    
    var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.getElementById("days").innerHTML=dayName[d.getDay()];
    
    
    
    document.getElementById("date").innerHTML=d.getDate();
   
    
    
    
    document.getElementById("year").innerHTML=d.getFullYear();
}
