//Introduction to GitHub:
//GitHub is a web-based platform used to store, manage, and collaborate on software projects using Git, a version control system.

//Why Use GitHub?

//GitHub helps developers:

//--->Track changes to code over time
//--->Collaborate with others on projects
//--->Back up code in the cloud
//--->Review and manage contributions
//--->Organize project documentation and tasks

// git model

//1. Working Directory (Working Area)
//This is your actual project folder on your computer.

//Where you:

//--->Create files
//--->Edit code
//--->Delete files

//2.Staging Area (Index)

//This is a temporary holding area before saving changes.

// You decide: Which changes should go into next commit

//3.Local Repository
//This is your local Git history stored on your computer

//After commit, changes are saved permanently here

//4.Remote Repository (Central Repository)

//This is the online version of your project (GitHub)

//Used for:

//--->Sharing code
//--->Collaboration
//--->Backup

// git work flow
//Working Directory
//        ↓ (git add)
//Staging Area
//        ↓ (git commit)
//Local Repository
//        ↓ (git push)
//Remote Repository (GitHub)

//Reverse:
//Remote → Local → Working (git pull)


//Repository (Repo): A repository is a project folder that contains:

//--->Source code
//--->Documentation
//--->Configuration files
//--->Project history

//Git: Git is the version control system that:

//--->Records changes
//--->Allows reverting to previous versions
//--->Supports parallel development through branches

//Commit : A commit is a snapshot of your project at a specific point in time.

//Branch: A branch is an independent line of development.

//Common workflow:

//main branch → stable code
//feature-login branch → new feature development

//Pull Request (PR) : A pull request is a request to merge changes from one branch into another.

//It allows:

//--->Code review
//--->Discussion
//--->Automated testing

// clone: Cloning creates a copy of a GitHub repository on your local computer.

//Push and Pull

//Push: Upload local changes to GitHub.

//git push

//Pull: Download the latest changes from GitHub.

//git pull

//---->Basic GitHub Workflow
//Create a repository on GitHub.
//Clone it to your computer.
//Make changes.
//Commit the changes.
//Push the changes to GitHub.
//Open a pull request if collaborating.
//Merge the changes.

// git work flow
//---->git init
//---->git add .
//---->git commit -m "first commit"
//---->git remote add origin <url>
//---->git push -u origin main


//GitHub Revision and Practice

//| Command    | Purpose                                         |
//| ---------- | ----------------                                |
//| git init   | Start project                                   |
//| git add    | Stage changes                                   |
//| git commit | Save changes                                    |
//| git status | Check state                                     |
//| git push   | Upload to GitHub                                |
//| git pull   | Download updates                                |
//| git branch | Create branch                                   |
//| git merge  | Combine branches                                |
//| git fetch  | to check wht changed without affecting your code|
//|git restore |
//| git reset  | 
//| get show   |
//|git log     |

