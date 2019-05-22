<template>
    <div>
        <!-- 头部 star -->
        <div>
            <div style="height: 130px"><img src="../image/user_logo.png"></div>
            <div>
                <router-link to="/">返回首页</router-link>
                ｜
                <router-link to="/">收藏本站</router-link>
            </div>
        </div>
        <!-- 头部 end -->
        <!-- 登录操作界面 star -->
        <div class="login-cont">
            <h6><img src="../image/login_bg.jpg">&nbsp;用户登录</h6>
            <div class="login-text">
                <div>
                    <ul>
                        <li>
                            <p>用户名：<input type="text"></p><span>或输入手机号</span>
                        </li>
                        <li>
                            <p>密&emsp;码：<input type="text"></p><span>请输入密码</span>
                        </li>
                        <li>
                            <p>验证码：<input type="text" style="width: 137px;"><img src="../image/CheckCodeServlet.jpg">
                            </p><span>请输入验证码</span>
                        </li>
                        <li class="login-btn">
                            <input type="botton" value="登 录">
                            <router-link to="/">注 册</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 登录操作界面 end -->
        <div class="bottom">
            <div class="bottom-main">
                <p style="font-size: 22px;padding: 25px 0 20px;">济南市农村产权交易信息平台</p>
                版权所有 济南市农业局 Copyright © 2015-2020 All Right Reserved<br>
                技术支持：济南市农业信息中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发单位：北京中百信软件技术有限公司
                <p class="blues">
                    <router-link to="http://bszs.conac.cn/sitename?method=show&id=52975E0458E8242DE053012819AC2F10">
                        <img src="../image/blue.png">
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="scss">

    img {
        vertical-align: middle;
    }

    .bottom {
        clear: both;
        text-align: center;
        line-height: 28px;
        background: #343635;
        overflow: hidden;
        color: #fff;
        margin-top: 20px;
    }

    .bottom-main {
        width: 1200px;
        margin: auto;
        position: relative;
        height: 156px;
    }

    .blues {
        position: absolute;
        top: 33px;
        right: 236px;
    }

    .login-cont {
        width: 990px;
        margin: 10px auto;
        margin-bottom: 0px;
        min-height: 550px;

        h6 {
            padding: 20px 0 10px 0;
            font-size: 30px;
            color: #646464;
            text-align: left;
            font-weight: normal;
        }

        .login-text {
            width: 988px;
            height: 386px;
            background: url(../image/login_bg02.jpg) no-repeat;
            text-align: left;

            ul {
                width: 408px;
                padding: 35px 0 0 44px;

                li {
                    padding: 6px 0;
                    overflow: hidden;

                    span {
                        background: url(../image/ico_warn.png) no-repeat 0 -200px;
                        padding: 3px 0 3px 20px;
                        font-size: 12px;
                        line-height: 20px;
                        vertical-align: middle;
                        color: #555;
                    }

                    p {
                        width: 284px;
                        font-size: 14px;
                        float: left;

                        input {
                            width: 205px;
                            height: 29px;
                            line-height: 29px;
                            border: 1px solid #b2ccdb;
                            font-size: 14px;
                            margin-right: 10px;
                        }
                    }
                }
            }

            ul .login-btn {
                padding: 20px 0 45px 60px;
                text-align: left;
                border-bottom: 1px dashed #b3b3b3;
                overflow: hidden;

                input {
                    display: block;
                    float: left;
                    width: 93px;
                    height: 37px;
                    background: #329600;
                    color: #fff;
                    font-size: 16px;
                    font-family: "微软雅黑";
                    text-align: center;
                }

                a {
                    display: block;
                    float: left;
                    text-align: center;
                    color: #fff;
                    margin-left: 15px;
                    font-size: 16px;
                    font-weight: bold;
                    width: 93px;
                    height: 37px;
                    line-height: 37px;
                    background: #ff8500;
                }
            }
        }
    }
</style>
