import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
    return (
        <footer className="flex flex-col gap-1.5 w-full max-w-7xl mx-auto bg-[var(--primary)] text-white pt-2 px-3">
            <div>
                <h2 className="font-bold text-x text-center mb-1">Contato:</h2>
                <div className="flex flex-col items-center gap-1.5 md:flex-row md:justify-center">
                    <div className="flex items-center gap-1">
                        <FaWhatsapp size={16} className="opacity-80" />
                        <a
                            href="https://wa.me/5516991376210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline opacity-80 text-[13px]"
                        >
                            (16) 99137-6210
                        </a>
                    </div>

                    <div className="flex items-center gap-1">
                        <MdOutlineEmail size={16} className="opacity-80" />
                        <a
                            href="mailto:arthivia.tech@gmail.com"
                            className="text-white hover:underline opacity-80 text-[13px]"
                        >
                            arthivia.tech@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaInstagram size={16} className="opacity-80" />
                        <a
                            href="https://instagram.com/arthivia.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline opacity-80 text-[13px]"
                        >
                            arthivia.tech
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-xs text-center opacity-80">
                © {new Date().getFullYear()} Arthivia. Todos os direitos reservados.
            </p>
        </footer>
    );
}

