import { FiGithub } from 'react-icons/fi';
interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    repoUrl: string;
    liveUrl: string;
    featured?: boolean;
}

const repositorios = [
    {
        title: 'Pet Schedule Api',
        repoUrl: 'https://github.com/mariaseverino/schedule',
        description:
            "O 'Pet Schedule' é um sistema de agendamento desenvolvido com o foco em clínicas veterinárias. Ele permite que os profissionais agendem compromissos com seus clientes e gerenciem os horários disponíveis. Além disso, inclui integração com Stripe para pagamentos e funcionalidades de backend desenvolvidas com NestJS.",
        tags: [
            'NestJS',
            'TypeScript',
            'Stripe',
            'TypeORM',
            'PostgresSQL',
            'Em Desenvolvimento',
        ],
        image: '/pet-schedule.png',
        liveUrl: '#',
    },
    {
        title: 'Jobs',
        repoUrl: 'https://github.com/mariaseverino/jobs',
        description:
            'Este é um Sistema de Gestão de Clientes e Projetos desenvolvido para freelancers. O objetivo é oferecer uma plataforma acessível via assinatura, permitindo que profissionais independentes organizem seus trabalhos de forma eficiente.',
        tags: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn UI',
            'Storybook',
            'Firebase',
            'Em Desenvolvimento',
        ],
        image: '/jobs.png',
        liveUrl: '#',
    },
    {
        title: 'Verdejar',
        repoUrl: 'https://github.com/mariaseverino/plant-ecommerce',
        description:
            'Verdejar é um e-commerce de venda de plantas, sementes e produtos relacionados. Desenvolvido com React, este projeto oferece uma interface moderna e responsiva para os amantes da jardinagem.',
        tags: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn UI',
            'Storybook',
            'Em Desenvolvimento',
        ],
        image: '/verdejar.png',
        liveUrl: '#',
    },
    {
        title: 'Motiro Study System Api',
        repoUrl: 'https://github.com/motiro/motiro-study-system',
        description:
            "O 'Motiro Study System' é um sistema desenvolvido para gestão de estudos e recursos educacionais. Ele oferece funcionalidades de autenticação de usuários, além de permitir a criação e o gerenciamento de materiais de estudo. Feito em parceria com a Motiro",
        tags: [
            'Node.js',
            'TypeScript',
            'Express',
            'Mongoose',
            'MongoDB',
            'Jsonwebtoken',
            'Swagger',
            'Colaborativo',
        ],
        image: '/motiro.png',
        liveUrl: '#',
    },
    {
        title: 'Interactive Comments Section',
        repoUrl:
            'https://github.com/mariaseverino/frontend-mentor-interactive-comments-section',
        description:
            'Este projeto é uma solução para o desafio do Frontend Mentor, que consiste em criar uma seção de comentários interativos. Os usuários podem adicionar, editar, excluir e responder comentários em uma interface limpa e funcional.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        image: '/comments-section.png',
        liveUrl: 'https://interactive-comments-section-eosin.vercel.app/',
    },
];

interface ProjectCardProps {
    project: Project;
    className: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    const getColor = (tag: string) => {
        switch (tag) {
            case 'Em Desenvolvimento':
                return 'border-amber-400';
            case 'Colaborativo':
                return 'border-red-700';
            default:
                return 'border-(--primary)';
        }
    };
    return (
        <ComicPanel2
            className={`p-6 transform -rotate-1 w-full ${className} bg-(--panel-color) hover:-translate-y-1.5 transition-all duration-300`}
        >
            <div className="rounded-md mb-4 text-(--gray)">
                <div className="relative">
                    {/* <div className="opacity-0 hover:opacity-100 bg-black/50 transition-opacity duration-300 flex absolute z-10 w-full h-full items-center justify-center">
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full "
                        >
                            <img
                                src={githubIcon}
                                className="logo size-6"
                                alt="Vite logo"
                            />
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>
                        </a>
                    </div> */}
                    <img
                        src={project.image}
                        className="logo w-full"
                        alt="Vite logo"
                    />
                </div>

                <div className="source-sans-3">
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-xl font-bold py-5 hover:text-[#7e62f3] transition-colors duration-200">
                            {project.title}
                        </h3>
                    </a>

                    <p className="text-(--card-text) mb-5 text-base">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`text-sm source-sans-3 px-2 py-1 rounded border ${getColor(
                                    tag
                                )}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ComicPanel2>
    );
}

interface ComicPanelProps {
    children: React.ReactNode;
    className?: string;
}

export function ComicPanel2({ children, className }: ComicPanelProps) {
    return (
        <div
            className={`relative border-3 border-(--border-color) rounded-lg overflow-hidden p-6 ${className}`}
        >
            {children}
        </div>
    );
}

export function Projects() {
    return (
        <section className="py-10 px-4" id="projects">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
                <h1 className="text-3xl md:text-5xl font-bold playfair-display text-(--gray)">
                    Projetos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {repositorios.map((project, index) => (
                        <ProjectCard
                            project={project}
                            className={`${index === 0 ? 'md:col-span-2' : ''}`}
                        />
                    ))}
                </div>
                <div className="text-center h-15 overflow-hidden w-56">
                    <a
                        href="https://github.com/mariaseverino"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-(--primary) inline-flex items-center p-3 rounded-lg gap-3 shadow-[4px_4px_0px_0px_var(--mini-shadow-color)] overflow-hidden ease-in text-white source-sans-3 transition-transform font-semibold hover:scale-105 mt-1 hover:brightness-110"
                    >
                        <FiGithub size={20} />
                        Ver mais no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
