<template>
    <div style="width: 980px">
        <div class="jytj-search">
            <table class="jytj-box">
                <tr>
                    <th>查询类型<p style="color: red">*</p></th>
                    <td>
                        <label>
                            <select id="type" name="type">
                                <option value="">--请选择--</option>
                                <option value="monthcount">最近一年的成交项目数</option>
                                <option value="monthsquare">土地林权四荒成交项目数和面积</option>
                                <option value="monthprice">区县成交项目数和面积</option>
                                <option value="areacount">成交项目宗数和面积比例</option>
                                <option value="areasquare">受让主体统计数和面积比例</option>
                                <option value="areaprice">土地经营权年成交面积及金额</option>
                                <option value="projectcount">区县农村土地经营权成交项目宗占比</option>
                                <option value="other">其他产权成交宗数和价格统计</option>
                            </select>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colspan='2'>
                        <div class="tocenter"><a>
                            <span><span class="search-log">查询</span></span>
                        </a></div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="search-tb"></div>
    </div>
</template>

<script>
    export default {
        name: "jytj"
    }
</script>

<style scoped lang="scss">
    .jytj-box {
        width: 100%;
        border-collapse: collapse;
        margin: 8px;

        tr {
            border: 1px solid #c0c0c0;
        }

        th {
            text-align: center;
            color: #222;
            font-weight: bold;
            background: #F2F2F2;
            white-space: nowrap;
            padding: 3px;
            height: 19px;
            line-height: 17px;
            border: 1px solid #c0c0c0;
            font-size: 12px;

            p {
                display: inline;
                font-size: 12px;
            }
        }

        td {
            background: #ffffff;
            text-align: left;
            padding: 3px;
            line-height: 17px;
        }
    }

    .tocenter {
        text-align: center;
        display: block;

        td {
            display: block;
        }

        a {
            color: #444;
            background: url(../../../../image/button_a_bg.gif) no-repeat top right;
            font-size: 12px;
            text-decoration: none;
            display: inline-block;
            zoom: 1;
            height: 24px;
            padding-right: 18px;
            cursor: pointer;
            outline: none;

            &:hover {
                background: url(../../../../image/button_a_bg.gif) no-repeat bottom right;
                span{
                    background: url(../../../../image/button_span_bg.gif) no-repeat bottom left;
                    color: #ffa070;
                }
            }

            span {
                display: inline-block;
                background: url(../../../../image/button_span_bg.gif) no-repeat top left;
                padding: 4px 0px 4px 18px;
                line-height: 16px;
                height: 16px;

                .search-log {
                    background: url(../../../../image/search.png) no-repeat;
                    vertical-align: middle;
                    padding: 0px 0px 0px 18px;
                }
            }
        }
    }

    .search-tb{
        height: 600px;
    }
</style>
