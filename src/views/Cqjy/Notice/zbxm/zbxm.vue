<template>
    <div class="cjgg-content">
        <!-- 查询 star -->
        <div class="cjggcx-box">
            <table class="cjggcx" style="width: 100%;border: 0;border-collapse: collapse;">
                <tr>
                    <td>
                        <p>类型:</p>
                        <select class="ggtype">
                            <option value="">--请选择--</option>
                            <option value="土地">土地</option>
                            <option value="建设项目">建设项目</option>
                            <option value="其他">其他</option>
                        </select>
                    </td>
                    <td>
                        <p>项目名称</p>
                        <input type="text">
                    </td>
                    <td>
                        <p>价格:</p>
                        <input type="text" style="width: 90px;">
                        <p style="width: auto;margin-left: 8px">至</p>
                        <input type="text" style="width: 90px;">
                        <a class="">查询</a>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 查询 end -->
        <!-- 查询列表 star -->
        <div>
            <table class="cxlist">
                <tr>
                    <th>项目名称</th>
                    <th>中标方名称</th>
                    <th>价格（万元）</th>
                    <th>类型</th>
                </tr>
                <tr v-for="item in list" :key="item.index">
                    <td  >{{item.xmname}}</td>
                    <td>{{item.jfname}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.type}}</td>
                </tr>
            </table>
            <div class="listtabs">
                <router-link to="" class="cur">1</router-link>
                <router-link to="">2</router-link>
                <router-link to="">3</router-link>
                <router-link to="">4</router-link>
                <router-link to="">5</router-link>
                <router-link to="">6</router-link>
            </div>
        </div>
        <!-- 查询列表 end -->
    </div>
</template>

<script>
    export default {
        name: "cjgg",
        data(){
            return {
             list:[
                 {
                    xmname:"房屋租赁",jfname:"李建新、孙其栋、张林",money:"31000.000000",type:"其他"
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
                float: left;

                p{
                    float: left;
                    width: 100px;
                    text-align: right;
                    height: 30px;
                    line-height: 28px;
                }

                select{
                    float: left;
                    height: 28px;
                    line-height: 28px;
                    width: 151px;
                    border: 1px solid #dddddd;
                    background: #fff;
                    margin-left: 10px;
                }

                input{
                    height: 28px;
                    line-height: 28px;
                    width: 150px;
                    border: 1px solid #dddddd;
                    background: #fff;
                    margin-left: 10px;
                    float: left;
                    padding-left: 8px;
                }

                a{
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
            }
        }
    }

    .cxlist{
        width: 100%;
        text-align: center;
        th{
            font-weight: normal;
            background: #eeeeee;
            border: 1px solid #dedede;
            height: 39px;
            line-height: 39px;
        }
        td{
            border: 1px solid #dedede;
            height: 39px;
            line-height: 39px;
            padding: 0;
        }
    }

    .listtabs{
        text-align: center;
        padding-top: 25px;
        a{
            background: #fff;
            display: inline-block;
            width: 34px;
            height: 34px;
            color: black;
            line-height: 34px;
            border: 1px solid #dddddd;
            margin: 0 5px;
            cursor: pointer;
            &:hover{
                background: #22b45f;
                border: 1px solid #22b45f;
                color: #fff;
            }
        }
        .cur{
            background: #22b45f;
            border: 1px solid #22b45f;
            color: #fff;
        }
    }

</style>
