<template>
    <div>
   <h3>点我减：{{ count }}</h3>
    <button>-</button>
    <button  @click="jianN">点我减N</button>
    <button @click="yibujianNN">点我异步减N</button>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex';

export default {
    name:'jian' , 

    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['count'])

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        ...mapMutations(['jianNN']),
        ...mapActions(['yibujianN']),
        jianN(){

            this.jianNN(3)
        },
        yibujianNN(){
            this.$store.dispatch('yibujianN',12)

        }

    },
    components: {

    },
};
</script>

<style>

</style>
