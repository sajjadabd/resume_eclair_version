let skills = [
  { skill : 'Laravel' , rating : 5 },
  { skill : 'Livewire' , rating : 5 },
  { skill : 'HTML' , rating : 6 },
  { skill : 'CSS' , rating : 5 },
  { skill : 'Javascript' , rating : 6 },
  { skill : 'Tailwind' , rating : 4 },
  { skill : 'DevOps' , rating : 4 },
  { skill : 'GIT' , rating : 5 },
];

let skillsContainer = document.getElementById('skillsContainer');

let skillsTemplate = ``;

for(let i=0;i<skills.length;i++) {
  console.log(skills[i].skill);
  skillsTemplate += `
  <li class="skillsItem">
    <div class="skillsContainer">
      <div class="skillsTitle">${skills[i].skill}</div>
      <div class="skillsPercent">`

  for(let j=1;j<=5;j++) {
    if( skills[i].rating > j ) {
      skillsTemplate += `<span class="fill"></span>`;
    } else {
      skillsTemplate += `<span></span>`;
    }
  }
        
  skillsTemplate +=    
      `</div>
    </div>
  </li>
  `;
}

skillsContainer.innerHTML = skillsTemplate;



let contacts = [
  //{ id : 'sjabd.ir' , icon : 'fa fa-globe' , href : 'https://www.sjabd.ir' },
  { id : 'mynameissajjad@gmail.com' , icon : 'fa fa-envelope' , href : 'mailto:mynameissajjad@gmail.com' } ,
  //{ id : 'sajjad.abd__' , icon : 'fa fa-instagram' , href : 'https://www.instagram.com/sajjad.abd__' },
  { id : 'sajjad-abdollahi' , icon : 'fa fa-linkedin' , href : 'https://www.linkedin.com/in/sajjad-abdollahi/' },
  { id : '+98 938 130 8994' , icon : 'fa fa-whatsapp' , href : 'https://wa.me/+989381308994' },
  //{ id : '+98 938 130 8994' , icon : 'fa fa-phone' , href : 'tel:+989381308994' },
  { id : 'sjabd' , icon : 'fa fa-telegram' , href : 'https://t.me/+989381308994' },
  
  { id : 'sajjadabd' , icon : 'fa fa-github' , href : 'https://www.github.com/sajjadabd' },
];

let contactList = document.getElementById('contactList');


let contactTemplate = ``;

for(let i=0;i<contacts.length;i++) {
  contactTemplate += `
    <li>
      <span class="icon">
        <i class="${contacts[i].icon}"></i>
      </span>
      <span class="contactInfo">
        <a href="${contacts[i].href}">
          ${contacts[i].id}
        </a>
      </span>
    </li>
  `;
}


contactList.innerHTML = contactTemplate;



let educations = [
  { 
    from : '2010' , 
    to : '2013' , 
    header : 'مهندسی نرم افزار' , 
    content : 'دانشگاه مازندران' 
  } ,
  { 
    from : '2017' , 
    to : '2020' , 
    header : 'مهندسی نرم افزار' , 
    content : 'دانشگاه آزاد نکا' ,
    projectDetails : `
    پروژه ی اصلی من در دانشگاه
    <span class="colorText"> الگوریتم watchman route </span>
    بود که درباره ی پیداکردن کمترین مسیر
    برای نگهبان بود که باید از همه ی نقاط سرکشی می کرد
    –
    که در github 
    در دسترس می باشد
    github.com/sajjadabd
    `
  } ,
  //{ from : '' , to : '' , header : '' , content : '' } ,
  //{ from : '' , to : '' , header : '' , content : '' } ,
];

let educationContainer = document.getElementById('educationContainer');

let educationTemplate = ``;

for(let i=0;i<educations.length;i++) {
  educationTemplate += `
  <div class="wrapper educations">
    <div class="years">
      <span>${educations[i].from}</span>
      <span> - </span>
      <span>${educations[i].to}</span>
    </div>
    <div class="educationContent">
      <h4>${educations[i].header}</h4>
      <p>${educations[i].content}</p>
      <p>${
        educations[i].projectDetails != undefined 
        ?
        educations[i].projectDetails
        :
        ''
      }</p>
    </div>
  </div>
  `;
}


educationContainer.innerHTML = educationTemplate;




let workExperiences = [
  { 
    from : '2020' , 
    to : '2021' , 
    header : 'فروشگاه اینترنتی' , 
    subject : 'ساخت و توسعه',
    content : `
	لاراول و لایووایر یک جفت بی نظیر برای پیاده سازی طراحی وب اپ یک فروشگاه اینترنتی است که قابلیت های 
	AJAX
	و
	REST API
	را دارا می باشد
	`,
    contentItems : [
      'توسعه ی منظم ، قابل توسعه ، شی گرا و تست شده ی کد',
      'پیاده سازی توسعه پذیر RESTful APIs',
    ],
    beforeTechMargin : 140 ,
    technologies : [
      'احراز هویت و مجوز دسترسی استاندارد مثل Sanctum',
      'Tailwindcss برای طراحی UI',
      'استفاده از بسته های نرم افزاری آماده جهت توسعه ی هرچه سریع تر کد',
      'نوشتن با استاندارد های Clean Code',
    ],
    afterTechMargin : 0 ,
    achievements : [
      'پرداخت درون برنامه ای',
      'تم بندی نرم افزار با هارمونی رنگ های زیبا',
      'فرستادن اس ام اس برای احراز هویت کاربر',
    ],
  } ,
  { 
    from : '2019' , 
    to : '2021' , 
    header : 'پروژه ی مدیریت مشتری ها (CRM)' , 
    subject : 'ساخت و توسعه',
    content : `سازماندهی و ثبت ارتباطات با کسانی که دوستشان دارید ، یک
	CRM
	برای مدیریت روابط با دوستان ، خانواده و مشتری ها `,
    contentItems : [
      'ایجاد و مدیریت ارتباطات و تعریف رابطه بین آنها',
      'آپلود اسناد و عکس ها و ایجاد یادداشت هایی برای کسانی که با آنها در ارتباط هستید',
    ],
    technologies : [
      'احراز هویت با استفاده از فیسبوک ، گوگل ، گیت هاب و ...',
      'تست و تایید کد های تولید شده به عنوان بخشی از فرآیند توسعه',
      `توسعه ی 
	  RESTful API
	  برای اپلیکیشن های موبایل
	  و وب با استفاده از لاراول
	  `,
    ],
    achievements : [
      'استفاده از GIT به عنوان سیستم کنترل ورژن ها',
      'پنل ادمین اختصاصی برای مدیریت',
      'نوشتن پکیج های اختصاصی PHP',
    ],
  } ,
  // { 
  //   from : '' , 
  //   to : '' , 
  //   header : '' , 
  //   subject : '',
  //   content : ``,
  //   contentItems : [
  //     '',
  //     '',
  //   ],
  //   technologies : [
  //     '',
  //     '',
  //     '',
  //   ],
  //   achievements : [
  //     '',
  //     '',
  //     '',
  //     '',
  //   ],
  // } ,
];

let workExperienceContainer = document.getElementById('workExperienceContainer');

let workExperienceTemplate = ``;

for(let i=0;i<workExperiences.length;i++) {
  workExperienceTemplate += `
  <div class="wrapper works">
    <div class="years">
      <span>${workExperiences[i].from}</span>
      <span> - </span>
      <span>${workExperiences[i].to}</span>
    </div>
    <div class="worksContent">
      <h4>${workExperiences[i].header}</h4>
      <h5>${workExperiences[i].subject}</h5>
      <p>${workExperiences[i].content}</p>
    </div>
  </div>
    
    <div class="contentItems">
      <ul class="contentItems">`;

    for(let j=0;j<workExperiences[i].contentItems.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].contentItems[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;


    workExperienceTemplate += `${
      workExperiences[i].beforeTechMargin != undefined
      ?
      `<p style="height:${workExperiences[i].beforeTechMargin}px"></p>`
      :
      ``
    }`;

    workExperienceTemplate +=  `
    <div class="contectItemsHeader">
    ${ 
    workExperiences[i].technologies.length == 0 
    ?
    ``
    :
    `تکنولوژی های مورد استفاده : `
    }
    </div>
    `

    workExperienceTemplate += `
    <div class="contentItems">
      <ul class="contentItems">
    `;

    for(let j=0;j<workExperiences[i].technologies.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].technologies[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;


    workExperienceTemplate += `${
      workExperiences[i].afterTechMargin != undefined
      ?
      `<p style="height:${workExperiences[i].afterTechMargin}px"></p>`
      :
      ``
    }`;



    workExperienceTemplate +=  `
    <div class="contectItemsHeader">
    ${ 
    workExperiences[i].achievements.length == 0 
    ?
    ``
    :
    `دستاوردهای مهم : `
    }
    </div>
    `


    workExperienceTemplate += `
    <div class="contentItems">
      <ul class="contentItems">
    `;

    for(let j=0;j<workExperiences[i].achievements.length;j++) {
      workExperienceTemplate += `<li>${workExperiences[i].achievements[j]}</li>`;
    }

    workExperienceTemplate += `</ul>
    </div>`;



    workExperienceTemplate += `
    </div>`;

    workExperienceTemplate += `<p class="articleSeperator"></p>`;
  ;
}

workExperienceContainer.innerHTML = workExperienceTemplate;