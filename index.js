

let image = document.querySelector('img')
const nameOfUser = document.querySelector('.name-of-user')
const job = document.querySelector('.job')
const writtenReview = document.querySelector('.written-review')
const backBtn = document.querySelector('.back-btn')
const frontBtn = document.querySelector('.front-btn')
const supriseBtn = document.querySelector('.suprise-btn')

const reviews = [
    {
        id: 1,
        name: "jaye jackson",
        job: "Developer",
        img: "/image/boy.png",
        text: "would really love to work with you some other times bacause i really love the job you did for me"
    },
    {
        id: 2,
        name: "susan Pill",
        job: "cashier",
        img: "/image/profile1.jpg",
        text: "A big respect to you for the job you did,i really love what you did in the project that was given to you,you are such an awesome person "
    },
    {
        id: 3,
        name: "Jane rill",
        job: "plumber",
        img: "/image/profile2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus aliquid doloremque optio inventore assumenda aliquam deserunt quae rem provident cum voluptas, quidem nostrum repellat quod ducimus quibusdam suscipit. Rem!"
    },
    {
        id: 4,
        name: "jack skill",
        job: "UI/UX Designer",
        img: "/image/profile3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus aliquid doloremque optio inventore assumenda aliquam deserunt quae rem provident cum voluptas, quidem nostrum repellat quod ducimus quibusdam suscipit. Rem!"
    }
]

window.addEventListener('DOMContentLoaded', () => {
    image.setAttribute("src", `${reviews[0].img}`)
    nameOfUser.innerText = reviews[0].name;
    job.innerText = reviews[0].job;
    writtenReview.innerText = reviews[0].text;
})


let counter = 0

frontBtn.addEventListener('click', () => {
    counter++

    if (counter === reviews.length) {
        counter = 0
    }
    image.setAttribute("src", `${reviews[counter].img}`)
    nameOfUser.innerText = reviews[counter].name;
    job.innerText = reviews[counter].job;
    writtenReview.innerText = reviews[counter].text;


})
backBtn.addEventListener('click', () => {
    counter--

    if (counter < 0) {
        counter = reviews.length - 1
    }
    image.setAttribute("src", `${reviews[counter].img}`)
    nameOfUser.innerText = reviews[counter].name;
    job.innerText = reviews[counter].job;
    writtenReview.innerText = reviews[counter].text;
})

supriseBtn.addEventListener('click', () => {
    counter = generateRandomNumber()
    image.setAttribute("src", `${reviews[counter].img}`)
    nameOfUser.innerText = reviews[counter].name;
    job.innerText = reviews[counter].job;
    writtenReview.innerText = reviews[counter].text;
})

function generateRandomNumber() {
    let randomNo = Math.floor(Math.random() * reviews.length)
    return randomNo
}

generateRandomNumber()