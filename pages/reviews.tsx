import { GetServerSideProps } from "next";
import { sanityClient } from "../sanity"
import { ClientReviewType } from "../types"

interface PageProps {
    allReviews: ClientReviewType[]
}

const ReviewSection = ({ allReviews }: PageProps) => {

    return (
        <section className="px-6 sm:px-12">
            <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Reviews</p>
                {/* testimony card */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 place-items-center sm:place-items-start">
                    {
                        allReviews?.map(review => <iframe key={review._id}
                            className="max-w-xs w-full aspect-square"
                            src={review.reviewVideoURL}
                            allow="encrypted-media"
                        >
                        </iframe>)
                    }
                </div>
            </div>

        </section>
    )
}

export default ReviewSection


export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
                    *[_type == "clientReview"]
                `;
    const allReviews = await sanityClient.fetch(query)
    return {
        props: {
            allReviews
        }
    }
}

// flex flex-col flex-rap md:flex-row items-center
//      space-x-0 md:space-x-8 space-y-8 md:space-y-0