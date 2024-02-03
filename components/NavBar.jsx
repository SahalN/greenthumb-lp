/** @format */

export default function NavBar() {
  return (
    <nav className='flex flex-col p-4 text-[#1F363D] bg-white py-28'>
      <h1 className='mb-4 text-4xl font-extrabold text-center'>GREENTHUMB</h1>
      <ul className='flex flex-row justify-center gap-4 '>
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
