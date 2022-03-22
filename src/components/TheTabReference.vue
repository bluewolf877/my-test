<template>
  <div class="tab-page">
    <input type="text" v-model="searchText" />
    <button v-on:click="onClick">検索</button>
  </div>
</template>
<script>
export default {
  name: 'ReferenceTab',
  data: function () {
    return {
      searchText: ''
    }
  },
  methods: {
    onClick: function () {
      // ここに検索実行時の処理を記述する...
    }
  }
}
</script>
