import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
export default function login() {
  return (
    <div className='container bg-dark'>
        <div className='row' style={{height:'750px'}}>
            <div className='col m-5'>
            <div class="card bg-dark text-white">
                <img src="https://stellarexperiences.com.au/wp-content/uploads/2022/02/movie.jpg"  class="card-img" alt="Netfex"/>
        
            </div>
            </div>
            <div className='col ' style={{
                marginTop:'50px'
            }}>
                <form style={{marginTop:'50px'}}>
                    <div class="row mb-4">
                        <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form3Example1" class="form-control" />
                            <label class="form-label text-white" for="form3Example1">First name</label>
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form3Example2" class="form-control" />
                            <label class="form-label text-white" for="form3Example2">Last name</label>
                        </div>
                        </div>
                    </div>

 
                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control" />
                        <label class="form-label text-white" for="form3Example3">Email address</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="password" id="form3Example4" class="form-control" />
                        <label class="form-label text-white" for="form3Example4">Password</label>
                    </div>

        
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label text-white" for="form2Example33">
                        Subscribe to our newsletter
                        </label>
                    </div>
                    
                      <Link className='btn btn-primary text-dark text-white' href="/">Sign Up</Link>
                     
                </form>
            </div>
        </div>
    </div>
  )
}

login.getLayout = function getLayout(page){
    return(
        <>
        <main>{page}</main>
        </>
    )
}