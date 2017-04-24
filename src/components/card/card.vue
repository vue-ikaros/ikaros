<template>
  <div :class="className">
    <div :class="headClass">
      <div :class="titleClass"><slot name="title"></slot></div>
      <div :class="extraClass"><slot name="extra"></slot></div>
    </div>
    <div :class="bodyClass"><slot></slot></div>
  </div>
</template>
<script>
const cssPrefix = 'ikaros-card'
export default{
  name: 'Card',
  props: {
    border: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    },
    hoverName: {
      type: String,
      default: 'hvr-glow'
    }
  },
  computed: {
    className () {
      return [
        cssPrefix,
        {
          [`${cssPrefix}-border`]: this.border,
          [`${cssPrefix}-shadow`]: this.shadow,
          [`ikaros-${this.hoverName}`]: this.hover
        }
      ]
    },
    headClass () {
      return `${cssPrefix}-head`
    },
    bodyClass () {
      return `${cssPrefix}-body`
    },
    titleClass () {
      return `${cssPrefix}-title`
    },
    extraClass () {
      return `${cssPrefix}-extra`
    }
  }
}
</script>
