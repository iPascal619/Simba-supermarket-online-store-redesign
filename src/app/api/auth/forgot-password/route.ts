import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email }
    })

    // Always return success for security (don't reveal if email exists)
    if (!user) {
      return NextResponse.json(
        { message: 'If an account with this email exists, you will receive reset instructions.' },
        { status: 200 }
      )
    }

    // Generate reset token with email and expiry
    const tokenData = {
      email: user.email,
      expires: Date.now() + 3600000 // 1 hour
    }
    const resetToken = Buffer.from(JSON.stringify(tokenData)).toString('hex')

    // Create email transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@simba-supermarket.rw',
      to: email,
      subject: 'Reset Your Simba Supermarket Password',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Simba Supermarket</h1>
          </div>
          
          <div style="padding: 40px 20px; background: white;">
            <h2 style="color: #333; margin-bottom: 20px;">Reset Your Password</h2>
            
            <p style="color: #666; line-height: 1.6;">
              We received a request to reset the password for your Simba Supermarket account.
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              Click the button below to create a new password:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" 
                 style="background: #ff6b35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Reset Password
              </a>
            </div>
            
            <p style="color: #666; line-height: 1.6; font-size: 14px;">
              If you didn't request this password reset, please ignore this email. Your password will remain unchanged.
            </p>
            
            <p style="color: #666; line-height: 1.6; font-size: 14px;">
              This link will expire in 1 hour for security reasons.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>© 2025 Simba Supermarket. All rights reserved.</p>
            <p>Kigali, Rwanda | +250 788 123 456</p>
          </div>
        </div>
      `,
    }

    // For development, we'll just log the reset URL instead of sending email
    if (process.env.NODE_ENV === 'development') {
      console.log('Password reset URL:', resetUrl)
    } else {
      // In production, send the actual email
      await transporter.sendMail(mailOptions)
    }

    return NextResponse.json(
      { message: 'If an account with this email exists, you will receive reset instructions.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
