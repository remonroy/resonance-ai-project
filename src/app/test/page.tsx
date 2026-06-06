import { prisma } from '@/lib/db'
import React from 'react'

export default async function TestPage() {
    const voice = await prisma.voice.findMany()

  return (
    <div>
        <h1>
            Voice ({voice?.length})
        </h1>
        <ul className='space-y-2'>
            {voice?.map((v) => (
                <li key={v.id}>
                    {v.name} - {v.variant}
                </li>
            ))}
        </ul>
    </div>
  )
}
