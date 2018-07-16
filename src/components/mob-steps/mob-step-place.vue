<template>
  <div class="wrapper">
  <!-- Map -->
      <googlemaps-map
        ref="map"
        class="map"
        :center.sync="center"
        :zoom.sync="zoom"
      >
        <!-- User Position -->
        <googlemaps-user-position
          @update:position="setUserPosition" />
        
        <!-- Marker -->
        <googlemaps-marker
          title="Usuario"
          :position=" center"/>
        </googlemaps-map>
       <input ref="autocomplete" 
        placeholder="Search" 
        class="search-location"
        onfocus="value = ''" 
        type="text" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { MapElement } from "vue-googlemaps";
export default {
  data() {
    return {
      center: {
        lat: 48.853,
        lng: 2.298
      },
      userPosition: null,
      zoom: 12
    };
  },
  mounted() {
    var self = this;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          self.center = pos;
        },
        function() {
          console.log("sdfsdf");
        }
      );
    } else {
      // Browser doesn't support Geolocation
      console.log("Errorrrr con Flow");
    }

    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];
      self.center.lat = lat;
      self.center.lng = lon;
      console.log(
        `The user picked ${city} with the coordinates ${lat}, ${lon}`
      );
    });
  },
  methods: {
    setUserPosition(position) {
      this.userPosition = position;
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../styles/main.less";
.wrapper {
  .displayColumnCenter();
  width: 100%;
  height: @view-height;
  display: block;
  overflow: scroll;
}
.map {
  width: 100vw;
  height: 50vh;
  display: block;
}
.search-location {
  width: 70%;
  display: block;
  margin: 1vh auto;
  padding: 1vh;
  border: none;
  border: 0.1em solid gray;
  border-radius: 1em;
}
</style>
