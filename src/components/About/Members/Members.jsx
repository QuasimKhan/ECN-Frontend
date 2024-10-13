import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProfileCard } from '../ArkaaneShura/ProfileCard/ProfileCard';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../../FadeIn';
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';
import Loader from '../../../utils/Loader';

const Members = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State to store fetched profile data
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isProfilePage = location.pathname.includes('/about/arkaaneshura/');

  const handleButtonClick = (link) => {
    navigate(link);
  };

  const breadcrumbItems = [
    { link: "/about/members", name: "Members" },
    ...(isProfilePage ? [{ link: location.pathname, name: location.pathname.split('/').pop().replace('-', ' ') }] : [])
  ];

  // Fetch profiles from the backend
  useEffect(() => {
    // Function to fetch data from the API
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}/api/v1/ecnmembers` // API endpoint to fetch members
        );
        setProfileData(response.data.data); // Update the state with fetched data
        setLoading(false); // Turn off loading state after data is fetched
      } catch (err) {
        setError("Failed to fetch members.");
        setLoading(false); // Turn off loading state even if there's an error
      }
    };

    fetchMembers(); // Call the function to fetch data on component mount
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"><Loader /></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Check if no data is returned from the API
  if (profileData.length === 0) {
    return (
        <div className='flex flex-col items-center justify-center mt-12 text-gray-900 dark:text-gray-100 px-4'>

<h1 className="text-3xl font-bold mb-4">Members of ECN [{profileData.length}]</h1>
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 dark:text-gray-300">No data found</p>
      </div>
      </div>
    );
  }

  return (
    <div className='w-full mt-12'>
      {!isProfilePage && (
        <div className='mt-12 mx-9'>
          <BreadcrumbsWithIcon items={breadcrumbItems} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-12 text-gray-900 dark:text-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-4">Members of ECN [{profileData.length}]</h1>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
            {profileData.map((profile, index) => (
              <ProfileCard
                key={index}
                imgSrc={profile.profileImage || '/ProfileImg/dummyProfile.png'}
                name={profile.name}
                title={profile.role}
                joiningDate={profile.joiningDate}
                onButtonClick={() => handleButtonClick(profile.link)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Members;
