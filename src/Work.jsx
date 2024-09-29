import React from 'react'

const Work = () => {
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg  ">
       <div className="container-fluid m-1 navigationbar" >
         <a className="navbar-brand  " href="#"><h1 className="travellogo fw-bolder">Travel <span className="logosmall">Guide</span></h1></a>
         <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse " id="navbarSupportedContent">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
             <li className="nav-item">
               <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
             </li>
            
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle active fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   packages
               </a>
               {/* <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="#">Supra</a></li>
                 <li><a className="dropdown-item" href="#">Land Cruiser</a></li>
                 <li><a className="dropdown-item" href="#">Fortuner</a></li>
                 <li><hr className="dropdown-divider"/></li>
                 <li><a className="dropdown-item" href="#">Off Roaders</a></li>
               </ul> */}
                                </li>

               <li className="nav-item">
                   <a className="nav-link active fw-bold" href="#">Transport</a>
             </li>
             <li className="nav-item">
               <a className="nav-link active fw-bold" aria-disabled="true">Hotel</a>
             </li>
             <li className="nav-item">
               <a className="nav-link active fw-bold" aria-disabled="true">Blogs</a>
             </li>
             <li className="nav-item">
               <a className="nav-link active fw-bold" aria-disabled="true">Support</a>
             </li>
           </ul>
           
         </div>
       </div>
     </nav>



<section id="part1" className="container-fluid">
   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<h1 className='part1head'>Travel <br/><span className="part1span">far enough</span> <br/>You meet <span className="part1span"> <br/>yourself</span></h1>
<button id="bukton" type="button" className="btn btn-success text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">Book your first Trip</button>
</section>

{/* <!-- Modal --> */}

<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header">
         <h1 className="modal-title fs-5" id="exampleModalLabel">Please share your details</h1>
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div className="modal-body">
         <div className="imagepart">
          <table>
           <div className="form-floating mb-3">
               <tr>
               <input type="email" className="form-control" id="floatingInput" placeholder="name"/>
               <label for="floatingInput"></label>
              </tr>
               <tr>
               <input type="password" className="form-control" id="floatingPassword" placeholder="Email"/>
               <label for="floatingPassword"></label>
               </tr>
               <tr>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Phone Number"/>
                <label for="floatingPassword"></label>
             </tr>
             <tr >
               <select className="form-select mb-4" aria-label="Disabled select example">
                   <option selected disabled>Your Preferance</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>

            </tr>

             <tr >
               <input type="password" className="form-control" id="floatingPassword" placeholder="Number of Members"/>
              <label for="floatingPassword"></label>
              </tr> 
              
              <tr>
               <label for="exampleFormControlTextarea1" className="form-label"></label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Messages"></textarea>
               </tr>
             </div>
           </table>
       </div>     
  </div>
       <div className="modal-footer text-center">
       
           <button type="button" className="btn btn-primary  text-center">submit</button>
       </div>
     </div>
   </div>
 </div>



{/* <!-- part2 --> */}



{/* <!-- 1card / HONEYMOON PACKAGES--> */}
<section id="packageoff">
   {/* <!-- package offers heading --> */}
   <div className="po-head">
       <h1>HONEYMOON PACKAGES</h1>
   </div>
   {/* <!-- package offers cards --> */}
   <div className="card-group po-card">
       <div className="card po-card2 ">
         <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Kerala_Country_Boat.jpg" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Kerala Honeymoon Package</h5>
           <p className="card-text text-danger">(04 night / 05 days)</p>
           <p className="card-text"><small className="text-body-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus corrupti odit? Est necessitatibus</small></p>
           <a className="card1btn" href="">BOOK NOW</a>

         </div>
       </div>
       <div className="card po-card2">
         <img src="https://d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/jp12287d138859/jp12287d138859-1-hotel_carousel_large.jpg?version=6" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Maldive Honeymoon Package</h5>
           <p className="card-text text-danger">(05 night / 06 days)</p>
           <p className="card-text"><small className="text-body-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus corrupti odit? Est necessitatibus</small></p>
           <a className="card1btn" href="">BOOK NOW</a>
       </div>
       </div>
       <div className="card po-card2">
         <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Manali Honeymoon Package</h5>
           <p className="card-text text-danger">(07 night / 08 days)</p>
           <p className="card-text"><small className="text-body-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus corrupti odit? Est necessitatibus</small></p>
           <a className="card1btn" href="">BOOK NOW</a>

         </div>
       </div>
       <div className="card po-card2">
           <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/08/BlogImage-16Aug_SouthGoa_Image-12-1.jpg" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Goa Honeymoon package</h5>
             <p className="card-text text-danger">(04 night / 05 days)</p>
             <p className="card-text"><small className="text-body-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus corrupti odit? Est necessitatibus</small></p>
             <a className="card1btn" href="">BOOK NOW</a>
           </div>
         </div>
     </div>
   <div>
       <div className="morebtn"> 
           <a className="more1btn" href="">MORE PACKAGE</a>
       </div>
   </div>
</section>
{/* <!-- part3 --> */}



<div id="part3">
   <div id="part3carosel" className="carousel slide" data-bs-ride="carousel">
       <div className="text-center mb-5">
         <h1>SPECIAL KERALA FESTIVAL TOURS</h1>
        </div>
       <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
       <div className="carousel-inner">
         <div className="carousel-item active" data-bs-interval="1000">
           <img  src="https://www.thestatesman.com/wp-content/uploads/2022/01/Kathakali-1.jpg" className="d-block w-100 tales" alt="..."/>
           <div className="carousel-caption d-none d-md-block">
             <h5 className="text-info fs-2">KADHAKALI</h5>
             <p>Some representative placeholder content for the first slide.</p>
             <button type="button" className="btn btn-primary text-center">More Details</button>
           </div>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img  src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG" className="d-block w-100 tales" alt="..."/>
           <div className="carousel-caption d-none d-md-block">
             <h5 className="text-info fs-2">THRISSUR POORAM</h5>
             <p>Some representative placeholder content for the second slide.</p>
             <button type="button" className="btn btn-primary text-center">More Details</button>
           </div>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img  src="https://static.india.com/wp-content/uploads/2018/08/kerala-boatrace5.jpg?impolicy=Medium_Resize&w=1200&h=800" className="d-block w-100 tales" alt="..."/>
           <div className="carousel-caption d-none d-md-block">
             <h5 className="text-info fs-2">KERALA BOAT RACE</h5>
             <p>Some representative placeholder content for the third slide.</p>
             <button type="button" className="btn btn-primary text-center">More Details</button>
           </div>
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
   </div>
   <div className="skftpart2 container-fluid">
     
       <div className="skftvideo">
         <img className="skfimage" src="./images/combined_1.jpg" alt=""/>
       </div>
   </div>
   
</div>






{/* <!-- part 4 --> */}
<section className="part4">
   <div className="po-head">
       <h1>NORTH INDIAN TOURS </h1>
   </div>
   <div className="part4pics">
 
   
       <div className="part4pic"><img src='./src/assets/darj.webp' alt=""/> <div className="part4overlap"><h1>VARANASI</h1> <h2>Rs :12000/-</h2>        <button type="button" className="btn btn-primary  text-center">BOOK NOW</button>
       </div>
</div>
       <div className="part4pic"><img src="./src/assets/fort.jpg" alt=""/> <div className="part4overlap"><h1>VARANASI</h1> <h2>Rs :12000/-</h2>        <button type="button" className="btn btn-primary  text-center">BOOK NOW</button>
       </div>
</div>
       <div className="part4pic"><img src="./src/assets/quit.jpg" alt=""/> <div className="part4overlap"><h1>VARANASI</h1> <h2>Rs :12000/-</h2>        <button type="button" className="btn btn-primary  text-center">BOOK NOW</button>
       </div>
</div>
       <div className="part4pic"><img src="./src/assets/taj.jpg" alt=""/> <div className="part4overlap"><h1>VARANASI</h1> <h2>Rs :12000/-</h2>        <button type="button" className="btn btn-primary  text-center">BOOK NOW</button>
       </div>
</div>
   </div>




</section>


{/* <!-- part5 --> */}

<section className="part5">
   <div className="po-head">
       <h1>OUR PREMIUM FEATURES </h1>
       <h2>we will make your dreams come true</h2>
   </div>

   <div className="part5pics">
       <div className="part5pic"><img src="./src/assets/scooter.jpg" alt=""/> 
           <div className="part5overlap"><h1>FREE BIKE RIDE <br/>  <a href="Learn more">Learn more</a>                      
           </h1> 
</div>
       </div>
       <div className="part5pic"><img src="./src/assets/campfire.jpg" alt=""/> 
           <div className="part5overlap"><h1>CAMPFIRE<br/>  <a href="Learn more">Learn more</a> </h1> 
           </div>
</div>
       <div className="part5pic"><img src="./src/assets/customer support.jpg" alt=""/>
            <div className="part5overlap"><h1>24*7 SUPPORT<br/>  <a href="Learn more">Learn more</a> </h1> 
           </div>
</div>
       <div className="part5pic"><img src="./src/assets/guide.avif" alt=""/> 
           <div className="part5overlap"><h1>TOUR GUIDE<br/>  <a href="Learn more">Learn more</a> </h1>     
           </div>
</div>
   </div>






</section>



{/* <!-- part6 --> */}
<section className="part6">
   <div className="po-head">
       <box-icon name='heart-circle' color='#ff0000' size="80px" ></box-icon>      
               <h2>Our customers love</h2>
   </div>
   <div className="part6pics">
       <div className="part6pic"><img src="./src/assets/couple1.webp" alt=""/>
         <p>
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon> 
         </p>  
       <h1>Michel & Jenny</h1>
   <p>We created a lot of wonderful <br/> memories and the trip was <br/> so wonderful</p>
</div>
       <div className="part6pic"><img src="./src/assets/couple2.jpg" alt=""/>
         <p>
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon> 
         </p>  
       <h1>Rohit & Amruta</h1>
   <p>We created a lot of wonderful <br/> memories and the trip was <br/> so wonderful</p>
</div>
       <div className="part6pic"><img src="./src/assets/couple3.avif" alt=""/>
         <p>
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon>   
               <box-icon type='solid' name='star'></box-icon> 
         </p>  
       <h1>James & Anna</h1>
   <p>We created a lot of wonderful <br/> memories and the trip was <br/> so wonderful</p>
</div>   
</div>
</section>



{/* <!-- footer --> */}

<footer>
  
 
     <div className="parent container-fluid">
      
        
         <div className="child">  ABOUT US<br/><br/>
             <a className="ftr" href="">Our Company</a>
             <a className="ftr" href="">Our managment</a>
             <a className="ftr" href="">Connections</a>
             <a className="ftr" href="">Annual Reports</a>
             <a className="ftr" href="">Our Networks</a>
         </div>
         <div className="child ">  SOCIAL MEDIA <br/><br/>

       <div className="socialmedia">
               <a href=""><i className="fa-brands fa-instagram brands"></i></a>
               <a href=""><i className="fa-brands fa-whatsapp brands"></i></a>
               <a href=""><i className="fa-brands fa-twitter brands"></i></a>
               <a href=""><i className="fa-brands fa-x-twitter brands"></i></a>
                
       </div>
         </div>        
         
         <div className="child imgchild">
           <img src="./src/assets/trevalpic.png" alt=""/>
           <h2>
           Explore the World</h2>
          
       </div>
       <div className="child2"><p>© 2000-2024 done by SURAJ CYRIAC. All Rights Reserved.</p></div>
     </div>
     </footer>
     </div>  )
}

export default Work