var data = {msg : "hello"}

var vm = new Vue({
    el : "#template-1",
    data : data,
    methods : {
        changeMessage : function() {
            console.log("hi")
            data.msg = "nice to meet you"
        }
    }
})