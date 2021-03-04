<template>
  <div id="logins">
    <div class="shuru" v-if="flag === 0">
      <h1>欢迎来到老色批后台管理系统</h1>

      <Input
        v-model="username"
        placeholder="请输入用户名"
        style="width: 90%; height: 60px"
      />
      <Input
        v-model="password"
        placeholder="请输入密码"
        type="password"
        password
        style="width: 90%; height: 60px"
      />
      <Input
        v-model="passworda"
        placeholder="请再次确认密码"
        type="password"
        password="true"
        style="width: 90%; height: 60px"
      />

      <div class="anniu">
        <Button size="large" type="success" @click="tologon">立即注册</Button>
        <p @click="tologina" style="color: white; font-size: 16px">
          已有账号，去登陆??
        </p>
      </div>
    </div>

    <div class="to" v-if="flag === 1">
      <h3>注册成功，确认直接登录去首页？</h3>
      <div class="anniu">
        <Button type="primary" @click="tologin">确认</Button>
        <Button @click="quxiao">取消</Button>
      </div>
    </div>

    <div class="shuru" v-if="flag === 2">
      <h1>欢迎来到老色批后台管理系统</h1>

      <Input
        v-model="username"
        placeholder="请输入用户名"
        style="width: 90%; height: 60px"
      />
      <Input
        v-model="password"
        placeholder="请输入密码"
        type="password"
        password
        style="width: 90%; height: 60px"
      />
      <div
        style="
          width: 90%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-item: center;
        "
      >
        <Input
          v-model="keys"
          placeholder="请输入验证码"
          type="text"
          style="width: 50%; height: 100%"
        />
        <div style="width: 40%; height: 100%; color: white">阿发发安抚</div>
      </div>

      <div class="anniu">
        <Button type="primary" size="large" @click="tologin">立即登陆</Button>
      </div>

      <p
        @click="tologona"
        style="color: white; font-size: 16px; margin-top: 20px"
      >
        没有账号,返回注册??
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "", //用户名
      password: "", //密码
      flag: 0,
      passworda: "", //确认密码
      keys: "", //验证码
    };
  },
  components: {},
  methods: {
    //已有账号，去登陆
    tologina() {
      this.flag = 2;
    },
    tologona() {
      this.flag = 0;
    },

    //通过点击事件拿到登陆的请求
    tologin() {
      // axios.post('api/logins').then(res=>{
      //   console.log(res);
      // })

      if (!this.username || !this.password) {
        this.$Message.info("用户名或密码不能为空");
      } else {
        // let reg= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/
        //  if(!reg){
        //          }
        this.$api
          .logins({
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res);

            if (res.code === 200) {
              this.$Message.info(res.msg);

              //登陆成功后，跳转传参
              // this.$router.push({
              // path:'/',
              // query:{
              //   username:this.username
              // },
              // })

              localStorage.setItem("usr", JSON.stringify(this.username));
              this.$router.replace("/");
            } else if (res.code === 201) {
              this.$Message.info(res.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //通过点击事件拿到注册的请求
    tologon() {
      if (!this.username || !this.password || !this.passworda) {
        this.$Message.info("用户名或密码不能为空");
      } else {
        //正则表达式验证密码位数和规范,满足之后再拿请求
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/;
        let pass = this.password;
        if (!reg.test(pass)) {
          this.$Message.info("密码不低于6位且必须含有大写或小写字母");
        } else if (pass !== this.passworda) {
          this.$Message.info("两次密码输入不一致，请重新输入确定");
        } else {
          //在满足密码规范后，满足之后再拿请求
          this.$api
            .logons({
              username: this.username,
              password: this.password,
            })
            .then((res) => {
              console.log(res);

              if (res.code === 200) {
                this.$Message.info(res.msg);
                this.flag = 1;
              } else if (res.code === 201) {
                this.$Message.info(res.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },

    //注册成功后取消登录
    quxiao() {
      this.flag = 2;
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#logins {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F51ee2f234cc7c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617428730&t=f153e1e053ffb2cb2b266e36a44a0dee")
    no-repeat center;
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: white;
  margin-bottom: 50px;
}
.shuru {
  width: 48%;
  height: 60%;
  background: rgba(74, 73, 89, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.anniu {
  width: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.anniu1 {
  width: 100%;
}
p {
  cursor: pointer;
}
.to {
  width: 30%;
  height: 30%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
