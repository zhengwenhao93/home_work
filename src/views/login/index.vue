<template>
  <el-row class="h-100 login">
    <el-col :span="12" class="left h-100">
      <div
        class="h-100 d-flex justify-content-center align-items-center flex-column"
        label-position="right"
      >
        <h1>欢迎光临</h1>
      </div>
    </el-col>

    <el-col :span="12" class="h-100 right">
      <div class="d-flex h-100 flex-column justify-content-center text-center">
        <h1>欢迎回来</h1>
        <div class="navlist">
          <span>账号密码登录</span>
        </div>

        <el-form
          :rules="rules"
          :model="loginForm"
          class="Form-text"
          label-width="70px"
          ref="form"
        >
          <el-form-item prop="username">
            <el-input
              label-width="100%"
              placeholder="请输入用户名"
              v-model.trim="loginForm.username"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              show-password
              v-model.trim="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loadingStatus"
              @click="handleVerifyForm"
              class="button"
              >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // loading加载状态
      loadingStatus: false,
      // 登录参数
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  methods: {
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },

    async handleSubmitLogin() {
      try {
        this.loadingStatus = true
        const res = await this.$store.dispatch('user/login', this.loginForm)
        if (!res) return
        this.$notify({ message: '登录成功', type: 'success' })
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  background-color: #6366f1;
  color: #fff;
  h1 {
    font-weight: 700;
    font-size: 50px;
  }
}
.Form-text {
  width: 300px;
  margin: 0 auto;
  :hover button {
    background-color: #9197f4;
  }
}
.button {
  width: 100%;
  border-radius: 20px 20px 20px 20px;
  background-color: #626aef;
}

.right {
  h1 {
    font-weight: 700;
    font-size: 30px;
  }
}

.navlist {
  width: 40%;
  border-bottom: 1px solid #d1d7e4;
  margin: 0 auto;
  margin-bottom: 20px;
  span {
    position: relative;
    top: 12px;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    color: #d1d7e4;
  }
}
</style>
