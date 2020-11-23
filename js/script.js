const date = new Date()
var newdate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+'  '+date.getHours()+':'+ date.getMinutes()
const contactArray = [
  {
    name: 'Michele',
    src:'img/avatar_1.jpg',
    chatActive: true,
    lastSeen: date.getHours()+':'+ date.getMinutes(),
    message: [{
                text: '',
                date: '',
                send: false,
                }
              ],
  },
  {
    name: 'Fabio',
    src:'img/avatar_2.jpg',
    chatActive: false,
    lastSeen: ' 10.30 22/11/2020',
    message: [{
                text: '',
                date: '',
                send: false,
                }
              ],
  },
  {
    name: 'Samuele',
    src:'img/avatar_3.jpg',
    chatActive: false,
    lastSeen: date.getHours()+':'+ date.getMinutes(),
    message: [{
                text: '',
                date: '',
                send: false,
                }
              ],
  },
  {
    name: 'Luisa',
    src:'img/avatar_6.jpg',
    chatActive: false,
    lastSeen: '',
    message: [{
                text: '',
                date: '',
                send: false,
                }
              ],
  },
]

const loggedUser = {
  name: 'Pier Luca',
  src:'img/avatar_4.jpg',

  message: [{
              text: '',
              date: '',
              send: false,
              }
            ],
}


const boolzApp = new Vue ({
  el: '#root',
  data:{
    contacts: [...contactArray],
    user: loggedUser ,
    searchInputText:'',


  },
  computed:{
    filtered(){
      return this.contacts.filter( e => {
        return e.name.toLowerCase().includes(this.searchInputText)
      })
    }

  },
  methods:{
    selected(){
      return this.contact.chatActive = true
    }

  }
})
