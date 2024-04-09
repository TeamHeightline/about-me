import Image from "next/image";
import {Metadata} from "next";

const RESUME_URL = "https://hh.ru/resume/db5e98bbff08e1a2f70039ed1f763373476e37"

export const metadata: Metadata = {
    title: 'Чирцов Т.А. - Резюме',
}
export default function Home() {
    return (
        <main className={"relative"}>

            <section
                className="sticky top-0  h-screen overflow-y-auto bg-black min-h-screen flex items-center justify-center">
                <div className={"max-w-md md:max-w-4xl p-2 h-full"}>
                    <div className={"grid grid-rows-2 grid-cols-4 gap-4 rounded-card"}>
                        <div
                            className="row-span-2 col-span-4 md:col-span-2 min-h-[350px] ">
                            <div className={"w-full h-full relative aspect-square"}>
                                <Image
                                    className={"rounded-card object-cover"}
                                    src="/about-me/me-photo.jpg"
                                    alt="Моя фотография"
                                    fill={true}
                                />
                            </div>
                        </div>

                        <div
                            className={"bg-gray-100 p-8 rounded-card row-span-1 md:col-span-2 col-span-4 flex items-center"}>
                            <h1 className={"yandex-h2 text-3xl md:text-6xl text-black"}>
                                frontend <span className={"text-blue-700"}>dev.</span>
                            </h1>
                        </div>


                        <div
                            className={"bg-gray-100 p-8 rounded-card row-span-1 md:col-span-1 col-span-2 hidden md:block"}>
                            <h2 className={"yandex-h2  text-black"}>
                                stack
                            </h2>
                            <ul className={"yandex-text mt-2 text-black text-md"}>
                                <li> TypeScript, React, Redux toolkit</li>
                                <li className={"mt-1"}> MUI, Tailwind, styled components</li>
                            </ul>
                        </div>
                        <div
                            className={"bg-gray-100 p-8 rounded-card row-span-1 md:col-span-1 col-span-2 hidden md:block"}>
                            <h2 className={"yandex-h2 text-black"}>
                                contacts
                            </h2>
                            <p className={"yandex-text mt-2"}>
                                <a href={"https://t.me/t_chirtsov"} className={"text-black underline"}> @t_chirtsov</a>
                            </p>
                            <p className={"yandex-text mt-1"}>
                                <a href="tel:+79111376551" className={"text-black underline"}>+7 (911) 137-65-51</a>
                            </p>
                        </div>


                    </div>

                    <a href={RESUME_URL} className={"yandex-h2 text-6xl text-white mt-4 cursor-pointer"}>
                        <span className={"bg-blue-700 px-2"}>TIMOFEI</span> CHIRTSOV
                    </a>

                </div>
            </section>

            <section className={"sticky top-0 bg-black h-screen overflow-y-auto"}>

                <div className={"max-w-6xl mx-auto"}>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <div
                            className="rounded-card h-[316px] flex items-center justify-center p-8">
                            <p className="yandex-h2 text-6xl hyphens-auto font-bold">
                                2022 - настоящее время
                            </p>
                        </div>

                        <div
                            className="rounded-card flex flex-col md:items-center md:justify-center p-8">
                            <p className="yandex-h2 text-4xl hyphens-auto font-bold">
                                West engineering
                            </p>
                            <p className="yandex-h2 text-2xl mt-2">
                                Системы мониторинга для <span className="text-rose-600"> АЭС </span>
                            </p>
                        </div>

                        <div
                            className=" rounded-card  w-[150px] h-[150px] flex items-center justify-center p-8">
                            <p className="yandex-h2 text-3xl text-blue-600">
                                {"> 1.7 года"}
                            </p>
                        </div>
                    </div>


                    <div
                        className="flex flex-col md:items-center md:justify-center col-span-6 row-span-1 west-tech-list-gradient rounded-card whitespace-nowrap overflow-hidden">
                        <div className="yandex-h2 text-xl p-4 flex flex-col md:flex-row gap-4">
                            {["React js", "Typescript", "Redux Toolkit", "Tailwind", "MUI", "Chart js", "Next JS"].map((item, index) => (
                                <div className={"flex flex-row gap-4"} key={index}>
                                    <div className={index === 0 ? "md:hidden" : ""}>
                                        ✦
                                    </div>
                                    <div key={index + " item"}>
                                        {item.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            <section className={"sticky top-0 min-h-screen bg-black h-full"}>

                <div className={"max-w-6xl mx-auto"}>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <div
                            className="rounded-card h-[316px] flex items-center justify-center p-8">
                            <p className="yandex-h2 text-6xl hyphens-auto font-bold">
                                2022 - настоящее время
                            </p>
                        </div>

                        <div
                            className="rounded-card flex flex-col md:items-center md:justify-center p-8">
                            <p className="yandex-h2 text-4xl hyphens-auto font-bold">
                                West engineering
                            </p>
                            <p className="yandex-h2 text-2xl mt-2">
                                Системы мониторинга для <span className="text-rose-600"> АЭС </span>
                            </p>
                        </div>

                        <div
                            className=" rounded-card  w-[150px] h-[150px] flex items-center justify-center p-8">
                            <p className="yandex-h2 text-3xl text-blue-600">
                                {"> 1.7 года"}
                            </p>
                        </div>
                    </div>


                    <div
                        className="flex flex-col md:items-center md:justify-center col-span-6 row-span-1 west-tech-list-gradient rounded-card whitespace-nowrap overflow-hidden">
                        <div className="yandex-h2 text-xl p-4 flex flex-col md:flex-row gap-4">
                            {["React js", "Typescript", "Redux Toolkit", "Tailwind", "MUI", "Chart js", "Next JS"].map((item, index) => (
                                <div className={"flex flex-row gap-4"} key={index}>
                                    <div className={index === 0 ? "md:hidden" : ""}>
                                        ✦
                                    </div>
                                    <div key={index + " item"}>
                                        {item.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/*<div className="mt-16">*/}
            {/*    <section className={""}>*/}
            {/*        <div className={"flex items-center justify-center"}>*/}
            {/*            <div>*/}
            {/*                <h1 className={"text-6xl text-sw  sw-font text-center"}>*/}
            {/*                    Study Ways*/}
            {/*                </h1>*/}
            {/*                <h3 className={"text-xl   sw-font"}>*/}
            {/*                    ETU LETI*/}
            {/*                </h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-w-7xl"}>*/}
            {/*            <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>*/}
            {/*                <p className={"bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text text-4xl sw-font  border-neutral-600 rounded-2xl"}>*/}
            {/*                    Образовательная платформа c ИИ*/}
            {/*                </p>*/}
            {/*                <p className={"text-xl  sw-font mt-4"}>*/}
            {/*                    Уроки с рекомендательной системой <br/>*/}
            {/*                    Нелинейные курсы <br/>*/}
            {/*                    Тесты и экзамены с защитой от Chat GPT*/}
            {/*                </p>*/}
            {/*            </div>*/}

            {/*            <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>*/}
            {/*                <p className={"text-4xl sw-font  border-neutral-600 rounded-2xl bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text"}>*/}
            {/*                    О проекте*/}
            {/*                </p>*/}
            {/*                <p className={"text-xl  sw-font mt-4"}>*/}
            {/*                    Проект от части научный с экспериментальными подходами <br/>*/}
            {/*                    Участвовал в планировании с заказчиками, единственным программистом<br/>*/}
            {/*                    {"Писал весь проект с нуля > 1.7 года"}*/}

            {/*                </p>*/}
            {/*            </div>*/}

            {/*            <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>*/}
            {/*                <p className={"text-4xl  sw-font  border-neutral-600 rounded-2xl bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text"}>*/}
            {/*                    Технологии*/}
            {/*                </p>*/}
            {/*                <p className={"text-xl  sw-font mt-4"}>*/}
            {/*                    React js, TypeScript, Redux Toolkit, MUI <br/>*/}
            {/*                    (Express js, Prisma, Postgres, Google Cloud) <br/>*/}

            {/*                    30+ к строк кода*/}

            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</div>*/}

            {/*<div className="mt-32 mb-16">*/}
            {/*    <section className="p-6 max-w-max md:max-w-md border border-gray-300 shadow-lg bg-white">*/}
            {/*        <h2 className="text-4xl font-semibold mb-2 text-hh2">Теперь и вы можете меня*/}
            {/*            нанять*/}
            {/*        </h2>*/}
            {/*        <p className="mb-4 text-black">*/}
            {/*            Если вы ищете опытного разработчика, готового взяться за ваш следующий*/}
            {/*            проект, я открыт для предложений.*/}
            {/*        </p>*/}
            {/*        <a href={RESUME_URL}*/}
            {/*           className="font-bold py-2 px-4 rounded hover:bg-green-400 inline-block text-center bg-hh">*/}
            {/*            Перейти в HH*/}
            {/*        </a>*/}
            {/*    </section>*/}
            {/*</div>*/}
            {/*</div>*/}

        </main>
    );
}
