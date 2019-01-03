<template>
  <div>
    <!-- <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace" ref="map" :draggable="true">
      </GmapAutocomplete>
      <button @click="usePlace">Add</button>
    </label>
    <br/>-->
    <GmapMap class="map-container" :zoom="12" :center="{lat: 7.996769, lng: 98.302661}">
      <GmapMarker :position="{
          lat: 7.996769,
          lng: 98.302661,
        }"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [],
      place: null
    };
  },
  description: "Autocomplete Example (#164)",
  methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        this.place = null;
      }
    }
  }
};
</script>

<style>
.map-container {
  width: 800px;
  height: 400px;
}
@media only screen and (max-width: 480px) {
  .map-container {
    width: 400px;
    height: 400px;
  }
}
@media only screen and (max-width: 375px) {
  .map-container {
    width: 355px;
    height: 400px;
  }
}
@media only screen and (max-width: 320px) {
  .map-container {
    width: 300px;
    height: 400px;
  }
}
</style>
