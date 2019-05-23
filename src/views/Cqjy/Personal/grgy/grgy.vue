<template>
    <div class="cjgg-content">
        <!-- 查询 star -->
        <div class="cjggcx-box">
            <table class="cjggcx" style="width: 100%;border: 0;border-collapse: collapse;">
                <tr>
                    <td>
                        <p>项目名称：</p>
                        <input type="text" class="ipttxt">
                        <a>查询</a>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 查询 end -->
        <div>
            <table class="xmcxlist">
                <tr>
                    <th>序号</th>
                    <th>项目名称</th>
                    <th>发布日期</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                <tr v-for="item in buyList" :key="item.index">
                    <td >{{item.xmid}}</td>
                    <td style="text-align: center;padding-left: 10px;">{{item.xmname}}</td>
                    <td >{{item.time}}</td>
                    <td >{{item.state}}</td>
                    <td ><a :href="item.url">{{item.doit}}</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cjgg",
        data() {
            return {
                buyList: [
                    {
                        xmid: '1',
                        url: 'http://www.jnnccqjyw.cn/j/web/info.jsp?id=a9799603223d49fc8929f851a3c95e9b&pageType=S&category=/sell/cq',
                        xmname: '出让济南市历城区荷花路街道程家庄村70亩农村土地经营权',
                        state: '待审核',
                        time: '2019-04-02',
                        doit: '查看'
                    }
                ]
            }
        }
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
                    float: left;
                    padding-left: 8px;
                }
            }
        }
    }

    .xmcxlist {
        width: 100%;
        border: 0;
        border-collapse: collapse;
        text-align: center;

        tr {
            th {
                font-weight: normal;
                background: #eeeeee;
                border: 1px solid #dedede;
                height: 39px;
                line-height: 39px;
            }

            td {
                border: 1px solid #dedede;
                height: 39px;
                line-height: 39px;
                padding: 0;

                a {
                    color: black;
                }
            }
        }
    }

</style>
