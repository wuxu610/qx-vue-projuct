<template>
    <div class="user-profile-layout">
        <el-container>
            <el-header height="180px" class="login-image">
                <div class="avatar-container">
                    <img :src="imageUrl" class="avatar" />
                </div>
            </el-header>
            <el-main class="user-profile-dem">
                <el-form :model="userProfile">
                    <el-form-item label="用户名：">
                        <el-input v-model="userProfile.username" disabled />
                    </el-form-item>
                    <el-form-item label="手机号：">
                        <el-input v-model="userProfile.phone" disabled />
                    </el-form-item>
                    <el-form-item label="邮箱：">
                        <el-input v-model="userProfile.email" disabled />
                    </el-form-item>
                    <el-form-item label="出生日期：">
                        <el-input v-model="userProfile.birthdate" disabled />
                    </el-form-item>
                    <el-form-item class="login-btn">
                        <el-button class="login-btn_submit" type="primary" @click="onLoginOut()">
                            退出登陆
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const imageUrl = ref('/src/images/loginpig.jpeg'); // 从注册页面或后端获取用户头像URL
const userProfile = ref({
    username: 'JohnDoe', // 从注册页面或后端获取用户信息
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    birthdate: '1990-01-01',
});
const onLoginOut = () => {
    router.push("/login");
}
</script>

<style scoped>
.user-profile-layout {
    display: flex;
    justify-content: center;
}

.login-image {
    display: flex;
    justify-content: center;
}

.avatar-container {
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #a0cfff;
    border-radius: 50%;
}

.avatar {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
}

.user-profile-dem {
    margin-top: 20px;
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
</style>
