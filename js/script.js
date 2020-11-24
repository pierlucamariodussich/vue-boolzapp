const date = new Date()
var newdate = date.getDate(00)+'/'+date.getMonth(00)+'/'+date.getFullYear(00)+'  '+date.getHours(00)+':'+ date.getMinutes(00)
const contactArray = [
  {
    name: 'Michele',
    src:'img/avatar_1.jpg',
    chatActive: true,
    lastSeen: date.getHours(00)+':'+ date.getMinutes(00),
    messages: [{
                text: ' Hai portato a spasso il cane?',
                date: newdate,
                send: false,
                }
              ],
  },
  {
    name: 'Fabio',
    src:'img/avatar_2.jpg',
    chatActive: false,
    lastSeen: ' 10.30  del 22/11/2020',
    messages: [{
                text: 'ciao come stai?',
                date: newdate,
                send: false,
                }
              ],
  },
  {
    name: 'Samuele',
    src:'img/avatar_3.jpg',
    chatActive: false,
    lastSeen: date.getHours(00)+':'+ date.getMinutes(00),
    messages: [{
                text: 'Sei in ritardo sbrigati!',
                date: newdate,
                send: false,
                }
              ],
  },
  {
    name: 'Luisa',
    src:'img/avatar_6.jpg',
    chatActive: false,
    lastSeen: ' 09.30  del 20/11/2020',
    messages: [{
                text: 'mi rispondi !',
                date: newdate,
                send: false,
                }
              ],
  },
]

const loggedUser = {
  name: 'Pier Luca',
  src:'img/avatar_4.jpg',
}


const boolzApp = new Vue ({
  el: '#root',
  data:{
    contacts: [...contactArray],
    user: loggedUser ,
    searchInputText:'',
    userMessage:'',
    userMessages:[],



  },
  computed:{
    filtered(){
      return this.contacts.filter( e => {
        return e.name.toLowerCase().includes(this.searchInputText)
      })
    }





  },
  methods:{
    selectContact(index){
      this.filtered.forEach((contact, i) => {
        if ( i === index){
          contact.chatActive = true;
        } else {
          contact.chatActive = false;
        }

      })
    },
    getActiveContact() {
      for (var i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].chatActive )  {
          return this.contacts[i];
        }
      }
    },


    saveUserMessage(){
      this.userMessages.push(
        {
          text:userMessage,
          date: newdate,

                            });
    }

  }
})
