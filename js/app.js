const app = Vue.createApp({
    data() {
        return {
            userIndex: 0,
            userList: globalUsersList,
            selectedUser: {},
            searchInput: '',
            newMsg:''
        }
    },
    methods: {
        sendMsg () {
            const message = {date: '', text: this.newMsg, status: 'sent'};
            this.userList[this.userIndex].messages.push(message);
            setTimeout (() => {
                
                const receivedMsg = {date: '', text: 'ok', status: 'received'};
                this.userList[this.userIndex].messages.push(receivedMsg);
    
                
            }, 1000)
        },
    }
}).mount('#app');