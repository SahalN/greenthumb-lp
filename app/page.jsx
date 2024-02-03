/** @format */

export default function LandingPage() {
  return (
    <>
      {/*  DESCRIPTION SECTION */}
      <div className='flex flex-row p-2 '>
        <div className='flex-auto w-full text-sm'>
          <h2>Unearth the Beauty of Agriculture!</h2>
        </div>
        <div className='flex-auto w-full '>
          <p className='text-sm text-left font-extralight '>
            Get ready because we’re plowing down the information super-highway
            and sowing seeds of knowledge about the incredible world of
            agriculture. It’s not your grandma’s farm anymore! Hold onto your
            pitchforks because your perception of agriculture is about to be
            harvested.
          </p>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-4 px-2 py-8 text-center'>
        <div className='max-screen-max bg-[#28454E] p-2'>
          <h3 className='text-sm font-bold'>Bountiful Harvest</h3>
          <p className='text-sm font-light'>Increased yield by 40%</p>
        </div>
        <div className='max-screen-max bg-[#28454E] p-2'>
          <h3 className='text-sm font-bold'>Sustainable Practices</h3>
          <p className='text-sm font-light'>Reduced water usage 30%</p>
        </div>
        <div className='max-screen-max bg-[#28454E] p-2'>
          <h3 className='text-sm font-bold'>Organic Pioneering</h3>
          <p className='text-sm font-light'>Pesticide free for 5 years</p>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col p-2'>
        <div className='flex flex-row justify-center '>
          <div className='max-w-max'>
            <h2>Know Your Farmers</h2>
            <p className='text-sm font-light'>
              Meet the unsung heroes feeding our nation, one crop at a time.
              From wheat warriors to corn crusaders, we bring you
              behind-the-scenes to where the magic of agriculture happens.
            </p>
          </div>
          <div className='max-w-max'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='flex flex-row justify-center py-8'>
          <div className='max-w-max'>
            <h2>Glimpses of the Green</h2>
            <p className='text-sm font-light'>
              Step into the wellies of farmers with these candid snapshots from
              the field, where man and nature become one.
            </p>
          </div>

          <div className='max-w-max'>
            <img src='' alt='' />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col px-2 py-8 font-normal '>
        <div className='flex flex-row '>
          <div className='basis-1/4'>2022</div>
          <div className='basis-1/2'>Farmers Market Craze</div>
          <div className='flex justify-end basis-1/4'>img</div>
        </div>
        <div className='flex flex-row '>
          <div className='basis-1/4'>2023</div>
          <div className='basis-1/2'>The Organic Revolution</div>
          <div className='flex justify-end basis-1/4'>img</div>
        </div>
        <div className='flex flex-row '>
          <div className='basis-1/4'>2024</div>
          <div className='basis-1/2'>Vertical Farms Rise</div>
          <div className='flex justify-end basis-1/4'>img</div>
        </div>
        <div className='flex flex-row '>
          <div className='basis-1/4'>2024</div>
          <div className='basis-1/2'>Precision Agriculture Breakthroughs</div>
          <div className='flex justify-end basis-1/4'>img</div>
        </div>
        <div className='flex flex-row '>
          <div className='basis-1/4'>2024</div>
          <div className='basis-1/2'>Farm-to-Table: A Renewed Appreciation</div>
          <div className='flex justify-end basis-1/4'>img</div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col justify-center px-2 py-8 text-center'>
        <div>img</div>
        <div className='pt-2'>
          <h1>Join the Agriculture Revolution!</h1>
        </div>
        <div className='flex flex-row justify-center gap-2 pt-2'>
          <div>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
              Sign Up Now!
            </button>
          </div>
          <div>
            <button className='text-[#1F363D] bg-[#9EC1A3] hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
