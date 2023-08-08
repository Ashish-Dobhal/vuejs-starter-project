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
