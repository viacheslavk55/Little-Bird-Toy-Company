const products = [
    {
        name: "Wooden Block Set",
        img: ["images/block1.png", "images/block2.png", "images/block3.png", "images/block4.png", "images/block5.png"],
        price: "$29.99",
        description: "Unleash creativity with our premium 72-piece block set, crafted from finely polished hardwood to inspire endless building possibilities. Enclosed in a sleek wooden storage crate, measuring 13” L x 12” W x 2” H, it ensures effortless organization after playtime. This deluxe block set fosters cognitive development and provides hours of engaging entertainment, making it a perfect investment in quality and imagination.",
        reviews: ["Sarah M: \"Absolutely love this block set! As a parent, I'm always looking for toys that encourage my child's creativity, and this set exceeded my expectations. The blocks are beautifully crafted and feel great to the touch. Plus, the storage crate is a game-changer for keeping things tidy. Highly recommend!\"", "David R: \"My kids can't get enough of these blocks! It's amazing to see how they've taken to building and creating their own little worlds. The quality is top-notch, and I appreciate that they're made from natural materials. A fantastic investment for any family looking to foster imagination and fine motor skills.\"", "Ms. Johnson, Elementary School Teacher: \"I bought this block set for my classroom, and it's been a hit with the kids! They love building and experimenting with different designs. The blocks are sturdy and well-made, perfect for withstanding the rigors of daily use. The storage crate is a bonus, helping us keep our classroom organized. Highly recommended for educators!\"", "Emily H: \"This block set is a game-changer for playdates! My child and their friends spend hours constructing everything from forts to race tracks. The blocks are smooth and easy to manipulate, even for little hands. The wooden crate makes cleanup a breeze, and I love that everything has its place. 5 stars all the way!\""]
    },
]
function goBack() {
    window.location.href = "store.html"
}
const headTitle = document.getElementById('title1')
const bodyTitle = document.getElementById('title2')
const img1 = document.getElementById('carouselImg1')
const img2 = document.getElementById('carouselImg2')
const img3 = document.getElementById('carouselImg3')
const img4 = document.getElementById('carouselImg4')
const img5 = document.getElementById('carouselImg5')
const desc = document.getElementById('description')
const review1 = document.getElementById('review1')
const review2 = document.getElementById('review2')
const review3 = document.getElementById('review3')
const review4 = document.getElementById('review4')


function blocks() {
    window.location.href = "shop.html"
    const titleInsert = `<h1>${products[0].name}</h1>`
    bodyTitle.innerHTML += titleInsert
}