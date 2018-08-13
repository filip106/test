<template>
  <tr>
    <td><img :src="item.imageUrl" alt=""></td>
    <td>{{item.id}}</td>
    <td>{{ item.name }}</td>
    <td>
      <select :name="item.id + '-quantity-select'" :id="item.id + '-quantity-select'" @change="changeQuantity">
        <option v-for="numb in 9" :value="numb" :selected="item.quantity == numb">{{numb}}</option>
        <option value="10plus" :selected="item.quantity > 9">10+</option>
      </select>
    </td>
    <td>{{item.price | formatMoney}}</td>
    <td>{{item.price*item.quantity | formatMoney}}</td>
  </tr>
</template>

<script>
  export default {
    props: ['item'],
    name: 'CartSummaryItem',
    methods: {
      changeQuantity (event) {
        alert('New Quantity is ' + event.srcElement.value)
      }
    }
  }
</script>

<style scoped>
</style>
