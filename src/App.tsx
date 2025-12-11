import avatar from './assets/avatar.svg';
import './App.css';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { Badge } from './components/ui/badge';

export default function App() {
    return (
        // <div className="bg-blue-600 flex flex-col">
        // <div className="bg-[#1F1B1A] w-screen flex flex-col">
        <div className="bg-[#171821] flex flex-col">
            <section className="h-screen flex items-center justify-center ">
                <div className="flex w-5xl justify-between">
                    <div className="flex gap-14 items-center">
                        {/* contatos */}
                        <div className="flex flex-col gap-5">
                            <a
                                className="rounded-full bg-white size-9 border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                href="https://www.linkedin.com/in/mariasseverino/"
                                target="_blank"
                            >
                                <Linkedin />
                            </a>
                            <a
                                className="rounded-full bg-white size-9 border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                href="https://www.linkedin.com/in/mariasseverino/"
                                target="_blank"
                            >
                                <Github />
                            </a>
                        </div>
                        <div className="flex flex-col text-[#94a1b2]">
                            <p className="text-2xl">Olá!</p>
                            <h1 className="text-[#fffffe]">
                                Eu sou{' '}
                                <span className="font-bold">Maria Rita</span>
                            </h1>
                            <p className="text-2xl">Desenvolvedora FullStack</p>
                            <div className="mt-8 flex gap-5">
                                <Button
                                    variant="outline"
                                    className="bg-amber-500 border-amber-500 hover:bg-amber-500/80 text-[#171821]"
                                >
                                    Ver Projetos
                                </Button>
                                <a
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline text-amber-500"
                                    href="https://www.linkedin.com/in/mariasseverino/"
                                    target="_self"
                                >
                                    Baixar Curriculo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={avatar} alt="" className="size-96" />
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center pt-20 pb-60">
                <div className="grid grid-cols-2 w-5xl justify-between">
                    <div className="">
                        <img src={avatar} alt="" className="size-96" />
                    </div>
                    <div className="flex flex-col gap-2 text-[#94a1b2]">
                        <h1 className="text-[#fffffe] mb-5">Sobre mim</h1>
                        <p className="text-[#94a1b2]">
                            Olá! Eu sou Maria Rita, desenvolvedora formada em
                            Ciência da Computação pela UFLA, com experiência
                            prática em frontend, backend, infraestrutura e
                            qualidade de software.
                        </p>
                        <p>
                            Já atuei em projetos reais em ambientes
                            profissionais, passando pelo desenvolvimento de
                            interfaces, criação de APIs e suporte a plataformas
                            de grande impacto. No dia a dia, trabalho
                            principalmente com React no frontend e Node.js no
                            backend, além de ter experiência com PHP, Drupal e
                            Docker.
                        </p>
                        <p>
                            Atualmente, estou aprofundando meus conhecimentos no
                            ecossistema fullstack, estudando TanStack Query e
                            TanStack Router para construir aplicações mais
                            performáticas, escaláveis e bem estruturadas. Sou
                            movida por curiosidade, aprendizado contínuo e pela
                            vontade de transformar ideias em soluções
                            eficientes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-10 min-h-screen">
                <h1 className="text-[#fffffe]">Experiencias</h1>

                <div className="w-4xl flex h-full">
                    <Timeline
                        data={[
                            {
                                data: '2024',
                                company: 'Compass UOL',
                                title: 'Programadora Trainee',
                                content: [
                                    {
                                        title: 'Projeto MBV (Muito Bem-Vindo)',
                                        description:
                                            'Colaborei no redesign e na evolução da plataforma melhorando a experiência do usuário e a consistência dos componentes ao implementar ajustes, correções e melhorias técnicas em Drupal.',
                                    },
                                    {
                                        title: 'Projeto C+ (Cuidar Mais)',
                                        description:
                                            'Desenvolvi novas funcionalidades e módulos customizados aumentando a performance e escalabilidade da plataforma ao trabalhar com Drupal, refatorar código legado e implementar melhorias estruturais.',
                                    },
                                ],
                            },
                            {
                                data: '2023',
                                company: 'Compass UOL',
                                title: 'Desenvolvedora Backend Estagiária',
                                content: [
                                    {
                                        description:
                                            'Contribuí como estagiária no desenvolvimento de funcionalidades do sistema. Implementei endpoints e regras de negócio em Node.js dentro de um ambiente ágil.',
                                    },
                                ],
                            },

                            {
                                data: '2022',
                                company: 'Comp Junior',
                                content: [
                                    {
                                        title: 'Desenvolvimento Fullstack',
                                        description:
                                            'Liderei a evolução do sistema interno da empresa aumentando a  usabilidade ao implementar novas funcionalidades, corrigir bugs e refatorar código usando React e Node.js',
                                    },
                                    {
                                        title: 'Infraestrutura e Deploy',
                                        description:
                                            'Realizei deploys de aplicações de clientes em servidores HostGator reduzindo falhas e garantindo estabilidade por meio da configuração de ambientes, uso de Docker e suporte técnico a parceiros.',
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </section>

            <section className="flex flex-col items-center h-screen gap-10">
                <h1 className="text-[#fffffe]">Últimos Projetos.</h1>
                <div className="w-5xl grid grid-cols-2 gap-8">
                    {[
                        {
                            title: 'Sistema de Monitoramento Climático',
                            description:
                                'Sistema completo de monitoramento climático composto por múltiplos serviços independentes, integrados por fila de mensagens e exibidos em um dashboard moderno e responsivo. A solução coleta, processa e exibe dados climáticos em tempo real, além de gerar insights automáticos por IA.',
                            tags: [
                                'NestJS',
                                'Node',
                                'React',
                                'Zod',
                                'Groq',
                                'Typescript',
                                'Python',
                                'Go',
                                'TailwindCSS',
                                'MongoDB',
                                'Mongoose',
                                'Docker',
                            ],
                            link: 'https://github.com/mariaseverino/sistema-monitoramento-climatico',
                            img: '',
                        },
                        {
                            title: 'Sistema de Feedback Entre Colegas',
                            description:
                                'Aplicação web que facilita o envio e recebimento de feedbacks entre colegas de trabalho, permitindo mensagens anônimas ou identificadas. O sistema organiza feedbacks recebidos e enviados, oferecendo uma experiência simples, direta e funcional.',
                            tags: [
                                'React',
                                'Node',
                                'Fastify',
                                'Typescript',
                                'Vite',
                                'Prisma',
                                'PostgresSQl',
                                'TailwindCSS',
                                'Docker',
                            ],
                            link: '',
                            img: '',
                        },
                    ].map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            className="rounded-[22px] p-4 sm:p-10 bg-[#242629] dark:bg-zinc-900 hover:shadow-md"
                        >
                            <img
                                src={`/jordans.webp`}
                                alt="jordans"
                                height="200"
                                width="200"
                                className="object-contain"
                            />
                            <p className="text-base sm:text-xl text-[#fffffe] mt-4 mb-2">
                                {item.title}
                            </p>

                            <p className="text-sm text-[#94a1b2] mb-3">
                                {item.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        className="bg-amber-500/20"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

interface TimelineProps {
    data: string;
    company: string;
    title?: string;
    content: {
        title?: string;
        description: string;
    }[];
}
function Timeline({ data }: { data: TimelineProps[] }) {
    return (
        <div className="h-full flex relative">
            <Separator
                orientation="vertical"
                className="absolute left-[110px]"
            />
            <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                    <div
                        className={`flex items-center gap-5 text-[#fffffe]`}
                        key={index}
                    >
                        <span className="text-lg min-w-[90px]">
                            {item.data}
                        </span>
                        <div className="relative h-full">
                            <div className="size-2.5 bg-amber-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>
                            {/* <Separator
                            orientation="vertical"
                            className="flex-1 min-h-36"
                        /> */}
                            {/* <div className="bg-amber-600 w-0.5 flex-1 grow h-full ">
                            g
                        </div> */}
                        </div>
                        <div className="flex flex-col gap-2 bg-[#242629] p-5 rounded-md">
                            <h3 className="font-bold text-xl">
                                {item.company}
                            </h3>
                            {item.title && (
                                <p className="text-[#94a1b2]">{item.title}</p>
                            )}

                            {item.content.map((i) => (
                                <div key={i.description}>
                                    {i.title && (
                                        <div className="flex items-center gap-2">
                                            <div className="size-2.5 bg-amber-500 rounded-full"></div>
                                            <p className="text-[#94a1b2]">
                                                {i.title}
                                            </p>
                                        </div>
                                    )}
                                    <p>{i.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
