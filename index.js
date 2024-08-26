const usernameEl=document.getElementById("profile");
const SearchbtnEl=document.getElementById("searchBtn");
const profileContainerEl=document.getElementById("profileContainer");
const loadingEl=document.getElementById("loading");
const firstSectionEl=document.getElementById("firstSection");
const getprofile=(profile)=>{
     return `
          <div class="profile-card">
            <div class="footer">
            <img src="${profile.avatar_url}" style="width:150px; height:150px; border-radius: 50%;"srcset="">
            <div class="username">
                <h2>${profile.login}</h2>
                <h3>${profile.name}</h3>
            </div>
            <a href="${profile.html_url}">
            <button class="btn2">Check Profile</button>
            </a>
            </div>
            <div class="header">
               <h2>About</h2>
               <br>
               <h3>${profile.bio} </h3>
            </div>
            <div class="last">
                <h2>
                <div>Followers</div>
                 ${profile.followers}
               </h2>
                <h2>
                <div>Following</div>
                ${profile.following}
               </h2>
                <h2>
                <div>Repos</div>
                ${profile.public_repos}
               </h2>
            </div>
            </div>
        </div>
     `;
 }

async function getData() {
    const url = "https://api.github.com/users";
    const username=usernameEl.value;
    loadingEl.innerText="loading....";
    loadingEl.style.color="black";
    try {
      const response = await fetch(`${url}/${username}`);
      const json = await response.json();
      if(json.login){
        loadingEl.innerText="";
        profileContainerEl.innerHTML=getprofile(json);
        // firstSectionEl.classList.add("hide");
      }
      else{
        loadingEl.innerText="Not Found";
        loadingEl.style.color="red";
        profileContainerEl.innerText="";
      }
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  SearchbtnEl?.addEventListener("click",getData);
