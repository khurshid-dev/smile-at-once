function burgerMenu() {
    const burgerList = document.querySelector('.burger-menu-list');
    const burger = document.querySelector('.burger');
    const burgerLink = document.querySelectorAll('.burger-menu-list ul li a');


    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerList.classList.toggle('active');
    });

    burgerLink.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.toggle('active');
            burgerList.classList.toggle('active');
        })
    })

}
burgerMenu();




