const fakeStoreApiUrl = "https://fakestoreapi.com";

export const getProducts = {
  url: `${fakeStoreApiUrl}/products`,
  method: "GET",
};

export const getProduct = (id) => ({
  url: `${fakeStoreApiUrl}/products/${id}`,
  method: "GET",
});

export const addToCart = (productId, quantity) => ({
  url: `${fakeStoreApiUrl}/carts`,
  method: "POST",
  data: { userId: 1, products: [{ productId, quantity }] },
});

export const getCart = { url: `${fakeStoreApiUrl}/carts/5`, method: "GET" };

export const getUser = { url: `${fakeStoreApiUrl}/users/1`, method: "GET" };
