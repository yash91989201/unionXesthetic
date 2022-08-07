import { useEffect, useState } from "react"
import { TransformationType } from "../../types"
import { urlFor } from "../../sanity"
import Link from "next/link"
import Image from "next/image"

const TransformationSection = () => {
    const [allTransformation, setAllTransformation] = useState<TransformationType[]>()
    useEffect(() => {
        fetch("/api/fetchTransformation")
            .then(res => res.json())
            .then(data => setAllTransformation(data))
            .catch(err => { console.log(err) })
    }, [])
    return (
        <section className="px-6 sm:px-12 ">
            <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Transformation</p>
                {/* testimony card */}
                <div className="
                                mx-auto w-full max-w-6xl
                                flex flex-col  md:flex-row items-center
                                space-x-0 md:space-x-8 space-y-8 md:space-y-0
                            ">
                    {
                        allTransformation?.slice(0, 3).map(transformation => <div key={transformation._id} className="relative w-96 aspect-square">
                            <Image
                                src={urlFor(transformation.clientTransformationImage).url()!}
                                alt={transformation.title}
                                layout="fill"
                            />
                        </div>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/transformation">
                        <a className="py-3 px-6 rounded-full  text-md md:text-xl text-white font-semibold bg-amber-400 text-center hover:bg-amber-500 active:bg-amber-600 ">See More</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default TransformationSection