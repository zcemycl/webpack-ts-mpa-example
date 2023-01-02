export interface IModel {
  data: number[];
  onDataChanged: (data: number[]) => void;
  bindDataChanged: (callback: (data: number[]) => void) => void;
  _commit: (data: number[]) => void;
  addRandom: (num: number) => void;
}

export class Model implements IModel {
  data: number[];
  onDataChanged: (data: number[]) => void;
  constructor() {
    this.data = [];
    this.onDataChanged = (data: number[]) => {
      console.log(data);
    };
  }

  bindDataChanged(callback: (data: number[]) => void) {
    this.onDataChanged = callback;
  }

  _commit(data: number[]) {
    this.onDataChanged(data);
  }

  addRandom(num: number) {
    this.data.push(num);
    this._commit(this.data);
  }
}
