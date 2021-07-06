// set-repo-link
const setRepoLink = () => {
    const sideTab = document.querySelector(".sidetab a")

    const repoURL = `https://github.com/chinsun9${location.pathname}`
    sideTab.href = repoURL
}

setRepoLink()
