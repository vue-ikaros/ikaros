<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script>
const cssPrefix = 'ikaros-breadcrumb'
export default {
  name: 'breadcumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  computed: {
    className () {
      return cssPrefix
    }
  },
  methods: {
    updateChildren () {
      this.$children.forEach(item => {
        item.separator = this.separator
      })
    }
  },
  mounted () {
    this.updateChildren()
  },
  updated () {
    this.$nextTick(() => {
      this.updateChildren()
    })
  },
  watch: {
    separator () {
      this.updateChildren()
    }
  }
}
</script>
