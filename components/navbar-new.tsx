"use client"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Github, Dribbble, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DaraLogo } from "./dara-logo"

export function NavbarNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header>
      <div className="absolute top-2 right-0 left-0 z-40 pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex items-center justify-between">
              <a aria-label="Home" href="/" className="group/logo">
                <DaraLogo />
              </a>
              <div className="flex items-center gap-x-8">
                <a
                  className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                  href="/contact"
                >
                  <span className="relative top-px">Contact us</span>
                </a>
                <button
                  type="button"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu-overlay"
                  className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
                  aria-label="Toggle navigation"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700" />
                  ) : (
                    <Menu className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={cn(
          "fixed inset-0 z-[999] bg-neutral-950 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="relative h-full overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 z-50 p-2 rounded-full transition hover:bg-neutral-800"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6 fill-white" />
          </button>

          <div className="pt-14 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
                  <div className="even:mt-px sm:bg-neutral-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                          <a
                            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                            href="/portfolio"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Portfolio
                            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                          </a>
                          <a
                            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            About Us
                            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="even:mt-px sm:bg-neutral-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                          <a
                            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Services
                            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                          </a>
                          <a
                            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                            href="/blog"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Blog
                            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                      <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                        <div>
                          <h2 className="font-display text-base font-semibold text-white">Our offices</h2>
                          <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <li>
                              <address className="text-sm not-italic text-neutral-300">
                                <strong className="text-white">New York</strong>
                                <br />1 World Trade Center
                                <br />
                                New York, NY 10007
                              </address>
                            </li>
                            <li>
                              <address className="text-sm not-italic text-neutral-300">
                                <strong className="text-white">San Francisco</strong>
                                <br />1 Market Street
                                <br />
                                San Francisco, CA 94105
                              </address>
                            </li>
                          </ul>
                        </div>
                        <div className="sm:border-l sm:border-transparent sm:pl-16">
                          <h2 className="font-display text-base font-semibold text-white">Follow us</h2>
                          <ul role="list" className="flex gap-x-10 text-white mt-6">
                            <li>
                              <a
                                aria-label="Facebook"
                                className="transition hover:text-neutral-200"
                                href="https://facebook.com"
                              >
                                <Facebook className="h-6 w-6 fill-current" />
                              </a>
                            </li>
                            <li>
                              <a
                                aria-label="Instagram"
                                className="transition hover:text-neutral-200"
                                href="https://instagram.com"
                              >
                                <Instagram className="h-6 w-6 fill-current" />
                              </a>
                            </li>
                            <li>
                              <a
                                aria-label="GitHub"
                                className="transition hover:text-neutral-200"
                                href="https://github.com"
                              >
                                <Github className="h-6 w-6 fill-current" />
                              </a>
                            </li>
                            <li>
                              <a
                                aria-label="Dribbble"
                                className="transition hover:text-neutral-200"
                                href="https://dribbble.com"
                              >
                                <Dribbble className="h-6 w-6 fill-current" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
