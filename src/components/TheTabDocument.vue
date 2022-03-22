<template>
  <div class="tab-page">
    <input type="radio" name="category" id="vue" value="vue" v-model="checked" v-on:change="onChange" />
    <label for="vue">Vue</label>
    <br />
    <input type="radio" name="category" id="html" value="html" v-model="checked" v-on:change="onChange" />
    <label for="html">HTML</label>
    <br />
    <input type="radio" name="category" id="js" value="js" v-model="checked" v-on:change="onChange" />
    <label for="js">JavaScript</label>
    <br />
    <input type="radio" name="category" id="css" value="css" v-model="checked" v-on:change="onChange" />
    <label for="css">CSS</label>
  </div>
</template>
<script>
export default {
  name: 'DocumentTab',
  data: function () {
    return {
      checked: ''
    }
  },
  methods: {
    onChange: function () {
      // ここにカテゴリー変更時の処理を記述する...
    }
  }
}
</script>
