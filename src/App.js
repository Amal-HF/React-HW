import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='grid-container'>
          <div className='cards-container'>
            <Store 
              img = 'https://files.bootcamp.sa/8fb8a053-432d-40a1-8179-176051ca23c4/logo/053d6071-e12e-4e92-9b9d-038c966b6c8c.png'
              isOnline='حضوري' 
              courseName='معسكر تطوير تطبيقات الويب باستخدام Javascript' 
              description = 'يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript' 
              isAvailable = {false} 
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/67f4b33c-1aa4-4c23-a18d-b12c0cf924d4.png'
              isOnline='حضوري' 
              courseName='من  UI/UX البداية حتى الاتقان باستخدام Figma' 
              description = 'دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma' 
              isAvailable={true}  
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png'
              isOnline='حضوري' 
              courseName='تطوير تطبيقات iOS باستخدام SwiftUI'  
              description = 'برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،' 
              isAvailable={false}   
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/994ecd5d-db56-43df-ab0b-2cf14e2c7788/logo/8e3f60dc-25d4-4323-86c5-92d06e2e691f.png'
              isOnline='حضوري' 
              courseName='بناء مواقع الويب باستخدام لغة Python'  
              description = 'ستتعرف في هذا المعسكر على أساسيات لغة Python وأساسيات بناء مواقع الويب باستخدام أحد أشهر أطر العمل التي تساعدك على بناء صفحات ويب متكاملة.' 
              isAvailable={false}  
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png'
              isOnline='حضوري' 
              courseName='دورة ITIL لإدارة خدمات تقنية المعلومات'  
              description = 'نستهدف في هذه الدورة المهتمين بتعلم مفاهيم ITIL 4 من خلال تزويدهم بعدد من المفاهيم والتطبيقات العملية المختصة بخدمات تقنية المعلومات.' 
              isAvailable={true}   
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/f8d7a8e5-a77c-4dd8-b9d4-1324bdc52cb8.jpeg'
              isOnline='حضوري' 
              courseName='معسكر تطوير الألعاب باستخدام Unity للناشئين'  
              description = 'يهدف معسكر تطوير الألعاب باستخدام محرك الألعاب Unity ولغة البرمجة #C إلى تمكين المتدرب ابتداءً من المهارات الأساسية إلى تطوير وبرمجة الألعاب بشكل كامل' 
              isAvailable={true}   
              location='الرياض'/>

            <Store 
              img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/282bf41d-860c-4195-9b8b-985339d702c8.png'
              isOnline='حضوري' 
              courseName='معسكر تطوير تطبيقات الجوال والويب باستخدام Flutter'  
              description = 'معسكر مكثف لتطوير تطبيقات الجوال والويب باستخدام إطار عمل Flutter الذي يعتبر الإطار الأحدث والأسهل لبناء تطبيقات تعمل على عدة أنظمة.' 
              isAvailable={true}   
              location='الرياض'/>

              <Store 
                img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/817dbd88-d62f-44f8-8ab6-e22090355594.png'
                isOnline='حضوري' 
                courseName='Git and Github'  
                description = 'تعلم أساسيات إدارة مشروعك باستخدام Git/Github والذي يستخدم على نطاق واسع من قبل المطورين من جميع أنحاء العالم.' 
                isAvailable={true}
                location = 'الرياض'/>

                <Store 
                  img = 'https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png'
                  isOnline='حضوري' 
                  courseName='دورة تصميم المواقع بمنهجية No-Code'  
                  description = 'نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة.' 
                  isAvailable={true}   
                  location='الرياض'/>

            

          </div>
        </div>
      <Footer/>      
    </div>

  );
}


export default App;
