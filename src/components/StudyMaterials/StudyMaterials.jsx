import React from 'react';
import { Helmet } from 'react-helmet';

const StudyMaterials = () => {
  return (
    <>
    <Helmet>
        <title>Study Materials - ECN</title>
        <meta name="description" content="In this page you can find the list of books listed by ECN. Books like Islamic Books, English Books, etc. and also get the pervious year question pepers from the renowed unverties of India." />
        <meta name="keywords" content="ecn, study material, Educational Committee of Naseerpur, ECNaseerpur, Naseerpur, Naseerpur Azamgarh, Naseerpur Educational society, Naseerpur Educational Committee, Quasim Khan" />
        <link rel="canonical" href="https://ecnaseerpur.in/studymaterials" />
        <meta name="robots" content="index,follow"/>
        <meta name="author" content="Quasim Khan, ECN"/>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study Materials - ECN" />
        <meta property="og:description" content="In this page you can find the list of books listed by ECN. Books like Islamic Books, English Books, etc. and also get the pervious year question pepers from the renowed unverties of India." />
        <meta property="og:image" content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png" />
        <meta property="og:url" content="https://ecnaseerpur.in/studymaterials" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Materials - ECN" />
        <meta name="twitter:description" content="In this page you can find the list of books listed by ECN. Books like Islamic Books, English Books, etc. and also get the pervious year question pepers from the renowed unverties of India." />
        <meta name="twitter:image" content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png" />
      </Helmet>
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-gray-800">Study Material</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Page Under-construction.. Stay Tuned</h3>
        
        </div>

      </div>
    </section>

    </>
  );
}

export default StudyMaterials;
