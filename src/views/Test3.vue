// GraphDoughnut.vue
<template>
  <div>
    <div class="relative">
      <div class="doughnut-style">
        <doughnut-half id="half" style="transform: rotate(270deg)"></doughnut-half>
      </div>
      <div class="title-style">
        <p style="text-align: left">タイトル</p>
      </div>
      <div class="description-style">
        <p style="text-align: center">ここに重ねる文字1</p>
        <p style="text-align: left">ここに重ねる文字2</p>
        <p style="text-align: left">ここに重ねる文字3</p>
      </div>
    </div>
    <div class="doughnut-style">
      <doughnut id="all"></doughnut>
    </div>
  </div>
</template>

<script>
// ここでこのコンポーネントで使用するグラフの種類を定義する。今回はドーナツグラフなのでDoughnutとなる。
import doughnut from '@/components/GraphDoughnut.vue'
import doughnutHalf from '@/components/GraphDoughnutHalf.vue'

export default {
  name: 'Test3',
  components: {
    doughnut,
    doughnutHalf
  }
}
</script>
<style>
.doughnut-style {
  height: 300px;
  width: 300px;
  padding: 20px;
}
.title-style {
  width: 300px;
  position: absolute;
  top: 0px;
}
.description-style {
  height: 100px;
  width: 300px;
  margin: 20px;
  position: absolute;
  bottom: 50px;
}
.relative {
  position: relative;
  width: 300px;
}
</style>
