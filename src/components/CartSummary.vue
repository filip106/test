<template>
  <div>
    <div class="page-title">
      <h1>Your Shopping Cart</h1>
      <p>
        <router-link to="/">Home</router-link> > <router-link :to="{name: 'CartSummary'}">Your shopping cart</router-link>
      </p>
    </div>
    <div class="cart-table">
      <div class="table-holder">
        <table>
          <thead>
          <tr>
            <th>image</th>
            <th>product code</th>
            <th>product name</th>
            <th>quantity</th>
            <th>unit price</th>
            <th>total price</th>
          </tr>
          </thead>
          <tbody>
          <cart-summary-item v-for="item in items" :item="item"></cart-summary-item>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="6">
              <h1>What would you like to do next?</h1>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <p><a class="collapse-trigger" href="#"
                    @click.prevent="commentSectionActivated = !commentSectionActivated">Leave comment for sealer?</a>
              </p>
              <div class="comment-area" v-show="commentSectionActivated">
                <label for="comment-textarea">Enter your comment:</label>
                <textarea name="comment-textarea" id="comment-textarea" cols="30" rows="5"></textarea>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <p><a class="collapse-trigger" href="#"
                    @click.prevent="shippingSectionActivated = !shippingSectionActivated">Enter shipping?</a>
              </p>
              <div class="comment-area" v-show="shippingSectionActivated">
                <form action="#" @submit.prevent="alert('Shipping changed');shippingSectionActivated = false">
                  <div>
                    <label>Enter address: <input type="text"></label>
                  </div>
                  <div>
                    <label>Enter contact: <input type="text"></label>
                  </div>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="6" id="order-total">Total: <span>{{calculateItemsTotal | formatMoney}}</span></td>
          </tr>
          <tr>
            <td colspan="6" id="last-step">
              <div>
                <button type="button">Continue shopping</button>
                <button type="button">Checkout</button>
              </div>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import CartSummaryItem from './CartSummaryItem'

  export default {
    name: 'CartSummary',
    data () {
      return {
        commentSectionActivated: false,
        shippingSectionActivated: false,
        items: [
          {
            id: 1,
            imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_small.jpg?v=1476438235',
            name: 'Apple cinema',
            quantity: 3,
            price: 170
          },
          {
            id: 2,
            imageUrl: 'https://cdn.shopify.com/s/files/1/1423/8400/products/apple_cinema_30_small.jpg?v=1476438235',
            name: 'Apple cinema',
            quantity: 2,
            price: 170
          }
        ]
      }
    },
    computed: {
      calculateItemsTotal () {
        return this.items.map((item) => item.price * item.quantity).reduce((total, number) => total + number, 0)
      }
    },
    components: {
      cartSummaryItem: CartSummaryItem
    }
  }
</script>

<style>
  .cart-table {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    border-bottom: 1px solid #d6d0d0;
  }

  .cart-table th, .cart-table td {
    padding: 20px;
    text-align: center;
  }

  .cart-table tfoot td {
    text-align: left;
    padding: 0;
    border-bottom: 1px solid #eeeeee;
  }

  .cart-table thead th {
    border-bottom: 1px solid #eeeeee;
  }

  .cart-table .table-holder {
    width: 80%;
  }

  .cart-table table {
    width: 100%;
    font-size: 12px;
  }

  .cart-table table thead {
    text-transform: uppercase;
  }

  .cart-table table select {
    border-radius: 20px;
    padding: 5px;
    outline: none;
  }

  .collapse-trigger {
    text-decoration: none;
    text-transform: uppercase;
    color: #989898;
  }

  .collapse-trigger:hover {
    color: #767676;
  }

  .cart-table .comment-area {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }

  .cart-table .comment-area textarea {
    width: 70%;
    border-radius: 20px;
    border-color: #eeeeee;
    outline: none;
    padding: 10px;
  }

  #order-total {
    text-align: right;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  #order-total span {
    padding-left: 50px;
    color: #800580;
  }

  #last-step {
    padding: 10px;
  }

  #last-step div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 15px;
  }

  #last-step button {
    padding: 10px;
    background-color: #8005808c;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    font-size: 15px;
  }
</style>
