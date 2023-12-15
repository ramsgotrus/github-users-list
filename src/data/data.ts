import { createMemoryHistory } from 'history';

export interface User {
    id: number;
    login: string;
    node_id: string;
    avatar_url: string;
    gravatar_id?: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string,
    type: "User",
    site_admin: boolean
}

export interface Organization {
    login: string,
    id: number,
    node_id: string,
    url: string,
    repos_url: string,
    events_url: string,
    hooks_url: string,
    issues_url: string,
    members_url: string,
    public_members_url: string,
    avatar_url: string,
    description: string
}


export interface userDetails {

}

export const USERS: User[] = [
    {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "defunkt",
        "id": 2,
        "node_id": "MDQ6VXNlcjI=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": false
    }
]

export const ORGANIZATIONS: Organization[] = [
    {
        "login": "toml-lang",
        "id": 7966854,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjc5NjY4NTQ=",
        "url": "https://api.github.com/orgs/toml-lang",
        "repos_url": "https://api.github.com/orgs/toml-lang/repos",
        "events_url": "https://api.github.com/orgs/toml-lang/events",
        "hooks_url": "https://api.github.com/orgs/toml-lang/hooks",
        "issues_url": "https://api.github.com/orgs/toml-lang/issues",
        "members_url": "https://api.github.com/orgs/toml-lang/members{/member}",
        "public_members_url": "https://api.github.com/orgs/toml-lang/public_members{/member}",
        "avatar_url": "https://avatars.githubusercontent.com/u/7966854?v=4",
        "description": "Tom's Obvious, Minimal Language (and friends)"
      }
]

export const FOLLOWERS: User[] = [
    {
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "pjhyett",
        "id": 3,
        "node_id": "MDQ6VXNlcjM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pjhyett",
        "html_url": "https://github.com/pjhyett",
        "followers_url": "https://api.github.com/users/pjhyett/followers",
        "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
        "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
        "organizations_url": "https://api.github.com/users/pjhyett/orgs",
        "repos_url": "https://api.github.com/users/pjhyett/repos",
        "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pjhyett/received_events",
        "type": "User",
        "site_admin": false
    }
]

export const REPO: Repo[] = [
    {
        "id": 26899533,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
        "name": "30daysoflaptops.github.io",
        "full_name": "mojombo/30daysoflaptops.github.io",
        "private": false,
        "owner": {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io",
        "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks",
        "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams",
        "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks",
        "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}",
        "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events",
        "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}",
        "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}",
        "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags",
        "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages",
        "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers",
        "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors",
        "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers",
        "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription",
        "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}",
        "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",
        "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",
        "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",
        "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}",
        "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}",
        "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments",
        "created_at": "2014-11-20T06:42:06Z",
        "updated_at": "2023-04-05T16:47:06Z",
        "pushed_at": "2014-11-20T06:42:47Z",
        "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git",
        "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git",
        "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git",
        "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io",
        "homepage": null,
        "size": 1197,
        "stargazers_count": 7,
        "watchers_count": 7,
        "language": "CSS",
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 4,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
    
        ],
        "visibility": "public",
        "forks": 4,
        "open_issues": 0,
        "watchers": 7,
        "default_branch": "gh-pages"
      }
]

export interface Repo {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        id: number;
        login: string;
        node_id: string;
        avatar_url: string;
        gravatar_id?: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string,
        type: "User",
        site_admin: boolean
    },
    html_url: string,
    description: string | null,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: string | null,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string | null,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_discussions: boolean,
    forks_count: number,
    mirror_url: null,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: {} | null,
    allow_forking: boolean,
    is_template: boolean,
    web_commit_signoff_required: boolean,
    topics: [

    ],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}

export const promise = Promise.resolve()

export const navigator = {
    createHref: jest.fn(() => promise),
    push: jest.fn(() => promise),
    replace: jest.fn(() => promise),
    go: jest.fn(() => promise),
    block: jest.fn(() => promise)
}
