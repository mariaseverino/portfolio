import { ReactNode } from 'react';

interface SkillBadgeProps {
    children: ReactNode;
    className?: string;
}

export function SkillBadge({ children, className }: SkillBadgeProps) {
    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full bg-(--primary) text-white font-medium text-sm border-2 border-(--mini-shadow-color) shadow-[2px_2px_0px_0px_var(--mini-shadow-color)] transition-transform hover:-translate-y-1 ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 pr-1.5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
            </svg>
            {children}
        </div>
    );
}

interface ComicPanelProps {
    children: React.ReactNode;
    className?: string;
}

export function ComicPanel({ children, className }: ComicPanelProps) {
    return (
        <div
            className={`relative border-4 border-(--border-color) rounded-lg shadow-[8px_8px_0px_0px_var(--shadow-color)] overflow-hidden p-6 ${className}`}
        >
            {children}
        </div>
    );
}

export function AboutMe() {
    return (
        <section className="py-10 px-4 text-(--gray)" id="about">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
                <h1 className="text-3xl md:text-5xl font-bold playfair-display">
                    Sobre Mim
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <ComicPanel className="-rotate-1 bg-(--panel-color)">
                        <div className="text-base md:text-lg space-y-4 source-sans-3">
                            <p>
                                Olá! Eu sou Maria Rita. Sou recém-formada em
                                Ciência da Computação pela Universidade Federal
                                de Lavras (UFLA). Tenho experiência em
                                desenvolvimento backend e frontend, além de
                                atuação em infraestrutura e qualidade de
                                software.
                            </p>
                            <p>
                                Atualmente estou aprendendo sobre Next.js e
                                TailwindCSS. No meu tempo livre, eu gosto de
                                jogar videogame e ler livros e revistas em
                                quadrinhos.
                            </p>
                        </div>
                    </ComicPanel>
                    <ComicPanel className="rotate-1 bg-(--panel-color)">
                        <h3 className="text-xl font-bold mb-4 source-sans-3">
                            Tecnologias que estudo ou já trabalhei
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge>JavaScript</SkillBadge>
                            <SkillBadge>TypeScript</SkillBadge>
                            <SkillBadge>React</SkillBadge>
                            <SkillBadge>Next.js</SkillBadge>
                            <SkillBadge>Node.js</SkillBadge>
                            <SkillBadge>PHP</SkillBadge>
                            <SkillBadge>Drupal</SkillBadge>
                            <SkillBadge>SQL</SkillBadge>
                            <SkillBadge>Docker</SkillBadge>
                            <SkillBadge>Git</SkillBadge>
                            <SkillBadge>TailwindCSS</SkillBadge>
                        </div>
                    </ComicPanel>
                </div>
            </div>
        </section>
    );
}
