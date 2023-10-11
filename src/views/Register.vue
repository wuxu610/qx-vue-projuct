<template>
    <div class="register-layout">
        <el-container>
            <el-header height="180px" class="login-image">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-header>
            <el-main class="login-dem">
                <el-form :model="form">
                    <el-form-item label="用户名：" prop="username" required>
                        <el-input v-model="form.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="手机号：" prop="phone" required>
                        <el-input v-model="form.phone" placeholder="请输入手机号" />
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="form.email" placeholder="请输入邮箱" />
                    </el-form-item>
                    <el-form-item label="设置密码：" prop="password" required>
                        <el-input v-model="form.password" type="password" placeholder="设置密码" show-password />
                    </el-form-item>
                    <el-form-item label="出生日期：" prop="birthdate" required>
                        <el-date-picker v-model="form.birthdate" type="date" placeholder="选择出生日期" />
                    </el-form-item>
                    <el-form-item class="login-btn">
                        <el-button class="login-btn_submit" type="primary" @click="onRegister">
                            注册
                        </el-button>
                    </el-form-item>
                    <div class="login-txtBtn">
                        <p>已有账号？</p>
                        <p class="login-txtBtn_register" @click="onLogin">返回登录</p>
                    </div>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter();
const imageUrl = ref('')
const form = reactive({
    username: '',
    phone: '',
    email: '',
    password: '',
    birthdate: '',
})
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}

const onRegister = () => {
    const requiredFields = ['username', 'phone', 'email', 'password', 'birthdate'];
    for (const field of requiredFields) {
        if (!form[field]) {
            ElMessage.error(`${field} 为必填项`);
            return;
        }
    }
    console.log('submit!');
    router.push("/login");
}

const onLogin = () => {
    router.push("/login");
}
</script>

<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
<style>
.register-layout {
    display: flex;
    justify-content: center;
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

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
