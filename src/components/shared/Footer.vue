<template>
  <div class="footer">
    <div>
      <div class="footer__logo-holder">
        <img src="https://cdn.shopify.com/s/files/1/1423/8400/files/logo.png" alt="">
      </div>
      <div class="footer__section-holder">
        <div class="section-item">
          <img src="https://cdn.shopify.com/s/files/1/1423/8400/files/icon-phone.png" alt="">
          <p>800-140-100</p>
          <span>Fast delivery</span>
        </div>
        <div class="section-item">
          <img src="https://cdn.shopify.com/s/files/1/1423/8400/files/icon-phone.png" alt="">
          <p>800-140-100</p>
          <span>Fast delivery</span>
        </div>
        <div class="section-item">
          <img src="https://cdn.shopify.com/s/files/1/1423/8400/files/icon-phone.png" alt="">
          <p>800-140-100</p>
          <span>Fast delivery</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

  .footer__logo-holder {
    padding: 50px;
    text-align: center;
  }

  .footer .section-item {
    background-color: #f9f9f9;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }
  .footer .section-item p {
    font-size: 26px;
    font-weight: 600;
  }
</style>
