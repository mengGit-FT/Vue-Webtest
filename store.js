import { reactive, computed } from "vue";

export const cartStore = reactive({
  items: [],

  addToCart(product) {
    const existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        ...product,
        quantity: 1,
      });
    }
  },

  removeFromCart(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  },

  incrementQuantity(productId) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
    }
  },

  decrementQuantity(productId) {
    const item = this.items.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  },

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice() {
    return this.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  },

  clearCart() {
    this.items = [];
  },
});
