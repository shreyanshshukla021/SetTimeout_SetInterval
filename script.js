var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 1001;
// // set initial value of the count to be displayed on page load

let count = 1;

setInterval(()=> {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
},1);


setTimeout( () =>{
    followers.innerText = "Followers on Instagram !"
},10000);