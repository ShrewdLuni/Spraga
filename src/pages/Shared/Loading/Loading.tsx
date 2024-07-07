export const Loading = () => {
  return (
    <div className="flex h-screen bg-[#222] text-white items-center justify-center">
      <div className="flex w-[200px] h-[200px] border-solid border-8 border-white rounded-full justify-center items-center relative text-xl uppercase font-semibold overflow-hidden
      before:absolute before:w-[400px] before:h-[400px] before:bg-blue-700 before:left-1/2 before:-translate-x-2/4 before:rounded-[40%] before:animate-fill">
        <p className="z-50">50%</p>
      </div>
    </div>
  )
}