const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Salma",
            age: 22,
            link: "test.com"
        };
    },
    methods: {
        sayHi(time, name) {
            return "Good " + time + ', ' + name;
        },
        sayTest: function() {
            return "Loma";
        }
    }
}).mount("#app-root");