const fakeStoreApiUrl = "https://fakestoreapi.com";

export const getProducts = {
  url: `${fakeStoreApiUrl}/products`,
  method: "GET",
};

export const getProduct = (id) => ({
  url: `${fakeStoreApiUrl}/products/${id}`,
  method: "GET",
});
