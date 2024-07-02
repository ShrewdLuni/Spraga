import { Layout } from "../../components/Layout"
import { StoryBlock } from "./components/StoryBlock"

export const About = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-screen h-auto mt-32  px-10 py-20">
        <div className="flex flex-row justify-center items-center my-20">
          <p className="w-[45%] text-center text-9xl font-semibold">Our Philosophy</p>
          <p className="w-[25%] text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
        </div>
        <div className="flex flex-col gap-y-6 justify-center items-center my-20">
          <p className="w-[50%] text-center text-5xl font-semibold">Diversity and Inclusivity</p>
          <p className="w-[50%] text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nisi, malesuada non ante sed, bibendum bibendum urna. In nec faucibus leo. Fusce sed nisi id ante imperdiet vehicula at quis metus. Praesent in tellus maximus eros convallis tristique a non justo. Maecenas pellentesque accumsan pulvinar. Aliquam vel dictum elit, et hendrerit erat. Nunc mi magna, finibus sed aliquam vitae, condimentum ut purus. Sed in dui varius, consectetur nunc quis, rutrum lorem.</p>
        </div>
      </div>
      <StoryBlock/>
    </Layout>
  )
}
