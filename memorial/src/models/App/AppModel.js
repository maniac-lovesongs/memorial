import AWSConnectorModel from "./AWSConnectorModel.js";

/**************************************************************/
class AppModel {
    constructor() {
        this.aws = new AWSConnectorModel(this);
        this.panels = {};
        this.listeners = [];
    }
    /**************************************************************/
    setPanel(p, v) {
        this.panels[p] = v;
        const prop = "panels." + p;
        this.notifyListeners(prop);
    }
    /***************************************************************/
    unregisterListener(id) {
        if (id >= 0 && id < this.listeners.length) {
            this.listeners[id] = null;
        }
    }
    /***************************************************************/
    registerListener(func) {
        this.listeners.push(func);
        return this.listeners.length - 1;
    }
    /***************************************************************/
    notifyListeners(propsChanged) {
        for (let i = 0; i < this.listeners.length; i++) {
            const listener = this.listeners[i];
            if (listener !== null && listener !== undefined) {
                listener(propsChanged);
            }
        }
    }
}

export default AppModel; 