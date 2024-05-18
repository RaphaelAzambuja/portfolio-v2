'use client'

import { SlArrowUp } from "react-icons/sl";
import style from "./scrollToTopBtn.module.scss";

export default function ScrollToTopBtn (){
  const ScrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  };

  return (
    <>
		<button className={style.button} onClick={ScrollToTop}>
			<SlArrowUp />
		</button>
    </>
  )
}