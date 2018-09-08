<template>
  <div>
    <h1>{{ type }}: {{ primaryValue }}</h1>
    <div><input type="range" min="0" max="255" :id="type" :value="primaryValue" @change="changeRange"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ColorSelector',
  props: ['type'],
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'primaryColor'
    ]),
    primaryValue(){
      return this.primaryColor(this.type)    
    }
  },   
  methods: {
   ...mapActions([
      'updateColorLevel'
    ]),
    changeRange(e){
      this.updateColorLevel({'type': this.type, 'value': e.target.value});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>