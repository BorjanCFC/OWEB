function start() {
    var carsNew = document.getElementById("carsNew")
    var carsOld = document.getElementById("carsOld")
    
    function filterCarsNew(event) {
        event.preventDefault()
        
        var markaSelect = carsNew.querySelector("#marka")
        var menuvachSelect = carsNew.querySelector("#menuvach")
        var gorivoSelect = carsNew.querySelector("#gorivo")
        var bojaSelect = carsNew.querySelector("#nadvoresna-boja")
        var godinaSelect = carsNew.querySelector("#godina")
        var cars = carsNew.getElementsByClassName("car-block")

        var marka = markaSelect.value
        var menuvach = menuvachSelect.value
        var gorivo = gorivoSelect.value
        var boja = bojaSelect.value
        var godina = godinaSelect.value

        for (var i = 0; i < cars.length; i++) {
            var car = cars[i]
            var carName = car.getElementsByTagName("h3")[0].textContent
            var carDetails = car.getElementsByTagName("p")[0].textContent.split("•")

            var carGodina = carDetails[0].trim()
            var carMenuvach = carDetails[1].trim()
            var carGorivo = carDetails[2].trim()
            var carBoja = car.getElementsByTagName("p")[1].textContent.split("•")[2].trim()

            var match = true

            if (marka !== "Избери Марка" && !carName.includes(marka)) match = false
            if (menuvach !== "Избери Менувач" && carMenuvach !== menuvach) match = false
            if (gorivo !== "Избери Гориво" && carGorivo !== gorivo) match = false
            if (boja !== "Избери Боја" && carBoja !== boja) match = false
            if (godina !== "Избери Година" && carGodina !== godina) match = false

            car.style.display = match ? "block" : "none"
        }
    }

    function filterCarsOld(event) {
        event.preventDefault()
        
        var markaSelect = carsOld.querySelector("#marka")
        var menuvachSelect = carsOld.querySelector("#menuvach")
        var gorivoSelect = carsOld.querySelector("#gorivo")
        var bojaSelect = carsOld.querySelector("#nadvoresna-boja")
        var godinaSelect = carsOld.querySelector("#godina")
        var cars = carsOld.getElementsByClassName("car-block")

        var marka = markaSelect.value
        var menuvach = menuvachSelect.value
        var gorivo = gorivoSelect.value
        var boja = bojaSelect.value
        var godina = godinaSelect.value

        for (var i = 0; i < cars.length; i++) {
            var car = cars[i]
            var carName = car.getElementsByTagName("h3")[0].textContent
            var carDetails = car.getElementsByTagName("p")[0].textContent.split("•")

            var carGodina = carDetails[0].trim()
            var carMenuvach = carDetails[1].trim()
            var carGorivo = carDetails[2].trim()
            var carBoja = car.getElementsByTagName("p")[1].textContent.split("•")[2].trim()

            var match = true;

            if (marka !== "Избери Марка" && !carName.includes(marka)) match = false
            if (menuvach !== "Избери Менувач" && carMenuvach !== menuvach) match = false
            if (gorivo !== "Избери Гориво" && carGorivo !== gorivo) match = false
            if (boja !== "Избери Боја" && carBoja !== boja) match = false
            if (godina !== "Избери Година" && carGodina !== godina) match = false

            car.style.display = match ? "block" : "none"
        }
    }
    
    function resetNew() {
        var cars = carsNew.getElementsByClassName("car-block")
        for (var i = 0; i < cars.length; i++) {
            cars[i].style.display = "block"
        }
    }
    
    function resetOld() {
        var cars = carsOld.getElementsByClassName("car-block");
        for (var i = 0; i < cars.length; i++) {
            cars[i].style.display = "block"
        }
    }
    
    var newSubmitButton = carsNew.querySelector("#submitButton")
    var newResetButton = carsNew.querySelector("#resetButton")
    newSubmitButton.addEventListener("click", filterCarsNew)
    newResetButton.addEventListener("click", resetNew)
    
    var oldSubmitButton = carsOld.querySelector("#submitButton")
    var oldResetButton = carsOld.querySelector("#resetButton")
    oldSubmitButton.addEventListener("click", filterCarsOld)
    oldResetButton.addEventListener("click", resetOld)
    
}

function updateVehicleOptions() {
    var vehicleType = document.getElementById("vehicle-type").value
    var vehicleSelect = document.getElementById("vehicle")

    vehicleSelect.innerHTML = "<option value=''>Изберете автомобил</option>"

    var newCars = [
        { value: "Mercedes-Benz C-Class", text: "Mercedes-Benz C-Class" },
        { value: "BMW 3 Series", text: "BMW 3 Series" },
        { value: "Audi A4", text: "Audi A4" },
        { value: "Porsche Macan", text: "Porsche Macan" },
        { value: "Volkswagen Golf", text: "Volkswagen Golf" },
        { value: "Mercedes-Benz E-Class", text: "Mercedes-Benz E-Class" },
        { value: "BMW 5 Series", text: "BMW 5 Series" },
        { value: "Audi Q5", text: "Audi Q5" },
        { value: "Audi A8", text: "Audi A8" },
        { value: "Volkswagen Tiguan", text: "Volkswagen Tiguan" },
        { value: "Mercedes-Benz CLS", text: "Mercedes-Benz CLS" },
        { value: "BMW 7 Series", text: "BMW 7 Series" }
    ]

    var usedCars = [
        { value: "Mercedes-Benz A 170", text: "Mercedes-Benz A 170" },
        { value: "BMW 118", text: "BMW 118" },
        { value: "Ford Fiesta", text: "Ford Fiesta" },
        { value: "Volkswagen Passat", text: "Volkswagen Passat" },
        { value: "BMW X3", text: "BMW X3" },
        { value: "Mercedes-Benz E-Class", text: "Mercedes-Benz E-Class" },
        { value: "Volkswagen Golf 6", text: "Volkswagen Golf 6" },
        { value: "Ford Focus", text: "Ford Focus" },
        { value: "Audi A6", text: "Audi A6" },
        { value: "Audi Q5", text: "Audi Q5" },
        { value: "Ford Kuga", text: "Ford Kuga" },
        { value: "Volkswagen Jetta", text: "Volkswagen Jetta" }
    ]

    var cars;
    if (vehicleType === "new") {
        cars = newCars
    } else{
        cars = usedCars
    }

    for (var i = 0; i < cars.length; i++) {
        var car = cars[i]
        var option = document.createElement("option")
        option.value = car.value
        option.text = car.text
        vehicleSelect.appendChild(option)
    }
}

function showHome() {
    document.getElementById("main-content").style.display = "block"
    document.getElementById("test-drive-form").style.display = "none"
    document.getElementById("registration-form").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("carsNew").style.display = "none"
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("survey").style.display = "none"
}

function showCarsNew() {
    document.getElementById("main-content").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("registration-form").style.display = "none" 
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("test-drive-form").style.display = "none" 
    document.getElementById("survey").style.display = "none"
    document.getElementById("carsNew").style.display = "block"
}

function showCarsOld() {
    document.getElementById("main-content").style.display = "none"
    document.getElementById("carsNew").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("registration-form").style.display = "none" 
    document.getElementById("test-drive-form").style.display = "none"
    document.getElementById("survey").style.display = "none"    
    document.getElementById("carsOld").style.display = "block"
}

function showRegistrationForm() {
    document.getElementById("main-content").style.display = "none"  
    document.getElementById("carsNew").style.display = "none"
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("test-drive-form").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("survey").style.display = "none"
    document.getElementById("registration-form").style.display = "block"
}

function showTestDrive() {
    document.getElementById("main-content").style.display = "none"
    document.getElementById("carsNew").style.display = "none" 
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("registration-form").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("survey").style.display = "none"
    document.getElementById("test-drive-form").style.display = "block"
}

function showAboutUs() {
    document.getElementById("main-content").style.display = "none"
    document.getElementById("carsNew").style.display = "none"   
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("registration-form").style.display = "none"
    document.getElementById("test-drive-form").style.display = "none"
    document.getElementById("survey").style.display = "none"
    document.getElementById("about-us").style.display = "block"
}

function showSurvey() {
    document.getElementById("main-content").style.display = "none"
    document.getElementById("carsNew").style.display = "none"  
    document.getElementById("carsOld").style.display = "none"
    document.getElementById("registration-form").style.display = "none"
    document.getElementById("test-drive-form").style.display = "none"
    document.getElementById("about-us").style.display = "none"
    document.getElementById("survey").style.display = "block"

}

function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block" 
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none"
}

window.onload = document.getElementById("registration-form").style.display = "none"
window.onload = document.getElementById("carsNew").style.display = "none"
window.onload = document.getElementById("carsOld").style.display = "none"
window.onload = document.getElementById("test-drive-form").style.display = "none"
window.onload = document.getElementById("about-us").style.display = "none"
window.onload = document.getElementById("survey").style.display = "none"
window.onload = document.getElementById("loginPopup").style.display = "none"
window.onload = document.getElementById("imagePopup").style.display = "none"

function submitReg(event) {
    event.preventDefault()
    alert("Успешна регистрација!")
}

document.getElementById("buttonSubmit").addEventListener("click", submitReg)

function submitTestDrive(event) {
    event.preventDefault()
    alert("Успешнo закажување на тест возење")
}

document.getElementById("buttonSubmitTestDrive").addEventListener("click", submitTestDrive)

function submitSurvey(event) {
    event.preventDefault()
    alert("Успешнo доставена анекта")
}

document.getElementById("buttonSubmitSurvey").addEventListener("click", submitSurvey)


var currentImageId = null
var imagesData = {}

function imageClick(img, index) {
    img.addEventListener('click', function () {
        openImagePopup(img.src, index)
    });
}

var images = document.querySelectorAll('.car-block img')

for (var index = 0; index < images.length; index++) {
    var img = images[index]
    imageClick(img, index)
}

function openImagePopup(imageSrc, imageId) {
    currentImageId = imageId

    if (imagesData[imageId] === undefined) {
        imagesData[imageId] = { comments: [] }
    }

    document.getElementById('popupImage').src = imageSrc
    displayComments()
    
    document.getElementById('imagePopup').style.display = 'block'
}

function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none'
    document.getElementById('commentInput').value = ''
}

function addComment() {
    var commentInput = document.getElementById('commentInput')
    var comment = commentInput.value

    if (comment && currentImageId !== null) { 
        var newComment = {
            id: Date.now(), 
            text: comment,
            timestamp: new Date().toLocaleTimeString()
        }
    
        imagesData[currentImageId].comments.push(newComment)
        
        commentInput.value = ''
        displayComments()
    }
}

function deleteComment(commentId) {
    var comments = imagesData[currentImageId].comments

    imagesData[currentImageId].comments = comments.filter(function(comment) {
        return comment.id !== commentId;
    })
    
    displayComments()
}


function displayComments() {
    var commentsContainer = document.getElementById('commentsContainer')
    commentsContainer.innerHTML = ''

    var comments = imagesData[currentImageId].comments 

    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i]

        var commentDiv = document.createElement('div')
        commentDiv.classList.add('comment')

        var commentText = document.createElement('p')
        commentText.textContent = comment.text + ' (' + comment.timestamp + ')'

        var deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = function() {
            deleteComment(comment.id)
        };

        commentDiv.appendChild(commentText)
        commentDiv.appendChild(deleteButton)

        commentsContainer.appendChild(commentDiv)
    }
}

document.getElementById("commentInput").addEventListener("keyup", enterKey)

    function enterKey (event) {

    if (event.key === "Enter") { 
        addComment()
    }
}

window.addEventListener("load", start, false)