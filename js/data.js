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
                text: 'ciao !',
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


var randomTextArray = [ 'ciao!', ' ...' , 'Non voglio parlare', 'Ti richiamo dopo', 'Devo scappare'];
