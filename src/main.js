import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const universe = document.getElementById('universe');
  const swissLayer = document.getElementById('swiss-layer');
  
  // 2D Mouse Parallax (Flawless Parallax for 2D Vectors)
  window.addEventListener('mousemove', (e) => {
    // Disable parallax entirely on mobile viewports
    if (window.innerWidth <= 768) return;

    // Only parallax if flip is not open
    if (document.getElementById('poster-flip').classList.contains('open')) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    universe.style.transform = `translate(${x * -3}vw, ${y * -3}vh)`;
    swissLayer.style.transform = `translate(${x * 1}vw, ${y * 1}vh)`;
  });

  // Poster Flip Logic
  const flip = document.getElementById('poster-flip');
  const closeBtn = document.getElementById('close-btn');
  const flipTitle = document.getElementById('flip-title');
  const flipDesc = document.getElementById('flip-desc');

  const contentData = {
    'software-engineer': {
      title: 'СИСТЕМ',
      desc: 'Системийн архитектур бол зүгээр нэг код бичих үйл явц биш, харин дижитал орчин дахь геометрийн төгс зохицол юм. Бидний зорилго бол хэрэгцээгүй илүүдэл хэсгүүдийг устгаж, зөвхөн хамгийн хурдан бөгөөд оновчтой логикийг үлдээх явдал.<br><br>Өндөр ачаалал даах чадвар (High Availability), өгөгдлийн сангийн нарийвчилсан бүтэц, болон микросервисийн архитектурыг ашиглан хэзээ ч гацахгүй, тасралтгүй ажиллах хүчирхэг хөдөлгүүрүүдийг угсардаг.<br><br>[ ҮНДСЭН СТЕК ]: Django, Node.js, MySQL, Prisma ORM.'
    },
    'ui-designer': {
      title: 'ДИЗАЙН',
      desc: 'Дизайн бол хэрэглэгчийг хуурах биш, харин тэднийг бодит байдалтай нүүр тулгах урлаг юм. Орчин үеийн вэбүүдийн уйтгартай, нэгэн хэвийн загваруудаас татгалзаж, Швейцарийн Бруталист хэв маяг, хатуу типографи, шулуун шугамуудыг ашиглан зоримог интерфейс бүтээдэг.<br><br>Дэлгэц дээрх элемент бүр нь физик жинтэй мэт мэдрэгдэх ёстой. Хараа зүйн хуурмаг дүрслэл (Optical Illusion), болон математикийн нарийвчлалтай грид систем нь хэрэглэгчид дижитал орон зайг биеэрээ мэдрэх боломжийг олгоно.<br><br>[ ХЭРЭГСЛҮҮД ]: ReactJS, Next.js, CSS CSSOM.'
    },
    'fullstack': {
      title: 'FULLSTACK',
      desc: 'Фронтэнд болон Бакэндийн хоорондох хилийг устгасан төгс архитектур. Next.js-ийн Server-Side Rendering хурдыг Django болон Node.js бакэндүүдтэй хослуулж, Prisma ORM ашиглан MySQL өгөгдлийн сантай найдвартай холбодог.<br><br>Стандарт вэб технологиос хальж, хөтөч дээрх дүрслэлийн хязгаарыг давсан интерактив ертөнцийг бодит болгодог. Энэ бол зүгээр л код биш, хязгааргүй салах (scale) боломжтой дижитал хөдөлгүүр юм.<br><br>[ БҮРЭН СТЕК ]: Next.js, ReactJS, Django, Node.js, Prisma, MySQL.'
    }
  };

  document.querySelectorAll('.mass').forEach(mass => {
    mass.style.cursor = 'pointer';
    mass.addEventListener('click', () => {
      const id = mass.getAttribute('data-id');
      if (contentData[id]) {
        flipTitle.innerHTML = contentData[id].title;
        flipDesc.innerHTML = contentData[id].desc;
      }
      flip.classList.add('open');
    });
  });

  closeBtn.addEventListener('click', () => {
    flip.classList.remove('open');
  });
});
