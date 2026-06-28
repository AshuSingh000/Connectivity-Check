let btn = document.querySelector("button");
let tex = document.querySelector("#result");

btn.addEventListener("click", checkconnectivity);

async function checkconnectivity() {
    let url = document.querySelector("#check").value;

    if(!url){
        result.innerText = "❌ Please enter a URL";
        result.style.color = "red";
        return;
    }
    try{
        result.innerText = "⏳ Checking...";
        result.style.color = "black";

        let response = await fetch(url, { method: "GET" });

        if (response.ok) {
            result.innerText = `✅ Connected (Status: ${response.status})`;
            result.style.color = "green";
        } else {
            result.innerText = `⚠️ Reachable but error (Status: ${response.status})`;
            result.style.color = "orange";
        }
    }catch(error){
         result.innerText = "❌ Not Connected / Invalid URL";
        result.style.color = "red";
    }
} 