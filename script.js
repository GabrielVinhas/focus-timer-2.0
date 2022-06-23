const body = document.querySelector('body')

const sun = document.querySelector('.light')
const moon = document.querySelector('.dark')

const timer = document.querySelector('.timer')

const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const minutesUp = document.querySelector('.minutes-up')
const minutesDown = document.querySelector('.minutes-down')

const tree = document.querySelector('#tree')
const cloud = document.querySelector('#cloud')
const cafeteria = document.querySelector('#cafeteria')
const firePlace = document.querySelector('#fire-place')

const forestAudio = new Audio("./sounds/floresta.wav")
const rainAudio = new Audio("./sounds/chuva.wav")
const cafeteriaAudio = new Audio("./sounds/cafeteria.wav")
const firePlaceAudio = new Audio("./sounds/lareira.wav")

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

let selectedCard = document.querySelector('.selected-card')

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function stopTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown () {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if(minutes <= 0) {
            return
        }
         
        if (seconds <= 0) {
            seconds = 60
            
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)
}

function forestSoundToggle() {
    if(forestAudio.paused) {
        forestAudio.play()
    } else {
        forestAudio.pause()
    }
} 

function rainSoundToggle() {
    if(rainAudio.paused) {
        rainAudio.play()
    } else {
        rainAudio.pause()
    }
}

function cafeteriaSoundToggle() {
    if(cafeteriaAudio.paused) {
        cafeteriaAudio.play()
    } else {
        cafeteriaAudio.pause()
    }
}

function firePlaceSoundToggle() {
    if(firePlaceAudio.paused) {
        firePlaceAudio.play()
    } else {
        firePlaceAudio.pause()
    }
}

function dark() {
    sun.classList.add('dark')
    moon.classList.remove('dark')
    
    body.classList.add('dark-body')
    timer.classList.add('dark-timer')

    play.classList.add('dark-options')
    stop.classList.add('dark-options')
    minutesUp.classList.add('dark-options')
    minutesDown.classList.add('dark-options')

    tree.classList.add('dark-button')
    cloud.classList.add('dark-button')
    cafeteria.classList.add('dark-button')
    firePlace.classList.add('dark-button')
}

function light() {
    moon.classList.add('dark')
    sun.classList.remove('dark')

    body.classList.remove('dark-body')
    timer.classList.remove('dark-timer')

    play.classList.remove('dark-options')
    stop.classList.remove('dark-options')
    minutesUp.classList.remove('dark-options')
    minutesDown.classList.remove('dark-options')

    tree.classList.remove('dark-button')
    cloud.classList.remove('dark-button')
    cafeteria.classList.remove('dark-button')
    firePlace.classList.remove('dark-button')
}



play.addEventListener('click', function() {
    countDown()
})

stop.addEventListener('click', function() {
    stopTimer()
})

minutesUp.addEventListener('click', function() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

minutesDown.addEventListener('click', function() {
    minutesDisplay.textContent = String((minutesDisplay.textContent) - 5).padStart(2, "0")

    if(minutesDisplay.textContent <= 0) {
        (minutesDisplay.textContent = 0)
    }
})

tree.addEventListener('click', function() {
    tree.classList.toggle('selected-card')

    cloud.classList.remove('selected-card')
    cafeteria.classList.remove('selected-card')
    firePlace.classList.remove('selected-card')

    forestSoundToggle()
    rainAudio.pause()
    cafeteriaAudio.pause()
    firePlaceAudio.pause()
})

cloud.addEventListener('click', function() {
    cloud.classList.toggle('selected-card')

    tree.classList.remove('selected-card')
    cafeteria.classList.remove('selected-card')
    firePlace.classList.remove('selected-card')

    rainSoundToggle()
    forestAudio.pause()
    cafeteriaAudio.pause()
    firePlaceAudio.pause()
})

cafeteria.addEventListener('click', function() {
    cafeteria.classList.toggle('selected-card')

    tree.classList.remove('selected-card')
    cloud.classList.remove('selected-card')
    firePlace.classList.remove('selected-card')

    cafeteriaSoundToggle()
    forestAudio.pause()
    rainAudio.pause()
    firePlaceAudio.pause()
})

firePlace.addEventListener('click', function() {
    firePlace.classList.toggle('selected-card')

    tree.classList.remove('selected-card')
    cloud.classList.remove('selected-card')
    cafeteria.classList.remove('selected-card')

    firePlaceSoundToggle()
    forestAudio.pause()
    rainAudio.pause()
    cafeteriaAudio.pause()
})

sun.addEventListener('click', function() {
    dark()
})

moon.addEventListener('click', function() {
    light()
})