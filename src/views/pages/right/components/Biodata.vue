<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const textElement = ref<HTMLParagraphElement | null>(null)
const typingSpeed = 0.02 // seconds per character
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
  gsap.to(cursor, {
    opacity: 0,
    duration: cursorBlinkSpeed,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // Animate typing
  const chars = originalText.split('')
  let currentText = ''
  
  chars.forEach((char, i) => {
    gsap.delayedCall(i * typingSpeed, () => {
      currentText += char
      textContainer.textContent = currentText
      
      // Scroll to keep text in view
      textElement.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  })
})
</script>

<template>
  <div class="container-fluid p-5">
    <h1 class="mb-0">Hi!</h1>
    <h2>My name is Ardian.</h2>
    <p ref="textElement" class="typing-text">
      {{ text }}
    </p>
    <h2>Tech Stack</h2>
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
}
h1 {
  font-size: 7vh;
}
p {
  font-weight: 500;
}
</style>