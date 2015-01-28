

function drawCircle() {

	var counter = 500; 
  	var canvas = document.getElementById("canvas"); 
		
	var ctx = canvas.getContext('2d'); 


	for (var i = 0; i < counter; i++) {

		var x = Math.random() * 900; 
		var y = Math.random() * 900; 
		var radius = Math.floor(Math.random() * 20) + 1; 

		var r = Math.floor(Math.random()* 256);
		var g = Math.floor(Math.random()* 256);
		var b = Math.floor(Math.random()* 256);

		var cssColor = 'rgb(' + r +', ' + g + ',' + b +')';
		var time_begin = new Date(); 
		ctx.beginPath();
			
	
		ctx.arc(x,y, radius, 0, 2 * Math.PI, true);
		ctx.fillStyle = cssColor; 
		ctx.fill();

    }

}

drawCircle(); 
