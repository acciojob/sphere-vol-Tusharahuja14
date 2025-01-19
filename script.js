function volume_sphere(event) {
    //Write your code here
if(event){	event.preventDefault();}
	let radius=document.getElementById("radius");
let rval = parseFloat(radius.value);
	let volume=document.getElementById("volume");
			if(isNaN(rval)||rval<0)
			{
				volume.value="NaN";
			}
			else
			{let pi=Math.PI;
				let res=4/3*(pi*(rval*rval*rval));
			 volume.value=res.toFixed(4);
			}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
