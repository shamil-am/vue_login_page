import api from "./_axios";

class Products {
  async getProducts() {
    return await api.get("/products");
  }
}

export default new Products();
