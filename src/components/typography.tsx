import { JSX } from "solid-js";

export function HeroTitle(props: { children: JSX.Element }) {
    return (
        <h1 class="col-span-full row-span-2 text-5xl font-display font-bold tracking-tighter self-end md:text-center">
            {props.children}
        </h1>
    );
}

export function SectionTitle(props: { children: JSX.Element }) {
    return (
        <h1 class="col-span-full row-span-2 text-4xl font-display font-bold tracking-tighter self-end md:text-center">
            {props.children}
        </h1>
    );
}

export function BrU(props: { children: JSX.Element }) {
    return <span class="inline-block">{props.children}</span>;
}

export function SectionIntro(props: { children: JSX.Element; class?: string }) {
    return (
        <p
            class={`text-lg lg:text-xl md:text-center col-span-full text-gray-800 max-sm:leading-tight md:justify-self-center ${
                props.class || ""
            }`}
        >
            {props.children}
        </p>
    );
}

export function Em(props: { children: JSX.Element }) {
    return <em class="not-italic text-black font-medium">{props.children}</em>;
}

export function MiniStory(props: {
    title: string;
    children: JSX.Element;
}) {
    return (
        <div class="col-span-4 row-span-2 grid grid-cols-4 grid-rows-2 gap-6">
            <h2 class="text-2xl font-display font-bold tracking-tight col-span-4 self-end">
                {props.title}
            </h2>
            <p class="col-span-4">{props.children}</p>
        </div>
    );
}

export function MiniStoryWithPicture(props: {
    title: JSX.Element;
    picture: JSX.Element;
    children: JSX.Element;
}) {
    return (
        <div class="col-span-4 row-span-5 grid grid-cols-4 grid-rows-5 gap-6">
            {props.picture}
            <h2 class="text-2xl font-display font-bold tracking-tight col-span-4 self-end">
                {props.title}
            </h2>
            <p class="col-span-4">{props.children}</p>
        </div>
    );
}
