import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

// Simple in-memory cart storage for demo (in production, use database or Redis)
const carts: { [userId: string]: any[] } = {}

// GET /api/cart - Get user's cart
export async function GET() {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const cartItems = carts[session.user.id] || []
    return NextResponse.json(cartItems)
  } catch (error) {
    console.error('Cart fetch error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/cart - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { productId, productName, productPrice, productImage, quantity = 1 } = await request.json()

    if (!productId || !productName || !productPrice) {
      return NextResponse.json(
        { message: 'Product ID, name, and price are required' },
        { status: 400 }
      )
    }

    const userId = session.user.id
    if (!carts[userId]) {
      carts[userId] = []
    }

    // Check if item already exists in cart
    const existingItemIndex = carts[userId].findIndex(item => item.productId === productId)

    if (existingItemIndex >= 0) {
      // Update quantity
      carts[userId][existingItemIndex].quantity += quantity
    } else {
      // Add new item
      carts[userId].push({
        id: Date.now().toString(),
        productId,
        productName,
        productPrice,
        productImage: productImage || null,
        quantity,
        addedAt: new Date().toISOString()
      })
    }

    return NextResponse.json({ message: 'Item added to cart', cart: carts[userId] }, { status: 200 })
  } catch (error) {
    console.error('Cart add error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/cart - Update cart item quantity
export async function PUT(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { productId, quantity } = await request.json()

    if (!productId || quantity < 0) {
      return NextResponse.json(
        { message: 'Product ID and valid quantity are required' },
        { status: 400 }
      )
    }

    const userId = session.user.id
    if (!carts[userId]) {
      carts[userId] = []
    }

    const itemIndex = carts[userId].findIndex(item => item.productId === productId)
    
    if (itemIndex >= 0) {
      if (quantity === 0) {
        // Remove item if quantity is 0
        carts[userId].splice(itemIndex, 1)
      } else {
        // Update quantity
        carts[userId][itemIndex].quantity = quantity
      }
    }

    return NextResponse.json({ message: 'Cart updated', cart: carts[userId] })
  } catch (error) {
    console.error('Cart update error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/cart - Remove item from cart
export async function DELETE(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    if (!productId) {
      return NextResponse.json(
        { message: 'Product ID is required' },
        { status: 400 }
      )
    }

    const userId = session.user.id
    if (carts[userId]) {
      carts[userId] = carts[userId].filter(item => item.productId !== productId)
    }

    return NextResponse.json({ message: 'Item removed from cart' })
  } catch (error) {
    console.error('Cart remove error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
