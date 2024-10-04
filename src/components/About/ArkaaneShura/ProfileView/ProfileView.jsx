import React from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbsWithIcon } from '../../../Breadcrumbs/BreadCrumbs';
import { profileData } from '../ArkaaneShura';  // Import profileData
import PageNotFound from '../../../PageNotFound/PageNotFound';
import FadeIn from '../../../FadeIn';

const ProfileView = () => {
  const { profileName } = useParams();
  const profile = profileData.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === profileName);
  console.log(profileData);
  

  if (!profile) {
    return <PageNotFound />;
  }

  const breadcrumbItems = [
    { link: "/About/Arkaan-e-Shura", name: "Arkaan e Shura" },
    { link: `/About/Arkaan-e-Shura/${profileName}`, name: profile.name }
  ];

  return (
    <div className="w-full mt-12">
      <div className='mt-12 mx-9'>
        <BreadcrumbsWithIcon items={breadcrumbItems} />
      </div>
      <FadeIn>
      <div className="flex flex-col items-center justify-center mt-12 text-gray-900 dark:text-gray-100 px-4">
        <img src={profile.imgSrc} alt={profile.name} className="w-40 h-40 rounded-full object-cover mb-4" />
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-xl font-medium text-blue-600 dark:text-blue-100">{profile.title}</p>
        <p className="text-lg mt-4 text-center max-w-2xl font-pop">{profile.description}</p>
      </div>
      </FadeIn>
    </div>
  );
};

export default ProfileView;
