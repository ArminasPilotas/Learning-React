const fakeStoreApiUrl = "https://fakestoreapi.com";

export const getProducts = {
  url: `${fakeStoreApiUrl}/products`,
  method: "GET",
};

export const getProduct = (id) => ({
  url: `${fakeStoreApiUrl}/products/${id}`,
  method: "GET",
});

export const addToCard = (productId, quantity) => ({
  url: `${fakeStoreApiUrl}/cards`,
  method: "POST",
  data: { userId: 1, products: [{ productId, quantity }] },
});
