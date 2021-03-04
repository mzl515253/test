<template>
  <div>
    <div class="create">新增商品</div>
    <Divider class="divider" />
    <Tabs value="name1">
      <!--- 基础设置 --->
      <TabPane label="基础设置" name="name1">
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
        >
          <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入商品名称" />
          </FormItem>
          <FormItem label="促销语" prop="promotion">
            <Input
              v-model="formValidate.promotion"
              placeholder="可输入商品促销语"
            />
          </FormItem>
          <FormItem label="分类" prop="classification">
            <Input
              v-model="formValidate.classification"
              placeholder="输入商品分类"
            />
          </FormItem>
          <FormItem label="品牌" prop="brand">
            <Input v-model="formValidate.brand" placeholder="输入商品品牌" />
          </FormItem>
          <FormItem label="实际库存">
            <InputNumber
              :max="1000"
              :min="1"
              v-model="formValidate.cont"
            ></InputNumber>
          </FormItem>
          <FormItem label="是否热卖" prop="Sellers">
            <RadioGroup v-model="formValidate.Sellers">
              <Radio label="yes">是</Radio>
              <Radio label="no">否</Radio>
            </RadioGroup>
          </FormItem>
          <!--- 上传图片 --->
          <FormItem label="图片上传" prop="img">
            <Input v-model="formValidate.img" placeholder="输入图片地址" />
          </FormItem>
          <!--- 商品详情 --->
          <FormItem label="商品详情" prop="description">
            <Input
              v-model="formValidate.description"
              placeholder="输入商品详情"
            />
          </FormItem>
          <FormItem label="市场价">
            <InputNumber
              :max="100000000"
              :min="1"
              :step="1.0"
              v-model="formValidate.price"
            ></InputNumber>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit">确定</Button>
            <Button style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      // 输入框
      formValidate: {
        name: "", //名称
        promotion: "", //促销语
        classification: "", //分类
        brand: "", //品牌
        Sellers: "", //是否热卖
        img: "", //图片上传
        description: "", //商品详情
        cont: 1, //实际库存
        price: 0.0, //市场价
      },
      //   规则
      ruleValidate: {
        // 名称
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
          },
        ],
        // 分类
        classification: [
          {
            required: false,
            message: "至少一项",
            trigger: "change",
          },
        ],
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
    handleSubmit() {
      this.$api
        .addgoods({
          name: this.formValidate.name,
          img: this.formValidate.img,
          price: this.formValidate.price,
          promotion: this.formValidate.promotion,
          classification: this.formValidate.classification,
          brand: this.formValidate.brand,
          description: this.formValidate.description,
          cont: this.formValidate.cont,
          Sellers: this.formValidate.Sellers,
        })
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            // console.log(res);
            this.$Message.info(res.msg)
          }else{
              this.$Message.info(res.msg)
          }
        })
    },
  },
  mounted() {
    //生命周期--已加载
  },
  computed: {
    //计算数学
  },
  watch: {
    //数据监听
  },
  filters: {
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
.create {
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
.divider {
  margin: 2px 0;
}
.album {
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 25px;
}
.tabpane {
  display: flex;
  flex-direction: row;
}
.vertical-center-modal {
  height: 200px;
  width: 200px;
  background-color: blue;
}
.upload {
  display: flex;
  flex-direction: column;
}
</style>