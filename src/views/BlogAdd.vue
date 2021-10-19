<template>
  <div>
    <el-container>
      <el-header>
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          <el-form ref="form" :model="blog" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="blog.title"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input type="textarea" v-model="blog.description"></el-input>
            </el-form-item>
          </el-form>
          <Markdown class="md" v-model="blog.content" />
          <div class="submmit-form">
            <el-form :inline="true" :model="formInline" class="verify-form">
              <el-form-item>
                <el-input
                  v-model="formInline.password"
                  placeholder="米西米西"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="formInline.captcha"
                  placeholder="验证码"
                ></el-input>
              </el-form-item>
              <div
                class="block"
                style="display: inline; margin:0 20px;margin-top: 1000px;"
              >
                <el-image
                  style="width: 200px; height: 60px"
                  :src="imgSource"
                  fit="contain"
                  @click="changeImg"
                ></el-image>
              </div>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopNav from "../components/navigation/TopNav.vue";
import LeftNav from "../components/navigation/LeftNav.vue";
import Markdown from "vue-meditor";
export default {
  name: "BlogAdd",
  components: {
    TopNav,
    LeftNav,
    Markdown,
  },
  data() {
    return {
      formInline: {
        password: "",
        captcha: "",
      },
      blog: {
        title: "",
        description: "",
        content: "",
      },
      imgSource: "",
    };
  },
  created() {
    const _this = this;
    _this.$http.post("/captcha?flush=yes").then((res) => {
      console.log(res.body, "54123");
      if (res.body.status == "ok") {
        _this.imgSource = res.body.Data[0];
      }
    });
  },
  methods: {
    changeImg() {
      const _this = this;
      _this.$http.post("/captcha?flush=yes").then((res) => {
        console.log(res.body, "回应");
        if (res.body.status == "ok") {
          _this.imgSource = res.body.Data[0];
        }
      });
    },
    onSubmit() {
      const _this = this;
      let data = {
        passward: _this.formInline.password,
        captcha: _this.formInline.captcha,
        title: _this.blog.title,
        description: _this.blog.description,
        content: _this.blog.content,
      };
      console.log(data, "<=data");
      _this.$http
        .post("/captcha", data, { emulateJSON: true })
        .then((res) => {
          console.log(res, "请求成功");
          if(res.body.status == "ok" && res.body.information == "验证成功"){
            console.log("验证成功");
            _this.imgSource = res.body.Data[0]
          }else{
            if(res.body.information == "验证码错误"){
              console.log("验证码错误");
            _this.imgSource = res.body.Data[0]
            }else{
              console.log("密码错误");
            _this.imgSource = res.body.Data[0]
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.submmit-form {
  position: relative;
  /* right: 360px; */
  display: inline-block;
}
.md {
  margin: 50px 50px;
  /* margin-bottom: 100px; */
}
</style>
