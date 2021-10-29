import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
import Links from '../components/Links'

export default function Home( {allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Developer @ <Link href="https://www.rolls-royce.com/"><a>Rolls-Royce</a></Link>, 
        amateur photographer, tennis player and technology enthusiast based in Berlin.
        </p>
        <p>In this site you can read my blog, see a selection of my 
         pictures and find out more about my learning objectives.
        </p>
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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Projects</h2>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Comming soon</li>
            </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Resume</h2>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>
              <Link href="Jose_Sarrion_resume_03_21_linkedin_version.pdf"><a>Download</a></Link></li>
            </ul>
        </section>
       <Links />
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