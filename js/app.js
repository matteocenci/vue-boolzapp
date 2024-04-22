const app = Vue.createApp({
    data() {
        return {
            userIndex: 0,
            userList: globalUsersList,
            selectedUser: {},
            searchInput: '',
            newMsg:''
        }
    }
}).mount('#app');