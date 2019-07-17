import NavbarBrand from './index.vue';
NavbarBrand.install = function(Vue) {
  Vue.component(NavbarBrand.name, NavbarBrand);
};
export default NavbarBrand;
