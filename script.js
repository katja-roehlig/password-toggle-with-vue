const { createApp } = Vue;
Vue.createApp({
  data() {
    return {
      content: "password",
      password1: "",
      password2: "",
      display: "",
      conditions: {
        equal: false,
        loweCase: false,
        upperCase: false,
        numbers: false,
        length: false,
      },
    };
  },
  methods: {
    passwordConditions() {
      if (this.password1 === this.password2) {
        this.conditions.equal = true;
      } else {
        this.conditions.equal = false;
      }
      if (this.password1.match(/[a-z]/)) {
        this.conditions.lowerCase = true;
      } else {
        this.conditions.lowerCase = false;
      }
      if (this.password1.match(/[A-Z]/)) {
        this.conditions.upperCase = true;
      } else {
        this.conditions.upperCase = false;
      }
      if (this.password1.match(/\d/)) {
        this.conditions.numbers = true;
      } else {
        this.conditions.numbers = false;
      }
      if (this.password1.length >= 10) {
        this.conditions.length = true;
      } else {
        this.conditions.length = false;
      }
    },
  },
}).mount("#app");
