import { Layout } from "../../components/Layout"
import { AboutInfo } from "./components/AboutInfo"
import { StoryBlock } from "./components/StoryBlock"

export const About = () => {
  return (
    <Layout>
      <AboutInfo/>
      <StoryBlock/>
    </Layout>
  )
}
