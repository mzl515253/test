<template>
  <div id="homes">
    <!---------------------------------------------------------顶部标题栏---------------------------------------------------------------->
    <div class="one">
      <div class="one1">
        <p>CareyShop 商城后台管理系统集成方案版本号：1.8.5Build：{{ dates }}</p>
        <iframe
          width="350"
          height="30"
          frameborder="0"
          scrolling="no"
          hspace="0"
          src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"
        ></iframe>
      </div>
      <div class="dongtai">交流群（QQ）：714593455联系QQ：252404501</div>
    </div>
    <!---------------------------------------------------------------------------------------------------------------------->

    <div class="two">
      <div class="bt1">
        <div>
          <i class="iconfont icon-dianshi"></i> 今日概况统计日期：{{ dates }}
        </div>
        <div class="bt2">
          <i
            :class="flag === 0 ? 'bt2' : 'bt3'"
            class="iconfont icon-shuaxin"
            @click="zhuan"
          ></i>
          刷新
        </div>
      </div>

      <div class="content">
        <div class="content1" v-for="(item, index) in arr" :key="index">
          <div class="imgs">
            <Icon :type="item.icon"></Icon>
          </div>
          <div class="txt">
            <span class="imga">{{ item.num }}</span>
            <span>{{ item.txts }}</span>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------------------------------->

    <div class="san">
      <div class="san1">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 订单状态
        </div>
        <div class="content2">
          <div class="txt" v-for="(item, index) in arr1" :key="index">
            <span>{{ item.num1 }}</span>
            <span>{{ item.txta }}</span>
          </div>
        </div>
      </div>

      <div class="san2">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 快捷入口
        </div>

        <div class="anniu">
          <Button>官方主页</Button>
          <Button>文档中心</Button>
          <Button>github</Button>
          <Button>Gitee</Button>
        </div>
        <div class="txtaa">
          <span>宁波互明科技有限公司 技术支持</span>
        </div>
      </div>
    </div>

    <div class="si">
      <div class="sia">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 今日订单量
        </div>
      </div>

      <div class="sib">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 销售统计
        </div>

        <div class="xiao">
          <div class="xiaoa">
            <div class="xiaob">
              <span>昨日销量</span>
            </div>
            <div class="xiaoc">
              <div class="xiaod"><span>订单量</span>:0</div>
              <div class="xiaod"><span>销售额</span>:0</div>
            </div>
          </div>
          <div class="xiaoa">
            <div class="xiaob">
              <span>本月销量</span>
            </div>
            <div class="xiaoc">
              <div class="xiaod"><span>订单量</span>：0</div>
              <div class="xiaod"><span>销售额</span>:0</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sia">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 今日活跃会员
        </div>
      </div>

      <div class="sic">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 订单来源
        </div>

       <div class="sica">

<span>暂无数据</span>
      </div>
    
      </div>

      <div class="sia"></div>

      <div class="sid">
        <div class="biaoqian">
          <i class="iconfont icon-biaoqian"></i> 会员等级
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      dates: "",

      flag: 0,

      arr: [
        {
          num: "0",
          icon: "ios-list",
          txts: "订单数",
        },
        {
          num: "0",
          icon: "ios-photos",
          txts: "完成量",
        },
        {
          num: "0",
          icon: "ios-infinite",
          txts: "收藏量",
        },
        {
          num: "0",
          icon: "ios-medical-outline",

          txts: "新增会员",
        },
        {
          num: "0",
          icon: "ios-paper",
          txts: "售后单",
        },
        {
          num: "0",
          icon: "ios-color-filter",
          txts: "提现单",
        },
        {
          num: "0",
          icon: "ios-analytics",
          txts: "评价回复",
        },
        {
          num: "0",
          icon: "ios-book",
          txts: "咨询待回复",
        },
      ],

      arr1: [
        {
          num1: "2",
          txta: "待付款",
        },
        {
          num1: "2",
          txta: "已付款",
        },
        {
          num1: "2",
          txta: "待发货",
        },
        {
          num1: "2",
          txta: "已发货",
        },
        {
          num1: "2",
          txta: "未评价",
        },
      ],
    };
  },
  components: {},
  methods: {
    zhuan() {
      this.flag = 1;
    },
  },
  mounted() {
    setInterval(() => {
      //每隔一秒执行一次
      let times = new Date(); //新建获取时间
      let timea = times.toLocaleString(); //获取时间格式
      this.dates = timea; //赋值数据用于渲染出时间
    }, 1000);
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
#homes {
  width: 100%;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.one {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid grey;
  display: flex;
  margin: 10px;
}

.one1 {
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.two {
  width: 98%;
  height: 120px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bt1 {
  width: 95%;

  display: flex;
  justify-content: space-between;
}

.bt2:hover {
  color: #3399ff;
  cursor: pointer;
  transform: rotate(0deg);
}

.bt3 {
  transform: rotate(360deg);
  transition: 0.8s all ease;
}

.imgs {
  font-size: 25px;
}

.content {
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content1 {
  width: 8%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.san {
  width: 98%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*----------------------------自动太变化----------------------------------------------*/

.dongtai {
  color: red;
  // animation: example;
  // animation-duration: 1.5s ;
  animation: Tada 1.5s 3s both infinite;
}

@keyframes Tada {
  0% {
    color: red;
  }
  25% {
    color: blue;
  }
  50% {
    color: chartreuse;
  }
  75% {
    color: yellow;
  }
  100% {
    color: purple;
  }
}

/*--------------------------------------------------------------------------*/

.content2 {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.san1 {
  width: 60%;
  height: 90%;
  border: 1px solid gray;
}

.san2 {
  width: 38%;
  height: 90%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
}
.anniu {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.txtaa {
  text-align: center;
  color: #3399ff;
}

.biaoqian {
  width: 100%;
  padding: 10px 0 0 15px;
}

.txt {
  display: flex;
  flex-direction: column;
}

.txt > span {
  text-align: center;
}
.txt > span:nth-of-type(1) {
  font-size: 25px;
  font-weight: bold;
}
.txt > span:nth-of-type(2) {
  font-size: 16px;
  font-weight: lighter;
  color: gray;
  opacity: 0.6;
}

.txt > .imga:hover {
  color: #3399ff;
}

.si {
  width: 98%;
  height: 1500px;
  display: flex;

  align-content: space-around;
  flex-wrap: wrap;
}

.sia {
  width: 60%;
  height: 470px;
  border: 1px solid gray;
}

.sib {
  width: 39%;
  height: 360px;
  border: 1px solid gray;
  position: relative;
  left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.xiao {
  width: 97%;
  height: 70%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.xiaoa {
  width: 100%;
  height: 48%;
  display: flex;
  border: 1px solid #d3d3d3;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
}
.xiaob {
  width: 30%;
  height: 100%;
  text-align: center;
  line-height: 116px;
  background: #dcdcdc;
}

.xiaoc {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.xiaod {
  width: 100%;
  height: 50%;
  border: 1px solid gray;
  display: flex;
  font-size: 18px;
  color: rgba(128, 128, 128, 0.6);
  line-height: 58px;
}

.sic {
  width: 39%;
  height: 490px;
  border: 1px solid gray;
  position: relative;
  left: 2%;
  top: -5%;
}

.sica{

width: 100%;
height: 90%;
display: flex;
margin-top: 15px;
font-weight: bolder;
font-size: 30px;
flex-direction: column;
justify-content: center;
align-items: center;

  
}

.sid {
  width: 39%;
  height: 490px;
  border: 1px solid gray;
  position: relative;
  left: 2%;
  top: -2%;
}
</style>
