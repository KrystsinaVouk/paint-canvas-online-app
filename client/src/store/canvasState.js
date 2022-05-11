import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas = null;
    redoList = [];
    undoList = [];

    constructor() {
        makeAutoObservable(this)
    }
    setCanvas(canvas){
        this.canvas = canvas;
    }

    pushToUndo(undo){
        this.undoList.push(undo);
    }

    pushToRedo(redo){
        this.redoList.push(redo);
    }

    undo(){
        let cxt = this.canvas.getContext('2d');
        if (this.undoList.length > 0) {
            let dataURL = this.undoList.pop();

            this.pushToRedo(this.canvas.toDataURL());

            let image = new Image();
            image.src = dataURL;
            image.onload = () => {
                cxt.clearRect(0,0, this.canvas.width, this.canvas.height);
                cxt.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            }
        } else {
            cxt.clearRect(0,0, this.canvas.width, this.canvas.height);
        }
    }

    redo(){
        let cxt = this.canvas.getContext('2d');
        if (this.redoList.length > 0) {
            let dataURL = this.redoList.pop();

            this.pushToUndo(this.canvas.toDataURL());

            let image = new Image();
            image.src = dataURL;
            image.onload = () => {
                cxt.clearRect(0,0, this.canvas.width, this.canvas.height);
                cxt.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            }
        } else {
            alert('Sorry, Redo is impossible');
        }
    }
}

export default new CanvasState();
