<template>
  <div>
    <h2><i class="heart outline small red icon"></i>
      <template  v-if="favList.length > 0" >
        <span>Your favorites:</span>
        <button class="ui small basic button" @click="clearList">
        <i class="window close icon"></i>Clear all</button>
      </template>
      <span v-else>You still don't have any favorite color...</span>
      
    </h2>

    <div class="list">
      <div v-for="(colorRGB, index) in favList" v-bind:key="index" class="ui segment" v-bind:style="{backgroundColor: colorRGB}">
        <div class="button-menu">
          <button class="ui mini icon button" @click="selectColor(index)">
            <i class="eye icon"></i></button>
          <button class="ui mini icon button" @click="deleteColor(index)">
            <i class="trash icon"></i></button>
        </div>
      </div>                  
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'FavoritesList',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'favList'
    ]),
  },  
  methods: {
    ...mapActions([
          'deleteColor',
          'selectColor',
          'clearList'
        ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  position: relative;
}
h2 button{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 0;
    background-color: rgba(255,255,255,0.5);
}
.list{
  display:flex;
  align-content: flex-start;
  flex-wrap: wrap;
}  
.list div{
  flex: 0 1 auto;
  min-width: 110px;
  margin-top: 0 !important;
  margin-bottom: .5em;
  margin-right: 3px;
  height: 39px;
  border-radius: 5px;  
  padding:0 !important;
  text-align: center;
}  
.list div:nth-child(4n+0){
  margin-right: 0;
}
.button-menu{
  visibility:hidden;
}
.list div:hover .button-menu{
  visibility:visible;
}
.button-menu button{
  margin-top: 4px;
  background-color: rgba(255,255,255,0.5);
}
</style>