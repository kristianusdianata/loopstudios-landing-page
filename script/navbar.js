function navbarState() {
  let isOpen = false;

  function setState(openState) {
    isOpen = openState;
  }

  function getState() {
    return isOpen;
  }

  return {
    setState,
    getState,
  };
}

export function toggleMobileNavbar() {
  const toggleButton = document.querySelector(`.nav-mobile__button`);
  const body = document.querySelector(`body`);
  const navMenu = document.querySelector(`.nav-mobile__menu`);
  const state = navbarState();

  toggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    const buttonImg = toggleButton.querySelector(`img`);

    const currentState = state.getState();
    state.setState(!currentState);
    const newState = state.getState();

    if (newState) {
      navMenu.classList.add(`nav-mobile__menu--show`);
      navMenu.setAttribute("aria-hidden", "false");
      toggleButton.setAttribute("aria-expanded", "true");
      buttonImg.setAttribute("src", "./images/icon-close.svg");
      body.style.overflow = "hidden";
    } else {
      navMenu.classList.remove(`nav-mobile__menu--show`);
      navMenu.setAttribute("aria-hidden", "true");
      toggleButton.setAttribute("aria-expanded", "false");
      buttonImg.setAttribute("src", "./images/icon-hamburger.svg");
      body.style.overflow = "auto";
    }
  });
}
