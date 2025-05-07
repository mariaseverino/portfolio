import { FaHeart } from 'react-icons/fa';

export function Footer() {
    return (
        <footer>
            <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center px-12 bg-(--footer-color) text-(--footer-text) text-sm ">
                <p className="mb-4 md:mb-0">
                    © {new Date().getFullYear()}.All rights reserved.
                </p>

                <div className="flex items-center">
                    <p>
                        Feito com
                        <FaHeart
                            size={14}
                            className="inline-block mx-1"
                            color="#7e62f3"
                        />
                        e codigo
                    </p>
                </div>
            </div>
        </footer>
    );
}
