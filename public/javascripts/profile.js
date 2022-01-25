let requestURL = './data/user.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const userInfo = request.response;
    populateHeader(userInfo);
    showInfo(userInfo);
  }

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['userName'];
    myH1.style.fontSize = "28px";
    myH1.style.margin = "30px 0 30px 30px";
    header.appendChild(myH1);

    const myImg = document.createElement('img');
    myImg.src = obj['userImg'];
    myImg.style.width = "150px";
    myImg.style.height = "150px";
    myImg.style.borderRadius = "50%";
    myImg.style.objectFit = "cover";
    header.appendChild(myImg);

    const myName = document.createElement('p');
    myName.textContent = 'Username: ' + obj['loginName'] 
    myName.style.marginTop = "20px";
    myName.style.fontSize = "18px";
    header.appendChild(myName);
}


function showInfo(obj) {
    const habits = obj['tasks'];
  
    for (let i = 0; i < habits.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('img');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
    

      myArticle.style.display = "flex";
      myArticle.style.justifyContent = "center";
      myArticle.style.alignItems = "center";
      myArticle.style.flexDirection = "column";
      myArticle.style.margin = "20px 0 50px 0";

      myH2.src = habits[i].category;
      myH2.style.width = "50px";
      myH2.style.height = "50px";
      myH2.style.padding = "10px"
      ;
      myPara1.textContent = 'Title: ' + habits[i].title;
      myPara2.textContent = 'Commitment: ' + habits[i].commit;
      myPara3.textContent = 'Details: ';

      myList.style.marginLeft = "20px";
  
      const myDetails = habits[i].details;
      for (let j = 0; j < myDetails.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = myDetails[j];
        listItem.style.fontSize = "16px";
        listItem.style.color = "#585858"
        listItem.style.margin = "5px";
        listItem.style.textAlign = "center";
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const userProfileText = request.response; // get the string from the response
  const userProfile = JSON.parse(userProfileText); // convert it to an object
  populateHeader(userProfile);
  showInfo(userProfile);
}

// let myObj = { name: "Chris", age: 38 };
// myObj
// let myString = JSON.stringify(myObj);
// myString