<template>
    <div style="width: 980px">
        <!-- 搜索 star -->
            <div class="dbtj-searchbox">
                <form>
                    <span>名称：</span>
                    <input type="text" class="name-search">
                    <span>时间：</span>
                    <input type="text">
                    <span>—</span>
                    <input type="text">
                    <input type="button" class="search-btn" value="查    询">
                    <p class="clearBoth"></p>
                </form>
            </div>
        <!-- 搜索 end -->
        <!-- 搜索列表 star -->
        <div>
            <ul class="search-list">

            </ul>
        </div>
        <!-- 搜索列表 end -->
    </div>
</template>

<script>
    export default {
        name: "dbtj"
    }
</script>

<style scoped lang="scss">
    .dbtj-searchbox {
        background: #fffbf7;
        border: 1px solid #dedede;
        padding: 24px 36px;

        span {
            display: inline-block;
            float: left;
            height: 30px;
            line-height: 30px;
        }

        input {
            background: #fff url(../../../../image/date_icon.png) right center no-repeat;
            margin-right: 10px;
            width: 112px;
            height: 28px;
            line-height: 28px;
            border: 1px solid #dddddd;
            margin-left: 10px;
            float: left;
            padding-left: 8px;
        }

        .name-search {
            height: 28px;
            line-height: 28px;
            width: 171px;
            border: 1px solid #dddddd;
            background: #fff;
            margin-right: 64px;
            margin-left: 10px;
            float: left;
            padding-left: 8px;
        }

        .search-btn {
            width: 88px;
            height: 30px;
            margin: 0px;
            padding: 0px;
            line-height: 30px;
            background: #22b45f;
            color: #fff;
            border: none;
            text-align: center;
            cursor: pointer;
        }

    }

    .search-list{
        margin-top: 10px;
        padding: 22px;
        border: 1px solid #dedede;
        min-height: 480px;
        height: 100%;
        text-align: left;
    }
</style>
