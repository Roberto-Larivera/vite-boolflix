import { reactive } from 'vue'
 
export const store = reactive({
    textSearch: '',
    searchListMovie: [],
    searchListTv: [],
    loadingTime: false,
});