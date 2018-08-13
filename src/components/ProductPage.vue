<template>
  <div>
    <div class="page-title">
      <h1>{{product.name}}</h1>
      <p>
        <router-link to="/">Home</router-link>
        >
        <router-link :to="{name: 'CategoryPage'}">Computers</router-link>
        >
        <router-link :to="{name: 'ProductPage'}">{{product.name}}</router-link>
      </p>
    </div>

    <div class="product-holder">
      <div class="image-slider">
        <div class="main-image">
          <img :src="product.imageUrl" alt="">
        </div>
        <div class="slide-images">
          <img v-for="image in product.images" :src="image.imageUrl" :alt="image.imageName">
        </div>
      </div>

      <div class="product-information">
        <h2>{{product.name}}</h2>
        <p class="description">{{product.description}}</p>
        <p class="price">Price: <span>{{product.price | formatMoney}}</span></p>
        <div>
          <label for="quantity-select">Quantity: </label>
          <select name="quantity-select" id="quantity-select">
            <option value="1" selected>1</option>
            <option v-for="numb in 8" :value="numb+1">{{numb + 1}}</option>
            <option value="10plus">10+</option>
          </select>
          <button type="button" class="add-to-cart" @click.prevent="addToCart">Add to cart</button>
        </div>
      </div>
    </div>

    <div class="product-additional-tabs">
      <div class="tab-navigation">
        <ul>
          <li :class="tabActivated === 'description' ? 'active' : ''" @click="tabActivated='description'">description</li>
          <li :class="tabActivated === 'review' ? 'active' : ''" @click="tabActivated='review'">review</li>
        </ul>
      </div>
      <div class="tab-tabs">
        <div id="tab-description" v-show="tabActivated === 'description'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic nesciunt nobis. Adipisci blanditiis consectetur cum, earum error facilis
            nesciunt non optio pariatur perferendis quia reiciendis rerum, sequi sit sunt.</p>
        </div>
        <div id="tab-review" v-show="tabActivated === 'review'">
          <p><span>No reviews yet</span><span class="write-a-review">Write a review</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductPage',
    data () {
      return {
        tabActivated: 'description',
        product: {
          id: 1,
          imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_large.jpg?v=1476438235',
          description: 'This relies on the fact a margin set to `auto` in a flex container absorb extra space. So setting a vertical margin of auto will make the item perfectly centered in both axis.',
          name: 'Apple cinema',
          quantity: 3,
          price: 170,
          images: [
            {
              imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_small.jpg?v=1476438235',
              imageName: 'apple_cinema_30'
            },
            {
              imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_small.jpg?v=1476438235',
              imageName: 'apple_cinema_30'
            },
            {
              imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_small.jpg?v=1476438235',
              imageName: 'apple_cinema_30'
            },
          ]
        }
      }
    },
    methods: {
      addToCart (event) {
        alert('Product added to cart')
      }
    }
  }
</script>

<style scoped>

  .image-slider {
    display: inline-block;
    width: 40%;
  }

  .product-information {
    display: inline-block;
    width: 55%;
    float: right;
  }

  .product-information h2 {
    border-bottom: 1px solid #cdcdcd;
    padding-bottom: 20px;
  }

  .product-information p.description {
    width: 70%;
    color: gray;
  }

  .product-information p.price {
    font-size: 18px;
    font-weight: 600;
  }

  .product-information p.price span {
    color: #800580;
  }

  .slide-images img {
    border: 1px solid #ffffff;
    padding: 0 10px;
  }

  .slide-images img:first-child {
    margin-left: 30px;
  }

  .slide-images img:hover {
    border: 1px solid gray;
    cursor: pointer;
  }

  select {
    outline: none;
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
  }

  .add-to-cart {
    border: none;
    outline: none;
    background-color: #800580;
    color: #ffffff;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
  }

  .add-to-cart:hover {
    background-color: #ea05ea;
  }

  .tab-navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .tab-navigation ul li {
    padding: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: serif;
    font-size: 20px;
    cursor: pointer;
  }

  .tab-navigation ul li.active {
    border-bottom: 2px solid #ea05ea;
  }

  .tab-tabs {
    margin: 0 60px;
  }

  .write-a-review {
    float: right;
    cursor: pointer;
  }
</style>
