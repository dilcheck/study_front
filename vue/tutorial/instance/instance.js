var data = { a: 1 }


//Object.freeze (data) 이렇게 얼리면 더이상 반응성 X


var vm = new Vue({
    el: '#instance-1',
    data: data,
    methods: {
        increaseCountA: function() {
            data.a++
        },
        addInstanceB: function() {
            data.b=1
        },
        increaseCountB: function() {
            /*
                처음부터 객체에 선언되어 있었던 변수가 아니면 값이 변화하더라도
                반응성을 가지지 못한다.
            */
            data.b++
        }
    },
    watch : {
        a: function (newVal, oldVal) {
          // `vm.a`가 변경되면 호출 됩니다.
            console.log(newVal, oldVal)
        }
    }
})

/*  
각각의 요소들을 이렇게 표현 할 수 있음
vm.$el = document.getElementById('instance-1')
    

vm.$watch('a', function (newVal, oldVal) {
    console.log(newVal, oldVal)
    // `vm.a`가 변경되면 호출 됩니다.
})
*/


/* LifeCycle

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 는 vm 인스턴스를 가리킵니다.
    console.log('a is: ' + this.a)
  }
})

options 속성이나 콜백에 created: () => console.log(this.a) 이나 
vm.$watch('a', newValue => this.myMethod()) 와 같은 화살표 함수 사용을 지양하기 바랍니다.
화살표 함수들은 부모 컨텍스트에 바인딩되기 때문에, this 컨텍스트가 호출하는 Vue 인스턴스에서 사용할 경우
Uncaught TypeError: Cannot read property of undefined 또는 Uncaught TypeError: 
this.myMethod is not a function와 같은 오류가 발생하게 됩니다.

----------------------------------------------------------------------------------

위에서 아래의 순서로 진행

Creation : 컴포넌트 초기화 (서버 렌더링에서도 지원)
아직 컴포넌트가 돔에 추가되기 전이기 때문에 돔에 접근하거나 this.$el 사용 불가

    beforeCreate 
    모든 훅 중 가장 먼저 실행
    아직 data와 events(vm.$off 이런거)가 없어서 접근시 오류 발생

    created
    는 data와 events가 활성화 되어 접근 가능

Mounting : DOM 삽입 (서버 렌더링 지원 X)
초기 랜더링 전 DOM을 변경하고자 할 때 이 단계를 사용할 수 있으나 컴포넌트 초기 세팅될 데이터 패치는
created 단계를 사용하는 것이 좋음

    beforeMount
    템플릿과 랜더 함수들이 컴파일 된 후, 첫 랜더링이 일어나기 직전 실행
    대부분의 경우에 사용하지 않는 것이 좋다

    mounted
    컴포넌트, 템플릿, 렌더링된 돔에 접근
    vm.$nextTick를 사용하면 전체가 렌더링된 상태를 보장
    * 부모와 자식 관계의 컴포넌트에서 우리가 생각한 순서로 mounted가 발생하지 않음
    * Created훅은 부모 -> 자식의 순서로 실행되지만 mounted는 그렇지 않다 (자식 -> 부모)

Updating: Diff 및 재 랜더링
컴포넌트에서 사용되는 반응형 속성들이 변경되거나 재 랜더링이 발생되면 실행
디버깅, 프로파일링 등을 위해 컴포넌트 재 렌더링 시점을 알고싶을 경우 사용
    
    beforeUpdate
    데이터가 변하여 업데이트 사이클이 시작될 때 실행
    DOM이 재 랜더링 되고 패치되기 직전
    *재 렌더링 전의 새 상태의 데이터를 얻을 수 있고 더 많은 변경이 가능 
    *하지만 위의 변경으로 이한 재 렌더링은 트리거되지 않음

    updated
    컴포넌트의 데이터가 변하여 재 랜더링이 일어난 후에 실행
    여기서 상태를 변경하면 무한 루프에 빠진 수 있음
    vm.$nextTick를 사용하면 전체가 렌더링된 상태를 보장

Destruction : 해체

    beforeDestroy
    뷰 인스턴스가 제거되기 직전에 실행

    destroyed
    뷰 인스턴스가 제거된 후에 실행


*/