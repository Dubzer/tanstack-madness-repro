import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const code = `{
    "description": "caps_lock to russian <-> english",
    "manipulators": [
        {
            "conditions": [
                {
                    "input_sources": [{ "input_source_id": "^com\\\\.apple\\\\.keylayout\\\\.RussianWin$" }],
                    "type": "input_source_if"
                }
            ],
            "from": { "key_code": "caps_lock" },
            "to": [{ "select_input_source": { "input_source_id": "^com\\\\.apple\\\\.keylayout\\\\.US$" } }],
            "type": "basic"
        },
        {
            "conditions": [
                {
                    "input_sources": [{ "input_source_id": "^com\\\\.apple\\\\.keylayout\\\\.US$" }],
                    "type": "input_source_if"
                }
            ],
            "from": { "key_code": "caps_lock" },
            "to": [{ "select_input_source": { "input_source_id": "^com\\\\.apple\\\\.keylayout\\\\.RussianWin$" } }],
            "type": "basic"
        }
    ]
}`

function Home() {
  return (
    <div className="p-2" dangerouslySetInnerHTML={{ __html: code }}>
    </div>
  )
}
