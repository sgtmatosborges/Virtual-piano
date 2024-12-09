const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedkeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active");
    setTimeout(() =>{
        clickedkey.classList.remove("active");
    }, 150);
};

pianokeys.forEach((key)=>{
    key.addEventListener("click", ()=> playTune(key.dataset.key)); 
    mapedkeys.push(key.dataset.key); 
});



document.addEventListener("keydown", (e) =>{
    if(mapedkeys.includes(e.key)){
        playTune(e.key);
    }
    
});
const handleVolume = (e) =>{
   audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);


const showHideKeys = ()=>{
    pianokeys.forEach(key => key.classList.toggle("hide"));
}
keysCheck.addEventListener("click", showHideKeys);