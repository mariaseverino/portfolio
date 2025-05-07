import { FiGithub } from 'react-icons/fi';
import githubIcon from '../assets/github-mark.svg';
import template from '../assets/repository-open-graph-template.png';
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
        title: 'schedule',
        repoUrl: 'https://github.com/mariaseverino/schedule',
        description:
            "O 'Schedule' é um sistema de agendamento desenvolvido com o foco em clínicas veterinárias. Ele permite que os profissionais agendem compromissos com seus clientes e gerenciem os horários disponíveis. Além disso, inclui integração com Stripe para pagamentos e funcionalidades de backend desenvolvidas com NestJS.",
        tags: ['NestJS', 'TypeScript', 'Stripe', 'Prettier', 'ESLint'],
        image: 'gradient-2',
        liveUrl: '#',
    },
    {
        title: 'frontend-mentor-interactive-comments-section',
        repoUrl:
            'https://github.com/mariaseverino/frontend-mentor-interactive-comments-section',
        description:
            'Este projeto é uma solução para o desafio do Frontend Mentor, que consiste em criar uma seção de comentários interativos. Os usuários podem adicionar, editar, excluir e responder comentários em uma interface limpa e funcional.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
        image: 'gradient-2',
        liveUrl: '#',
    },
    {
        title: 'jobs',
        repoUrl: 'https://github.com/mariaseverino/jobs',
        description:
            'Este projeto é uma plataforma de listagem de empregos onde os usuários podem visualizar, filtrar e pesquisar vagas de trabalho. O layout é responsivo e minimalista, feito com Tailwind CSS. A Storybook foi usada para a documentação de componentes.',
        tags: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Shadcn UI',
            'Storybook',
            'ESLint',
        ],
        image: 'gradient-2',
        liveUrl: '#',
    },
    {
        title: 'notas',
        repoUrl: 'https://github.com/mariaseverino/notas',
        description:
            "O projeto 'Notas' é uma aplicação simples de gerenciamento de notas, onde o usuário pode adicionar, editar e excluir notas pessoais. Foi desenvolvido utilizando Angular no frontend e JSON Server para simular o backend.",
        tags: ['Angular', 'Node.js', 'JSON Server'],
        image: 'gradient-2',
        liveUrl: '#',
    },
    {
        title: 'motiro-study-system',
        repoUrl: 'https://github.com/motiro/motiro-study-system',
        description:
            "O 'Motiro Study System' é um sistema desenvolvido para gestão de estudos e recursos educacionais. Ele oferece funcionalidades de autenticação de usuários, além de permitir a criação e o gerenciamento de materiais de estudo.",
        tags: [
            'Node.js',
            'TypeScript',
            'Express',
            'Mongoose',
            'Jsonwebtoken',
            'Swagger',
        ],
        image: 'gradient-2',
        liveUrl: '#',
    },
];

interface ProjectCardProps {
    project: Project;
    className: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <ComicPanel2
            className={`p-6 transform -rotate-1 w-full ${className} bg-(--panel-color)`}
        >
            <div className="rounded-md mb-4 text-(--gray)">
                <div className="relative">
                    <div className="opacity-0 hover:opacity-100 bg-black/50 transition-opacity duration-300 flex absolute z-10 w-full h-full items-center justify-center">
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
                    </div>
                    <img
                        src={template}
                        className="logo w-full"
                        alt="Vite logo"
                    />
                </div>

                <div className="source-sans-3">
                    <h3 className="text-xl font-bold py-5">{project.title}</h3>

                    <p className="text-(--card-text) mb-5 text-base">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-sm source-sans-3 px-2 py-1 rounded border border-(--primary)"
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
