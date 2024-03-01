import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-16  bg-black">
            <section className={" w-[500px]  bg-gray-100 rounded-card flex flex-col items-center p-8"}>
                <h5 className={"max-w-sm w-full yandex-button text-xl"}>
                    Обо мне
                </h5>
                <section className={"mt-4"}>
                    <h1 className={"yandex-h2 mt-4"}>
                        Меня зовут Тимофей
                    </h1>

                    <p className={"yandex-text mt-1"}>
                        Пишу на React TypeScript более 3 лет.
                    </p>
                    <p className={"yandex-text"}>
                        Имею опыт реализации проектов в одиночку и в команде.
                    </p>

                    <h2 className={"yandex-h2 mt-4"}>
                        Технологии, которые я использую:
                    </h2>
                    <ul className={"yandex-text mt-1"}>
                        <li>Frontend - React, TypeScript, MUI, Redux toolkit, Tailwind, styled components, Next js</li>
                    </ul>

                    <h2 className={"yandex-h2 mt-4"}>
                        Контакты:
                    </h2>
                    <p className={"yandex-text mt-1"}>
                        Telegram - @t_chirtsov
                    </p>
                    <p className={"yandex-text"}>
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
                <section className={"flex flex-wrap justify-start items-start gap-4 w-[650px]"}>
                    <div
                        className={"bg-dodo-surface rounded-card w-[316px] h-[316px] flex items-center justify-center  p-8"}>
                        <p className={"yandex-h2 text-6xl hyphens-auto font-bold text-white "}>
                            West engineering
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className={"bg-dodo-surface rounded-card w-[300px] h-[150px] flex items-center justify-center p-8"}>
                            <p className={"yandex-h2 text-3xl text-white "}>
                                Системы мониторинга для <span className="text-rose-600"> АЭС </span>
                            </p>
                        </div>
                        <div
                            className={"bg-dodo-surface rounded-card w-[300px] h-[150px] flex items-center justify-center p-8"}>
                            <p className={"yandex-h2 text-3xl text-white  "}>
                                Моя кодовая база
                                <span className="text-blue-600"> 70к </span> строк
                            </p>
                        </div>
                    </div>

                    <div
                        className={"bg-dodo-surface rounded-card w-[632px] h-[150px] flex items-center justify-center p-8"}>
                        <p className={"yandex-h2 text-3xl text-white  "}>
                            Технологии:
                            <p>React js, Type Script, Redux Toolkit, MUI</p>
                        </p>
                    </div>
                    <div
                        className={"bg-dodo-surface rounded-card w-[150px] h-[150px] flex items-center justify-center p-8"}>
                        <p className={"yandex-h2 text-3xl text-blue-600  "}>
                            > 1.5 года
                        </p>
                    </div>
                    <div
                        className={"bg-dodo-surface rounded-card w-[300px] h-[150px] flex items-center justify-center p-8"}>
                        <p className={"yandex-h2 text-3xl text-white  "}>
                            Делал проект с нуля
                        </p>
                    </div>
                </section>
            </div>


        </main>
    );
}
