<template>
    <div class="cjgg-content">
        <div class="gsjs-cont">
            <ul class="gsjs-list">
                <li>
                    <a href="http://www.jnnccqjyw.cn/article/dyrz/gsjs/201810/20181000000210.shtml">济南财金农业科技融资担保有限公司简介</a>
                    <span>2018-10-24</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gsjs"
    }
</script>

<style scoped lang="scss">
    .cjgg-content {
        width: 980px;
    }

    .gsjs-list {
            padding: 22px;
            border: 1px solid #dedede;
            min-height: 480px;
            height: 100%;
            text-align: left;

            li {
                line-height: 36px;
                min-height: 36px;
                position: relative;
                background: url(../../../../image/point.png) 0 center no-repeat;
                padding-left: 20px;

                a {
                    display: block;
                    color: black;
                }

                span {
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                &:hover {
                    filter: invert(51%) sepia(84%) saturate(429%) hue-rotate(92deg) brightness(95%) contrast(86%);
                }
            }
        }



</style>
