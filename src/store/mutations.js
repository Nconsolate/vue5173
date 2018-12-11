// import {VIEW_NAV} from './types';

import * as types from './types';//批量结构

let mutations={
  [types.VIEW_NAV]:(state,payload)=>{state.bNav=payload},
  [types.VIEW_FOOT]:(state,payload)=>{state.bFoot=payload},
  [types.VIEW_LOADING]:(state,payload)=>{state.bLoading=payload},
  [types.UPDATE_HOME]:(state,payload)=>{state.home=payload},
  [types.CHECK_USER]:(state,payload)=>{state.user=payload},
   [types.HM_NAV]: (state) => {
     state.hsk = true;
   },
   [types.HPC_NAV]: (state) => {

     state.hsk = false;
   },
    [types.M1M_NAV]: (state) => {
      state.m1sk = true;
    },
    [types.M1PC_NAV]: (state) => {

      state.m1sk = false;
    },
     [types.M2M_NAV]: (state) => {
       state.m2sk = true;
     },
     [types.M2PC_NAV]: (state) => {

       state.m2sk = false;
     },
     [types.FIRSTPYM1] : (state, payload) => {
       state.firstPYM1 = payload[1];
     },
     [types.FIRSTPYM2] : (state, payload) => {
         state.firstPYM2 = payload[1];
       },
};
export default mutations;

