import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-black">
            <div className={"max-w-md w-full bg-gray-100 rounded-card flex flex-col items-center p-8"}>
                <h5 className={"max-w-sm w-full yandex-button"}>
                    Обо мне
                </h5>
                <section className={"mt-4"}>
                    <h1 className={"yandex-h2"}>
                        Меня зовут Тимофей
                    </h1>

                    <p className={"yandex-text"}>
                        Пишу на React TypeScript более 3 лет. Имею опыт реализации проектов в одиночку и в команде.
                    </p>

                    <h2 className={"yandex-h2"}>
                        Технологии, которые я использую:
                    </h2>
                    <ul className={"yandex-text"}>
                        <li>Frontend - React, TypeScript, MUI, Redux toolkit, Tailwind, styled components, Next js</li>
                    </ul>

                    <h2 className={"yandex-h2"}>
                        Контакты:
                    </h2>
                    <p className={"yandex-text"}>
                        Telegram - @t_chirtsov
                    </p>
                    <p className={"yandex-text"}>
                        Телефон: <a href="tel:+79111376551">+7 911 1376551
                    </a>
                    </p>
                </section>

            </div>


        </main>
    );
}
