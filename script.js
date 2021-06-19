@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Common Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
  font-family: 'Jura', sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* End of Common Styles */

/* Main Button */
.main-btn {
  position: absolute;
  bottom: 3rem;
  width: 13rem;
  height: 13rem;
  background-color: #07acf3;
  border-radius: 50%;
  border: 0.2rem dotted #fff;
  padding: 0.1rem;
  overflow: hidden;
}

.main-btn-content {
  width: 100%;
  height: 100%;
  border: 0.2rem dotted #e7be08;
  border-radius: 50%;
  transform: rotate(40deg);
  transition: transform 0.2s, border 0.2s;
}

.main-btn:hover .main-btn-content {
  transform: rotate(60deg);
  border: 0.2rem dotted #9b0e0e;
  transition: transform 0.2s 0.5s, border 0.2s;
}

.main-btn-line {
  position: absolute;
  top: 4rem;
  width: 3rem;
  height: 0.5rem;
  border: 0.1rem solid #fff;
}

.main-btn-line:nth-child(1) {
  transform: rotateZ(-45deg) translateX(-0.65rem);
  transform-origin: left center;
  border-right: none;
}

.main-btn-line:nth-child(2) {
  transform: rotateZ(45deg) translateX(0.65rem);
  transform-origin: right center;
  border-left: none;
}

.main-btn-line:nth-child(3) {
  transform: rotateZ(90deg) translateX(0.5rem);
  border-left: none;
}

.main-btn span {
  position: absolute;
  bottom: 3rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.ripple {
  position: absolute;
  width: 0;
  height: 0;
  background-color: grey;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: rippleAnim 0.5s forwards;
}

@keyframes rippleAnim {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 210%;
    height: 210%;
  }
}
/* End of Main Button */

/* Section Heading */
.section-heading {
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 10rem;
  transform: translateY(-50%);
  width: 0;
  word-break: break-all;
  line-height: 4;
}
/* End of Section Heading */
/* End of Common Styles */

/* Mouse Circle */
.mouse-circle,
.mouse-dot {
  border-radius: 50%;
  position: fixed;
  z-index: 300;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
}

.mouse-circle {
  width: 6rem;
  height: 6rem;
  border: 0.1rem solid #c7a622; /* #c7a622; */
  animation: mouseCircleAnim 10s infinite linear;
}

@keyframes mouseCircleAnim {
  0% {
    width: 6rem;
    height: 6rem;
  }
  25% {
    width: 8rem;
    height: 8rem;
  }
  35% {
    width: 4rem;
    height: 4rem;
  }
  70% {
    width: 8rem;
    height: 8rem;
  }
  100% {
    width: 6rem;
    height: 6rem;
  }
}

.mouse-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #b60000; /*#9b0e0e;*/
  animation: mouseDotAnim 10s infinite linear;
}

@keyframes mouseDotAnim {
  0% {
    width: 0.5rem;
    height: 0.5rem;
  }
  55% {
    width: 1.5rem;
    height: 1.5rem;
  }
  100% {
    width: 0.5rem;
    height: 0.5rem;
  }
}
/* End of Mouse Circle */

/* Page BG */
.page-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#07acf3, rgba(255, 255, 255, 0.2)),
    url(images/bg.jpg) center no-repeat;
  background-size: cover;
}
/* End of Page BG */

/* Progress Bar */
.progress-bar {
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: 8rem;
  height: 8rem;
  background-color: #fff;
  border-radius: 50%;
  z-index: 200;
  overflow: hidden;
  transform: translate(-50%, -50%);
}

.half-circle,
.half-circle-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  transform-origin: right center;
  pointer-events: none;
}

.half-circle:nth-child(1) {
  background-color: grey /* #b60000 */;
}

.half-circle:nth-child(2) {
  background-color: grey; /*#b60000;*/
}

.half-circle-top {
  background-color: #fff;
}

.progress-bar-circle {
  width: 7.8rem;
  height: 7.8rem;
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* <<< This caused the 'progress-bar-circle' to have the clock animation affect */
  border-radius: 50%;
  color: #07acf3;
  font-size: 4rem;
  z-index: 200;
  transition: transform 0.5s;
  pointer-events: none;
}
/* End of Progress Bar */

/* Navigation */
/* Menu Icon */
.menu-icon {
  position: fixed;
  top: 3.5rem;
  right: 0;
  width: 12rem;
  height: 7rem;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s;
}

.menu-icon-line {
  width: 4rem;
  height: 0.1rem;
  background-color: #fff;
  margin: 0.5rem 0;
  box-shadow: 0 0.3rem 0.5rem #000;
}

.show-menu-icon {
  opacity: 1;
  visibility: visible;
}
/* End of Menu Icon */

/* Navbar */
.navbar {
  position: fixed;
  top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
  z-index: 100;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
}

.navbar-link {
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin: 0 2.5rem;
  text-shadow: 0 0.3rem 0.5rem #000;
}

.hide-navbar {
  opacity: 0;
  visibility: hidden;
  transform: translateX(10rem);
}
/* End of Navbar */
/* End of Navigation */

/* Section 1 */
.section-1 {
  position: relative;
  width: 100%;
  height: 100vh;
}

/* Logo For Your Name Only (Text) */
.logo {
  position: absolute;
  top: 2rem;
  left: 5rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
}
/* End of Logo For Your Name Only (Text) */

/* Logo */
/* .logo {
  height: 80px;
  width: 80px;
  position: fixed;
  top: 20px;
  left: 50px;
  z-index: 100;
}

.logo img {
  width: 100%;
} */
/* End of Logo */

/* Animated Circles */
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.circle {
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  background-color: red;

  align-self: center;
  justify-self: center;
  opacity: 0.5;
  position: relative;
  top: 0;
  left: 0;
  transition: left 2s, top 2s;
}

.circle-1 {
  background: url(images/landing/circle-5-img.jpg) center no-repeat;
  background-size: cover;
  background-clip: content-box;
  border: 0.5rem dotted gold;
  margin-left: -10rem;
}

.circle-2 {
  background: url(images/landing/circle-6-gif.gif) center no-repeat;
  background-size: cover;
  background-clip: content-box;
  border: 0.5rem dashed #ffbd07;
  margin-right: -10rem;
}

.circle-3 {
  background: url(images/landing/circle-7-gif.gif) center no-repeat;
  background-size: cover;
  background-clip: content-box;
  border: 1rem double #fff;
  margin-left: -10rem;
}

.circle-4 {
  background: url(images/landing/circle-8-img.png) center no-repeat;
  background-size: cover;
  background-clip: content-box;
  border: 0.7rem double #9b0e0e;
  margin-right: -10rem;
}

.main-circle {
  width: 55rem;
  height: 55rem;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  transition: width 0.2s, height 0.2s;
  border: 0.7rem double #fff;
}

.main-circle:hover {
  width: 75rem;
  height: 75rem;
}

.main-circle img {
  mix-blend-mode: color-dodge;
  position: relative;
  top: 0;
  left: 0;
  transition: left 2s, top 2s;
}
/* End of Animated Circles */

/* Featured Text */
.featured-text {
  font-size: 2rem;
  color: #fff;
  text-transform: uppercase;
  width: 0;
  word-wrap: break-word;
  line-height: 3.5;
  position: sticky;
  top: 0;
}

.featured-text-1 {
  margin: 0 auto 0 10rem;
}

.featured-text-2 {
  margin: 0 10rem 0 auto;
}
/* End of Featured Text */

/* End of Section 1 */

/* Section 2 */
.section-2 {
  position: relative;
  padding: 10rem 10rem 15rem 10rem;
}

/* About Me Text */
.about-me-text {
  width: 80%;
  margin: auto;
}

.about-me-text span {
  font-family: 'Poppins', sans-serif;
  font-size: 15rem;
  font-weight: bold;
  color: #aaa;
  letter-spacing: 0.5rem;
  line-height: 0.9;
  text-shadow: 0 0 1rem red;
  position: relative;
  mix-blend-mode: color-dodge;
}

@keyframes aboutMeTextAnim {
  0% {
    color: #aaa;
    top: 0;
  }
  10%,
  90% {
    color: #fff;
    top: 2rem;
  }
  100% {
    color: #aaa;
    top: 0;
  }
}
/* End of About Me Text */

/* Section 2 Main Button */
.section-2 .main-btn {
  left: 50%;
  bottom: -5rem;
  transform: translateX(-50%);
}
/* End of Section 2 Main Button */
/* End of Section 2 */

/* Section 3 */
.section-3 {
  width: 100%;
  height: 100%;
  padding: 10rem 0;
  margin-top: 10rem;
  position: relative;
}

/* Projects */
.projects {
  flex-wrap: wrap;
  padding-bottom: 15rem;
}

.project {
  width: 40rem;
  height: 45rem;
  overflow: hidden;
  margin: 5rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  position: relative;
  border: 0.2rem dotted #fff /* #9b0e0e */;
  border-radius: 0.5rem;
  cursor: pointer;
  perspective: 20rem;
  transition: opacity 0.5s;
}

.project img {
  width: 90%;
  object-fit: cover;
  position: absolute;
  top: 2rem;
  opacity: 0.5;
  pointer-events: none;
  transition: top 4s 0.2s, opacity 0.2s;
}

.project:nth-child(odd):hover img {
  animation: oddImgAnim 4s 0.2s;
  opacity: 1;
}

@keyframes oddImgAnim {
  0% {
    transform: rotateY(0);
  }
  25% {
    transform: rotateY(-2deg) rotateX(2deg);
  }
  50% {
    transform: rotateY(2deg) rotateX(-2deg);
  }
  100% {
    transform: rotateY(0);
  }
}

.project:nth-child(even):hover img {
  animation: evenImgAnim 4s 0.2s;
  opacity: 1;
}

@keyframes evenImgAnim {
  0% {
    transform: rotateY(0);
  }
  25% {
    transform: rotateY(2deg) rotateX(-2deg);
  }
  50% {
    transform: rotateY(-2deg) rotateX(2deg);
  }
  100% {
    transform: rotateY(0);
  }
}

/* Big Project Image */
.project-img-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden scroll;
  z-index: 100;
  scroll-behavior: smooth;
  animation: imgWrapperAnim 1s forwards;
}

@keyframes imgWrapperAnim {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.project-img {
  width: 100%;
  border-radius: 0.5rem;
  padding: 7rem 20rem;
  opacity: 0.9;
  display: block;
  transform-origin: top center;
  animation: imgAnim 1s 1s both;
}

@keyframes imgAnim {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
/* End of Big Project Image */

/* Project Hide Button */
.project-hide-btn {
  position: fixed;
  top: 5rem;
  right: 5rem;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  z-index: 200;
  transform: scale(0);
  visibility: hidden;
}

.change.project-hide-btn {
  transform: scale(1);
  visibility: visible;
  transition: transform 0.5s;
}
/* End of Project Hide Button */
/* End of Projects */

/* Projects Button */
.projects-btn {
  left: 50%;
  transform: translateX(-50%);
}

.projects-btn .main-btn-line {
  transition: all 0.5s;
}

.change > .main-btn-line:nth-child(1) {
  transform: rotateZ(45deg) translateX(-0.65rem);
}

.change > .main-btn-line:nth-child(2) {
  transform: rotateZ(-45deg) translateX(0.65rem);
}

.change > .main-btn-line:nth-child(3) {
  transform: rotateZ(90deg) translateX(-0.5rem);
  border-left: 0.1rem solid #fff;
  border-right: none;
}
/* End of Projects Button */
/* End of Section 3 */

/* Section 4 */
.section-4 {
  position: relative;
  width: 100%;
}

/* Services */
.services-wrapper {
  width: 100%;
  flex-direction: column;
}

.service {
  width: 70%;
  margin: 2rem 0;
  border-bottom: 0.5rem solid #fff; /* #9b0e0e; */
}

.service-btn {
  width: 100%;
  position: relative;
  display: block;
  height: 15rem;
}

.service-btn span {
  font-family: 'Poppins', sans-serif;
  font-size: 10rem;
  font-style: italic;
  font-weight: bold;
  color: #fff; /* #9b0e0e; */
  position: absolute;
  right: 0;
  pointer-events: none;
  transition: right 0.5s;
}

.service-text {
  font-size: 5rem;
  color: #fff;
  letter-spacing: 0.1rem;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
}

.change.service-text {
  height: 15rem;
  visibility: visible;
  opacity: 1;
  transition: height 0.5s, opacity 0.5s 0.5s;
}
/* End of Services */
/* End of Section 4 */

/* Section 5 */
.section-5 {
  position: relative;
  height: 100vh;
  flex-direction: column;
}

/* Form */
.form-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 6rem;
  font-weight: 400;
  color: #fff; /* #9b0e0e; */
  letter-spacing: 0.3rem;
  margin-bottom: 3rem;
  transition: opacity 0.3s;
}

.contact-form {
  flex-direction: column;
}

.contact-form-input {
  width: 60rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #fff; /* rgba(255, 255, 255, 0.1); */
  border: 0.1rem solid grey;
  font-size: 1.7rem;
  font-weight: bold;
  color: #07acf3;
  letter-spacing: 0.1rem;
  height: 5rem;
}

.contact-form-textarea {
  height: 20rem;
  resize: none;
}

.form-submit-btn {
  width: 20rem;
  height: 5rem;
  background-color: #07acf3;
  border: none;
  align-self: flex-start;
  font-size: 1.8rem;
  color: #fff;
}

/* Form Validation */
.message {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 0 auto 1rem 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
}

.error.message {
  visibility: visible;
  opacity: 1;
}
/* End of Form Validation */
/* End of Form */

/* Slideshow */
.slideshow {
  display: flex;
  width: 50rem;
  margin-top: 10rem;
  padding: 0 2rem;
}

.slideshow-link {
  width: 20%;
  filter: brightness(0.5);
  transition: filter 1.5s;
}

.slideshow-link:nth-child(1),
.slideshow-link:nth-child(5) {
  transition: width 0.5s, opacity 0.5s;
}

.slideshow-link:nth-child(3) {
  transition: filter 0.5s;
}

.slideshow-link img {
  width: 100%;
  padding: 0 1rem;
}

.faded-out {
  opacity: 0;
  width: 0;
}

.light {
  filter: brightness(1.5);
}
/* End of Slideshow */
/* End of Section 5 */

/* Responsive */
@media (max-width: 1500px) {
  .circle {
    width: 15rem;
    height: 15rem;
  }

  .main-circle {
    width: 45rem;
    height: 45rem;
  }

  .main-circle:hover {
    width: 55rem;
    height: 55rem;
  }

  .main-circle img {
    width: 160%;
    height: 160%;
  }

  .about-me-text span {
    font-size: 11rem;
  }

  .section-4 {
    margin-bottom: 10rem;
  }

  .service-btn span {
    font-size: 9rem;
  }

  .service-text {
    font-size: 4rem;
  }
}

@media (max-width: 1350px) {
  .main-btn {
    width: 12.5rem;
    height: 12.5rem;
  }

  .circle {
    display: none;
  }

  .progress-bar {
    right: 1rem;
    bottom: 0;
  }

  .about-me-text span {
    font-size: 10rem;
  }
}

@media (max-width: 1150px) {
  html {
    font-size: 55%;
  }

  .mouse-circle,
  .mouse-dot {
    display: none;
  }

  .navbar-link {
    margin: 0 2rem;
  }

  .main-circle {
    width: 40rem;
    height: 40rem;
  }

  .main-circle:hover {
    width: 45rem;
    height: 45rem;
  }

  .about-me-text span {
    font-size: 7.5rem;
  }

  .project-img {
    padding: 7rem 11rem;
  }

  .project-hide-btn {
    right: 2rem;
  }

  .service-btn {
    height: 12rem;
  }

  .service-btn span {
    font-size: 8rem;
  }

  .service-text {
    font-size: 3.5rem;
  }

  .slideshow {
    margin: 5rem 0;
  }
}

@media (max-width: 900px) {
  .menu-icon {
    right: -4rem;
  }

  .navbar-link {
    font-size: 1.5rem;
    margin: 0 1rem;
  }

  .featured-text-1 {
    margin: 0 auto 0 5rem;
  }

  .featured-text-2 {
    margin: 0 5rem 0 auto;
  }

  .section-heading {
    left: 5rem;
  }

  .about-me-text span {
    font-size: 5.5rem;
    color: #fff;
  }

  .service-btn {
    height: 9rem;
  }

  .service-btn span {
    font-size: 6rem;
  }

  .service-text {
    font-size: 3.2rem;
  }
}

@media (max-width: 700px) {
  html {
    font-size: 50%;
  }

  .contact-form-input {
    width: 50rem;
  }
}

@media (max-width: 550px) {
  html {
    font-size: 40%;
  }

  .main-circle img {
    width: 180%;
    height: 180%;
  }

  .service-btn span {
    font-size: 4.5rem;
  }

  .service-text {
    font-size: 3rem;
    color: #fff;
  }

  .contact-form-input {
    width: 40rem;
  }

  .slideshow {
    width: 45rem;
  }

  .slideshow-link img {
    padding: 0 1.1rem;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 35%;
  }

  .logo {
    font-size: 1.7rem;
    top: 13rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .navbar {
    justify-content: center;
    padding: 0;
  }

  .main-circle {
    width: 38rem;
  }

  .main-circle:hover {
    width: 42rem;
  }

  .main-circle img {
    width: 200%;
    height: 200%;
  }

  .form-heading {
    font-size: 5rem;
  }
}
/* End of Responsive */
