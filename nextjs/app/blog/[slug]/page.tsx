export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  // **You typed this manually in the URL (/blog/static-typing). It's just the dynamic value of the [slug] part. It could be anything — for example:/blog/hello-world → { slug: 'hello-world' }
  const { slug } = await params
  return <div>My Post: {slug}</div>  
}