import {render, screen} from "@testing-library/vue"
import MainNav from '@/components/MainNav.vue';

describe("MainNav", ()=>{
    it("displays company name", () => {
        render(MainNav, 
            // GOTCHA: this leads to a tight coupling bw the component and its tests. ie if the internal name of the data.company change that leads to abroken test thus can be avoided unless required
        //     {
        //     data() {
        //         return { company: "Dobbs Diaries"}
        //     }
        // }
        )
        // the screen.debug() spits out the html for the current screen
        // screen.debug();
        const companyName = screen.getByText("Dobbs Diaries");
        expect(companyName).toBeInTheDocument();
    })
})
