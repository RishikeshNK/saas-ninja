import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Container from './container'
import { Icons } from './icons'

const Hero = () => {
  return (
    <Container>
      <div className="h-full grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
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
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Say goodbye to tedious setup tasks and hello to speedy SaaS
            development, putting you on the fast track to crafting your
            one-of-a-kind software solution.
          </p>
          <div className="flex space-x-2">
            <Link href="/sign-in">
              <Button className="px-5 py-3 group">
                Get started
                <Icons.rightArrow />
              </Button>
            </Link>
            <Button variant="outline" className="px-5 py-3" asChild>
              <Link href="https://github.com/RishikeshNK/saas-ninja">
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* Use <Image /> */}
          <img
            src="https://assets.website-files.com/63f33be296d5a44ca95c18a2/63f73eef9302c3976909283b_Cube%20Illustration%20b%26w%204.webp"
            alt="cube"
          />
        </div>
      </div>
    </Container>
  )
}

export default Hero
