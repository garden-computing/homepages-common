import { JSX } from "solid-js/jsx-runtime";

export function FakeScreenshot(props: {
    children: JSX.Element;
    class?: string;
}) {
    return (
        <div
            class={`bg-stone-200 text-stone-400 rounded flex items-center justify-center text-center ${
                props.class || ""
            }`}
        >
            {props.children}
        </div>
    );
}
