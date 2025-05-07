import profile from '../assets/profile.svg';
import { FiDownload, FiGrid } from 'react-icons/fi';

// interface SplitTextProps {
//     text: string;
//     delay?: number;
// }

// export function SplitText({ text, delay = 100 }: SplitTextProps) {
//     const letters = text.split('');
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         setVisible(true);
//     }, []);

//     const springs = useSprings(
//         letters.length,
//         letters.map((_, i) => ({
//             from: {
//                 opacity: 0,
//                 transform: 'translateY(20px)',
//                 display: 'inline-block', // importante: aqui dentro
//             },
//             to: visible
//                 ? {
//                       opacity: 1,
//                       transform: 'translateY(0px)',
//                       display: 'inline-block',
//                   }
//                 : {
//                       opacity: 0,
//                       transform: 'translateY(20px)',
//                       display: 'inline-block',
//                   },
//             delay: i * delay,
//             config: { easing: easings.easeOutCubic },
//         }))
//     );

//     return (
//         <p
//             style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
//             className="text-2xl lg:text-3xl xl:text-4xl font-bold text-(--primary) source-sans-3"
//         >
//             {springs.map((style, i) => (
//                 <animated.span key={i} style={style}>
//                     {letters[i] === ' ' ? '\u00A0' : letters[i]}
//                 </animated.span>
//             ))}
//         </p>
//     );
// }

export function Hero() {
    return (
        <section className="min-h-screen bg-(--background) flex items-center justify-center px-6 md:px-12 py-15 md:py-0">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left">
                    <p className="text-lg text-(--primary) mb-2 uppercase tracking-widest font-semibold source-sans-3">
                        Portfólio de
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl mb-5 text-(--gray) playfair-display">
                        Maria Rita
                    </h1>
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-(--primary) source-sans-3">
                        Desenvolvedora FullStack
                    </p>
                    <div className="mt-5 lg:mt-8 flex gap-4 sm:gap-6 items-center justify-center lg:justify-start">
                        <a
                            href="#projects"
                            rel="noopener noreferrer"
                            className="mt-8 flex items-center gap-3 bg-(--primary) text-white px-6 py-3 rounded-lg font-semibold transition-transform shadow-[4px_4px_0px_0px_var(--mini-shadow-color)] source-sans-3 hover:scale-105 hover:brightness-110 text-sm lg:text-base"
                        >
                            <FiGrid size={20} className="hidden lg:block" />
                            Ver Projetos
                        </a>

                        <a
                            href="/Curriculo_Maria_Rita.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex items-center gap-3 px-6 py-3 rounded-lg font-semibold border-2 border-(--primary) text-(--primary) bg-(--background) hover:bg-(--primary-light) hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_var(--shadow-color)] source-sans-3 text-sm lg:text-base"
                        >
                            <FiDownload size={20} className="hidden lg:block" />
                            Baixar Currículo
                        </a>
                    </div>
                </div>
                <div className="flex justify-center bg-(--background)">
                    <img
                        src={profile}
                        alt="Ilustração de Maria Rita desenvolvedora"
                        className="max-w-xs lg:max-w-sm drop-shadow-[0_8px_20px_rgba(126,98,243,0.35)]"
                    />
                </div>
            </div>
        </section>
    );
}
