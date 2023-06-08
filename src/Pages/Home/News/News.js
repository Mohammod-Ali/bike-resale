import React from 'react';

const News = () => {
    const modal= ()=>{
        alert('News Portal Coming Soon')
    } 
    return (
        <div>
            <div className="hero mt-20 min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1531327431456-837da4b1d562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdG9yYmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Bike News Box!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button onClick={modal} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default News;