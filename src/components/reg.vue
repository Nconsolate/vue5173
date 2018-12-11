<template>
<logreg></logreg>
  </template>
<script> 
import logreg from './common/logreg'
// import * as types from '../store/types';
// import {mapActions} from 'vuex';
export default {
   components:{
    logreg
  },
  data() {
    return {
      iptUser: '',
        iptPass: ''
    }
  }
}
</script>