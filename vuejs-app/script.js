const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Salma",
            age: 22,
            link: "test.com",
            number: 0
        };
    },
    methods: {
        sayHi(time, name) {
            return "Good " + time + ', ' + name;
        },
        sayTest: function() {
            return "Loma";
        },
        increment() {
            this.number++;
        },
    }
}).mount("#app-root");