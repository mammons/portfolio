import $ from 'jquery';

class MobileNav{
  constructor(){
    this.siteHeader = $('.site-header');
    console.log(this.siteHeader);
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events()
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    console.log("toggle the mneu");
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileNav;
