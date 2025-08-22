import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryPage from '../components/CategoryPage'
import { categories } from '../../../data/products'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.id === params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found - Simba Supermarket'
    }
  }

  return {
    title: `${category.name} - Simba Supermarket`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return categories.map(category => ({
    slug: category.id,
  }))
}

export default function Category({ params }: PageProps) {
  const category = categories.find(cat => cat.id === params.slug)
  
  if (!category) {
    notFound()
  }

  return <CategoryPage category={category} />
}
