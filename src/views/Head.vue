<template>
    <div>
        <div class="nav_top">
            <div class="nav-main">
                <a href="/" class="logo"><img src="../image/logo.png"></a>
                <p class="baiyun"><img src="../image/baiyun.png"></p>
                <p class="bl"><img src="../image/bl.png"></p>
                <p class="pq"><img src="../image/pq.png"></p>
                <p class="word1">
                    <span class="words"><img src="../image/by01.png"></span>
                    <span class="words"><img src="../image/by02.png"></span>
                    <span class="words"><img src="../image/by03.png"></span>
                </p>
                <p class="word2">
                    <span class="words"><img src="../image/by04.png"></span>
                    <span class="words"><img src="../image/by05.png"></span>
                    <span class="words"><img src="../image/by06.png"></span>
                </p>
                <div class="sousuo">
                    <button class="bth">搜索</button>
                    <input class="text" placeholder="请输入搜索内容" v-model="input">

                </div>
            </div>
            <div class="nav-box">
                <ul class="nav-ul" id="nav">
                    <li class="nav-list">
                        <router-link to="/" exact>首页</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Notice">公告信息</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Transaction">交易项目</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Mortgage">抵押融资</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Business">业务统计</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Service">政策服务</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/PayDot">交易网点</router-link>
                    </li>
                    <li class="nav-list">
                        <router-link to="/Personal">个人供求</router-link>
                    </li>
                    <div class="clearBoth"></div>
                </ul>
            </div>
        </div>

        <router-view/>

        <div class="bottom">
            <div class="bottom-main">
                <p style="font-size: 22px;padding: 25px 0px 20px">遵义市农村产权交易信息平台</p>
                版权所有 遵义市农业农村局 Copyright © 2018-2020 All Right Reserved<br>
                技术支持：遵义小红椒网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发单位：遵义小红椒网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="http://www.miitbeian.gov.cn/" target="_blank" style="color: #ffffff;">鲁ICP备05015243号-3</a>
                <p class="blues">
                    <router-link to="http://bszs.conac.cn/sitename?method=show&id=52975E0458E8242DE053012819AC2F10">
                        <img src="../image/blue.png">
                    </router-link>
                </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, tr, input {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }

    body {
        color: #000;
        background: #fff;
        font: 14px/26px 微软雅黑;
        text-align: center;
    }

    /* --------------全局定义--------------- */
    * {
        margin: 0;
        padding: 0;
    }

    /* 取消基本标签默认样式，防止不同浏览器显示效果不同，text-align:center; 解决不同浏览器居中问题 */
    body {
        color: #000;
        background: #fff;
        font: 14px/26px 微软雅黑;
        text-align: center;
    }

    body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, tr {
        margin: 0;
        padding: 0;
    }

    input, select {
        font-size: 14px;
        vertical-align: middle;
        color: #000;
    }

    /* 设置内容左对齐，恢复因BODY设置剧中产生的继承 */
    /*body div{text-align:left;}
    */
    /* 标签属性，textarea,input 强制输入时内容超出时换行 */
    textarea, input {
        word-wrap: break-word;
        word-break: break-all;
        padding: 0px;
        border: 0;
    }

    /* 清除ul列表标记的样式 */
    li {
        list-style-type: none;
    }

    /* 定义图片边框 */
    img {
        border: 0 none;
    }

    /* 定义默认的链接样式 */
    a {
        color: #000;
        text-decoration: none;
    }

    a:hover {
        color: #22b45f;
        text-decoration: none;
    }

    /* 去掉链接的虚线框 */
    a {
        outline: none;
        star: expression(this.onFocus=this.blur());
    }

    /* 定义H系列标签，覆盖H系列标签默认属性 */
    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 18px;
    }

    h4 {
        font-size: 16px;
    }

    h5 {
        font-size: 14px;
    }

    h6 {
        font-size: 12px;
    }

    .clearBoth {
        clear: both;
    }

</style>

<style scoped lang="scss">

    .sousuo {
        position: relative;
        right: 0;
        top: 62px;
        .bth {
            float: right;
            width: 60px;
            height: 36px;
            background: #22b45f;
            color: #fff;
            cursor: pointer;
            border:none;
        }

        .text {
            float: right;
            width: 230px;
            height: 34px;
            line-height: 34px;
            border: 1px solid #22b45f;
            color: #999999;
            padding-left: 8px;
        }
    }

    #nav {

        a {
            &.router-link-active {
                background-color: #089945;
            }
        }
    }

    .nav_top {
        position: relative;
        background: #75d0db url(../image/top_bg.jpg) center top no-repeat;
        height: 208px;
        margin-bottom: 10px;
    }

    .nav-main {
        position: relative;
        width: 1200px;
        height: 160px;
        margin: 0 auto;
    }

    .baiyun, .bl, .pq, .word1, .word2 {
        position: absolute;
    }

    .baiyun {
        left: 490px;
        top: 35px;
    }

    .bl {
        left: 400px;
        bottom: 0;
    }

    .pq {
        left: 510px;
        bottom: 0;
    }

    .word1 {
        left: 576px;
        top: 32px;
    }

    .word2 {
        left: 629px;
        top: 60px;
    }

    .words {
        margin-right: 8px;
    }

    .nav-list {
        float: left;
        width: 150px;
        height: 48px;
        line-height: 48px;

        &:hover {
            background: #089945;
        }
    }

    .nav-list a {
        font-size: 18px;
        color: #ffffff;
        display: block;
    }

    .nav-box {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 48px;
        background: #22b45f;
    }

    .nav-ul {
        width: 1200px;
        margin: 0 auto;
    }

    .logo {
        position: absolute;
        left: 0px;
        top: 45px;
    }

    .bottom {
        clear: both;
        text-align: center;
        line-height: 28px;
        background: #343635;
        height: 156px;
        color: #fff;
        margin-top: 20px;
    }

    .bottom-main {
        position: relative;
        margin: 0 auto;
        width: 1200px;
    }

    .blues {
        position: absolute;
        top: 33px;
        right: 236px;
    }
</style>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },

    }
</script>
