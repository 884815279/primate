<template>
  <div>
    a组件
    <router-view></router-view>
    <button>  <router-link to="/c" tag="div" >点我跳转C</router-link></button>
   
  </div>
</template>

<script>
export default {
  name: "a",

  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style></style>
