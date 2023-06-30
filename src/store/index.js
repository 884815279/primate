import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
      jia(state){
            state.count++
        },
        jiaN(state,step){
            state.count+=step;
        },
        jianNN(state,step){
            state.count-=step;
        }
    },
    actions:{
        yibujia(context){
            setTimeout(() => {
              context.commit('jia')  
            }, 1000);
        },
        yibujiaN(context,step){
            setTimeout(() => {
               context.commit('jiaN',step) 
            }, 1000);
        },
        yibujianN(){
            setInterval((context,step ) => {
                context.commit('jianNN',step)
            }, 1000);
        }
    }
})