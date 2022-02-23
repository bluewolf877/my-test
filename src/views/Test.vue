<template>
  <div class="test">
    test
    <form>
      <input v-model="inputData.message" placeholder="edit me" />
      <input v-model="inputData.name" placeholder="edit me" />
      <button type="button" @click="exec">submit</button>
    </form>
    <p>Message is: {{ inputData.message }}</p>
    <p>Name is: {{ inputData.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data: function () {
    return {
      inputData: {
        message: '',
        name: ''
      }
    }
  },
  methods: {
    exec: function () {
      // 本来はajax通信をする
      console.log(this.inputData.message)
      console.log(this.inputData.name)
    }
  },
  mounted: function () {
    var formString = this.$_formString('view001')
    console.log('testFormString:' + formString)
    if (formString != undefined) {
      this.inputData = JSON.parse(formString)
    }
  },
  beforeDestroy: function () {
    var formString = JSON.stringify(this.inputData)
    console.log('formString:' + formString)
    this.$_setFormString('view001', formString)
    console.log('testFormString:' + this.$_formString('view001'))
  }
}
</script>
