import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About Page at Eric Nova webiste',
    keywords: ['eric', 'nova']
}

export default function AboutPage () {
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}