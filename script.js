const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index *100}%`;
    }
)

const slideimage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform= `translateX(-${counter *100}%)`;
        }
    )
}
const goprev=()=>{
    counter--;
    slideimage();
}
const goNext=()=>{
    counter++;
    if(counter>=slides.length){
        counter=0;
    }
    slideimage();
}
