<template>
    <div class="content">

        <div class="mainbox1">
            <div class="mainbox1-l">
                <!-- 公告栏 -->
                <div class="tagsbox">
                    <ul class="tags">
                        <li id="tag1" class="taghover" @mousemove="changeTag1"><a>成交公告</a></li>
                        <li id="tag2" @mousemove="changeTag2"><a>抵押公告</a></li>
                        <li id="tag3" @mousemove="changeTag3"><a>解押公告</a></li>
                        <li id="tag4" @mousemove="changeTag4"><a>中标项目</a></li>
                        <p class="clearBoth"></p>
                    </ul>
                    <ul class="ggboxs">
                        <ul id="ggboxa" class="ggbox tagdisplay">
                            <div class="more">
                                <router-link to="/Notice">更多></router-link>
                            </div>
                            <li><a href="/">这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">这是一条公告</a><span class="li-time">2019-5-15</span></li>
                        </ul>
                    </ul>
                    <ul class="ggboxs">
                        <ul id="ggboxb" class="ggbox">
                            <div class="more">
                                <router-link to="/Notice">更多></router-link>
                            </div>
                            <li><a href="/">2这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">2这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">2这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">2这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">2这是一条公告</a><span class="li-time">2019-5-15</span></li>
                        </ul>
                    </ul>
                    <ul class="ggboxs">
                        <ul id="ggboxc" class="ggbox">
                            <div class="more">
                                <router-link to="/Notice">更多></router-link>
                            </div>
                            <li><a href="/">3这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">3这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">3这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">3这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">3这是一条公告</a><span class="li-time">2019-5-15</span></li>
                        </ul>
                    </ul>
                    <ul class="ggboxs">
                        <ul id="ggboxd" class="ggbox">
                            <div class="more">
                                <router-link to="/Notice">更多></router-link>
                            </div>
                            <li><a href="/">4这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">4这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">4这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">4这是一条公告</a><span class="li-time">2019-5-15</span></li>
                            <li><a href="/">4这是一条公告</a><span class="li-time">2019-5-15</span></li>
                        </ul>
                    </ul>
                </div>
                <!-- 公告栏结束 -->
                <!-- 滚动栏 -->
                <div class="run">
                    <div class="runl"></div>
                    <div class="longbox">
                        <div class="longcontent">
                            <ul id="List1">
                                <li><a href="/" target="_blank"><img src="../../../image/fl01.png">
                                    <p>农村土地经营权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl02.png">
                                    <p>林权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl03.png">
                                    <p>四荒使用权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl04.png">
                                    <p>集体经营性资产</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl05.png">
                                    <p>集体经济组织股权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl06.png">
                                    <p>生产设施设备</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl07.png">
                                    <p>小型水利设施</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl08.png">
                                    <p>农业类知识产权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl09.png">
                                    <p>宅基地使用权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl10.png">
                                    <p>建设项目招标</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl11.png">
                                    <p>产业项目</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl12.png">
                                    <p>其他</p></a></li>
                                <p class="clearBoth"></p>
                            </ul>
                            <ul id="List2">
                                <li><a href="/" target="_blank"><img src="../../../image/fl01.png">
                                    <p>农村土地经营权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl02.png">
                                    <p>林权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl03.png">
                                    <p>四荒使用权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl04.png">
                                    <p>集体经营性资产</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl05.png">
                                    <p>集体经济组织股权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl06.png">
                                    <p>生产设施设备</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl07.png">
                                    <p>小型水利设施</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl08.png">
                                    <p>农业类知识产权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl09.png">
                                    <p>宅基地使用权</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl10.png">
                                    <p>建设项目招标</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl11.png">
                                    <p>产业项目</p></a></li>
                                <li><a href="/" target="_blank"><img src="../../../image/fl12.png">
                                    <p>其他</p></a></li>
                                <p class="clearBoth"></p>
                            </ul>
                        </div>
                    </div>
                    <div class="runr"></div>
                </div>
                <!-- 滚动栏结束 -->
            </div>
            <!-- 区县链接地图 -->
            <div class="mainbox1-r">
                <h3 class="qxlj-tt">区县链接</h3>
                <div class="qxlj-cont">
                    <img src="../../../image/map.png" usemap="#Map">
                    <map name="Map">
                        <area shape="rect" coords="149,24,208,72" href="http://sh.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="130,93,199,140" href="http://jy.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="200,163,264,218" href="http://zq.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="105,158,137,172" href="http://tq.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="148,184,188,198" href="#">
                        <area shape="rect" coords="108,182,142,198" href="http://hy.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="126,199,156,211" href="http://sz.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="131,217,188,240" href="http://lc.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="68,231,131,269" href="http://cq.jnnccqjyw.cn/" target="_blank">
                        <area shape="rect" coords="9,273,47,313" href="http://py.jnnccqjyw.cn/" target="_blank">
                    </map>
                </div>
            </div>
            <div class="clearBoth"></div>
            <!-- 区县链接地图结束 -->
        </div>
        <div style="margin-top:10px;"><img src="../../../image/jylc.png"></div>
        <!-- 左侧盒子 -->
        <div id="left">
            <div class="xmbox">

                <h3 class="xmtt">
                    <span class="xm-tab">供应项目</span>
                    <router-link to="/Transaction">更多></router-link>
                </h3>
                <tr>
                    <th style="width: 20%">项目编号</th>
                    <th style="width: 401px">项目名称</th>
                    <th style="width: 15%">截止日期</th>
                    <th style="width: 15%">意向单价（元）</th>
                </tr>
                <tr v-for="item in list1" :key="item.index">
                    <td>{{item.id}}</td>
                    <td><a :href="item.url">{{item.name}}</a></td>
                    <td>{{item.time}}</td>
                    <td>{{item.price}}</td>
                </tr>

                <h3 class="xmtt">
                    <span class="xm-tab">需求项目</span>
                    <router-link to="/Transaction">更多></router-link>
                </h3>
                <tr>
                    <th style="width: 20%">项目编号</th>
                    <th style="width: 401px">项目名称</th>
                    <th style="width: 15%">发布时间</th>
                    <th style="width: 15%">意向单价（元）</th>
                </tr>
                <tr v-for="item in list2" :key="item.index">
                    <td>{{item.id}}</td>
                    <td><a :href="item.url">{{item.name}}</a></td>
                    <td>{{item.time}}</td>
                    <td>{{item.price}}</td>
                </tr>
                <img src="../../../image/biaoyu.png" style="margin-top: 10px">

                <h3 class="xmtt" style="margin-top: 2px">
                    <span class="xm-tab">成交项目</span>
                    <router-link to="/Transaction">更多></router-link>
                </h3>
                <tr>
                    <th style="width: 20%">项目编号</th>
                    <th style="width: 362px">项目名称</th>
                    <th style="width: 10%">隶属区县</th>
                    <th style="width: 15%">成交时间</th>
                    <th style="width: 10%">成交方式</th>
                </tr>
                <tr v-for="item in list3" :key="item.index">
                    <td>{{item.id}}</td>
                    <td><a :href="item.url" style="width: 340px">{{item.name}}</a></td>
                    <td>{{item.county}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.paymethod}}</td>
                </tr>

                <ul id="grgx-top" class="grgx-tabs gq-tab">
                    <li id="grgq" @mousemove="changegq">个人供求</li>
                    <li id="grxq" @mousemove="changexq">个人需求</li>
                    <p><a href="">个人供求发布</a></p>
                    <router-link class="grgq-more" id="gqmore" to="/Transaction">更多></router-link>
                    <router-link class="grgq-more" id="gxmore" to="/Transaction">更多></router-link>
                    <div class="clearBoth"></div>
                </ul>
                <div class="grgqlist">
                    <tr id="gq-list" class="grgq-list">
                        <th style="width: 8%">供</th>
                        <th style="width: 473px">项目名称</th>
                        <th style="width: 15%">发布时间</th>
                        <th style="width: 18%">联系电话</th>
                    </tr>

                    <tr id="xq-list">
                        <th style="width: 8%">需</th>
                        <th style="width: 473px">项目名称</th>
                        <th style="width: 15%">发布时间</th>
                        <th style="width: 18%">联系电话</th>
                    </tr>
                </div>
                <img src="../../../image/dydblc.png" style="margin-top: 10px">
                <h3 class="xmtt" style="margin-top: 2px">
                    <span class="xm-tab">交易网点</span>
                    <router-link to="/Transaction">更多></router-link>
                </h3>
                <ul class="jywd-ul">

                    <li><a href="/" target="_blank" title="红花岗区农村产权交易中心"
                           class="complink"><span>红花岗区</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="汇川区农村产权交易中心"
                           class="complink"><span>汇川区</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="播州区农村产权交易中心"
                           class="complink"><span>播州区</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="桐梓县农村产权交易中心"
                           class="complink"><span>桐梓县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="绥阳县农村产权交易中心"
                           class="complink"><span>绥阳县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="正安县农村产权交易中心"
                           class="complink"><span>正安县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="凤冈县农村产权交易中心"
                           class="complink"><span>凤冈县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="湄潭县农村产权交易中心"
                           class="complink"><span>湄潭县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="余庆县农村产权交易中心"
                           class="complink"><span>余庆县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="习水县农村产权交易中心"
                           class="complink"><span>习水县</span><b class="comptime">0852-</b></a></li>
                    <li><a href="/" target="_blank" title="赤水县农村产权交易中心"
                           class="complink"><span>赤水县</span><b class="comptime">0852-</b></a></li>

                </ul>
            </div>
        </div>
        <!-- 左侧盒子结束 -->

        <!-- 右侧盒子 -->
        <div id="right">
            <div>
                <div class="mainbox1-r" style="margin-top: 24px;height: 370px;">
                    <h3 class="qxlj-tt">业务统计</h3>
                    <div class="jytj-cont">
                        <p>
                            <router-link to="/Business" class="tjtabs" id="jytj-tab" @mouseover.native="changejytj">
                                交易统计
                            </router-link>
                            <router-link to="/Business" id="dbtj-tab" @mouseover.native="changedbtj">担保统计</router-link>
                        </p>
                        <div class="clearBoth"></div>
                        <div id="jytj-index" style="padding-top: 8px">
                            <iframe src="http://utrm.jnnccqjyw.cn/utr/statistics/statistics-trade.action"
                                    name="iframe_trade" frameborder="0" scrolling="no" style="width:100%;height:250px;"
                                    marginheight="0" marginwidth="0"></iframe>
                        </div>
                        <div id="dbtj-index" style="padding-top: 8px"></div>
                    </div>
                </div>
                <div class="clearBoth"></div>

                <!-- 数据查询 -->
                <div class="mainbox1-r" style="margin-top: 10px;height: 420px;">
                    <h3 class="qxlj-tt">数据查询</h3>
                    <div class="zscx-cont">
                        <h4 class="zscx-tt">证书查询</h4>
                        <div class="zscxbox">
                            <div class="zstype">
                                <span>证书类型：</span>
                                <input type="radio" class="zslx" name="zstype" value="1" checked>交易鉴证
                                <input type="radio" class="zslx" name="zstype" value="2">经营权证
                            </div>
                            <label>
                                <input type="text" class="zscxtext" style="margin-top: 10px">
                                <input type="button" class="zscxbt" value="查询" style="margin-top: 10px">
                            </label>
                        </div>
                        <h4 class="zscx-tt" style="margin-top: 10px">项目查询</h4>
                        <table class="xmcxbox">
                            <tbody>
                            <tr>
                                <td>项目编号：</td>
                                <td><input type="text" class="zscxtext xmcxtext"></td>
                            </tr>
                            <tr>
                                <td>项目名称：</td>
                                <td><input type="text" class="zscxtext xmcxtext"></td>
                            </tr>
                            <tr>
                                <td style="width: 28%">类型：</td>
                                <td><select id="typeId" name="type" class="indexsel">
                                    <option value="1" selected="">供应项目</option>
                                    <option value="2">需求项目</option>
                                    <option value="3">成交项目</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td style="width: 28%"></td>
                                <td><input type="submit" class="xmcxbotton" value="查询"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- 数据查询结束 -->

                <!-- 抵押融资 -->
                <div>
                    <div class="mainbox1-r" style="margin-top: 10px;height: 332px;">

                        <h3 class="qxlj-tt">抵押融资</h3>
                        <div class="dyrz-index">
                            <p class="dyrz-tabs">
                                <router-link to="/" @mouseover.native="changegsjs" class="cur" id="gsjstab">公司介绍
                                </router-link>
                                <router-link to="/" @mouseover.native="changedygg" id="dyggtab">抵押公告</router-link>
                                <router-link to="/" @mouseover.native="changejygg" id="jyggtab">解押公告</router-link>
                            </p>
                            <div class="clearBoth"></div>


                            <ul id="gsjslist" style="margin-top: 10px">
                                <li>
                                    <router-link
                                            to="http://www.jnnccqjyw.cn/article/dyrz/gsjs/201810/20181000000210.shtml"
                                            title="济南财金农业科技融资担保有限公司简介" target="_blank">
                                        济南财金农业科技融资担保有限公司简介
                                    </router-link>
                                    <span>xx-xx</span>
                                </li>
                            </ul>
                            <ul id="dygglist" style="display: none;margin-top: 10px;">
                                <li><a>抵押公告</a><span>xx-xx</span></li>
                            </ul>
                            <ul id="jygglist" style="display: none;margin-top: 10px;">
                                <li><a>解押公告</a><span>xx-xx</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 抵押融资结束 -->
                <!-- 政策服务 -->
                <div>
                    <div class="mainbox1-r" style="margin-top: 10px;height: 332px;">

                        <h3 class="qxlj-tt">政策服务</h3>
                        <div class="dyrz-index">
                            <p class="dyrz-tabs">
                                <router-link to="/" @mouseover.native="changezcfg" class="cur" id="zcfgtab">政策法规
                                </router-link>
                                <router-link to="/" @mouseover.native="changezjgd" id="zjgdtab">专家观点</router-link>
                                <router-link to="/" @mouseover.native="changezlxz" id="zlxztab">资料下载</router-link>
                            </p>
                            <p class="clearBoth"></p>

                            <ul id="zcfglist" style="margin-top: 10px">
                                <li>
                                    <router-link
                                            to="http://www.jnnccqjyw.cn/article/zcfw/zcfg/201808/20180800002451.shtml"
                                            title="山东省人民政府办公厅关于加快全省智慧农业发展的意见" target="_blank">
                                        山东省人民政府办公厅关于加快全省智慧农业发展的意见
                                    </router-link>
                                    <span>xx-xx</span>
                                </li>
                            </ul>
                            <ul id="zjgdlist" style="display: none;margin-top: 10px;">
                                <li><a>专家观点</a><span>xx-xx</span></li>
                            </ul>
                            <ul id="zlxzlist" style="display: none;margin-top: 10px;">
                                <li><a>资料下载</a><span>xx-xx</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="clearBoth"></p>
                <!-- 政策服务结束 -->
                <!-- 登录按钮 -->
                <div style="margin-top: 10px">
                    <router-link to="/Login" style="float: left">
                        <img src="../../../image/jyxt01.png">
                    </router-link>
                    <router-link to="/Login" style="float: right">
                        <img src="../../../image/jyxt02.png">
                    </router-link>
                </div>
                <p class="clearBoth" style="margin-bottom: 20px"></p>
                <!-- 登录按钮结束 -->
            </div>
            <!-- 右侧盒子结束 -->

        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                list1: [
                    {
                        id: '2018AC370112104311',
                        name: '出让济南市历城区荷花路街道程家庄村70亩农村土地经营权',
                        time: '',
                        price: '3000',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?6e0e8891-3273-4c8c-a579-496397b97d76'
                    },
                    {
                        id: '2018AC370124100711',
                        name: '出让济南市平阴县孝直镇亓集村342.15亩农村土地经营权',
                        time: '',
                        price: '1000',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?f0d2f011-2bfa-4583-a091-37497368ebdd'
                    },
                    {
                        id: '2018AC370124100801',
                        name: '出让济南市平阴县孝直镇前庄科村542亩农村土地经营权',
                        time: '',
                        price: '1000',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?2cc82917-d973-47c3-b974-74178264f11b'
                    },
                    {
                        id: '2018AC370124101161',
                        name: '出让济南市平阴县孝直镇后庄科村217.6亩农村土地经营权',
                        time: '',
                        price: '1000',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?59b70fcd-f744-4de2-9d84-285f64280728'
                    },
                    {
                        id: '2018AC370124101251',
                        name: '出让济南市平阴县孝直镇贾庄村450亩农村土地经营权',
                        time: '',
                        price: '1000',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?c8969788-49eb-4c1b-beb3-7954970c3495'
                    }
                ],
                list2: [
                    {
                        id: '2018AS37012695761',
                        name: '受让商河县怀仁镇刚坊村50.09',
                        time: '',
                        price: '730',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?0856b0c8-f61d-4aed-87d4-e7ee93fe76d6'
                    },
                    {
                        id: '2016AS37012524931',
                        name: '受让济阳县新市镇昌家村土地',
                        time: '',
                        price: '700',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?52c478de-293d-4ec9-b0ed-19b89cb1161c'
                    }
                ],
                list3: [
                    {
                        id: '2019AC370112108901',
                        name: '出让济南市历城区唐王镇颜家庄村50.3亩农村土地经营权',
                        county: '',
                        time: '2019-04-02',
                        paymethod: '协议转让',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?21d257e6-b17d-4c12-8fe8-8adaa9790f55'
                    },
                    {
                        id: '2019AC370181109171',
                        name: '出让济南市章丘市刁镇南芽村565.26亩农村土地经营权',
                        county: '',
                        time: '2019-02-26',
                        paymethod: '协议转让',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?46f78f23-e7ac-4ccd-a7f6-2a8ab1ced6ce'
                    },
                    {
                        id: '2019AC370181108991',
                        name: '出让济南市章丘市刁镇请十户村1046亩农村土地经营权',
                        county: '',
                        time: '2019-02-26',
                        paymethod: '协议转让',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?e37e21fa-6299-445b-b859-1c01548fcaa7'
                    },
                    {
                        id: '2019AC370181109081',
                        name: '出让济南市章丘市刁镇王官村267.2亩农村土地经营权',
                        county: '',
                        time: '2019-02-26',
                        paymethod: '协议转让',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?b16eb89d-3789-4907-a290-f622065d7e89'
                    },
                    {
                        id: '2019AC370181106921',
                        name: '出让济南市章丘市普集街道陈朴村128亩农村土地经营权',
                        county: '',
                        time: '2018-12-27',
                        paymethod: '协议转让',
                        url: 'http://www.jnnccqjyw.cn/article/gpxm/pro.shtml?f673f210-1681-47e9-91aa-470228dfb8f5'
                    },
                ]
            }
        },
        methods: {
            /* 顶端tag更改 */
            changeTag1() {
                document.getElementById('tag1').className = 'taghover'
                document.getElementById('tag2').className = ''
                document.getElementById('tag3').className = ''
                document.getElementById('tag4').className = ''
                document.getElementById('ggboxa').className = 'ggbox tagdisplay'
                document.getElementById('ggboxb').className = 'ggbox'
                document.getElementById('ggboxc').className = 'ggbox'
                document.getElementById('ggboxd').className = 'ggbox'

            },
            changeTag2() {
                document.getElementById('tag1').className = ''
                document.getElementById('tag2').className = 'taghover'
                document.getElementById('tag3').className = ''
                document.getElementById('tag4').className = ''
                document.getElementById('ggboxa').className = 'ggbox'
                document.getElementById('ggboxb').className = 'ggbox tagdisplay'
                document.getElementById('ggboxc').className = 'ggbox'
                document.getElementById('ggboxd').className = 'ggbox'
            },
            changeTag3() {
                document.getElementById('tag1').className = ''
                document.getElementById('tag2').className = ''
                document.getElementById('tag3').className = 'taghover'
                document.getElementById('tag4').className = ''
                document.getElementById('ggboxa').className = 'ggbox'
                document.getElementById('ggboxb').className = 'ggbox'
                document.getElementById('ggboxc').className = 'ggbox tagdisplay'
                document.getElementById('ggboxd').className = 'ggbox'
            },
            changeTag4() {
                document.getElementById('tag1').className = ''
                document.getElementById('tag2').className = ''
                document.getElementById('tag3').className = ''
                document.getElementById('tag4').className = 'taghover'
                document.getElementById('ggboxa').className = 'ggbox'
                document.getElementById('ggboxb').className = 'ggbox'
                document.getElementById('ggboxc').className = 'ggbox'
                document.getElementById('ggboxd').className = 'ggbox tagdisplay'
            },

            /* 左侧tab更改 */
            changegq() {
                /* 改变列表*/
                document.getElementById('gq-list').className = 'grgq-list'
                document.getElementById('xq-list').className = ''
                /* 改变背景*/
                document.getElementById('grgx-top').className = 'grgx-tabs gq-tab'

            },
            changexq() {
                /* 改变列表*/
                document.getElementById('xq-list').className = 'grgq-list'
                document.getElementById('gq-list').className = ''
                /* 改变背景*/
                document.getElementById('grgx-top').className = 'grgx-tabs xq-tab'
            },

            /* 右侧业务统计tab更改 */
            changejytj() {
                document.getElementById('jytj-tab').className = 'tjtabs'
                document.getElementById('dbtj-tab').className = ''
                document.getElementById('jytj-index').style.display = 'block'
                document.getElementById('dbtj-index').style.display = 'none'
            },
            changedbtj() {
                document.getElementById('jytj-tab').className = ''
                document.getElementById('dbtj-tab').className = 'tjtabs'
                document.getElementById('jytj-index').style.display = 'none'
                document.getElementById('dbtj-index').style.display = 'block'
            },
            /* 右侧抵押融资tab更改 */
            changegsjs() {
                document.getElementById('gsjstab').className = 'cur'
                document.getElementById('dyggtab').className = ''
                document.getElementById('jyggtab').className = ''
                document.getElementById('gsjslist').style.display = 'block'
                document.getElementById('dygglist').style.display = 'none'
                document.getElementById('jygglist').style.display = 'none'
            },
            changedygg() {
                document.getElementById('gsjstab').className = ''
                document.getElementById('dyggtab').className = 'cur'
                document.getElementById('jyggtab').className = ''
                document.getElementById('gsjslist').style.display = 'none'
                document.getElementById('dygglist').style.display = 'block'
                document.getElementById('jygglist').style.display = 'none'
            },
            changejygg() {
                document.getElementById('gsjstab').className = ''
                document.getElementById('dyggtab').className = ''
                document.getElementById('jyggtab').className = 'cur'
                document.getElementById('gsjslist').style.display = 'none'
                document.getElementById('dygglist').style.display = 'none'
                document.getElementById('jygglist').style.display = 'block'
            },
            /* 右侧抵押融资tab更改 */
            changezcfg() {
                document.getElementById('zcfgtab').className = 'cur'
                document.getElementById('zjgdtab').className = ''
                document.getElementById('zlxztab').className = ''
                document.getElementById('zcfglist').style.display = 'block'
                document.getElementById('zjgdlist').style.display = 'none'
                document.getElementById('zlxzlist').style.display = 'none'
            }, changezjgd() {
                document.getElementById('zcfgtab').className = ''
                document.getElementById('zjgdtab').className = 'cur'
                document.getElementById('zlxztab').className = ''
                document.getElementById('zcfglist').style.display = 'none'
                document.getElementById('zjgdlist').style.display = 'block'
                document.getElementById('zlxzlist').style.display = 'none'
            }, changezlxz() {
                document.getElementById('zcfgtab').className = ''
                document.getElementById('zjgdtab').className = ''
                document.getElementById('zlxztab').className = 'cur'
                document.getElementById('zcfglist').style.display = 'none'
                document.getElementById('zjgdlist').style.display = 'none'
                document.getElementById('zlxzlist').style.display = 'block'
            },
        },
    }

</script>

<style lang="scss" scoped>

    .content {
        width: 1200px;
        margin: 0 auto;
        text-align: left;
    }

    .mainbox1-l {
        float: left;
        width: 800px;
    }

    .tagsbox {
        height: 274px;
        border: 1px solid #ddd;

        ul div a {
            color: #666;
        }
    }

    .tags {
        width: 100%;
        border-bottom: 1px solid #ddd;
        height: 40px;
        line-height: 40px;
        margin-left: -1px;

        li {
            height: 39px;
            float: left;
            width: 130px;
            text-align: center;
        }

        li a {
            font-size: 16px;
            color: black;
        }
    }

    .taghover {
        margin-top: -1px;
        width: 128px;
        line-height: 36px;
        background: white;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-top: 3px solid #22b45f;
    }

    .more {
        position: absolute;
        top: -35px;
        right: 10px;
    }

    .ggbox {
        position: relative;
        display: none;
        padding-left: 9px;
        padding-top: 10px;
        text-align: left;
        width: 789px;

        li {
            line-height: 36px;
            position: relative;
            background: url(../../../image/point.png) 0 center no-repeat;
            padding-left: 20px;

            &:hover {
                filter: invert(56%) sepia(9%) saturate(7493%) hue-rotate(105deg) brightness(96%) contrast(73%);
            }
        }

        li a {
            color: #000;
        }
    }

    .li-time {
        position: absolute;
        right: 19px;
    }

    .tagdisplay {
        display: block;
    }

    .runl {
        float: left;
        display: block;
        background: url("../../../image/leftbtn.png");
        width: 9px;
        height: 26px;
        margin-top: 25px;
        cursor: pointer;
    }

    .runr {
        float: right;
        display: block;
        background: url("../../../image/rightbtn.png");
        width: 9px;
        height: 26px;
        margin-top: 25px;
        cursor: pointer;
    }

    .run {
        margin-top: 20px;
    }

    .longbox {
        float: left;
        width: 780px;
        height: 112px;
        overflow: hidden;
    }

    .longcontent {
        overflow: hidden;
        width: 2688px;
        text-align: center;

        ul {
            float: left;
        }

        li a {
            color: #000;
            display: block;

            &:hover {
                color: #22b45f;
            }
        }
    }

    #List1 li, #List2 li {
        float: left;
        width: 112px;
    }

    .mainbox1-r {
        float: right;
        width: 380px;
        height: 412px;
        border: 1px solid #ddd;
        border-top: 2px solid #22b45f;
    }

    .qxlj-tt {
        height: 54px;
        line-height: 54px;
        text-align: center;
        border-bottom: 1px solid #ddd;
        font-size: 18px;
        color: #22b45f;
    }

    .qxlj-cont {
        background: #eaefe8;
        text-align: center;
        padding-top: 15px;
        height: 342px;
    }

    #left {
        float: left;
        width: 800px;
        margin-top: -8px;
    }

    .xmbox {
        border-collapse: collapse;

        tr {
            width: 100%;

            th {
                height: 39px;
                line-height: 39px;
                background: #eee;
                border: 1px solid #ddd;
                text-align: center;
                font-weight: normal;
            }

            td {
                height: 39px;
                line-height: 39px;
                text-align: center;
                border: 1px solid #ddd;
                border-top: 0;

                a {
                    padding-left: 10px;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: black;
                    text-align: left;

                    &:hover {
                        color: #22b45f;
                    }
                }
            }
        }

        .xmtt {
            position: relative;
            border-bottom: 2px solid #22b45f;
            height: 40px;
            margin-top: 10px;

            .xm-tab {
                display: block;
                background: url(../../../image/tt_bg.png) no-repeat;
                width: 117px;
                font-size: 16px;
                color: #fff;
                padding-left: 36px;
                height: 40px;
                line-height: 40px;
                font-weight: normal;
                float: left;
            }

            a {
                position: absolute;
                top: 8px;
                right: 0;
                color: #666;
                font-size: 14px;
                font-weight: normal;

                &:hover {
                    color: #22b45f;
                }
            }
        }
    }

    .grgx-tabs {
        position: relative;
        border-bottom: 2px solid #22b45f;
        height: 40px;
        margin-top: 10px;

        p {
            position: absolute;
            top: 8px;
            right: 68px;
            padding: 0 17px;
            height: 28px;
            line-height: 26px;
            background: #f49745;
            border-radius: 28px;
            color: white;

            a {
                display: block;
                color: white;
            }
        }

        .grgq-more {
            position: absolute;
            top: 8px;
            right: 0;
            color: #666666;
            font-size: 14px;
            font-weight: normal;

            &:hover {
                color: #22b45f;
            }
        }

        li {
            float: left;
            width: 117px;
            font-size: 16px;
            color: #000;
            padding-left: 36px;
            height: 40px;
            line-height: 40px;
            font-weight: normal;
        }
    }

    .gq-tab {
        background: url(../../../image/tab_bg.png) no-repeat;

        #grgq {
            color: white;
        }

        #gxmore {
            display: none;
        }
    }

    .xq-tab {
        background: url(../../../image/tab_bg1.png) no-repeat;

        #grxq {
            color: white;
        }

        #gqmore {
            display: none;
        }
    }

    .grgqlist {
        tr {
            display: none;
        }

        .grgq-list {
            display: block;
        }
    }

    .jywd-ul {
        width: 815px;

        li {
            font-size: 16px;
            color: #666666;
            margin-top: 10px;
            width: 258px;
            height: 47px;
            line-height: 47px;
            border: 1px solid #ddd;
            float: left;
            margin-right: 10px;

            a {
                display: block;
            }

            &:hover {
                filter: invert(49%) sepia(96%) saturate(384%) hue-rotate(93deg) brightness(96%) contrast(86%);
            }

            span {
                display: inline-block;
                margin: 0 0 0 25px;
                width: 78px;
                color: #666;
            }

            b {
                font-weight: normal;
                color: #666;
            }
        }
    }

    #right {
        float: right;
        width: 380px;

        .jytj-cont {
            padding: 10px 9px 0 9px;

            a {
                float: left;
                width: 180px;
                height: 32px;
                line-height: 32px;
                background: #eee;
                text-align: center;
                color: #000;
            }

            .tjtabs {
                background-color: #22b45f;
                color: white;
            }

        }
    }

    .zscx-tt {
        text-align: center;
        font-weight: normal;
        padding-bottom: 3px;
    }

    .zscx-cont {
        padding: 10px 9px 0 9px;
    }

    .zscxbox {
        padding: 0 10px 20px;
        border-bottom: 1px solid #eeeeee;
        overflow: hidden;
        clear: both;
    }

    .zslx {
        margin: 0 8px 0 10px;
    }

    .zscxtext {
        float: left;
        width: 259px;
        height: 34px;
        line-height: 34px;
        border: 1px solid #dddddd;
        border-right: 0;
        color: #333;
    }

    .zscxbt {
        float: left;
        width: 80px;
        height: 36px;
        line-height: 36px;
        background: #22b45f;
        color: #fff;
        border: none;
        text-align: center;
        cursor: pointer;
    }

    .xmcxbox {
        padding: 0 9px 0;

        tr {
            td {
                border: none;
                padding-top: 9px;
            }
        }

        .indexsel {
            width: 150px;
            height: 34px;
            border: 1px solid #dddddd;
        }

        .xmcxtext {
            border-right: 1px solid #dddddd;
        }

        .xmcxbotton {
            width: 150px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #22b45f;
            color: #fff;
            cursor: pointer;
        }
    }

    .dyrz-index {
        padding: 10px 9px 0 9px;

        li {
            position: relative;
            line-height: 36px;
            background: url(../../../image/point2.png) 0 center no-repeat;
            padding-left: 19px;

            a {
                display: block;
                width: 75%;
                height: 36px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            }

            span {
                position: absolute;
                top: 0;
                right: 0;
            }

            &:hover {
                filter: invert(49%) sepia(96%) saturate(384%) hue-rotate(93deg) brightness(96%) contrast(86%);
            }
        }

        .dyrz-tabs {
            a {
                float: left;
                display: block;
                width: 120px;
                height: 32px;
                line-height: 32px;
                background: #eeeeee;
                text-align: center;
                color: #000;
            }

            .cur {
                background: #22b45f;
                color: #fff;
            }
        }
    }


</style>
