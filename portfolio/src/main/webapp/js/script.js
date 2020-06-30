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
      createListElement(comments[i].text, comments[i].datePosted));
   }
 }

 /** Creates an <li> element containing text. */
function createListElement(text, datePosted) {
  const liElement = document.createElement('li');
  var date = new Date(datePosted);
  liElement.innerText = text + "  " + date.toLocaleDateString();
  liElement.classList.add('collection-item');
  return liElement;
}
