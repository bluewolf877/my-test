// GraphDoughnut.vue
<script>
// ここでこのコンポーネントで使用するグラフの種類を定義する。今回はドーナツグラフなのでDoughnutとなる。
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      datas: {
        // 凡例とツールチップに表示するラベル
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        // 表示するデータ
        datasets: [
          {
            data: [5, 10, 15, 20, 50],
            backgroundColor: ['#f87979', '#aa4c8f', '#38b48b', '#006e54', '#89c3eb']
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  }
}
</script>
