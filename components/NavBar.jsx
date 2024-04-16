/** @format */

export default function NavBar() {
  return (
    <nav className='flex flex-col lg:px-44 p-4 text-[#1F363D] bg-white py-28 bg-no-repeat bg-cover bg-[url("/images/header-scr.png")] bg-center '>
      <h1 className='mb-4 text-4xl font-extrabold text-center lg:text-8xl'>
        GREENTHUMB
      </h1>
      <ul className='flex flex-row justify-center gap-4 lg:text-2xl'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
