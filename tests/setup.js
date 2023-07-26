/* the lesson talks abt theinstalled packages and the need for the threee dependencies
* @testing-library/jest-dom: provides dom related matchers thus extending our existing matchers from the jest-dom
* cleanup: cleanup the component on test completion
* https://interactivebrokers.udemy.com/course/vue-masterclass/learn/lecture/35041834#content
*/

import {cleanup} from "@testing-library/vue"
import matchers from "@testing-library/jest-dom"
import {expect, afterEach} from "vitest"

expect.extend(matchers)

// specifies a fn that runs after each test
afterEach(() => {
    // cleanup cleans the rendered component
    cleanup()
});


