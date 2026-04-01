import './App.css'
import cartImg from "../assets/products/shopping-cart.png";
import bannerImg from "../assets/banner.png";
import { useState } from "react";
import Models from "./components/Models"

  function App() {
    const [selectedProducts,setProductsType]= useState("available");
    console.log(selectedProducts,"selectedProducts");

  const getModels = async ()=>{
    const res= await fetch("/models.json");
    const data=await res.json();
    return data;
  };
  const modelPromise=getModels();
  return (
    <>

    {/* Navbar start  */}
   <div className="navbar bg-base-100  container mx-auto">
  <div className="navbar-start">
    <a className="text-3xl font-bold text-[#4F39F6]">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      
    </ul>
  </div>
  <div className="navbar-end gap-3 ">
    <img src={cartImg} alt="cart"></img>
    <a >Login</a>
    <a className="btn bg-[#4F39F6] text-white  rounded-4xl ">Get Started</a>
  </div>
</div>

  {/* banner part start  */}

  <div className=" container mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerImg} alt="banner"></img>
    <div>
      <div className="badge badge-soft badge accent text-[#4F39F6]">New: AI-Powered Tools Available</div>
      <h1 className="text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-[#627382]">
       Access premium AI tools, design assets, templates, and productivity<br></br>
       software—all in one place. Start creating faster today.<br></br>
       Explore Products
      </p>
      <div className="gap-3">
      <button className="btn btn-primary rounded-4xl text-white ">Explore Products</button>
      <button className="btn btn-outline border-[#4F39F6]  rounded-4xl"><span ><img src="https://i.ibb.co.com/ZzpD7pXf/Play.webp"></img></span> Watch Demo</button>
      </div>
    </div>
  </div>
</div>

{/* stats section start  */}

    <div className='w-full my-5'>
    <div className="flex justify-center gap-30  bg-[#4F39F6]">
  <div>
   <div className="stat-value text-white text-2xl">50K+</div>
   <div className="stat-desc text-white">Active users</div>
  </div>

  <div>
   <div className="stat-value text-white text-2xl">200+</div>
   <div className="stat-desc text-white">Premium Tools</div>
  </div>
  <div>
   <div className="stat-value text-white text-2xl">4.9</div>
   <div className="stat-desc text-white">Rating</div>
  </div>
</div>
    </div>

    {/* Main section start  */}

    
    <div className='baseline  text-center'>
      <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
      <p>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity</p>
      <button 
      onClick={()=>setProductsType("available")}
      className={`btn ${selectedProducts==="available" ? "bg-[#4F39F6]":""}  rounded-r-none rounded-l-4xl `}>Product</button>
      <button 
      onClick={()=>setProductsType("selected")}
      className={`btn ${selectedProducts==="selected" ? "bg-[#4F39F6]":""}  rounded-l-none rounded-r-4xl `}>Cart</button>
    </div>
    <Models 
     modelPromise={modelPromise} 
     selectedProducts={selectedProducts} 
    /> 

    {/* steps section start  */}

     <div className=' baseline  text-center my-10'>
     <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
      <p>Start using premium digital tools in mintues,not hours.</p>
     </div>

     <div className='flex justify-between items-center container mx-auto'>
     <div className="card bg-base-200 w-96 shadow-sm">
     <figure className="px-10 pt-10">
    
    <img
      src="https://i.ibb.co.com/5Xj85w1G/user.webp"
      alt="user"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds.No credit card required to get started</p>
   
  </div>
</div>

<div className="card bg-base-200 w-96 shadow-sm">
     <figure className="px-10 pt-10">
  
    <img
      src="https://i.ibb.co.com/23rZ7Dry/package.webp"
      alt="user"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p>Sign up for free in seconds.No credit card required to get started</p>
   
  </div>
</div>

<div className="card bg-base-200 w-96 shadow-sm">
     <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/03phGf4/rocket.webp"
      alt="user"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p>Sign up for free in seconds.No credit card required to get started</p>
   
  </div>
</div>
     </div>

{/* start pricing section  */}


    <div className='baseline  text-center my-10'>
      <h1 className='text-5xl font-extrabold'>Simple,Transparent Pricing</h1>
      <p>Choose the plan that feats your needs.Upgrade or downgrade anytime.</p>
     </div>
     

     <div className=' flex justify-between items-center  container mx-auto'>
     <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
   
    <div className="">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p>Perfect for getting started</p>
      <h1 className="text-xl">$0/Month</h1>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-btn-block bg-[#4F39F6] ">Get Started Free</button>
    </div>
  </div>
</div>

<div className="card bg-[#4F39F6] text-white w-96  shadow-sm">
  <div className="card-body">
  <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p>Best for professionals</p>
      <h1 className="text-xl">$29/Month</h1>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-btn-block bg-white text-[#4F39F6] ">Start Pro Trial</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">

    <div className="">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p>For teams and businesses</p>
      <h1 className="text-xl">$99/Month</h1>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-btn-block bg-[#4F39F6] text-white  ">Contact Sales</button>
    </div>
  </div>
</div>
     </div>


     {/* explore products section start  */}

      <div className='w-full text-white bg-[#4F39F6]'>
      <div className='baseline  text-center my-10'>
      <h1 className='text-5xl font-extrabold'>Ready to Transform Your workflow</h1>
      <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today</p>
     </div>

     <div className=" flex justify-center gap-3">
      <button className="btn btn-primary rounded-4xl bg-white text-[#4F39F6]   ">Explore Products</button>
      <button className="btn  border-white bg-[#4F39F6]  text-white  rounded-4xl"> View Pricing</button>
      </div>

      <div className='text-center'>
        <ul>
          <li>14-day free trial</li>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
        </ul>
      </div>

       {/* footer section start  */}

       <footer className="footer sm:footer-horizontal bg-[#101727] text-base-content p-10">
  <div>
    <h1 className='text-4xl font-bold text-white'>DigiTools</h1>
    <p className='text-white'>Premium digital tools for creators,professionals,business.Work smarter with our suite of powerful tools.</p>
  </div>
  
  
  <nav>
    <h6 className="footer-title font-bold text-white text-xl">Product</h6>
    <a className="link link-hover text-white">Features</a>
    <a className="link link-hover text-white">Pricing</a>
    <a className="link link-hover text-white">Templates</a>
    <a className="link link-hover text-white">Integration</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white font-bold text-xl">Company</h6>
    <a className="link link-hover text-white">About</a>
    <a className="link link-hover text-white">Blog</a>
    <a className="link link-hover text-white">Careers</a>
    <a className="link link-hover text-white">Press</a>
  </nav>

  <nav>
    <h6 className="footer-title font-bold text-white text-xl">Resources</h6>
    <a className="link link-hover text-white">Documentation</a>
    <a className="link link-hover text-white">Help Center</a>
    <a className="link link-hover text-white">Community</a>
    <a className="link link-hover text-white">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-white">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-white">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-white">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>

 
  
</footer>
      </div>
      <hr className='border-white'></hr><div className='flex justify-around items-center bg-[#101727] text-white'>
        <p>©2026 Digitools.All rights reserved.</p><br></br>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
         </div>

     

     </>
    
  )
}

export default App
