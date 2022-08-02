function play() {
    var music = new Audio("C:\Users\Yash Gupta\Downloads\07. Phool Tumhe Bheja Hai Khat Mein.mp3");
    music.play();
};

// -----------------------------------------------
const music = new Audio('vande.mp3');

// creat Array
const songs = [
    {
        id: '1',
        songName: ` On My Way <br>
        <div class "subtitle" Alan Waker<div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `Alan Waker-Fade <br>
        <div class "subtitle" Alan Waker<div>`,
        poster: "img/2.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((Element, i) => {
    Element.getElementsByTagName('img')[0].src = song[i].poster;
    Element.getElementsByTagName('h5')[0].src = innerHTML[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.add('active2');

    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-play-fill');
        wave.classList.remove('active2');
    }
})
const makeAllPlays = () =>{
    Array.from(documencementsByClassName('playListPlay')).forEach((Element)=>{
        Element.classist.add('bi-play-circle-fill');
        Element.classList.remove('bi-play-circle-fill');
    
        
    })
}

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        index =e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-play-circle-fill');
        music.src = `audio/${index}.mp3`;

    })
})