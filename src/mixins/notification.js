import Vue from "vue";

let mixin = Vue.mixin({
  methods: {
    /**
     * Уведомление в правом верхнем углу
     * @param title - Заголовок
     * @param message - сообщение
     * @param type - тип (success, warning, info, error)
     */
    notification(title, message, type) {
      this.$notify({
        title: title,
        message: message,
        type: type,
      });
    },
  },
});

export default mixin;
