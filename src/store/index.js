import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        username: '',
        list: [
            {
                question: '',
                answer: [
                    {
                        placeholder: '첫번째',
                        text: '',
                        isAnswer: false
                    },
                    {
                        placeholder: '두번째',
                        text: '',
                        isAnswer: false
                    },
                    {
                        placeholder: '세번째',
                        text: '',
                        isAnswer: false
                    },
                    {
                        placeholder: '네번째',
                        text: '',
                        isAnswer: false
                    }
                ]
            }
        ]
    },
    getters: {

    },
    mutations: {
        SET_LIST(state, data){
            state.list.push(data)
        }
    },
    actions: {
        FETCH_LIST(context, data) {
            context.commit('SET_LIST', data)
        }
    }
})