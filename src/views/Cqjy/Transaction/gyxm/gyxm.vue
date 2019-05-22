<template>
    <div class="cjgg-content">
        <div class="cjggcx-box">
            <table class="cjggcx" style="width: 100%;border: 0;border-collapse: collapse;">
                <tr>
                    <td>
                        <p>项目编号:</p>
                        <input type="text" class="ipttxt">
                    </td>
                    <td>
                        <p>项目名称:</p>
                        <input type="text" class="ipttxt">

                    </td>
                    <td>
                        <p>挂牌价格:</p>
                        <input type="text" class="s-ipttxt">
                        <p style="width: auto;margin-left: 8px">至</p>
                        <input type="text" class="s-ipttxt">
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>项目名称:</p>
                        <select class="xmtype">
                            <option value="">==请选择==</option>
                            <option value="td">农村土地经营权</option>
                            <option value="lq">林权</option>
                            <option value="sh">四荒使用权</option>
                            <option value="jtzc">集体经营性资产权</option>
                            <option value="jtgq">集体经济组织股权</option>
                            <option value="scsb">生产设施设备</option>
                            <option value="sl">小型水利设施</option>
                            <option value="zs">农业类知识产权</option>
                            <option value="zjd">宅基地使用权</option>
                            <option value="sw">生物资产</option>
                            <option value="jsxm">建设项目招标</option>
                            <option value="cyxm">产业项目转让</option>
                            <option value="cyxmzs">产业项目招商</option>
                            <option value="snblzc">涉农不良金融资产</option>
                            <option value="pwq">排污权</option>
                            <option value="qt">其他</option>
                        </select>
                    </td>
                    <td>
                        <p>挂牌开始时间:</p>
                        <input type="text" class="ipttxt timelog">
                    </td>
                    <td>
                        <p>结束时间:</p>
                        <input type="text" class="ipttxt timelog">
                        <router-link to="">查询</router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gyxm"
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
                    height: 28px;
                    line-height: 28px;
                    width: 140px;
                    border: 1px solid #dddddd;
                    margin-left: 10px;
                    float: left;
                    padding-left: 8px;
                }

                .s-ipttxt {
                    height: 28px;
                    line-height: 28px;
                    width: 100px;
                    border: 1px solid #dddddd;
                    background: #fff;
                    margin-left: 10px;
                    float: left;
                    padding-left: 8px;
                }
            }
        }
    }

    .xmtype {
        float: left;
        height: 28px;
        line-height: 28px;
        width: 151px;
        border: 1px solid #dddddd;
        background: #fff;
        margin-left: 10px;
    }

    .timelog {
        background: #fff url(../../../../image/date_icon.png) right center no-repeat;
        margin-right: 10px;
        width: 150px;
    }

</style>
