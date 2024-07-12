<!-- 展示用户存储对象中的名称属性 -->
<template>
     <el-row>
        <el-button type="primary" size="large">Large</el-button>
     </el-row>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()  // 调用这个函数来获取用户存储对象
</script>

 