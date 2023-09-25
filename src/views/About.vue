<template>
    <button @click="btn">点击</button>
    <div>{{ num }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())


const num = ref(0);
const btn = () => {
    num.value += 1
}
</script>
