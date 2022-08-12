import Link from "next/link"
import Image from "next/image"
import { NextSeo } from "next-seo";
import { sanityClient, urlFor } from "../../sanity"
import { GetServerSideProps } from "next";
import { PostType } from "../../types";

interface PageProps {
    allPosts: PostType[]
}

const index = ({ allPosts }: PageProps) => {
    return (
        <>
            <NextSeo
                title="Union Xesthetic - Blogs"
                description="Get all the information related to fitness in one place."
            />
            {/* <HeroSection /> */}
            <section className="px-6 sm:px-12">
                <div className="py-8 sm:py-16 space-y-8 sm:space-y-20">
                    <h1 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">Blogs</h1>
                    <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]  sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12 place-items-center md:place-items-start">
                        {
                            allPosts.length == 0 ?
                                <p>No blog posts to show <br /> visit later.</p> :
                                allPosts.map(post => (
                                    <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                                        <div className='max-w-sm w-full mx-auto  place-self-start  border-2 rounded-xl  overflow-hidden group cursor-pointer'>
                                            <div
                                                className="
                                                        relative
                                                        w-full aspect-video object-cover 
                                                        group-hover:scale-105
                                                        transition-transform duration-200 ease-in-out
                                            ">
                                                <Image
                                                    src={urlFor(post.mainImage).url()!}
                                                    alt="post image"
                                                    layout="fill"
                                                />
                                            </div>
                                            <div className='flex flex-col  p-4 bg-gray-50'>
                                                <p className='text-md sm:text-lg font-bold  '>{post.title}</p>
                                                <p className="text-sm sm:text-md  space-y-60">{post.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
    *[_type == "post"]{
        _id,
        title,
        author ->{
          name,
          image
         },
         description,
         mainImage,
         slug
        }
        `;
    const allPosts = await sanityClient.fetch(query)
    return {
        props: {
            allPosts
        }
    }
}