<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <mi-button>我是按鈕</mi-button>
    <mi-button type="primary">我是按鈕</mi-button>
    <mi-button type="ghost">我是按鈕</mi-button>
    <mi-button type="dashed">我是按鈕</mi-button>
    <mi-button type="text">我是按鈕</mi-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Mui'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
