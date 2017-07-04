<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <nav>
      组件列表
      <ul>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/grid">Grid</router-link></li>
      </ul>
    </nav>
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
nav {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 40px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  display: inline-block;
  font-size: 25px;
}
li + li {
  border-left: solid 1px #bbb;
  padding-left: 10px;
  margin-left: 10px;
}
</style>
