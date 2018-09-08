<template>
  <div id="app">
    <div class="ui segments ">
      <div class="ui tertiary segment">
          <h4><img class="ui middle aligned image logo" src="./assets/logo-vue.png" /> Color Playground</h4>
      </div>

      <div class="ui segment">
        <div class="ui form">
          <div class="three fields">
            <ColorSelector type="red" />
            <ColorSelector type="green" />
            <ColorSelector type="blue" />
          </div>
        </div>

        <ColorPreview />
        <div class="ui hidden divider"></div>
        <FavoritesList />
      </div>
    </div>

    <div class="footer">
      <button class="ui basic button">
        <a href="https://github.com/ozoono/vue-color-playground"><i class="github icon black"></i>Repo on Github</a>
      </button>

      <button class="ui basic button"> 
        <a href="http://vuejs.org"><i class="checkmark icon black"></i>Vue 2.x</a>   
      </button>
    </div> 
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ColorSelector from './components/ColorSelector.vue'
import ColorPreview from './components/ColorPreview.vue'
import FavoritesList from './components/FavoritesList.vue'

export default {
  name: 'app',
  components: {
    ColorSelector,
    ColorPreview,
    FavoritesList
  },
  data: function() {
    return {
    }
  },
  created(){
    this.reset()
  },
  methods: {
    ...mapActions([
      'reset'
    ])
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  width: 500px;
}
h2 span{
  color: #ccc;
  font-size: .8em;
  font-weight: normal;
  letter-spacing: -1px;
}
.logo{
  width: 25px;
  height: 25px;
}
.footer {
    margin-top: 50px;
    text-align: center;
}
</style>
