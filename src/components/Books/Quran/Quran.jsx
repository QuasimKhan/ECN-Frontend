import React from 'react'
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';


const Quran = () => {


    const breadcrumbItems = [
        { link: "/Books/Quran", name: "Arkaan e Shura" },
      ];

  return (
    <div className='w-full mt-12'>
      <div className='mt-12 mx-9'>
        <BreadcrumbsWithIcon items={breadcrumbItems} />
      </div>

    </div>
  )
}

export default Quran