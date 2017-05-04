const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}


function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
 document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  let getTitle = document.getElementById('title').value
  let getBody = document.getElementById('body').value
  const postData = {
    title: getTitle,
    body: getBody
  };
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    mode: 'cors',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch( `${baseApi}repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).
    then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  const token = "1691e8e3527612f1ce7875a4cfab2e0cdd911b15"
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
