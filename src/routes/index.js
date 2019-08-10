import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/views/Main.vue'
import Question from '@/views/Question.vue'

export const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/question/:index',
            name: 'Question',
            component: Question,
            props: true
        },
    ]
})
