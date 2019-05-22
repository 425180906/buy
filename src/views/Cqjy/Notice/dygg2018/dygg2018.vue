<template>
    <div class="cjgg-content">
        <!-- 查询 star -->
        <div class="cjggcx-box">
            <table class="cjggcx" style="width: 100%;border: 0;border-collapse: collapse;">
                <tr>
                    <td>
                        <p>公告名称:</p>
                        <input type="text" class="ipttxt">
                        <a>查询</a>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 查询 end -->
        <div class="cx-list">
            <ul>
                <li>
                    <router-link to="">出让济南市历城区唐王镇颜家庄村50.3亩农村土地经营权</router-link>
                    <span>xxxx-xx-xx</span>
                </li>
            </ul>
        </div>
        <div class="listtabs">
            <router-link to="" class="cur">1</router-link>
            <router-link to="">2</router-link>
            <router-link to="">3</router-link>
            <router-link to="">4</router-link>
            <router-link to="">5</router-link>
            <router-link to="">6</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cjgg",
    }
</script>

<style scoped lang="scss">
    .cjgg-content {
        width: 980px;
    }

    .cjggcx-box {
        margin-bottom: 10px;
        border: 1px solid #dedede;
        background: #fffbf7;
        padding: 10px 0;

        .cjggcx {
            tr td {
                padding: 5px 0;

                p {
                    float: left;
                    width: 100px;
                    text-align: right;
                    height: 30px;
                    line-height: 28px;
                }

                a {
                    width: 88px;
                    height: 30px;
                    line-height: 30px;
                    background: #22b45f;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    display: inline-block;
                    float: left;
                    margin-left: 10px;
                }

                .ipttxt {
                    width: 158px;
                    border: 1px solid #dddddd;
                    background: #fff;
                    height: 28px;
                    line-height: 28px;
                    margin-left: 10px;
                    margin-right: 64px;
                    float: left;
                    padding-left: 8px;
                }
            }
        }
    }

    .cx-list {
        min-height: 420px;

        ul {
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

                span{
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                &:hover {
                    filter: invert(51%) sepia(84%) saturate(429%) hue-rotate(92deg) brightness(95%) contrast(86%);
                }
            }
        }
    }

    .listtabs {
        text-align: center;
        padding-top: 25px;

        a {
            background: #fff;
            display: inline-block;
            width: 34px;
            height: 34px;
            color: black;
            line-height: 34px;
            border: 1px solid #dddddd;
            margin: 0 5px;
            cursor: pointer;

            &:hover {
                background: #22b45f;
                border: 1px solid #22b45f;
                color: #fff;
            }
        }

        .cur {
            background: #22b45f;
            border: 1px solid #22b45f;
            color: #fff;
        }
    }

</style>
