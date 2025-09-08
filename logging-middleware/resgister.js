async function register() {
  const response = await fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
email: "shraddhaagnihotri529@gmail.com",
name: "Shraddha Agnihotri",
mobileNo:"6386472980",
githubUsername: "ShraddhaAgni3",
rollNo: "2301641529001",
accessCode: "sAWTuR"
}),
  });

  const text = await response.text(); // get raw response
  console.log("Raw response:", text);

  try {
    const data = JSON.parse(text);
    console.log("Parsed JSON:", data);
  } catch (err) {
    console.error("Response is not JSON, maybe an error page.");
  }
}

register();
