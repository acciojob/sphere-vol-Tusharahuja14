function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius=document.getElementById("radius");
	let rval=radius.value;
	let volume=document.getElementById("volume");
			if(isNaN(rval)||rval<0)
			{
				alert("NaN");
			}
			else
			{let pi=Math.PI;
				let res=4/3*(pi*(rval*rval*rval));
			 volume.value=res.toFixed(2);
			}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
