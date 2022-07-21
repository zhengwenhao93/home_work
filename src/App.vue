<template>
    <router-view v-if="showRouter" />
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      showRouter: true
    }
  },
  methods: {
    reload() {
      this.showRouter = false
      this.$nextTick(function () {
        this.showRouter = true
      })
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
