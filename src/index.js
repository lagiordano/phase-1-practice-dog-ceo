console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", initialize);

function initialize () {

    

    // CHallenge 1

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(images => {
        const div = document.querySelector("#dog-image-container");
        images.message.forEach( (image) => {
            const img = document.createElement("img");
            img.src = image;
            div.appendChild(img);
        });
    });






    // Challenge 2

    const ul = document.querySelector('#dog-breeds');
    let breedsObject = {};
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(breeds => {
        breedsObject = {...breeds.message};

        for (breed in breedsObject) {
            let breedValue = breedsObject[breed];
            if (breedValue.length > 0) {
                breedValue.forEach( (subBreed) => {
                    const li = document.createElement("li");
                    li.textContent = `${breed} ${subBreed}`;
                    ul.appendChild(li);
                });
            } else {
                const li = document.createElement("li");
                li.textContent = breed;
                ul.appendChild(li);
            };
        };
    });
   
    // Challenge 3 

    ul.addEventListener("click", e => {
        if(e.target.tagName === "LI") {
            e.target.style.color = "green";
        };
    });


    // Challenge 4
    
    const dropDown = document.querySelector("#breed-dropdown");


    dropDown.addEventListener("change", (e) => {
        let selected = dropDown.value;
        ul.textContent = "";
        for (breed in breedsObject) {
            if (breed[0] === selected) {
                if (breedsObject[breed].length > 0) {
                    breedsObject[breed].forEach(subBreed => {
                        let li = document.createElement("li");
                        li.innerHTML = breed + " " + subBreed;
                        ul.appendChild(li);
                    });
                } else {
                    let li = document.createElement("li");
                    li.innerHTML = breed;
                    ul.appendChild(li);
                };
            };
        };
    });
        
    



};
