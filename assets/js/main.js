$(document).on('click', '.footer-box h4', function(){
    $(this).parent('.footer-box').toggleClass('active')
});

function dropdownOpen(){
    document.getElementById('DropdownMenu').classList.toggle('active')
    document.getElementById('menuItem').classList.toggle('active')
}

function openNav(){
    document.getElementById('navigationMenu').classList.toggle('active')
    document.getElementById('noScroll').classList.toggle('active')
}