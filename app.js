


// reviews data
const reviews = [
    {
        id: 1,
        name: "Winifred",
        job: "Teacher",
        img: "./img/winifred.png",
        text:
        "This product is very thick and gloopy and takes a few minutes to seek in and even then your face will feel sticky to the touch. I won’t buy it again. I’m not going to return it because I will use it up - not just on my face, but neck and chest area, and the top of my hands. Oh well…",

    },
    {
        id: 2,
        name: "Sarah",
        job: "Design",
        img: "./img/sarah.png",
        text:
        "I got a free sample of Drops of Youth and loved it. Made my skin feel so soft and silky so I bought this one which was supposed to be the same but re branded. Definitely not the same, leaves my skin feeling tight and sticky and like I need to moisturise afterwards. Wish I didn’t spend the money on this!",
    },
    {
        id: 3,
        name: "Mary",
        job: "Engineer",
        img: "./img/mary.png",
        text: "I got a free sample of the original Drops of Youth and absolutely loved it. So when I could afford it I bought a large bottle but the name had changed to edelweiss. It’s not quite same, still nice but not the game changer it was. I liked applying some Drops of Youth lol",
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