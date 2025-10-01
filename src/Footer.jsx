import React from 'react'
import { FaTimes } from 'react-icons/fa'
export const Footer = () => {
  return (
    <>
    <div className=''>
      <img src='/src/Group.svg' className='w-full'/>
    </div>
    <div>
      <img src='/src/logo.png' className='mx-auto md:w-[350px] w-[220px]'/>
    </div>
    <div className='text-white font-[DeliriumNCV] text-[5rem] text-center mb-10 hidden md:block'>
      <p>Contact Us</p>
    </div>
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] justify-center hidden md:flex w-full'>
      <div className='flex flex-col text-white border-r-4 border-t-4 border-b-2 border-[#88cdff84] p-16 font-[LexendDeca] w-full'>
      </div>
      <div className='w-full flex flex-col text-white border-r-4 border-t-4 border-b-2 border-[#88cdff84] px-20 py-10 text-[1.6rem] font-thin font-[LexendDeca]'>
        <div className='m-1 md:m-3'>
          <p>Amirthavarshini</p>
          <p className='whitespace-nowrap'>+91 99529 64049</p>
        </div>
        <div className='m-1 md:m-3'>
          <p>Amrutha</p>
          <p className='whitespace-nowrap'>+91 93619 71610</p>
        </div>
        <div className='m-1 md:m-3'>
          <p>Mukilan</p>
          <p className='whitespace-nowrap'>+91 93844 37698</p>
        </div>
      </div>
      <div className='w-full flex flex-col text-white border-r-4 border-t-4 border-b-2 border-[#88cdff84] px-20 py-10  text-[1.6rem] font-thin font-[LexendDeca]'>
        <div className='m-1 md:m-3'>
          <p>Rajesh</p>
          <p className='whitespace-nowrap'>+91 80724 37287</p>
        </div>
        <div className='m-1 md:m-3'>
          <p>Shanjay</p>
          <p className='whitespace-nowrap'>+91 96009 23014</p>
        </div>
      </div>
      <div className='w-full flex flex-col text-white border-r-4 border-t-4 border-b-2 border-[#88cdff84] px-20 py-10 text-[1.6rem] font-thin font-[LexendDeca]'>
        <div className='m-1 md:m-3'>
          <p>Sarveswaran</p>
          <p className='whitespace-nowrap'>+91 63697 25682</p>
        </div>
        <div className='m-1 md:m-3'>
          <p>Pranav Ram</p>
          <p className='whitespace-nowrap'>+91 75988 69566</p>
        </div>
      </div>
      <div className='w-full flex flex-col text-white border-t-4 border-b-2 border-[#88cdff84] p-16 text-2xl font-[LexendDeca]'></div>
    </div>
    <div className='hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr] w-full'>
      <div className='border-t-2 border-b-4 border-[#88cdff84] text-white font-[DeliriumNCV] text-[3rem] border-r-2 flex justify-center items-center'>FOLLOW US</div>
      <div className='border-t-2 border-b-4 border-l-2 border-r-2 border-[#88cdff84] flex justify-center items-center py-10'>
        <a href="https://x.com/kssastra?t=m1islXQ7hE6_ikcHkyEX2Q&s=09" target="_blank" rel="noreferrer">
        <svg width="51" height="51" viewBox="0 0 51 51" className="w-[43px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.6853 8.48928C46.6853 8.48928 45.1998 12.9458 42.441 15.7046C45.8364 36.9261 22.4927 52.4179 4.24219 40.3216C8.91093 40.5338 13.5797 39.0483 16.9751 36.0773C6.36434 32.8941 1.05896 20.3733 6.36434 10.6114C11.0331 16.129 18.2484 19.3123 25.4637 19.1001C23.5538 10.187 33.9523 5.09384 40.3188 11.0359C42.6532 11.0359 46.6853 8.48928 46.6853 8.48928Z" fill="white"/>
        </svg>
        </a>
      </div>
      <div className='border-t-2 border-b-4 border-l-2 border-r-2 border-[#88cdff84] flex justify-center items-center'>
        <a href="https://www.facebook.com/kssastra/ " target="_blank" rel="noreferrer">
        <svg width="52" height="55" viewBox="0 0 52 55" fill="none" className="w-[43px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 hover:scale-110" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.1423 4.52734H32.7754C29.961 4.52734 27.2619 5.71988 25.2719 7.8426C23.2818 9.96533 22.1638 12.8444 22.1638 15.8463V22.6377H15.7969V31.6929H22.1638V49.8034H30.6531V31.6929H37.02L39.1423 22.6377H30.6531V15.8463C30.6531 15.2459 30.8767 14.6701 31.2747 14.2456C31.6727 13.8211 32.2125 13.5825 32.7754 13.5825H39.1423V4.52734Z" fill="white"/>
        </svg>
        </a>
      </div>
      <div className='border-t-2 border-b-4 border-l-2 border-r-2 border-[#88cdff84] flex justify-center items-center'>
        <a href="https://youtube.com/@sastrafotohub?si=2Gjv9X-TgXj0VPtD" target="_blank" rel="noreferrer">
        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" className="w-[43px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 hover:scale-110" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.1643 41.4293C21.1492 41.4293 12.2092 40.9932 8.50232 40.121C6.97597 39.6849 5.88572 38.5946 5.44962 37.0683C4.79547 34.6697 4.35938 29.6546 4.35938 26.1658C4.35938 22.677 4.79547 17.6619 5.44962 15.2633C5.88572 13.737 6.97597 12.6467 8.50232 12.2106C12.2092 11.3384 21.1492 10.9023 26.1643 10.9023C31.1795 10.9023 40.1195 11.3384 43.8263 12.2106C45.3527 12.6467 46.4429 13.737 46.879 15.2633C47.5332 17.6619 47.9693 22.677 47.9693 26.1658C47.9693 29.6546 47.5332 34.6697 46.879 37.0683C46.4429 38.5946 45.3527 39.6849 43.8263 40.121C40.1195 40.9932 31.1795 41.4293 26.1643 41.4293Z" fill="white"/>
        <path d="M21.8047 32.708L32.7072 26.1665L21.8047 19.625V32.708Z" fill="black"/>
        </svg>
        </a>
      </div>
      <div className='border-t-2 border-b-4 border-l-2 border-r-2 border-[#88cdff84] flex justify-center items-center'>
        <a href="https://www.instagram.com/kuruksastra?igsh=c3VrYWEwdXgydTNj" target="_blank" rel="noreferrer">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-[43px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 hover:scale-110" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.2896 4.26953H14.9403C9.04483 4.26953 4.26562 9.04874 4.26562 14.9442V36.2935C4.26562 42.1889 9.04483 46.9681 14.9403 46.9681H36.2896C42.185 46.9681 46.9642 42.1889 46.9642 36.2935V14.9442C46.9642 9.04874 42.185 4.26953 36.2896 4.26953Z" fill="white"/>
        <path d="M34.159 24.2754C34.4224 26.0522 34.1189 27.8668 33.2917 29.4612C32.4644 31.0555 31.1554 32.3484 29.551 33.156C27.9465 33.9635 26.1283 34.2446 24.3549 33.9593C22.5815 33.6739 20.9432 32.8366 19.6731 31.5665C18.403 30.2964 17.5657 28.6581 17.2803 26.8847C16.995 25.1113 17.2761 23.2931 18.0836 21.6886C18.8912 20.0842 20.1841 18.7752 21.7785 17.948C23.3728 17.1207 25.1875 16.8172 26.9642 17.0807C28.7766 17.3494 30.4545 18.1939 31.7501 19.4895C33.0457 20.7851 33.8902 22.463 34.159 24.2754Z" stroke="black" stroke-width="2.81847" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.3594 13.877H37.3847" stroke="black" stroke-width="2.81847" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
      </div>
      <div className='border-t-2 border-b-4 border-l-2 border-r-2 border-[#88cdff84] flex justify-center items-center'>
        <a href="https://www.linkedin.com/company/kuruksastra/" target="_blank" rel="noreferrer">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-[43px] cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-12 hover:scale-110" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.1281 17.0664C37.5228 17.0664 40.7786 18.415 43.179 20.8154C45.5795 23.2159 46.928 26.4716 46.928 29.8664V44.7996H38.3947V29.8664C38.3947 28.7348 37.9452 27.6495 37.1451 26.8494C36.3449 26.0492 35.2597 25.5997 34.1281 25.5997C32.9965 25.5997 31.9113 26.0492 31.1111 26.8494C30.3109 27.6495 29.8614 28.7348 29.8614 29.8664V44.7996H21.3281V29.8664C21.3281 26.4716 22.6767 23.2159 25.0771 20.8154C27.4776 18.415 30.7333 17.0664 34.1281 17.0664Z" fill="white"/>
        <path d="M12.7989 19.1992H4.26562V44.7991H12.7989V19.1992Z" fill="white"/>
        <path d="M8.53228 12.8009C10.8887 12.8009 12.7989 10.8906 12.7989 8.53423C12.7989 6.17782 10.8887 4.26758 8.53228 4.26758C6.17587 4.26758 4.26562 6.17782 4.26562 8.53423C4.26562 10.8906 6.17587 12.8009 8.53228 12.8009Z" fill="white"/>
        </svg>
        </a>
      </div>
      <div className='border-t-2 border-l-2 border-b-4 border-[#88cdff84]'></div>
    </div>
    <div className='w-full hidden md:flex md:flex-row md:justify-between md:font-[LexendDeca] md:text-white p-7 text-[1.2rem]'>
      <div className=''>@2025</div>
      <div className=''>Made with ❤ by ACE X 300DPI</div>
    </div>
    <div className='md:hidden border-t-2 border-b-0 border-[#88cdff84] text-[#8eb7bd] font-[DeliriumNCV] text-[2rem] py-4 flex justify-center'>CORE COMMITTEE</div>
    <div className='flex flex-row justify-center md:hidden '>
      <div className='w-full flex flex-col text-white border-t-2 border-b-2 border-[#88cdff84] px-7 py-4 text-sm font-[LexendDeca]'>
        <div className='m-1 md:m-3 py-3 text-center'>
          <p>Amirthavarshini</p>
          <p className='text-[0.7rem]'>+91 99529 64049</p>
        </div>
        <div className='m-1 md:m-3 py-3 text-center'>
          <p>Amrutha</p>
          <p className='text-[0.7rem]'>+91 93619 71610</p>
        </div>
        <div className='m-1 md:m-3 py-3 text-center'>
          <p>Mukilan</p>
          <p className='text-[0.7rem]'>+91 93844 37698</p>
        </div>
      </div>
      <div className='w-full flex flex-col text-white border-l-2 border-t-2  border-b-2 border-[#88cdff84] px-7 py-4 text-sm font-[LexendDeca]'>
        <div className='m-1 md:m-3 py-3 text-center'>
          <p>Rajesh</p>
          <p className='text-[0.65rem]'>+91 80724 37287</p>
        </div>
        <div className='m-1 md:m-3 py-3 text-center'>
          <p>Shanjay</p>
          <p className='text-[0.65rem]'>+91 96009 23014</p>
        </div>
      </div>
    </div>
    <div className='md:hidden border-t-0 border-b-0 border-[#88cdff84] text-[#8eb7bd] font-[DeliriumNCV] text-[2rem] py-4 flex justify-center'>TECH SUPPORT</div>
    <div className='flex flex-row justify-center md:hidden'>
      <div className='w-full flex flex-col text-white md:border-t-2 border-t-2 border-b-2 border-[#88cdff84] px-7 py-4 text-sm font-[LexendDeca]'>
        <div className='m-1 md:m-3 py-2 text-center'>
          <p>Sarveswaran</p>
          <p className='text-[0.7rem]'>+91 63697 25682</p>
        </div>
      </div>
      <div className='w-full flex flex-col text-white border-l-2 md:border-t-2 border-t-2  border-b-2 border-[#88cdff84] px-7 py-4 text-sm font-[LexendDeca]'>
        <div className='m-1 md:m-3 py-2 text-center'>
          <p>Pranav Ram</p>
          <p className='text-[0.7rem]'>+91 75988 69566</p>
        </div>
      </div>
    </div>
    <div className='md:hidden border-t-0 border-b-2 border-[#88cdff84] text-[#8eb7bd] font-[DeliriumNCV] text-[2rem] py-4 flex justify-left pl-7'>FOLLOW US</div>
    <div className='md:hidden grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]'>
      <div className='border-[#88cdff84] border-r-2 border-b-2'></div>
      <div className='border-[#88cdff84] border-r-2 border-b-2 px-4 flex items-center justify-center'>
        <a href='https://x.com/kssastra?t=m1islXQ7hE6_ikcHkyEX2Q&s=09' target='_blank' rel='noreferrer'>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px]'>
          <path d="M46.6853 8.48928C46.6853 8.48928 45.1998 12.9458 42.441 15.7046C45.8364 36.9261 22.4927 52.4179 4.24219 40.3216C8.91093 40.5338 13.5797 39.0483 16.9751 36.0773C6.36434 32.8941 1.05896 20.3733 6.36434 10.6114C11.0331 16.129 18.2484 19.3123 25.4637 19.1001C23.5538 10.187 33.9523 5.09384 40.3188 11.0359C42.6532 11.0359 46.6853 8.48928 46.6853 8.48928Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div className='border-[#88cdff84] border-r-2 border-b-2 px-4 flex items-center justify-center'>
        <a href='https://www.facebook.com/kssastra/ ' target='_blank' rel='noreferrer'>
          <svg width="52" height="55" className="w-[20px]" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.1423 4.52734H32.7754C29.961 4.52734 27.2619 5.71988 25.2719 7.8426C23.2818 9.96533 22.1638 12.8444 22.1638 15.8463V22.6377H15.7969V31.6929H22.1638V49.8034H30.6531V31.6929H37.02L39.1423 22.6377H30.6531V15.8463C30.6531 15.2459 30.8767 14.6701 31.2747 14.2456C31.6727 13.8211 32.2125 13.5825 32.7754 13.5825H39.1423V4.52734Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div className='border-[#88cdff84] border-r-2 border-b-2 px-4 flex items-center justify-center'>
        <a href='https://youtube.com/@sastrafotohub?si=2Gjv9X-TgXj0VPtD' target='_blank' rel='noreferrer'>
          <svg width="53" height="53" className="w-[20px]" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.1643 41.4293C21.1492 41.4293 12.2092 40.9932 8.50232 40.121C6.97597 39.6849 5.88572 38.5946 5.44962 37.0683C4.79547 34.6697 4.35938 29.6546 4.35938 26.1658C4.35938 22.677 4.79547 17.6619 5.44962 15.2633C5.88572 13.737 6.97597 12.6467 8.50232 12.2106C12.2092 11.3384 21.1492 10.9023 26.1643 10.9023C31.1795 10.9023 40.1195 11.3384 43.8263 12.2106C45.3527 12.6467 46.4429 13.737 46.879 15.2633C47.5332 17.6619 47.9693 22.677 47.9693 26.1658C47.9693 29.6546 47.5332 34.6697 46.879 37.0683C46.4429 38.5946 45.3527 39.6849 43.8263 40.121C40.1195 40.9932 31.1795 41.4293 26.1643 41.4293Z" fill="white"/>
          <path d="M21.8047 32.708L32.7072 26.1665L21.8047 19.625V32.708Z" fill="black"/>
          </svg>
        </a>
      </div>
      <div className='border-[#88cdff84] border-r-2 border-b-2 px-4 flex items-center justify-center'>
        <a href='https://www.instagram.com/kuruksastra?igsh=c3VrYWEwdXgydTNj' target='_blank' rel='noreferrer'>
          <svg width="52" height="52" className="w-[20px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.2896 4.26953H14.9403C9.04483 4.26953 4.26562 9.04874 4.26562 14.9442V36.2935C4.26562 42.1889 9.04483 46.9681 14.9403 46.9681H36.2896C42.185 46.9681 46.9642 42.1889 46.9642 36.2935V14.9442C46.9642 9.04874 42.185 4.26953 36.2896 4.26953Z" fill="white"/>
          <path d="M34.159 24.2754C34.4224 26.0522 34.1189 27.8668 33.2917 29.4612C32.4644 31.0555 31.1554 32.3484 29.551 33.156C27.9465 33.9635 26.1283 34.2446 24.3549 33.9593C22.5815 33.6739 20.9432 32.8366 19.6731 31.5665C18.403 30.2964 17.5657 28.6581 17.2803 26.8847C16.995 25.1113 17.2761 23.2931 18.0836 21.6886C18.8912 20.0842 20.1841 18.7752 21.7785 17.948C23.3728 17.1207 25.1875 16.8172 26.9642 17.0807C28.7766 17.3494 30.4545 18.1939 31.7501 19.4895C33.0457 20.7851 33.8902 22.463 34.159 24.2754Z" stroke="black" stroke-width="2.81847" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M37.3594 13.877H37.3847" stroke="black" stroke-width="2.81847" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div className='border-[#88cdff84] border-r-2 border-b-2 px-4 flex items-center justify-center'>
        <a href='https://www.linkedin.com/company/kuruksastra/' target='_blank' rel='noreferrer'>
          <svg width="52" height="52" className="w-[20px]" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.1281 17.0664C37.5228 17.0664 40.7786 18.415 43.179 20.8154C45.5795 23.2159 46.928 26.4716 46.928 29.8664V44.7996H38.3947V29.8664C38.3947 28.7348 37.9452 27.6495 37.1451 26.8494C36.3449 26.0492 35.2597 25.5997 34.1281 25.5997C32.9965 25.5997 31.9113 26.0492 31.1111 26.8494C30.3109 27.6495 29.8614 28.7348 29.8614 29.8664V44.7996H21.3281V29.8664C21.3281 26.4716 22.6767 23.2159 25.0771 20.8154C27.4776 18.415 30.7333 17.0664 34.1281 17.0664Z" fill="white"/>
          <path d="M12.7989 19.1992H4.26562V44.7991H12.7989V19.1992Z" fill="white"/>
          <path d="M8.53228 12.8009C10.8887 12.8009 12.7989 10.8906 12.7989 8.53423C12.7989 6.17782 10.8887 4.26758 8.53228 4.26758C6.17587 4.26758 4.26562 6.17782 4.26562 8.53423C4.26562 10.8906 6.17587 12.8009 8.53228 12.8009Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div className='border-[#88cdff84] border-b-2'></div>
    </div>
    <div className='flex flex-row justify-between font-[LexendDeca] text-white text-[0.7rem] py-8 px-2 font-thin md:hidden'>
      <p className=''>@2025</p>
      <p className=''>Made with ❤ by ACE X 300DPI</p>
    </div>
    </>
  )
}
