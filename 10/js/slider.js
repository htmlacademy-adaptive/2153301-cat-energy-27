const slider=document.querySelector(".slider"),range=slider.querySelector(".slider__range"),leftImage=slider.querySelector(".slider__half-wrapper--left"),rightImage=slider.querySelector(".slider__half-wrapper--right");leftImage.style.width=`${range.value}%`,rightImage.style.width=100-range.value+"%",range.addEventListener("input",(()=>{leftImage.style.width=`${range.value}%`,rightImage.style.width=100-range.value+"%"}));