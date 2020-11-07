import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'

export default function Home( {allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Industrial engineer, amateur photographer, tennis player and technology enthusiast based in Berlin.
        </p>
        <p>In this site you can read my <span>blog</span>, see a selection of my 
        <Link href='/content/gallery'><a> pictures </a></Link>
        and find out more about my 
        <Link href='/content/learning_objectives'><a> learning objectives</a></Link>.
        </p>
        <ul>
          <li>
            <p>
              My LinkedIn 
              <a href="https://www.linkedin.com/in/josemanuelsarrion/"> profile</a>
            </p>
          </li>
          <li>
            <p>
              My E-commerce
              <a href="https://handfaechershop.com"> Handfächer Shop</a>
            </p>
          </li>
          <li>
            <a href="Jose_Sarrion_resume_1120.pdf">Download my resume</a>
          </li>
          <li>
            <p>Write me an 
            <a className="mailto" href="mailto:josemanuelsarrion@gmail.com"> email</a> 
            </p>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <section>
      <p>
          I built this personal page using {' '}
          <a href="https://nextjs.org/learn">Next.js </a> 
           and is deployed in {' '}
          <a href="https://vercel.com/">Vercel</a>.
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}