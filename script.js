//your code here
const parent=document.getElementById("parent");
let setImage=null;

parent.addEventListener("dragstart" , (e) =>{
	setImage=e.target;
});

parent.addEventListener("dragover"  ,(e)=>{
	e.preventDefault();
});
parent.addEventListener("drop" ,(e) =>{
	e.preventDefault();
	if(setImage !== null){
		swapImage(setImage , e.target);
		setImage=null;
	}
});

function swapImage(image1,image2){
	const image1Index = Array.from(parent.children).indexOf(image1);
	const image1Index = Array.from(parent.children).indexOf(image1);

	const tempBackground = image1.style.backgroundImage;
	image1.style.backgroundImage = image2.style.backgroundImage;
	image2.style.backgroundImage = tempBackground;

	const tempText = image1.textContent;
	image1.textContent=image1.textContent;
	image2.textContent=tempText;
}