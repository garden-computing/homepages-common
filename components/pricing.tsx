import { JSX, Show } from "solid-js";

export function PricingCard(props: {
    tierName: JSX.Element;
    children: JSX.Element;
    class: string;
}) {
    return (
        <div
            class={`col-span-4 row-span-4 grid grid-cols-4 grid-rows-4 gap-6 -m-2 p-2 rounded-lg ${
                props.class || ""
            }`}
        >
            <h2 class="col-span-4 text-center font-display font-bold tracking-tight text-2xl self-center">
                {props.tierName}
            </h2>
            {props.children}
        </div>
    );
}

export function TierName(props: { children: JSX.Element }) {
    return (
        <span class="text-[0.9em] tracking-normal uppercase border border-gray-800 px-1 rounded">
            {props.children}
        </span>
    );
}

export function BigNumber(props: { children: JSX.Element; class: string }) {
    return (
        <h3
            class={`col-span-2 font-display font-bold justify-self-end self-center text-right ${
                props.class || ""
            }`}
        >
            {props.children}
        </h3>
    );
}

export function Explanation(props: { children: JSX.Element }) {
    return <p class="col-span-2 self-center">{props.children}</p>;
}

export function CTAButton(props: {
    href: string;
    children: JSX.Element;
    class: string;
}) {
    return (
        <a
            href={props.href}
            class={`col-span-4 rounded flex items-center justify-center font-display font-bold text-lg ${
                props.class || ""
            }`}
        >
            {props.children}
        </a>
    );
}

export function FeatureGrid(props: { children: JSX.Element; class: string }) {
    return (
        <div
            class={`col-span-4 row-span-7 grid grid-cols-4 auto-rows-[4rem] gap-6 -m-3 p-3 rounded-lg ${
                props.class || ""
            }`}
        >
            {props.children}
        </div>
    );
}

export function TierSummary(props: { children: JSX.Element }) {
    return (
        <div class="col-span-4 flex justify-evenly text-lg self-center">
            {props.children}
        </div>
    );
}

export function Feature(props: {
    children: JSX.Element;
    class: string;
    price?: JSX.Element;
    priceClass: string;
}) {
    return (
        <div
            class={`col-span-2 rounded text-sm h-16 p-2 text-center flex flex-col justify-around relative ${
                props.class || ""
            }`}
        >
            <Show when={props.price}>
                <div
                    class={`text-xs absolute top-0 right-0 px-1 rounded ${props.priceClass}`}
                >
                    {props.price}
                </div>
            </Show>
            {props.children}
        </div>
    );
}
