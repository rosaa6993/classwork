var slides = [
        {
        image:"https://i.ytimg.com/vi/Z3z1fGK6pcw/maxresdefault.jpg",
        caption: "Hey diddle, diddle, The cat and the fiddle,"
        },
        {                                                                           image:"https://i.pinimg.com/736x/e4/78/c4/e478c4a78d215b572636bc831d027181--the-cow-cows.jpg",
         caption:" The cow jumped over the moon"

        },
        {
        image:"http://i.dailymail.co.uk/i/pix/2013/02/24/article-2283784-183FAAE4000005DC-739_634x499.jpg",
        caption:" The little dog laughed. To see such sport"
        },
     {
        image:"https://rlv.zcache.com/dish_and_spoon_postcard-r28a029c3b45e4cbe8097762d0df550de_vgbaq_8byvr_324.jpg",
        caption:"And the dish ran away with the spoon."
        },
     
    {
        image:"https://t4.ftcdn.net/jpg/01/32/74/69/240_F_132746916_suUD2z9tViIqK2PdqACP0azm6mDJ7i4q.jpg",
        caption:" "
        },
];
for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    var slideElement = document.createElement("div");
    var image = new Image();
    var cap = document.createElement("p");

    image.src = slide.image;
    cap.textContent = slide.caption;
    slideElement.appendChild(image);
    slideElement.appendChild(cap);
    document.body.appendChild(slideElement);
}