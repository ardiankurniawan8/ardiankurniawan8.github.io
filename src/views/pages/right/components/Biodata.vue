<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const textElement = ref<HTMLParagraphElement | null>(null)
const isTypingComplete = ref(false)
const isTechStackComplete = ref(false)
const typingSpeed = 0.01 // seconds per character
const cursorChar = '|'
const cursorBlinkSpeed = 0.5 // seconds

const text = ref(`I am a Software Engineer with 7+ years of experience in full-stack development, specializing in APIs, web, and mobile applications. Skilled in Java, JavaScript, Typescript, Python, Php and frameworks like Spring Boot, Laravel (Lumen), Vue.js, and Nuxt.js. Strong expertise in OOP, functional programming, database design, algorithms, and software design patterns. Passionate about building high-performance, scalable, and maintainable applications through clean, optimized code and modern best practices.`)
onMounted(() => {
  if (!textElement.value) return

  const originalText = textElement.value.textContent || ''
  textElement.value.textContent = '' // Clear the text initially

  // Create text container and cursor
  const textContainer = document.createElement('span')
  const cursor = document.createElement('span')
  cursor.className = 'cursor'
  cursor.textContent = cursorChar
  textElement.value.append(textContainer, cursor)

  // Animate cursor blinking
  const blinkAnimation = gsap.to(cursor, {
    opacity: 0,
    duration: cursorBlinkSpeed,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // Animate typing
  const chars = originalText.split('')
  let currentText = ''

  // Create a timeline for better control
  const typingTimeline = gsap.timeline({
    onComplete: () => {
      animateTechStack() // Call the function to animate tech stack after typing is complete
      // Optionally stop the cursor blinking when done
      // blinkAnimation.kill()
      gsap.set(cursor, { opacity: 1 }) // Make cursor solid
    }
  })

  chars.forEach((char, i) => {
    typingTimeline.to({}, {
      duration: typingSpeed,
      onComplete: () => {
        currentText += char
        textContainer.textContent = currentText
        textElement.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    })
  })

})

function animateTechStack() {
  gsap.to(".tech-stack", {
    opacity: 0,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      isTypingComplete.value = true // Set typing complete state
      gsap.fromTo(".tech-stack",
        { opacity: 0 },
        {
          opacity: 1, duration: 0.5, ease: "power2.out",
          onComplete: () => {
            isTechStackComplete.value = true // Set tech stack complete state
            const cols = document.querySelectorAll('.col')
            gsap.fromTo(cols, 
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.7,
              stagger: {
                each: 0.2,
                from: "start" // Try "start", "end", or "center"
              },
              ease: "power2.out"
            })
          }
        },
      );
    }
  });
}

</script>

<template>
  <div class="container-fluid p-5">
    <h1 class="mb-0 mt-3">Hi!</h1>
    <h3>My name is Ardian.</h3>
    <p ref="textElement" class="typing-text">
      {{ text }}
    </p>
    <div v-show="isTypingComplete" class="tech-stack mt-3">
      <h3>Tech Stack</h3>
      <p class="subtext">Languages, frameworks, and tools I use to build scalable applications</p>
      <div v-show="isTechStackComplete" class="text-center">
        <div class="row gap-1">
          <div class="col">
            <button v-b-popover.focus.bottom="'Vue JS'" class="btn btn-outline-info">
              <ILogosVue class="icon-tech"></ILogosVue>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Nuxt JS'" class="btn btn-outline-info">
              <ILogosNuxtIcon class="icon-tech"></ILogosNuxtIcon>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Javascript'" class="btn btn-outline-info">
              <ILogosJavascript class="icon-tech"></ILogosJavascript>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Typescript'" class="btn btn-outline-info">
              <ILogosTypescriptIcon class="icon-tech"></ILogosTypescriptIcon>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Tailwind Css'" class="btn btn-outline-info">
              <ILogosTailwindcssIcon class="icon-tech"></ILogosTailwindcssIcon>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Bootstrap'" class="btn btn-outline-info">
              <ILogosBootstrap class="icon-tech"></ILogosBootstrap>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Java Springboot'" class="btn btn-outline-info">
              <ILogosSpringIcon class="icon-tech"></ILogosSpringIcon>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'GraphQL'" class="btn btn-outline-info">
              <ILogosGraphql class="icon-tech"></ILogosGraphql>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Laravel'" class="btn btn-outline-info">
              <ILogosLaravel class="icon-tech"></ILogosLaravel>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Postgresql'" class="btn btn-outline-info">
              <ILogosPostgresql class="icon-tech"></ILogosPostgresql>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Mysql'" class="btn btn-outline-info">
              <ILogosMysql class="icon-tech"></ILogosMysql>
            </button>
          </div>
          <div class="col">
            <button v-b-popover.focus.bottom="'Git'" class="btn btn-outline-info">
              <ILogosGitIcon class="icon-tech"></ILogosGitIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing-text {
  font-family: inherit;
  white-space: pre-wrap;
  min-height: 15vh;
  line-height: 1.6;
}

.cursor {
  opacity: 1;
  margin-left: 2px;
  font-size: 5rem;
}

h1 {
  font-size: 7vh;
}

p {
  font-weight: 400;
}

.icon-tech {
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
}

.btn-outline-info {
  border: 0;
}
</style>