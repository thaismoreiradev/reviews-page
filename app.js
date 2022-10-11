


// reviews data
const reviews = [
    {
        id: 1,
        name: "Samara",
        job: "teacher",
        img: "",
        text:
        "kajaaaaaajjjjjjoaoakoakoa ajajajia anhaahuuhs fhghguug eeuduudu ajaoaoka hahuaha ahajjiaieognnvnnvnvnvnv",

    },
        {
        id: 2,
        name: "Molly",
        job: "Design",
        img: "",
        text:
        "kajaaaaaajjjjjjoaoakoakoa ajajajia anhaahuuhs fhghguug eeuduudu ajaoaoka hahuaha ahajjiaieognnvnnvnvnvnv",
    }
]

//  items
const img = document.querySelector("#person-img")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")

const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")

// starting item
let currentItem = 0

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
})

// show person based on item
const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}

//  show next person 
nextBtn.addEventListener("click", function () {
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
})

// show previous person
prevBtn.addEventListener("click", function() {
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson();
})