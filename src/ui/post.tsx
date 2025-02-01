import Link from 'next/link'

type PostProps = {
  post: {
    id: string
    title: string
    content: string
    author?: string
    publishedDate?: string
  }
}

export function Post({ post }: PostProps) {
  return (
    <li className="border rounded p-4 mb-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold">
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      {post.author && (
        <p className="text-sm text-gray-500">By {post.author}</p>
      )}
      {post.publishedDate && (
        <p className="text-sm text-gray-500">{post.publishedDate}</p>
      )}
      <p className="text-gray-800 mt-2">
        {post.content.substring(0, 200)}...
      </p>
    </li>
  )
}
