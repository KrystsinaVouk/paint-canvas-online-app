import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null;
    disabled = true;

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
        this.disabled = false;
    }
    setFillColor(color) {
        this.tool.fillColor = color
    }
    setStrokeColor(color) {
        this.tool.strokeColor = color
    }
    setLineWidth(width) {
        this.tool.lineWidth = width
    }
}

export default new ToolState();
