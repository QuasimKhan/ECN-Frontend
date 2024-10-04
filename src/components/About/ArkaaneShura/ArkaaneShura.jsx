import React from 'react';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../../FadeIn';
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';

export const profileData = [
  {
    imgSrc: "/ProfileImg/quasimkhan.jpg",
    name: "Quasim Khan",
    title: "President (Ameer)",
    link: "/About/Arkaan-e-Shura/quasim-khan", // Route to navigate to
    description: "Born on December 5, 2002 in Naseerpur, Azamgarh. Mr. Quasim Khan graduated in computer application. Earlier, he was the Vice President of ECN from 2021 to 2024. He is a member of the ECN Advisory Council."
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Ariz Danish",
    title: "Vice President",
    link: "/About/Arkaan-e-Shura/ariz-danish", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Obaid Ur Rahman",
    title: "Khazin",
    link: "/About/Arkaan-e-Shura/obaid-ur-rahman", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Ariz Anees",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/ariz-anees", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Hassan Khan",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/hassan-khan", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Aatif Asif",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/aatif-asif", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Saquib Tarique",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/saquib-tarique", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Mohammad Yusuf Khalid",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/mohammad-yusuf-khalid", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Abu Huzaifa Falahi",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/abu-huzaifa-falahi", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Mohammad Aazim Falahi",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/mohammad-aazim-falahi", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Hafiz Aziz ur Rahman",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/hafiz-aziz-ur-rahman", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  },
  {
    imgSrc: "/ProfileImg/dummyProfile.png",
    name: "Mohammad Modassir",
    title: "Member of Shura",
    link: "/About/Arkaan-e-Shura/mohammad-modassir", // Route to navigate to
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjsdhfjkhsakdghjkashgdjk skdjghjksdhagkj hk aksjdghjksdhg kjshdg jkasdghjhjksgdh sadjkghjkasdgh jskdgjksahdgjkh kjh asjkdghkjasdhgkjh kjshdg kjashdgk kjshdg kjag"
  }
  // Add more profiles here if needed
];

const ArkaaneShura = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isProfilePage = location.pathname.includes('/about/arkaaneshura/');

  const handleButtonClick = (link) => {
    navigate(link);
  };

  const breadcrumbItems = [
    { link: "/about/arkaaneshura", name: "Arkaan e Shura" },
    ...(isProfilePage ? [{ link: location.pathname, name: location.pathname.split('/').pop().replace('-', ' ') }] : [])
  ];

  return (
    <div className='w-full mt-12'>
      {!isProfilePage && (
        <div className='mt-12 mx-9'>
          <BreadcrumbsWithIcon items={breadcrumbItems} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-12 text-gray-900 dark:text-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-4">Arkaan e Shura</h1>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
            {profileData.map((profile, index) => (
              <ProfileCard
                key={index}
                imgSrc={profile.imgSrc}
                name={profile.name}
                title={profile.title}
                onButtonClick={() => handleButtonClick(profile.link)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default ArkaaneShura;
