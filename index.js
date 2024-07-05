require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "krishnamanc",
  "id": 135037835,
  "node_id": "U_kgDOCAyDiw",
  "avatar_url": "https://avatars.githubusercontent.com/u/135037835?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/krishnamanc",
  "html_url": "https://github.com/krishnamanc",
  "followers_url": "https://api.github.com/users/krishnamanc/followers",
  "following_url": "https://api.github.com/users/krishnamanc/following{/other_user}",
  "gists_url": "https://api.github.com/users/krishnamanc/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/krishnamanc/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/krishnamanc/subscriptions",
  "organizations_url": "https://api.github.com/users/krishnamanc/orgs",
  "repos_url": "https://api.github.com/users/krishnamanc/repos",
  "events_url": "https://api.github.com/users/krishnamanc/events{/privacy}",
  "received_events_url": "https://api.github.com/users/krishnamanc/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Manchala Krishna Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Data Science Professional",
  "twitter_username": null,
  "public_repos": 48,
  "public_gists": 0,
  "followers": 4,
  "following": 4,
  "created_at": "2023-05-30T14:18:06Z",
  "updated_at": "2024-06-30T12:39:03Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.send('Login Page')
})

app.get('/signup', (req, res) =>{
    res.send('<h1>Signup Page</h1>')
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ${port}')
})