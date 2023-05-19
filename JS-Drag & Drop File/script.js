let form = document.getElementById("form");
let fileInput = document.getElementById("fileInput");
let image = document.querySelector(".image");
let picture = document.getElementById("picture");
let imgName = document.querySelector(".imgName");
let imgSize = document.querySelector(".imgSize");
let removeBtn = document.querySelector(".remove");
let removeBtnDiv = document.querySelector(".removeButton")
let uploadBtn = document.querySelector(".uploadbtn")

uploadBtn.addEventListener("click", () => {
    fileInput.click();
})

document.querySelector("#form").addEventListener("click", function () {
    fileInput.click();
})

fileInput.addEventListener("change", (e) => {
    e.preventDefault();

    for (let i = 0; i < fileInput.files.length; i++) {

        let fileName = fileInput.files[i].name
        let fileSize = fileInput.files[i].size
        let docIndex = fileName.lastIndexOf(".") + 1;
        let ext = fileName.substring(docIndex).toLowerCase();

        if (ext === "png" || ext === "jpeg" || ext === "jpg") {
            picture.innerHTML = ""
            removeBtnDiv.style.display = "block"
            uploadBtn.style.margin = "5% 0 0 40%"
            let reader = new FileReader();
            reader.readAsDataURL(fileInput.files[i]);
            reader.addEventListener("load", () => {
                let img = new Image(150, 100);
                img.src = reader.result;
                fileInput.value = "";
                picture.appendChild(img);
                imgName.innerHTML = "File Name:" + " " + fileName;
                imgSize.innerHTML = "File Size:" + " " + fileSize + " " + "byte"
            });
        }
        else {
            alert("This is not an accepted file type!");
            fileInput.value = "";
        }
    }
    localStorage.setItem("Image", imgName);
});

removeBtn.addEventListener("click", () => {
    removeBtnDiv.style.display = "none";
    uploadBtn.style.margin = "14% 0 0 40%"
    picture.innerHTML = ""
    imgName.remove();
    imgSize.remove();
});