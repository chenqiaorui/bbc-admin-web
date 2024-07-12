import { createPinia } from 'pinia'   // 导入createPinia 函数

const store = createPinia() // 调用 createPinia() 函数创建了一个 Pinia 实例，存储在 store 变量中

export default store   // export default 将创建的 Pinia 实例 store 导出，使其可以在应用程序的其他地方使用