<!-- 展示用户存储对象中的名称属性 -->
<template>
    <div>{{ userStore.name }}</div> <!--展示userStore对象中的name属性-->
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import { userList } from '@/api/api'

const userStore = useUserStore()  // 调用这个函数来获取用户存储对象
const fetUser = async() => {
    let res = await userList()
    // console.log( "***" ,res);
    userStore.updateName(res.name)
}

fetUser()
</script>

 