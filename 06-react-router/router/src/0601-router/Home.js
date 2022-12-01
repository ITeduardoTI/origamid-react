import React from "react";
import { Link } from 'react-router-dom';
// import Head from './Head';
import HelmetExport, { Helmet } from 'react-helmet';


const Home = () => {
  return(
    <div>
      {/* <Head title="Home" description="Essa é a descrição da home." /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da Home." />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a homepage</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
}

export default Home;