// if '404' name is not working then rename to 'not-found'
import Link from 'next/link'

const notFound = () => {
  return (
    <div className='flex justify-center h-screen flex-col items-center'>
      <div className='text-2xl'>This Page Not Found</div>
      <Link href='/' className='font-bold text-blue-700 text-lg'>Go to Home Page</Link>
    </div>
  )
}

export default notFound

