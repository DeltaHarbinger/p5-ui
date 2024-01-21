import * as components from "./components";

const componentList = components?.default

const P5UI = {
    install: (app) => {
        Object.keys(componentList).forEach(name => {
            app.component(name, componentList[name])
        })
    }
}

export default P5UI