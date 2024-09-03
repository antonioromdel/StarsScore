window.addEventListener("DOMContentLoaded", () => {

    let stars = document.querySelectorAll(".stars__star")

    stars.forEach((star, index) => {
        
        star.addEventListener('mouseover', () => fillStar(stars, index))
        star.addEventListener('click', () => fillStar(stars, index))

    });

})

const fillStar = (stars, index) => {
    stars.forEach(star => {
        if(star.classList.contains("active")){
            star.classList.remove("active")
        }
    })

    for(let count = 0; count <= index; count++){
        
        let currentStar = stars[count]

        if(!currentStar.classList.contains("active")){
            currentStar.classList.add("active")
        }
    }
}


