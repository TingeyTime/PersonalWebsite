<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
</script>

<template>
    <div class="grid">
        <header>
            <Navbar/>
        </header>
        <div class="w-full p-8">
            <main>
                <body>
                    <slot />
                </body>
            </main>
        </div>
        <footer>

        </footer>
    </div>
</template>