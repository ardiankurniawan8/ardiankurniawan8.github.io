import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    pageList: [
      'biodata',
      'experience',
      'project'
    ],
    currentPage: 'biodata'
  }),
  getters: {
    getCurrentPage(state) {
      return state.currentPage;
    }
  },
  actions: {
    movePage(action: string) {
      const index = this.pageList.indexOf(this.currentPage);
      const nextIndex = index === this.pageList.length - 1 ? -1 : index;
      const previousIndex = index === 0 ? this.pageList.length : index;
      switch (action) {
        case 'next':
          this.currentPage = this.pageList[nextIndex + 1]
          break;
        case 'previous':
          this.currentPage = this.pageList[previousIndex - 1];
          break;
        default:
          break;
      }
    }
  }
})
