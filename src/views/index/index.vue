<template>
  <el-container>
    <el-header style="background-color: #4338ca">
      <div class="navbox">
        <div class="left">
          <span> <i class="el-icon-platform-eleme">积云编程</i></span>
          <i class="el-icon-s-fold capter el-Pink" @click="toggleCollapse"></i>
          <el-tooltip effect="dark" content="刷新" placement="bottom-start">
            <i @click="refresh" class="el-icon-refresh el-Pink"></i>
          </el-tooltip>
        </div>

        <div class="right">
          <el-tooltip effect="dark" content="全屏" placement="bottom-start">
            <div class="el-Pink">
              <i class="el-icon-full-screen" @click="toggleScreen"></i>
            </div>
          </el-tooltip>

          <el-dropdown>
            <div class="el-dropdown-link Admin">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span
                >admin<i class="el-icon-arrow-down el-icon--right"></i
              ></span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>

    <el-container>

        <el-col style="width: 25%" :width="isCollapse ? '64px' : '100px'" >
          <el-menu
            v-for="(item, index) in list"
            :key="index"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :collapse-transition="false"
          >
            <el-submenu index="1">
              <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  index="1-1"
                  v-for="(item, index) in list.child"
                  :key="index"
                  >{{ item.child.name }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>

      <el-main style="width: 100%;">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import user from '../../api/user'
import screenfull from 'screenfull'
export default {
  name: 'index',
  inject: ['reload'],
  data() {
    return {
      token: '',
      list: [],
      activeIndex: '1',
      isFullscreen: false,
      // 是否折叠
      isCollapse: false
    }
  },

  mounted() {},

  methods: {
    // 调用侧边栏的数据
    async getPostgetinfo() {
      const res = await user.Postgetinfo()
      this.list = res.data.data.menus
      console.log(this.list)
    },
    // 全屏功能的实现
    toggleScreen() {
      screenfull.toggle()
    },
    // 刷新页面的功能
    refresh() {
      this.reload()
    },

    // 点击按钮切换菜单的折叠和展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  created() {
    this.getPostgetinfo()
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.navbox {
  display: flex;
  color: #fff;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  .left {
    font-size: 20px;
    span {
      font-weight: normal;
      margin: 0 70px;
    }
  }
  .right {
    .el-avatar {
      width: 30px;
      height: 30px;
    }
  }
  .Admin {
    color: #fff;
    .el-avatar {
      vertical-align: middle;
      margin: 0 10px 0 30px;
    }
  }
  .el-Pink:hover {
    cursor: pointer;
    background-color: #4f46e5;
  }
  .el-Pink {
    display: inline-block;
    height: 100%;
    padding: 18px 13px;
  }
}
</style>
