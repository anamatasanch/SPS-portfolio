// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Fetches comments from servlet
 */
 async function getComments() {
   const response = await fetch('/data');
   const comments = await response.json();

   console.log(comments);

   const commentsElement = document.getElementById('comments-container');

   for (i = 0; i<comments.length; i++){
      commentsElement.appendChild(
      createListElement(comments[i]));
   }
 }

 /** Creates an <li> element containing text. */
function createListElement(comment) {
  const liElement = document.createElement('li');
  var date = new Date(comment.datePosted);

  liElement.innerText = date.toLocaleDateString();
  liElement.classList.add('collection-item');
  liElement.setAttribute("id", comment.id);

  const buttonElement = document.createElement('button');
  buttonElement.innerText = "Translate";
  buttonElement.classList.add('waves-effect', 'waves-light', 'btn-flat');
  buttonElement.setAttribute("id", comment.id);
  liElement.appendChild(buttonElement);
  buttonElement.onclick = function() { requestTranslation(this.id); };

  const brElement = document.createElement('br');
  liElement.appendChild(brElement);

  const paragElement = document.createElement('p');
  liElement.appendChild(paragElement);
  paragElement.innerText += comment.text;

  const divElement = document.createElement('div');
  liElement.appendChild(divElement);
  divElement.setAttribute("id", comment.id);

  return liElement;
}
