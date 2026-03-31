
import './App.css'
import cartImg from "../assets/products/shopping-cart.png";
import bannerImg from "../assets/banner.png";

function App() {
 

  return (
    <>
     

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
      <p className="py-6 text-[#627382">
       Access premium AI tools, design assets, templates, and productivity<br></br>
       software—all in one place. Start creating faster today.<br></br>
       Explore Products
      </p>
      <div className="gap-3">
      <button className="btn btn-primary rounded-4xl text-white ">Explore Products</button>
      <button className="btn btn-outline border-[#4F39F6]  rounded-4xl">Watch Demo</button>
      </div>
    </div>
  </div>
</div>

{/* stats section start  */}

    <div className='w-full'>
    <div className="flex justify-center gap-30  bg-[#4F39F6]">
  <div className="">
   <div className="stat-value text-white text-2xl">50K+</div>
   <div className="stat-desc text-white">Active users</div>
  </div>

  <div className="">
   <div className="stat-value text-white text-2xl">200+</div>
   <div className="stat-desc text-white">Premium Tools</div>
  </div>
  <div className="">
   <div className="stat-value text-white text-2xl">4.9</div>
   <div className="stat-desc text-white">Rating</div>
  </div>
</div>
    </div>
    </>
  )
}

export default App
