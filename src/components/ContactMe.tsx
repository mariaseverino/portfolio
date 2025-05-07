import { MdOutlineMail } from 'react-icons/md';
import { ComicPanel } from './AboutMe';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export function ContactMe() {
    return (
        <section className="max-w-2xl w-full mx-auto pt-10 pb-15 px-4 text-(--gray)">
            <div>
                <ComicPanel className="max-w-2xl mx-auto p-8 transform rotate-1 bg-(--panel-color)">
                    <div className="text-center">
                        <p className="text-xl source-sans-3 mb-8 font-bold">
                            Entre em contato
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                            <a
                                href="mailto:mariarsseverino@gmail.com"
                                className="text-sm source-sans-3 px-2.5 py-1 rounded border flex gap-1 items-center font-medium hover:bg-(--primary-light) hover:text-(--gray) transition-colors duration-200"
                            >
                                <MdOutlineMail size={16} />
                                mariarsseverino@gmail.com
                            </a>

                            <a
                                href="https://github.com/mariaseverino"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm source-sans-3  px-2.5 py-1 rounded border  flex gap-1 items-center font-medium hover:bg-(--primary-light) hover:text-(--gray) transition-colors duration-200">
                                    <FiGithub size={14} />
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mariasseverino/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm source-sans-3  px-2.5 py-1 rounded border  flex gap-1 items-center font-medium hover:bg-(--primary-light) hover:text-(--gray) transition-colors duration-200">
                                    <FaLinkedinIn size={14} />
                                    Linkedin
                                </span>
                            </a>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm source-sans-3  px-3 py-2 rounded border  flex gap-1 items-center font-medium hover:bg-(--primary-light) hover:text-(--gray) transition-colors duration-200">
                                    Envie uma mensagem
                                    <FaTelegramPlane />
                                </span>
                            </a>
                        </div>
                    </div>
                </ComicPanel>
            </div>
        </section>
    );
}
