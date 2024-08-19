const menuItems = document.querySelectorAll('.menu-item');
const itemDetails = document.querySelector('.item-details');
const largeImage = document.querySelector('.large-image');
const itemName = document.getElementById('item-name');
const itemPrice = document.getElementById('item-price');
const backBtn = document.querySelector('.back-btn');
const addToCartBtn = document.querySelector('.add-to-cart');
const searchBar = document.getElementById('search-bar');
const categoryButtons = document.querySelectorAll('.category-btn');

let currentCategory = 'All';

function filterMenuItems() {
    const searchText = searchBar.value.toLowerCase();

    menuItems.forEach(item => {
        const itemNameText = item.querySelector('h3').textContent.toLowerCase();
        const itemCategory = item.getAttribute('data-category');
        
        if ((itemCategory === currentCategory || currentCategory === 'All') &&
            itemNameText.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        const name = item.querySelector('h3').innerText;
        const price = item.querySelector('p:last-of-type').innerText;

        largeImage.src = imageSrc;
        itemName.innerText = name;
        itemPrice.innerText = price;

        itemDetails.style.display = 'block';
        document.querySelector('.menu-view').style.display = 'none';
    });
});

backBtn.addEventListener('click', () => {
    itemDetails.style.display = 'none';
    document.querySelector('.menu-view').style.display = 'block';
});

searchBar.addEventListener('input', filterMenuItems);

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.getAttribute('data-category');
        filterMenuItems();
    });
});

addToCartBtn.addEventListener('click', () => {
    alert('Thank you for ordering!');
});