<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/welcome">FirstPage</router-link>
      </li>
      <li>
        <router-link :to="{name: 'CategoryPage'}">Category Page</router-link>
      </li>
      <li>
        <router-link :to="{name: 'ProductPage'}">Product</router-link>
      </li>
      <li>
        <router-link :to="{name: 'CartSummary'}">Cart</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .nav {
    background-color: #595959;
    color: #ffffff;
    list-style: none;
    text-align: center;
    padding: 20px 0 20px 0;
  }

  .nav > li {
    display: inline-block;
    padding: 0 25px 0 25px;
  }

  .nav > li > a {
    text-decoration: none;
    color: #ffffff;
  }

  .nav > li > a:hover {
    color: #c1c1c1;
  }

</style>
