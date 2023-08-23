// Primary dependencies
import { useContext } from 'react'
import Link from 'next/link'

// Custom components
import PostContent from '../../components/PostContent'
import AuthCheck from '../../components/AuthCheck'
import HeartButton from '../../components/HeartButton'
import Metatags from '../../components/Metatags'

// Internal libraries
import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase'
import { UserContext } from '../../lib/context'

// External libraries
import { useDocumentData } from 'react-firebase-hooks/firestore'

// Styles & assets
import styles from '../../styles/Post.module.css'


export async function getStaticProps({ params }) {
  const { username, slug } = params
  const userDoc = await getUserWithUsername(username)

  let post
  let path

  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug)
    post = postToJSON(await postRef.get())

    path = postRef.path
  }

  return {
    props: { post, path },
    revalidate: 5000,
  }
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup('posts').get()

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data()
    return {
      params: { username, slug }
    }
  })

  return {
    // must be in this format:
    // paths: [
    //  { params: { username, slug }}
    // ],
    paths, 
    fallback: 'blocking',
  }
}

export default function Post(props) {
  const postRef = firestore.doc(props.path)
  const [realtimePost] = useDocumentData(postRef)

  const post = realtimePost || props.post

  const { user: currentUser } = useContext(UserContext)

  return (
    <main className={styles.container}>
    <Metatags title={post.title} description={post.title} />

      <section>
        <PostContent post={post} />
      </section>

      <aside className="card">
        <p>
          <strong>{post.heartCount || 0} {post.heartCount > 0 ? '🖤' : '🤍'}</strong>
        </p>

        <AuthCheck 
          fallback={
            <Link href="/enter">
              <button>🖤 Sign Up</button>
            </Link>
          }
        >
          <HeartButton postRef={postRef} />

          {currentUser?.uid === post.uid && (
            <Link href={`/admin/${post.slug}`}>
              <button className="btn-blue">Edit Post</button>
            </Link>
          )}
        </AuthCheck>
      </aside>
    </main>
  )
}