<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const textElement = ref<HTMLParagraphElement | null>(null)
const isTypingComplete = ref(false)
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
          }
        },
      );
    }
  });
}
</script>

<template>
  <div class="container-fluid p-5">
    <h1 class="mb-0">Hi!</h1>
    <h2>My name is Ardian.</h2>
    <p ref="textElement" class="typing-text">
      {{ text }}
    </p>
    <div v-show="isTypingComplete" class="tech-stack">
      <h2>Tech Stack</h2>
      <div class="text-center mt-5">
        <div class="row gap-1">
          <div class="col">
            <ILogosVue class="icon-tech"></ILogosVue>
          </div>
          <div class="col">
            <ILogosNuxtIcon class="icon-tech"></ILogosNuxtIcon>
          </div>
          <div class="col">
            <ILogosJavascript class="icon-tech"></ILogosJavascript>
          </div>
          <div class="col">
            <ILogosTypescriptIcon class="icon-tech"></ILogosTypescriptIcon>
          </div>
          <div class="col">
            <ILogosTailwindcssIcon class="icon-tech"></ILogosTailwindcssIcon>
          </div>
          <div class="col">
            <ILogosVuetifyjs class="icon-tech"></ILogosVuetifyjs>
          </div>
          <div class="col">
            <ILogosBootstrap class="icon-tech"></ILogosBootstrap>
          </div>
          <div class="col">
            <ILogosSpringIcon class="icon-tech"></ILogosSpringIcon>
          </div>
          <div class="col">
            <ILogosGraphql class="icon-tech"></ILogosGraphql>
          </div>
          <div class="col">
            <ILogosLaravel class="icon-tech"></ILogosLaravel>
          </div>
          <div class="col">
            <ILogosPostgresql class="icon-tech"></ILogosPostgresql>
          </div>
          <div class="col">
            <ILogosMysql class="icon-tech"></ILogosMysql>
          </div>
          <div class="col">
            <ILogosGitIcon class="icon-tech"></ILogosGitIcon>
          </div>
          <div class="col">
            <ILogosGitlabIcon class="icon-tech"></ILogosGitlabIcon>
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
  min-height: 200px;
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
  font-weight: 500;
}

.icon-tech {
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
}
</style>