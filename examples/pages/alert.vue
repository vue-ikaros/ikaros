<template>
  <div>
    <div style="width:400px;margin:20px">
      <Alert type="success" showIcon closable @closed="closed">成功提示文案</Alert>
      <Alert type="info" showIcon>消息提示文案</Alert>
      <Alert type="warning" showIcon>警告提示文案</Alert>
      <Alert type="error" showIcon>错误提示文案</Alert>
    </div>
    <div style="width:400px;margin:20px">
      <Alert type="success" showIcon>
        成功提示文案
        <span slot="description">成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案</span>
      </Alert>
      <Alert type="info" showIcon>
        <Icon type="paper-airplane" slot="icon"/>
        自定义提示文案
        <span slot="description">自定义提示文案自定义提示文案自定义提示文案自定义提示文案自定义提示文案自定义提示文案自定义提示文案自定义提示文案</span>
      </Alert>
      <Alert type="warning" showIcon>1111</Alert>
      <Alert type="error" showIcon>1111</Alert>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closed () {
      alert('我被关闭了')
    }
  }
}
</script>
