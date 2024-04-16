/** @format */

import NavBar from "../components/NavBar";
import { poppins } from "./font";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html className={poppins.variable}>
      <head>
        <title>GreenThumb</title>
      </head>
      <body className='flex flex-col max-h-min   min-h-screenfont-semibold font-poppins bg-[#1F363D] text-[#9EC1A3] animate-fade-up animate-once animate-ease-in-out '>
        <header>
          <NavBar />
        </header>
        <main className='grow lg:px-44'>{children}</main>
        <footer className='px-2 py-8 text-center text-white lg:px-44 sm:text-left'>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-center gap-2 '>
              <div>
                <InstagramIcon />
              </div>
              <div>
                <FacebookIcon />
              </div>
              <div>
                <XIcon />
              </div>
              <div>
                <YouTubeIcon />
              </div>
            </div>
            <div className='pt-2 text-center'>
              <p className='text-sm '>
                © 2024 InventiveVeg. Lovingly planted and grown in the digital
                soil.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
