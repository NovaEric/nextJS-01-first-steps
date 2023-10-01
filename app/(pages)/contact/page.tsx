import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page at Eric Nova webiste',
    keywords: ['eric', 'nova']
}

export default function ContactPage () {
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}