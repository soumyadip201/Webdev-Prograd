![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | JS | PROGRAD-CONTACTS

## [Link to PROGRAD-PROMISE-CONTACTS Github Repository](https://github.com/prograd-org/lab-js-prograd-contacts)

We have learned promise works in JavaScript. Now lets work with our promise lab, applying all of the concepts we have just learned.


### Progression 1: PROMISE ME
Create a promise call which fetches data from (https://jsonplaceholder.typicode.com/users). When the promise gets resolved display the data in browser console.

### Progression 2: SHOW MY PROMISE
Once the promise gets resolved, Display it in the form of list as shown in the output.
Use the code snippet below for reference
```
var player='<h2>Lists of Users</h2>';
                    result.forEach(function(user) {
                     player+=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`
```
### Progression 3: REJECT ME
When the promise call is rejected then throw an error.

```
(error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
```

## Output

Here is a screenshot of the output.


![Screenshot (39)](https://user-images.githubusercontent.com/81064540/159163161-fe621837-5ca4-4349-a4d1-acb079159c32.png)


![Screenshot (40)](https://user-images.githubusercontent.com/81064540/159163166-04b92839-d3c5-4ad4-8c48-e6f1aa1ea6df.png)


![Screenshot (41)](https://user-images.githubusercontent.com/81064540/159163168-65fba7b1-bea7-4e3f-93d0-c70a8131e507.png)


![Screenshot (43)](https://user-images.githubusercontent.com/81064540/159163174-5cd32469-f259-4d1b-a646-f35e2d6f84ac.png)


Happy Coding Prograd❤️

