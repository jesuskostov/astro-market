<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-neutral-950 pt-16 pb-8 relative overflow-hidden">
    <!-- Decorative stars -->
    <div class="absolute inset-0 starfield opacity-20"></div>
    
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 relative z-10">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
              <span class="text-primary-900 font-serif text-lg font-bold">M</span>
            </div>
            <span class="text-xl font-serif text-secondary-400">MarketOracle</span>
          </div>
          <p class="text-neutral-400 mb-6 max-w-sm">
            Bridging ancient Babylonian celestial wisdom with modern financial markets. Predictions and insights by Hristo Yamalov.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-secondary-500 hover:text-primary-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-secondary-500 hover:text-primary-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-secondary-500 hover:text-primary-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-serif text-secondary-400 mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/#about" class="text-neutral-400 hover:text-secondary-400 transition-colors">About Us</router-link>
            </li>
            <li>
              <router-link to="/#how-it-works" class="text-neutral-400 hover:text-secondary-400 transition-colors">How It Works</router-link>
            </li>
            <li>
              <router-link to="/#pricing" class="text-neutral-400 hover:text-secondary-400 transition-colors">Pricing</router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-neutral-400 hover:text-secondary-400 transition-colors">Blog</router-link>
            </li>
            <li>
              <router-link to="/#faq" class="text-neutral-400 hover:text-secondary-400 transition-colors">FAQ</router-link>
            </li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h4 class="text-lg font-serif text-secondary-400 mb-4">Legal</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-neutral-400 hover:text-secondary-400 transition-colors">Terms of Service</a>
            </li>
            <li>
              <a href="#" class="text-neutral-400 hover:text-secondary-400 transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="text-neutral-400 hover:text-secondary-400 transition-colors">Refund Policy</a>
            </li>
            <li>
              <a href="#" class="text-neutral-400 hover:text-secondary-400 transition-colors">Disclaimer</a>
            </li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-lg font-serif text-secondary-400 mb-4">Contact</h4>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:contact@marketoracle.com" class="text-neutral-400 hover:text-secondary-400 transition-colors">contact@marketoracle.com</a>
            </li>
            <li class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
              </svg>
              <span class="text-neutral-400">Global Headquarters:<br>1234 Celestial Way<br>Babylon, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Disclaimer -->
      <div class="border-t border-primary-800 pt-8 mt-8 text-sm text-neutral-500 relative z-10">
        <p class="mb-4">
          <strong>DISCLAIMER:</strong> MarketOracle provides celestial-based market insights by Hristo Yamalov for informational purposes only. Our service does not constitute financial advice, and all investment decisions should be made in consultation with a qualified financial advisor. Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal.
        </p>
        
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {{ currentYear }} MarketOracle. All rights reserved.</p>
          <p class="mt-2 md:mt-0">Designed with cosmic wisdom and modern technology.</p>
        </div>
      </div>
    </div>
  </footer>
</template>