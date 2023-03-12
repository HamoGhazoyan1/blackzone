import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

export default function Home() {
    const { data } = useQuery(gql`
    query {
        posts {
            nodes {
                id,
                title,
                slug,
                excerpt   
            }
        }
    }
    `)

    const posts = data?.posts?.nodes

  return (
      <main>
        <ul>
          {posts?.map(post => (
              <li key={post.id}>
                  <Link href={`/${post.slug}`}>
                      <a href={`/${post.slug}`}>
                          <h2>{post.title}</h2>
                      </a>
                  </Link>
                  <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
              </li>
          ))}
        </ul>
      </main>
  )
}