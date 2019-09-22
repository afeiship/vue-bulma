import NavbarLink from './index.vue';
NavbarLink.install = function(Vue) {
  Vue.component(NavbarLink.name, NavbarLink);
};
export default NavbarLink;
