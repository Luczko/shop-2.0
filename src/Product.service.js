import Products from "./products.json";

class ProductService {
  static getProducts() {
    return Products;
  }

  static getFilteredProducts(name, manufacture) {
    let filtered = Products.filter(
      (e) => e.manufacture === manufacture || manufacture === "All"
    );

    if (name) {
      return filtered.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      return filtered;
    }
  }

  static getManufacturers() {
    let manufacturers = Products.map((e) => e.manufacture);
    return ["All", ...new Set(manufacturers)];
  }
}

export default ProductService;
