/**
 * 
 * => Working Directory => Stage => Local Repository =>>> Remote Repository.
 * 
 * 
 * => download git application from online throw Internet browser.
 * => install git apllication in your own computer or laptop.
 * 
 * => github account create using own rules.
 * => create git repository (Remote/Cloud).
 * 
 * => git config --global user.name "username777"
 * => git config --global user.email "example@gmail.com"
 * 
 * => git config --global --list
 * => git config --global --unset user.name
 * => git config --global --unset user.email
 * 
 * => git config --list
 * => q (exit use q key)
 * 
 * 
 * => root directory and create .ssh folder (mkdir .ssh)
 * => cd .ssh
 * => ssh-keygen -o -t rsa -C "example@gmail.com"
 * => enter press (3 times).
 * => github account ssh key added using id_rsa.pub file
 * 
 * 
 * => git clone http://www.exampleUrl.com
 * => git init (optional)
 * 
 * 
 * 
 * => git add fileName
 * => git add . (current directory)
 * => git add * (current directory without deleted files)
 * 
 * => git add -A (all files and folder)
 * => git add --all (all files and folder)
 * 
 * => git add *.js (all .js extension files)
 * 
 * 
 * 
 * 
 * => git reset 
 * 
 * => git commit -m "something message here"
 * => git reset HEAD~
 * 
 * => git reset --hard
 * => git revert (using forward and safety for team users)
 * 
 * 
 * => git branch (Check branch name list)
 * => git branch branchName (Create branch)
 * => git checkout branchName (Switch branch)
 * => git checkout -b development (Create and switch development branch)
 * 
 * => git merge main -m "Merging on development with main branch"
 * 
 * 
 * => git push origin development (upload Remote repository)
 * => git push origin main (upload development branch to Remote repository)
 * 
 * => git fetch (download changes)
 * => git merge (fetch active in local repository)
 * 
 * => git pull (download and active directory changes)
 * 
 * 
 * 
 * 
 * 
 * 
 * => Others
 * 
 * => git restore fileName.js
 * => git rm --cached fileName.js
 * => git diff
 * 
 * 
 * => git checkout commit_id
 * => git checkout main
 * 
 * => git reset --soft HEAD^
 * => git reset HEAD^
 * => git reset --hard HEAD^
 * 
 * 
 * => touch .gitignore
 * => gitignore file (.env, node_modules/, temp/, *.js, !app.js, card?.jsx)
 * 
 */
