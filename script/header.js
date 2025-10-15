export function setNavmenuPadding() {
  const headerLogo = document.querySelector(`.header__logo`);
  const headerLogoRect = headerLogo.getBoundingClientRect();
  const navMenu = document.querySelector(`.nav__list`);

  navMenu.style.paddingLeft = `${headerLogoRect.left - 20}px`;
}
