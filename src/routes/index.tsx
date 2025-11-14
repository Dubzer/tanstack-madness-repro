import { createFileRoute } from '@tanstack/react-router'
const code = `{
    <span class="hljs-string">&quot;description&quot;</span>: <span class="hljs-string">&quot;caps_lock to russian &lt;-&gt; english&quot;</span>,
    <span class="hljs-string">&quot;manipulators&quot;</span>: [
        {
            <span class="hljs-string">&quot;conditions&quot;</span>: [
                {
                    <span class="hljs-string">&quot;input_sources&quot;</span>: [{ <span class="hljs-string">&quot;input_source_id&quot;</span>: <span class="hljs-string">&quot;^com<span class="hljs-subst">\\\\</span>.apple<span class="hljs-subst">\\\\</span>.keylayout<span class="hljs-subst">\\\\</span>.RussianWin$&quot;</span> }],
                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input_source_if&quot;</span>
                }
            ],
            <span class="hljs-string">&quot;from&quot;</span>: { <span class="hljs-string">&quot;key_code&quot;</span>: <span class="hljs-string">&quot;caps_lock&quot;</span> },
            <span class="hljs-string">&quot;to&quot;</span>: [{ <span class="hljs-string">&quot;select_input_source&quot;</span>: { <span class="hljs-string">&quot;input_source_id&quot;</span>: <span class="hljs-string">&quot;^com<span class="hljs-subst">\\\\</span>.apple<span class="hljs-subst">\\\\</span>.keylayout<span class="hljs-subst">\\\\</span>.US$&quot;</span> } }],
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;basic&quot;</span>
        },
        {
            <span class="hljs-string">&quot;conditions&quot;</span>: [
                {
                    <span class="hljs-string">&quot;input_sources&quot;</span>: [{ <span class="hljs-string">&quot;input_source_id&quot;</span>: <span class="hljs-string">&quot;^com<span class="hljs-subst">\\\\</span>.apple<span class="hljs-subst">\\\\</span>.keylayout<span class="hljs-subst">\\\\</span>.US$&quot;</span> }],
                    <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input_source_if&quot;</span>
                }
            ],
            <span class="hljs-string">&quot;from&quot;</span>: { <span class="hljs-string">&quot;key_code&quot;</span>: <span class="hljs-string">&quot;caps_lock&quot;</span> },
            <span class="hljs-string">&quot;to&quot;</span>: [{ <span class="hljs-string">&quot;select_input_source&quot;</span>: { <span class="hljs-string">&quot;input_source_id&quot;</span>: <span class="hljs-string">&quot;^com<span class="hljs-subst">\\\\</span>.apple<span class="hljs-subst">\\\\</span>.keylayout<span class="hljs-subst">\\\\</span>.RussianWin$&quot;</span> } }],
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;basic&quot;</span>
        }
    ]
}`

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => code
})


function Home() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2" dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  )
}
