import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Container from './container'

const Hero = () => {
  return (
    <Container>
      <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Button
            variant="outline"
            className="px-5 py-3 rounded-full mb-4 hover:bg-inherit pointer-events-none"
          >
            Work In Progress
          </Button>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            The Ultimate SaaS Development Template
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Say goodbye to tedious setup tasks and hello to speedy SaaS
            development, putting you on the fast track to crafting your
            one-of-a-kind software solution.
          </p>
          <div className="flex space-x-2">
            <Link href="/login">
              <Button className="px-5 py-3 group">
                Get started
                <svg
                  className="w-5 h-5 ml-1 -mr-1 transition-transform transform-gpu group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </Link>
            <Button variant="outline" className="px-5 py-3">
              <Link href="https://github.com/RishikeshNK/saas-ninja">
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </Container>
  )
}

export default Hero
