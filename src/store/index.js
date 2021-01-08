import {createStore} from 'vuex';

import productsModule from './modules/products';
import cartsModule from './modules/carts';

const store = createStore({
  modules:{
    prods: productsModule,
    cart: cartsModule,
    state() {
      return {
        isLoggedIn: false
      }
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context){
      return context.commit('login');
    },
    logout(context){
      return context.commit('logout');
    }
  },
  getters:{
    isAuthenticated(state){ 
      return state.isLoggedIn;
    }
  }
});


export default store;