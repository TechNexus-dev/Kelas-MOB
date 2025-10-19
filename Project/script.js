const people = [
      {name:'ADITYA NUR L', role:'Anggota',Nim:'042040033', photo:'foto/adit.jpg'},
      {name:'AHMAD ATHAR Z', role:'Ketua Kelas',Nim:'0420240034', photo:'foto/athar.jpg'},
      {name:'AHMAD ZAWAZ D', role:'Anggota',Nim:'0420240035', photo:'foto/robin.jpg'},
      {name:'ALDI ARVIANING J', role:'Anggota',Nim:'0420240036', photo:'foto/aldi.jpg'},
      {name:'AUDREY AGUSTINUS W', role:'Anggota',Nim:'0420240037', photo:'foto/weto.jpg'},
      {name:'BELVA RAMAHENDRA', role:'Anggota',Nim:'0420240038', photo:'foto/belva.jpg'},
      {name:'DAVIT ROTUA P', role:'Anggota',Nim:'0420240039', photo:'foto/davit.jpg'},
      {name:'DHIMAS WORO P', role:'Anggota',Nim:'0420240040 ', photo:'foto/dimas.jpg'},
      {name:'DZAKIYYA FAIZ N', role:'Anggota',Nim:'0420240041', photo:'foto/faiz.jpg'},
      {name:'FAWWAZ AQIL M', role:'Anggota',Nim:'0420240042', photo:'foto/fawwaz.jpg'},
      {name:'FIRMAN NURKARIM', role:'Anggota',Nim:'0420240043', photo:'foto/firman.jpg'},
      {name:'GUSTI TRI P', role:'Anggota',Nim:'0420240044', photo:'foto/gusti.jpg'},
      {name:'HANDIKA TRI DEAN C', role:'Anggota',Nim:'0420240045', photo:'foto/handika.jpg'},
      {name:'JUAN MEIDINARNO', role:'Anggota',Nim:'0420240046', photo:'foto/juan.jpg'},
      {name:'MARELLO KUSUMA', role:'Anggota',Nim:'0420240047', photo:'foto/marelo.jpg'},
      {name:'MUHAMAD REHAN S', role:'Anggota',Nim:'0420240048', photo:'foto/rizky.jpg'},
      {name:'M AMAR YAZID M ', role:'Anggota',Nim:'0420240049', photo:'foto/amar.jpg'},
      {name:'M ASYHAR KHIYARUL K', role:'Anggota',Nim:'0420240050', photo:'foto/asyhar.jpg'},
      {name:'M CALLAHAND TUMBELAKA', role:'Anggota',Nim:'0420240051', photo:'foto/nurul.jpg'},
      {name:'M GAZA AL FARUQ', role:'Anggota',Nim:'0420240052', photo:'foto/rizky2.jpg'},
      {name:'M HAYDAR ALIFIAN', role:'Wakil Ketua',Nim:'0420240053', photo:'foto/haydar.jpg'},
      {name:'M SAHRUR RAMADHANI', role:'Anggota',Nim:'0420240054', photo:'foto/sahrur.jpg'},
      {name:'NATHANAEL KURNIA', role:'Anggota',Nim:'0420240055', photo:'foto/asyhar.jpg'},
      {name:'PANDU DAFFA HARDIKA', role:'Anggota',Nim:'0420240056', photo:'foto/rangga.jpg'},
      {name:'RAAFI RIZQI AKBAR', role:'Anggota',Nim:'0420240057', photo:'foto/raafi.jpg'},
      {name:'RAMAH SAKTI SIREGAR', role:'Anggota',Nim:'0420240058', photo:'foto/ramah.jpg'},
      {name:'RANGGA REBELIO DESRANDI', role:'Anggota',Nim:'0420240059', photo:'foto/rebelio.jpg'},
      {name:'SATRIO PRIMANGGARA', role:'Anggota',Nim:'0420240060', photo:'foto/satrio.jpg'},
      {name:'SELAMAT YUDISTARA', role:'Anggota',Nim:'0420240061', photo:'foto/sae.jpg'},
      {name:'THORIQ ALFATH NUR', role:'Anggota',Nim:'0420240062', photo:'foto/thoriq.jpg'},
      {name:'WAHYU SATRIO WIDODO', role:'Anggota',Nim:'0420240063', photo:'foto/wahyu.jpg'},



    ];
    const peopleGrid = document.getElementById('peopleGrid');
    function renderPeople(){
      peopleGrid.innerHTML = '';
      people.forEach(p=>{
        const el = document.createElement('div');
        el.className = 'person';
        // Prefer responsive images: provide a few sizes via srcset. If photos are served
        // from static folder without multiple sizes, browsers will pick the single source.
        const src = p.photo;
        const srcset = `${src} 480w, ${src} 768w, ${src} 1200w`;
        el.innerHTML = `
          <img loading="lazy" src="${src}" srcset="${srcset}" sizes="(max-width:600px) 100vw, 150px" alt="Foto ${p.name}">
          <h3>${p.name}</h3>
          <p class="role">${p.role}</p>
          <p class="nim">NIM: ${p.Nim || ''}</p>
        `;
        peopleGrid.appendChild(el);
      });
    }
    renderPeople();

    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    function navigate(page){
      if(!page) return;
      // hide all pages
      document.querySelectorAll('.page').forEach(s=>s.style.display='none');
      const el = document.getElementById(page);
      if(el) el.style.display = 'block';
      if(navLinks && navLinks.length){
        navLinks.forEach(a=>a.classList.toggle('active', a.dataset.page===page));
      }
      try{ location.hash = page }catch(e){}
    }
    if(navLinks && navLinks.length){
      navLinks.forEach(a=>a.addEventListener('click', (e)=>{e.preventDefault();navigate(a.dataset.page)}));
    }
    // initialize from hash after DOM loaded
    document.addEventListener('DOMContentLoaded', ()=>{
      const start = (location.hash.replace('#','') || 'home');
      navigate(start);
    });

    // respond to manual hash changes (footer anchors, back/forward navigation)
    window.addEventListener('hashchange', ()=>{
      const page = location.hash.replace('#','');
      if(page) navigate(page);
    });

    // Theme (dark / light) — initialize and toggle
    function applyTheme(theme){
      try{ document.documentElement.setAttribute('data-theme', theme); }catch(e){}
      const btn = document.getElementById('themeToggleBtn');
      if(btn) btn.textContent = theme === 'light' ? '🌞' : '🌗';
    }

    function initTheme(){
      const saved = localStorage.getItem('site-theme');
      if(saved){ applyTheme(saved); return; }
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      applyTheme(prefersLight ? 'light' : 'dark');
    }


    document.addEventListener('DOMContentLoaded', ()=>{
      initTheme();
      const tbtn = document.getElementById('themeToggleBtn');
      if(tbtn) tbtn.addEventListener('click', ()=>{
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('site-theme', next);
      });
  // device mode feature removed; responsive behavior handled by CSS media queries
    });

    function scrollToPeople(){
      document.getElementById('peopleGrid').scrollIntoView({behavior:'smooth'});
    }

   
    // Kalender dengan catatan
const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();
let notes = JSON.parse(localStorage.getItem("calendarNotes") || "{}");

function renderCalendar(){
  const y = currentDate.getFullYear();
  const m = currentDate.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const monthName = currentDate.toLocaleDateString("id-ID",{month:"long",year:"numeric"});
  monthYear.textContent = monthName;
  calendarDays.innerHTML = "";

  const startDay = first.getDay() || 7;
  for(let i=1;i<startDay;i++) calendarDays.innerHTML += "<div></div>";

  for(let d=1; d<=last.getDate(); d++){
    const dateKey = `${y}-${m}-${d}`;
    const div = document.createElement("div");
    div.textContent = d;
    if(notes[dateKey]){
      const n = document.createElement("div");
      n.className = "note";
      n.textContent = notes[dateKey];
      div.appendChild(n);
    }
    if(d===new Date().getDate() && m===new Date().getMonth() && y===new Date().getFullYear())
      div.classList.add("today");
    div.onclick = ()=>addNote(dateKey);
    calendarDays.appendChild(div);
  }
}
function addNote(key){
  const text = prompt("Catatan untuk tanggal ini:", notes[key] || "");
  if(text !== null){
    if(text.trim()==="") delete notes[key];
    else notes[key]=text.trim();
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
    renderCalendar();
  }
}
if(prevMonth) prevMonth.onclick = ()=>{currentDate.setMonth(currentDate.getMonth()-1);renderCalendar();};
if(nextMonth) nextMonth.onclick = ()=>{currentDate.setMonth(currentDate.getMonth()+1);renderCalendar();};
renderCalendar();

function scrollToPeople(){
  document.getElementById('peopleGrid').scrollIntoView({behavior:'smooth'});
}

    // UPLOAD: drag & drop + previews
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const chooseBtn = document.getElementById('chooseBtn');
  const previews = document.getElementById('previews');
  const clearBtn = document.getElementById('clearBtn');
  


  if(chooseBtn && fileInput) chooseBtn.addEventListener('click', ()=>fileInput.click());
  if(fileInput) fileInput.addEventListener('change', (e)=>handleFiles(e.target.files));

    if(dropZone){
      ['dragenter','dragover'].forEach(ev=>dropZone.addEventListener(ev,(e)=>{e.preventDefault();dropZone.classList.add('dragover')}));
      ['dragleave','drop'].forEach(ev=>dropZone.addEventListener(ev,(e)=>{e.preventDefault();dropZone.classList.remove('dragover')}));
      dropZone.addEventListener('drop',(e)=>{const dt = e.dataTransfer; if(!dt) return; handleFiles(dt.files)});
    }

  if(clearBtn) clearBtn.addEventListener('click', ()=>{if(previews) previews.innerHTML='';localStorage.removeItem('previews')});

    function handleFiles(fileList){
      const arr = Array.from(fileList);
      arr.forEach(file=>{
        // For images: resize/compress before creating data URL to limit localStorage use
        if(file.type.startsWith('image/')){
          resizeImageFile(file, 1200, 0.78).then(({dataUrl, size})=>{
            const card = document.createElement('div'); card.className='preview';
            card.innerHTML = `<img src="${dataUrl}" alt="preview"><div class='meta'>${file.name} • ${formatBytes(size)}</div>`;
            if(previews) previews.prepend(card);
            savePreviewsToStorage();
          }).catch(err=>{
            console.warn('Image resize failed, falling back to original', err);
            const reader = new FileReader();
            reader.onload = (ev)=>{
              const url = ev.target.result;
              const card = document.createElement('div'); card.className='preview';
              card.innerHTML = `<img src="${url}" alt="preview"><div class='meta'>${file.name} • ${formatBytes(file.size)}</div>`;
              if(previews) previews.prepend(card);
              savePreviewsToStorage();
            };
            reader.readAsDataURL(file);
          });
        } else {
          // Non-image (video etc.) — keep existing behaviour but be careful with size
          const reader = new FileReader();
          reader.onload = (ev)=>{
            const url = ev.target.result;
            const card = document.createElement('div'); card.className='preview';
            if(file.type.startsWith('video/')){
              card.innerHTML = `<video controls src="${url}"></video><div class='meta'>${file.name} • ${formatBytes(file.size)}</div>`;
            } else {
              card.innerHTML = `<div style='padding:24px;text-align:center'>Tidak didukung: ${file.name}</div>`;
            }
            if(previews) previews.prepend(card);
            savePreviewsToStorage();
          };
          reader.readAsDataURL(file);
        }
      })
    }

    function formatBytes(bytes,decimals=1){
      if(bytes===0) return '0 B';
      const k=1024, dm=decimals<0?0:decimals; const sizes=['B','KB','MB','GB']; const i=Math.floor(Math.log(bytes)/Math.log(k));
      return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+' '+sizes[i];
    }

    /**
     * Resize and compress an image File to a data URL using canvas.
     * Returns a promise resolving { dataUrl, size }
     * maxWidth: target max width in px; quality: 0..1 for JPEG/WEBP
     */
    function resizeImageFile(file, maxWidth = 1200, quality = 0.8){
      return new Promise((resolve, reject)=>{
        if(!file.type.startsWith('image/')) return reject(new Error('Not an image'));
        const img = new Image();
        const reader = new FileReader();
        reader.onload = (e)=>{
          img.onload = ()=>{
            try{
              const ratio = img.width / img.height;
              const targetWidth = Math.min(img.width, maxWidth);
              const targetHeight = Math.round(targetWidth / ratio);
              const canvas = document.createElement('canvas');
              canvas.width = targetWidth;
              canvas.height = targetHeight;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
              // choose output type
              const type = 'image/jpeg';
              const dataUrl = canvas.toDataURL(type, quality);
              // estimate size
              const size = Math.round((dataUrl.length * 3) / 4); // base64 -> bytes approx
              resolve({dataUrl, size});
            }catch(err){reject(err)}
          };
          img.onerror = reject;
          img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // Simple persistence (data URLs) — resize/compress images before storing and cap total size.
    const PREVIEWS_STORAGE_KEY = 'previews';
    const PREVIEWS_MAX_BYTES = 1_500_000; // ~1.5MB total to avoid exceeding localStorage (approx)

    function savePreviewsToStorage(){
      const nodes = previews ? Array.from(previews.querySelectorAll('img,video')) : [];
      const data = nodes.map(n=>({type:n.tagName.toLowerCase(),src:n.src}));
      try{
        // Estimate size and trim if necessary (keep newest first)
        let json = JSON.stringify(data);
        let trimmedOccurred = false;
        if(new Blob([json]).size > PREVIEWS_MAX_BYTES){
          // remove older entries until under limit
          let trimmed = data.slice();
          while(trimmed.length && new Blob([JSON.stringify(trimmed)]).size > PREVIEWS_MAX_BYTES){
            trimmed.pop();
            trimmedOccurred = true;
          }
          json = JSON.stringify(trimmed);
        }
        localStorage.setItem(PREVIEWS_STORAGE_KEY,json);
        if(trimmedOccurred) showToast('Peringatan: preview lama dipangkas karena batas penyimpanan', 'info');
      }catch(e){console.warn('Failed to save previews to storage:', e)}
    }

    // Toast helper
    function showToast(message, type=''){
      let container = document.querySelector('.toast-container');
      if(!container){ container = document.createElement('div'); container.className='toast-container'; document.body.appendChild(container); }
      const t = document.createElement('div'); t.className = 'toast ' + (type||''); t.textContent = message;
      container.appendChild(t);
      setTimeout(()=>{ t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; setTimeout(()=>t.remove(),300); }, 4200);
    }

    // Offline/online banner
    function updateOnlineStatus(){
      if(!document.getElementById('offlineBanner')){
        const el = document.createElement('div'); el.id = 'offlineBanner'; el.className = 'offline-banner'; el.style.display='none'; el.textContent='Anda sedang offline — beberapa fitur mungkin tidak berfungsi'; document.body.appendChild(el);
      }
      const b = document.getElementById('offlineBanner'); if(!b) return;
      if(!navigator.onLine){ b.style.display='block'; } else { b.style.display='none'; }
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();

    function loadPreviewsFromStorage(){
      try{
        const raw = localStorage.getItem(PREVIEWS_STORAGE_KEY); if(!raw) return;
        const arr = JSON.parse(raw);
        arr.forEach(item=>{
          const card = document.createElement('div'); card.className='preview';
          if(item.type==='img') card.innerHTML = `<img src="${item.src}"><div class='meta'>Preview Tersimpan</div>`;
          else card.innerHTML = `<video controls src="${item.src}"></video><div class='meta'>Preview Tersimpan</div>`;
          previews.prepend(card);
        })
      }catch(e){console.warn(e)}
    }
  loadPreviewsFromStorage();

    // keyboard accessibility: navigate with numbers
    document.addEventListener('keydown',(e)=>{
      if(e.key==='1') navigate('home');
      if(e.key==='2') navigate('materi');
      if(e.key==='3') navigate('upload');
    })
 
   document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const pages = document.querySelectorAll(".page");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("data-page");

      // Halaman aktif keluar
      const current = document.querySelector(".page.active");
      if (current) {
        current.classList.remove("active");
      }

      // Halaman baru masuk
      const next = document.getElementById(target);
      next.classList.add("active");
    });
  });
});




// ===== MATERI OTOMOTIF INTERAKTIF =====
document.querySelectorAll(".materi-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Upload file + preview
document.querySelectorAll(".materi-file").forEach(input => {
  input.addEventListener("change", event => {
    const file = event.target.files[0];
    const preview = event.target.parentElement.querySelector(".preview");
    preview.innerHTML = "";

    if (file && file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    } else if (file) {
      const span = document.createElement("span");
      span.textContent = `📄 ${file.name}`;
      preview.appendChild(span);
    }
  });
});

