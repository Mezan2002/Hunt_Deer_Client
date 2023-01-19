import React from 'react';
import img from '../../assets/y2.jpg'
import img1 from '../../assets/a1.jpg'
import img2 from '../../assets/a2.jpg'
import img3 from '../../assets/a3.jpg'
import img4 from '../../assets/a4.jpg'
import img10 from '../../assets/d1.jpg'
import img11 from '../../assets/d2.jpg'

import { GoLocation } from 'react-icons/go';
import { IoMdTime } from 'react-icons/io';
import { BsBagCheck, BsInstagram } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsBookmark } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaPinterestP } from 'react-icons/fa';

const Details = () => {
    return (
        <section>
            <div className=' bg-slate-50 rounded-md p-10'>
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={img} alt=''></img>

                        <div className=' flex-col'>
                            <h1 className='text-2xl flex items-center'>Junior Graphic Designer (Web) <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 text-green-600">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
</svg>

</h1>
                            <div className='flex gap-5'>
                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Design, Development
                                </span>
                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                </span>
                                <span className='flex items-center gap-2'> <IoMdTime></IoMdTime> June 20, 2021
                                </span>
                                <span className='flex items-center gap-2'><GiTakeMyMoney></GiTakeMyMoney> $150 - $180 / week
                                </span>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div>
                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Full time</button>
                                </div>
                                <div>
                                    <button className=' bg-amber-200 rounded-full px-3 text-md text-orange-500'> Urgent</button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div>
                        <h1>Application ends: <span className=' text-red-500'>May 18, 2026</span></h1>
                        <div className='flex gap-4 mt-3'>
                            <button className=' text-white rounded-xl  py-5 bg-blue-500 px-10 hover:bg-blue-600'>Apply Now</button>
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
                                Job Description
                            </h1>
                            <span className=' '>
                                As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
                            </span>
                        </div>
                        <div className='mt-6'>
                            <h1 className='text-xl font-semibold mb-5'>
                            Key Responsibilities
                            </h1>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Work with BAs, product managers and tech teams to lead the Product Design
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Accurately estimate design tickets during planning sessions.micro interaction specifications and pattern libraries.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, 
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> Present your work to the wider business at Show & Tell sessions.
                            </span>
                            <br/>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-xl font-semibold mb-5 '>
                            Skill & Experience
                            </h1>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> You have at least 3 years’ experience working as a Product Designer.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/> You have experience using Sketch and InVision or Framer X
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/>You have some previous experience working in an agile environment – Think two-week sprints.
                            </span>
                            <br/>
                            <span className='flex gap-2  '>
                           <GoPrimitiveDot/>You are familiar using Jira and Confluence in your workflow
                            </span>
                        </div>
                        <div className='mt-10 flex gap-3 py-5'>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>Share this post</h1>
                            </div>
                            <div className='flex gap-3'>
                               <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl bg-blue-600 '>
                             <p><BsFacebook/></p>
                              <p>facebook</p>
                               </div>
                               <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl  bg-purple-500 '>
                             <p> <BsTwitter/> </p>
                              <p> Twitter</p>
                               </div>
                               <div className='flex px-5 py-2 text-white gap-2 items-center rounded-xl bg-red-600 '>
                             <p><FaPinterestP/></p>
                              <p> Pinterest</p>
                               </div>

                           
                               
                            </div>
                        </div>
                        <div className='mt-10  '>
                            <div className=''>
                                <h1 className='text-xl font-semibold mb-5'>Photos</h1>
                            </div>
                            <div className='grid grid-cols-4 gap-3 '>
                                <img src={img1} alt=''  className=' rounded-xl'></img>
                                <img src={img2} alt='' className=' rounded-xl' ></img>
                                <img src={img3} alt='' className=' rounded-xl' ></img>
                                <img src={img4} alt='' className=' rounded-xl' ></img>
                            </div>
                        </div>
                        <div className='mt-10  '>
                            <div className=''>
                                <h1 className='text-xl font-semibold mb-5'>Related Jobs</h1>
                            </div>
                            <div className=' rounded-md border py-6 px-5 '>
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={img10} alt='' className=' w-16 h-16'></img>

                        <div className=' flex-col'>
                            <h1 className='text-2xl flex items-center'>Finance Manager & Health 
                            <span className='text-sm text-green-600 ml-2'>Featured</span>
</h1>
                            <div className='flex gap-5'>
                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Design, 
                                </span>
                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                </span>
                                <span className='flex items-center gap-2'> <IoMdTime></IoMdTime> June 20, 2021
                                </span>
                                <span className='flex items-center gap-2'><GiTakeMyMoney></GiTakeMyMoney> $150 - $180 / week
                                </span>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div>
                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Full time</button>
                                </div>
                                <div>
                                    <button className=' bg-amber-200 rounded-full px-3 text-md text-orange-500'> Urgent</button>
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
                            <div className=' rounded-md border py-6 px-5  mt-5'>
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={img11} alt='' className=' w-16 h-16'></img>

                        <div className=' flex-col'>
                            <h1 className='text-2xl flex items-center'>General Ledger Accountant
 
                            <span className='text-sm text-green-600 ml-2'>Featured</span>
</h1>
                            <div className='flex gap-5'>
                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Design, 
                                </span>
                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                </span>
                                <span className='flex items-center gap-2'> <IoMdTime></IoMdTime> June 20, 2021
                                </span>
                                <span className='flex items-center gap-2'><GiTakeMyMoney></GiTakeMyMoney> $150 - $180 / week
                                </span>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div>
                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Full time</button>
                                </div>
                                <div>
                                    <button className=' bg-amber-200 rounded-full px-3 text-md text-orange-500'> Urgent</button>
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
                            <div className=' rounded-md border py-6 px-5 mt-5 '>
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <img src={img10} alt='' className=' w-16 h-16'></img>

                        <div className=' flex-col'>
                            <h1 className='text-2xl flex items-center'>Data Privacy Support 
                            <span className='text-sm text-green-600 ml-2'>Featured</span>
</h1>
                            <div className='flex gap-5'>
                                <span className='flex items-center gap-2'><BsBagCheck></BsBagCheck> Design, 
                                </span>
                                <span className='flex items-center gap-2'><GoLocation></GoLocation> New York
                                </span>
                                <span className='flex items-center gap-2'> <IoMdTime></IoMdTime> June 20, 2021
                                </span>
                                <span className='flex items-center gap-2'><GiTakeMyMoney></GiTakeMyMoney> $150 - $180 / week
                                </span>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <div>
                                    <button className=' bg-blue-300 rounded-full px-3  text-cyan-700 text-md'>Full time</button>
                                </div>
                                <div>
                                    <button className=' bg-amber-200 rounded-full px-3 text-md text-orange-500'> Urgent</button>
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
                        </div>
                    </div>
                    <div className='  row-span-3   '>
                        <div className=' bg-slate-100 rounded-xl py-5  w-72'>
                            <h1 className='text-xl font-semibold px-6'>
                                Job Overview
                            </h1>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Date Posted
                                    </h2>
                                    <div className=''>
                                        <h2 className=' text-sm'>June 20, 2021
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>

                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Location
                                    </h2>
                                    <div className=''>
                                        <h2 className='text-sm'>New York
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Offered Salary:
                                    </h2>
                                    <div className=''>
                                        <h2 className='text-sm'>$150 - $180 / week
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>


                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Expiration date
                                    </h2>
                                    <div className=''>
                                        <h2 className='text-sm'>June 20, 2021
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>

                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Experience
                                    </h2>
                                    <div className=' text-sm'>
                                        <h2>4 Year
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>
                                        Gender
                                    </h2>
                                    <div className=' text-sm'>
                                        <h2>Both
                                        </h2>
                                    </div>
                                </div>

                            </div>
                            <div className='flex mt-5'>
                                <div className='px-5'>
                                    <p className=' font-semibold   '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

                                    </p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold'>Qualification
                                    </h2>
                                    <div className=' '>
                                        <h2 className='text-sm'>June Bachelor Degree
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='mt-10 bg-slate-100 rounded-xl p-6 w-72'>
                            <h1 className='text-xl font-semibold'>
                            Job Skills
                            </h1>
                            <div className='grid grid-cols-3  mt-3 r'>
                              <div className=''>
                                <button className=' rounded-md  px-4 py-2 border- bg-white hover:bg-slate-900 hover:text-white '>App</button>
                              </div>
                              <div>
                              <button className='rounded-md px-4  py-2 border- bg-white hover:bg-slate-900 hover:text-white'>Jobs</button>
                              </div>
                              <div>
                              <button className=' rounded-md px-4 py-2 border- bg-white hover:bg-slate-900 hover:text-white'>Superio</button>
                              </div>
                              <br/>
                             
                            </div>
                            <div>
                              <button className='rounded-md px-5 py-2 border- bg-white hover:bg-slate-900 hover:text-white'>Support</button>
                              </div>
                        </div>
                        <div className='mt-10 bg-slate-100 rounded-xl p-4 w-72'>
                            <div className='flex gap-3'>
                                <div >
                                    <img src={img} alt=' ' className='w-56' ></img>
                                </div>
                                <div className='w-96'>
                                   <h1 className='text-xl font-semibold '>Employer</h1>
                                   <span className=' text-sm '>View Company Profile</span>
                                </div>
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
                                    <FaFacebook/>
                                    <BsTwitter></BsTwitter>
                                    <FaLinkedin></FaLinkedin>
                                    <BsInstagram></BsInstagram>
                                 </p>
                            </div>
                            <div className='w-full mt-5 border text-center px-4 py-4 bg-blue-300 rounded-xl '>
                                <button className=' text-blue-700 '>HUNT DEAR </button>
                            </div>
                        </div>

                    </div>


                </div>
                
            </section>
        </section>
    );
};

export default Details;