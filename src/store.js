import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentColor:{
      red: 0,
      green: 0,
      blue: 0
    },
    favColors: []
  },

  getters:{
    primaryColor: (state) => (type) => {
      return state.currentColor[type]
    },
    colorHex(state){
      let cHex = Object.values(state.currentColor).map((value) => {
        let hex = Number(value).toString(16);
        if (hex.length < 2) hex = "0" + hex;
        return hex;
      }).join("");
      return `#${cHex}`;
    },
    colorRGB(state){
      let rgbColor = Object.values(state.currentColor).join()     
      return `rgb( ${rgbColor} )`
    },
    favList(state){
      return state.favColors.map((color) => {
        let rgbColor = Object.values(color).join()
        return `rgb( ${rgbColor} )`
      })
    }
  },

  mutations: {
    UPDATE_LEVEL(state, {type, value}){
      state.currentColor[type] = parseInt(value)		
    },
    RESET_COLOR(state){
      state.currentColor.red = 0
      state.currentColor.green = 0
      state.currentColor.blue = 0
    },
    SAVE_COLOR(state){
      if (!state.favColors.some(elem => JSON.stringify(elem) === JSON.stringify(state.currentColor)))
        state.favColors.push(Object.assign({}, state.currentColor))
    },
    DELETE_COLOR(state, index){
      state.favColors.splice(index, 1);
    },
    SELECT_COLOR(state, index){
      let color = state.favColors[index]
      state.currentColor = Object.assign({}, color);
    },
    CLEAR_FAVORITES(state){
      state.favColors = []
    },         
  },

  actions: {
    updateColorLevel({commit}, {type, value}) {
      commit('UPDATE_LEVEL', {type, value});
    },
    reset({commit}){
      commit('RESET_COLOR');
    },
    saveColor({commit}){
      commit('SAVE_COLOR');
    },
    deleteColor({commit}, index){
      commit('DELETE_COLOR', index);
    },
    selectColor({commit}, index){
      commit('SELECT_COLOR', index);
    },
    clearList({commit}){
      commit('CLEAR_FAVORITES');
    }
  }
})
