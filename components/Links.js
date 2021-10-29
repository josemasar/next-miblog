import utilStyles from '../styles/utils.module.css'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaShopify } from 'react-icons/fa'
import Link from 'next/link'

export default function Links(){
    return(
       <>
        <section className={`${utilStyles.footerLinks}`}>
            <ul>
              <li><Link href='https://github.com/josemasar'><BsGithub size={30} /></Link></li>
              <li><Link href='https://twitter.com/joeSarrion'><BsTwitter size={30} /></Link></li>
              <li><Link href='https://www.linkedin.com/in/josemanuelsarrion/'><BsLinkedin size={30} /></Link></li>
              <li><Link href='https://handfaechershop.com'><FaShopify size={30} /></Link></li>
            </ul>
        </section>
     </>
    )
}