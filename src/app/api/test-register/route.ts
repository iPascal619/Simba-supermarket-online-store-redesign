import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json()

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Return success without database operations for now
    return NextResponse.json(
      { 
        message: 'Registration endpoint is working',
        data: { name, email, phone },
        timestamp: new Date().toISOString(),
        note: 'Database operations temporarily disabled for testing'
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Registration test error:', error)
    
    return NextResponse.json(
      { 
        message: 'Registration endpoint error',
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
