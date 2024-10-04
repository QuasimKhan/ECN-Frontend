import React, { useState } from 'react';
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';
import LazyLoad from 'react-lazyload';
import FadeIn from '../../FadeIn';
import './font.css'

const AboutNaseerpur = () => {
  const [language, setLanguage] = useState('urdu');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    urdu: `
     <p class="font-jameel tracking-wide text-xl text-right">
     
          نصیر پور کو آباد کرنے والی ذات کا نام نامی نصیر الدین خاں ہے ، آپ موضع ڈولی ضلع جو نپور کے ہر بنسی راجپوتوں کے خاندان سے تعلق رکھتے تھے ، سلطان جہانگیر (۱۶۲۷-۱۵۶۹) کے زمانے میں آپ نے اسلام قبول کیا تھا ، سلطان کی طرف سے آپ کے بھائی ضیاء الدین خاں کو سکھٹی مبارک پور میں جاگیریں عطا کی گئی تھیں جہاں انہوں نے مستقل سکونت اختیار کر لی اور آپ وہاں سے گلوا گوری تشریف لائے ، خان پور، بھگت پٹی کے زمیندار کے یہاں ملازمت کرنے لگے، زمیندار صاحب (جو اصلا ٹھاکر تھے ) کے لڑکے کی بارات گئی ، قدیم رسم و رواج کے لحاظ سے سوئمبر کی رسم پر شادی طے تھی ، ایک مضبوط بٹا ہوا رسہ چوٹا میں ڈبویا ہوا تھا جسے دولہے یا بارات کے کسی بھی شخص کے ذریعہ توڑنا تھا ، باراتی اس کو توڑنے سے عاجز آگئے تو خاں صاحب نے جو سائیس تھے ، زور آزمائی کی ، آپ نے رسے کو کمر میں لپیٹا اور اس زور سے کھینچا کہ وہ ٹوٹ گیا، جھٹکے کی شدت سے آپ کا انگوٹھا آنکھ میں لگا اور آنکھ خون آلود ہو گئی ، جلدی سے آپ نے عمامہ کو چہرہ پر باندھا اور وہاں سے گھر آئے ، بابو صاحب نے خوش ہو کر ایک گھوڑا دان کیا ، آپ کی والدہ نے فرمایا، گھوڑا کو چنا کہاں سے کھلائیں گے ، آپ گھوڑا لے کر بابو صاحب کے پاس پہنچے ، بابو صاحب نے پوری بات سنی اور فرمایا "کل ایک جوڑی بیل کے ذریعہ صبح سے شام تک جتنا رقبہ گھیر لیں گے وہ آپ کو چنا کھلانے کے لیے دان کیا جا رہا ہے ، چنانچہ ایک ہرائی کے ذریعہ صبح سے غروب آفتاب تک ساڑھے باون سوایکڑ رقبہ گھیر لیا اور یہ پورا رقبہ موضع نصیر پور کا خطہ قرار پایا، آپ کے نام کی مناسب سے اس موضع کا نام " نصیر پور" پڑا اور گاؤں سے پچھم ایک باغ جو اصلاً قبرستان ہے، کا نام بھی "نصیرا باغ" رکھا گیا۔
          <br>
          آپ کے دو لڑکے تھے جن سے دو خاندان اور دو پٹی وجود میں آئی، تحصیل سگڑی میں  صرف نصیر پور گاؤں کو یہ شرف حاصل تھا کہ یہاں کوئی کاشتکار نہیں بلکہ ہر ایک زمیندار تھا ، چنانچہ انگریزی عہد میں کئی کئی مواضعات کا زمیندار اپنی مال گزاری جمع کرنے کے لیے جب سگڑی پہنچتا تھا تو دو یہ دیکھ کر حیرت زدہ رہ جاتا تھا کہ نصیر پور کے متعدد افراد اپنی اپنی مال گزاری جمع کرنے آئے ہیں۔
         <br>
         نصیر پور گاؤں کی ایک اہم خصوصیت خیر سگالی اور اخوت و بھائی چارگی کے جذبات کا یہاں کے لوگوں کے خیر میں داخل ہونا ہے، پیٹھ پیچے برائی کرنے کے بجائے منھ پر غلطی کرنے والوں کو ٹوک دیا جاتا ہے لیکن اب یہ صفت قرب و جوار کی دیگر بستیوں سے متاثر ہونے کی بنا پر معدوم ہوتی جا رہی تھی ، لیکن اللہ کا شکر ہے نصیر پور اپنی پرانی شناخت کی طرف واپس لوٹ رہا ہے۔
         <br>
         اس گاؤں کے خمیر میں اسلامی وقومی حمیت کے جذبات کوٹ کوٹ کر بھرے ہوئے ہیں، تقسیم ہند کے موقع پر بھی اس قومی حمیت کا خوب خوب اظہار ہوا تھا۔
         <br>
         رحم دلی کے مقابلے میں سختی و شدت یہاں کی مٹی کا ایک اہم جز ہے، کہاوت مشہور ہے: "نصیر پور کی اسروڑی بھی ٹیڑھی ہوتی ہے۔“
         <br>
         قرب و جوار کی بستیوں میں یہ بات مشہور ہے کہ وہاں جہالت عام ہے لیکن اس کا حقیقت سے تعلق کم ہے، الحمد للہ اس گاؤں کے ایک فرزند جناب ظفر عالم صاحب مرحوم کے بڑے بھائی ماسٹر علی قدر صاحب مرحوم کے لڑکے جناب علی اختر صاحب علی گڑھ مسلم یونیورسٹی کے شعبہ تدریس کے ڈین رہ چکے ہیں، نیز ان کے جملہ لڑکے اور لڑکیاں علی گڑھ سے فارغ ہیں، علی گڑھ اور جامعہ ملیہ سے بی اے اور ایم اے کرنے والوں کی تعداد کئی درجنوں میں شمار کی جا سکتی ہے ، ملک کی دوسری مرکزی یونی ورسٹیوں میں سے جامعہ ہمدرد کے شعبہ اسلامک اسٹڈیز میں بھی اس گاؤں کے ایک فرزند جناب ڈاکٹر اشتیاق احمد فلاحی صاحب لیکچرار رہ چکے ہیں ۔ جناب خورشید عالم خان صاحب کے فرزند جناب ڈاکٹر شاداب عالم خان صاحب (پی ایچ ڈی جے این یو) اڈیشا  کی ایک یونیورسیٹی میں بطور پروفیسر اپنی خدمات انجام دے رہے ہیں ۔
         <br>
         سرکاری اور غیر سرکاری اداروں میں متعدد اساتذہ تدریسی خدمات انجام دے رہے ہیں، جیسے مولانا انیس احمد فلاحی مدنی صاحب (ناظم اعلیٰ جامعتہ الفلاح)، جناب مولانا جمیل احمد فلاحی صاحب ، جناب ماسٹر محمد خالد صاحب، جناب ماسٹر تبریز احمد ولد جواد احمد صاحب، جناب محمد شاہد صاحب اور جناب محمد شمشیر احمد ولد عبد الرب صاحب، جناب ماسٹر لئیق احمد صاحب،  وغیرہ۔ گاؤں میں پرائمری سطح کا ایک سرکاری اسکول اور دو کانونٹ اسکول ہیں ایک اسلامیہ جو نیر ہائی اسکول ہے اور دوسرا نیو انڈین پبلک اسکول ہے ،جو الحمد اللہ اقلیتی ادارے ہیں، دینی تعلیم و تربیت کے لیے آزادی سے پہلے ایک مکتب قائم تھا جو پہلے کبھی مدرسہ الہدئی تھا ، پھر تنظیم العلوم میں تبدیل ہوا اور اب الحمد لله "جامعة الصلاح “ اور مدرسه بن خلدون کی صورت میں کام کر رہا ہے۔ جامعة الصلاح میں بچیوں کی عالمیت تک اور مدرسہ بن خلدون میں ہائی اسکول تک کی تعلیم ہوتی ہے۔ گاؤں میں کل سات قبرستان اور دس مسجدیں ہیں، جن میں سے ایک مسجد مسجد ام ورقہ عورتوں کے لیے مخصوص ہے۔ نصیر پور گاؤں میں الحمدللہ 3 ہسپتال ہیں جن میں سے ایک خان ہاسپٹل کے نام سے مشہور ہے جس میں نصیر پور کے ایک فرزند معروف ڈاکٹر جناب ڈاکٹر فخر عالم خان صاحب (ایم ایم بی بی ایس ) ایک طویل عرصے سے اپنی خدمات انجام دے رہے ہیں جہاں روزآنہ مریضوں کی ایک کثیر تعداد آپ کے یہاں سے اللہ کے حکم سے شفاء یاب ہوتی ہے۔
        <br>
         خواندگی کے لحاظ سے نصیر پور میں شاید ہی کوئی شخص نا خواندہ ہو، بچیوں کا تعلیمی معیار بچوں سے بلند ہے اور ان کی ایک بڑی تعداد جامعۃ الفلاح کے کلیہ البنات سے فارغ ہے۔ نصیر پورگاؤں کا پورا نام نصیر پور فتح پور ہے، فتح پور موضع نا چراغی ہو گیا تو اس کا رقبہ نصیر پور میں جڑ گیا مسلم آبادی سے پہلے ڈھوا ( سڑک کے پاس ایک محلہ کا نام ) پر راج بھروں کی قدیم آبادی تھی جو مغلیہ عہد میں شکست کھانے کے بعد جب بھاگے تو اپنا خزانہ چھپا کر گئے، پیتل کی ایک بڑی سختی پر اس جگہ کی نشاندہی موجود ہے، کبھی کبھی ان کی نسلیں یہاں اس مقام کو تلاش کرنے کے لیے آتی ہیں لیکن وہ درخت شام کے وقت جس کے سایہ کے لحاظ نشاندہی کی گئی تھی ، وہ نہ رہا، اس لیے وہ محروم واپس لوٹ جاتے ہیں۔
         <br>
         <br>
         نصیر پور کی سب سے قدیم عمارات نصیر پور کی عید گاہ ہے جس کی تعمیر ۱۷۵۳ میں تاج علی خان ابن زور آور خان نے کرائی ہے۔
         </p>
    `,
    english: `
      <p>
        Naseer Pur is a village with a remarkable past. It's named after Naseer-ud-Din Khan, who belonged to the Rajput family of Harbansi in the Doli tehsil of the Jaunpur district. During the reign of Sultan Jahangir (1569-1627), Naseer-ud-Din Khan embraced Islam. His brother, Zia-ud-Din Khan, was granted estates in Sikhti Mubarak Pur by the Sultan, where he settled permanently. Naseer-ud-Din Khan started working for the landlords in Khan Pur and Bhagat Patti.
        <br>
        One day, there was a wedding in the Thakur family. It was a custom for the groom or anyone from the wedding party to break a strong rope tied in Chota. When the wedding party failed to break the rope, Khan Sahib, who was a wrestler, attempted it. He pulled the rope with such force that it broke, but his finger got injured, and his eye got bloodied. He quickly wrapped his turban around his face and returned home. Babu Sahib gave him a horse as a gift. Khan Sahib's mother asked, "Where will we feed the horse?" Khan Sahib took the horse to Babu Sahib, who listened to the whole story and said, "Tomorrow, we will tie a pair of oxen to the rope from morning till evening. Whatever area they cover will be given to you to feed the horse." As a result, an area encompassing more than fifty acres was covered from dawn till dusk, and this entire area became known as NaseerPur.
        <br>
        NaseerPur's significant characteristic is its hospitality and the spirit of brotherhood and unity among its people. Instead of backbiting, they encourage honesty. However, due to the influence of neighboring communities, this trait was fading away. But thankfully, NaseerPur is returning to its old identity.
        <br>
        The village is filled with Islamic and nationalistic fervor, which was evident during the Partition of India. The people expressed their nationalistic spirit proudly.
        <br>
        In the face of adversity, the resilience of Naseer Pur's soil is noteworthy. There's a saying, "Even the furrows of NaseerPur are crooked."
        <br>
        It's often said that ignorance prevails in the surrounding communities, but that's not entirely true. Thankfully, NaseerPur's sons are making efforts to restore its glory. For instance, The son of late Ali Qadr Khan (the elder brother of the late Khursheed Alam Khan) Akhtar Khan was a Dean lecturer at Ali Garh Muslim University. His children have completed their education from Ali Garh and Jamia Millia. Similarly, Dr. Shadab Alam Khan Sahib, the son of Khursheed Alam Khan Sahib, is serving as a professor in a university in Odisha.
        <br>
        Many teachers are providing their services in government and non-governmental institutions, such as Maulana Anis Ahmed Falahi Madni Sahib (Nazim-e-Aala of Jamia-tul-Falah), Maulana Jameel Ahmed Falahi Sahib, Master Mohammad Khalid Sahib, Master Tabrez Ahmed, Master Shahid Sahib, and Master Liaqat Ahmed Sahib etc..
        <br>
        In terms of education, hardly anyone in NaseerPur is illiterate. The educational standard of children is high, and many girls have completed their education from Jamia-tul-Falah.
        <br>
        The village has a primary level government school and two convent schools, one is Islamia Junior High School and the other is New Indian Public School, Alhamdulillah both are minority institutions. There was a Maktab , then it used to be Madrasah Al-Huda, then it changed into the Tanzeem-ul-Uloom and now, Alhamdulillah, it is functioning as "Jama'at al-Salah" and Madrasa bin Khaldoun. In Jama'at al-Salah, girls are educated up to universal level and at Madrasa Ibn-e Khaldoun, up to high school. There are a total of seven cemeteries and ten mosques in the village, one of which is Masjid Umm Waraqah. There are three hospitals in Nasirpur village, one of which is known as Khan Hospital. Renowned doctor Dr. Fakhr Alam Khan (MBBS) has been rendering his services in the hospital for a long time where daily a huge number of patients are cured from him by the order of Allah.
        <br>
        NaseerPur's full name was NaseerPur FatehPur. When FatehPur became uninhabitable, its area merged into NaseerPur. Before becoming deserted, Fateh Pur was a settlement of Rajputs. They fled with their treasures after facing defeat during the Mughal era. Evidence of their treasure's hiding place can still be found in a large pot made of brass. Sometimes, their descendants come here to search for that place, but the tree under which the treasure was supposed to be hidden no longer exists, so they return disappointed.
        <br>
        The oldest building in Naseer Pur is NaseerPur's Eidgah, which was constructed in 1753 by Taj Ali Khan, son of Zorawar Khan.
      </p>
    `
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const breadcrumbItems = [
    { link: "/About/About-Naseerpur", name: "About Naseerpur" }
  ];

  return (
    <div className='w-full mt-12 font-serif'>
      <div className='mt-12 mx-9'>
        <BreadcrumbsWithIcon items={breadcrumbItems} />
      </div>
      <div className="p-4 dark:text-gray-100 min-h-screen">
        <div className="mb-4 flex justify-end">
          <div className="relative inline-block text-left">
            <div>
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
            </div>
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
        <FadeIn key={language}>
        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <LazyLoad height={200} offset={100}>
            <div dangerouslySetInnerHTML={{ __html: content[language] }} className="text-gray-900 dark:text-gray-100"></div>
          </LazyLoad>
        </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutNaseerpur;
