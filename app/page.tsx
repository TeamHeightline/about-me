import Image from "next/image";
import {Metadata} from "next";

const RESUME_URL = "https://hh.ru/resume/db5e98bbff08e1a2f70039ed1f763373476e37"

export const metadata: Metadata = {
    title: 'Чирцов Т.А. - Резюме',
}
export default function Home() {
    return (
        <main>

            <section className="h-screen bg-black flex items-center justify-center">
                <div className={"max-w-md md:max-w-4xl p-2"}>
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

            <section className={"min-h-screen bg-black h-full px-2"}>

                <div className={"max-w-6xl mx-auto"}>
                    <div
                        className="rounded-card  flex py-16">
                        <p className="yandex-h2 text-6xl hyphens-auto font-bold">
                            2022 - настоящее время
                        </p>
                    </div>

                    <div>

                        <div className="flex flex-col md:flex-row md:gap-8">
                            <div
                                className="rounded-card flex flex-col">
                                <p className="yandex-h2 text-4xl hyphens-auto font-bold">
                                    West engineering
                                </p>
                                <p className="yandex-h2 text-2xl mt-2">
                                    Система мониторинга для <span className="text-rose-600"> АЭС </span>
                                </p>
                            </div>

                            <div>
                                <p className="yandex-h2 text-3xl text-blue-600">
                                    {"> 1.7 года"}
                                </p>
                            </div>
                        </div>


                        <div
                            className="mt-8 flex flex-col md:items-center md:justify-center col-span-6 row-span-1 west-tech-list-gradient rounded-card whitespace-nowrap overflow-hidden">
                            <div className="yandex-h2 text-xl p-4 flex flex-col md:flex-row gap-4">
                                {["React js", "Typescript", "Redux Toolkit", "MUI", "Chart js", "Vite", "Express", "Prisma"].map((item, index) => (
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

                        <div className={"text-white"}>
                            <div className={"mt-8 text-xl font-bold"}>
                                Обязанности:
                            </div>

                            <ul className={"list-disc ml-5 marker:text-rose-500"}>
                                <li>
                                    Разработка ключевого функционала
                                </li>
                                <li>
                                    Погружение в предметную область
                                </li>
                                <li>
                                    Оптимизация кода для высоких нагрузок
                                </li>
                            </ul>

                            <div className={"mt-8 text-xl font-bold"}>
                                Помимо этого:
                            </div>

                            <ul className={"list-disc ml-5 marker:text-blue-400"}>
                                <li>
                                    Рефакторинг чужого кода
                                </li>
                                <li>
                                    Менторство менее опытных коллег
                                </li>
                                <li>
                                    Отстаивание интересов команды перед заказчиком
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <section className={"min-h-screen bg-black h-full px-2"}>

                <div className={"max-w-6xl mx-auto"}>
                    <div
                        className="rounded-card  flex py-16">
                        <p className="yandex-h2 text-6xl hyphens-auto font-bold">
                            февраль 2021 - август 2022
                        </p>
                    </div>

                    <div>

                        <div className="flex flex-col md:flex-row md:gap-8">
                            <div
                                className="rounded-card flex flex-col">
                                <p className="yandex-h2 text-4xl hyphens-auto font-bold">
                                    ETU LETI
                                </p>
                                <p className="yandex-h2 text-2xl mt-2 max-w-[30ch]">
                                    Разработка образовательной платформы с <span className="text-rose-600"> ИИ </span>
                                </p>
                            </div>

                            <div>
                                <p className="yandex-h2 text-3xl text-blue-600">
                                    {"> 1.7 года"}
                                </p>
                            </div>
                        </div>


                        <div
                            className="mt-8 flex flex-col md:items-center md:justify-center col-span-6 row-span-1 west-tech-list-gradient rounded-card whitespace-nowrap overflow-hidden">
                            <div className="yandex-h2 text-xl p-4 flex flex-col md:flex-row gap-4">
                                {["React js", "Typescript", "MobX", "MUI", "Next JS"].map((item, index) => (
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

                        <div className={"text-white"}>
                            <div className={"mt-8 text-xl font-bold"}>
                                Обязанности:
                            </div>

                            <ul className={"list-disc ml-5 marker:text-rose-500"}>
                                <li>
                                    Участвовал в разработке архитектуры проекта для фронтенда
                                </li>
                                <li>
                                    Участие в проектировании схемы данных на бэкенде
                                </li>
                                <li>
                                    Интегрировал рекомендательный ИИ
                                </li>
                            </ul>

                            <div className={"mt-8 text-xl font-bold"}>
                                Помимо этого:
                            </div>

                            <ul className={"list-disc ml-5 marker:text-blue-400"}>
                                <li>
                                    Разрабатывал решения для нестандартных требований заказчика
                                </li>
                                <li>
                                    Сделал умный поиск
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>


        </main>
    );
}
