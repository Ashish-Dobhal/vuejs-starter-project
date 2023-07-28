# What are the Vue Lifecycle Hooks

- First, let’s look at a diagram of the Vue 3 lifecycle hooks in both the Options API and Composition API. This should give a high level overview of what’s going on before we can dive down into the details.

-Essentially, each main Vue lifecycle event is separated into two hooks that are called right before that event and then right after.

- There are four main events (8 main hooks) that you can utilize in your Vue app.

  - Creation — runs on your component’s creation
  - Mounting — runs when the DOM is mounted
  - Updates — runs when reactive data is modified
  - Destruction — runs right before your element is destroyed.

onBeforeMount – called before mounting begins
onMounted – called when component is mounted
onBeforeUpdate – called when reactive data changes and before re-render
onUpdated – called after re-render
onBeforeUnmount – called before the Vue instance is destroyed
onUnmounted – called after the instance is destroyed
onActivated – called when a kept-alive component is activated
onDeactivated – called when a kept-alive component is deactivated
onErrorCaptured – called when an error is captured from a child component
activated: https://learnvue.co/articles/vue-lifecycle-hooks-guide#activated-and-onactivated
