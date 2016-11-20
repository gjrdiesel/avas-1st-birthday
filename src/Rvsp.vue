<template>
    <div>

        <md-tabs>

            <md-tab id="phone" md-label="RSVP By Phone">
                <md-avatar>
                    <img src="https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/14963376_1329961443720997_5009220018244272054_n.jpg?oh=065c6a9f52d68fff106094c200195aaa&oe=58CF0AEE" alt="People">
                </md-avatar>
                Call Cindy <a href="tel:+15042647">
                <md-button class="md-raised md-primary" v-md-theme="'indigo'">941.504.2647</md-button>
            </a>

            </md-tab>

            <md-tab id="online" md-label="RSVP Online">

                <md-input-container>
                    <label>Enter Your Name</label>
                    <md-input v-model="initialValue"></md-input>
                </md-input-container>

                <md-button-toggle type="radio" class="md-button-group md-primary">
                    <md-button class="md-toggle">Coming</md-button>
                    <md-button>Not coming</md-button>
                </md-button-toggle>

                <br>

                <md-button id="sendBtn" class="md-raised md-accent">Send</md-button>

            </md-tab>

        </md-tabs>

    </div>
</template>
<style>
    #sendBtn {
        margin: 0;
        float: right;
    }
</style>
<script>
    export default {}
</script>