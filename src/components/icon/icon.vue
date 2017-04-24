<template>
  <i :class="className" :style="style"></i>
</template>
<script>
const cssPrefix = 'ikaros-icon'
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: [String, Number]
  },
  computed: {
    className () {
      return `${cssPrefix} ${cssPrefix}-${this.type}`
    },
    style () {
      const style = {}
      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style.fontSize = this.size
      }
      return style
    }
  }
}
</script>
