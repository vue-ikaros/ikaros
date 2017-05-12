<template>
  <div v-if="backShow" :class="className" :style="propsStyle" @click="moveTop">
    <slot>
      <div :class="defaultClass">
        <i class="ikaros-icon ikaros-icon-chevron-up"></i>
      </div>
    </slot>
  </div>
</template>
<script>
import {backTop} from '../../utils/assist.js'

const cssPrefix = 'ikaros-back-top'
export default {
  data () {
    return {
      backShow: false
    }
  },
  props: {
    height: {
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    durations: {
      type: Number,
      default: 500
    }
  },
  computed: {
    className () {
      return cssPrefix
    },
    propsStyle () {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      }
    },
    defaultClass () {
      return `${cssPrefix}-default`
    }
  },
  methods: {
    moveTop () {
      backTop(this.durations)
    },
    scrollListener () {
      this.backShow = document.getElementsByTagName('body')[0].scrollTop >= this.height
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener, false)
    window.addEventListener('resize', this.scrollListener, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
    window.removeEventListener('resize', this.handleScroll, false)
  }
}
</script>
