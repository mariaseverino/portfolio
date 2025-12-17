import avatar from '@/assets/avatar.svg';
import './App.css';
import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function App() {
    return (
        <div className="bg-[#171821] flex flex-col">
            {/* hero */}
            <section className="h-screen flex items-center justify-center">
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
                                href="https://github.com/mariaseverino"
                                target="_blank"
                            >
                                <Github />
                            </a>
                        </div>
                        <div className="flex flex-col text-[#94a1b2] gap-1">
                            <p className="text-2xl">Olá!</p>
                            <h1 className="text-[#fffffe] text-5xl">
                                Eu sou{' '}
                                <span className="font-bold">Maria Rita</span>
                            </h1>
                            <p className="text-2xl">Desenvolvedora FullStack</p>
                            <div className="mt-8 flex gap-5">
                                {/* <Button
                                    variant="outline"
                                    className="bg-amber-500 border-amber-500 hover:bg-amber-500/80 text-[#171821]"
                                >
                                    Ver Projetos
                                </Button> */}
                                <a
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline text-amber-500 text-lg"
                                    href="/Curriculo_Maria_Rita_Severino.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
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

            {/* sobre mim */}
            <section className="flex items-center justify-center pb-40">
                <div className="flex flex-col gap-2 text-[#94a1b2] w-5xl">
                    <h1 className="text-[#fffffe] mb-5 text-center text-3xl">
                        Sobre mim
                    </h1>
                    <p className="text-[#94a1b2]">
                        Olá! Eu sou Maria Rita, desenvolvedora formada em
                        Ciência da Computação pela UFLA, com experiência em
                        frontend, backend, infraestrutura e qualidade de
                        software.
                    </p>
                    <p>
                        Já atuei em projetos reais em ambientes profissionais,
                        trabalhando no desenvolvimento de interfaces, criação de
                        APIs e suporte a plataformas de grande impacto. No dia a
                        dia, utilizo principalmente React no frontend e Node.js
                        no backend, além de ter experiência com PHP, Drupal e
                        Docker.
                    </p>
                    <p>
                        Atualmente, estou aprofundando meus conhecimentos no
                        ecossistema fullstack, estudando TanStack Query e
                        TanStack Router para construir aplicações mais
                        performáticas, escaláveis e bem estruturadas.
                    </p>
                </div>
            </section>

            {/* experiências */}
            <section className="flex flex-col items-center gap-10 pb-40">
                <h1 className="text-[#fffffe] text-3xl">Experiências</h1>

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
                    {/* <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <h2 color="blue-gray" className="leading-none">
                                    Timeline Title Here.
                                </h2>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <p
                                    color="gray"
                                    className="font-normal text-gray-600"
                                >
                                    The key to more success is to have a lot of
                                    pillows. Put it this way, it took me twenty
                                    five years to get these plants, twenty five
                                    years of blood sweat and tears, and I&apos;m
                                    never giving up, I&apos;m just getting
                                    started. I&apos;m up to something. Fan luv.
                                </p>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <h2 color="blue-gray" className="leading-none">
                                    Timeline Title Here.
                                </h2>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <p
                                    color="gray"
                                    className="font-normal text-gray-600"
                                >
                                    The key to more success is to have a lot of
                                    pillows. Put it this way, it took me twenty
                                    five years to get these plants, twenty five
                                    years of blood sweat and tears, and I&apos;m
                                    never giving up, I&apos;m just getting
                                    started. I&apos;m up to something. Fan luv.
                                </p>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <h2 color="blue-gray" className="leading-none">
                                    Timeline Title Here.
                                </h2>
                            </TimelineHeader>
                            <TimelineBody>
                                <p
                                    color="gray"
                                    className="font-normal text-gray-600"
                                >
                                    The key to more success is to have a lot of
                                    pillows. Put it this way, it took me twenty
                                    five years to get these plants, twenty five
                                    years of blood sweat and tears, and I&apos;m
                                    never giving up, I&apos;m just getting
                                    started. I&apos;m up to something. Fan luv.
                                </p>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline> */}
                </div>
            </section>

            {/* ultimos projetos */}
            <section className="flex flex-col items-center gap-10 pb-40">
                <h1 className="text-[#fffffe] text-3xl">Últimos Projetos.</h1>
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
                            img: '/projeto1.png',
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
                            link: 'https://github.com/mariaseverino/feeback',
                            img: '/projeto2.png',
                        },
                    ].map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            className="gap-3 bg-[#242629] p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-white/20 transition"
                        >
                            <img
                                src={item.img}
                                alt={`preview do ${item.title}`}
                                className="w-full h-60"
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
                <a
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-amber-500 border-amber-500 hover:bg-amber-500/80 text-[#171821] shadow-xs h-9 px-4 py-2"
                    href="https://github.com/mariaseverino"
                    target="_blank"
                >
                    Ver mais projetos
                </a>
            </section>

            <section className="flex flex-col items-center gap-10 pb-20">
                <h1 className="text-[#fffffe] text-3xl">Entre em contato</h1>
                <div className="flex gap-6 w-xl mx-auto items-center justify-center">
                    <a
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-amber-500 border-amber-500 hover:bg-amber-500/80 text-[#171821] shadow-xs h-9 px-4 py-2"
                        href="https://github.com/mariaseverino"
                        target="_blank"
                    >
                        <Mail /> mariarsseverino@gmail.com
                    </a>
                    <a
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-amber-500 border-amber-500 hover:bg-amber-500/80 text-[#171821] shadow-xs h-9 px-4 py-2"
                        href="https://github.com/mariaseverino"
                        target="_blank"
                    >
                        <Linkedin /> Linkedin
                    </a>
                </div>
            </section>
            <footer>
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center px-12 text-sm text-[#94a1b2]">
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()}. All rights reserved.
                    </p>

                    <div className="flex items-center">
                        <p>
                            Feito com
                            <Heart
                                size={14}
                                className="inline-block mx-1 text-amber-500"
                            />
                            e codigo
                        </p>
                    </div>
                </div>
            </footer>
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
            <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex gap-6">
                        <div className="flex flex-col items-center min-w-[90px] text-sm text-[#94a1b2]">
                            <span className="text-amber-500">{item.data}</span>
                            <div className="flex-1 w-px bg-white/20 mt-2" />
                        </div>

                        <div className="flex flex-col gap-3 bg-[#242629] p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-white/20 transition">
                            <h3 className="text-xl font-semibold text-[#fffffe]">
                                {item.company}
                            </h3>

                            {item.title && (
                                <p className="text-sm text-[#94a1b2]">
                                    {item.title}
                                </p>
                            )}

                            <div className="flex flex-col gap-3 mt-2">
                                {item.content.map((i) => (
                                    <div
                                        key={i.description}
                                        className="space-y-1"
                                    >
                                        {i.title && (
                                            <div className="flex items-center gap-2 text-sm text-[#94a1b2]">
                                                <span className="size-1.5 bg-amber-500 rounded-full" />
                                                {i.title}
                                            </div>
                                        )}
                                        <p className="text-sm leading-relaxed text-[#fffffe]/90">
                                            {i.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
