const user_social = { 
github: "flaviojcf",
facebook : "flavio.jose.1422",
instagram :"flavio_jcosta",
twitter : "Flaviojcosta_",
}

function change_social_media_links(){
    for(let li of social_links.children){
        const social = (li.getAttribute('class'))
        li.children[0].href =`https://${social}.com/${user_social[social]}`
    }
    
}
change_social_media_links()

function get_git(){
    const url = `https://api.github.com/users/${user_social.github}`
    fetch(url).then(response =>response.json()).then(data => {
        user_name.textContent = data.name
        user_bio.textContent = data.bio
        eu.src = data.avatar_url
        link_git.href = data.html_url
        user_login.textContent = data.login   
    })
    
}

get_git()

