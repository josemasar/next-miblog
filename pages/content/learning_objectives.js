import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Learning() {
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingLg}>
                <p>Learning objectives</p>
            </section>
            <section>
                <p>
                    <span>End of 2020 and Q1 2021:</span> 
                    <ul>
                        <li>Improve understanding and use of React Hooks</li>
                        <li>Build another NextJS app e.g. consuming an API for stocks</li>
                        <li>Complete Azure Cloud Admin training in Microsoft Enterprise Skills</li>
                        <li>Finish Agile Methodology course certification in edX</li>
                    </ul>
                    <span>Q2 2021 onwards:</span>
                    <br/>
                    Thinking...
                </p>
            </section>
        </Layout>
    )
}