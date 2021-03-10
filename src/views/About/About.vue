<template>
  <div id="about">
    <div class="top">
      <div class="imga" v-if="flag === true">
        <img src="../../assets/all.png" />
      </div>
      <div class="imga" v-if="flag === false">
        <img src="../../assets/all1.png" />
      </div>
      <div class="leibie">
        <div class="zhi" v-if="flag">
          <Icon type="ios-undo" color="#BDC5C8" @click="lefts"></Icon>
        </div>
        <div class="zhi" v-if="!flag">
          <Icon type="ios-redo" color="#BDC5C8" @click="rights"></Icon>
        </div>

        <!------------------------------------------顶部栏是数组文字加图标选项渲染------------------------------------------------>
        <div class="zhi1" v-for="(item, index) in list" :key="index">
          <div   class="top_zhi"   @click="menu(item,index)">
            <Icon :type="item.icon" color="#BDC5C8"></Icon>{{ item.name }}
          </div>
        </div>
      </div>

      <!------------------------------------------顶部栏是纯数组图标渲染------------------------------------------------>
      <div class="zhi1" v-for="(item, index) in arrs" :key="index">
        <Tooltip :content="item.ming" placement="top-start">
          <Icon :type="item.icon" color="#BDC5C8"   @click="duihua"></Icon>
        </Tooltip>
      </div>
      <!-------------------------------->
      <div class="zhi1" v-if="!names" @click="tologin">你好,请先登录</div>
      <div
        class="zhi1"
        v-if="names"
        style="
          color: white;
          width: 10%;
          display: flex;
          justify-content: space-around;
        "
      >
        <Dropdown>
          <div href="javascript:void(0)">
            <Icon type="ios-color-filter" />
          </div>
          <DropdownMenu slot="list">
            <DropdownItem class="bs">-默认</DropdownItem>
            <DropdownItem class="bs">-中</DropdownItem>
            <DropdownItem class="bs">-小</DropdownItem>
            <DropdownItem class="bs">。。最小</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <div href="javascript:void(0)">
            你好，<span>{{ names }}</span>
          </div>
          <DropdownMenu slot="list">
            <DropdownItem class="bs">打开前台</DropdownItem>
            <DropdownItem class="bs">重载菜单</DropdownItem>
            <DropdownItem class="bs">清空历史</DropdownItem>
            <DropdownItem class="bs">清除缓存</DropdownItem>
            <DropdownItem class="bs">优化系统</DropdownItem>
            <DropdownItem class="bs"> 构建分析</DropdownItem>
            <DropdownItem class="bs">API调试</DropdownItem>
            <Divider />
            <DropdownItem class="bs">修改密码</DropdownItem>
            <DropdownItem class="bs">未读消息</DropdownItem>
            <Divider />
            <div @click="tuichu">
              <DropdownItem class="bs">退出</DropdownItem>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
<!----------------更换主题的对话框-------------->
 <Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">

        <div>

         <h3>主题</h3>

        <p>对话框内容</p>

        <p>对话框内容</p>

        </div>
   
    </Modal>
<!----------------更换主题的对话框-------------->

    <div class="bottom">
      <!------------------------------------------侧边栏数组文字加图标第一项选项渲染----------------------------------------------->
      <div class="cebian" v-if="flag === true">
        <div :class="flags === 0 ? 'homes' : 'hom'">
          {{ namea }}
          暂无数据
        </div>

        <div
          :class="flags === 1 ? 'zhi2' : 'hom'"
          v-for="(itemb, indexb) in arry"
          :key="indexb"
          @click="toshopohome"
        >
          <Icon :type="itemb.ico"></Icon>
          {{ itemb.name }}
        </div>

        <div :class="flags === 1 ? 'zhi2' : 'hom'">
          <!------------------------------------------侧边栏数组文字加图标选项渲染----------------------------------------------->
          <!-- {{ arr1 }} -->
          <Menu
            theme="dark"
            mode="vertical"
            :accordion="true"
            width="100%"
            :open-names="['index']"
          >
            <div v-if="arr1.length">
              <Submenu :name="index" v-for="(item, index) in arr1" :key="index">
                <template slot="title">
                  <div @click="menu2(item, index)">
                    <Icon :type="item.icona"></Icon>
                    {{ item.name }}
                  </div>
                </template>

                <Menu-item
                  :name="indexa - (indexa + 1)"
                  v-for="(itema, indexa) in arr2"
                  :key="indexa"
                  :to="itema.urla"
                >
                  <div @click="menu3(itema)">
                    <Icon :type="itema.icos"></Icon>{{ itema.name }}
                  </div>
                </Menu-item>
              </Submenu>
            </div>

          </Menu>
        </div>
      </div>

      <div class="cebian1" v-if="flag === false">
        <div :class="flags === 0 ? 'homes' : 'hom'">
          {{ namea }}
          暂无数据
        </div>

        <div
          :class="flags === 1 ? 'zhi2' : 'hom'"
          v-for="(itemb, indexb) in arry"
          :key="indexb"
        >
          <Icon :type="itemb.ico"></Icon>
        </div>

        <div :class="flags === 1 ? 'zhi2' : 'hom'">
          <!------------------------------------------侧边栏数组文字加图标选项渲染----------------------------------------------->
          <Menu
            theme="dark"
            :accordion="true"
            mode="vertical"
            width="100%"
            :open-names="['index']"
          >
            <Submenu :name="index" v-for="(item, index) in arr1" :key="index">
              <template slot="title">
                <div @click="menu2(item, index)">
                  <Icon :type="item.icona"></Icon>
                </div>
              </template>
              <Menu-item
                :name="indexa - (indexa + 1)"
                v-for="(itema, indexa) in arr2"
                :key="indexa"
                :to="itema.urla"
              >
                <div @click="menu3(itema, indexa)">
                  <Icon :type="itema.icos"></Icon>
                </div>
              </Menu-item>
            </Submenu>
          </Menu>
        </div>
      </div>
      <div class="bottom_right"   v-if="flag === true">
        <div class="bottom_top">
          <div class="dianjis" v-for="(item, index) in arr3" :key="index">
            <div
              :class="flaga === index ? 'dianji1' : 'dianji'"
              @click="dj(item,index)"
            >
              {{ item.name }}<Icon type="ios-close" @click="del(item, index)" />
            </div>
          </div>
        </div>
        <div class="ziluyou">
          <router-view></router-view>
        </div>
      </div>
      <div class="bottom_right1"  v-if="flag===false" >
        <div class="bottom_top1">
          <div class="dianjis1" v-for="(item, index) in arr3" :key="index">
            <div
              :class="flaga === index ? 'dianji3' : 'dianji2'"
              @click="dj(item,index)"
            >
              {{ item.name }}<Icon type="ios-close" @click="del(item, index)" />
            </div>
          </div>
        </div>
        <div class="ziluyou1">
          <router-view></router-view>
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
      names: "", //接受登录页传过来的用户名用于渲染
      namea: "", //接受首页
 modal1: false,  //主题更换对话框标记
      srcs: [
        {
          urls: "/shophome",
        },
        {},
      ], //用于顶部跳转路径数组

      lists: [
        //顶部和文字选项需要插入，病并搭配使用的图标数组
        {
          icons: "ios-home",
        },
        {
          icons: "ios-lock",
        },

        {
          icons: "ios-locate",
        },
        {
          icons: "ios-map",
        },

        {
          icons: "ios-recording",
        },

        {
          icons: "ios-stats",
        },

        {
          icons: "ios-man",
        },
        {
          icons: "ios-map",
        },
        {
          icons: "ios-options",
        },
        {
          icons: "ios-cloud",
        },
      ],

      lists1: [
        //侧边栏和文字选项需要插入，病并搭配使用的图标数组
        {
          icons: "ios-recording",
        },

        {
          icons: "ios-stats",
        },

        {
          icons: "ios-man",
        },
        {
          icons: "ios-map",
        },
        {
          icons: "ios-options",
        },
        {
          icons: "ios-cloud",
        },
      ],

      list: [], //顶部导航栏文字选项

      arry: [], //侧边栏文字加图标首选项

      arr: [], //侧边栏文字选项
      arr1: [], //侧边栏文字除去首选项

      arr2: [], //侧边栏第三层的文字选项
      arr3: [], //接受点击侧边后顶部栏的渲染
      arrs: [
        //顶部导航栏右侧图标选项
        {
          icon: "ios-search",
          ming: "搜索",
        },
        {
          icon: "ios-glasses",
          ming: "全屏",
        },
        {
          icon: "ios-color-wand",
          ming: "主题",
        },
      ],
      flag: true,
      flags: 0,
      flaga: 0,
    };
  },
  components: {},
  methods: {
    //顶部栏图标点击动态属性变化
    lefts() {
      this.flag = false;
    },
    //顶部栏图标点击动态属性变化
    rights() {
      this.flag = true;
    },
    handleTabRemove(name) {
      this["tab" + name] = false;
    },

    //通过顶部栏点击事件传参赋值给第二层数组
    menu(item, index) {
      if (item.name == "首页") {
        this.flags = 0;
        this.namea = item.name;
        this.$router.push("/");

        console.log(this.namea);
      } else {
        this.flags = 1;

        this.list.map((item, index) => {
          this.srcs.map((itemc, indexc) => {
            if (index === indexc) {
              item.urlc = itemc.urls;
            }
          });
        });
        console.log(this.list);

        this.arr = item.children;
        //截取第二层数组每一项中的第一个对象赋值给data中自定义数组用于渲染
        this.arr1 = this.arr.slice(1); //截取第二层数组除去第一项的每一项
        this.arry = this.arr.slice(0, 1);
        //在截取第二层数组每一项中的第一个对象赋值给data中自定义数组arry后在通过map循环拿到自定义数组lists中的icons属性赋值给新添加的arry中的item并添加ico属性用于渲染在文字标题前的图标
        this.arry.map((itemb, indexb) => {
          this.lists.map((itema, indexa) => {
            if (indexb === indexa) {
              itemb.ico = itema.icons;
            }
          });
        });
        //给第二层数组搭配图标数组
        this.arr1.map((item, index) => {
          this.lists1.map((itema, indexa) => {
            if (index === indexa) {
              item.icona = itema.icons;
            }
          });
        });
      }
    },

    //请求中第二层数据通过点击事件传参拿到参数中第三层数组赋值给自定义数组用于渲染选项
    menu2(item, aaa) {
      this.arr2 = item.children;
      console.log(this.$route.meta);
      this.arr2.map((item, index) => {
        this.$route.meta.list[aaa].map((itema, indexa) => {
          if (index === indexa) {
            item.icos = itema.icons;
            item.urla = itema.urlb;
          }
        });
      });
      console.log(item.children);
    },


//添加第二层顶部栏
    menu3(itema, indexa) {
      if (sessionStorage.getItem("items") === null) {
        let arr = [];
        let obj = {};
        obj.name = itema.name;
        arr.push(obj);
        sessionStorage.setItem("items", JSON.stringify(arr));
      } else {
        let arrs = JSON.parse(sessionStorage.getItem("items")); //不是空的情况
        let objs = {};
        objs.name = itema.name;
        let flag = arrs.some((item) => {
          //判断有没有重复的情况。在有的情况下 返回相等
          return item.name === objs.name;
        });
        if (!flag) {
          //没有重复的情况 在数组中添加新的元素
          arrs.push(objs);
          sessionStorage.setItem("items", JSON.stringify(arrs));
        }
      }
      this.arr3 = JSON.parse(sessionStorage.getItem("items"));
      console.log(this.arr3);
    },

    del(item, index) {
      let arra = JSON.parse(sessionStorage.getItem("items"));

      arra.splice(index, 1);
      sessionStorage.setItem("items", JSON.stringify(arra));
      this.arr3 = arra;
    },

    dj(item,index) {
      console.log(this.arr3);
     this.flaga = index;
this.arr3.map((item,index)=>{
 


})





    },


//点击弹出对话框

duihua(){
this. modal1=true

},


//确定后更换主题成功
ok(){

this.$Message.info('更换主题成功');

},

cancel(){

 this.$Message.info('取消主题更换');

},




    //未登录，点击跳转登录页
    tologin() {
      this.$router.replace("/login");
    },
    //退出登录
    tuichu() {
      this.$router.replace("/login");
      localStorage.removeItem("usr");
    },

    toshopohome() {
      //去商品首页

      this.$router.push("/shophome");
    },
  },
  mounted() {
    // this.names=this.$route.query.username

    let nam = JSON.parse(localStorage.getItem("usr"));
    this.names = nam;

    this.$api
      .topnav()
      .then((res) => {
        this.list = res.data;

        this.list.map((item, index) => {
          // console.log(item);
          this.lists.map((itema, indexa) => {
            if (index === indexa) {
              item.icon = itema.icons;
            }
          });
        });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
#about {
  width: 100%;
  height: 100%;
  position: absolute;
}
.top {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 999;
  background: #2c3643;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .leibie {
    width: 68%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .yonghu {
    width: 25%;
    height: 100%;
    display: flex;

    justify-content: space-around;
    align-items: center;
  }

  .txt {
    color: white;
  }
}

.homes {
  width: 80%;
  height: 20%;
  background: rgba(44, 31, 31, 0.4);
  text-align: center;
  line-height: 600%;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.hom {
  width: 0;
  height: 0;
  font-size: 0;
  display: none;
}

.zhi {
  font-size: 40px;
}
.zhi1 {
  cursor: pointer;
  font-size: 18px;
}

.zhi2 {
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
  cursor: pointer;
  color: white;
}
.zhi3 {
  width: 20%;
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;
}

.bottom {
  flex: 1;
  height: 100%;
  position: relative;
  top: 12%;
  display: flex;
  justify-content: start;
  align-items: center;
}

.bottom_right1{
  width: calc(100% - 5%);
  height: 100%;

  display: flex;
  margin-left:100PX;

  align-items: center;
  flex-direction: column;



.bottom_top1{

    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 99;

left:6%;
    background: #2c3643;
    display: flex;
    justify-content: start;
    align-items: center;


}

  .ziluyou1 {
    width: calc(100% - 1%);
    height: 100%;
    position: relative;
    top: 8%;

    margin-top: 10px;
    background: white;
  }



.dianjis1 {
  width: 8%;
  height: 100%;
  font-size: 15px;
  margin: 0 5px 0 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

}



.dianji2 {
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin: 0 10px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dianji3 {
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin: 0 10px;
  color: #2c3643;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}



.bottom_right {
  width: calc(100% - 14%);
  height: 100%;

  display: flex;

  align-items: center;
  flex-direction: column;

  .bottom_top {
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 99;

left:14.1%;
    background: #2c3643;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .ziluyou {
    width: calc(100% - 1%);
    height: 100%;
    position: relative;
    top: 8%;
    left: 16.5%;
    margin-top: 10px;
    background: white;
  }
}

.dianjis {
  width: 8%;
  height: 100%;
  font-size: 15px;
  margin: 0 5px 0 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dianji {
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin: 0 10px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dianji1 {
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin: 0 10px;
  color: #2c3643;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cebian {
  height: 100%;
  width: 14.8%;
  position: fixed;
  z-index: 999;
  background: #2c3643;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cebian1 {
  width: 6%;
  height: 100%;
  background: #2c3643;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bs:hover {
  color: #3399ff;
}


.ivu-select-dropdown{

z-index: 999;


}


.top_zhi:hover{
  width: 100%;
padding: 40px  10px;
background: black;


}
</style>
