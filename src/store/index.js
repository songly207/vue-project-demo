import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    //模块 
    // this.$store.state.user --> moduleA 的状态
    modules: {
        user: user
    },
    state: {
        //弹出层相关变量
        maskIsShow: false,
        popupTitle: '',
        popupCpnName: '',
        popupData: null,

        //sqlTree 文件夹信息/可选存储位置
        foldersInfo:[
        ],
        //所选中的当前SqlTask信息
        curSqlTask: {},
        sqlIsparsed: false
    },
    //getters 是从 store 中的 state 中派生出一些状态
    getters: {
    },
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    // 实际上可以在组件中通过 this.$store.state.countX = xxx  直接改变
    /**
     *  Attention/注意 ( mutation 都是同步事务 )
     *  组件中这样提交
     *  this.$store.commit('increment', {
            amount: 10
        })
        this.$store.commit({
            type: 'increment',
            amount: 10
        })
     */
    mutations: {
        changeMask(state, payload) {
            state.maskIsShow =  payload
        },
        changePopupTitle(state, payload) {
            state.popupTitle = payload
        },
        changePopupCpnName(state, payload) {
            state.popupCpnName = payload
        },
        changePopupData(state, payload) {
            state.popupData = payload
        },
        setFoldersInfo(state, payload) {
            state.foldersInfo = payload;
        },
        setCurSqlTask(state, payload) {
            state.curSqlTask = payload;
        },
        setSqlIsparsed(state, payload) {
            state.sqlIsparsed = payload;
        }
    },

    // Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作
    // 
    /**
     * 在组件中触发  分发Action
     * this.$store.dispatch('increment')
     * 
     * // 以载荷形式分发
        store.dispatch('incrementAsync', {
            amount: 10
        })

        // 以对象形式分发
        store.dispatch({
            type: 'incrementAsync',
            amount: 10
        })
     * 
     * 
     */
    /**
     *
     *  store.dispatch('actionA').then(() => {
            // ...
        })
     */
    actions: {
        popup(context, {title, isShow, data, cpnName}){
            if(isShow){
                context.commit('changeMask', isShow);
                context.commit('changePopupTitle', title);
                context.commit('changePopupCpnName', cpnName);
                context.commit('changePopupData', data);
            }else {
                context.commit('changeMask', false);
                context.commit('changePopupTitle', '');
                context.commit('changePopupCpnName', '');
                context.commit('changePopupData', null);
            }
        },
        increment(context) { //increment({commit, state, getter}) {
            context.commit('increment',{amount: 10})
        },
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },

        //组合多个 action，以处理更加复杂的异步流程
        actionA({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation')
                    resolve()
                }, 1000)
            })
        },  
        actionB({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        },
        //
        async actionA({ commit }) {
            commit('gotData', await getData())
        },
        async actionB({ dispatch, commit }) {
            await dispatch('actionA') // 等待 actionA 完成
            commit('gotOtherData', await getOtherData())
        }
    }
})
export default store