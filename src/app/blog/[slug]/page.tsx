export async function generateStaticParams() {
  return [
    { slug: 'special-post' },
    { slug: 'another-post' }
  ]
}

type Props = {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  return (
    <div>
      <h1>📝 記事: {params.slug}</h1>
      <p>これは静的に生成されたページです。</p>
    </div>
  )
}
