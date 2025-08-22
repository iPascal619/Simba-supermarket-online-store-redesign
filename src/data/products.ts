export const categories = [
  {
    id: "fresh-produce",
    name: "Fresh Produce",
    description: "Farm-fresh fruits and vegetables",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Fruits", "Vegetables", "Herbs", "Organic"]
  },
  {
    id: "meat-seafood",
    name: "Meat & Seafood", 
    description: "Premium quality meat and fresh seafood",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Beef", "Chicken", "Pork", "Fish", "Seafood"]
  },
  {
    id: "dairy-eggs",
    name: "Dairy & Eggs",
    description: "Fresh dairy products and farm eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Milk", "Cheese", "Yogurt", "Eggs", "Butter"]
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Freshly baked bread and pastries",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Bread", "Pastries", "Cakes", "Cookies"]
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks and beverages",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Coffee", "Tea", "Juices", "Soft Drinks", "Water"]
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Delicious snacks and treats",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Chips", "Nuts", "Chocolate", "Cookies", "Candy"]
  },
  {
    id: "household",
    name: "Household",
    description: "Cleaning and household essentials",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    subcategories: ["Cleaning", "Laundry", "Paper Products", "Storage"]
  }
]

export const products = [
  // Fresh Produce
  {
    id: "avocado-organic",
    name: "Organic Avocados",
    description: "Premium organic avocados, perfect for salads, sandwiches, or guacamole. Rich in healthy fats and nutrients.",
    price: 2500,
    originalPrice: 3000,
    category: "fresh-produce",
    subcategory: "Fruits",
    brand: "Organic Farm",
    images: [
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    badges: ["ORGANIC", "FRESH"],
    inStock: true,
    weight: "1kg (3-4 pieces)",
    nutritionalInfo: {
      calories: 160,
      fat: 15,
      carbs: 9,
      protein: 2,
      fiber: 7
    },
    features: ["Organic certified", "Hand-picked", "Rich in healthy fats", "High in fiber"]
  },
  {
    id: "bananas-fresh",
    name: "Fresh Bananas",
    description: "Sweet, ripe bananas perfect for snacking, smoothies, or baking. High in potassium and natural energy.",
    price: 1500,
    originalPrice: null,
    category: "fresh-produce",
    subcategory: "Fruits",
    brand: "Local Farm",
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&h=600&fit=crop"
    ],
    rating: 4.4,
    reviews: 203,
    badges: ["FRESH", "LOCAL"],
    inStock: true,
    weight: "1kg (6-8 pieces)",
    nutritionalInfo: {
      calories: 89,
      fat: 0.3,
      carbs: 23,
      protein: 1.1,
      fiber: 2.6
    },
    features: ["High in potassium", "Natural energy boost", "Perfect ripeness", "Locally sourced"]
  },
  {
    id: "tomatoes-fresh",
    name: "Fresh Tomatoes",
    description: "Juicy, vine-ripened tomatoes perfect for salads, cooking, or sauces. Rich in vitamins and antioxidants.",
    price: 1800,
    originalPrice: 2200,
    category: "fresh-produce",
    subcategory: "Vegetables",
    brand: "Garden Fresh",
    images: [
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=600&h=600&fit=crop"
    ],
    rating: 4.6,
    reviews: 156,
    badges: ["FRESH", "VITAMIN C"],
    inStock: true,
    weight: "1kg (4-6 pieces)",
    nutritionalInfo: {
      calories: 18,
      fat: 0.2,
      carbs: 3.9,
      protein: 0.9,
      fiber: 1.2
    },
    features: ["Vine-ripened", "High in lycopene", "Rich in vitamins", "Perfect for cooking"]
  },

  // Meat & Seafood
  {
    id: "beef-steak-premium",
    name: "Premium Beef Steak",
    description: "Prime cut beef steak, perfectly marbled for maximum flavor and tenderness. Ideal for grilling or pan-searing.",
    price: 8500,
    originalPrice: null,
    category: "meat-seafood",
    subcategory: "Beef",
    brand: "Premium Meats",
    images: [
      "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviews: 89,
    badges: ["PREMIUM", "FRESH"],
    inStock: true,
    weight: "500g (2 steaks)",
    nutritionalInfo: {
      calories: 250,
      fat: 17,
      carbs: 0,
      protein: 26,
      fiber: 0
    },
    features: ["Prime cut", "Perfectly marbled", "Grass-fed", "Restaurant quality"]
  },
  {
    id: "chicken-whole",
    name: "Whole Chicken",
    description: "Fresh whole chicken, perfect for roasting, grilling, or cutting into parts. Free-range and hormone-free.",
    price: 6800,
    originalPrice: 7500,
    category: "meat-seafood",
    subcategory: "Chicken",
    brand: "Farm Fresh",
    images: [
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=600&fit=crop"
    ],
    rating: 4.7,
    reviews: 156,
    badges: ["FRESH", "FREE-RANGE"],
    inStock: true,
    weight: "1.5kg",
    nutritionalInfo: {
      calories: 165,
      fat: 3.6,
      carbs: 0,
      protein: 31,
      fiber: 0
    },
    features: ["Free-range", "Hormone-free", "Fresh daily", "Perfect for families"]
  },

  // Dairy & Eggs
  {
    id: "milk-fresh-1l",
    name: "Fresh Milk (1L)",
    description: "Pure, fresh milk from local dairy farms. Rich in calcium and protein, perfect for drinking or cooking.",
    price: 1200,
    originalPrice: 1400,
    category: "dairy-eggs",
    subcategory: "Milk",
    brand: "Dairy Fresh",
    images: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop"
    ],
    rating: 4.7,
    reviews: 256,
    badges: ["FRESH", "LOCAL"],
    inStock: true,
    weight: "1 Liter",
    nutritionalInfo: {
      calories: 42,
      fat: 1,
      carbs: 5,
      protein: 3.4,
      fiber: 0
    },
    features: ["Pasteurized", "Rich in calcium", "Local dairy", "Daily fresh"]
  },
  {
    id: "eggs-farm-fresh",
    name: "Farm Fresh Eggs",
    description: "Free-range farm eggs with bright orange yolks. Perfect for breakfast, baking, or cooking.",
    price: 2800,
    originalPrice: null,
    category: "dairy-eggs",
    subcategory: "Eggs",
    brand: "Happy Farm",
    images: [
      "https://images.unsplash.com/photo-1569288052389-dac9b01ac637?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 189,
    badges: ["FREE-RANGE", "FRESH"],
    inStock: true,
    weight: "12 pieces (1 dozen)",
    nutritionalInfo: {
      calories: 70,
      fat: 5,
      carbs: 0.6,
      protein: 6,
      fiber: 0
    },
    features: ["Free-range", "Bright orange yolks", "High protein", "Omega-3 rich"]
  },

  // Bakery
  {
    id: "bread-artisan-loaf",
    name: "Artisan Bread Loaf",
    description: "Hand-crafted artisan bread with a crispy crust and soft interior. Made with premium flour and natural ingredients.",
    price: 800,
    originalPrice: null,
    category: "bakery",
    subcategory: "Bread",
    brand: "Artisan Bakery",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
    ],
    rating: 4.6,
    reviews: 78,
    badges: ["ARTISAN", "FRESH"],
    inStock: true,
    weight: "500g",
    nutritionalInfo: {
      calories: 265,
      fat: 3.2,
      carbs: 49,
      protein: 9,
      fiber: 2.7
    },
    features: ["Hand-crafted", "Natural ingredients", "Crispy crust", "Baked daily"]
  },
  {
    id: "croissants-butter",
    name: "Butter Croissants",
    description: "Flaky, buttery croissants baked fresh daily. Perfect for breakfast or as a light snack.",
    price: 1500,
    originalPrice: 1800,
    category: "bakery",
    subcategory: "Pastries",
    brand: "French Bakery",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab794f77665e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
    ],
    rating: 4.7,
    reviews: 134,
    badges: ["FRESH", "BUTTER"],
    inStock: true,
    weight: "4 pieces",
    nutritionalInfo: {
      calories: 231,
      fat: 12,
      carbs: 26,
      protein: 5,
      fiber: 1.5
    },
    features: ["Flaky layers", "Real butter", "French technique", "Baked fresh"]
  },

  // Beverages
  {
    id: "coffee-rwanda-beans",
    name: "Rwanda Coffee Beans",
    description: "Premium Rwandan coffee beans with rich, full-bodied flavor and hints of chocolate and citrus.",
    price: 4500,
    originalPrice: 5200,
    category: "beverages",
    subcategory: "Coffee",
    brand: "Rwanda Coffee",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=600&fit=crop"
    ],
    rating: 4.9,
    reviews: 167,
    badges: ["LOCAL", "PREMIUM"],
    inStock: true,
    weight: "500g",
    nutritionalInfo: {
      calories: 2,
      fat: 0,
      carbs: 0,
      protein: 0.3,
      fiber: 0
    },
    features: ["Single origin", "Arabica beans", "Medium roast", "Fair trade"]
  },
  {
    id: "orange-juice-fresh",
    name: "Fresh Orange Juice",
    description: "100% pure orange juice, freshly squeezed daily. No added sugar or preservatives, just natural goodness.",
    price: 2200,
    originalPrice: null,
    category: "beverages",
    subcategory: "Juices",
    brand: "Fresh Squeeze",
    images: [
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&h=600&fit=crop"
    ],
    rating: 4.5,
    reviews: 98,
    badges: ["FRESH", "100% PURE"],
    inStock: true,
    weight: "1 Liter",
    nutritionalInfo: {
      calories: 45,
      fat: 0.2,
      carbs: 10.4,
      protein: 0.7,
      fiber: 0.2
    },
    features: ["100% pure", "No additives", "Vitamin C rich", "Fresh daily"]
  },

  // Snacks
  {
    id: "mixed-nuts-premium",
    name: "Premium Mixed Nuts",
    description: "A delicious mix of premium nuts including almonds, cashews, walnuts, and hazelnuts. Perfect healthy snacking.",
    price: 3200,
    originalPrice: 3800,
    category: "snacks",
    subcategory: "Nuts",
    brand: "Nut Paradise",
    images: [
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1630434909075-7dd582deb89c?w=600&h=600&fit=crop"
    ],
    rating: 4.5,
    reviews: 92,
    badges: ["PREMIUM", "HEALTHY"],
    inStock: true,
    weight: "300g",
    nutritionalInfo: {
      calories: 607,
      fat: 54,
      carbs: 16,
      protein: 18,
      fiber: 7
    },
    features: ["Premium quality", "Mixed varieties", "Rich in protein", "Heart healthy"]
  },
  {
    id: "chocolate-cookies",
    name: "Chocolate Chip Cookies",
    description: "Soft, chewy chocolate chip cookies made with real butter and premium chocolate chips. Perfect treat for any time.",
    price: 2200,
    originalPrice: null,
    category: "snacks",
    subcategory: "Cookies",
    brand: "Sweet Treats",
    images: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop"
    ],
    rating: 4.6,
    reviews: 89,
    badges: ["POPULAR", "SWEET"],
    inStock: true,
    weight: "250g (8 cookies)",
    nutritionalInfo: {
      calories: 155,
      fat: 7,
      carbs: 23,
      protein: 2,
      fiber: 1
    },
    features: ["Soft & chewy", "Real chocolate chips", "Fresh baked", "Family favorite"]
  },

  // Household
  {
    id: "detergent-liquid",
    name: "Liquid Laundry Detergent",
    description: "Powerful liquid detergent that removes tough stains while being gentle on fabrics. Fresh scent and eco-friendly formula.",
    price: 3500,
    originalPrice: 4000,
    category: "household",
    subcategory: "Laundry",
    brand: "Clean Pro",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1627483262112-039732f2c2d0?w=600&h=600&fit=crop"
    ],
    rating: 4.4,
    reviews: 145,
    badges: ["ECO-FRIENDLY", "EFFECTIVE"],
    inStock: true,
    weight: "2 Liters",
    nutritionalInfo: null,
    features: ["Stain removal", "Fabric safe", "Fresh scent", "Concentrated formula"]
  },
  {
    id: "toilet-paper-premium",
    name: "Premium Toilet Paper",
    description: "Ultra-soft, 3-ply toilet paper that's strong and absorbent. Made from sustainable materials.",
    price: 1800,
    originalPrice: null,
    category: "household",
    subcategory: "Paper Products",
    brand: "Comfort Plus",
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1609205264511-b7e85648c8fb?w=600&h=600&fit=crop"
    ],
    rating: 4.3,
    reviews: 267,
    badges: ["SOFT", "SUSTAINABLE"],
    inStock: true,
    weight: "12 rolls",
    nutritionalInfo: null,
    features: ["3-ply softness", "Strong & absorbent", "Sustainable", "Long lasting"]
  }
]

export const brands = [
  "Organic Farm", "Local Farm", "Garden Fresh", "Premium Meats", "Farm Fresh",
  "Dairy Fresh", "Happy Farm", "Artisan Bakery", "French Bakery", "Rwanda Coffee",
  "Fresh Squeeze", "Nut Paradise", "Sweet Treats", "Clean Pro", "Comfort Plus"
]

export const badges = [
  "ORGANIC", "FRESH", "LOCAL", "PREMIUM", "FREE-RANGE", "ARTISAN", 
  "BUTTER", "100% PURE", "HEALTHY", "POPULAR", "SWEET", "ECO-FRIENDLY", 
  "EFFECTIVE", "SOFT", "SUSTAINABLE", "VITAMIN C"
]
