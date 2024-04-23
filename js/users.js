console.log(Vue);
// const  message = {date: '', text: newMsg, status: sent}
// globalUsersList[0].messages.push(message)

const globalUsersList = [
    {
        name: 'Michele',
        img: 'img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date:'',
                text: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date:'',
                text: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        img: 'img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Ciao come stai?',
                status: 'sent'
            },
            {
                date:'',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date:'',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        img: 'img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'La Marianna va in campagna',
                status: 'received'
            },
            {
                date:'',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date:'',
                text: 'Ah, scusa.',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        img: 'img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date:'',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        img: 'img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date:'',
                text: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        img: 'img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date:'',
                text: 'Non ancora',
                status: 'received'
            },
            {
                date:'',
                text: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        img: 'img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date:'',
                text: 'Grazie per avermelo ricordato, e scrivo subito!',
                status: 'received'
            },
        
        ],
    },
    {
        name: 'Davide',
        img: 'img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date:'',
                text:'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date:'',
                text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date:'',
                text: 'OK!!',
                status: 'received'
            }
        
        ],
    }
]


