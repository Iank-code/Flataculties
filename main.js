window.addEventListener('DOMContentLoaded', ()=>{
// buttons variables
const cuteBtn = document.getElementById('cute')
const monkeyBtn = document.getElementById('monkey')
const zebraBtn = document.getElementById('zebra')
const lionBtn = document.getElementById('lion')
const pandaBtn = document.getElementById('panda')



// Displaying a cute cat gif inside the DOM
cuteBtn.addEventListener('click', ()=>{
    const fetchCute = fetch('/db.json')
    fetchCute.then(res => {return res.json()}).then(data =>{renderCute(data.characters)})
    
    function renderCute(data){
        // rendering the image
        const cute = document.querySelector('#cute-path')
        const cuteImg = document.createElement('img')
        cuteImg.src = data[0].image
        cuteImg.alt = 'cute pic'
        /* creating a div that houses the button and */
        const voteSection = document.createElement('div')
        voteSection.style.display = 'flex'
        voteSection.style.flexDirection = 'row-reverse'


        // creating voteNumber inside the idSection div
        let voteNumber = document.createElement('h4')
        voteNumber.style.marginLeft = '6px'
        voteNumber.textContent = data[0].votes 

        voteSection.appendChild(voteNumber)

        // vote button inside the idSections div
        const voteBtn = document.createElement('button')
        voteBtn.style.width = '85px'
        voteBtn.style.background = 'white'
        voteBtn.style.color = 'blue'
        voteBtn.style.border = '2px solid blue'
        voteBtn.textContent = 'Vote for cat'

        voteSection.appendChild(voteBtn)

        cute.appendChild(cuteImg)
        cute.appendChild(voteSection)
        // When voteBtn is pressed, should increase the number of votes for cute cat
        voteBtn.addEventListener('click', ()=>{
            voteNumber.textContent = data[0].votes++
        })
    }
})


// Displaying a monkey gif inside the DOM
monkeyBtn.addEventListener('click', ()=>{
    const fetchCute = fetch('/db.json')
    fetchCute.then(res => {return res.json()}).then(data =>{renderMonkey(data.characters)})
    
    function renderMonkey(data){
        // rendering the image
        const monkey = document.querySelector('#monkey-path')
        const monkeyImg = document.createElement('img')
        monkeyImg.src = data[1].image
        monkeyImg.alt = 'monkey pic'

        /* creating a div that houses the button and */
        const voteSection = document.createElement('div')
        voteSection.style.display = 'flex'
        voteSection.style.flexDirection = 'row-reverse'


        // creating votemonkey inside the idSection div
        const votemonkey = document.createElement('h4')
        votemonkey.style.marginLeft = '6px'
        votemonkey.textContent = 0

        voteSection.appendChild(votemonkey)

        // vote button inside the idSections div
        const voteBtn = document.createElement('button')
        voteBtn.style.width = '85px'
        voteBtn.style.background = 'white'
        voteBtn.style.color = 'blue'
        voteBtn.style.border = '2px solid blue'
        voteBtn.textContent = 'Vote for monkey'

        // When voteBtn is pressed, should increase the number of votes for monkey
        voteBtn.addEventListener('click', ()=>{
            votemonkey.textContent = data[1].votes++
        })
        voteSection.appendChild(voteBtn)

        monkey.appendChild(monkeyImg)
        monkey.appendChild(voteSection)
    }
})



// Displaying a zebra gif inside the DOM
zebraBtn.addEventListener('click', ()=>{
    const fetchCute = fetch('/db.json')
    fetchCute.then(res => {return res.json()}).then(data =>{renderzebra(data.characters)})
    
    function renderzebra(data){
        // rendering the image
        const zebra = document.querySelector('#zebra-path')
        const zebraImg = document.createElement('img')
        zebraImg.src = data[2].image
        zebraImg.alt = 'zebra pic'

        /* creating a div that houses the button and */
        const voteSection = document.createElement('div')
        voteSection.style.display = 'flex'
        voteSection.style.flexDirection = 'row-reverse'


        // creating voteZebra inside the idSection div
        const voteZebra = document.createElement('h4')
        voteZebra.style.marginLeft = '6px'
        voteZebra.textContent = 0

        voteSection.appendChild(voteZebra)

        // vote button inside the idSections div
        const voteBtn = document.createElement('button')
        voteBtn.style.width = '85px'
        voteBtn.style.background = 'white'
        voteBtn.style.color = 'blue'
        voteBtn.style.border = '2px solid blue'
        voteBtn.textContent = 'Vote for zebra'

        // When voteBtn is pressed, should increase the number of votes for zebra
        voteBtn.addEventListener('click', ()=>{
            voteZebra.textContent = data[2].votes++
        })
        voteSection.appendChild(voteBtn)

        zebra.appendChild(zebraImg)
        zebra.appendChild(voteSection)
    }
})


// Displaying a lion gif inside the DOM
lionBtn.addEventListener('click', ()=>{
    const fetchCute = fetch('/db.json')
    fetchCute.then(res => {return res.json()}).then(data =>{renderlion(data.characters)})
    
    function renderlion(data){
        // rendering the image
        const lion = document.querySelector('#lion-path')
        const lionImg = document.createElement('img')
        lionImg.src = data[3].image
        lionImg.alt = 'lion pic'

        /* creating a div that houses the button and */
        const voteSection = document.createElement('div')
        voteSection.style.display = 'flex'
        voteSection.style.flexDirection = 'row-reverse'


        // creating voteLion inside the idSection div
        const voteLion = document.createElement('h4')
        voteLion.style.marginLeft = '6px'
        voteLion.textContent = 0

        voteSection.appendChild(voteLion)

        // vote button inside the idSections div
        const voteBtn = document.createElement('button')
        voteBtn.style.width = '85px'
        voteBtn.style.background = 'white'
        voteBtn.style.color = 'blue'
        voteBtn.style.border = '2px solid blue'
        voteBtn.textContent = 'Vote for lion'

        // When voteBtn is pressed, should increase the number of votes of lion
        voteBtn.addEventListener('click', ()=>{
            voteLion.textContent = data[3].votes++
        })
        voteSection.appendChild(voteBtn)

        lion.appendChild(lionImg)
        lion.appendChild(voteSection)
    }
})


// Displaying a panda gif inside the DOM
pandaBtn.addEventListener('click', ()=>{
    const fetchCute = fetch('/db.json')
    fetchCute.then(res => {return res.json()}).then(data =>{renderpanda(data.characters)})
    
    function renderpanda(data){
        // rendering the image
        const panda = document.querySelector('#panda-path')
        const pandaImg = document.createElement('img')
        pandaImg.src = data[4].image
        pandaImg.alt = 'panda pic'

        /* creating a div that houses the button and */
        const voteSection = document.createElement('div')
        voteSection.style.display = 'flex'
        voteSection.style.flexDirection = 'row-reverse'


        // creating votePanda inside the idSection div
        const votePanda = document.createElement('h4')
        votePanda.style.marginLeft = '6px'
        votePanda.textContent = 0

        voteSection.appendChild(votePanda)

        // vote button inside the idSections div
        const voteBtn = document.createElement('button')
        voteBtn.style.width = '85px'
        voteBtn.style.background = 'white'
        voteBtn.style.color = 'blue'
        voteBtn.style.border = '2px solid blue'
        voteBtn.textContent = 'Vote for panda'

        // When voteBtn is pressed, should increase the number of votes of panda
        voteBtn.addEventListener('click', ()=>{
            votePanda.textContent = data[4].votes++
        })
        voteSection.appendChild(voteBtn)

        panda.appendChild(pandaImg)
        panda.appendChild(voteSection)
    }
})

})


























// data[0].id
// cuteImg.innerHTML = `
// <img src='${data[0].iamge}'`
// cuteImg.setAttribute('src', `${data[0].image}`)