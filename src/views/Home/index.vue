<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover class="pt-16">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ slide }} </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: [ "teal lighten-5", "pink lighten-3", "light-blue lighten-4"],
      slides: ["Welcome", "VUE", "STORE"],
    };
  },
};
</script>