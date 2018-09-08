<template>
  <div class="field">
    <h2><span>{{ type | capitalize }}:</span> {{ primaryValue }}</h2>
    <div><input type="range" min="0" max="255" :class="type" v-model="primaryValue"></div>
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
    primaryValue:{
      get(){
        return this.primaryColor(this.type)
      },
      set(value){
        this.updateColorLevel({'type': this.type, 'value': value});
      }      
    }
  },   
  methods: {
   ...mapActions([
      'updateColorLevel'
    ])
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return "(" + value.charAt(0).toUpperCase() + ")" + value.slice(1)
    },
    uppercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase() 
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="range"] {
  width: 100%;
  -webkit-appearance: none;
  padding: 0;
  height: 8px;
  margin: 1rem 0;
  background-color: #ddd
}

input[type="range"]:focus {
  border-color: #ccc;
  outline: none !important;
}

input[type="range"]::-moz-range-track {
  background: none;
  border: 0;
}

input[type="range"]::-moz-focus-outer {
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  background: #fff;
  background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15), 0 0 0 1px rgba(34, 36, 38, .15) inset;
}

input[type="range"]::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
  background: #fff;
  background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15), 0 0 0 1px rgba(34, 36, 38, .15) inset;
}

input[type="range"]::-ms-thumb {
  height: 1.5rem;
  width: 1.5rem;
  background: #fff;
  background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15), 0 0 0 1px rgba(34, 36, 38, .15) inset;
}
input[type="range"].red{
  background-color: #ffb5b5
}
input[type="range"].green{
  background-color: #caffB5
}
input[type="range"].blue{
  background-color: #b3e7fc
}

</style>