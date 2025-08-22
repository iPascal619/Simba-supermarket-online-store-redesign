import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetailPage from '../components/ProductDetailPage'
import { products } from '../../../data/products'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = products.find(p => p.id === resolvedParams.id)
  
  if (!product) {
    return {
      title: 'Product Not Found - Simba Supermarket'
    }
  }

  return {
    title: `${product.name} - Simba Supermarket`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id,
  }))
}

export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params
  const product = products.find(p => p.id === resolvedParams.id)
  
  if (!product) {
    notFound()
  }

  return <ProductDetailPage product={product} />
}
