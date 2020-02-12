const married = "No";
const gender = "Female";
const education = "Not Graduate";
const encode_categorical_data = data => {
  if (data === "Yes" || data === "Male" || data === "Graduate") {
    let data = 1;
    return data;
  } else if (data === "No" || "Female" || data === "Not Graduate") {
    let data = 0;
    return data;
  }
};
console.log(encode_categorical_data(education));
