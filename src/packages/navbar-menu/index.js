import NavbarMenu from './index.vue';
NavbarMenu.install = function(Vue) {
  Vue.component(NavbarMenu.name, NavbarMenu);
};
export default NavbarMenu;
