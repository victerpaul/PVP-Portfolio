import React from 'react'; 
const VisitorCountEmbed = () => {
  return (
    <div className="container my-4">
      
      
      <iframe 
       
        src={`${process.env.PUBLIC_URL}/visitor-count.html`} 
        style={{ border: 'none', width: '100%', height: '100px' }}
        title="Visitor Count"
      ></iframe>
    </div>
  );
};

export default VisitorCountEmbed;
