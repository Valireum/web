import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Licences from '../components/Licences'
import Navbar from '../components/Navbar'
import LicenceInfo from '../components/LicenceInfo'



const BuyNFT = () => {


  return (
    <div>
        <Navbar />
        <Header heading='NFT Licences' text='Get an NFT Licence key for you and your friends'/>
        <LicenceInfo />
        <Licences />
        <Footer />
    </div>
  )
}

export default BuyNFT