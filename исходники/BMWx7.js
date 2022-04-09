//медленно спускается вниз
const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
smothScrollElems.forEach(Link => {
    Link.addEventListener('click', (event) =>{
        event.preventDefault();
        const id = Link.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});