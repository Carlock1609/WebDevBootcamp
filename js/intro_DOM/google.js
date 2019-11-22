// srcset
// select logo
let logo = document.querySelector("#hplogo")
// change logo
logo.setAttribute("srcset", "https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg")

// change the width and height OR border
logo.style.width = "500px"
logo.style.height = "272px"

// prints all links name
let links = document.getElementsByTagName("a");
for(let i = 0; i < links.length; i++) {
    console.log(links[i].textContent)
}

// changes background color
for(let i = 0; i < links.length; i++) {
    links[i].style.background = "pink"
}

// changes border and color
for(let i = 0; i < links.length; i++) {
    links[i].style.border = "1px dashed purple"
    links[i].style.color = "orange"
}

// shows all clickable links
for(let i = 0; i < links.length; i++) {
	console.log(links[i].getAttribute("href"));
}

// changes all links
for(let i = 0; i < links.length; i++) {
    links[i].setAttribute("href", "http://www.bing.com/")
}

// changing bing logo
let logo = document.querySelector(".a11yhide")
logo.textContent = "Google"
hp_sw_logo hpcLogoWhite