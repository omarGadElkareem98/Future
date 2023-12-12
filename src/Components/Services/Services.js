
import React from 'react'
import './services.css'
import { Link } from 'react-router-dom';

function Services() {
    let image = "https://rowadel-3alam.com/wp-content/uploads/2022/03/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9-1.jpg" ;

  let imageone = "https://rowadel-3alam.com/wp-content/uploads/2022/03/6.jpg" ;

  let imagetow = "https://rowadel-3alam.com/wp-content/uploads/2022/03/%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%B9%D9%81%D8%B4-%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg ";
  return (
    <div className='Services_content'>

        <div className='Services_text'>
            <div className='text'>
                <h1>خدماتنا</h1>

            </div>
            <div className='text'>
                <p
                
                >شركة فيوتشر  بتقدم لعملائها
                     الرعاية الكاملة لجميع الخدمات و ذلك لخبرتنا الكبيرة 
                    ، والفنيين والنجارين المدربين على أعلى مستوى.

                </p>
                
            </div>
        </div>

        <div className='container'>
        <div class="card" style={{width: '18rem;'}}>
  <img src= {image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">
    شركة فيوتشر  بتقدم لعملائها
                     الرعاية الكاملة لجميع الخدمات و ذلك لخبرتنا الكبيرة 
                    
بالمملكة العربية السعودية هناك الكثير من الشركات التي تقدم خدمات النظافه بمختلف أنواعها، 
ولكن ما عليك السؤال عنه قبل طلب ا... 
        .</p>
  </div>
</div>
<div class="card" style={{width: '18rem;'}}>
  <img src={imageone} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">
        
    شركة فيوتشر  بتقدم لعملائها
                     الرعاية الكاملة لجميع الخدمات و ذلك لخبرتنا الكبيرة 
                   
                     إذا كنت تسافر مدة طويلة، أو تود صيانة منزلك أو إعادة دهانه، فخدمة تخزين اثاث بالرياض قد وُجدت خصيصاً لك.يمكنك الآن تخزين ا...  ، والفنيين والنجارين المدربين على أعلى مستوى.

        
        .</p>
  </div>
</div>

<div class="card" style={{width: '18rem;'}}>
  <img src={imagetow} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">

    شركة فيوتشر  بتقدم لعملائها
                     الرعاية الكاملة لجميع الخدمات و ذلك لخبرتنا الكبيرة 
                 
محتاج تنقل شقتك أو منزلك أو شركتك، لا تشغل بالك فشركة رواد العالم متخصصة فى خدمات نقل عفش الرياض <Link to='https://wa.me/+0537134530'>0537134530</Link> هل اجبرتك ظرو...    ، والفنيين والنجارين المدربين على أعلى مستوى.
ر

    </p>
  </div>
</div>
        </div>

        <div className='text_serv'>
            <p>
            أترغب في تجربة نقل عفش أو تخزين أثاث أو تغليف اثاث متميزة بالرياض ..؟

<br />
إتصل بنا الأن <Link to='https://wa.me/+0537134530'>0537134530</Link> أو تواصل معنا
            </p>
        </div>

    </div>
  )
}

export default Services