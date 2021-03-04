//封装所有请求
import http from './index'


export default {
    //登陆
    logins({
        username,
        password
    }) {
        return http.post('/user/login', {
            username: username,
            password: password,

        })
    },



    //顶部导航栏

    topnav() {
        return http.get('/nav/getNav')
    },

    //注册
    logons({
        username,
        password
    }) {
        return http.post('/user/register', {
            username: username,
            password: password

        })
    },




    // 添加商品（名称，图片，价格，促销，分类，品牌，详情，数量，热卖）
    addgoods({
        name,
        img,
        price,
        promotion,
        classification,
        brand,
        description,
        cont,
        Sellers
    }) {
        return http.post('/goods/addgoods', {
            name: name,
            img: img,
            price: price,
            promotion: promotion,
            classification: classification,
            brand: brand,
            description: description,
            cont: cont,
            Sellers: Sellers
        })
    },
    // 获取商品列表
    getGoods() {
        return http.get('/goods/getGoods')
    },
    // 删除商品
    delGoods({
        id
    }) {
        return http.post('/goods/delGoods', {
            id: id
        })
    },
    // 修改商品
    changeGoods({
        id,
        name,
        price,
        cont
    }) {
        return http.post('/goods/changeGoods', {
            id: id,
            name: name,
            cont: cont,
            price: price,
        })
    },
    // 查询商品
    findGoods({
        name
    }) {
        return http.get(`/goods/findGoods?name=${name}`)
    },

    //添加秒杀
    addHotgoods({
        id
    }) {
        return http.post('/hotgoods/addhotgoods', {
            id: id
        })
    },
    //删除秒杀
    delHotgoods({
        id
    }) {
        return http.post('/hotgoods/delHotgoods', {
            id: id
        })
    }










}