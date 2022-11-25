import { ref, reactive, toRefs } from 'vue';

export function useFetch(url, options) {
  const data = ref(null);
  //reactive ist ref, aber halt für Objekte
  //man spart sich .value
  const state = reactive({
    error: null,
    loading: false,
  });

  //"kein async ohne await"
  //ist sowas wie ein Sred
  const fetchData = async () => {
    state.loading = false;
    try {
      const res = await fetch(url, options);
      //console.log('Result: ' + res.status);
      data.value = await res.json();
    } catch (err) {
      state.error = err;
    } finally {
      state.loading = false;
    }
  };

  fetchData();
  //... tut alles was im Objekt/im Array drinnen ist, einzeln rausnehmen
  //...toRefs(state) tut nicht state returnen, sondern loading und error einzeln
  //Aufrufer kann statt state nur die Attribute von state aufrufen
  return {
    data,
    ...toRefs(state),
  };
}
