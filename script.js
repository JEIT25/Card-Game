let allCardImg = document.querySelectorAll('div img');
let shuffleBtn = document.querySelector('.shuffle');
let allCards = document.querySelectorAll('.card');
let canvas = document.querySelector('#confetti')
let resetBtn = document.querySelector('.reset');
const jsConfetti = new JSConfetti()
let isFlipped = false
let lockCards = false
let shuffleCount = 0
let matchedCards = 0
let counter = 0;
let secondCard;
let firstCard;

//Flip Animation For each card
function flipAnimation() {
    this.classList.toggle('flip-animation')
}

//Class toggles for each Card IMG
function flipCard() {
    // First Card
    if (!isFlipped && !lockCards) {
        counter += 1
        this.classList.toggle('flipped')
        firstCard = this
        isFlipped = true;
        //Second Card
    } else if (!lockCards && this.classList.value === '') {
        counter += 1
        this.classList.toggle('flipped')
        secondCard = this
        lockCards = true
    } else {
        return
    }
    //Matched CARD
    if (secondCard.dataset.animal === firstCard.dataset.animal) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        isFlipped = false
        lockCards = false
        firstCard = null
        secondCard = null
        counter = 0
        matchedCards += 1
        // CARDS DID NOT MATCHED
    } else {
        firstCard.classList.toggle('shake-animation');
        secondCard.classList.toggle('shake-animation');
        if (counter === 2 && matchedCards < 5) {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.classList.remove('shake-animation');
                secondCard.classList.remove('shake-animation');
                isFlipped = false
                lockCards = false
                firstCard = null
                secondCard = null
                counter = 0
            }, 1200)
        }
    }
    //Congratulations Prompt , checking if all cards are matched
    if (matchedCards === 5) {
        setTimeout((() => {
            alert('Congratulations! You Guessed All Cards Correctly!!')
            jsConfetti.addConfetti()
        }), 200)
    }
}

//Shuffle Cards
shuffleBtn.addEventListener('click', shuffleCards => {
    let animalObj = {
        0: "animal-pictures/tiger.jpg",
        1: "animal-pictures/parrot.jpg",
        2: "animal-pictures/fox.jpg",
        3: "animal-pictures/dolphin.jpg",
        4: "animal-pictures/frog.jpg"
    }

    if (matchedCards == 0 && counter == 0) {
        if (shuffleCount == 0) {
            allCardImg[0].src = animalObj[2]
            allCardImg[1].src = animalObj[0]
            allCardImg[2].src = animalObj[2]
            allCardImg[3].src = animalObj[3]
            allCardImg[4].src = animalObj[4]
            allCardImg[5].src = animalObj[0]
            allCardImg[6].src = animalObj[1]
            allCardImg[7].src = animalObj[3]
            allCardImg[8].src = animalObj[4]
            allCardImg[9].src = animalObj[1]
            allCardImg[0].dataset.animal = 'fox'
            allCardImg[1].dataset.animal = 'tiger'
            allCardImg[2].dataset.animal = 'fox'
            allCardImg[3].dataset.animal = 'dolphin'
            allCardImg[4].dataset.animal = 'frog'
            allCardImg[5].dataset.animal = 'tiger'
            allCardImg[6].dataset.animal = 'parrot'
            allCardImg[7].dataset.animal = 'dolphin'
            allCardImg[8].dataset.animal = 'frog'
            allCardImg[9].dataset.animal = 'parrot'
            shuffleCount += 1
        } else if (shuffleCount == 1) {
            allCardImg[8].src = animalObj[4]
            allCardImg[9].src = animalObj[0]
            allCardImg[7].src = animalObj[2]
            allCardImg[6].src = animalObj[3]
            allCardImg[5].src = animalObj[2]
            allCardImg[4].src = animalObj[0]
            allCardImg[3].src = animalObj[1]
            allCardImg[2].src = animalObj[3]
            allCardImg[0].src = animalObj[4]
            allCardImg[1].src = animalObj[1]
            allCardImg[0].dataset.animal = 'frog'
            allCardImg[1].dataset.animal = 'parrot'
            allCardImg[2].dataset.animal = 'dolphin'
            allCardImg[3].dataset.animal = 'parrot'
            allCardImg[4].dataset.animal = 'tiger'
            allCardImg[5].dataset.animal = 'fox'
            allCardImg[6].dataset.animal = 'dolphin'
            allCardImg[7].dataset.animal = 'fox'
            allCardImg[8].dataset.animal = 'frog'
            allCardImg[9].dataset.animal = 'tiger'
            shuffleCount += 1
        } else {
            allCardImg[8].src = animalObj[4]
            allCardImg[9].src = animalObj[3]
            allCardImg[7].src = animalObj[4]
            allCardImg[6].src = animalObj[2]
            allCardImg[5].src = animalObj[1]
            allCardImg[4].src = animalObj[3]
            allCardImg[3].src = animalObj[0]
            allCardImg[2].src = animalObj[2]
            allCardImg[0].src = animalObj[1]
            allCardImg[1].src = animalObj[0]
            allCardImg[0].dataset.animal = 'parrot'
            allCardImg[1].dataset.animal = 'tiger'
            allCardImg[2].dataset.animal = 'fox'
            allCardImg[3].dataset.animal = 'tiger'
            allCardImg[4].dataset.animal = 'dolphin'
            allCardImg[5].dataset.animal = 'parrot'
            allCardImg[6].dataset.animal = 'fox'
            allCardImg[7].dataset.animal = 'frog'
            allCardImg[8].dataset.animal = 'frog'
            allCardImg[9].dataset.animal = 'dolphin'
            shuffleCount = 0
        }
        alert('shuffled!')
    } else {
        alert("Reset First!")
    }
});

// Reset Card Game
resetBtn.addEventListener('click', shuffleCards => {
    let animalObj = {
        0: "animal-pictures/tiger.jpg",
        1: "animal-pictures/parrot.jpg",
        2: "animal-pictures/fox.jpg",
        3: "animal-pictures/dolphin.jpg",
        4: "animal-pictures/frog.jpg"
    }

    isFlipped = false
    lockCards = false
    firstCard = null
    secondCard = null
    shuffleCount = 0
    counter = 0
    allCardImg[0].src = animalObj[0]
    allCardImg[1].src = animalObj[1]
    allCardImg[2].src = animalObj[2]
    allCardImg[3].src = animalObj[3]
    allCardImg[4].src = animalObj[4]
    allCardImg[5].src = animalObj[0]
    allCardImg[6].src = animalObj[1]
    allCardImg[7].src = animalObj[2]
    allCardImg[8].src = animalObj[3]
    allCardImg[9].src = animalObj[4]
    allCardImg[0].dataset.animal = 'tiger'
    allCardImg[1].dataset.animal = 'parrot'
    allCardImg[2].dataset.animal = 'fox'
    allCardImg[3].dataset.animal = 'dolphin'
    allCardImg[4].dataset.animal = 'frog'
    allCardImg[5].dataset.animal = 'tiger'
    allCardImg[6].dataset.animal = 'parrot'
    allCardImg[7].dataset.animal = 'fox'
    allCardImg[8].dataset.animal = 'dolphin'
    allCardImg[9].dataset.animal = 'frog'
    for (let img of allCardImg) {
        img.classList.remove('flipped')
        isFlipped = false
        lockCards = false
        firstCard = null
        secondCard = null
        matchedCards = 0
        counter = 0
        allCardImg.forEach(cardImg => cardImg.addEventListener('click', flipCard));
    }
    alert('Game is Resetted!')
});

allCards.forEach(card => card.addEventListener('click', flipAnimation));
allCardImg.forEach(cardImg => cardImg.addEventListener('click', flipCard));

















