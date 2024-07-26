'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({error, reset}) {
  // console.log(error);
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error)
  }, [error])


  const router = useRouter();
  const onClick = () => {
    router.push("/")
  }

  return (
    <div>
      <h2>찾을 수 없는 페이지</h2>
      <button
        onClick={() => reset()}
      >
        Try again
      </button>
      <button onClick={onClick}>홈으로</button>
    </div>
  )
}
