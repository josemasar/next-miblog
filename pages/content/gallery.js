import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

import Gallery from 'react-photo-gallery'
import { photos } from '../../components/photos' 

export default function BasicRows() {
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingLg}>
                <p>Some of my favourite pictures</p>
            </section>
            <Gallery photos={photos} />
            <section>
                <p>
                    <span>Gear:</span> 
                    <ul>
                        <li>Cameras: Fujifilm XT-1 & XT-3</li>
                        <li>Lens: Fujinon 18-55 2.8-4</li>
                    </ul>
                </p>
                <br/>
                <p>
                    I built this gallery page using {' '}
                    <a href="https://neptunian.github.io/react-photo-gallery/">React Photo Gallery </a> 
                </p>
            </section>
        </Layout>
    )
}

