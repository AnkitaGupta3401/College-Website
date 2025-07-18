import React from 'react'

export const PageNotFound = () => {
    const navigate =useNavigate();
  return (
    <>
    <section className='conatiner text-center my-5'>
        <img src={LostImg} className='img-fluid' alt='Page not found' />
        <p className='fw-semibold'>Oops Page not Found! Looks you are lost somewhere. Let's get you back to the site now.</p>
        <button className='btn btn-success mt-3 animate_animated animate_pulse animate_infinite' onClick={() => navigate('/')}>Click here</button>\2'

    </section>
    </>

  )
}
 export default PageNotFound;