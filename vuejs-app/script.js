new Vue({
    el: "#app-root",
    data: {
        name: "Mohamed",
        signature: "Salma"
    },
    methods: {
        great: function(time) {
            return "Good " + time + ', ' + this.name
        }
    }
})