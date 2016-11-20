<template>
    <div>
        <div id="map"></div>
    </div>
</template>
<style>
    #map {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 40px;
        top: 0;
        z-index: 998;
    }
</style>
<script>
    export default {
        mounted: function ()
        {
            this.$nextTick(function ()
            {
                var latLng = {lat: 27.524823, lng: -82.375812};
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: latLng,
                    zoom: 14,
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a8c9fd"}]}]
                });

                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: "Ava's first birthday!"
                });

                var infowindow = new google.maps.InfoWindow({
                    content: "<h1>Ava's Birthday</h1>" +
                    "<img src='http://i.imgur.com/J2m5PIv.png' width='80px' style='margin:10px;float:left;' alt='1412 Hickory View Circle Parrish, FL'>" +
                    "Held at 1412 Hickory View Circle Parrish, FL 34219 from 12pm to 3pm" +
                    " <a href='https://www.google.com/maps/dir//1412+Hickory+View+Circle,+Parrish,+FL/@27.524823,-82.378006,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88c3301ce4e26d89:0xaf70f2669e6f4e04!2m2!1d-82.375812!2d27.524823' class='md-raised md-accent'>Get Directions</a>"
                });

                infowindow.open(map, marker);
            })
        }
    }
</script>