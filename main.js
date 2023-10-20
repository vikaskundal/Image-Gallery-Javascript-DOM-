const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imagefilenames=[
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"

]



/* Declaring the alternative text for each image file */

const alttext={
    "pic1.jpg": "A closeup of human eye",
    "pic2.jpg":"An absract pattern of painting",
    "pic3.jpg":"A lot of voilet and white flower",
    "pic4.jpg":"An egypt painting at wall",
    "pic5.jpg":"A yellow  butterfly in a leaf"

}
// transering the src and  alt of targer image to the displayImage
handleClickimage=({target})=>{
    displayedImage.setAttribute('src',target.getAttribute('src'));
    displayedImage.setAttribute('alt',target.getAttribute('alt'));
}
/* Looping through images */

imagefilenames.forEach((imagename) =>{
    const new_image=document.createElement('img');
    new_image.setAttribute('src',`images/${imagename}`);
    new_image.setAttribute('alt', alttext[imagename]);
    thumbBar.appendChild(new_image);
    new_image.addEventListener('click', handleClickimage);
});



/* Wiring up the Darken/Lighten button */

handleButtonclick=()=>{

    let currentClass=btn.getAttribute('class');

    if(currentClass==='dark'){
        btn.textContent='lighten';
        overlay.style.backgroundColor='rgba(0,0,0,0.5)';
        btn.setAttribute('class','light');
    }else{
        btn.textContent='darken';
        overlay.style.backgroundColor='rgba(0,0,0,0)';
        btn.setAttribute('class','dark');
    }

}

btn.addEventListener('click', handleButtonclick);