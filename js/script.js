// $(document).ready(function(){
//     $('.section-main__text-about').click(function(event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });
// document.querySelector(document).ready(function(){
//     document.querySelector('.section-main__text-about').click(function(event) {
//         document.querySelector(this).classList.toggle('active').nextElementSibling.slideToggle(300);
//     });
// });

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};