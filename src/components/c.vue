<template>
    <div>
     <button @click="push">点击跳转到B</button>
     <button @click="get">去参数</button>

    </div>
</template>

<script>
export default {
    name:'c' , 

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
        push(){
            this.$router.push({
                path:"/b",
                query:{
                    id:22
                }
            })
        },
        get(){
            console.log(this.$router.query.id);
        }

    },
    components: {

    },
};
</script>

<style>

</style>
