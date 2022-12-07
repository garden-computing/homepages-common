import { JSX } from "solid-js";

export function NavContainer(props: { children: JSX.Element }) {
    return (
        <nav class="flex items-center pt-3 lg:max-w-5xl mx-auto max-w-full overflow-hidden">
            {props.children}
        </nav>
    );
}

export function HomeLogo(props: { src: string; class?: string }) {
    return (
        <img
            src={props.src}
            loading="lazy"
            alt=""
            class={`mr-4 ${props.class || ""}`}
        />
    );
}

const largerVerticallyClickable =
    "relative before:block before:absolute before:inset-x-0 before:-inset-y-4";

export function NavLink(props: {
    href: string;
    children: JSX.Element;
    class?: string;
    active?: boolean;
}) {
    return (
        <a
            href={props.href}
            class={`rounded px-5 py-1  ${largerVerticallyClickable} ${
                props.class || ""
            }`}
            classList={{
                "text-gray-500 hover:text-black hover:bg-stone-100": !props.active,
                "text-black before-content[>]": props.active,
            }}
        >
            {props.children}
        </a>
    );
}

export function SideNavLink(props: {
    href: string;
    children: JSX.Element;
    class?: string;
}) {
    return (
        <a
            href={props.href}
            class={`block px-2 py-1 rounded text-gray-500 hover:text-black hover:bg-stone-100 ${
                props.class || ""
            }`}
        >
            {props.children}
        </a>
    );
}

export function NavButton(props: {
    href: string;
    children: JSX.Element;
    class?: string;
}) {
    return (
        <a
            href={props.href}
            class={`px-5 py-1 border rounded border-gray-600 text-gray-600 hover:text-black hover:bg-stone-200 ${largerVerticallyClickable} ${
                props.class || ""
            }`}
        >
            {props.children}
        </a>
    );
}
