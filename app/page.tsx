import Image from "next/image";
import {Metadata} from "next";

const RESUME_URL = "https://hh.ru/resume/db5e98bbff08e1a2f70039ed1f763373476e37"

export const metadata: Metadata = {
    title: 'Чирцов Т.А. - Резюме',
}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center md:p-16 p-4 bg-black">
            <section className={" max-w-[500px] w-full  bg-gray-100 rounded-card flex flex-col items-center p-8"}>
                <h5 className={"max-w-sm w-full yandex-button text-xl text-black"}>
                    Обо мне
                </h5>
                <section className={"mt-4"}>
                    <h1 className={"yandex-h2 mt-4 text-black"}>
                        Меня зовут Тимофей
                    </h1>

                    <p className={"yandex-text mt-1 text-black"}>
                        Пишу на React TypeScript более 3 лет.
                    </p>
                    <p className={"yandex-text text-black"}>
                        Имею опыт реализации проектов в одиночку и в команде.
                    </p>

                    <h2 className={"yandex-h2 mt-4 text-black"}>
                        Технологии, которые я использую:
                    </h2>
                    <ul className={"yandex-text mt-1 text-black"}>
                        <li>Frontend - React, TypeScript, MUI, Redux toolkit, Tailwind, styled components, Next js</li>
                    </ul>

                    <h2 className={"yandex-h2 mt-4 text-black"}>
                        Контакты:
                    </h2>
                    <p className={"yandex-text mt-1 text-black"}>
                        Telegram - @t_chirtsov
                    </p>
                    <p className={"yandex-text text-black"}>
                        Телефон: <a href="tel:+79111376551">+7 911 1376551
                    </a>
                    </p>
                </section>

            </section>

            <section>
                <Image
                    className="rounded-card mt-16"
                    src="/me-photo.jpg"
                    alt="Описание изображения"
                    width={300}
                    height={300}
                />
            </section>


            <div className="mt-16">
                <section className={"flex flex-wrap justify-start items-start gap-4 max-w-[650px]"}>
                    <div className={"flex flex-col md:flex-row gap-4"}>
                        <div
                            className={"bg-dodo-surface rounded-card w-full md:w-[316px] h-[316px] flex items-center justify-center p-8"}>
                            <p className={"yandex-h2 text-6xl hyphens-auto font-bold  "}>
                                West engineering
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div
                                className={"bg-dodo-surface rounded-card w-full md:max-w-[300px] h-[150px] flex items-center justify-center p-8"}>
                                <p className={"yandex-h2 text-3xl  "}>
                                    Системы мониторинга для <span className="text-rose-600"> АЭС </span>
                                </p>
                            </div>
                            <div
                                className={"bg-dodo-surface rounded-card w-full md:max-w-[300px] h-[150px] flex items-center justify-center p-8"}>
                                <p className={"yandex-h2 text-3xl"}>
                                    Моя кодовая база
                                    <span className="text-blue-600"> 70к </span> строк
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={"bg-dodo-surface rounded-card w-full md:max-w-[632px] min-h-[150px] flex items-center justify-center p-8"}>
                        <div className={"yandex-h2 text-3xl   "}>
                            Технологии:
                            <p>React js, Type Script, Redux Toolkit, MUI</p>
                        </div>
                    </div>
                    <div
                        className={"bg-dodo-surface rounded-card w-[150px] h-[150px] flex items-center justify-center p-8"}>
                        <p className={"yandex-h2 text-3xl text-blue-600"}>
                            {"> 1.7 года"}
                        </p>
                    </div>
                    <div
                        className={"bg-dodo-surface rounded-card w-full md:w-[300px] h-[150px] flex items-center justify-center p-8"}>
                        <p className={"yandex-h2 text-3xl"}>
                            Делал проект с нуля
                        </p>
                    </div>
                </section>
            </div>

            <div className="mt-16">
                <section className={""}>
                    <div className={"flex items-center justify-center"}>
                        <div>
                            <h1 className={"text-6xl text-sw  sw-font text-center"}>
                                Study Ways
                            </h1>
                            <h3 className={"text-xl   sw-font"}>
                                ETU LETI
                            </h3>
                        </div>
                    </div>

                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-w-7xl"}>
                        <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>
                            <p className={"bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text text-4xl sw-font  border-neutral-600 rounded-2xl"}>
                                Образовательная платформа c ИИ
                            </p>
                            <p className={"text-xl  sw-font mt-4"}>
                                Уроки с рекомендательной системой <br/>
                                Нелинейные курсы <br/>
                                Тесты и экзамены с защитой от Chat GPT
                            </p>
                        </div>

                        <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>
                            <p className={"text-4xl sw-font  border-neutral-600 rounded-2xl bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text"}>
                                О проекте
                            </p>
                            <p className={"text-xl  sw-font mt-4"}>
                                Проект от части научный с экспериментальными подходами <br/>
                                Участвовал в планировании с заказчиками, единственным программистом<br/>
                                {"Писал весь проект с нуля > 1.7 года"}

                            </p>
                        </div>

                        <div className={"border-2 border-neutral-600 p-8 rounded-2xl w-full flex-col"}>
                            <p className={"text-4xl  sw-font  border-neutral-600 rounded-2xl bg-gradient-to-r from-sw to-cyan-500 inline-block text-transparent bg-clip-text"}>
                                Технологии
                            </p>
                            <p className={"text-xl  sw-font mt-4"}>
                                React js, TypeScript, Redux Toolkit, MUI <br/>
                                (Express js, Prisma, Postgres, Google Cloud) <br/>

                                30+ к строк кода

                            </p>
                        </div>
                    </div>
                </section>
            </div>


            <div className="mt-32 mb-16">
                <section className="p-6 max-w-max md:max-w-md border border-gray-300 shadow-lg bg-white">
                    <h2 className="text-4xl font-semibold mb-2 text-hh2">Теперь и вы можете меня
                        нанять
                    </h2>
                    <p className="mb-4 text-black">
                        Если вы ищете опытного разработчика, готового взяться за ваш следующий
                        проект, я открыт для предложений.
                    </p>
                    <a href={RESUME_URL}
                       className="font-bold py-2 px-4 rounded hover:bg-green-400 inline-block text-center bg-hh">
                        Перейти в HH
                    </a>
                </section>
            </div>

        </main>
    );
}
