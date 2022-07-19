<template>
  <div>hjgbn</div>
</template>

<script>
import { Postgetinfo } from '@/api/user'
import { getItem } from '@/utils/storage.js'
export default {
  name: 'index',

  data() {
    return {
      token: ''
    }
  },

  mounted() {},

  methods: {
    async getList() {
      this.token = getItem('token')
      console.log(this.token)
      const res = await Postgetinfo(this.token)
      console.log(res)
    }
  },
  created() {
    console.log(12345678)
    this.getList()
  }
}
</script>

<style lang="scss" scoped></style>
