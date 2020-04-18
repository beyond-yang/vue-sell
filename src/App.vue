<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <router-link tag="div" to="/goods" class="tab-item">商品</router-link>
      <router-link tag="div" to="/comments" class="tab-item">评论</router-link>
      <router-link tag="div" to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from "components/header/header";
export default {
  components: {
    VHeader
  }
};
</script>

<style lang="stylus" scoped>
@import 'common/stylus/mixin.styl'
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      line-height: 40px
      font-size: 14px
      color: rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style>
