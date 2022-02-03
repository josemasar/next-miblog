import utilStyles from '../styles/utils.module.css'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaShopify } from 'react-icons/fa'
import Link from 'next/link'

export default function Links() {
    return (
        <>
            <section className={`${utilStyles.footerLinks}`}>
                <ul>
                    <li>
                        <Link href="https://github.com/josemasar" passHref>
                            <BsGithub size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/joeSarrion" passHref>
                            <BsTwitter size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/josemanuelsarrion/"
                            passHref
                        >
                            <BsLinkedin size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://handfaechershop.com" passHref>
                            <FaShopify size={30} />
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
