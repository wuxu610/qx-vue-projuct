<template>
    <div>
        测试
    </div>
    <div>
        {{ counterStore.count }}
    </div>
    <div>
        <el-button type="primary" @click="btnLogin">登陆</el-button>
    </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import { login } from '@/http'
export default {
    setup() {
        const counterStore = useCounterStore();
        console.log("counterStore", counterStore.count);
        return {
            counterStore
        }
    },
    methods: {
        async btnLogin() {
            const data = {
                "email": "414090297@qq.com",
                "password": "12345678"
            }
            login(data).then(function (res) {
                console.log(res.data);
            }).catch(function (err) {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>