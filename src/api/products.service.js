import api from "./_axios";

class Products {
  async getProducts() {
    return await api.get("/products");
  }
  async getProduct(id) {
    return await api.get(`/products/${id}`);
  }
}

export default new Products();
