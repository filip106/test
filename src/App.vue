<template>
  <div>
    <app-header/>
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
  import Header from './components/shared/Header'
  import Footer from './components/shared/Footer'

  export default {
    name: 'App',
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: "Arial", "serif";
  }

  .page-title {
    text-align: center;
    border-bottom: 1px solid #d6d0d0;
    border-top: 1px solid #d6d0d0;
    padding: 40px;
  }

  .page-title h1 {
    text-align: center;
    padding: 0 30px 15px 30px;
    border-bottom: 3px solid purple;
    display: inline-block;
  }

  .page-title p {
    margin: 0;
    color: #d6d0d0;
    font-size: 14px;
    font-style: italic;
  }

  .page-title a {
    text-decoration: none;
  }

  .page-title a:hover {
    color: gray;
  }
</style>
