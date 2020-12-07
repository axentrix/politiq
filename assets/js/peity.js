(function() {
    $(function() {
       
      
        /* line charts */
    
        /* bar charts */
       
 $(".small-bar-1").peity("bar", {
  fill: ["#85d9ff"], height:50, width:140
})      
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values =  $(".small-bar-1").text().split(',');
            values.shift();
            values.push(random);
            $(".small-bar-1").text(values.join(',')).change();
           
        }, 1000);
    
     $(".small-bar-2").peity("line", {
  fill: ["#4acf95"], stroke:["#4acf95"], height:50, width:140
})      
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values =  $(".small-bar-2").text().split(',');
            values.shift();
            values.push(random);
            $(".small-bar-2").text(values.join(',')).change();
           
        }, 1000);
     
	 
	 
	   $(".small-bar-3").peity("bar", {
  fill: ["#f16940"], height:50, width:140
})      
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values =  $(".small-bar-3").text().split(',');
            values.shift();
            values.push(random);
            $(".small-bar-3").text(values.join(',')).change();
           
        }, 1000);
		
		
		
		  $(".small-bar-4").peity("bar", {
  fill: ["#af77cf"], height:50, width:140
})      
        setInterval(function() {
            var random = Math.round(Math.random() * 10);
            var values =  $(".small-bar-4").text().split(',');
            values.shift();
            values.push(random);
            $(".small-bar-4").text(values.join(',')).change();
           
        }, 1000);
	 
     
    });
})();
