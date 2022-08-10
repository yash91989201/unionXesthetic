import Link from "next/link"
import Image from "next/image"

const AboutMe = () => {
  return (
    <section className="px-6 sm:px-12">
      <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-10 sm:space-y-20">
        <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">About Me</h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-8">
          <div className="relative max-w-sm w-56  sm:w-full md:w-2/5  h-[320px] sm:h-[480px] ">
            <Image
              src="/assets/images/aboutme_img.jpg"
              alt="about me img"
              layout="fill"
            />
          </div>
          <div className=" max-w-xl md:px-8  flex flex-col space-y-4 md:space-y-6 ">
            <h3 className="text-[clamp(24px,8vw,56px)] font-semibold italic text-amber-400">Hi, I am Amaan</h3>
            {/* paragraph text */}
            <p className=" text-[#666666] text-base font-medium leading-relaxed not-italic ">
              I&apos;m a certified nutrition consultant, a fitness expert, and a personal trainer.
              I have a training experience of 4 years. I&apos;ve trained over 100+ clients online.
              My goal is to help people establish sustainable solutions for long-term health, confidence,
              and happiness by cutting through the hype in the health &amp; fitness business.
              My ideal world is one in which loving and caring for oneself on a daily basis is ingrained in everyday life.
            </p>
            <Link href="/mycertificates">
              <a className="py-2 px-4 md:px-6 self-start rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">My Certificates</a>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutMe