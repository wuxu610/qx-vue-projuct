import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),//初始值
    getters: {// 使用箭头函数
        doubleCount: (state) => state.count * 2,// 如果使用普通函数,不接收state也可以使用this
        doubleCount1() { return this.count * 2 },
    },
    actions: {// 不能使用箭头函数定义，因为使用箭头函数会导致 this 指向错误
        increment() {
            this.count++
            // this.$patch({}) // 批量更新  
            // this.$patch((state) => {});
        },
    },
})

//TODO
// import { defineStore } from "pinia";
// export const countStore = defineStore('counter', {
//     // 推荐使用 完整类型推断的箭头函数
//     state: () => {
//         return {
//             // 所有这些属性都将自动推断其类型
//             counter: 0,
//             name: 'Eduardo',
//             isAdmin: true,
//         }
//     },
//     persist: {
//         enabled: true
//     }
// })  