# Vuex Store

- A "store" is basically a container that holds your application state.
- vuex store is reactive.
- cannot directly mutate the store state. change statte can be done via commiting mutations.This ensures every state change leaves a track-able record,
  and enables tooling that helps us better understand our applications.

## simple vuex store

```javascript
import { createApp } from "vue"
import { createStore } from "vuex"

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

const app = createApp({
  /* your root component */
})

// Install the store instance as a plugin
app.use(store).use(router)
```

## mapState helper

```js
// state object as defined in the store.js file
state(): {
  return {
    count: 0,
    daysSinceLastUpdated: '22/12/2022'
}
}
// in the component file
computed: {
  localComputed () { /* ... */ },
  // mix this into the outer object with the object spread operator
  ...mapState({
    count: state => state.count,
    daysSinceLastUpdated: 'daysSinceLastUpdated',

    // combine state and the component data/props
    daysPlusCount(state) {
      return state.count + this.someComponentData
    }
  })
}

// OR

computed: {
  localComputed () { /* ... */ },
  // only state mapping
  ...mapState(['count', 'daysSinceLastUpdated'])
}
```

## Vuex getters

```js
// store definition
const store = createStore({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  /*
   * Getters will receive the `state` as their 1st argument:
   * The getters will be exposed on the store.getters object, and you access values as properties.
   */
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    },
    todoWithId: (state) => (id) => {
      return state.todos.filter((todo) => todo.id === id)
    }
  }
})

// component definition

{
  computed: {
    2ndTodo() {return store.getters.getTodoById(2)}
    doneTodos() { return store.getters.doneTodos}
  }
}

```

## The mapGetters helper

```js
// in component definition

{
  computed: {
    ...mapGetters(["2ndTodo", "doneTodos"]),
    componentComputedProp: { return 'component computed props'}
  }
}
```

## mutations

- change Vuex store is by committing a mutation.
- each mutation has a string type and a handler.
- mutation handler functions must be synchronous

```js
// mutation-types.js
export const MUTATION_CONST = 'SOME_MUTATION'
 mutations: {
    increment (state) {
      // mutate state
      state.count++
    },
    // mutation with paylaod
    incrementWithPayload (state, n) {
    state.count += n
  },
   [MUTATION_CONST] (state) {
      // mutate state
    }
 }
// component logic
store.commit('increment')
store.commit('incrementWithPayload',2)
// object style commit
store.commit({
  type: 'increment',
  amount: 10
})
```

## mapMutations

```javascript
export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // map `this.increment()` to `this.$store.commit('increment')`
      // `mapMutations` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // map `this.add()` to `this.$store.commit('increment')` // so can map mutation to a local method
    })
  }
```

## Actions

- Instead of mutating the state, actions commit mutations.
- Actions can contain arbitrary asynchronous operations.

```javascript
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    increment(context) {
      context.commit("increment")
    },
    decrement({ commit, state }, object) {
      commit("decrement")
    }
  }
})

// component
store.dispatch("increment")
store.dispatch("incrementAsync", payloadObject)

export const default = {
  methods: {
    ...mapActions(['increment', 'incrementBy']),
    ...mapActions({add: 'increment'})
  }
}
```

## example of a action with a async api call

```js
actions: {
  checkout ({ commit, state }, products) {
    // save the items currently in the cart
    const savedCartItems = [...state.cart.added]
    // send out checkout request, and optimistically
    // clear the cart
    commit(types.CHECKOUT_REQUEST)
    // the shop API accepts a success callback and a failure callback
    //Note we are performing a flow of asynchronous operations, and recording the side effects (state mutations) of the action by committing them.
    shop.buyProducts(
      products,
      // handle success
      () => commit(types.CHECKOUT_SUCCESS, response),
      // handle failure
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }
}

```

## action composition

```js

// assuming `getData()` and `getOtherData()` return Promises
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for `actionA` to finish
    commit('gotOtherData', await getOtherData())
  }
}

```

## store modules for a scalable store architecture

```javascript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { sessionStartTime(state, getters, rootState){
    return state.sessionStartTime
  } }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```

## namespaced modules https://vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules

- By default, actions and mutations are still registered under the global namespace
- this allows multiple modules to react to the same action/mutation type. Getters are also registered in the global namespace by default.
- one must be careful not to define two getters with the same name in different, non-namespaced modules, resulting in an error.
- If you want your modules to be more self-contained or reusable, you can mark it as namespaced with namespaced: true.
- When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at.
- getters

  ```js
  someGetter(state, getters, rootState, rootGetters)
  ```

- actions

  ```js
  someAction({ dispatch, commit, getters, rootGetters })
  ```

- mutations

- the imports in the component can also be simplifed by modifying the mapper helper passing the path as the first arguement
- This can avoid passing the complete path for each and every computed property

```js
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  }),
  ...mapGetters('some/nested/module', [
    'someGetter', // -> this.someGetter
    'someOtherGetter', // -> this.someOtherGetter
  ])
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
```

- more examples of mapper fns

```js
computed: {
    mapGetters('jobs', {totalJobs: 'totalJobs'})
    mapGetters('user', ['session','acountId']})

}
```

```js
getters: {
  incrementModule(state, getters, rootState, rootGetters)
}
```

## Advanced read thoughs

- The action can commit more than 1 mutation at a time, it just implements the business logic, it doesn't care about data changing (which is managed by mutation)
- https://stackoverflow.com/questions/39299042/vuex-action-vs-mutations
- [Preserving state while SSR](https://vuex.vuejs.org/guide/modules.html#preserving-state)

## application structure bst practises

```
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module

```

- [Vuex shopping cart example](https://github.com/vuejs/vuex/tree/main/examples/classic/shopping-cart) cloned in laptop for reference

- strict: true mode: throws errors when vuejs app is mutated outside the mutation handlers.

- strict: process.env.NODE_ENV !== 'production'
  Strict mode runs a synchronous deep watcher on the state tree for detecting inappropriate mutations, and it can be quite expensive when you make large amount of mutations to the state. Make sure to turn it off in production to avoid the performance cost.

- [Testing Vuex](https://vuex.vuejs.org/guide/testing.html)

- gotcha: module reuse

```js
const MyReusableModule = {
  state: () => ({
    foo: "bar"
  })
}

/**
 * instead of using the pattern below. below pattern is pattern for app wide store
 */
const MainModule = {
  state: {
    foo: "bar"
  }
}
```

- [Vuex is-it-bad-practice-to-access-vuex-state-properties-directly-without-getters-a](https://stackoverflow.com/questions/47231044/is-it-bad-practice-to-access-vuex-state-properties-directly-without-getters-a)

- Using mutations / actions / getters etc is a suggested best practice but doesn't mean it has to be followed.
- It could be that you just want to read a value from the state at which point it might be a little over-kill to write a getter for it.
- I personally always try to use actions / getters to keep things consistent as it can get messy when you start mutating the state without a centralised system.
- An example would be if you had a user module in the state. You might be tempted to just need the username so $store.state.user.username but I would always prefer to expose the user via getUser and access it on the component via user.username.
- A pro for being able to access the state directly is a watch:

## [Comments from a stackoverflow article on this topic](https://stackoverflow.com/questions/47191231/why-is-state-visible-to-components/47191438#47191438)

```js
  watch: {
    '$store.state.user' (to, from) {
      console.log('I changed!')
  }
}
```

- This would allow you to know whenever the user state changed but again, if you used $this.$store.dispatch('setUser', myUser) you could do the same in the action.
- I think the key here is be consistent, pick a way and use it but following best practice is always recommended.

# [Vuex best practices pointers](https://dev.to/timothyokooboh/vuex-best-practices-45dd)

- go throught he topic in this url to understand the advance vuex concepts https://frontendmasters.com/courses/vuex/

- handling store load within vuex example. but this doesnt neccesarily is the best practise for it
- read up more on handling load state in vuejs

```js
/*
 * source article: https://stackoverflow.com/questions/56587777/wait-for-vuex-value-to-load-before-loading-component
 */
// enums.js
export default {
  INIT: 0,
  LOADING: 1,
  ERROR: 2,
  LOADED: 3
}

import ENUM from "@/enums";
// store.js
export default new Vuex.Store({
  state: {
    apiState: ENUM.INIT,
    accounts: [],
    // ...other state
  },
  mutations: {
    updateAccounts (state, accounts) {
      state.accounts = accounts;
      state.apiState = ENUM.LOADED;
    },
    setApiState (state, apiState) {
      state.apiState = apiState;
    },
  },
  actions: {
    loadAccounts ({commit) {
      commit('setApiState', ENUM.LOADING);
      someFetchInterface()
        .then(data=>commit('updateAccounts', data))
        .catch(err=>commit('setApiState', ENUM.ERROR))
    }
  }
});
```

## [Vue js Routing + state management interesting thread](https://stackoverflow.com/questions/51495461/how-to-prevent-any-routing-before-some-async-data-in-vuex-store-has-loaded)

- how-to-prevent-any-routing-before-some-async-data-in-vuex-store-has-loaded
- answer

```js
init ({ dispatch }) {       // Could also be async and use await instead of return
  return Promise.all([
    dispatch('getUserSession'), // Using another action
    dispatch('auth/init'),      // In another module
    fetch('rest/1pi/endpoint')         // With the native fetch API
    // ...
  ])
}

// In your router initialization code
const storeInit = store.dispatch('init')
// Before all other beforeEach
router.beforeEach((to, from, next) => {
  storeInit.then(next)
    .catch(e => {
      // Handle error
    })
})
```
