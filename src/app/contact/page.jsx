import ContactForm from '@/components/contactForm'
import React from 'react'

export const metadata = {
    title: "Portfolio | Usman Shouket",
    description: "View Usman Shouket — a passionate MERN stack web developer and digital marketer.",
      robots: {
    index: true,
    follow: true,
  }
};


const Page = () => {
    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default Page