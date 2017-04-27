<template>
  <transition name="fade">
    <div :class="className" v-if="!closed">
      <span v-if="showIcon" :class="iconClass">
        <slot name="icon">
          <Icon :type="defaultIcon[type]" />
        </slot>
      </span>
      <p :class="messageClass"><slot></slot></p>
      <p v-if="description" :class="descriptionClass"><slot name="description"></slot></p>
      <span :class="closeClass" v-if="closable" @click="closeAlert">
        <Icon type="close" />
      </span>
    </div>
  </transition>
</template>
<script>
import {oneOf} from '../../utils/assist.js'

const cssPrefix = 'ikaros-alert'
export default {
  name: 'alert',
  data () {
    return {
      defaultIcon: {
        success: 'checkmark-circled',
        info: 'information-circled',
        warning: 'android-alert',
        error: 'close-circled'
      },
      description: false,
      closed: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator (val) {
        const validArr = ['success', 'info', 'warning', 'error']
        return oneOf(val, validArr)
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className () {
      return [
        cssPrefix,
        `${cssPrefix}-${this.type}`,
        {
          [`${cssPrefix}-no-icon`]: !this.showIcon,
          [`${cssPrefix}-with-description`]: this.description
        }
      ]
    },
    messageClass () {
      return `${cssPrefix}-message`
    },
    descriptionClass () {
      return `${cssPrefix}-description`
    },
    closeClass () {
      return `${cssPrefix}-close`
    },
    iconClass () {
      return `${cssPrefix}-icon`
    }
  },
  mounted () {
    this.description = this.$slots.description !== undefined
  },
  methods: {
    closeAlert (e) {
      this.closed = true
      this.$emit('closed', e)
    }
  }
}
</script>
