<template>
    <div class="login-layout">
        <el-container>
            <el-header height="180px" class="login-image">
                <div class="image-circle">
                    <img src="@/images/loginpig.jpeg" class="login-image_round">
                </div>
            </el-header>
            <el-main class="login-dem">
                <el-form :model="form">
                    <el-form-item label="用户账号：" prop="name">
                        <el-input v-model="form.name" placeholder="请输入用户账号" />
                    </el-form-item>
                    <el-form-item label="用户密码：" prop="password">
                        <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <el-form-item class="login-btn">
                        <el-button class="login-btn_submit" type="primary" @click="onSubmit">登陆</el-button>
                    </el-form-item>
                    <div class="login-txtBtn">
                        <p>还没有账号?</p>
                        <p class="login-txtBtn_register" @click="onRegister">立即注册</p>
                    </div>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus';
const router = useRouter();
const form = ref({
    name: '',
    password: '',
})

const onSubmit = () => {
    if (!form.value.name || !form.value.password) {
        ElMessage.error('帐号和密码为必填项');
    } else {
        console.log('submit!');
        router.push("/index");
    }
}

const onRegister = () => {
    console.log('register!');
    router.push("/register");
}
</script>

<style>
.login-image {
  display: flex;
  justify-content: center;
}

.login-image_round {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.image-circle {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a0cfff; 
  border-radius: 50%; 
}

.el-form-item__content {
  display: flex;
  justify-content: center;
}

.el-form-item {
  margin-bottom: 24px;
}

.el-button {
    width: 100%;
}

.login-txtBtn {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
}
.login-txtBtn_register {
    cursor: pointer;
    color: #5a9cf8;
}

</style>
