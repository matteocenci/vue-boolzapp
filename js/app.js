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
    computed: {
        searchedChat () {
            return this.userList.filter((element)=> {
                return element.name.toLowerCase().startsWith(this.searchInput.toLowerCase())
            })
        }
    },
    methods: {
        selectedContact(contact) {
            return this.selectedUser=contact
        },

        sendMsg () {
            const message = {date: '', text: this.newMsg, status: 'sent'};
            this.userList[this.userIndex].messages.push(message);
            setTimeout (() => {
                
                const receivedMsg = {date: '', text: 'ok', status: 'received'};
                this.userList[this.userIndex].messages.push(receivedMsg);
    
                
            }, 1000)
        },

        deleteMsg: function(index) {
            console.log("tic");
            this.userList[this.userIndex].messages.splice(index, 1);
        }
    }


}).mount('#app');