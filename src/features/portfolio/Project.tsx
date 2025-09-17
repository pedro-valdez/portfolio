import type { ReactNode } from 'react'
import { LuGithub } from 'react-icons/lu'

const ioUrl = 'https://pedro-valdez.github.io'
const githubUrl = 'https://github.com/pedro-valdez'

type PortfolioProjectProps = {
    repo: string
    icon: ReactNode
    heading: string
    subheading: ReactNode
}

export function PortfolioProject({
    repo,
    icon,
    heading,
    subheading,
}: PortfolioProjectProps) {
    return (
        <li className="list-row">
            <a
                className="btn btn-square *:size-6"
                target="_blank"
                href={`${ioUrl}/${repo}/`}
            >
                {icon}
            </a>
            <div>
                <a className="link" target="_blank" href={`${ioUrl}/${repo}/`}>
                    <h3 className="text-lg leading-none mb-2">{heading}</h3>
                </a>
                <p className="leading-none">{subheading}</p>
            </div>
            <a
                className="btn btn-circle btn-ghost"
                target="_blank"
                href={`${githubUrl}/${repo}`}
            >
                <LuGithub className="size-6" />
            </a>
        </li>
    )
}
