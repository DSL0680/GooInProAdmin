const ChattingIndexPage = () => import('../pages/employerpages/EmployerIndexPage.vue')
const ChattingMainPage = () => import('../pages/chattingpages/ChattingMainPage.vue')

const ChatRouter = {
    path: '/chat',
    component: ChattingIndexPage,  // 함수를 호출하지 않고, 바로 컴포넌트를 참조
    children: [
        {
            path: 'emp/main/:roomId/:eno/:eemail',
            component: ChattingMainPage,
            meta: { role: 'employer' }
        },
        {
            path: 'part/main/:roomId/:pno/:pemail',
            component: ChattingMainPage,
            meta: { role: 'parttimer' }
        }
    ]
}

export default ChatRouter