import { FaGithub } from "react-icons/fa";
import StandardButton from "../StandardButton";

export default function GitHubButton({link}: {link: string}) {

  return (
    <>
      <StandardButton icon={<FaGithub />} text="Repositório" link={link}/>
    </>
  )
}
