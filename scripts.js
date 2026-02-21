const imagePool = [
    "meow0.jpg",
    "meow1.jpg",
    "meow2.jpg",
    "meow3.jpg",
    "meow4.jpg",
    "meow5.jpg",
    "meow6.jpg",
    "meow7.jpg",
    "meow8.jpg",
    "meow9.jpg",
    "meow10.jpg",
    "meow11.jpg",
    "meow12.jpg",
    "meow13.jpg",
    "meow14.jpg",
    "meow15.jpg",
    "meow16.jpg",
    "meow17.jpg"
];
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    return "Pictures/Meow/" + imagePool[randomIndex];
}
function showRandomImage() {
    const popup = document.getElementById('popup');
    const imgElement = document.getElementById('random-image');
    imgElement.src = getRandomImage();
    popup.style.display = 'flex';
}
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
           hidePopup();
    }
});


