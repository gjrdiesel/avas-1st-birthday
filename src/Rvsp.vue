<template>
    <div>

        <md-tabs>

            <md-tab id="phone" md-label="RSVP By Phone">
                <md-avatar>
                    <img src="https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/14963376_1329961443720997_5009220018244272054_n.jpg?oh=065c6a9f52d68fff106094c200195aaa&oe=58CF0AEE" alt="People">
                </md-avatar>
                Txt Cindy <a href="sms:+19415042647">
                <md-button class="md-raised md-primary" v-md-theme="'indigo'"><md-icon>message</md-icon> 941.504.2647</md-button>
            </a>

                <a href="tel:+19415045426">or Call <md-icon>phone</md-icon></a>

            </md-tab>

            <md-tab id="online" md-label="RSVP Online">

                <md-input-container>
                    <label>Enter your name</label>
                    <md-input v-model="name" required></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Enter any comments</label>
                    <md-textarea v-model="msg"></md-textarea>
                </md-input-container>

                <md-button-toggle type="radio" class="md-button-group md-primary">
                    <md-button @click="setState('coming')" class="md-toggle"><md-icon>thumb_up</md-icon> Coming</md-button>
                    <md-button @click="setState('not coming')"><md-icon>thumb_down</md-icon> Not coming</md-button>
                </md-button-toggle>

                <br>

                <md-button id="sendBtn" class="md-raised md-accent" @click="send()"><md-icon>message</md-icon> Send</md-button>

            </md-tab>

        </md-tabs>

    </div>
</template>
<script>
    export default {
        methods: {
          setState(state){
              this.state = state;
          },
          send(){
              var url = 'https://a6ehjsmjqc.execute-api.us-east-1.amazonaws.com/dev/hello?name='+this.name+'&state='+this.state+'&msg='+this.msg;
//              this.$http.get(url);
              if( this.state == 'coming' ){
                  swal("Sweet!", "We can't wait to see you! Thank you for RSVP'ing.", "success")
              } else {
                  swal("Ok!", "Thanks for letting us know, maybe we'll see you next year.")
              }
          }
        },
        data(){
            return {
                name: '',
                msg: '',
                state: 'coming'
            }
        }
    }
</script>