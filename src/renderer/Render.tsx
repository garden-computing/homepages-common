import { Accessor } from "solid-js";
import { Dynamic } from "solid-js/web";
import { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";
import { PageContextBuiltIn } from "vite-plugin-ssr/dist/esm/shared/types";
import "@fontsource/inter/variable.css"
import "@fontsource/manrope/variable.css"
import "../index.css"

export function Render(props: {ctx: Accessor<PageContextBuiltIn | PageContextBuiltInClient | undefined>}) {
    return (
        <Dynamic component={props.ctx()?.Page} routeParams={props.ctx()?.routeParams} />
    );
}
