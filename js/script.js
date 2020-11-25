const boolzApp = new Vue ({
  el: '#root',
  data:{
    contacts: [...contactArray],
    user: loggedUser ,
    searchInputText:'',
    userMessage:'',

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

      if (this.userMessage !== ''){
        this.getActiveContact().messages.push(
          {
            text: this.userMessage,
            date: date.getDate(00)+'/'+date.getMonth(00)+'/'+date.getFullYear(00)+'  '+date.getHours(00)+':'+ date.getMinutes(00),
            send: true,
          });
          setTimeout(this.randomMessage, 3000);
          this.userMessage = ''; 
      }


    },

    randomMessage(){
    this.getActiveContact().messages.push(
     {
       text: 'non posso parlare',
       date: date.getDate(00)+'/'+date.getMonth(00)+'/'+date.getFullYear(00)+'  '+date.getHours(00)+':'+ date.getMinutes(00),
       send: false,
      });
    },



  }
})
