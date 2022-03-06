<template>
  <div class="relative">
    <b-table id="myTable" bordered hover :items="items" :fields="fields">
      <template slot="top-row" scope="data">
        <td v-for="(field, i) in data.fields" :key="field.id">
          {{ i }}
        </td>
      </template>
      <template slot="bottom-row" scope="data">
        <td :span="data.columns">Something special here</td>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Test4',
  data() {
    return {
      items: [
        { id: 1, age: 40, name: 'admin1', email: 'hoge@for.jp' },
        { id: 2, age: 21, name: 'admin1', email: 'huga@for.jp' },
        { id: 3, age: 89, name: 'admin2', email: 'piyo@for.jp' },
        { id: 4, age: 38, name: 'admin2', email: 'aaaaa@for.jp' }
      ],
      fields: [
        {
          key: 'name',
          label: 'Name',
          tdClass: 'name'
        },
        {
          key: 'email',
          label: 'Email'
        },
        {
          key: 'age',
          label: 'Old'
        }
      ]
    }
  },
  mounted: function () {
    let clazzName = '.name'
    document.querySelectorAll(clazzName).forEach((c) => {
      let table = document.getElementById('myTable')
      let prevTr = table.rows[c.parentElement.rowIndex - 1]
      let prevTd = prevTr.querySelector(clazzName)
      if (prevTd != null && c.innerHTML === prevTd.innerHTML) {
        c.classList.add('same')
      }
    })
  }
}
</script>
<style>
.relative {
  position: relative;
  margin: 20px;
  width: 300px;
}

td.same {
  border-top: none;
  color: transparent;
}
.name {
  color: black;
}
</style>
