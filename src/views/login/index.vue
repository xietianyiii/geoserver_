<template>
    <div class="login">
        <div class="login-header">
            <img class="login-header-logo" :src="require('@image/main/logo.png')" alt="">
            <h1 class="login-header-title">煤矿区生态环境全生命周期综合服务平台</h1>
        </div>
        <div class="login-box">
            <div class="login-form">
                <h2 class="login-form-title">用户登录</h2>
                <img class="login-formBg" :src="require('@image/form_bg.png')" alt="">
                <div class="login-form-box">
                    <div class="login-form-item">
                        <input type="text" v-model="username" placeholder="用户名" />
                        <i class="item-icon iconfont icon-mine-ecologyuser"></i>
                        <div class="form-item-bottom"></div>
                    </div>
                    <div class="login-form-item">
                        <input type="password" v-model="password" placeholder="密码" />
                        <i class="item-icon iconfont icon-mine-ecologypassword"></i>
                        <div class="form-item-bottom"></div>
                    </div>
                    <div class="login-form-button">
                        <button class="form-button" @click="handleLogin">登录</button>
                    </div>
                    <p class="login-register">
                        <span class="toRegister">注册账户</span>
                    </p>
                </div>
                <div class="forget-password">
                    <span class="toRegister">忘记密码？</span>
                </div>
            </div>
        </div>
        <!-- <p class="copyright">京ICP备18004264号-3 版权所有 © 北京畅图科技有限公司</p> -->
    </div>
</template>

<script>
    import {
        login,
        getTenantInfo,
        getUserInfo
    } from "@api/authority"
    import {
        setToken,
        setHeadPic,
        setUserInfo,
        setUserAuthority,
        setTenantInfo,
        setEntry
    } from "../../utils/author.js";

    export default {

        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            handleLogin: async () => {
                if (!this.username.value) {
                    this.$message.warning('用户名不能为空')
                    return;
                }
                if (!this.password.value) {
                    proxy.$message.warning('密码不能为空')
                    return;
                }
                try {
                    let res = await login({
                        Username: this.username.value,
                        Password: this.password.value
                    })
                    setToken(res.Data["Token"]);
                    setHeadPic(res.Data['avatar']);
                    let result = await getUserInfo();
                    if (result.data && result.success) {
                        setUserInfo(res.Data);
                        setUserAuthority(result.data);
                        let info = await getTenantInfo({
                            tenantId: result.data.tenantId
                        })
                        if (info.data && info.success) {
                            setTenantInfo(info.data)
                            this.$router.push({
                                path: "/main"
                            });
                        }
                    }
                } catch (res) {
                    console.log(res);
                    this.$message.error('登录失败！')
                }

            }
        }
    }
</script>

<style src="./index.css" />