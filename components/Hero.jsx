import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownLine,
} from 'react-icons/ri';

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/*text */}
                <div>
                    <div>Web Developer</div>
                    <h1>Hello, my name is Rodrigo Pereira</h1>
                    <p>Brief descripition  with insights intro myself, my vocation journey, and what I engage im professionally </p>
                </div>
                {/*image */}
                <div>Image</div>
            </div>
            {/*icon */}
            <div className="hidden md:flex absolute  left-2/4 botton-44 xl:botton-12 animate-bounce">
                <RiArrowDownLine className="text-3xl text-primary"/>
            </div>
        </div>
     </section>
  )
};

export default Hero