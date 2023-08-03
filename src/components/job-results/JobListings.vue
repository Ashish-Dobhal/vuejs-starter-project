<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <li class="mb-7 bg-white">
        <router-link to="/job/results/1"
          class="mx-auto rounded border border-solid border-brand-gray-2  hover:shadow-gray">
          <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
            <div class="flex flex-row">
              <h2 class="mb-2 text-2xl text-brand-black-1">Technical Program Manager, Augmented Reality</h2>
            </div>
            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <font-awesome-icon :icon="['fas', 'building']" class="ml-4 mr-3" />
                <span>Bobo</span>
              </div>
              <div class="mr-5">
                <font-awesome-icon :icon="['fas', 'fa-location-pin']" class="ml-4 mr-3" />
                <span>San Fransisco, CA, USA</span>
              </div>
              <div class="mr-5">
                <font-awesome-icon :icon="['fas', 'fa-chart-simple']" class="ml-4 mr-3" />
                <span>Medium</span>
              </div>
            </div>
          </div>
          <hr class="h-2px" />
          <div class="px-8 py-4">
            <div>
              <h3 class="mt-1 mb-2 font-semibold">Minimum Qualifications</h3>
              <div>
                <ul class="list-disc pl-8">
                  <li>Bachelors degree or equivalent experience</li>
                  <li>2 years of experience in program management.</li>
                  <li>Experience identifying and solving cross-functional and inter-team issues.</li>
                  <li>Experience with Augmented Reality devices.</li>
                </ul>
              </div>
            </div>
          </div>
        </router-link>

      </li>
    </ol>
  </main>
</template>
<script>
export default {
  name: "JobListing"
}
</script>
