<template>
    <div class="ggxx-content">
        <div class="ggxx-tab">
            <h1 class="ggxx-tt">抵押融资</h1>
            <ul>
                <li><router-link to="/Mortgage/gsjs">公司介绍</router-link></li>
                <li><router-link to="/Notice/newgg">抵押公告</router-link></li>
                <li><router-link to="/Notice/jygg">解押公告</router-link></li>
            </ul>
        </div>
        <router-view style="float: right;"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Transaction"
    }
</script>

<style scoped lang="scss">

    .ggxx-content{
        width: 1200px;
        margin: auto;
        text-align: left;
        overflow: hidden;
        clear: both;
    }

    .ggxx-tab{
        width: 200px;
        float: left;
        .ggxx-tt{
            text-align: center;
            font-size: 22px;
            color: #fff;
            line-height: 60px;
            height: 60px;
            background: #f49745;
        }
        ul{
            background: #f5f5f5;
            border: 1px solid #dedede;
            padding: 0 9px 10px;
            li{
                height: 38px;
                line-height: 38px;
                text-align: center;
                border: 1px solid #dedede;
                margin-top: 10px;
                background: #fff;
                a{
                    display: block;
                    &:hover{
                        background-color: #22b45f;
                        color: #fff;
                    }
                    &.router-link-exact-active {
                        background-color: #22b45f;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
