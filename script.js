const makeList = document.getElementById("makeList");
let make = makeList.value;


makeList.addEventListener("change", () => {
    make = makeList.value;
    getModels(make);
});

async function getModels() {
    //  https://vpic.nhtsa.dot.gov/api/Home/Index/LanguageExamples
    // get the list of models for the selected make

    const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/"

      const params = "format=json"  
      const response = await fetch(url + make+"?"+params); 
      const model = await response.json()
      appendModels(model.Results)
      
}

function appendModels(models) {
    const uiElem = document.getElementById("modelList");
    uiElem.innerHTML = "";
    for (const model of models) {
        const liElem = document.createElement("li");
        liElem.innerText = model.Model_Name;
        uiElem.appendChild(liElem);
        console.log(model.Model_Name);
    }
}


