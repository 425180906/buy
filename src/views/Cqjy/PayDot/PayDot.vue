<template>
    <div class="payDot-cont">
        <div class="payDot-box">
            <h3><span>章丘区</span></h3>
            <ul>
                <li><a href="http://www.jnnccqjyw.cn/article/jywd/zq/201811/20181100000245.shtml">宁家埠</a></li>
            </ul>

            <h3><span>长清区</span></h3>
            <ul>
                <li><a href="http://www.jnnccqjyw.cn/article/jywd/cq/201811/20181100000255.shtml">张夏街道</a></li>
            </ul>


        </div>
    </div>
</template>

<script>
    export default {
        name: "PayDot"
    }
</script>

<style scoped lang="scss">

    .payDot-cont{
        width: 1200px;
        margin: auto;
        text-align: left;
        overflow: hidden;
        clear: both;
    }

    .payDot-box {
        padding: 22px;
        border: 1px solid #dedede;
        min-height: 645px;

        h3 {
            position: relative;
            border-bottom: 2px solid #22b45f;
            height: 40px;

            span {
                text-align: left;
                display: block;
                background: url(../../../image/tt_bg.png) no-repeat;
                width: 117px;
                font-size: 16px;
                color: #fff;
                padding-left: 46px;
                height: 40px;
                line-height: 40px;
                font-weight: normal;
            }
        }

        ul{
            width: 1200px;
            overflow: hidden;
            clear: both;
            padding-bottom: 20px;
            min-height: 50px;
            li{
                font-size: 16px;
                color: #666666;
                margin-top: 18px;
                text-align: left;
                width: 150px;
                float: left;
            }
        }
    }

</style>
