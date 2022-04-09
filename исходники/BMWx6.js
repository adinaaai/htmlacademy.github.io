// alert('hello word');
document.addEventListener('DOMContentLoaded', () => {
    // const logo = document.querySelector('.header__logo')
    // console.log('logo',logo);
    const featureLinkElems = document.querySelectorAll('.feature__link');
    // console.log(document);
    const featureSubElems = document.querySelectorAll('.feature-sub');
    // for (let i = 0;i < footureLin<Elems.length; i++) {
    //     footure_lnkElens[i].addEventListener('click', () => {
    //         footureSubElems[i].classList.toggle('hidden')
    //         footureLinkElcms[i].classList.toggle('footure Link active');
    //     });
    //     console.log('footureLinkElens[i]; '.i.footureLinkElcms[i]);
    // }
    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem) => {
            featureSubElem.classList.add('hidden');
            });
            featureLinkElems.forEach((featureLinkElem) => {
             featureLinkElem.classList.remove('feature__link_active');
            });
            featureSubElems[index].classList.remove('hidden');
            btn.classList.add('feature__link_active');
        });
    });
});
const hendleChange = (isChecked) => {
    if (isChecked){
        document.body.setAttribute('dark','');
    }else{
        document.body.removeAttribute('dark');
    }
}