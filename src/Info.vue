<template>
    <div>
        <md-card>

            <md-card-media>
                <img src="dist/dave-ava.jpg" alt="Dave and Ava">
            </md-card-media>

            <md-card-header>
                <div class="md-title">Ava's First Birthday Party</div>
                <div class="md-subhead">Your invited! Please RVSP by December 12th.</div>
            </md-card-header>

            <md-card-actions>
                <router-link to="/rsvp">
                    <md-button class="md-raised md-primary">I can go!</md-button>
                </router-link>
                <router-link to="/rsvp" tag="span">
                    <md-button class="md-raised md-default">I can't make it</md-button>
                </router-link>
            </md-card-actions>

            <md-card-content>
                <div>
                    <span class="md-caption">DATE:</span>
                    Saturday December 17th
                </div>
                <div>
                    <span class="md-caption">TIME:</span>
                    12pm to 3pm
                </div>
                <div>
                    <span class="md-caption">WHERE:</span>
                    1412 Hickory View Circle Parrish, FL 34219
                </div>
                <br>
                <div>
                    <span class="md-caption">WHAT:</span>
                    Ava's first birthday party which will be 'Dave & Ava' themed. Food and cake will be served and
                    the party will take place at Cindy's parent's house, come on out and celebrate Ava turning one with
                    us!
                </div>

                <br>
                <span class="md-caption">Please RSVP by December 12th</span>

                <br><br><br><br>

            </md-card-content>
        </md-card>
    </div>
</template>
<script>
    export default {}
</script>