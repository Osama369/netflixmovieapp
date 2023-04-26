import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '../contact/contact.module.css'
import ContactForm from '../components/ContactForm'

const contact = () => {
    // pages  me  components ko render karna ha  
  return (
   
      <>
          <div className={styles.container}>
          <h1>
                    contact Us
          </h1>
          
               <ContactCard/>


          <section  className={styles.contact_section}>
                   
                   <h2>
                       we love to hear  <span>
                        from you
                       </span>
                   </h2>

                   <ContactForm/>

          </section>


          </div>
      </>
  )
}

export default contact
