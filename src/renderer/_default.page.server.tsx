import { generateHydrationScript, renderToStream } from "solid-js/web";
import {
    escapeInject,
    dangerouslySkipEscape,
    stampPipe,
    PageContextBuiltIn,
} from "vite-plugin-ssr";
import { Component } from "solid-js";
import { Render } from "./Render";

export { render };
export { passToClient };

const passToClient = ["routeParams"];

function render(
    pageContext: PageContextBuiltIn<
        Component<{ routeParams?: Record<string, string> }>
    >
) {
    const { pipe } = renderToStream(() =>
        <Render ctx={() => pageContext} />
    );
    stampPipe(pipe, "node-stream");

    const title =
        typeof pageContext.exports.title == "function"
            ? pageContext.exports.title(pageContext.routeParams)
            : pageContext.exports.title;

    const description =
        pageContext.exports.description || "";

    const iconUrl = pageContext.exports.icon;

    return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link href="${iconUrl}" rel="shortcut icon" type="image/x-icon" />
        <link href="${iconUrl}" rel="apple-touch-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${pipe}</div>
      </body>
    </html>`;
}
