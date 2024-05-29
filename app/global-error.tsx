'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <body className='size-full flex items-center justify-center'>
        <h2 className='text-2xl '>Algo deu errado</h2>
        <button onClick={() => reset()}>Tentar novamente</button>
      </body>
    </>
  )
}