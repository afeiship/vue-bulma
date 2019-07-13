import Message from './index.vue';
Message.install = function(Vue) {
  Vue.component(Message.name, Message);
};
export default Message;
