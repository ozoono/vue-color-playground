<template>
  <div>
    <div class="ui segment colorSample" v-bind:style="{backgroundColor: colorRGB}">
      <button class="ui mini icon button" @click="saveColor">
        <i class="heart icon"></i></button>
    </div>

    <div class="info">
      <div class="left">     
        <h2><span>RGB:</span> {{ colorRGB }}</h2>
      </div>
      <div class="right">
        <h2><span>Hex:</span> {{ colorHex }}</h2>  
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'ColorPreview',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'colorHex',
      'colorRGB'
    ]),
  },  
  methods: {
    ...mapActions([
          'saveColor'
        ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .colorSample{
    position: relative;
    height: 150px;
    border-radius: 5px;
  }
  .button{
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin-right: 0;
    background-color: rgba(255,255,255,0.5);
  }
.info{
  display:flex;
  justify-content: space-between;
}  
.info div{
  flex: 0 1 auto;
}
</style>