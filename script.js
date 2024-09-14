
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// script.js
function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function openTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Hide all tab contents
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active state from all buttons
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab and make the button active
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Set the first tab (Burgers) as active by default
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burgers').classList.add('active');
});

// This function will update the image based on the selected burger, side, or drink
function updateImages() {
    // Get the selected burger
    const selectedBurger = document.querySelector('input[name="burger"]:checked').id;
    const selectedSide = document.querySelector('input[name="side"]:checked').id;
    const selectedDrink = document.querySelector('input[name="drink"]:checked').id;

    // Update the burger image
    if (selectedBurger === 'smoky-bbq') {
        document.getElementById('burger-image').src = './images/chiken smokey bbq.webp'; // Default burger image
    } else if (selectedBurger === 'other-burger') {
        document.getElementById('burger-image').src = './images/chiken spicy.webp'; // Example alternate burger image
    }else if (selectedBurger === 'smoky-viande') {
        document.getElementById('burger-image').src = './images/viande smokey.webp'; // Example alternate burger image
    }else if (selectedBurger === 'toaste') {
        document.getElementById('burger-image').src = './images/toaste pulet fumet.webp'; // Example alternate burger image
    }else if (selectedBurger === 'petittoaste') {
        document.getElementById('burger-image').src = './images/petit toaste.webp'; // Example alternate burger image
    }else if (selectedBurger === 'veggiewrap') {
        document.getElementById('burger-image').src = './images/veggie wrap.webp'; // Example alternate burger image
    }else if (selectedBurger === 'wrap') {
        document.getElementById('burger-image').src = './images/wrap chese.webp'; // Example alternate burger image
    }else if (selectedBurger === 'petitburger') {
        document.getElementById('burger-image').src = './images/veggie burger.webp'; // Example alternate burger image
    }

    // Update the side image
    if (selectedSide === 'fries') {
        document.getElementById('side-image').src = './images/king fries double cheddar.webp'; // Default fries image
    } else if (selectedSide === 'curly-fries') {
        document.getElementById('side-image').src = './images/king fries krispy onions.webp'; // Example curly fries image
    } else if (selectedSide === 'onion-rings') {
        document.getElementById('side-image').src = './images/onion rings.webp'; // Example onion rings image
    } else if (selectedSide === 'salad') {
        document.getElementById('side-image').src = './images/salad.webp'; // Example salad image
    }

    // Update the drink image
    if (selectedDrink === 'cokesanssucre') {
        document.getElementById('drink-image').src = './images/cocacola sans sucre vanille.webp'; // Default Coca Cola image
    } else if (selectedDrink === 'coke') {
        document.getElementById('drink-image').src = './images/cocke og.webp'; // Example Sprite image
    }else if (selectedDrink === 'sprite') {
        document.getElementById('drink-image').src = './images/sprite.webp'; // Example Sprite image
    } else if (selectedDrink === 'fanta') {
        document.getElementById('drink-image').src = './images/fanta sans sucre.webp'; // Example Fanta image
    } else if (selectedDrink === 'water') {
        document.getElementById('drink-image').src = './images/ifry.webp'; // Example water image
    }
}

// Attach event listeners to all radio buttons
document.querySelectorAll('input[name="burger"]').forEach((radio) => {
    radio.addEventListener('change', updateImages);
});
document.querySelectorAll('input[name="side"]').forEach((radio) => {
    radio.addEventListener('change', updateImages);
});
document.querySelectorAll('input[name="drink"]').forEach((radio) => {
    radio.addEventListener('change', updateImages);
});


function bought(){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Votre commande as ete envoye",
    showConfirmButton: false,
    timer: 1500
  });}



