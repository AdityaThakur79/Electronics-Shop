import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 7972889376</label>
            <i className='fa fa-envelope'></i>
            <label>gadgetgalaxy@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            {/* <span>🏳️‍⚧️</span> */}
            {/* <label>EN</label> */}
            <span>₹ </span>
            <label>INR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;