export default function (getData: Function) {
  const storeMain = mainStore();
  const { salonList } = storeToRefs(storeMain);

  onMounted(() => {
    if (salonList.value.data) getData();
  });
  watch(salonList, () => getData());
}
