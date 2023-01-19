import React from 'react';

import img1 from '../../assets/a1.jpg'
import img2 from '../../assets/a2.jpg'
import img3 from '../../assets/a3.jpg'
import img4 from '../../assets/a4.jpg'
import img10 from '../../assets/d1.jpg'
import imgU from '../../assets/u-1.png'
import imge from '../../assets/e2.jpg'

import { GoLocation } from 'react-icons/go';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

import { BsStarFill } from 'react-icons/bs';
import { BsBagCheck, BsInstagram } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsBookmark } from 'react-icons/bs';

import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaPinterestP } from 'react-icons/fa';

const EmployerDetails = () => {
    return (
        <section>
            <div className=' bg-slate-50 rounded-md p-10'>
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={imge} alt=''></img>

                        <div className=' flex-col'>
                            <h1 className='text-2xl flex items-center'>Udamy <span className=' text-sm text-green-500 ml-4'>Featured</ span>

                            </h1>
                            <div className='flex gap-5'>
                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Advertising

                                </span>
                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                </span>
                                <span className='flex items-center gap-2'> <BiPhoneCall></BiPhoneCall>  123 456 342
                                </span>
                                <span className='flex items-center gap-2'><HiOutlineMail></HiOutlineMail> udamy@apus.com
                                </span>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div>
                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Open Job - 1</button>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div>

                        <div className='flex gap-4 mt-3'>
                            <button className=' text-white rounded-xl  py-5 bg-blue-500 px-10 hover:bg-blue-600'>Private Message</button>
                            <button className=' text-blue-400 bg-blue-200 px-4 rounded-md  '><BsBookmark></BsBookmark></button>

                        </div>
                    </div>
                </div>
            </div>
            <section className='mt-10 p-10 '>

                <div className=' grid  lg:grid-rows-3 grid-flow-col gap-4 '>
                    <div className=' row-span-2 col-span-2'>
                        <div>
                            <h1 className='text-xl font-semibold mb-5'>
                                About Company
                            </h1>
                            <span className=' '>
                                Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider.
                                <br />
                                <br />

                                Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.
                                <br />
                                <br />


                                Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider of financial analysis software and services.
                            </span>
                        </div>


                        <div className='mt-10 flex gap-3 py-5'>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>Share this post</h1>
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl bg-blue-600 '>
                                    <p><BsFacebook /></p>
                                    <p>facebook</p>
                                </div>
                                <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl  bg-purple-500 '>
                                    <p> <BsTwitter /> </p>
                                    <p> Twitter</p>
                                </div>
                                <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl bg-red-600 '>
                                    <p><FaPinterestP /></p>
                                    <p> Pinterest</p>
                                </div>



                            </div>
                        </div>
                        <div className='mt-10  '>
                            <div className=''>
                                <h1 className='text-xl font-semibold mb-5'>Photos</h1>
                            </div>
                            <div className='grid grid-cols-4 gap-3 '>
                                <img src={img1} alt='' className=' rounded-xl'></img>
                                <img src={img2} alt='' className=' rounded-xl' ></img>
                                <img src={img3} alt='' className=' rounded-xl' ></img>
                                <img src={img4} alt='' className=' rounded-xl' ></img>
                            </div>
                        </div>
                        <div className='mt-10  '>
                            <div className=''>
                                <h1 className='text-xl font-semibold mb-5'>Open Position</h1>
                            </div>
                            <div className=' rounded-md border py-6 px-5 '>
                                <div className='flex justify-between '>
                                    <div className='flex gap-4'>
                                        <img src={img10} alt='' className=' w-16 h-16'></img>

                                        <div className=' flex-col'>
                                            <h1 className='text-2xl flex items-center'>Restaurant Team Member
                                                <span className='text-sm text-green-600 ml-2'>Featured</span>
                                            </h1>
                                            <div className='flex gap-5'>
                                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Design,
                                                </span>
                                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                                </span>

                                                <span className='flex items-center gap-2'><GiTakeMyMoney></GiTakeMyMoney> $350 - $400 / month
                                                </span>
                                            </div>
                                            <div className='flex gap-4 mt-3'>
                                                <div>
                                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Internship</button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>



                                    <div>

                                        <div className='flex gap-4'>

                                            <button className=' text-blue-400  px-4 rounded-md  '><BsBookmark></BsBookmark></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div className='mt-9'>
                           <h1 className=' font-semibold text-xl'>2 Comments</h1>
                            <div>
                                <div className=' rounded-md  py-6 px-5 '>
                                    <div className='flex justify-between '>
                                        <div className='flex gap-4'>
                                            <img src={imgU} alt='' className=' w-16 h-16 rounded-full'></img>

                                            <div className=' flex-col'>
                                                <h1 className='text-2xl flex items-center'>
                                                    Admin

                                                </h1>
                                                <div className='flex gap-5'>
                                                    <span className='flex items-center gap-2'> March 27, 2021
                                                    </span>



                                                </div>
                                                <div className='flex gap-4 mt-3'>
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>



                                        <div>

                                            <div className='flex gap-4 items-center'>

                                                <p className=' text-white px-1 py-1  bg-orange-600 rounded-full  '>4.0</ p>
                                                <div className='flex gap-2'>
                                                    <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p>
                                                    <p className=' text-gray-600 '>  <BsStarFill></BsStarFill></ p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className=' rounded-md  py-6 px-5 '>
                                    <div className='flex justify-between '>
                                        <div className='flex gap-4'>
                                            <img src={imgU} alt='' className=' w-16 h-16 rounded-full'></img>

                                            <div className=' flex-col'>
                                                <h1 className='text-2xl flex items-center'>
                                                    Admin

                                                </h1>
                                                <div className='flex gap-5'>
                                                    <span className='flex items-center gap-2'> March 27, 2021
                                                    </span>



                                                </div>
                                                <div className='flex gap-4 mt-3'>
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>



                                        <div>

                                            <div className='flex gap-4 items-center'>

                                                <p className=' text-white px-1 py-1  bg-orange-600 rounded-full  '>4.0</ p>
                                                <div className='flex gap-2'>
                                                    <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p> <p className=' text-orange-600 '>  <BsStarFill></BsStarFill></ p>
                                                    <p className=' text-gray-600 '>  <BsStarFill></BsStarFill></ p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>

                            <div className=' p-5 border-2'>
                                <p className='mb-3  font-semibold'>Add a review</p>
                                <div className='flex gap-4 items-center'>


                                <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
                                    <p className='  px-1 py-1    '>
                                        Your Rating</ p>



                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>

                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered w-full " />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>

                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered  " />
                                    <label className="label">

                                    </label>
                                </div>

                                <div className='flex'>
                               <input type='checkbox' />
<span className='text=sm p-5'> Save my name, email, and website in this browser for the next time I comment.</span>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Review</span>

                                    </label>
                                    <textarea className="textarea textarea-bordered h-32" placeholder="White comment"></textarea>
                                    <label className="label">

                                    </label>
                                </div>
                                <div className='mt-3 '>
                               <button className=' px-48 rounded-lg text-white bg-blue-600 py-4'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  row-span-3   '>


                        <div className='mt-10 bg-slate-100 rounded-xl p-4 w-72'>
                            <div className='flex gap-3'>


                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>categories:</p>
                                <p>Developer</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>Founded Date:</p>
                                <p>2005</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>Location:</p>
                                <p>New York</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>Phone Number:</p>
                                <p>123 444 332
                                </p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>Email:</p>
                                <p>employer@apus.com
                                </p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className=' font-semibold'>Socials:</p>
                                <p className='flex gap-2'>
                                    <FaFacebook />
                                    <BsTwitter></BsTwitter>
                                    <FaLinkedin></FaLinkedin>
                                    <BsInstagram></BsInstagram>
                                </p>
                            </div>
                            <div className='w-full mt-5 border text-center px-4 py-4 bg-blue-600 rounded-xl '>
                                <button className=' text-white '>HUNT DEAR </button>
                            </div>
                        </div>

                        <div className='mt-10 bg-slate-100 rounded-xl p-4 w-72'>
                            <div>
                                <h1 className=' text-xl font-semibold'>Contact   Udamy
                                </h1>
                            </div>
                            <div className='flex gap-3'>


                            </div>
                            <div className='flex justify-between mt-5'>
                                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                            </div>
                            <div className='flex justify-between mt-5'>
                                <input type="email" placeholder="E-mail" className="input w-full max-w-xs" />
                            </div>
                            <div className='flex justify-between mt-5'>
                                <input type="text" placeholder="Phone" className="input hover:border-blue-500 w-full  max-w-xs" />
                            </div>
                            <div className='flex justify-between mt-5'>
                                <textarea className="textarea w-full max-w-xs" placeholder="message"></textarea>
                            </div>

                            <div className='w-full mt-5 border text-center px-4 py-4 bg-blue-600 rounded-xl '>
                                <button className=' text-white '>Send Message </button>
                            </div>
                            <div className='w-full mt-5 text-center '>
                                <button className=' text-gray-700  hover:text-blue-500'>Private Message </button>
                            </div>
                        </div>

                    </div>


                </div>

            </section>
        </section>
    );
};

export default EmployerDetails;