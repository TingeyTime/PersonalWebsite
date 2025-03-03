<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string, href: string, description: string }[] = [
    {
        title: 'About',
        href: '#about',
        description: '',
    },
    {
        title: 'Experience',
        href: '#experience',
        description: '',
    },
    {
        title: 'Contact',
        href: '#contact',
        description: '',
    },
]
</script>

<template>
    <div class="flex justify-center m-6">
        <div class="flex w-2/3 max-w-5xl min-w-sm rounded-2xl bg-muted">
            <div class="flex justify-between max-w-5xl m-4 px-2 w-full">
                <!-- Logo and Name -->
                <div>
                    <NuxtLink to="/"
                        class="flex items-center space-x-4 px-4 rounded-2xl hover:bg-primary transition-colors ease-linear">
                        <Logo />
                        <span class="uppercase font-bold whitespace-nowrap text-xl">Nathan Tingey</span>
                    </NuxtLink>
                </div>

                <!-- Navigation Links -->
                <div>
                    <NavigationMenu class="flex md:hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Menu
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid">
                                        <li v-for="component in components" :key="component.title">
                                            <NavigationMenuLink as-child>
                                                <a
                                                :href="component.href"
                                                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                                                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    {{ component.description }}
                                                </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu class="hidden md:flex">
                        <NavigationMenuList class="flex items-center">
                            <NavigationMenuItem v-for="component in components" :key="component.title">
                                <NavigationMenuLink>
                                    <a :href="component.href"
                                        class="block uppercase select-none rounded-2xl px-4 py-2 transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        {{ component.title }}
                                    </a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    </div>
</template>
