import React, { useState } from 'react';
import FadeIn from '../../FadeIn';
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';

const AboutECN = () => {
  const [language, setLanguage] = useState('urdu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    urdu: `
      <div class="w-full font-jameel text-right tracking-wide text-xl">
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">کمیٹی کا سفر</h2>
        <p class="text-gray-700 dark:text-gray-300">
        نصیرپور کی تعلیمی کمیٹی (ای سی این) کئی سالوں سے نصیرپور کی کمیونٹی کی ایک بنیادی ستون رہی ہے۔ تعلیم اور آگاہی پھیلانے کے مشن کے ساتھ قائم کی گئی، ای سی این ہر عمر کے سیکھنے والوں کو مدد اور وسائل فراہم کرکے نصیرپور کے تعلیمی منظرنامے کو بہتر بنانے کے لیے وقف رہی ہے۔
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">ہمارا وژن</h2>
        <p class="text-gray-700 dark:text-gray-300">
        ای سی این میں، ہمارا بنیادی مقصد تعلیم کو فروغ دینا اور افراد کو اپنے علم اور مہارتوں کو بڑھانے کے مواقع فراہم کرنا ہے۔ ہم ایک ایسے مستقبل کا تصور کرتے ہیں جہاں کمیونٹی کے تمام افراد کو ان کے پس منظر یا سماجی و اقتصادی حیثیت سے قطع نظر تعلیم تک رسائی حاصل ہو۔ ہمارا مقصد افراد کو تعلیم کے ذریعے بااختیار بنانا اور ایک زیادہ باخبر اور باشعور معاشرہ تشکیل دینا ہے۔
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">ہمارے اقدار</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>ایمانداری</li>
          <li>جدت</li>
          <li>بہتری</li>
          <li>تعاون</li>
        </ul>
      </section>
    </div>
    `,
    english: `
    <div class="w-full font-serif tracking-wide text-xl">
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Committee's Journey</h2>
        <p class="text-gray-700 dark:text-gray-300">
        The Educational Committee of Naseerpur (ECN) has been a cornerstone of the Naseerpur community for several years. Established with the mission of spreading education and awareness, ECN has been dedicated to improving the educational landscape in Naseerpur by offering support and resources to learners of all ages.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Vision</h2>
        <p class="text-gray-700 dark:text-gray-300">
        At ECN, our primary goal is to promote education and provide opportunities for individuals to enhance their knowledge and skills. We envision a future where education is accessible to all members of the community, regardless of their background or socioeconomic status. Our purpose is to empower individuals through education and create a more knowledgeable and informed society.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Values</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Excellence</li>
          <li>Collaboration</li>
        </ul>
      </section>
    </div>
    `
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const breadcrumbItems = [
    { link: "/AboutECN", name: "About ECN" },
  ];

  return (
    <>
      <div className='mt-12 mx-9'>
        <BreadcrumbsWithIcon items={breadcrumbItems} />
      </div>
      <div className="min-h-screen p-6 mt-12">
        {/* Cover Photo */}
        <div className="relative">
          <img
            src='/CarouselImages/Banner.jpg'
            alt="Cover"
            className="w-full h-64 object-cover rounded-lg shadow-md border-4 border-gray-300 dark:border-gray-700"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 rounded-t-lg">
            <h1 className="text-3xl font-bold">About ECN</h1>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="mt-6 mb-4 flex justify-end font-serif">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {language === 'urdu' ? 'Urdu' : 'English'}
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 dark:text-gray-100 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => handleChangeLanguage('urdu')}
                  >
                    Urdu
                  </button>
                  <button
                    className="text-gray-700 dark:text-gray-100 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => handleChangeLanguage('english')}
                  >
                    English
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <FadeIn key={language}>
          <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <div dangerouslySetInnerHTML={{ __html: content[language] }} className="text-gray-900 dark:text-gray-100"></div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default AboutECN;
