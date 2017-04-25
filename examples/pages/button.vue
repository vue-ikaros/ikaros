<template>
  <div>
    <div style="padding: 10px">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button  type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="primary" shape="circle"><Icon type="arrow-up-a"/></Button>
    </div>
    <div style="padding: 10px">
      <Button type="primary"><Icon type="play"/>播放</Button>
      <Button type="primary"><Icon type="pause"/>暂停</Button>
      <Button type="primary"><Icon type="skip-backward"/>上一首</Button>
      <Button type="primary">下一首<Icon type="skip-forward"/></Button>
      
    </div>
    <div style="padding: 10px">
      <Button type="primary" shape="circle"><Icon type="arrow-up-a"/></Button>
      <Button shape="circle"><Icon type="arrow-up-a"/></Button>
      <Button type="dashed" shape="circle"><Icon type="arrow-up-a"/></Button>
      <Button type="danger" shape="circle"><Icon type="arrow-up-a"/></Button>
    </div>
    <div style="padding: 10px">
      <Button :disabled="true" type="primary">Primary</Button>
      <Button size="large">Default</Button>
      <Button :disabled="true" type="dashed">Dashed</Button>
      <Button size="small" type="danger">Danger</Button>
    </div>
    <div style="padding: 10px;background-color: #bec8c8;">
      <Button :ghost="true" type="primary">Primary</Button>
      <Button :ghost="true" size="large">Default</Button>
      <Button :ghost="true" type="dashed">Dashed</Button>
      <Button :ghost="true"  size="small" type="danger">Danger</Button>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
