
import{logo} from "../assets"

const Hero = () => {
  return (
    <>
     <header className="w-full flex justify-center items-center flex-col">
  <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
    <p className="text-3xl font-bold text-orange-450">Quick Read</p> 
    <button
      type="button"
      onClick={() => window.open("https://github.com/ambitiousparam/quickread")}
      className="black_btn"
    >
      Github
    </button>
        </nav>
        <h1 className="head_text">
          Summarize Article with <br className=" max-md:hidden"/> 
          <span className="orange_gradient">
          OpenAi Gpt-4</span>
        </h1>
        <h2 className="desc">
          Simplify your reading with Summarize,an open-source article summarizer that transforms lengthy articles into clear and concise summaries

        </h2>
      </header>
      
    </>
  );
};

export default Hero;
