import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
        <nav className="flex flex-col gap-6">
            <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
            <Image 
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcastr</h1>
            </Link>

            {[
                {
                route: '/profile',
                label: 'Profile',
                imgUrl: '/icons/microphone.svg'
                },
                {
                route: '/home',
                label: 'Home',
                imgUrl: '/icons/home.svg'
                }
            ].map(({route, label}) => {
                    return <Link href={route}>
                        {label}
                    </Link>
                })}
        </nav>
    </section>
  )
}

export default LeftSidebar