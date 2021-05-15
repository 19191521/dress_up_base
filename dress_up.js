	var drag_num = 1;




	function display_catalogue (part) {
		var div = document.getElementById('elements');
		div.innerHTML="";
		
		if (part=="hair"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hair001.png" onclick="display_on_body(\'hair\',\'hair001\')"  class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hair002.png"  onclick="display_on_body(\'hair\',\'hair002\')"  class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hair003.png"  onclick="display_on_body(\'hair\',\'hair003\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hair004b.png" onclick="display_on_body(\'hair\',\'hair004b\')"  class="displayed">';	
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hair004a.png" onclick="display_on_body(\'hair2\',\'hair004a\')"  class="displayed">';
			
			
		}
		
		if (part=="bottom"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/bottom001.png" onclick="display_on_body(\'bottom\',\'bottom001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/bottom002.png" onclick="display_on_body(\'bottom\',\'bottom002\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/bottom003.png" onclick="display_on_body(\'bottom\',\'bottom003\')" class="displayed">';
			
		}
		
		if (part=="top"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/top001.png" onclick="display_on_body(\'top\',\'top001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/top002.png" onclick="display_on_body(\'top\',\'top002\')" class="displayed">';
			
		}
		
		if (part=="onepiece"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/onepiece001.png" onclick="display_on_body(\'onepiece\',\'onepiece001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/onepiece002.png" onclick="display_on_body(\'onepiece\',\'onepiece002\')" class="displayed">';
			
		}
		
		if (part=="socks"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/socks001.png" onclick="display_on_body(\'socks\',\'socks001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/socks002.png" onclick="display_on_body(\'socks\',\'socks002\')" class="displayed">';
			
		}
		
		if (part=="shoes"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/shoes001.png" onclick="display_on_body(\'shoes\',\'shoes001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/shoes002.png" onclick="display_on_body(\'shoes\',\'shoes002\')" class="displayed">';
			
		}
		
		if (part=="jacket"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/jacket001.png" onclick="display_on_body(\'jacket\',\'jacket001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/jacket002.png" onclick="display_on_body(\'jacket\',\'jacket002\')" class="displayed">';
			
		}
		
		if (part=="face"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/face001.png" onclick="display_on_body(\'face\',\'face001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/face002.png" onclick="display_on_body(\'face\',\'face002\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/face003.png" onclick="display_on_body(\'face\',\'face003\')" class="displayed">';
			
		}
		
		if (part=="earrings"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/earrings001.png" onclick="display_on_body(\'earrings\',\'earrings001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/earrings002.png" onclick="display_on_body(\'earrings\',\'earrings002\')" class="displayed">';
			
		}
		
		if (part=="accessories"){
			div.innerHTML=div.innerHTML+ '<img src="images/elements/bracelet001.png" onclick="display_on_body(\'bracelet1\',\'bracelet001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/bracelet002.png" onclick="display_on_body(\'bracelet2\',\'bracelet002\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hat001.png" onclick="display_on_body(\'hat\',\'hat001\')" class="displayed">';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/hat002.png" onclick="display_on_body(\'hat\',\'hat002\')" class="displayed">';
			
		}

		if(part=="drag"){
			
			div.innerHTML=div.innerHTML+ '<img src="images/elements/drag001.png" class="displayed" onclick="display_drag(\'drag\',\'drag001\')" width=20%>';
			div.innerHTML=div.innerHTML+ '<img src="images/elements/drag002.png" class="displayed" onclick="display_drag(\'drag\',\'drag002\')" width=20%>';
		}
	}

		function remove_all(){
			
			var imgdiv = document.getElementById("doll");
			imgdiv.innerHTML="<img src='images/elements/face001.png' id='face' class='element'> <img src='images/elements/hairw0hat.png' class='element'> <img src='images/elements/bottom001.png' class='element'> <img  id='hair' src='images/elements/hair001.png' class='element'> <img src='images/elements/base_v2.png' class='base'> ";

		
		}
		function remove(part){
			var outfit = document.getElementById('doll');
			var imgdiv = document.getElementById(part); 
			if(imgdiv){
				imgdiv.remove();}
			if(part=="bottom"){
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/bottom001.png' class='element'>" ;
				
			}

		
		}
		
		
		function hair_switch(){
			var outfit = document.getElementById('doll');
			var divnohat = document.getElementById("nohat");
			var divwhat = document.getElementById("what");
			if(divnohat){
				divnohat.remove();
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/hairwhat.png' id='what' class='element'>" ;
			}
			if(divwhat){
				divwhat.remove();
				outfit.innerHTML =  outfit.innerHTML+ "<img src='images/elements/hairw0hat.png' id='nohat' class='element'>" ;
			}

		
		}
		
		
		
		
				function remove_one_drag(part){
			var imgdiv = document.getElementById(part); 
			if(imgdiv){
				imgdiv.remove();}
			document.getElementById("move_buttons").style.visibility = "hidden";

		
		}
		function remove_drag(){

			document.querySelectorAll('.drag').forEach(e => e.remove());
		}

		
				function display_on_body(part,name){
		var imgdiv = document.getElementById(part); 
		var outfit = document.getElementById('doll');
		var to_add = '<img class="element" name="'+name+'" id="'+part+'" src="images/elements/'+name+'.png">';
		document.getElementById("move_buttons").style.visibility = "hidden";

		
		if (imgdiv) {
			
			
			var past_part = imgdiv.outerHTML;
			
			imgdiv.remove();
			
			if(past_part !== to_add ){
				outfit.innerHTML =  outfit.innerHTML+to_add ;	
			}

			
			
			
		} 
		else {
			outfit.innerHTML =outfit.innerHTML + to_add ;
		}

		imgdiv.destroy();
		
		
		}
		
		
		
		

				function display_multiple(part,name){
		document.getElementById("move_buttons").style.visibility = "hidden";
		
		var num = parseInt(name.replace ( /[^\d.]/g, '' ),10);
		var imgdiv = document.getElementById(part+num); 
		var outfit = document.getElementById('doll');
		
		var to_add = '<img class="'+part+'" name="'+name+'" id="'+part+num+'" src="images/'+name+'.png" width="15%">';
		

		
		if (imgdiv) {
			var past_part = imgdiv.outerHTML;
			
			imgdiv.remove();
			
			if(past_part !== to_add ){
				outfit.innerHTML = outfit.innerHTML + to_add;	
			}

			
			
			
		} 
		else {
			outfit.innerHTML = outfit.innerHTML + to_add;
		}

		imgdiv.destroy();

		
		 
		
		}
		
		
		
			function display_drag(part,name){

		var outfit = document.getElementById('doll');
		var id_element = part+drag_num;
		
		var to_add = '<img class="drag" name="'+name+'" id="'+id_element+'" src="images/elements/'+name+'.png" onclick="move_element(\''+id_element+'\')">';
		drag_num=drag_num+1;

		outfit.innerHTML = outfit.innerHTML + to_add;
		
		var imgdiv = document.getElementById(id_element);
		imgdiv.style.top = "50%";
		imgdiv.style.left = "25%";
		
		move_element(id_element);
		
		
		
		}
		
			function move_element(id_element){
				var movediv = document.getElementById("move_buttons");
				movediv.style.visibility = "visible";
				
				
				
				movediv.innerHTML = '<img id="movebut" class="removebut" src="images/assets/drag-left.png" onclick="move_on_body(\''+id_element+'\',\'left\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'left\')" onmouseup="stop_move()"> '+
				'<img id="movebut" class="removebut" src="images/assets/drag-down.png" onclick="move_on_body(\''+id_element+'\',\'down\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'down\')" onmouseup="stop_move()"> '+
				'<img id="movebut" class="removebut" src="images/assets/drag-up.png" onclick="move_on_body(\''+id_element+'\',\'up\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'up\')" onmouseup="stop_move()">' +
				'<img id="movebut" class="removebut" src="images/assets/drag-right.png" onclick="move_on_body(\''+id_element+'\',\'right\')" width=100% onmousedown="move_conti(\''+id_element+'\',\'right\')" onmouseup="stop_move()">'+
				'<img id="movebut" class="removebut" src="images/assets/drag-close.png" onclick="remove_one_drag(\''+id_element+'\')" width=100%>';
			
			}
			
			
			function move_on_body (id_elem,direction){
				var imgdiv=document.getElementById(id_elem);
				
				
				if(direction=='left'){
					var num = parseFloat(imgdiv.style.left.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.left = (num-0.2)+"%";
				}
				
				if(direction=='right'){
					var num = parseFloat(imgdiv.style.left.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.left = (num+0.2)+"%";
				}
				if(direction=='up'){
					var num = parseFloat(imgdiv.style.top.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.top = (num-0.2)+"%";
				}
				if(direction=='down'){
					var num = parseFloat(imgdiv.style.top.replace ( /[^\d.]/g, '' ),10);
					imgdiv.style.top = (num+0.2)+"%";
				}
				
				
			}
		


		function move_conti(id_element,direction){
				interval_=setInterval( function(){
				move_on_body(id_element,direction);
				}, 50 );
				
			
		}
		function stop_move (){
			clearInterval(interval_);
		}
		
		function display_info(){
			var movediv = document.getElementById("infopop");
				movediv.style.visibility = "visible";
			
		}
		function close_info(){
			var movediv = document.getElementById("infopop");
				movediv.style.visibility = "hidden";
		}



		
		
		

		