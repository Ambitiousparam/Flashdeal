import { AiOutlineEnter } from "react-icons/ai";
import { linkIcon } from "../assets";
import { useState } from "react";

const Demo = () => {
  const [article,setArticle] = useState({
    url:'',
    summary:''
  })
  const handleSubmit = async(e)=>{
    alert("submitted")
  }
  return (
    
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div className="flex flex-col w-full gap-2" >
        <form
          className="relative flex justify-center items-center"
          onSubmit={() => {handleSubmit}}
        >
          <img
            src={linkIcon}
            alt="link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            required
            onChange={() => {}}
            className="url_input peer"
          />
          <button 
          type ="submit"
          className="submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700"
          >
             <AiOutlineEnter />


          </button>
        </form>
        {/*Browse Url history */}

      </div>
      {/*Display results */}
    </section>
  );
};

export default Demo;
