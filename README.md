
# Smart Ready to (Web APP)

 Smart Ready to - Smart Ready to  Web APP is a React/Redux project built with Webpack 2 & Babel. 
 
 
## Project setup and development build

To build development project and start working follow these steps:

* In root of the project run `yarn install`
* Run `yarn start` in same directory, app will be built in `/dev` directory 
* Access development version of app on [localhost:5555](http://localhost:5555)
 
## Distribution build

* Run `yarn run build` in the root directory, app will be built in `/dist` directory 


## Release management and git workflow

We are using this development methodology described here: [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model)
with couple of modifications:

* there are 4 types of branches: master (development), release (candidate), hotfix and stable (production).
* we use [semver](http://semver.org) version model. Release branches start with minor/major version number bump, and patch number is bumped
before each merge to stable (production) branch. Hot-fix branches start with patch number bump.
* main development branch is master branch. Specific feature branches start and merge here.
* feature branches should start with `feature-` prefix.
* release (staging) branches are named with `release-` prefix, year and count number. Example: `release-2016.1`, `release-2016.2`, ..
Only bug fixes should be committed to release branch. 
* hot-fix branches are named with `hotfix-` suffix. When completed, should be merged into stable and current release branch, and master if needed.
* production branch is named `stable`. Only merges from hot-fix and release branches should be applied on 'stable' branch.
* after merge, stable branch is tagged with full semver version number of current release on branch.


### Feature branch workflow:

Create new branch:

`$ git checkout -b feature-name-of-feature origin/master`

When done merge changes into master branch:

`$ git checkout master`

`$ git pull --rebase origin master`

`$ git merge --no-ff feature-name-of-feature`

`$ git branch -d feature-name-of-feature` [optional]

`$ git push origin master`


### Release branch workflow:

Create new branch and bump major/minor version:

`$ git checkout -b release-2017.01 origin/master`

`$ npm --no-git-tag-version version minor`

`$ git commit -a  -m "update version number"`

When stable needs to be updated, and after some bug fixes, first bump patch version. Then 
merge changes to stable branch for deployment and tag with proper version. If needed, also merge back into master:

`$ npm --no-git-tag-version version patch`
                                         
`$ git commit -a  -m "update version number"`

`$ git checkout stable`

`$ git merge --no-ff release-2017.01`

`$ git tag -a v1.1.0 -m "v1.1.0"`

`$ git push --follow-tags origin stable`

`$ git checkout master` [optional]

`$ git pull --rebase origin master` [optional]

`$ git merge --no-ff release-2017.01` [optional]

`$ git push  origin master` [optional]

Additional bug fixes can be applied to release branch at any time and workflow repeated.


### Hot-fix branch workflow:

Create new branch and bump patch version:

`$ git checkout -b hotfix-name-of-hotfix origin/master`

`$ npm --no-git-tag-version version patch`
                                         
`$ git commit -a  -m "update version number"`

When done, merge changes to stable branch for deployment and tag with proper version. Also
merge back into master, and if needed into any active release branch:

`$ git checkout stable`

`$ git merge --no-ff hotfix-name-of-hotfix`

`$ git tag -a v1.1.1 -m "v1.1.1"`

`$ git push --follow-tags origin stable`

`$ git checkout master`

`$ git pull --rebase origin master` 

`$ git merge --no-ff hotfix-name-of-hotfix`

`$ git push origin master` 

`$ git checkout release-name-of-release` [optional]

`$ git pull --rebase origin release-name-of-release` [optional]

`$ git merge --no-ff hotfix-name-of-hotfix` [optional]

`$ git push origin release-name-of-release` [optional]

Version number fixing may be required on branches after merging.


### Stable branch workflow:

Create new stable branch and tag with current version number:

`$ git checkout -b stable origin/master`

`$ git tag -a v1.1.0 -m "v1.1.0"`

`$ git push --follow-tags origin stable`

## Other

### ESLint 

If it is absolutely necessary and justified to avoid some rule use `// eslint-disable-line NAME-OF-RULE`, 
 `// eslint-disable-next-line NAME-OF-RULE` or for block of code `/*eslint-disable */ /*eslint-enable */`
