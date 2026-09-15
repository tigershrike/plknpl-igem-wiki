const root=new URL('../',document.currentScript.src).pathname;
const polish=document.createElement('link');
polish.rel='stylesheet';
polish.href=root+'assets/refinements.css?v=4';
document.head.appendChild(polish);

const groups=[
  {title:'Project',pages:[['description','Description'],['engineering','Engineering'],['contribution','Contribution'],['results','Results']]},
  {title:'Wet Lab',pages:[['protocol','Protocol'],['safety','Safety'],['measurements','Measurements'],['parts','Parts'],['notebook','Notebook']]},
  {title:'Team',pages:[['team-members','Team Members'],['attribution','Attribution']]}
];
const standalonePages=[['dry-lab','Dry Lab'],['human-practices','Human Practice'],['education','Education']];

const pageCopy={
  description:['01','Project Description','A clear starting point for the problem, our biological idea, and the people it may serve.',['The challenge','Our approach','Why it matters']],
  engineering:['02','Engineering','A living record of design decisions, experiments, results, and the lessons between iterations.',['Design cycle','Iteration one','What we learned']],
  contribution:['03','Contribution','Reusable knowledge, materials, and honest notes prepared for future iGEM teams.',['What we made','How to reuse it','Limitations']],
  results:['04','Results','A concise view of the evidence, observations, and conclusions produced by our work.',['Key findings','Data overview','Interpretation']],
  protocol:['05','Protocol','Step-by-step experimental procedures written for clarity, safety, and reproducibility.',['Preparation','Procedure','Quality checks']],
  safety:['06','Safety','A transparent account of risks, safeguards, training, and responsible design choices.',['Risk assessment','Laboratory practice','Responsible future']],
  measurements:['07','Measurements','How we collected, checked, and compared measurements across the project.',['Measurement plan','Calibration','Data quality']],
  parts:['08','Parts','An organised catalogue of biological parts used, designed, and characterised by the team.',['Part overview','Design notes','Characterisation']],
  notebook:['09','Notebook','A chronological record of laboratory work, decisions, and observations.',['Project timeline','Lab entries','Reflections']],
  'dry-lab':['10','Dry Lab','Computational analysis, data workflows, and design thinking that support our biological work.',['Overview','Methods','Key insights']],
  'human-practices':['11','Human Practice','How conversations, values, and communities shaped the direction of our project.',['Context','Stakeholder voices','Integrated decisions']],
  education:['12','Education','Activities and resources that make synthetic biology more accessible to our community.',['Our audience','Learning activities','What changed']],
  'team-members':['13','Team Members','Students, mentors, and collaborators bringing different skills to one shared project.',['Students','Advisors','Collaborators']],
  attribution:['14','Attribution','A clear record of who contributed each idea, experiment, design, and piece of support.',['Student work','External support','Acknowledgements']]
};

const current=document.body.dataset.page;
const page=pageCopy[current];
document.title=current==='home'?'PLKNPL iGEM 2026':`${page?.[1]||'Wiki'} — PLKNPL iGEM`;

const groupNav=group=>{
  const active=group.pages.some(([slug])=>slug===current);
  return `<details class="nav-group" ${active?'data-active="true"':''}><summary>${group.title}</summary><div class="nav-panel">${group.pages.map(([slug,label])=>`<a href="${root}${slug}/" ${slug===current?'aria-current="page"':''}>${label}</a>`).join('')}</div></details>`;
};
const standaloneNav=standalonePages.map(([slug,label])=>`<a class="standalone-link" href="${root}${slug}/" ${slug===current?'aria-current="page"':''}>${label}</a>`).join('');
const navItems=`${groupNav(groups[0])}${groupNav(groups[1])}${standaloneNav}${groupNav(groups[2])}`;

const header=`<div class="scroll-progress" aria-hidden="true"></div><a class="skip" href="#content">Skip to content</a><header class="site-header"><a class="brand" href="${root}">PLKNPL <b>iGEM</b><span></span></a><button class="menu-button" aria-expanded="false" aria-controls="site-nav">Menu</button><nav id="site-nav" class="nav" aria-label="Main navigation"><a class="home-link" href="${root}" ${current==='home'?'aria-current="page"':''}>Home</a>${navItems}</nav></header>`;

const footerGroups=[groups[0],groups[1],{title:'Explore',pages:standalonePages},groups[2]];
const sitemap=footerGroups.map(group=>`<div class="footer-pages-group"><h3>${group.title}</h3>${group.pages.map(([slug,label])=>`<a href="${root}${slug}/">${label}</a>`).join('')}</div>`).join('');
const instagram='https://www.instagram.com/plknplhkigem/';
const footer=`<footer class="site-footer"><div class="footer-top"><div><div class="footer-title">PLKNPL<br>iGEM.</div><p class="tiny">Po Leung Kuk Ngan Po Ling College · iGEM 2026</p></div><div class="footer-pages" aria-label="Wiki pages">${sitemap}</div></div><div class="footer-contact"><div><p class="footer-label">Contact the team</p><a class="social-button" href="${instagram}" target="_blank" rel="noopener" aria-label="PLKNPL-HK iGEM on Instagram"><span aria-hidden="true">◎</span> Instagram</a><div class="contact-line"><span class="contact-key">Team email</span><a href="mailto:plknplhkgigem@gmail.com">plknplhkgigem@gmail.com</a></div></div><address><p class="footer-label">School contact</p><div class="contact-line"><span class="contact-key">Phone</span><a href="tel:+85224623932">+852 2462 3932</a></div><div class="contact-line"><span class="contact-key">School email</span><a href="mailto:info@home.npl.edu.hk">info@home.npl.edu.hk</a></div><div class="contact-line"><span class="contact-key">Address</span><span>26 Sung On Street, To Kwa Wan,<br>Kowloon, Hong Kong</span></div></address></div><div class="sponsors" aria-label="Team and sponsors"><p>Team &amp; sponsors</p><div class="sponsor-row"><a href="https://www.npl.edu.hk/" aria-label="Po Leung Kuk Ngan Po Ling College"><img src="${root}assets/plknpl-logo.png" alt="PLKNPL school crest"></a><a href="https://igem.org/" aria-label="iGEM"><img class="igem-mark" src="${root}assets/igem-logo.svg?v=2" alt="iGEM logo"></a><a href="https://www.twistbioscience.com/" aria-label="Twist Bioscience"><img src="${root}assets/twist-logo.svg" alt="Twist Bioscience logo"></a><a href="https://www.idtdna.com/" aria-label="Integrated DNA Technologies"><img src="${root}assets/idt-logo.png" alt="Integrated DNA Technologies logo"></a></div></div><p class="footer-legal">Content available under CC BY 4.0 unless otherwise stated.</p></footer>`;

function home(){return `${header}<main id="content"><section class="hero"><div class="reveal reveal-left"><p class="kicker">PLKNPL iGEM 2026 · Experimental Biology</p><h1>Waste into <em>wonder</em></h1><p class="lede">A playful scientific story about turning overlooked materials into a brighter biological future. This is temporary copy for the final team narrative.</p><div class="cta-row"><a class="button alt" href="${root}description/">Explore the project <span>↗</span></a><a class="button" href="${root}engineering/">See our process <span>→</span></a></div></div><div class="collage reveal reveal-scale" data-parallax="10" aria-label="Collage of project imagery"><div class="orbit one"></div><figure class="photo a"><img src="${root}assets/collage-lights.png" alt="Light bulbs arranged on a pale green background"></figure><figure class="photo b"><img src="${root}assets/collage-protein.png" alt="Illustrated molecular structure on a pale green background"></figure><div class="sticker">DESIGN<br>BUILD<br>TEST<br>LEARN</div><div class="orbit two"></div></div></section><section class="section cream"><div class="section-head reveal reveal-left"><h2>Start here</h2><p>Three doors into the project: the problem, the making process, and our relationship with the wider world.</p></div><div class="cards">${[['01','The idea','Meet the challenge and our proposed biological response.','description/'],['02','The process','Follow each turn of the engineering cycle.','engineering/'],['03','The people','See how society shaped the science.','human-practices/']].map((x,i)=>`<article class="card reveal reveal-card" style="--delay:${i*110}ms"><span class="number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><a class="link-arrow" href="${root}${x[3]}">Read chapter →</a></article>`).join('')}</div></section><section class="section pink"><div class="fact-grid"><div class="diagram reveal reveal-spin" data-parallax="-7"><span class="diagram-label">OUR SYSTEM</span></div><div class="reveal reveal-right"><p class="kicker">One connected story</p><p class="quote">Science becomes useful when evidence, people, and imagination move together.</p><p>This space can hold the project’s central mechanism and strongest result when the scientific content is ready.</p></div></div></section></main>${footer}`}

function articleContent(p){return `<article class="article"><aside class="toc"><strong>On this page</strong>${p[3].map((s,i)=>`<a href="#s${i+1}">${String(i+1).padStart(2,'0')} · ${s}</a>`).join('')}</aside><div class="prose">${p[3].map((s,i)=>`<section id="s${i+1}" class="reveal"><h2>${s}</h2><p>Placeholder text introduces this part of the project. The final version should connect each claim to evidence, references, or a documented team decision.</p>${i===0?`<div class="callout"><h3>Key idea</h3><p>A concise takeaway belongs here. Keep it specific enough for a judge to understand without searching through another page.</p></div>`:''}${current==='engineering'&&i===0?`<div class="cycle"><div>01<br>Design</div><div>02<br>Build</div><div>03<br>Test</div><div>04<br>Learn</div></div>`:''}<h3>What we observed</h3><p>This paragraph can later contain methods, results, stakeholder feedback, safety reasoning, or reuse instructions. Tables and figures should include units, captions, and sources.</p></section>`).join('')}</div></article>`}

function teamContent(){return `<section class="section cream"><div class="section-head"><h2>Students</h2><p>Temporary profiles show how the final team page will behave.</p></div><div class="team-grid">${['Ari Chen','Maya Lin','Noah Park','Lena Wu','Sam Rivera','Iris Wong'].map((name,i)=>`<article class="person reveal"><div class="portrait" aria-hidden="true">${String(i+1).padStart(2,'0')}</div><h3>${name}</h3><p>Wet lab · Design · Human Practice</p></article>`).join('')}</div></section>`}

function inner(p){return `${header}<main id="content"><section class="page-hero" data-index="${p[0]}"><p class="kicker">Chapter ${p[0]}</p><h1>${p[1]}</h1><p class="lede">${p[2]}</p></section>${current==='team-members'?teamContent():articleContent(p)}</main>${footer}`}

document.getElementById('app').innerHTML=current==='home'?home():inner(page||pageCopy.description);
const button=document.querySelector('.menu-button'),menu=document.querySelector('.nav');
button?.addEventListener('click',()=>{const open=menu.classList.toggle('open');button.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.nav-group').forEach(group=>group.addEventListener('toggle',()=>{if(group.open)document.querySelectorAll('.nav-group[open]').forEach(other=>{if(other!==group)other.removeAttribute('open')})}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){let ticking=false;const animateScroll=()=>{const y=scrollY,range=Math.max(1,document.documentElement.scrollHeight-innerHeight);document.querySelector('.scroll-progress')?.style.setProperty('--progress',`${Math.min(100,y/range*100)}%`);document.querySelectorAll('[data-parallax]').forEach(element=>{const box=element.getBoundingClientRect(),amount=Number(element.dataset.parallax)||0;element.style.setProperty('--parallax',`${(box.top-innerHeight/2)/innerHeight*amount}px`)});ticking=false};addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(animateScroll);ticking=true}},{passive:true});animateScroll()}
