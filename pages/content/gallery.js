import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'


export default function BasicRows() {
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingLg}>
                <p>Some of my favourite pictures 2016-2020 </p>
            </section>
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
                    <a href="https://nextjs.org/docs/api-reference/next/image">NextJS 'next/image' component.</a> 
                </p>
            </section>
            <section>
            <Image
            src="/gallery/1.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/2.jpg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/3.jpg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/4.jpg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/5.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/6.jpg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/7.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/8.jpeg"
            alt="Picture of"
            width={700}
            height={900}
            Layout='responsive'
            />
            <Image
            src="/gallery/9.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/10.jpg"
            alt="Picture of"
            width={700}
            height={950}
            Layout='responsive'
            />
            <Image
            src="/gallery/11.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/12.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/13.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/14.jpeg"
            alt="Picture of"
            width={700}
            height={900}
            Layout='responsive'
            />
            <Image
            src="/gallery/15.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/16.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/17.jpeg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />
            <Image
            src="/gallery/18.jpg"
            alt="Picture of"
            width={700}
            height={500}
            Layout='responsive'
            />

            </section>
            
        </Layout>
    )
}

