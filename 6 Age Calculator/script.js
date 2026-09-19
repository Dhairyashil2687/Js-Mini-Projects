const dobInput = document.getElementById("dob");
const calcBtn = document.querySelector("button");
const result = document.getElementById("result");

function calculateAge() {
  const today = new Date();
  const dob = new Date(dobInput.value);

  if (!dobInput.value) {
    result.innerText = "⚠️ Please select DOB!";
    return;
  }

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  // Adjust days
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // Adjust months
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Remark based on age
  let remark = "";
  if (ageYears <= 12) {
    remark = "You are a child, enjoy your learning and playtime!";
  } else if (ageYears <= 19) {
    remark = "You are a teenager, dream big and believe in yourself!";
  } else if (ageYears <= 25) {
    remark = "You are young, your future is full of hope and opportunities!";
  } else if (ageYears <= 35) {
    remark = "You are young, keep building your future!";
  } else if (ageYears <= 49) {
    remark = "You are in your prime, keep moving forward with hope and confidence!";
  } else if (ageYears <= 59) {
    remark = "You are experienced, your wisdom can guide others.";
  } else if(ageYears<=99) {
    remark = "You are a senior, enjoy the true essence of life.";
  } else{
    remark = "Still alive? Honestly, at this point, you're just flexing on history books."
  }

  // Clear previous result and show new one
  result.innerText = "";
  result.innerText = `Your Age: ${ageYears} Years, ${ageMonths} Months and ${ageDays} Days\n \n ${remark}`;
}

calcBtn.addEventListener("click", calculateAge);
