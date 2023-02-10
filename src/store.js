import { reactive } from 'vue'
 
export const store = reactive({
    textSearch: '',
    searchListMovie: [],
    searchListTv: [],
    bollListMovie: false,
    bollListTv: false,
    loadingTime: false,
});