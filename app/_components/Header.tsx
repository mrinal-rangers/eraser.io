import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
       <Image src ='/logo-3.svg' alt='logo' width={100} height={100} />
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:text-slate-600"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header