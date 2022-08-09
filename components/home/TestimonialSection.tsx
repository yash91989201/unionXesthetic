import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../../sanity"
import { TestimonialType } from "../../types"

const TestimonialSection = () => {
    const [allTestimonial, setAllTestimonial] = useState<TestimonialType[]>()
    useEffect(() => {
        fetch("/api/fetchTestimonial")
            .then(res => res.json())
            .then(data => setAllTestimonial(data))
            .catch(err => { console.log(err) })
    }, [])
    return (
        <section className="px-6 sm:px-12 bg-gray-600">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">Client Testimonials</p>
                {/* testimony card */}
                <div className=" flex flex-col flex-rap md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-8 md:space-y-0  ">
                    {
                        allTestimonial?.slice(0, 3).map(testimonial => <div key={testimonial._id} className="relative w-56 h-80">
                            <Image
                                src={urlFor(testimonial.clientTestimonialImage).url()!}
                                alt={testimonial.title}
                                layout="fill"
                            />
                        </div>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/testimonial">
                        <a className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">See More</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default TestimonialSection