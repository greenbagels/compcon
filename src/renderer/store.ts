import Vue from 'vue'
import Vuex from 'vuex'
import { ModuleStore } from './features/_shared/store/'
import { PilotManagementStore } from './features/pilot_management/store/'

import gmToolkitModules from './features/gm_toolkit/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    datastore: ModuleStore,
    management: PilotManagementStore,
    ...gmToolkitModules,
  },
})
