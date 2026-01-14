/*
 * Initialize animations for elements with class "is-animation" on page load.
 */
function applyAnimationOnLoad() {
  document.querySelectorAll(".is-animation").forEach(element => {
    element.classList.add("animation");
    setTimeout(() => {
      element.classList.remove("is-animation", "hidden-animation");
    }, 0);
  });
}

/*
 * Initialize a countdown timer to the wedding date.
 */
function initCountdownTimer() {
  const countdownElement = document.getElementById("countdown-timer");
  if (!countdownElement) return;

  // Countdown: 24/01/2026 11:00
  const countDownDate = new Date(2026, 0, 24, 11, 0, 0).getTime();

  // Tạo các phần tử HTML chỉ một lần
  countdownElement.innerHTML = `
    <p><span class="counter" id="days">0</span> ngày</p>
    <p><span class="counter" id="hours">0</span> giờ</p>
    <p><span class="counter" id="minutes">00</span> phút</p>
    <p><span class="counter" id="seconds">00</span> giây</p>
  `;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  let prevDays, prevHours, prevMinutes, prevSeconds;

  setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "Hôn Lễ Đã Được Tổ Chức";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Chỉ cập nhật khi giá trị thay đổi
    if (days !== prevDays) {
      daysEl.textContent = days;
      prevDays = days;
    }
    if (hours !== prevHours) {
      hoursEl.textContent = hours < 10 ? "0" + hours : hours;
      prevHours = hours;
    }
    if (minutes !== prevMinutes) {
      minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
      prevMinutes = minutes;
    }
    if (seconds !== prevSeconds) {
      secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
      prevSeconds = seconds;
    }
  }, 1000);
}

/*
 * Initialize the RSVP form submission and handle Google Apps Script integration.
 */
function initFormSubmit() {
  document.querySelectorAll('form').forEach(form => {
    setTimeout(() => {
      form.querySelector("#Date").valueAsDate = new Date()
    }, 1000);

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const messageElement = form.querySelector("#message");
      const submitButton = form.querySelector("#submit-button");

      messageElement.textContent = "Đang gửi..";
      messageElement.style.display = "block";
      submitButton.disabled = true;

      const formData = new FormData(this);
      const formDataString = new URLSearchParams(formData).toString();

      fetch("https://script.google.com/macros/s/AKfycbxlYtxIIdOW77yWhkdkC0z-r_VryTQlz296LxO-2fBLCjXi09YD8I0J_YwYtCqpZsc-/exec", {
        method: "POST",
        body: formDataString,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(response => response.text())
        .then(data => {
          if (form.classList.contains("gui-loi-chuc")) {
            messageElement.textContent = "Gửi lời chúc thành công!";
          } else {
            messageElement.textContent = "Gửi xác nhận tham dự thành công!";
            localStorage.setItem("rsvpSubmitted", "true");
          }
          messageElement.style.backgroundColor = "green";
          messageElement.style.color = "beige";
          form.reset();
          setTimeout(() => {
            form.querySelector("#Date").valueAsDate = new Date()
          }, 1000);
          setTimeout(() => messageElement.style.display = "none", 2000);
          submitButton.disabled = false;
        })
        .catch(error => {
          console.error("Error:", error);
          messageElement.textContent = "Có lỗi xảy ra. Vui lòng reload lại trang và thử lại!";
          setTimeout(() => messageElement.style.display = "none", 2000);
          submitButton.disabled = false;
        });
    });
  })
}

/*
 * Reset the RSVP form.
 */
function resetForm() {
  document.getElementById("form")?.reset();
}

/*  gsap  js start*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
$(document).ready(function () {
  var st = $(".poort-text");
  if (st.length == 0) return;
  gsap.registerPlugin(SplitText);
  st.each(function (index, el) {
    el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "poort-line" });
    gsap.set(el, { perspective: 600 });
    if ($(el).hasClass("poort-in-right")) {
      gsap.set(el.split.chars, { opacity: 0, x: "100", ease: "Back.easeOut" });
    }
    if ($(el).hasClass("poort-in-left")) {
      gsap.set(el.split.chars, { opacity: 0, x: "-100", ease: "circ.out" });
    }
    if ($(el).hasClass("poort-in-up")) {
      gsap.set(el.split.chars, { opacity: 0, y: "80", ease: "circ.out" });
    }
    if ($(el).hasClass("poort-in-down")) {
      gsap.set(el.split.chars, { opacity: 0, y: "-80", ease: "circ.out" });
    }
    el.anim = gsap.to(el.split.chars, { scrollTrigger: { trigger: el, start: "top 90%" }, x: "0", y: "0", rotateX: "0", scale: 1, opacity: 1, duration: 0.3, stagger: 0.1 });
  });
});


function moveIndicator() {
  const tabContainer = document.querySelector('.nav-tabs');
  if (!tabContainer) return;

  const indicator = tabContainer.querySelector('.tab-indicator');
  const activeTab = tabContainer.querySelector('.nav-link.active');
  if (!activeTab || !indicator) return;

  const offsetLeft = activeTab.offsetLeft;
  const tabWidth = activeTab.offsetWidth;

  // Ensure we have valid dimensions before applying styles
  if (tabWidth > 0) {
    indicator.style.left = offsetLeft + 'px';
    indicator.style.width = tabWidth + 'px';
  }
}

// Khi tab được hiển thị bởi Bootstrap
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', moveIndicator);
});


function initBackgroundSlider() {
  const slides = document.querySelectorAll('#dukeh-section-7 .bg-slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');
  }, 4000); // Change slide every 4 seconds
}

function initRecurringPopup() {
  const popup = document.getElementById('confirmPopup');
  const closeBtn = popup.querySelector('.popup-close');
  const confirmBtn = popup.querySelector('.dukeh-btn');
  let popupTimeout = null;
  let popupVisible = false;

  function showPopup() {
    if (!popupVisible && localStorage.getItem('rsvpSubmitted') !== 'true') {
      popup.style.display = 'block';
      document.body.classList.add('popup-open');
      popup.style.opacity = '1';
      popupVisible = true;
    }
  }

  function hidePopup() {
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
    popup.style.opacity = '0';
    popupVisible = false;
    resetTimer();
  }

  function clickConfirm() {
    hidePopup();
  }

  function resetTimer() {
    if (popupTimeout) clearTimeout(popupTimeout);
    popupTimeout = setTimeout(showPopup, 2 * 60 * 1000);
  }

  confirmBtn.addEventListener('click', clickConfirm);
  closeBtn.addEventListener('click', hidePopup);
  resetTimer();
}

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

/*
 * Run all initialization functions when the DOM is loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  applyAnimationOnLoad();
  initCountdownTimer();
  initFormSubmit();
  resetForm();
  setTimeout(() => {
    moveIndicator();
  }, 1000)
  initBackgroundSlider();
  // initRecurringPopup();

  if (!localStorage.getItem('switerColor')) {
    document.querySelector('#switcher #Button4')?.click();
  }

  setTimeout(() => {
    const preloaderLeft = document.getElementById("preloaderLeft");
    if (preloaderLeft) {
      preloaderLeft.style.display = "none";
    }

    const preloaderRight = document.getElementById("preloaderRight");
    if (preloaderRight) {
      preloaderRight.style.display = "none";
    }
  }, 5000);

  if (isFacebookApp()) { 
    alert('Bạn đang truy cập từ Facebook App. Để có trải nghiệm tốt hơn, hãy mở trang này bằng trình duyệt ngoài (Chrome, Safari,...) hoặc trình ẩn danh nếu trang không load bình thường ♥️')
  }
});


// Marquee
if ($(".marquee,.marquee2 ").length) {
  function Marquee(selector, speed) {
    const parentSelectors = document.querySelectorAll(selector);

    parentSelectors.forEach((parentSelector) => {
      const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;

      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);

      setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
          i = 0;
        }
        i = i + speed;
      }, 0);
    });
  }

  window.addEventListener('load', function () {
    Marquee('.marquee, .marquee2', 0.2);
  });
}

window.smoothScroll = function (target) {
  if (!target) return;
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};