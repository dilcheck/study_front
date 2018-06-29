var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    },
    methods: {
        changeStatus: function() {
            this.seen = !this.seen
        }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' }
      ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: '안녕하세요! Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('') //객체의 개념을 가지고 있음
      }
    }
})
  
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '안녕하세요 Vue!'
    }
})

Vue.component('todo-item', {
    // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
    // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
    // 이 prop은 test라는 이름으로 정의했습니다.
    props: ['test'],
    template: '<li>{{ test.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})