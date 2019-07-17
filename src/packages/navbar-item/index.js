import NavbarItem from './index.vue';
NavbarItem.install = function(Vue) {
  Vue.component(NavbarItem.name, NavbarItem);
};
export default NavbarItem;
