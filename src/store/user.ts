import { defineStore } from 'pinia' 


// 导出一个用户存储实例
export const useUserStore = defineStore({
    id: 'user', // 存储实例的唯一标识符
    
    // 返回该 store 的初始状态对象
    state: () => {
        return {
            name: '张三'
        }
    },

    //  actions 对象：包含了 store 中可用的操作或方法。
    actions: {
        updateName(name) {
            this.name = name // 用于更新 name 属性的值。通过 this.name = name，可以修改 store 中的 name 属性的值为传入的 name 参数值
        }
    }
})
