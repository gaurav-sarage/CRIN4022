let output_2 = document.querySelector(".output");

let btns_2 = Array.from(document.querySelectorAll("button"));

console.log(btns_2);

btns_2.map((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target.textContent);

    switch (e.target.textContent) {
      case "reset":
        output_2.textContent = "";
        break;

      case "del":
        output_2.textContent = output_2.textContent.slice(0, -1);
        break;

      case "=":
        try {
          output_2.textContent = eval(output_2.textContent);
        } catch {
          output_2.textContent = "Error!";
        }
        break;

      default:
        output_2.textContent += e.target.textContent;
        break;
    }
  });
});
