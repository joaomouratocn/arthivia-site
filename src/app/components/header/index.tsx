import Image from "next/image";
import logo from "@/assets/logo-text.png";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export function Header() {
  return (
    <header className="w-full bg-[var(--primary)] flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/">
        <Image
          src={logo}
          alt="Arthivia logo"
          quality={100}
          width={120}
          height={70}
        />
      </Link>

      <div className="flex gap-5 px-5">
        <a
          href="#services"
          className={`${jetBrainsMono.className} text-white cursor-pointer text-[14px] hover:text-green-200 md:text-[16px]`}
        >
          Serviços
        </a>
        <a
          href="#portfolio"
          className={`${jetBrainsMono.className} text-white cursor-pointer text-[14px] hover:text-green-200 md:text-[16px]`}
        >
          Portfólio
        </a>
        <a
          href="#contact"
          className={`${jetBrainsMono.className} text-white cursor-pointer text-[14px] hover:text-green-200 md:text-[16px]`}
        >
          Contato
        </a>
      </div>
    </header>
  );
}
