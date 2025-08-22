import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Test basic database connection
    await prisma.$connect()
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`
    
    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      result,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('Database test error:', error)
    
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: {
        code: error.code || 'UNKNOWN',
        message: error.message,
        name: error.name
      },
      timestamp: new Date().toISOString()
    }, { status: 500 })
    
  } finally {
    await prisma.$disconnect()
  }
}
