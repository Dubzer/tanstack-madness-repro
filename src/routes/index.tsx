import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => `$&quot`
})


function Home() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2" dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  )
}
