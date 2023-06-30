<template>
    <div>
    <h3>点我加：{{this.$store.state.count }}</h3>
    <button @click="jiajia">+</button>
    <button @click="jiajia2">点我加N</button>
    <button @click="jiajia3">异步加1</button>
    <button @click="jiajia4">异步加N</button>
    </div>
</template>

<script>
export default {
    name:'jia' , 

    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        jiajia(){
            this.$store.commit('jia')
        },
        jiajia2(){
            this.$store.commit('jiaN',2   )
        },
      jiajia3(){
        this.$store.dispatch('yibujia')
      },
      jiajia4(){
        this.$store.dispatch('yibujiaN',5)
      }

    },
    components: {

    },
};
</script>

<style>

</style>
