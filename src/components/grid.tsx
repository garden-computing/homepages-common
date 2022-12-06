import { JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

export function Grid(props: {
    children: JSX.Element;
    class?: string;
    as?: keyof JSX.IntrinsicElements;
}) {
    return (
        <Dynamic
            component={props.as || "div"}
            class={`grid justify-center grid-cols-[repeat(4,_4rem)] md:grid-cols-[repeat(8,_4rem)] lg:grid-cols-[repeat(12,_4rem)] auto-rows-[minmax(4rem,_auto)] md:auto-rows-[4rem] gap-6 mb-6 ${
                props.class || ""
            }`}
        >
            {props.children}
        </Dynamic>
    );
}

export function GridSection(props: { children: JSX.Element; class?: string }) {
    return (
        <section
            class={`grid justify-center grid-cols-[repeat(4,_4rem)] md:grid-cols-[repeat(8,_4rem)] lg:grid-cols-[repeat(12,_4rem)] auto-rows-[minmax(4rem,_auto)] md:auto-rows-[4rem] gap-6 mb-6 ${
                props.class || ""
            }`}
        >
            {props.children}
        </section>
    );
}
