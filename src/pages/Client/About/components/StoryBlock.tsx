import { Slider } from "@/components/ui/slider"

export const StoryBlock = () => {
  return (
    <div className="w-screen h-full flex flex-col bg-purple-700 text-white font-semibold">
      <div className="flex overflow-x-scroll">
        <div className="flex flex-none items-center justify-center h-screen w-full text-white odd:bg-[#111] even:bg-[#000]">
          <h1 className="text-[5em]">Page 1</h1>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
        </div>
        <div className="flex flex-none items-center justify-center h-screen w-full text-white odd:bg-[#111] even:bg-[#000]">
          <h1 className="text-[5em]">Page 2</h1>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
        </div>
        <div className="flex flex-none items-center justify-center h-screen w-full text-white odd:bg-[#111] even:bg-[#000]">
          <h1 className="text-[5em]">Page 3</h1>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
          <p className="mt-[30px] leading-7 w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
        </div>
      </div>
      <div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  )
}