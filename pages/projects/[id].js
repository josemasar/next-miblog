import Layout from '../../components/layout'
import { getAllProjectsIds, getProjectsData } from '../../lib/projects'
import Head from 'next/head'
import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'

export default function Project({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={projectData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: projectData.contentHtml,
                    }}
                />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllProjectsIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectsData(params.id)
    return {
        props: {
            projectData,
        },
    }
}
