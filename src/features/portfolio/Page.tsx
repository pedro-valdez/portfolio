import { useCallback } from 'react'
import { BiSolidInvader, BiSolidKeyboard } from 'react-icons/bi'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { PortfolioProject } from './Project'

export function PortfolioPage() {
    const copyEmailToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText('pedrovdevx@gmail.com')
        } catch {
            console.log('Failed to copy text.')
        }
    }, [])

    return (
        <main className="max-w-xl w-full mx-auto px-4 py-16">
            <section>
                <h1 className="text-3xl font-black mb-2">Pedro Valdez</h1>
                <p>Front-end engineer. Based in Texas.</p>

                <div className="flex gap-x-[2ch] mt-6">
                    <a
                        className="btn btn-circle btn-ghost"
                        target="_blank"
                        href="https://github.com/pedro-valdez/"
                    >
                        <LuGithub className="size-6" />
                    </a>
                    <a
                        className="btn btn-circle btn-ghost"
                        target="_blank"
                        href="https://www.linkedin.com/in/pedro-a-valdez"
                    >
                        <LuLinkedin className="size-6" />
                    </a>
                    <button
                        className="btn btn-circle btn-ghost"
                        onClick={() => copyEmailToClipboard()}
                    >
                        <LuMail className="size-6" />
                    </button>
                </div>
            </section>

            <div className="divider mb-10"></div>

            <section>
                <h2 className="text-xl font-bold mb-2">Projects</h2>

                <ul className="list">
                    <PortfolioProject
                        repo="cgol"
                        icon={<BiSolidInvader />}
                        heading="CGOL"
                        subheading={
                            <span>
                                <a
                                    className="link link-hover"
                                    target="_blank"
                                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                                >
                                    Conway's Game of Life
                                </a>
                                .
                            </span>
                        }
                    />

                    <PortfolioProject
                        repo="wpm"
                        icon={<BiSolidKeyboard />}
                        heading="WPM"
                        subheading="Typing test."
                    />
                </ul>
            </section>

            <div className="divider my-10"></div>

            <section>
                <h2 className="text-xl font-bold mb-2">Contact Me</h2>

                <p>
                    Reach out to me through{' '}
                    <a
                        className="link"
                        target="_blank"
                        href="https://www.linkedin.com/in/pedro-a-valdez"
                    >
                        LinkedIn
                    </a>{' '}
                    or{' '}
                    <button
                        className="link"
                        onClick={() => copyEmailToClipboard()}
                    >
                        email
                    </button>
                    .
                </p>
            </section>
        </main>
    )
}
