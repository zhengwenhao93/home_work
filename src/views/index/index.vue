<template>
  <el-container>
    <el-header style="background-color: #4338ca">
      <div>
        <i class="el-icon-platform-eleme">积云编程</i>
      </div>

      <div>
        <i class="el-icon-s-fold"></i>
        <i class="el-icon-refresh"></i>
        <i class="el-icon-full-screen"></i>
      </div>
    </el-header>

    <el-container>
      <el-col :span="5">
        <el-menu
          v-for="(item, index) in list"
          :key="index"
          default-active="2"
          class="el-menu-vertical-demo"
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

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import user from '../../api/user'
export default {
  name: 'index',

  data() {
    return {
      token: '',
      list: []
    }
  },

  mounted() {},

  methods: {
    async getPostgetinfo() {
      const res = await user.Postgetinfo()
      this.list = res.data.data.menus
      console.log(this.list)
    }
  },
  created() {
    this.getPostgetinfo()
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  color: #fff;
  display: flex;
  div {
    justify-content: space-around;
  }
}
</style>
