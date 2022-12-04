export const clientRouting = true;
export { render };

import { Component, createSignal } from "solid-js";
import { hydrate } from "solid-js/web";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";
import { Render } from "./Render";

let layoutReady = false;

const [ctx, setCtx] = createSignal<PageContextBuiltInClient>();

function render(
    pageContext: PageContextBuiltInClient<
        Component<{ routeParams?: Record<string, string> }>
    >
) {
    const content = document.getElementById("page-view");

    setCtx(pageContext);

    if (!layoutReady) {
        hydrate(() => <Render ctx={ctx} />, content!);
        layoutReady = true;
    }
}
