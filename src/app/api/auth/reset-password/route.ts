import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json(
        { message: 'Token and password are required' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    // For this demo, we'll simulate token validation
    // In a real app, you'd store the token in the database with expiry
    // and validate it here
    
    // For now, we'll decode the token to get the email
    // In production, you'd have a proper token validation system
    try {
      // Simple base64 decode (in production, use proper JWT or database lookup)
      const decodedToken = Buffer.from(token, 'hex').toString('utf-8')
      const tokenData = JSON.parse(decodedToken)
      
      if (!tokenData.email || !tokenData.expires || Date.now() > tokenData.expires) {
        return NextResponse.json(
          { message: 'Invalid or expired reset token' },
          { status: 400 }
        )
      }

      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: tokenData.email }
      })

      if (!user) {
        return NextResponse.json(
          { message: 'User not found' },
          { status: 404 }
        )
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 12)

      // Update user's password
      await prisma.user.update({
        where: { id: user.id },
        data: { 
          password: hashedPassword,
          // In a real app, you might want to invalidate all sessions
          // and require re-authentication
        }
      })

      return NextResponse.json(
        { message: 'Password reset successfully' },
        { status: 200 }
      )

    } catch (tokenError) {
      return NextResponse.json(
        { message: 'Invalid reset token format' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
