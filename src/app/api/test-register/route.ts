import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Test registration endpoint',
    timestamp: new Date().toISOString(),
    note: 'This is a test endpoint for registration functionality'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'Test registration POST endpoint',
    timestamp: new Date().toISOString(),
    note: 'This endpoint is for testing purposes only'
  })
}