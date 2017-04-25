<template>
  <button :class="className" :type="htmlType" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>
<script>
import {oneOf} from '../../utils/assist.js'
const cssPrefix = 'ikaros-btn'
export default{
  name: 'Button',
  props: {
    type: {
      type: String,
      validator (val) {
        const validArr = ['primary', 'dashed', 'danger']
        return oneOf(val, validArr)
      }
    },
    htmlType: {
      type: String,
      validator (val) {
        const validArr = ['submit', 'reset']
        return oneOf(val, validArr)
      }
    },
    icon: String,
    shape: {
      type: String,
      validator (val) {
        const validArr = ['circle']
        return oneOf(val, validArr)
      }
    },
    disabled: Boolean,
    size: String,
    ghost: Boolean
  },
  computed: {
    className () {
      return [
        cssPrefix,
        {
          [`${cssPrefix}-${this.type}`]: this.type && !this.disabled || this.type === 'dashed',
          [`${cssPrefix}-size-${this.size}`]: this.size && !this.disabled,
          [`${cssPrefix}-ghost`]: this.ghost && !this.disabled,
          [`${cssPrefix}-shape-${this.shape}`]: this.shape
        }
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
