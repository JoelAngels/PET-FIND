import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-50">
            <div className='pt-16 px-10 md:px-16 lg:px-24'>
                <div className="bg-blue-600 rectangle-t-2xl ">
                    <div className="flex text-indigo-50 items-center flex-col justify-evenly lg:flex-row">
                        <a href="https://www.petfinder.com/" target='_blank' rel="noreferrer" className="mb-8 lg:mb-0 flex flex-col items-center text-center pt-1 lg:pr-4 hover:text-white">
                            {/* <img src={pathfinderLogo} alt="Petfinder Logo" className='max-w-[126px] mb-2' /> */}
                            Made in love with Petfinder
                        </a>

                        <a href="https://github.com/Darylcosm0/petflix" target='_blank' rel="noreferrer" className="mb-8 lg:mb-0 flex flex-col items-center text-center pt-1 hover:text-white">
                            {/* <img src={githubLogo} alt="GitHub Logo" className='max-w-[64px] mb-2' /> */}
                            <span>GitHub Repository</span>
                        </a>

                      <h1>
                        WE SHOULD LOVE PETS! 😎
                      </h1>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
