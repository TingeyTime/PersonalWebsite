<template>
  <div>
    <Appbar></Appbar>
    <BaseSection>
      <p>Stuff</p>
    </BaseSection>
    <!-- <div class="container mx-auto px-8 py-4">
      <div class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
        <div
            id="sidebar"
            class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white rounded-[12px]"
          >
          Sidebar
        </div>
        <div class="content w-full p-12 rounded-[12px]">
          Content
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Appbar from '../components/appbar.vue';
import BaseSection from '@/components/base/section.vue';
export default {
    name: "IndexPage",
    components: {
      Appbar,
      BaseSection
    }
}
</script>

<style>
  body {
    background: #6a6a6a;
  }
</style>
