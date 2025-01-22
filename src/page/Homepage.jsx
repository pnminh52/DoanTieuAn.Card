import React from "react";
import { useState } from "react";
const translate = (key, language) => {
  const translations = {
    "Đoàn Tiểu Ân": {
      EN: "Doan Tieu An",
      VN: "Đoàn Tiểu Ân",
    },
    "Freelance artist from Vietnam": {
      EN: "Freelance artist from Vietnam",
      VN: "Nghệ sĩ tự do đến từ Việt Nam",
    },
    "You can contact me through:": {
      EN: "You can contact me through:",
      VN: "Bạn có thể liên hệ với tôi thông qua:",
    }
  };

  return translations[key]?.[language] || key;
};
const Homepage = () => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "VN" ? "EN" : "VN"));
  };
  return (
    <div>
      <div className="bg-custom-gradient h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-10 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <div className="rounded-t-lg h-32 bg-[white] w-[380px]">
           
            </div>
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-2 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center w-full h-full"
              src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/471971118_1657780281830168_5766882195636520529_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH9SeUMWAbu_NsaovD6oF7DAPICDM651SUA8gIMzrnVJQ1pswJ9JFV3loy6448yRlE7pJ0ZIh1C7fY6KvdBthAc&_nc_ohc=84rHPXbR3GIQ7kNvgE-bt2r&_nc_oc=AdjOnVxU_mHlJqPE82yXrAsdVsAWEK_aOxZETkyl_GHL0f8AQmqmwyQBpXIl92Uey2Q&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=A59Gq9V-5oPoku8e5q8ubi3&oh=00_AYCFXko0YF5hhgFAeI9UZX57uk2uhzoVWmF8Xs5SzUrM8A&oe=6796BEA7"
              alt=""
            />
          </div>
          
          <div className="text-center mt-2">
            <h2 className="font-lora font-semibold mb-0">{translate("Đoàn Tiểu Ân", language)}</h2>
            <p className="text-gray-500">{translate("Freelance artist from Vietnam", language)}</p>
          </div>
          {/* <div className="mt-10">
          <h2 className="text-center  font-lora ">{translate("You can contact me through:", language)}</h2>
          </div> */}
          <div className=" flex mt-10 justify-center items-center text-center">

      
              <a href="https://www.facebook.com/doantieuan">
              <svg
                className="w-[45px] h-[45px]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="url(#paint0_linear_87_7208)"
                  ></circle>{" "}
                  <path
                    d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                    fill="white"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_87_7208"
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="29.917"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#18ACFE"></stop>{" "}
                      <stop offset="1" stop-color="#0163E0"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
              </a>
         
          </div>
          <div className="flex justify-center mt-8">
          <button
              onClick={toggleLanguage}
              className=" 
              w-6 h-6 text-xs  ml-1 mt-1 text-black border border-black rounded-full "
            >
              {language === "VN" ? "EN" : "VN"}
            </button>
          </div>
          <div className="rounded-b-lg h-16 overflow-hidden">
            <div className="rounded-b-lg bg-[white] w-[380px]">
              <p className="mt-7 text-center text-gray-400">Elyz.thedev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
