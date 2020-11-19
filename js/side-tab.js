// set-repo-link


const setRepoLink = () => {
    const side_tab = document.querySelector(".sidetab a")

    const repoURL = `https://github.com/chinsun9${location.pathname}` 
    side_tab.href = repoURL
}

setRepoLink()
