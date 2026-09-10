/**
 * main.js
 * Menghubungkan weddingData + doodles ke DOM, dan menangani semua
 * interaksi: buka cover, countdown, reveal saat scroll, floating nav,
 * musik, RSVP, guestbook (in-memory), copy rekening.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. Guest name dari query string (?to=Nama)                          */
  /* ------------------------------------------------------------------ */
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to");
  if (guestName) {
    document.getElementById("guest-name").textContent = decodeURIComponent(guestName);
  }

  /* ------------------------------------------------------------------ */
  /* 2. Isi doodle-doodle statis                                         */
  /* ------------------------------------------------------------------ */
  const slot = (id, name, opts = {}) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = doodles[name] || "";
    if (opts.heartbeat) el.classList.add("doodle-heartbeat");
  };

  slot("cover-doodle-slot", "couple");
  slot("hero-doodle-slot", "sparkles");
  slot("story-doodle-slot", "leaf");
  slot("couple-doodle-slot", "heartSmall", { heartbeat: true });
  slot("ring-doodle-groom", "ring");
  slot("ring-doodle-bride", "ring");
  slot("event-doodle-slot", "envelope");
  slot("gallery-doodle-slot", "flowerSmall");
  slot("rsvp-doodle-slot", "bird");
  slot("wishes-doodle-slot", "ribbon");
  slot("gift-doodle-slot", "star");
  slot("closing-doodle-slot", "heartSmall", { heartbeat: true });

  document.querySelectorAll(".section-divider").forEach((el) => {
    el.innerHTML = doodle("wave");
  });

  const navIcons = ["house", "leaf", "ring", "flowerSmall", "envelope"];
  document.querySelectorAll(".nav-item").forEach((btn, i) => {
    btn.innerHTML = doodle(navIcons[i] || "star");
  });

  /* Ambient floating doodles scattered on hero (decorative, few in number) */
  (function scatterAmbientDoodles() {
    const hero = document.getElementById("hero");
    const layout = [
      { name: "flowerSmall", top: "6%", left: "8%", delay: "0s" },
      { name: "cloud", top: "10%", right: "6%", delay: "1.2s" },
      { name: "star", top: "70%", left: "10%", delay: "0.6s" },
    ];
    layout.forEach((item) => {
      const wrap = document.createElement("span");
      wrap.className = "doodle-float doodle";
      wrap.style.top = item.top || "";
      wrap.style.left = item.left || "";
      wrap.style.right = item.right || "";
      wrap.style.animationDelay = item.delay || "0s";
      wrap.innerHTML = doodles[item.name];
      wrap.setAttribute("aria-hidden", "true");
      hero.appendChild(wrap);
    });
  })();

  /* ------------------------------------------------------------------ */
  /* 3. Render data pernikahan ke DOM                                    */
  /* ------------------------------------------------------------------ */
  // Cover photo (Masa kecil kedua mempelai)
  if (weddingData.coverPhoto) {
    const coverPhotoEl = document.getElementById("cover-photo");
    const coverCaptionEl = document.getElementById("cover-photo-caption");
    if (coverPhotoEl && weddingData.coverPhoto.src) {
      coverPhotoEl.src = weddingData.coverPhoto.src;
    }
    if (coverCaptionEl && weddingData.coverPhoto.caption) {
      coverCaptionEl.textContent = weddingData.coverPhoto.caption;
    }
  }

  document.getElementById("groom-photo").src = weddingData.groom.photo;
  document.getElementById("groom-name").textContent = weddingData.groom.fullName;
  document.getElementById("groom-parents").textContent = weddingData.groom.parents;

  document.getElementById("bride-photo").src = weddingData.bride.photo;
  document.getElementById("bride-name").textContent = weddingData.bride.fullName;
  document.getElementById("bride-parents").textContent = weddingData.bride.parents;

  document.getElementById("closing-hashtag").textContent = weddingData.hashtag;
  document.getElementById("bg-music").src = weddingData.music.src;

  // Event cards (Akad + Reception)
  const eventCardsEl = document.getElementById("event-cards");
  [weddingData.akad, weddingData.reception].forEach((ev) => {
    const card = document.createElement("div");
    card.className = "event-card reveal-up";
    card.innerHTML = `
      <p class="event-label">${ev.label}</p>
      <div class="event-row">${doodle("calendar")}<span>${ev.date}</span></div>
      <div class="event-row">${doodle("clock")}<span>${ev.time}</span></div>
      <p class="event-venue">${ev.venue}</p>
      <div class="event-row">${doodle("pin")}<span>${ev.address}</span></div>
      <a class="btn-outline" href="${ev.mapsUrl}" target="_blank" rel="noopener">LIHAT LOKASI</a>
    `;
    eventCardsEl.appendChild(card);
  });

  // Story timeline dengan bingkai polaroid
  const markIcons = ["leaf", "bird", "flowerSmall", "ring", "heartSmall"];
  const timelineEl = document.getElementById("timeline-list");
  weddingData.story.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "timeline-item reveal-up";
    const tiltClass = i % 2 === 0 ? "story-tilt-left" : "story-tilt-right";
    const photoHtml = item.image
      ? `
        <div class="story-polaroid-wrap">
          <div class="polaroid story-polaroid ${tiltClass}">
            <span class="scrap-tape"></span>
            <img src="${item.image}" alt="${item.caption || item.title}" loading="lazy" />
            ${item.caption ? `<span class="polaroid-caption">${item.caption}</span>` : ""}
          </div>
        </div>
      `
      : "";

    row.innerHTML = `
      <span class="timeline-mark">${doodle(markIcons[i % markIcons.length])}</span>
      <div class="timeline-content">
        <div class="timeline-head">
          ${item.date ? `<span class="timeline-date">${item.date}</span>` : ""}
          <h3 class="timeline-title">${item.title}</h3>
        </div>
        ${photoHtml}
        <p class="timeline-text">${item.text}</p>
      </div>
    `;
    timelineEl.appendChild(row);
  });

  // Gallery scrapbook
  const scrapbookEl = document.getElementById("scrapbook-list");
  weddingData.gallery.forEach((photo) => {
    const item = document.createElement("div");
    item.className = "scrap-item reveal-scale";
    item.innerHTML = `
      <span class="scrap-tape"></span>
      <div class="polaroid">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
        <span class="polaroid-caption">${photo.caption}</span>
      </div>
    `;
    scrapbookEl.appendChild(item);
  });

  // Gift cards
  const giftCardsEl = document.getElementById("gift-cards");
  weddingData.gifts.forEach((g) => {
    const card = document.createElement("div");
    card.className = "gift-card reveal-up";
    card.innerHTML = `
      <p class="gift-bank">${g.bank}</p>
      <p class="gift-number">${g.accountNumber}</p>
      <p class="gift-name">a.n. ${g.accountName}</p>
      <button class="btn-copy" data-copy="${g.accountNumber}">Salin Nomor Rekening</button>
    `;
    giftCardsEl.appendChild(card);
  });

  /* ------------------------------------------------------------------ */
  /* 4. Cover open interaction                                           */
  /* ------------------------------------------------------------------ */
  const cover = document.getElementById("cover");
  const btnOpen = document.getElementById("btn-open");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const floatingNav = document.getElementById("floating-nav");

  btnOpen.addEventListener("click", () => {
    cover.classList.add("is-open");
    document.body.style.overflow = "";
    musicBtn.classList.add("is-shown");
    floatingNav.classList.add("is-shown");

    setTimeout(() => {
      const activeBtn = document.querySelector(".nav-item.is-active") || navButtons[0];
      if (activeBtn) updateNavPill(activeBtn);
    }, 500);

    // autoplay only after this user interaction (browsers block autoplay otherwise)
    if (music.src) {
      music.play().then(() => {
        musicBtn.classList.add("is-playing");
      }).catch(() => {
        /* user can still tap the music button manually */
      });
    }

    // kick off staggered reveal check as cover lifts
    setTimeout(checkReveals, 350);
  });

  document.body.style.overflow = "hidden";

  /* ------------------------------------------------------------------ */
  /* 5. Music toggle                                                     */
  /* ------------------------------------------------------------------ */
  musicBtn.addEventListener("click", () => {
    if (!music.src) return;
    if (music.paused) {
      music.play();
      musicBtn.classList.add("is-playing");
    } else {
      music.pause();
      musicBtn.classList.remove("is-playing");
    }
  });

  /* ------------------------------------------------------------------ */
  /* 6. Countdown                                                         */
  /* ------------------------------------------------------------------ */
  const targetDate = new Date(weddingData.date.iso).getTime();
  const cdDays = document.getElementById("cd-days");
  const cdHours = document.getElementById("cd-hours");
  const cdMinutes = document.getElementById("cd-minutes");
  const cdSeconds = document.getElementById("cd-seconds");

  function pad(n) { return String(n).padStart(2, "0"); }

  function tickCountdown() {
    const diff = targetDate - Date.now();
    if (diff <= 0) {
      cdDays.textContent = cdHours.textContent = cdMinutes.textContent = cdSeconds.textContent = "00";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cdDays.textContent = pad(d);
    cdHours.textContent = pad(h);
    cdMinutes.textContent = pad(m);
    cdSeconds.textContent = pad(s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* ------------------------------------------------------------------ */
  /* 7. Scroll reveal (Fade Up, Fade Down, Staggered Slow Luxury)        */
  /* ------------------------------------------------------------------ */
  const revealSelector = ".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale";
  const revealEls = Array.from(document.querySelectorAll(revealSelector));

  function checkReveals() {
    revealEls.forEach((el, i) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        setTimeout(() => el.classList.add("is-visible"), (i % 5) * 140);
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblingsInView = Array.from(parent.children).filter(
            (c) => c.matches && c.matches(revealSelector) && !c.classList.contains("is-visible")
          );
          const index = siblingsInView.indexOf(entry.target);
          const delay = Math.max(index, 0) * 160 + 50;
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ------------------------------------------------------------------ */
  /* 8. Floating navigation: dynamic animations, pill & smooth glide    */
  /* ------------------------------------------------------------------ */
  const navButtons = Array.from(document.querySelectorAll(".nav-item"));
  const navPill = document.getElementById("nav-label-pill");

  function updateNavPill(activeBtn) {
    if (!navPill || !activeBtn) return;
    const label = activeBtn.dataset.label || activeBtn.getAttribute("aria-label");
    if (!label) return;
    navPill.textContent = label;
    const pillLeft = activeBtn.offsetLeft + activeBtn.offsetWidth / 2;
    navPill.style.left = pillLeft + "px";
    navPill.classList.add("is-visible");
  }

  // Elegant quadratic/quartic decelerated smooth scroll
  function smoothScrollTo(targetY, duration = 1050) {
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    const diff = targetY - startY;
    if (Math.abs(diff) < 2) return;
    let start = null;

    function easeOutQuart(x) {
      return 1 - Math.pow(1 - x, 4);
    }

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutQuart(progress);
      window.scrollTo(0, startY + diff * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Dynamic button pop & ripple
      btn.classList.remove("is-clicked", "has-ripple");
      void btn.offsetWidth;
      btn.classList.add("is-clicked", "has-ripple");
      setTimeout(() => btn.classList.remove("is-clicked", "has-ripple"), 650);

      navButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      updateNavPill(btn);

      const target = document.querySelector(btn.dataset.target);
      if (target) {
        const targetRect = target.getBoundingClientRect();
        const targetY = targetRect.top + window.pageYOffset - 10;
        smoothScrollTo(targetY, 1050);

        // Section transition highlight
        const inner = target.querySelector(".section-inner") || target;
        inner.classList.remove("section-target-active");
        void inner.offsetWidth;
        inner.classList.add("section-target-active");
        setTimeout(() => inner.classList.remove("section-target-active"), 1200);
      }
    });
  });

  const navSections = navButtons
    .map((btn) => document.querySelector(btn.dataset.target))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = navSections.indexOf(entry.target);
          navButtons.forEach((b) => b.classList.remove("is-active"));
          if (navButtons[idx]) {
            navButtons[idx].classList.add("is-active");
            updateNavPill(navButtons[idx]);
          }
        }
      });
    },
    { threshold: 0.35 }
  );
  navSections.forEach((s) => navObserver.observe(s));

  window.addEventListener("scroll", checkReveals, { passive: true });

  /* ------------------------------------------------------------------ */
  /* 9. RSVP form (client-side only — replace with your own backend)     */
  /* ------------------------------------------------------------------ */
  const rsvpForm = document.getElementById("rsvp-form");
  const rsvpFeedback = document.getElementById("rsvp-feedback");
  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("rsvp-name").value.trim();
    const message = document.getElementById("rsvp-message").value.trim();
    if (!name) return;

    if (message) {
      addNote(name, message);
    }

    rsvpFeedback.textContent = "Terima kasih, konfirmasi kamu sudah kami terima ✓";
    rsvpForm.reset();
    document.getElementById("rsvp-count").value = 1;
    setTimeout(() => (rsvpFeedback.textContent = ""), 5000);
  });

  /* ------------------------------------------------------------------ */
  /* 10. Guestbook / Little Notes (in-memory demo state)                 */
  /* ------------------------------------------------------------------ */
  const notesListEl = document.getElementById("notes-list");
  let notes = [];

  function renderNotes() {
    if (notes.length === 0) {
      notesListEl.innerHTML = `<p class="note-empty">Jadilah yang pertama meninggalkan doa dan ucapan.</p>`;
      return;
    }
    notesListEl.innerHTML = notes
      .map(
        (n) => `
        <div class="note-card">
          <p class="note-name">${escapeHtml(n.name)}</p>
          <p class="note-text">${escapeHtml(n.message)}</p>
        </div>`
      )
      .join("");
  }

  function addNote(name, message) {
    notes.unshift({ name, message });
    renderNotes();
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  renderNotes();

  /* ------------------------------------------------------------------ */
  /* 11. Copy account number                                             */
  /* ------------------------------------------------------------------ */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-copy");
    if (!btn) return;
    const value = btn.dataset.copy;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        const original = btn.textContent;
        btn.textContent = "Tersalin ✓";
        btn.classList.add("is-copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 2000);
      })
      .catch(() => {
        alert("Nomor rekening: " + value);
      });
  });

  /* initial reveal check in case some content is already in view */
  checkReveals();
})();
