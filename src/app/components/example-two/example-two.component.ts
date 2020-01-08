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
    }, 500);
  }
  cb = data => {
    this.res =
      'This is the data using callBack: ' +
      'ID: ' +
      data.id +
      ' name: ' +
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
      }, 500);
    });
  }
  usePromise(id) {
    this.fetchData(id)
    .then(user => {
      this.res = 'This is the data using promise: ' + 'ID: ' + user.id + ' name: ' + user.name ;
    })
    .catch(err => {
      this.res = err;
    });
  }
    //////////////////// Async /////////////////////
    async useAsync(userId) {
      try {
        const user = await this.fetchData(userId);
        this.res = 'This is the data using promise: ' + 'ID: ' + user.id + ' name: ' + user.name ;
      } catch
        (err) {
          this.res = err;
      }
    }
}
