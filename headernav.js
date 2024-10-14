document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
<header class="header-area">

  <!-- site-navbar start -->
  <div class="navbar-area">
    <div class="container">
      <nav class="site-navbar">

        <!-- site logo -->
        <a href="https://coolcat07.net" class="site-logo">Cool Cats Website</a>

        <!-- site menu/nav -->

        <ul>
          <li><a href="https://coolcat07.net">Home</a></li>
          <li><a href="https://coolcat07.net/subdomains">Subdomains map</a></li>
        </ul>

        <!-- nav-toggler for mobile version only -->
        <button class="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
</header>
    `;

    // Insert the header HTML at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

    });
