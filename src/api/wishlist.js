const WISHLIST_KEY = "zahi_wishlist_local";

export const getWishlist = async () => {
  const stored = localStorage.getItem(WISHLIST_KEY);
  return { wishlist: stored ? JSON.parse(stored) : [] };
};

export const addToWishlist = async (productData) => {
  const stored = localStorage.getItem(WISHLIST_KEY);
  let wishlist = stored ? JSON.parse(stored) : [];
  
  // Handle both full object and string ID (fallback)
  const productId = typeof productData === 'object' ? productData._id : productData;
  const newItem = typeof productData === 'object' ? productData : {
    _id: productId,
    productName: "Raw Silk with Net Dupatta",
    price: 12500,
    image: "/Featured/Lehanga.png"
  };

  if (!wishlist.find(item => item._id === productId)) {
    wishlist.push(newItem);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
  
  return { message: "Added to wishlist" };
};

export const removeFromWishlist = async (productId) => {
  const stored = localStorage.getItem(WISHLIST_KEY);
  let wishlist = stored ? JSON.parse(stored) : [];
  wishlist = wishlist.filter(item => item._id !== productId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  
  return { message: "Removed from wishlist" };
};

export const clearWishlist = async () => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));
  return { message: "Wishlist cleared" };
};
