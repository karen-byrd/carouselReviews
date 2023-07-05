const reviews = [
    {
        id: 1,
        name: 'Melissa McKenna',
        job: 'ux designer',
        img: src = 'images/Melissa_McKenna.png',
        text: 'I love for working for the company, because I get to meet people and interview them.  I enjoy the research and then giving the users what they asked for. Dream job!',
    },
    {
        id: 2,
        name: 'Jacob Williams',
        job: 'web developer',
        img: src = 'images/Jacob_Williams.png',
        text: 'The company is remarkable, I not only got a great job right out of my technology-school, but they are willing to teach me new things.  Great Mentors',
    },
    {
        id: 3,
        name: 'Stella Young',
        job: 'web developer',
        img: src = 'images/Stella_Young.png',
        text: "I have never worked for such a  family like organization.  The company makes everyone feel important and constantly gives us fun things. Bosses are amazing!",
    },
    {
        id: 4,
        name: 'Dylan Bobcat',
        job: 'ui designer',
        img: src = 'images/Dylan_Bobcat.png',
        text: 'Working with the company has taught me so much. I already had the artist skills, but the programs we use are amazing for digital. Awesome company  who will help with learning.',
    },
    {
        id: 5,
        name: 'Jackson Miller',
        job: 'software engineer',
        img: src = 'images/Jackson_Miller.png',
        text: 'Creating dynamic software for the company is truly a gift.  Not only are there termendous mentors to help guide each of us, but we also have fun together.The team dynamics are incredible!',
    },
    {
        id: 6,
        name: 'Joyce Crealess',
        job: 'web developer',
        img: src = 'images/Joyce_Crealess.png',
        text: 'I never thought working for the company would be so much fun. I enjoy creating websites with the design team. Plus we get to see how users enjoy our products.  I could not be more pleased.',
    },
    {
        id: 7,
        name: 'Scott Martin',
        job: 'project engineer',
        img: src = 'images/Scott_Martin.png',
        text: "Great company to work for.  I started as a software engineer and now I am a project engineer.  Put in the work and you will be rewarded.",
    },
    {
        id: 8,
        name: 'Maria Gonzalez',
        job: 'ux designer',
        img: src = 'images/Maria_Gonzalez.png',
        text: 'Been here 5 years and every year it gets better.  I feel comfortable with talking to anyone about anything. The company has embrassed all employees.',
    },
    {
        id: 9,
        name: 'Karina Martinez',
        job: 'web developer',
        img: src = 'images/Karina_Martinez.png',
        text: 'I just started about 6 months ago and I love the experiences I am learning. Everyone from the CEO to the janitors are amazing.  I think I have found my second home.',
    },
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
   showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})