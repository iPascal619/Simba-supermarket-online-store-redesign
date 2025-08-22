export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number | null
  category: string
  subcategory?: string
  brand: string
  image: string
  images?: string[]
  rating: number
  reviews: number
  inStock: boolean
  quantity?: number
  weight?: string
  dimensions?: {
    length: number
    width: number
    height: number
  }
  nutritionalInfo?: NutritionalInfo | null
  tags: string[]
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface NutritionalInfo {
  calories: number
  protein: number
  carbohydrates: number
  fat: number
  fiber: number
  sugar: number
  sodium: number
  servingSize: string
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  slug: string
  parentId?: string
  subcategories?: Category[]
  productCount: number
  featured: boolean
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  addedAt: Date
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: Date
  addresses: Address[]
  preferences: UserPreferences
  orders: Order[]
  wishlist: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  type: 'home' | 'work' | 'other'
  street: string
  city: string
  district: string
  postalCode?: string
  country: string
  isDefault: boolean
  deliveryInstructions?: string
}

export interface UserPreferences {
  language: 'en' | 'rw' | 'fr'
  currency: 'RWF' | 'USD'
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
  marketing: boolean
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  deliveryFee: number
  discount: number
  total: number
  status: OrderStatus
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  deliveryAddress: Address
  estimatedDelivery: Date
  actualDelivery?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
  total: number
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentMethod = 
  | 'mobile_money'
  | 'card'
  | 'bank_transfer'
  | 'cash_on_delivery'

export type PaymentStatus = 
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded'

export interface SearchFilters {
  categories?: string[]
  priceRange?: {
    min: number
    max: number
  }
  rating?: number
  inStock?: boolean
  brands?: string[]
  tags?: string[]
  sortBy?: 'relevance' | 'price_low' | 'price_high' | 'rating' | 'newest'
}

export interface DeliverySlot {
  id: string
  date: string
  startTime: string
  endTime: string
  available: boolean
  fee: number
}

export interface Promotion {
  id: string
  title: string
  description: string
  code?: string
  type: 'percentage' | 'fixed' | 'free_delivery'
  value: number
  minOrderAmount?: number
  maxDiscount?: number
  startDate: Date
  endDate: Date
  active: boolean
  applicableProducts?: string[]
  applicableCategories?: string[]
}
