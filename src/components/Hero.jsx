import React from "react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src='/evil.png' alt='Evil Logo' className='w-10 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Isaacxavierlee", "_blank")
          }
          className='black_btn flex items-center'
        >
          <FaGithub className='mr-2' />
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
