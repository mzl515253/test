<template>
  <div>
    <!-- 搜索 -->
    <Form
      ref="formInline"
      :model="formInline"
      :label-width="80"
      style="width: 600px; display: flex; top: 10px; position: relative"
    >
      <FormItem prop="classification" label="分类">
        <Input
          v-model="formInline.classification"
          placeholder="请输入商品分类"
        />
      </FormItem>
      <FormItem prop="name" label="关键词">
        <Input
          v-model="formInline.name"
          placeholder="请输入关键词"
          clearable
          on-clear="delvalue"
        >
          <Icon type="ios-search" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="find">查询</Button>
      </FormItem>
    </Form>
    <Divider class="divider" />
    <!-- 商品列表 -->

    <Table v-if="flag === true" :columns="columns1" :data="value2">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="selection">
        <div>
          <i-Switch
            v-model="row.recommended"
            @on-change="change(row, row.recommended)"
          />
        </div>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="edit(row)"
          >修改商品</Button
        >
        <Button type="error" size="small" @click="remove(row)">删除商品</Button>
      </template>
    </Table>

    <Table v-if="flag === false" :columns="columns1" :data="objs">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="edit(row)"
          >修改商品</Button
        >
        <Button type="error" size="small" @click="remove(row)">删除商品</Button>
      </template>
    </Table>

    <!-- 修改商品 -->
    <Modal
      v-model="dialogFormVisible"
      draggable
      scrollable
      title="修改商品"
      @on-ok="ok"
    >
      <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem label="名称" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入商品名称" />
        </FormItem>
        <FormItem label="数量">
          <InputNumber
            :max="1000"
            :min="1"
            v-model="formValidate.cont"
          ></InputNumber>
        </FormItem>
        <FormItem label="价格">
          <InputNumber
            :max="100000000"
            :min="1"
            :step="1.0"
            v-model="formValidate.price"
          ></InputNumber>
        </FormItem>
      </Form>
    </Modal>
    <Page :total="16" size="small" show-total show-elevator show-sizer />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
      // 搜索
      formInline: {
        classification: "", //分类
        name: "", //关键词
      },
      //   列表横坐标
      columns1: [
        {
          title: "序号",
          type: "index",
          width: 100,
          align: "center",
        },
        {
          title: "名称",
          slot: "name",
        },
        {
          title: "价格(元)",
          key: "price",
        },
        {
          title: "数量(件)",
          key: "cont",
        },
        {
          title: "是否秒杀",
          slot: "selection",
          width: 150,
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          width: 200,
          align: "center",
          //   操作按钮
          // render: (h, params) => {
          // return h("div", [
          //   h(
          //     "Button",
          //     {
          //       props: {
          //         type: "primary",
          //         size: "small",
          //       },
          //       style: {
          //         marginRight: "5px",
          //       },
          //       on: {
          //         click: () => {
          //           this.show;
          //         },
          //       },
          //     },
          //     "修改商品"
          //   ),
          //   h(
          //     "Button",
          //     {
          //       props: {
          //         type: "error",
          //         size: "small",
          //       },
          //       on: {
          //         click: () => {
          //           this.remove;
          //         },
          //       },
          //     },
          //     "删除商品"
          //   ),
          // ]);
          // },
        },
      ],
      value2: [], //商品列表
      dialogFormVisible: false, //修改商品
      // 输入框
      formValidate: {
        name: "", //名称
        cont: 1, //实际库存
        price: 0.0, //市场价
      },

      flag: true, //查找后列表显示数组
      objs: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法

    // 查询商品
    find() {
      this.flag = false;
      this.$api.findGoods({ name: this.formInline.name }).then((res) => {
        let ob = res.data;
        this.objs.push(ob);

        console.log(res);
      });

      //  this.ok()
    },
    // 获取商品列表
    get() {
      this.$api.getGoods().then((res) => {
        console.log(res);
        this.value2 = res.data;
        // console.log(this.value2);
      });
    },
    // 修改商品
    edit(row) {
      // console.log(row);
      this.id = row._id;
      // console.log(this.id,111);
      this.dialogFormVisible = true;
      this.form = JSON.parse(JSON.stringify(row));
      //  this.get()
    },
    ok() {
      // console.log(row);
      this.$api
        .changeGoods({
          id: this.id,
          name: this.formValidate.name,
          cont: this.formValidate.cont,
          price: this.formValidate.price,
        })
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            // console.log(res);
            this.$Message.info(res.msg);
          } else {
            this.$Message.info(res.msg);
          }
          this.get();
        });
    },
    // 删除商品
    remove(row) {
      // console.log(row);
      this.$api.delGoods({ id: row._id }).then((res) => {
        // console.log(res)
      });
      this.get();
    },
    // 秒杀
    change(e, value) {
      if (value) {
        this.$api.addHotgoods({ id: e._id }).then((res) => {
          console.log(res);
        });
      } else {
        this.$api.delHotgoods({ id: e._id }).then((res) => {
          console.log(res);
        });
      }
      console.log(e, value);
    },

    //删除输入框内容
    delvalue() {
      console.log(111);
      this.flag = true;
      this.formInline.name = "";
      this.get();
    },
  },
  mounted() {
    //生命周期--已加载

    // 商品列表
    this.get();
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
.divider {
  margin: 2px 0;
}
</style>