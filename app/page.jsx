/** @format */

export default function LandingPage() {
  return (
    <>
      {/*  DESCRIPTION SECTION */}
      <div className='flex flex-row px-2 py-8 lg:text-2xl lg:px-60 lg:py-20'>
        <div className='flex-auto w-full text-sm lg:w-1/2 '>
          <div className='lg:items-center lg:flex lg:flex-col'>
            <h2 className=' lg:text-2xl'>Unearth the Beauty of Agriculture!</h2>
            <img src='/images/pencil.png' alt='pencil' className='lg:w-40' />
          </div>
        </div>
        <div className='flex-auto w-full lg:w-1/2'>
          <p className='text-sm text-left text-white font-extralight lg:text-xl'>
            Get ready because we’re plowing down the information super-highway
            and sowing seeds of knowledge about the incredible world of
            agriculture. It’s not your grandma’s farm anymore! Hold onto your
            pitchforks because your perception of agriculture is about to be
            harvested.
          </p>
        </div>
      </div>
      {/*  */}
      <div className='flex justify-center px-2 py-8 lg:py-20'>
        <img src='/images/scr-2.png' alt='' />
      </div>
      {/*  */}
      <div className='flex flex-col gap-4 px-2 py-8 text-center text-white lg:flex-row lg:justify-center lg:py-20'>
        <div className='rounded-md max-screen-max bg-[#28454E] p-2 lg:p-20'>
          <h3 className='text-sm font-bold lg:text-xl'>Bountiful Harvest</h3>
          <p className='text-sm font-light'>Increased yield by 40%</p>
        </div>
        <div className='max-screen-max bg-[#28454E] p-2 rounded-md lg:p-20'>
          <h3 className='text-sm font-bold lg:text-xl'>
            Sustainable Practices
          </h3>
          <p className='text-sm font-light'>Reduced water usage 30%</p>
        </div>
        <div className='max-screen-max bg-[#28454E] p-2 rounded-md lg:p-20'>
          <h3 className='text-sm font-bold lg:text-xl'>Organic Pioneering</h3>
          <p className='text-sm font-light'>Pesticide free for 5 years</p>
        </div>
      </div>
      {/*  */}
      <div className='flex justify-center px-2 py-8 lg:py-20'>
        <img src='/images/scr-3.png' alt='' />
      </div>

      {/*  */}
      <div className='flex flex-col items-center p-2 lg:py-20'>
        <div className='flex flex-row justify-center lg:items-center lg:w-1/2 '>
          <div className=' max-w-max basis-1/2'>
            <h2 className='font-bold lg:text-2xl'>Know Your Farmers</h2>
            <p className='text-sm font-light text-white lg:text-lg'>
              Meet the unsung heroes feeding our nation, one crop at a time.
              From wheat warriors to corn crusaders, we bring you
              behind-the-scenes to where the magic of agriculture happens.
            </p>
          </div>
          <div className='max-w-max basis-1/2'>
            <img src='/images/scr-4.png' alt='' className='max-w-max' />
          </div>
        </div>
        <div className='flex flex-row justify-center gap-2 py-8 basis-1/2 lg:w-1/2 '>
          <div className='max-w-max basis-1/2 lg:pr-4'>
            <img
              src='/images/mountain.png'
              alt='mountain'
              className='rounded-md lg:w-44'
            />
          </div>
          <div className='max-w-max basis-1/2'>
            <h2 className='font-bold lg:text-2xl'>Glimpses of the Green</h2>
            <p className='text-sm font-light text-white lg:text-lg'>
              Step into the wellies of farmers with these candid snapshots from
              the field, where man and nature become one.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col px-2 py-8 font-normal lg:px-56 md:px-4 gap-y-2 lg:py-20'>
        <div className='flex flex-row items-center'>
          <div className='basis-1/4'>2022</div>
          <div className='text-white basis-1/2'>Farmers Market Craze</div>
          <div className='flex justify-end basis-1/4'>
            <img src='/images/arrow-2.png' alt='' className='w-10' />
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='basis-1/4'>2023</div>
          <div className='text-white basis-1/2'>The Organic Revolution</div>
          <div className='flex justify-end basis-1/4'>
            <img src='/images/arrow-2.png' alt='' className='w-10' />
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='basis-1/4'>2024</div>
          <div className='text-white basis-1/2'>Vertical Farms Rise</div>
          <div className='flex justify-end basis-1/4'>
            <img src='/images/arrow-2.png' alt='' className='w-10' />
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='basis-1/4'>2024</div>
          <div className='text-white basis-1/2'>
            Precision Agriculture Breakthroughs
          </div>
          <div className='flex justify-end basis-1/4'>
            <img src='/images/arrow-2.png' alt='' className='w-10' />
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='basis-1/4'>2024</div>
          <div className='text-white basis-1/2'>
            Farm-to-Table: A Renewed Appreciation
          </div>
          <div className='flex justify-end basis-1/4'>
            <img src='/images/arrow-2.png' alt='' className='w-10' />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col justify-center px-2 py-8 text-center lg:py-20'>
        <div className='flex justify-center'>
          <img src='/images/scr-5.png' alt='' />
        </div>
        <div className='pt-2'>
          <h1 className='font-bold'>Join the Agriculture Revolution!</h1>
        </div>
        <div className='flex flex-row flex-wrap gap-2 pt-2 lg:justify-center'>
          <div className='w-full lg:w-auto '>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full'>
              Sign Up Now!
            </button>
          </div>
          <div className='w-full lg:w-auto'>
            <button className='text-[#1F363D] bg-[#9EC1A3] hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
