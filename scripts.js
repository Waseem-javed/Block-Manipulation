window.addEventListener('load',function(){

		//Container block
		let body = document.getElementById('body');
		let block =  document.getElementById('block');
		let scaleCoef = 1;
		let rotateDeg = 0;
		//Position x and y
		let posX = document.getElementById('posX');
		let posY = document.getElementById('posY');

		//size 
		let size = document.getElementById('size');
		//opacity
		let opacity = document.getElementById('opacity');

		posX.addEventListener('input',function(){
			block.style.left = posX.value + "px";
		})

		posY.addEventListener('input',function(){
			block.style.top = posY.value + "px";
		})

		size.addEventListener('input',function(){
			scaleCoef = size.value;
			block.style.transform = `scale(${size.value}) rotate(${rotateDeg}deg)`;
		});

		opacity.addEventListener('input',function(){
			block.style.opacity = opacity.value;
		});


		//shape selector
		let selector = document.getElementById('shape-selector');
		//ok shape button
		let shapeOk = document.getElementById('ok-shape');

		shapeOk.addEventListener('click',function(){
			let option = selector.value;
			if(option === '1'){
				block.style.borderRadius = '0';
				rotateDeg = 0;
				block.style.transform = `scale(${size.value}) rotate(${rotateDeg}deg)`;
			}else if(option === '2'){
				block.style.borderRadius = 100+"px";
			}else if(option === '3'){
				block.style.borderRadius = "0";
				rotateDeg = 45;
				block.style.transform = `scale(${size.value}) rotate(${rotateDeg}deg)`;
			}
		});


		//hex color
		let hex = document.getElementById('hex');

		hex.addEventListener('keyup',function(e){
			if(e.key === 'Enter') block.style.backgroundColor = `#${hex.value}`;
		});


		//rgba colors
		let rgbaR = document.getElementById('rgba-r');
		let rgbaG = document.getElementById('rgba-g');
		let rgbaB = document.getElementById('rgba-b');
		let rgbaA = document.getElementById('rgba-a');

		let rgbaInputs = document.querySelectorAll('.rgba-container');

		rgbaInputs.forEach(function(element){
			element.addEventListener('input',function(){
				let color = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`;
				body.style.backgroundColor = color;
				block.style.backgroundColor = color;
			})
		})

})