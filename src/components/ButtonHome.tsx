import { MdOutlineArrowBackIosNew } from 'react-icons/md'

export default function ButtonHome() {
  const handleHomeClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <button className='bg-gray-600 p-4 rounded-full opacity-30 hover:opacity-60 fixed bottom-3 right-8'
      onClick={handleHomeClick}
    >
      <MdOutlineArrowBackIosNew size={30} className="rotate-90" color='white' />
    </button>
  )
}
