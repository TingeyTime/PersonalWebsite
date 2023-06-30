<template>
    <HeroSection>
        <div class="bg-transparent backdrop-blur-3xl mx-[150px] py-[50px] rounded-3xl">
            <div class="">
                <img class="rounded-full w-96 h-96 mx-auto" src="@/assets/img/me/bw_circle.png">
            </div>
            <div class="text-center p-24">
                <h1 class="text-4xl font-extrabold tracking-wide sm:text-4xl">
                    Nathan Tingey
                </h1>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <h2 class="text-2xl font-bold sm:text-2xl">
                    <ul>
                        <li>Information Technology</li>
                        <li>UX Design</li>
                        <li>Platform Engineering</li>
                        <li>Data Analysis</li>
                    </ul>
                </h2>
            </div>
        </div>
    </HeroSection>
    <BaseSection>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <!-- <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"> 
                    Announcing our next round of funding.
                    <a href="#" class="font-semibold text-indigo-600">
                        <span class="absolute inset-0" aria-hidden="true">
                        </span>
                        Read more
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> -->
            </div>
            <div class="text-center">
                <h1 class="text-4xl pb-8 font-bold tracking-wide text-white sm:text-6xl">
                    About Me
                </h1>
                <p class="mt-6 text-lg leading-8 text-slate-400">
                    An interest in technology led me to User Experience Design. After starting in and creating the role of Accessibility Specialist at BYU Continuing Education, I realized the power of great design and its impact on our lives. This realization perfectly reflects my lifelong interest in excellent products and the design elements that set them apart from their competition. Soon afterward, I switched my major from Computer Engineering to Information Technology with a personal emphasis on Human-Computer Interactions. This change has allowed me to continue developing a skill set I'd already built and use that skill set to ensure the success of each of the projects I've worked on.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                </a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                </a>
                </div>
            </div>
        </div>
    </BaseSection>
</template>

<script>
definePageMeta({
  layout: "default",
});

export default {
  name: "index"
};
</script>