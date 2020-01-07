import { Component } from '@angular/core';

@Component({
  selector: 'example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent {
  constructor() {}
  public res = '';

  ///////////////////// CallBack ////////////////////////////

  useCallBack(userId, CallBack) {
    setTimeout(() => {
      const fackeData = {
        id: userId,
        name: 'Tzion'
      };
      CallBack(fackeData);
    }, 1000);
  }
  cb = data => {
    this.res =
      'This is the data using callBack: ' +
      'ID: ' +
      data.id +
      'name: ' +
      data.name;
  }

  /////////////////////// Promise ///////////////////////////
  fetchData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulating a 10% fail to check the catch method
        if (Math.random() < 0.1) {
          reject('Sorry Failed!');
        }
        const fackeData = {
          id: userId,
          name: 'Tzion'
        };
        resolve(fackeData);
      }, 1000);
    });
  }
  usePromise(id) {
    this.fetchData(id)
    .then(user => {
      this.res = 'This is the data using promis: ' + 'ID: ' + user.id + ' name: ' + user.name ;
    })
    .catch(err => {
      console.log(err);
    });
  }
    ////////////////////////// Async //////////////////////////
}
