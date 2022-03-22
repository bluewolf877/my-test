<template>
  <div>
    <!-- タブのボタン -->
    <button
      v-for="tab in tabs"
      v-bind:key="tab.key"
      v-bind:class="['tab-button', { active: currentTab === tab.key }]"
      v-on:click="currentTab = tab.key"
    >
      {{ tab.name }}
    </button>
    <!-- タブページのコンポーネント -->
    <keep-alive v-bind:max="3">
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TabHome from '@/components/TheTabHome.vue'
import TabReference from '@/components/TheTabReference.vue'
import TabDocument from '@/components/TheTabDocument.vue'

export default {
  name: 'Test5',
  components: {
    TabHome,
    TabReference,
    TabDocument
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: [
        {
          key: 'home',
          name: 'ホーム'
        },
        {
          key: 'reference',
          name: 'リファレンス'
        },
        {
          key: 'document',
          name: 'ドキュメント'
        }
      ]
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>
<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab-page {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
