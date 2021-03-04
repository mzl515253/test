<template>
  <div id="shops">
    <div class="guanli">
      <div class="bt"><Icon type="ios-briefcase" />商品管理</div>

      <div v-if="this.flag === false" @click="zhan">
        <Icon type="ios-arrow-forward" />
      </div>

      <div v-if="this.flag === true" @click="shou">
        <Icon type="ios-arrow-down" />
      </div>
    </div>

    <div v-if="this.flag === true" class="zhans">
      <div class="xm" @click="xinzeng">
        <div class="imgs">
          <Icon type="ios-calendar-outline" />
        </div>

        <div>
          <h3>新增商品</h3>
          <p>添加新的商品</p>
        </div>
      </div>

      <div class="xm" @click="liebiao">
        <div class="imgs">
          <Icon type="ios-archive" />
        </div>

        <div>
          <h3>商品列表</h3>
          <p>商品的常规管理</p>
        </div>
      </div>

      <div></div>
    </div>

    <div class="guanli">
      <div class="bt"><Icon type="ios-list" />商品配置</div>

      <div v-if="this.flag1 === false" @click="zhan1">
        <Icon type="ios-arrow-forward" />
      </div>

      <div v-if="this.flag1 === true" @click="shou1">
        <Icon type="ios-arrow-down" />
      </div>
    </div>

    <div v-if="this.flag1 === true" class="zhans">
      <div class="xm">
        <div class="imgs">
          <Icon type="ios-keypad" />
        </div>

        <div>
          <h3>商品分类</h3>
          <p>商品分类的常规管理</p>
        </div>
      </div>

      <div class="xm">
        <div class="imgs">
          <Icon type="ios-link" />
        </div>

        <div>
          <h3>商品品牌</h3>
          <p>商品品牌的常规管理</p>
        </div>
      </div>

      <div class="xm">
        <div class="imgs">
          <Icon type="ios-list-box-outline" />
        </div>

        <div>
          <h3>商品模型</h3>
          <p>商品模型的常规管理</p>
        </div>
      </div>

      <div class="xm">
        <div class="imgs">
          <Icon type="ios-ionic-outline" />
        </div>

        <div>
          <h3>商品规格</h3>
          <p>商品规格的常规管理</p>
        </div>
      </div>

      <div class="xm">
        <div class="imgs">
          <Icon type="ios-locate" />
        </div>

        <div>
          <h3>商品属性</h3>
          <p>商品属性的常规管理</p>
        </div>
      </div>

      <div></div>
    </div>

    <div class="guanli">
      <div class="bt"><Icon type="ios-chatbubbles" />评价咨询</div>

      <div v-if="this.flag2 === false" @click="zhan2">
        <Icon type="ios-arrow-forward" />
      </div>

      <div v-if="this.flag2 === true" @click="shou2">
        <Icon type="ios-arrow-down" />
      </div>
    </div>

    <div v-if="this.flag2 === true" class="zhans">
      <div class="xm">
        <div class="imgs">
          <Icon type="ios-call" />
        </div>

        <div>
          <h3>商品评价</h3>
          <p>买家收货后对商品的评价</p>
        </div>
      </div>

      <div class="xm">
        <div class="imgs">
          <Icon type="ios-chatboxes" />
        </div>

        <div>
          <h3>商品咨询</h3>
          <p>买家购买前对商品的咨询</p>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      flag: false,
      flag1: false,
      flag2: false,
    };
  },
  components: {},
  methods: {
    zhan() {
      this.flag = true;
    },

    shou() {
      this.flag = false;
    },
    zhan1() {
      this.flag1 = true;
    },

    shou1() {
      this.flag1 = false;
    },

    zhan2() {
      this.flag2 = true;
    },

    shou2() {
      this.flag2 = false;
    },

    xinzeng() {
      this.$router.push("/creat");
    },

    liebiao() {
      this.$router.push("/product");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#shops {
  width: 100%;
  height: 100%;
  position: absolutes;
  display: flex;

  flex-direction: column;
  align-items: center;
}

.guanli {
  width: 95%;
  height: 60px;
  margin-top: 50px;
  border-bottom: 1px solid #3399ff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bt {

  cursor: pointer;
transform: translateY(-100px);
opacity: 0;
animation: example  2.2s  9s  both infinite;
color: black;

}



@keyframes example{
0%{
transform: translateY(-100px);
color: black;
opacity: 0;
}
25%{
transform: translateY(-75px);
color: gray;
opacity: 0.25;
}
50%{
transform: translateY(-50px);
color: burlywood;
opacity: 0.5;
}
75%{
transform: translateY(25px);
color: yellow;
opacity: 0.75;
}
100%{

transform: translateY(0px);
color: gold;
opacity: 1;
}
75%{
transform: translateY(-25px);
color: red;
opacity: 0.75;
}

50%{
transform: translateY(-50px);
color: purple;
opacity: 0.5;
}


25%{
transform: translateY(-75px);
color: greenyellow;
opacity: 0.25;
}
0%{
transform: translateY(100px);
color: fuchsia;
opacity: 0;
}






}




.bt:hover {
  color: #3399ff;
}
.zhans {
  width: 95%;
  height: 150px;
  display: flex;
  border-bottom: 1px solid #3399ff;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ease;
}

.xm {
  width: 16%;
  height: 50%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(245, 247, 250);
}
.imgs {
  font-size: 40px;
}
</style>
