import axios from 'axios';
import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit,state},payload)=>{
    //payload 数据格式校验
    commit(types.VIEW_NAV,payload)
  },
  [types.VIEW_FOOT]:({commit,state},payload)=>{
    //payload 数据格式校验
    commit(types.VIEW_FOOT,payload)
  },
  [types.VIEW_LOADING]:({commit,state},payload)=>{
    //payload 数据格式校验
    commit(types.VIEW_LOADING,payload)
  },
   mNav: ({ commit,state}, payload) => {
switch(payload){
  case 'hsk': commit(types.HM_NAV);break;
   case 'm1sk': commit(types.M1M_NAV);break;
    case 'm2sk': commit(types.M1M_NAV);break; 
   }
  },
   pcNav: ({commit,state}, payload) => {
    switch (payload) {
      case 'hsk':
        commit(types.HPC_NAV);
        break;
      case 'm1sk':
        commit(types.M1PC_NAV);
        break;
      case 'm2sk':
        commit(types.M2PC_NAV);
        break;
    }
   
   },
   firstPy: ({
       commit,
       state
     }, payload) => {
      if (payload!==null){ payload[0] == 'm1' ? commit(types.FIRSTPYM1, payload) : commit(types.FIRSTPYM2, payload)
     }
     }
}

export default actions;